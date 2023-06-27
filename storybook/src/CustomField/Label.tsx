import { Box, Tooltip } from "@mui/material";

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
    <Box
      alignContent={"flex-end"}
      sx={{ pr: 1, fontSize: 12, fontWeight: "bold" }}
    >
      {field.label}
      <span style={{ float: "right", display: "flex" }}>
        {formColors.map((formColor) => {
          if (field?.[formColor.id]) {
            return (
              <Tooltip title={formColor.tooltip} key={formColor.id}>
                <div
                  style={{
                    width: 12,
                    height: 12,
                    backgroundColor: formColor.color,
                    borderRadius: 12,
                    marginLeft: 10,
                    marginTop: 6,
                  }}
                ></div>
              </Tooltip>
            );
          }
        })}
      </span>
    </Box>
  );
};

export default Label;
