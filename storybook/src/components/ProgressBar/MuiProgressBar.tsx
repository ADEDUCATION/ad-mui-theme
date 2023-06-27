import { Box, LinearProgress, Typography } from "@mui/material";

const ProgressBar = () => {
  const total = 85;
  return (
    <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "10%" }}>
        <LinearProgress
          variant="determinate"
          value={total}
          sx={{ height: 6, borderRadius: 10, mt: 0.2 }}
        />
      </Box>
      <Typography
        variant="h6"
        color="primary.main"
        sx={{ mt: "inherit", pl: 2 }}
      >{`${Math.round(total)}%`}</Typography>
    </Box>
  );
};

export default ProgressBar;
