import { Box, Tooltip, Typography } from "@mui/material";
import { IFieldStructure } from "./type";

const formColors: {
  color: string;
  id: "isCerfa" | "isConvention";
  tooltip: string;
}[] = [
  {
    color: "#f5b92a",
    id: "isCerfa",
    tooltip: "Champ nécessaire pour valider le formulaire Cerfa",
  },
  {
    color: "#0795ff",
    id: "isConvention",
    tooltip: "Champ nécessaire pour valider le formulaire Convention",
  },
];

const Label = ({ field }: { field: IFieldStructure }) => {
  return (
    // <Box
    //   alignContent="flex-end"
    //   sx={{ pr: 1, fontSize: 12, fontWeight: "bold", color: "grey.300" }}
    // >
    //   {field.label}{" "}
    // </Box>
    <Typography variant="bodyBold" color="grey.300">
      {field.label}
    </Typography>
  );
};

export default Label;
