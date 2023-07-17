import { Close } from "@mui/icons-material";
import { Alert, AlertTitle, Button } from "@mui/material";
import { useEffect } from "react";

export type MuiAlertProps = {
  type: "error" | "warning" | "info" | "primary" | "secondary";
};

const AlertMui = ({ type }: MuiAlertProps) => {
  let icon = null;

  useEffect(() => {
    if (type === "error") {
      icon = <Close />;
    }
  }, [type]);

  return (
    <Alert
      sx={{
        width: "100%",
        backgroundColor: `${type}.main`,
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      //   severity="error"
      variant="filled"
      action={
        <Button size="medium" variant="text" color="inherit">
          UNDO
        </Button>
      }
      icon={icon}
    >
      <AlertTitle>Error</AlertTitle>
      This is an error alert — <strong>check it out!</strong>
    </Alert>
  );
};

export default AlertMui;
