import { ReactNode } from "react";

import { Box, DialogTitle, Typography } from "@mui/material";

import Lottie from "lottie-react";

import check from "./shield-check-secondary.json";
import warning from "./shield-warning-error.json";

type DialogHeaderProps = {
  title: string;
  subtitle?: string;
  type: "secondary" | "error";
  headerSlot?: ReactNode;
};

const DialogHeader = ({
  title,
  subtitle,
  type,
  headerSlot,
}: DialogHeaderProps) => {
  return (
    <DialogTitle
      sx={{
        backgroundColor: type === "secondary" ? "secondary.main" : "error.main",
      }}
    >
      <Box display="flex" alignItems="center">
        <Box
          sx={{
            height: "60px",
            width: "60px",
            marginRight: 2,
          }}
        >
          <Lottie
            animationData={type === "secondary" ? check : warning}
            loop={true}
            style={{
              height: "100%",
            }}
          />
        </Box>
        <Box flexGrow={1}>
          <Typography variant="h4" color="background.paper">
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="subtitleMedium" color="background.paper">
              {subtitle}
            </Typography>
          )}
        </Box>
        <Box>{headerSlot && <>{headerSlot}</>}</Box>
      </Box>
    </DialogTitle>
  );
};

export default DialogHeader;
