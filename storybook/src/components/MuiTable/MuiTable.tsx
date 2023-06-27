import { Tab, Tabs } from "@mui/material";
import {
  DataGrid,
  DataGridProps,
  GridColDef,
  GridColumnVisibilityModel,
  GridRowParams,
  GridRowsProp,
  GridToolbar,
  GridValidRowModel,
} from "@mui/x-data-grid";
import { useEffect, useState } from "react";

export const MuiTable = ({
  columns,
  list,
  checkboxSelection = false,
  onRowClick,
  onColumnVisibilityModelChange,
  columnVisibilityModel,
  autoHeight,
  noSearch,
  sortingBase,
  overrideTableProps,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: GridColDef<GridValidRowModel, any, any>[];
  list: GridRowsProp;
  checkboxSelection?: boolean;
  onRowClick?: (params: GridRowParams<GridValidRowModel>) => void;
  onColumnVisibilityModelChange?: (params: GridColumnVisibilityModel) => void;
  columnVisibilityModel?: GridColumnVisibilityModel;
  autoHeight?: boolean;
  noSearch?: boolean;
  sortingBase?: string;
  overrideTableProps?: Omit<DataGridProps, "rows" | "columns">;
}) => {
  return (
    <>
      <DataGrid
        onColumnVisibilityModelChange={(params: any) => {
          onColumnVisibilityModelChange &&
            onColumnVisibilityModelChange(params);
        }}
        columnVisibilityModel={columnVisibilityModel}
        autoHeight={autoHeight}
        pagination
        rows={list}
        columns={columns}
        checkboxSelection={checkboxSelection}
        onRowClick={onRowClick}
        sx={{ cursor: "pointer" }}
        components={{ Toolbar: GridToolbar }}
        disableColumnFilter
        disableVirtualization
        componentsProps={{
          toolbar: {
            csvOptions: { disableToolbarButton: true },
            printOptions: { disableToolbarButton: true },

            showQuickFilter: noSearch ? false : true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        initialState={{
          sorting: {
            sortModel: [
              {
                field: sortingBase ? sortingBase : "id",
                sort: "asc",
              },
            ],
          },
        }}
        {...overrideTableProps}
      />
    </>
  );
};
