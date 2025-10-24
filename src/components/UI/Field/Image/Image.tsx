import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  Image as GalleryImage,
  Grid,
} from "@/components/UI/index";
import { IField } from "../field.types";
import Base from "../Base/Base";
import { IMAGE_URL } from "@/common/urls/urls";
import { IFile, IGallery } from "@/types/Gallery/gallery.types";
import styles from "./styles.module.scss";
import Icon from "../../Icon/Icon";
import { GetAllGalleriesAPI } from "@/services/Gallery.services";
import useTable from "@/hooks/useTable";

// SINGLE
type SINGLE = Omit<IField<IFile, IFile>, "value" | "onChange"> & {
  type: "single";
  value: IFile;
  onChange: (file: IFile) => void;
  onSubmit?: (file: IFile) => void;
};

// MULTI
type MULTI = Omit<IField<IFile[], IFile[]>, "value" | "onChange"> & {
  type: "multi";
  values: IFile[];
  onChange: (files: IFile[]) => void;
  onSubmit?: (files: IFile[]) => void;
};

type IProps = {
  type: "single" | "multi";
} & (SINGLE | MULTI);

export default function Image(props: IProps) {
  const { type, onChange } = props;
  const [show, setShow] = useState(false);
  const placeHolder = "/images/place-holder/image-holder.png";

  const [file, setFile] = useState<IFile>();
  const [files, setFiles] = useState<IFile[]>([]);

  const { data: galleries, refetch } = useTable<IGallery[]>({
    api: GetAllGalleriesAPI,
  });

  useEffect(() => {
    if (type === "single") setFile(props.value);
    if (type === "multi") setFiles(props.values);
  }, [show, props]);

  useEffect(() => {
    if (show) refetch();
  }, [show]);

  function onFileChange(props: { file?: IFile; isChecked: boolean }) {
    if (type === "multi") return;
    const { isChecked, file } = props;
    if (isChecked) setFile(file);
    else setFile(undefined);
    onChange(file!);
  }

  function onFilesChange(props: { file?: IFile; isChecked: boolean }) {
    if (type == "single") return;
    const { isChecked, file } = props;

    let newFiles = files;
    if (isChecked) {
      newFiles.push(file!);
    } else {
      newFiles = files.filter((f) => f._id !== file?._id);
    }
    setFiles(newFiles);
    onChange(newFiles);
  }

  const isFileSelected = (image: IFile) => {
    if (type === "single") return file?._id === image._id;
    if (type === "multi") return !!files.find((f) => f._id === image._id);
    return false;
  };

  const isDisabled = () => {
    if (type === "single") return file === undefined;
    if (type === "multi") files.length === 0;
  };

  const RenderImage = () => {
    if (type !== "single") return <></>;
    return (
      <img
        loading='lazy'
        src={IMAGE_URL(file?.path || "")}
        onError={(e) => {
          e.currentTarget.src = placeHolder;
        }}
      />
    );
  };
  const RenderImages = () => {
    if (type !== "multi") return <></>;

    return files.map((file, index) => {
      return (
        <img
          key={index}
          loading='lazy'
          src={IMAGE_URL(file?.path || "")}
          onError={(e) => {
            e.currentTarget.src = placeHolder;
          }}
        />
      );
    });
  };

  const field = [styles.field, styles[type]].join(" ");

  return (
    <Base {...(props as any)}>
      <div className={field}>
        <div className={styles.preview}>
          <RenderImage />
          <RenderImages />
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
                                if (type === "single")
                                  onFileChange({
                                    isChecked: checked,
                                    file: image,
                                  });
                                if (type === "multi")
                                  onFilesChange({
                                    isChecked: checked,
                                    file: image,
                                  });
                              },
                              checked: isFileSelected(image),
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
                disabled: isDisabled(),
                title: "ثبت",
                onClick: () => {
                  if (type === "single") onChange(file!);
                  if (type === "multi") onChange(files);
                  setShow(false);
                },
              },
            ],
          };
        }}
      </Modal>
    </Base>
  );
}
