import {
  LegacyRef,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Slider, { Settings } from "react-slick";

import styles from "./styles.module.scss";
// Import slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FormikContextType } from "formik";
import { ISection } from "@/types/Pages/Sections/Sections.types";

type IComponentsType = (props: any) => ReactElement | ReactElement[];

interface IProps {
  formik: FormikContextType<ISection>;
  extraProps?: any;
  children: () => {
    HEADERS: IComponentsType;
    BODY: IComponentsType;
    TABS: IComponentsType;
    ACTIONS: IComponentsType;
  };
}

export default function Form(props: IProps) {
  const { children, formik, extraProps } = props;

  const [slider, setSlider] = useState<Slider | undefined>(undefined);

  const form = children();

  const { BODY, HEADERS, TABS, ACTIONS } = form;

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = slider?.slickGoTo;
  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        <TABS
          formik={formik}
          goToSlide={goToSlide}
          currentSlide={currentSlide}
          {...extraProps}
        />
      </div>
      <div className={styles.forms}>
        <div className={styles.header}>
          <HEADERS
            formik={formik}
            {...extraProps}
          />
        </div>
        <div className={styles.body}>
          <Slider
            dots={false}
            infinite={false}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            arrows={false}
            draggable={false}
            ref={(ref) => {
              setSlider(ref as any);
            }}
            slide='1'
            beforeChange={(props) => {
              setCurrentSlide(props);
            }}>
            {Array.from(
              BODY({
                formik,
                ...extraProps,
              }) as ReactElement[],
            ).map((form) => (
              <div className={styles.form}>{form}</div>
            ))}
          </Slider>
        </div>
      </div>
      <div className={styles.actons}>
        <ACTIONS
          formik={formik}
          {...extraProps}
        />
      </div>
    </div>
  );
}
