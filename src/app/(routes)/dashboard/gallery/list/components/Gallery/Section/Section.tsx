import { Box, Grid, Image } from "@/components/UI";
import { IGallery } from "@/types/Gallery/gallery.types";
import Gallery from "..";

interface IProps {
  gallery: IGallery;
  onUpdate: (gallery: IGallery) => void;
  onDelete: (gallery: IGallery) => void;
}

export default function Section(props: IProps) {
  const { gallery, onUpdate, onDelete } = props;
  const { images } = gallery;

  return (
    <Box
      header={
        <Gallery.Header
          gallery={gallery}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      }>
      <Grid>
        <Grid gridTemplateColumns={"1fr 1fr 1fr "}>
          {images.map((image) => {
            return <Image file={image} />;
          })}
        </Grid>
        <Grid color='black'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            delectus nisi labore, eveniet rem blanditiis! Voluptatum, nulla
            quaerat libero explicabo quidem vel veniam corrupti, amet similique
            omnis labore molestias eaque?
          </p>
        </Grid>
      </Grid>
    </Box>
  );
}
