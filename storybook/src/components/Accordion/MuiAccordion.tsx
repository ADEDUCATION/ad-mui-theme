import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { GridExpandMoreIcon } from "@mui/x-data-grid";

const MuiAccordion = () => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<GridExpandMoreIcon />}>
        <Typography>Accordion 1</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>Le texte au sein de mon accordeon</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default MuiAccordion;
