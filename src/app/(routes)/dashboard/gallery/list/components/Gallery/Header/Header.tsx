import { IGallery } from "@/types/Gallery/gallery.types";
import styles from "./styles.module.scss";
import Icon from "@/components/UI/Icon/Icon";
import { useState } from "react";
import { Field, Grid } from "@/components/UI";
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
      <Grid width={editing.active ? "20rem" : "7rem"}>
        <Grid expanded={editing.active === false}>
          <div className={styles.title}>{title}</div>
        </Grid>
        <Grid expanded={editing.active}>
          <div className={styles.edit}>
            <Field.Text
              variant='light'
              title='اسم گالری'
              icon={<Icon icon='solar:gallery-bold' />}
              onChange={(event) => {
                const value = event.target.value;
                setEditing((prev) => ({ ...prev, value: value }));
              }}
              name='name'
              type='text'
              value={editing.value}
            />
            <Icon
              icon='el:ok-sign'
              fontSize={"1.5rem"}
              onClick={() => {
                ShowQuestion({
                  onConfirm() {
                    UpdateGallery({
                      ...gallery,
                      title: editing.value,
                    });
                    setEditing({
                      value: editing.value,
                      active: false,
                    });
                  },
                });
              }}
            />
          </div>
        </Grid>
      </Grid>

      <div className={styles.buttons}>
        {editing.active === false && (
          <>
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
          </>
        )}
        {editing.active && (
          <Icon
            icon='zondicons:close-solid'
            color='var(--color-danger)'
            onClick={() =>
              setEditing((prev) => ({ ...prev, active: !prev.active }))
            }
          />
        )}
      </div>
    </div>
  );
}
