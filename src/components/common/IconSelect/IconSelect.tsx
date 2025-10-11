import { getRequest } from "@/common/axios/axios";
import { Field, Grid } from "@/components/UI";
import Icon from "@/components/UI/Icon/Icon";
import { GetIconsAPI } from "@/services/Icons/Icons.services";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import styles from "./styles.module.scss";

interface IProps {
  value: string;
  onChange: (value: string) => void;
}

export default function IconSelect(props: IProps) {
  const { onChange, value } = props;

  const [icons, setIcons] = useState<string[]>([]);

  const { mutate: GetICONS } = useMutation({
    mutationFn: GetIconsAPI,
    onSuccess(data, variables, context) {
      console.log(data);
      setIcons(data.data);
    },
  });

  const [slug, setSlug] = useState("");

  return (
    <Grid
      gridColumn={"-1/1"}
      gap={"1rem"}>
      <Field.Text
        title='جستجوی آیکون'
        icon={<Icon icon='lucide:search' />}
        name=''
        onChange={(event) => {
          const value = event.target.value;
          GetICONS(value);
          setSlug(value);
        }}
        type='text'
        value={slug}
        variant='light'
        placeHodler='برای جستجوی آیکون, عنوان لاتین وارد کنید.'
      />
      <Grid
        color='black'
        fontSize={"2rem"}
        type='flex'
        gridColumn={"-1/1"}
        gridTemplateColumns={"1fr 1fr"}
        alignItems='center'
        gap={"2rem"}>
        <span>آیکون منتخب : </span>
        <Icon
          icon={value}
          fontSize={"3rem"}
        />
      </Grid>
      <Grid
        gridTemplateColumns={"repeat(10,1fr)"}
        maxHeight={"20rem"}
        overflow='auto'
        gap={"0.5rem"}>
        {icons.map((ico) => {
          const classs = [value === ico && styles.isSelected, styles.icon].join(
            " ",
          );
          return (
            <Icon
              key={ico}
              className={classs}
              icon={ico}
              color='black'
              fontSize={"1.5rem"}
              cursor={"pointer"}
              onClick={() => onChange(ico)}
            />
          );
        })}
      </Grid>
    </Grid>
  );
}
