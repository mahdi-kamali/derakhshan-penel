import React, { ReactElement, useState } from "react";
import styles from "./styles.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FormikContextType, FormikProvider } from "formik";
import { Swiper as SwiperType } from "swiper/types";

type IComponentsType = (props: any) => ReactElement[] | ReactElement;

interface IProps<T = any> {
  formik: FormikContextType<T>;
  width?: string;
  extraProps?: any;
  children: () => {
    HEADERS: IComponentsType;
    BODY: (props: any) => ReactElement[];
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

  const slideTo = (index: number) => {
    if (swiper === undefined) return;
    swiper.slideTo(index);
  };

  const BODY_ARRAY = BODY({
    extraProps: extraProps,
    formik: formik,
  }) as ReactElement[];

  return (
    <FormikProvider value={formik}>
      <div
        className={styles.container}
        style={{
          width: props.width,
        }}>
        {TABS.length > 0 && (
          <div className={styles.tabs}>
            <TABS
              currentForm={currentForm}
              slideTo={slideTo}
              swiper={swiper}
              {...extraProps}
            />
          </div>
        )}

        <div className={styles.forms}>
          <div className={styles.header}>
            <HEADERS {...extraProps} />
          </div>
          <div className={styles.body}>
            <Swiper
              centeredSlides
              spaceBetween={0}
              slidesPerView={1}
              onSwiper={setSwiper}
              draggable={false}
              allowTouchMove={false}
              autoHeight={true}
              onSlideChange={(swiper) => {
                setCurrentForm(swiper.realIndex);
              }}>
              {BODY_ARRAY.map((form) => {
                return <SwiperSlide key={form.key}>{form}</SwiperSlide>;
              })}
            </Swiper>
          </div>
        </div>
        <div className={styles.actons}>
          <ACTIONS {...extraProps} />
        </div>
      </div>
    </FormikProvider>
  );
}
