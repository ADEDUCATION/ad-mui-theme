import { Box, Grid, Slider, Typography } from "@mui/material";
import { useState } from "react";

const MuiSlider = () => {
  const [selectedProgress, setSelectedProgress] = useState<number[]>([0, 100]);
  const handleChange = (event: Event, newValue: number | number[]) => {
    setSelectedProgress(newValue as number[]);
  };
  return (
    <Box sx={{ width: 300 }}>
      <Grid
        container
        width={"100%"}
        alignItems="center"
        justifyContent={"space-between"}
      >
        <Grid item xs={2}>
          <Typography
            variant="body2"
            color="primary"
            sx={{ textAlign: "center", pr: 2 }}
          >
            {selectedProgress[0]}%
          </Typography>
        </Grid>
        <Grid item xs={8} sx={{ display: "flex", alignItems: "center" }}>
          <Slider
            getAriaLabel={() => "Pourcentage de progression"}
            valueLabelDisplay="auto"
            value={selectedProgress}
            onChange={handleChange}
            defaultValue={0}
            step={5}
            min={0}
            max={100}
            size="small"
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={2}>
          <Typography
            variant="body2"
            color="primary"
            sx={{ textAlign: "center", pl: 2 }}
          >
            {selectedProgress[1]}%
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MuiSlider;
