import type { Meta } from "@storybook/react";

import { MuiTable } from "./MuiTable";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { IconButton, Typography } from "@mui/material";
import { Edit } from "@mui/icons-material";

export default {
  title: "Components/MuiTable",
  component: MuiTable,
} as Meta<typeof MuiTable>;

export const Default = () => (
  <MuiTable
    columns={[
      {
        headerName: "Logo",
        field: "school_logo",
        editable: false,
        flex: 1,
        minWidth: 60,
        align: "center",
        headerAlign: "center",
        renderCell: (params) => {
          return (
            <img
              alt={`Logo ${params.row.school_full_name}`}
              style={{
                width: "100%",
                maxWidth: " 40px",
                height: "auto",
                borderRadius: " 100%",
                imageRendering: "-webkit-optimize-contrast",
              }}
              src={params.value}
            />
          );
        },
      },
      {
        headerName: "Sigle",
        field: "school_short_name",
        filterable: true,
        flex: 1,
        minWidth: 60,
        renderCell: (params: GridRenderCellParams) => (
          <Typography variant="subtitleBold">{params.value}</Typography>
        ),
      },
      {
        headerName: "Nom de l'école",
        field: "school_full_name",
        filterable: false,
        flex: 6,
        minWidth: 200,
        renderCell: (params: GridRenderCellParams) => (
          <Typography variant="subtitleBold">{params.value}</Typography>
        ),
      },
      {
        headerName: "Campus",
        field: "school_city_number",
        filterable: false,
        flex: 1,
        align: "center",
        headerAlign: "center",
        renderCell: (params: GridRenderCellParams) => (
          <Typography variant="subtitleBold">{params.value}</Typography>
        ),
      },
      {
        headerName: "Formations",
        field: "nbr_formations",
        filterable: false,
        flex: 1,
        align: "center",
        headerAlign: "center",
        renderCell: (params: GridRenderCellParams) => (
          <Typography variant="subtitleBold">{params.value}</Typography>
        ),
      },
      {
        field: "action",
        headerName: "Actions",
        align: "center",
        headerAlign: "center",
        sortable: false,
        renderCell: (params) => {
          return (
            <>
              <IconButton
                onClick={() => {
                  console.log(params.row);
                }}
                aria-label="edit"
                size="small"
                className="action"
              >
                <Edit fontSize="inherit" />
              </IconButton>
            </>
          );
        },
      },
    ]}
    list={[
      {
        id: 1,
        school_logo: "https://via.placeholder.com/40",
        school_short_name: "ESD",
        school_full_name: "Ecole Supérieure du Digital",
        school_city_number: 1,
        nbr_formations: 1,
      },
      {
        id: 2,
        school_logo: "https://via.placeholder.com/40",
        school_short_name: "ESP",
        school_full_name: "Ecole Supérieure de Publicité",
        school_city_number: 1,
        nbr_formations: 1,
      },
    ]}
  />
);
