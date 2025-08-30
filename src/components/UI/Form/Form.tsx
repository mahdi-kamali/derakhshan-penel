import { ReactElement, useEffect, useRef, useState } from "react";
import Slider, { Settings } from "react-slick";

import styles from "./styles.module.scss";
// Import slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ITab {
  label: string;
  icon: ReactElement;
}

interface IProps {
  tabs: ITab[];
  children: (props: {
    goPrev: () => void;
    goNext: () => void;
  }) => React.ReactElement[];
}

export default function Form(props: IProps) {
  const { tabs } = props;

  const sliderRef = useRef<Slider>(null);

  var settings: Settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    rtl: false,
  };

  const [currentForm, setCurrentForm] = useState(0);

  const goNext = () => {
    setCurrentForm((prev) => prev + 1);
  };

  const goPrev = () => {};

  const forms = props.children({
    goNext,
    goPrev,
  });

  useEffect(() => {
    setTimeout(() => {
      sliderRef.current?.slickGoTo(currentForm);
    }, 200);
  }, [currentForm]);

  return (
    <div>
      <div className={styles.form}>
        <div className={styles.tabs}>
          {tabs.map((tab, index) => {
            const className = [currentForm === index && styles.isActive].join(
              " ",
            );
            return (
              <button
                className={className}
                onClick={() => {
                  setCurrentForm(index);
                }}>
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
        <div className={styles.forms}>
          <Slider
            {...settings}
            ref={sliderRef}
            slide='1'>
            {forms.map((child) => {
              return <div className={styles.child}>{child}</div>;
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
