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
import Grid from "../Grid/Grid";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";

export default function Table(props: IProps) {
  const { colDefs, rowData } = props;

  const [exporting, setExporting] = useState(false);

  return (
    <div className='table-container-class'>
      <div className='ag-theme-material table-root'>
        <div className='table-actions-export'>
          <Button
            type='button'
            variant='success'
            title='خروجی گرفتن'
            icon={<Icon icon='ph:export-bold' />}
            onClick={() => setExporting((prev) => !prev)}
          />
        </div>
        <Grid expanded={exporting === false}>
          <AgGridReact
            rowData={rowData}
            enableRtl={true}
            gridOptions={gridOptions as any}
            columnDefs={colDefs as any}
          />
        </Grid>
        <Grid expanded={exporting === true}>
          <TableExport
            colDefs={colDefs as any}
            rowData={rowData}
          />
        </Grid>
      </div>
    </div>
  );
}
