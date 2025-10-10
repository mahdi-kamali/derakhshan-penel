"use client";

import NotFound from "@/assets/animations/Errors/NotFound";
import Icon from "@/components/UI/Icon/Icon";
import PageContainer from "@/components/layout/PageContainer/PageContianer";
import Grid from "@/components/UI/Grid/Grid";

import styles from "./notFound.module.scss";
import Link from "next/link";

export default function notFound() {
  return (
    <Grid height={"100dvh"}>
      <Grid width={"600px"}>
        <NotFound />
        <Link
          href={"/"}
          className={styles.return}>
          <span>برگشت به صفحه اصلی</span>
          <Icon icon='icon-park-solid:back' />
        </Link>
      </Grid>
    </Grid>
  );
}
