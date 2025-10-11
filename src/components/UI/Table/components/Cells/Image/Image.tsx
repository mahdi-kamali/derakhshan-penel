import { IMAGE_URL } from "@/common/urls/urls";
import { IFile } from "@/types/Gallery/gallery.types";
import styles from "./styles.module.scss"
interface IProps {
  image: IFile;
}

export default function Image(props: IProps) {
  const { image } = props;
  return <img className={styles.image} src={IMAGE_URL(image.path)} />;
}
