import {
  Box,
  Button,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  Step,
  StepLabel,
  Stepper,
  Tooltip,
  Typography,
} from "@mui/material";
import DialogHeader from "./MuiDialogHeader";
import { useState } from "react";

export interface MuiDialogProps {
  titleContent: string;
  typeContent: "secondary" | "error";
  subtitleContent?: string;
  children?: React.ReactNode;
}

const steps = [
  `Sélection d'une classe`,
  "Choix d'un étudiant",
  "Création de l'entreprise",
  "Ajout du contact de l'entreprise",
];

const MuiDialog = ({
  titleContent,
  typeContent,
  subtitleContent,
  children,
}: MuiDialogProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const isStepOptional = () => [2].includes(activeStep);
  return (
    <Dialog maxWidth="lg" open={true} fullWidth>
      <DialogHeader
        title={titleContent}
        type={typeContent}
        subtitle={subtitleContent}
        headerSlot={
          <Stepper activeStep={activeStep} connector={null}>
            {steps.map((label, index) => {
              const labelProps: {
                optional?: boolean;
              } = {};
              if (isStepOptional()) {
                labelProps.optional = true;
              }

              return (
                <Tooltip title={label} arrow key={label}>
                  <Step key={label}>
                    <StepLabel {...labelProps}>
                      <Collapse
                        orientation="horizontal"
                        in={index === activeStep}
                        timeout={{ enter: 200, exit: 0 }}
                        easing="easeInOut"
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <Typography variant="h5" color="background.paper">
                            {label}
                          </Typography>
                          {labelProps.optional && (
                            <Typography variant="bodyLight" color="grey.900">
                              Optionnel
                            </Typography>
                          )}
                        </Box>
                      </Collapse>
                    </StepLabel>
                  </Step>
                </Tooltip>
              );
            })}
          </Stepper>
        }
      />
      <DialogContent>Dialog Content</DialogContent>
      <DialogActions>
        <Button color="info" onClick={() => setActiveStep(activeStep - 1)}>
          Annuler
        </Button>
        <Button
          variant="contained"
          color={typeContent}
          onClick={() => setActiveStep(activeStep + 1)}
        >
          Valider
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MuiDialog;
