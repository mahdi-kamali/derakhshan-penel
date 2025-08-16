import { GridOptions } from "ag-grid-community";
import Cell from "../components/cells/Cell";
const gridOptions: GridOptions = {
  multiSortKey: "ctrl",
  rowSelection: "multiple",
  tooltipShowDelay: 250,
  suppressColumnMoveAnimation: true,
  suppressAnimationFrame: true,
  suppressRowHoverHighlight: true,
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
    cellRenderer: (props: any) => {
      const { value, colDef } = props;
      const { type } = colDef;
      switch (type) {
        case "STATUS": {
          const options = props.OPTIONS;
          return (
            <Cell.Container>
              <Cell.Status
                options={options}
                onChange={(option) => {}}
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
