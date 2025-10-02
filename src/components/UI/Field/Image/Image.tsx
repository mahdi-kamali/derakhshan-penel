import React, { useEffect, useState } from "react";
import { Button, Modal, Image as GalleryImage } from "@/components/UI/index";
import { IField } from "../field.types";
import Base from "../Base/Base";
import { IMAGE_URL } from "@/common/urls/urls";
import { IFile, IGallery } from "@/types/Gallery/gallery.types";
import styles from "./styles.module.scss";
import Icon from "../../Icon/Icon";
import { GetAllGalleriesAPI } from "@/services/Gallery.services";
import useTable from "@/hooks/useTable";
interface IProps extends IField<IFile, IFile> {
  type: "single" | "multi";
}

export default function Image(props: IProps) {
  const { placeHodler } = props;
  const [show, setShow] = useState(false);
  const placeHolder = "/images/place-holder/image-holder.png";

  const [file, setFile] = useState<IFile>();

  const { data: galleries } = useTable<IGallery[]>({
    api: GetAllGalleriesAPI,
  });

  useEffect(() => {
    setFile(props.value);
  }, [props.value]);

  return (
    <Base {...(props as any)}>
      <div className={styles.field}>
        <div className={styles.preview}>
          <img
            loading='lazy'
            src={IMAGE_URL(file?.path || "")}
            onError={(e) => {
              e.currentTarget.src = placeHolder;
            }}
          />
        </div>
        <div className={styles.placeHolder}>
          <span>{placeHodler}</span>
        </div>
        <div className={styles.input}>
          <Button
            type='button'
            title=' انتخاب عکس'
            variant='success'
            icon={<Icon icon='gala:select' />}
            onClick={() => setShow(true)}
          />
        </div>
      </div>
      <Modal
        show={show}
        onClose={() => setShow(false)}>
        {() => {
          return {
            BODY: galleries.map((gallery) => {
              return (
                <div
                  className={styles.gallery}
                  key={gallery._id}>
                  <h1>{gallery.title}</h1>
                  <div className={styles.images}>
                    {gallery.images.map((image) => {
                      return (
                        <GalleryImage
                          key={image._id}
                          file={image}
                          gallery={gallery}
                          actions={{
                            select: {
                              enabled: true,
                              onChange(checked) {
                                if (checked) setFile(image);
                                else setFile(undefined);
                              },
                              checked: file?._id === image._id,
                            },
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            }),
            ACTIONS: [
              {
                type: "button",
                variant: "success",
                disabled: file === undefined,
                title: "ثبت",
                onClick() {
                  props.onChange(file!!);
                  setShow(false)
                },
              },
            ],
          };
        }}
      </Modal>
    </Base>
  );
}
