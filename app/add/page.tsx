'use client'

import {Box, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {Addiction} from "@/types/Addiction";
import {DatePicker} from "@mui/x-date-pickers";
import moment from "moment";
import {useState} from "react";
import Button from "@mui/material/Button";

const Page: React.FC = () => {
  const [dateOO, setDateOO] = useState(moment());

  return(
    <div>
      <FormControl fullWidth>
        <InputLabel id="select-label">Addiction</InputLabel>
        <Select
          labelId="select-label"
          label="Addiction"
        >
          {Object.keys(Addiction).map((a) => <MenuItem key={a} value={a}>{a}</MenuItem>)}
        </Select>

        <Box sx={{p:1}} />

        <DatePicker
          label="Date of occurance"
          value={dateOO}
          onChange={d => d && setDateOO(d)}
          maxDate={moment()}
          format="DD.MM.YYYY"
        />

        <Box sx={{p:1}} />

        <Button color="primary" >Add occurance</Button>
        </FormControl>
    </div>
  );
}

export default Page;