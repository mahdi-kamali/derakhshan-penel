import React, { ReactElement, useEffect, useState } from "react";
import Modal from "../modal/Modal";
import { IResponse } from "@/common/axios/axios";
import useTable from "@/hooks/useTable";
import Grid from "../grid/Grid";
import { Checkbox } from "@mui/material";
import styles from "./styles.module.scss";
import Icon from "../Icon/Icon";

interface IProps<T> {
  api: () => Promise<IResponse<T[]>>;
  values: T[];
  mode: "single" | "multi";
  show?: boolean;
  onClose: () => void;
  onRenderRow: (row: T, index: number) => ReactElement;
  onRowSelect?: (row: T) => void;
  onRowUnSelect?: (row: T) => void;
  onChange?: (rows: T[]) => void;
  onSubmit: (rows: T[]) => void;
  required?: boolean;
}

export default function SelectModal<T>(props: IProps<T>) {
  const {
    api,
    onRowSelect = (row) => {},
    onRowUnSelect = (row) => {},
    onChange = () => {},
    onSubmit,
    onClose,
    onRenderRow,
    mode,
    values,
    show,
    required = false,
  } = props;

  const [selectedRows, setSelectedRows] = useState<T[]>(values);

  const { data } = useTable<T[]>({
    api: api,
  });

  

  useEffect(() => {
    setSelectedRows(values);
  }, [values, show]);

  return (
    <Modal
      onClose={onClose}
      show={show}>
      {() => {
        return {
          BODY: (
            <Grid gap={"1rem"}>
              {data.map((row, index) => {
                const isChecked = !!selectedRows.find(
                  (_, target) => index === target,
                );
                return (
                  <div className={styles.row}>
                    <label className={styles.select}>
                      <span>انتخاب کردن</span>
                      <Checkbox
                        title='انتخاب'
                        color='primary'
                        defaultChecked={isChecked}
                        onChange={(event) => {
                          let newRows: T[] = [];
                          const checked = event.target.checked;
                          if (checked) {
                            onRowSelect(row);
                            newRows = [...selectedRows, row];
                          }
                          if (!checked) {
                            onRowUnSelect(row);
                            newRows = selectedRows.filter(
                              (row, targetIndex) => index !== targetIndex,
                            );
                          }
                          setSelectedRows(newRows);
                          onChange(newRows);
                        }}
                        sx={{
                          backgroundColor: "transaprent",
                          color: "white",
                          "&.Mui-checked": {
                            color: "white",
                          },
                        }}
                      />
                    </label>
                    {onRenderRow(row, index)}
                  </div>
                );
              })}
            </Grid>
          ),
          ACTIONS: [
            {
              type: "button",
              variant: "success",
              title: "ثبت",
              icon: <Icon icon='formkit:submit' />,
              onClick() {
                onSubmit(selectedRows);
                onClose();
              },
              disabled: selectedRows.length === 0,
            },
            {
              type: "button",
              variant: "danger",
              title: "بستن",
              icon: <Icon icon='formkit:submit' />,
              onClick: onClose,
            },
          ],
        };
      }}
    </Modal>
  );
}
