import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import type { GridOptions, ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS
// Thems
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-community/styles/ag-theme-material.css";
// Custome Styles
import "./styles.scss";
import Cell from "./components/cells/Cell";
import gridOptions from "./configs/gridOptions";

interface IProps {
  colDefs: ColDef[];
  rowData: any[];
}

export default function Table(props: IProps) {
  const { colDefs, rowData } = props;

  return (
    <div
      className='ag-theme-material'
      style={{ height: 700, width: 900 }}>
      <AgGridReact
        rowData={rowData}
        enableRtl={true}
        gridOptions={gridOptions as any}
        columnDefs={colDefs as any}
      />
    </div>
  );
}
