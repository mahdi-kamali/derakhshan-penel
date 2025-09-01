import { ReactElement, useEffect, useRef, useState } from "react";
import Slider, { Settings } from "react-slick";

import styles from "./styles.module.scss";
// Import slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";

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
  disabled?: boolean;
  actions: {
    submit?: {
      enabled?: boolean;
      title: string;
      onSubmit: () => void;
    };
    cancel?: {
      enabled?: boolean;
      title: string;
      onCancel: () => void;
    };
  };
}

export default function Form(props: IProps) {
  const { tabs, actions, disabled = false } = props;
  const { submit, cancel } = actions;

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

  const formClass = [styles.container, disabled && styles.disabled].join(" ");

  return (
    <div className={formClass}>
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
          {forms.map((form) => {
            return <div className={styles.form}>{form}</div>;
          })}
        </Slider>
      </div>
      <div className={styles.actons}>
        {submit && (
          <Button
            type='button'
            title={submit.title}
            variant='success'
            icon={<Icon icon='formkit:submit' />}
            onClick={submit.onSubmit}
            disabled={submit.enabled === false}
          />
        )}
        {cancel && (
          <Button
            type='button'
            title={cancel.title}
            variant='danger'
            icon={<Icon icon='formkit:submit' />}
            onClick={cancel.onCancel}
            disabled={cancel.enabled === false}
          />
        )}
      </div>
    </div>
  );
}
