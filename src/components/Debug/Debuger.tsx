import React, { CSSProperties } from "react";
import Grid from "../UI/Grid/Grid";
import dynamic from "next/dynamic";

const ReactJson = dynamic(() => import("react-json-view"), {
  ssr: false,
});

interface IDebugerProps {
  values: any;
  errors?: any;
}

export default function Debuger({ values, errors }: IDebugerProps) {
  const style: CSSProperties = {
    padding: "2em",
    borderRadius: "1rem",
    backgroundColor: "#1E1E1E", // Dark blue background
  };

  return (
    <Grid
      fontSize={16}
      direction="ltr"
      padding={32}
      gridTemplateColumns={"1fr 1fr"}
    >
      <Grid gap="0" >
        <h1>Values : </h1>
        <ReactJson
          src={values}
          theme="monokai" // Choose a theme or create a custom one
          iconStyle="square"
          collapsed={false}
          enableClipboard={true}
          displayDataTypes={false}
          displayObjectSize={false}
          style={style}
        />
      </Grid>

      <Grid gap="0">
        <h1>Errors : </h1>
        <ReactJson
          src={errors}
          theme="monokai" // Choose a theme or create a custom one
          iconStyle="square"
          collapsed={false}
          enableClipboard={true}
          displayDataTypes={false}
          displayObjectSize={false}
          style={style}
        />
      </Grid>
    </Grid>
  );
}
