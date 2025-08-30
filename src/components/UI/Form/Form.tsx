import { ReactElement, useState } from "react";

import styles from "./styles.module.scss";
import Swiper from ""

interface IProps {
  children: (props: {
    goPrev: () => void;
    goNext: () => void;
  }) => React.ReactElement;
}

export default function Form(props: IProps) {
  const [currentForm, setCurrentForm] = useState();

  const goNext = () => {
    alert("ok");
  };

  const goPrev = () => {};

  const forms = props.children({
    goNext,
    goPrev,
  });

  const childs = forms.props.children as ReactElement[];

  return <div className={styles.form}>
    <Swiper
    {childs}</div>;
}
