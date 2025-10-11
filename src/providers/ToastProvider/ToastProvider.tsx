import React from "react";
import { ToastContainer } from "react-toastify";

export default function ToastProvider() {
  return (
    <ToastContainer
      autoClose={2000}
      style={{
        fontFamily: "inherit",
      }}
      className={"toastify-container"}
    />
  );
}
