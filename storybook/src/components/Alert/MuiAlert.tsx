import {
  Alert,
  AlertProps,
  AlertTitle,
  Button,
  IconButton,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import CancelIcon from "@mui/icons-material/Cancel";
import WarningIcon from "@mui/icons-material/Warning";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Close } from "@mui/icons-material";
import { MuiOmits } from "../../utils";

export interface MuiAlertProps extends Omit<AlertProps, MuiOmits> {
  title: string;
  type: "error" | "warning" | "info" | "primary" | "secondary";
  action: "icon" | "button";
  content?: string;
}

export const AlertMui = ({
  type,
  title,
  action,
  content,
  ...rest
}: MuiAlertProps) => {
  const alertIcon = {
    error: <CancelIcon fontSize="inherit" />,
    warning: <WarningIcon fontSize="inherit" />,
    info: <InfoIcon fontSize="inherit" />,
    primary: <CheckCircleIcon fontSize="inherit" />,
    secondary: <NotificationsIcon fontSize="inherit" />,
  };

  return (
    <>
      <Alert
        sx={{
          width: "100%",
          backgroundColor: `${type}.main`,
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        variant="filled"
        action={
          action === "button" ? (
            <Button
              size="medium"
              variant="text"
              sx={{
                color: "inherit",
                textTransform: "inherit",
                "&:hover": {
                  backgroundColor: "inherit",
                  color: "inherit",
                },
              }}
            >
              UNDO
            </Button>
          ) : (
            <IconButton aria-label="close" color="inherit">
              <Close fontSize="inherit" />
            </IconButton>
          )
        }
        icon={alertIcon[type]}
        {...rest}
      >
        <AlertTitle>{title}</AlertTitle>
        {content && content}
      </Alert>
    </>
  );
};
