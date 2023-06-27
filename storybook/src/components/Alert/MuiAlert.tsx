import { OpenInNew } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

export type MuiAlertProps = {
  part: any;
  type:
    | "success"
    | "error"
    | "warning"
    | "info"
    | "primary"
    | "secondary"
    | "color1"
    | "color2"
    | "color3"
    | "color4";
};

const MuiAlert = ({ part, type }: MuiAlertProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: `${type}.main`,
        p: 1,
        borderRadius: 1,
        gap: 2,
        width: "fit-content",
      }}
    >
      <Box
        sx={{
          display: "flex",
          bgcolor: "#fff",
          width: 40,
          height: 40,
          borderRadius: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ fontSize: "25px" }}>🔍</Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="subtitleBold" color={`${type}.contrastText`}>
          {part.infos.title}
        </Typography>
        <Typography variant="bodyLight" color={`${type}.contrastText`}>
          {part.infos.content}
        </Typography>
      </Box>
      <a href={part.infos.link} rel="noreferrer" target="_blank">
        <IconButton sx={{ color: `${type}.contrastText` }}>
          <OpenInNew />
        </IconButton>
      </a>
    </Box>
  );
};

export default MuiAlert;
