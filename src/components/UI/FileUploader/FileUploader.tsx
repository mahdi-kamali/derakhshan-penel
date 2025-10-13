import { useState } from "react";
import { FileUploader as DragDrop } from "react-drag-drop-files";
import styles from "./styles.module.scss";
import Grid from "../Grid/Grid";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  AddImagesGalleryAPI,
  GetAllGalleriesAPI,
} from "@/services/Gallery.services";
import { IGallery } from "@/types/Gallery/gallery.types";
import { LinearProgress } from "@mui/material";

interface IProps {
  gallery: IGallery;
  multiple?: boolean;
}

export default function FileUploader(porps: IProps) {
  const client = useQueryClient();

  const [progress, setProgress] = useState({
    isShow: false,
    value: 0,
  });

  const { gallery } = porps;

  const placeHolder = "/images/place-holder/image-holder.png";

  const { mutate: AddImages } = useMutation({
    mutationFn: AddImagesGalleryAPI,
    onSuccess(data, variables, context) {
      setProgress((prev) => ({
        isShow: false,
        value: 0,
      }));
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
      <Grid
        gridTemplateColumns={"1fr 1fr 1fr 1fr"}
        gap={"1rem"}>
        {files.map((file, index) => {
          const url = URL.createObjectURL(file);
          return (
            <div
              className={styles.image}
              key={index}>
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
      <Grid
        gap={"1rem"}
        width={"100%"}
        alignItems='center'
        type='flex'
        justifyContent='center'>
        <DragDrop
          handleChange={handleChange as any}
          name='file'
          types={["JPG", "PNG", "GIF"]}
          label='فایل مورد نظر خودرا داخل این باکس بکشید.'
          uploadedLabel='فایل های  مورد نظر اضافه شدند.'
          multiple={true}
        />
        <Grid expanded={progress.isShow}>
          <LinearProgress
            variant='buffer'
            value={progress.value}
          />
        </Grid>
        <Grid
          expanded={files.length > 0}
          gridTemplateColumns={"1fr 1fr"}
          gap={"1rem"}>
          <Button
            type='button'
            icon={<Icon icon='ep:upload-filled' />}
            variant='success'
            disabled={progress.isShow}
            onClick={() =>
              AddImages({
                gallery_id: gallery._id,
                images: files,
                onChange(value) {
                  setProgress({
                    isShow: true,
                    value: value,
                  });
                },
              })
            }>
            <span>تایید و آپلود</span>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
