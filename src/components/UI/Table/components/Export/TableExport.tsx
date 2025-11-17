import styles from "./styles.module.scss";
import { IOption } from "@/types/Variables";
import Cell from "../Cells/Cell";
import * as lodash from "lodash";
import { dateToJalai } from "@/utils/Converters";
import { IColDef } from "@/hooks/useColDefs/useColdefs.types";
import { IMAGE_URL } from "@/common/urls/urls";
interface IProps {
  colDefs: IColDef<any>[];
  rowData: any[];
}
export default function TableExport(props: IProps) {
  const { colDefs, rowData } = props;

  const RenderRowBody = (props: { header: IColDef<any>; rowData: any }) => {
    const { rowData, header } = props;
    const value = lodash.get(rowData, header.field || "");

    switch (header.type) {
      case "SELECT": {
        const options = header.cellRendererParams.OPTIONS as IOption[];
        return (
          <Cell.Status
            options={options}
            value={value}
            onChange={() => {}}
          />
        );
      }

      case "STATUS": {
        const options = header.cellRendererParams.OPTIONS as IOption[];
        return (
          <Cell.Status
            options={options}
            value={value}
            onChange={() => {}}
          />
        );
      }

      case "TEXT": {
        return <p>{value}</p>;
      }

      case "TOOLTIP": {
        return header.exportRender ? (
          header.exportRender({ value })
        ) : (
          <p>export render not support</p>
        );
      }

      case "DATE": {
        return <p>{dateToJalai(value)}</p>;
      }

      case "ACTIONS": {
        return "ok";
      }

      case "IMAGE": {
        return (
          <img
            src={IMAGE_URL(value.path)}
            alt=''
            className={styles.image}
          />
        );
      }

      case "SWITCH": {
        if (value === true) return <p>بله</p>;
        if (value === false) return <p>خیر</p>;
      }
    }

    return <></>;
  };

  return (
    <div className={styles.export}>
      {rowData.map((row) => {
        return (
          <div className={styles.row}>
            {colDefs
              .filter((col) => col.type !== "ACTIONS")
              .map((col) => {
                return (
                  <div className={styles.data}>
                    <div className={styles.header}>{col.headerName} :</div>
                    <div className={styles.body}>
                      <RenderRowBody
                        rowData={row}
                        header={col}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        );
      })}
    </div>
  );
}
