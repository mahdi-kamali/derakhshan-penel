import React, { useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS
// Thems
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-community/styles/ag-theme-material.css";
// Custome Styles
import "./styles.scss";
import gridOptions from "./configs/gridOptions";
import { ColDef } from "@ag-grid-community/core";

interface IProps {
  colDefs: ColDef[];
  rowData: any[];
}
import "ag-grid-enterprise";
import TableExport from "./components/Export/TableExport";

export default function Table(props: IProps) {
  const { colDefs, rowData } = props;
  const gridRef = useRef<AgGridReact>(null);

  const exportExcel = () => {
    // gridRef.current?.api.exportDataAsCsv();
  };

  return (
    <div className='table-container-class'>
      <div className='ag-theme-material table-root'>
        <AgGridReact
          rowData={rowData}
          enableRtl={true}
          gridOptions={gridOptions as any}
          columnDefs={colDefs as any}
          ref={gridRef}
        />
        {/* <Button
          type='button'
          variant='indigo'
          title='خروجی اکسل'
          onClick={exportExcel}
        /> */}

        <TableExport
          colDefs={colDefs as any}
          rowData={rowData}
        />
      </div>
    </div>
  );
}
