import { useState } from "react";
import { FileUploader as DragDrop } from "react-drag-drop-files";
import styles from "./styles.module.scss";
import Grid from "../grid/Grid";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  AddImagesGalleryAPI,
  GetAllGalleriesAPI,
} from "@/services/Gallery.services";
import { IGallery } from "@/types/Gallery/gallery.types";

interface IProps {
  gallery: IGallery;
  multiple?: boolean;
}

export default function FileUploader(porps: IProps) {
  const client = useQueryClient();

  const { gallery } = porps;

  const placeHolder = "/images/place-holder/image-holder.png";

  const { mutate: AddImages } = useMutation({
    mutationFn: AddImagesGalleryAPI,
    onSuccess(data, variables, context) {
      client.invalidateQueries({
        queryKey: [GetAllGalleriesAPI.name],
      });
    },
  });

  const [files, setFiles] = useState<File[]>([]);

  const handleChange = (files: File[]) => {
    setFiles(Array.from(files));
  };

  const remove = (index: number) => {
    setFiles((prev) => {
      return prev.filter((img, target) => target !== index);
    });
  };

  return (
    <div className={styles.uploader}>
      <h1>افزودن فایل :</h1>
      <Grid
        gridTemplateColumns={"1fr 1fr 1fr 1fr"}
        gap={"1rem"}>
        {files.map((file, index) => {
          const url = URL.createObjectURL(file);
          return (
            <div className={styles.image}>
              <img
                src={url}
                onError={(e) => {
                  e.currentTarget.src = placeHolder;
                }}
              />
              <Icon
                icon='dashicons:remove'
                className={styles.remove}
                onClick={() => remove(index)}
              />
            </div>
          );
        })}
      </Grid>
      <Grid gap={"1rem"}>
        <DragDrop
          handleChange={handleChange as any}
          name='file'
          types={["JPG", "PNG", "GIF"]}
          label='فایل مورد نظر خودرا داخل این باکس بکشید.'
          uploadedLabel='فایل های  مورد نظر اضافه شدند.'
          multiple={true}
        />
        <Grid
          expanded={files.length > 0}
          gridTemplateColumns={"1fr 1fr"}
          gap={"1rem"}>
          <Button
            type='button'
            icon={<Icon icon='ep:upload-filled' />}
            variant='success'
            onClick={() =>
              AddImages({
                gallery_id: gallery._id,
                images: files,
              })
            }>
            <span>تایید و آپلود</span>
          </Button>
          <Button
            type='button'
            icon={<Icon icon='fa7-solid:cancel' />}
            variant='danger'
            onClick={() => {
              setFiles([]);
            }}>
            <span>لغو</span>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
