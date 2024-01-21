'use client'

import {Accordion, AccordionDetails, AccordionSummary, AccordionActions, Button, Typography} from "@mui/material";
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
          <Typography sx={{color: "#bbb"}}>{props.name}</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography sx={{color: "#bbb"}}>{props.description}</Typography>
        </AccordionDetails>

        <AccordionActions>
          <Button color="error" variant="outlined">Remove</Button>
        </AccordionActions>
      </Accordion>
    </div>
  )
}

export {SettingsGroupItem};