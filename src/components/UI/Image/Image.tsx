import { IMAGE_URL } from "@/common/urls/urls";
import styles from "./styles.module.scss";
import Icon from "../Icon/Icon";
import { IFile, IGallery } from "@/types/Gallery/gallery.types";
import { dateToJalai } from "@/utils/Converters";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  DeleteGalleryAPI,
  DeleteGalleryImageAPI,
  GetAllGalleriesAPI,
} from "@/services/Gallery.services";
import { Checkbox } from "@mui/material";
import { ShowQuestion } from "@/common/toast/toast";

interface IProps {
  gallery: IGallery;
  file: IFile;
  className?: string;
  loading?: () => void;
  actions?: {
    select?: {
      enabled?: boolean;
      onChange: (checked: boolean) => void;
      checked?: boolean;
    };
  };
}
export default function Image(props: IProps) {
  const queryClein = useQueryClient();

  const { className, file, gallery, actions } = props;

  const imageClass = [styles.image, className].join(" ");

  const placeHolder = "/images/place-holder/image-holder.png";

  const { mutate: DeleteMutate, isIdle } = useMutation({
    mutationFn: DeleteGalleryImageAPI,
    onSuccess(data, variables, context) {
      queryClein.invalidateQueries({
        queryKey: [GetAllGalleriesAPI.name],
      });
    },
  });

  return (
    <div className={imageClass}>
      <img
        loading='lazy'
        src={IMAGE_URL(file.path)}
        onError={(e) => {
          e.currentTarget.src = placeHolder;
        }}
      />

      <div className={styles.info}>
        <div className={styles.detail}>
          <div className={styles.row}>
            <small>نام : </small>
            <span>{file.filename}</span>
          </div>
          <div className={styles.row}>
            <small>حجم : </small>
            <span>{(file.size / 1000000).toFixed(2)} MB</span>
          </div>
          <div className={styles.row}>
            <small>تاریخ ایجاد : </small>
            <span>{dateToJalai(file.createdAt)}</span>
          </div>
        </div>
        <div className={styles.buttons}>
          <Icon
            icon='mingcute:delete-2-fill'
            color='var(--color-danger)'
            onClick={() => {
              ShowQuestion({
                onConfirm() {
                  DeleteMutate({
                    _id: file._id,
                    gallery_id: gallery._id,
                  });
                },
              });
            }}
          />
        </div>
        {actions && (
          <div className={styles.actions}>
            {actions.select?.enabled && (
              <label className={styles.select}>
                <Checkbox
                  checked={actions.select.checked}
                  onChange={(event, value) => actions.select?.onChange(value)}
                />
                <span>انتخاب کردن</span>
              </label>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
