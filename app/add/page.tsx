'use client'

import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Addiction } from "@/types/Addiction";
import { DatePicker } from "@mui/x-date-pickers";
import moment from "moment";
import { SetStateAction, useState } from "react";
import Button from "@mui/material/Button";
import { addictions } from "../page";

const Page: React.FC = () => {
  const [dateOO, setDateOO] = useState(moment());
  const [add, setAdd] = useState("drinking");
  const [times, setTimes] = useState(0);

  const changeAdd = (event: any) => {
    console.log(event.target.value);
    setAdd(event.target.value);
  }

  const changeTimes = (event: any) => {
    console.log(event.target.value);
    setTimes(event.target.value);
  }

  const handleClick = () => {
    console.log(dateOO.format("DD-MM-YYYY"));
    addictions.forEach(element => {
      if (element.addiction == add) {
        let isAdded = false;
        element.data.forEach(el => {
          if (el.date == dateOO.format("DD-MM-YYYY")) {
            el.times = el.times += times;
            isAdded = true;
          }
        });
        if (!isAdded) {
          element.data.push({ date: dateOO.format("DD-MM-YYYY"), times: times });
        }
      }
    });
  }

  return (
    <Box>
      <FormControl fullWidth>

        <InputLabel id="select-label">Addiction</InputLabel>
        <Select
          labelId="select-label"
          label="Addiction"
          onChange={(e) => changeAdd(e)}
        >
          {Object.keys(Addiction).map((a) => <MenuItem key={a} value={a}>{a}</MenuItem>)}
        </Select>



        <Box sx={{ p: 1 }} />

        <DatePicker
          label="Date of occurance"
          value={dateOO}
          onChange={d => d && setDateOO(d)}
          maxDate={moment()}
          format="DD-MM-YYYY"
        />

        <Box sx={{ p: 1 }} />


      </FormControl>
      <FormControl fullWidth>

        <InputLabel id="times-label">Number of times</InputLabel>
        <Select
          labelId="times-label"
          label="Number of times"
          onChange={(e) => changeTimes(e)}
        >
          {[1, 2, 3, 4, 5, 6].map((a) => <MenuItem key={a} value={a}>{a}</MenuItem>)}
        </Select>
      </FormControl>
      <Button onClick={() => handleClick()} sx={{ margin: 2 }} color="primary" >Add occurance</Button>
    </Box>
  );
}

export default Page;