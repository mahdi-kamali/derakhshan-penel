import { ReactElement, useCallback, useEffect, useState } from "react";

import styles from "./styles.module.scss";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { FormikContextType } from "formik";
import { ISection } from "@/types/Pages/Sections/Sections.types";
import { Swiper as SwiperType } from "swiper/types";

type IComponentsType = (props: any) => ReactElement[] | ReactElement;

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

  const [swiper, setSwiper] = useState<SwiperType | undefined>(undefined);

  const form = children();

  const { BODY, HEADERS, TABS, ACTIONS } = form;

  const [currentForm, setCurrentForm] = useState<number>(0);

  const FORMS = BODY({
    formik,
    ...extraProps,
  }) as ReactElement[];

  const slideTo = (index: number) => {
    if (swiper === undefined) return;
    swiper.slideTo(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        <TABS
          formik={formik}
          currentForm={currentForm}
          slideTo={slideTo}
          swiper={swiper}
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
          <Swiper
            centeredSlides
            spaceBetween={0}
            slidesPerView={1}
            onSwiper={setSwiper}
            draggable={false}
            allowTouchMove={false}
            onSlideChange={(swiper) => {
              setCurrentForm(swiper.realIndex);
            }}>
            {FORMS.map((form) => (
              <SwiperSlide>
                <div className={styles.form}>{form}</div>
              </SwiperSlide>
            ))}
          </Swiper>
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
