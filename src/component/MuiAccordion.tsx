import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  AccordionActions,
  Button,
  AccordionSlots,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Fade from "@mui/material/Fade";
import { useState } from "react";

const MuiAccordion = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandsion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  return (
    <div>
      <Accordion>
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ArrowDownwardIcon />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          eligendi modi consequuntur ipsum neque aspernatur natus praesentium
          recusandae vitae. Sit ea ab quasi, excepturi nemo odit. Ducimus
          deleniti sequi dolorem.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            eligendi modi consequuntur ipsum neque aspernatur natus praesentium
            recusandae vitae. Sit ea ab quasi, excepturi nemo odit. Ducimus
            deleniti sequi dolorem.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Accordion Default */}
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography>Expanded by default</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            eligendi modi consequuntur ipsum neque aspernatur natus praesentium
            recusandae vitae. Sit ea ab quasi, excepturi nemo odit. Ducimus
            deleniti sequi dolorem.
          </Typography>
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion>

      {/* Transition */}
      <Accordion
        expanded={expanded}
        onChange={handleExpandsion}
        slots={{ transition: Fade as AccordionSlots["transition"] }}
        slotProps={{ transition: { timeout: 1000 } }}
        sx={{
          "& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
          "& .MuiAccordionDetails-root": {
            display: expanded ? "block" : "none",
          },
        }}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            eligendi modi consequuntur ipsum neque aspernatur natus praesentium
            recusandae vitae. Sit ea ab quasi, excepturi nemo odit. Ducimus
            deleniti sequi dolorem.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Disable Accordion */}
      <Accordion disabled>
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ArrowDownwardIcon />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          eligendi modi consequuntur ipsum neque aspernatur natus praesentium
          recusandae vitae. Sit ea ab quasi, excepturi nemo odit. Ducimus
          deleniti sequi dolorem.
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MuiAccordion;
