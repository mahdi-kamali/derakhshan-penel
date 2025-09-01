import { ReactElement, useEffect, useRef, useState } from "react";
import Slider, { Settings } from "react-slick";

import styles from "./styles.module.scss";
// Import slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FormikContextType } from "formik";
import { ISection } from "@/types/Pages/Sections/Sections.types";

type IComponentsType = (props: {
  formik: FormikContextType<ISection>;
  extraProps?: any;
}) => ReactElement | ReactElement[];

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

  const sliderRef = useRef<Slider>(null);

  const form = children();

  const { BODY, HEADERS, TABS, ACTIONS } = form;

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        <TABS
          formik={formik}
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
            dots={true}
            infinite={false}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            arrows={false}
            draggable={false}
            rtl={false}
            ref={sliderRef}
            slide='1'>
            <BODY
              formik={formik}
              {...extraProps}
            />
          </Slider>
        </div>
      </div>
      <div className={styles.actons}>
        {ACTIONS({
          formik: formik,
          ...extraProps,
        })}
      </div>
    </div>
  );
}
