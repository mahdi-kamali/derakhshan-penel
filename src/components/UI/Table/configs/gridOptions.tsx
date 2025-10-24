import { GridOptions } from "ag-grid-community";
import Cell from "@/components/UI/Table/components/Cells/Cell";
import { IOption } from "@/types/Variables";
import { ShowQuestion } from "@/common/toast/toast";
import { IColDef } from "@/hooks/useColDefs/useColdefs.types";

interface IProps {
  colDef: {
    type: IColDef<any>["type"];
  };
  value: any;
  OPTIONS: IOption[];
  onChange: (value: any, data: any) => void;
  data: any;
}

const gridOptions: GridOptions = {
  multiSortKey: "ctrl",
  rowSelection: "multiple",
  tooltipShowDelay: 250,
  suppressColumnMoveAnimation: true,
  suppressAnimationFrame: true,
  suppressRowHoverHighlight: true,
  domLayout: "autoHeight",
  defaultColDef: {
    suppressHeaderMenuButton: true,
    suppressFloatingFilterButton: true,
    suppressHeaderFilterButton: true,
    sortable: true,
    filter: true,
    floatingFilter: false,
    editable: false,
    suppressMovable: true,
    unSortIcon: false,
    flex: 1,
    minWidth: 130,
    cellDataType: "text",
    cellRenderer: (props: IProps) => {
      const { value, colDef, OPTIONS, onChange, data } = props;
      const { type } = colDef;
      switch (type) {
        case "STATUS": {
          return (
            <Cell.Container>
              <Cell.Status
                options={OPTIONS}
                onChange={(value) => onChange(value, data)}
                value={value}
              />
            </Cell.Container>
          );
        }
        case "SELECT": {
          return (
            <Cell.Container>
              <Cell.Select
                options={OPTIONS}
                onChange={(value) => onChange(value, data)}
                value={value}
              />
            </Cell.Container>
          );
        }
        case "DATE": {
          return (
            <Cell.Container>
              <Cell.Date value={value} />
            </Cell.Container>
          );
        }

        case "TEXT": {
          return <Cell.Container>{value}</Cell.Container>;
        }

        case "IMAGE": {
          return (
            <Cell.Container>
              <Cell.Image image={value} />
            </Cell.Container>
          );
        }

        case "SWITCH": {
          return (
            <Cell.Container>
              <Cell.Switch
                onChange={(value) => onChange(value, data)}
                value={value}
              />
            </Cell.Container>
          );
        }
      }
      return <Cell.Container>{value}</Cell.Container>;
    },
  },
};

export default gridOptions;
