import { Box, Grid, Image } from "@/components/UI";
import { IGallery } from "@/types/Gallery/gallery.types";
import Gallery from "..";
import FileUploader from "@/components/UI/FileUploader/FileUploader";

interface IProps {
  gallery: IGallery;
}

export default function Section(props: IProps) {
  const { gallery } = props;

  return (
    <Box header={<Gallery.Header gallery={gallery} />}>
      <Grid gap={"1rem"} maxWidth={"50rem"}>
        {/* Prev Images */}
        <Grid
          gridTemplateColumns={"1fr 1fr 1fr"}
          gap={"1rem"}>
          {gallery.images.map((image) => {
            return (
              <Image
                file={image}
                gallery={gallery}
                key={image._id}
              />
            );
          })}
        </Grid>

        {/* New Image */}
        <Grid color='black'>
          <FileUploader
            gallery={gallery}
            multiple
          />
        </Grid>
      </Grid>
    </Box>
  );
}
