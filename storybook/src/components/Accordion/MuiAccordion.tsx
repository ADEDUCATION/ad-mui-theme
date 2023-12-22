import {
  Accordion,
  AccordionDetails,
  AccordionProps,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { GridExpandMoreIcon } from "@mui/x-data-grid";
import { MuiOmits } from "../../utils";

export type MuiAccordionProps = Omit<AccordionProps, MuiOmits>;

const MuiAccordion = ({ ...rest }: MuiAccordionProps) => {
  return (
    <>
      <Accordion {...rest}>
        <AccordionSummary expandIcon={<GridExpandMoreIcon />}>
          <Typography variant="h6">Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Le texte au sein de mon accordeon</Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default MuiAccordion;
