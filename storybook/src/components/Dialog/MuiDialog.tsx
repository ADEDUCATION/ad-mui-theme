import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
} from "@mui/material";
import DialogHeader from "./MuiDialogHeader";

export interface MuiDialogProps {
  titleContent: string;
  typeContent: "secondary" | "error";
  subtitleContent?: string;
  children?: React.ReactNode;
}

const MuiDialog = ({
  titleContent,
  typeContent,
  subtitleContent,
  children,
}: MuiDialogProps) => {
  return (
    <Dialog maxWidth="lg" open={true}>
      <DialogHeader
        title={titleContent}
        type={typeContent}
        subtitle={subtitleContent}
        headerSlot={children}
      />
      <DialogContent>Dialog Content</DialogContent>
      <DialogActions>
        <Button color="info">Annuler</Button>
        <Button variant="contained" color={typeContent}>
          Valider
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MuiDialog;
