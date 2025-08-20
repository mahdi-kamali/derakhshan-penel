import { IMAGE_URL } from "@/common/urls/urls";
import styles from "./styles.module.scss";
import Icon from "../Icon/Icon";
import { IFile } from "@/types/Gallery/gallery.types";
import { dateToJalai } from "@/utils/Converters";

interface IProps {
  file: IFile;
  className?: string;
  loading?: () => void;
  onDelete?: () => void;
}
export default function Image(props: IProps) {
  const { className, onDelete = () => {}, file } = props;

  const imageClass = [styles.image, className].join(" ");

  const placeHolder = "/images/place-holder/image-holder.png";

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
            <span>{file.size / 100000} MB</span>
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
          />
        </div>
      </div>
    </div>
  );
}
