'use client'

import {Accordion, AccordionDetails, AccordionSummary, AccordionActions, Button } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type Props<T> = T & {expanded: boolean, onClick: () => void};

const SettingsGroupItem = <T extends Record<string, any>>(props: Props<T>) => {
  return (
    <div>
      <Accordion expanded={props.expanded} elevation={2}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          onClick={() => props.onClick()}
        >
          {props.name}
        </AccordionSummary>

        <AccordionDetails>
          {props.description}
        </AccordionDetails>

        <AccordionActions>
          <Button color="error">Remove</Button>
        </AccordionActions>
      </Accordion>
    </div>
  )
}

export {SettingsGroupItem};