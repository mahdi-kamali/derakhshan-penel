import { IGallery } from "@/types/Gallery/gallery.types";
import styles from "./styles.module.scss";
import Icon from "@/components/UI/Icon/Icon";
import { useState } from "react";
import { Grid } from "@/components/UI";
import { ShowQuestion } from "@/common/toast/toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  DeleteGalleryAPI,
  GetAllGalleriesAPI,
  UpdateGalleryAPI,
} from "@/services/Gallery.services";

interface IProps {
  gallery: IGallery;
}

export default function Header(props: IProps) {
  const client = useQueryClient();

  const { gallery } = props;
  const { title } = gallery;

  const { mutate: UpdateGallery, isIdle: UpdateGalleryLoading } = useMutation({
    mutationFn: UpdateGalleryAPI,
    onSuccess(data, variables, context) {
      client.invalidateQueries({
        queryKey: [GetAllGalleriesAPI.name],
      });
    },
  });

  const { mutate: DeleteGallery, isIdle: DeleteGalleryLoading } = useMutation({
    mutationFn: DeleteGalleryAPI,
    onSuccess(data, variables, context) {
      client.invalidateQueries({
        queryKey: [GetAllGalleriesAPI.name],
      });
    },
  });

  const [editing, setEditing] = useState({
    active: false,
    value: gallery.title,
  });

  const handleDelete = () => {
    ShowQuestion({
      onConfirm() {
        DeleteGallery(gallery);
      },
      onDeny() {},
    });
  };

  return (
    <div className={styles.header}>
      <Grid>
        <Grid expanded={editing.active === false}>
          <div className={styles.title}>{title}</div>
        </Grid>
        <Grid expanded={editing.active}>
          <div className={styles.edit}>
            <span>تغییر اسم این گالری : </span>
            <input
              type='text'
              defaultValue={editing.value}
              onChange={(event) => {
                const value = event.target.value;
                setEditing((prev) => ({ ...prev, value: value }));
              }}
            />
            <Icon
              icon='el:ok-sign'
              color='var(--color-success)'
              onClick={() => {
                UpdateGallery({
                  ...gallery,
                  title: editing.value,
                });
                setEditing({
                  value: editing.value,
                  active: false,
                });
              }}
            />
          </div>
        </Grid>
      </Grid>

      <div className={styles.buttons}>
        <Icon
          icon='line-md:edit-filled'
          color='var(--color-warning)'
          onClick={() =>
            setEditing((prev) => ({ ...prev, active: !prev.active }))
          }
        />
        <Icon
          icon='mingcute:delete-2-fill'
          color='var(--color-danger)'
          onClick={handleDelete}
        />
      </div>
    </div>
  );
}
