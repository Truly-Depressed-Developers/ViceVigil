import Paper from '@mui/material/Paper'
import React, { useState } from 'react'
import { EachStatus } from './EachStatus'
import { Typography } from '@mui/material'

const statusArray = [
    {
        title: "Gratulujemy!",
        text: "Twoje obecne wyniki wskazują, że oddalasz się od swoich uzależnień.",
        color: "#17302C"
    },
    {
        title: "Ostrożnie!",
        text: "Twoje obecne wyniki wskazują, że nie do końca starasz się wyłamać z uzależnień.",
        color: "#3E341B"
    },
    {
        title: "Uwaga!",
        text: "Twoje obecne wyniki wskazują, że bardziej pogłębiasz się niż oddalasz ze swoich uzależnień.",
        color: "#6C2928"
    },
]

export const StatusBar: React.FC = () => {
    const [activeStatus, setActiveStatus] = useState(0);
    return (
        <Paper elevation={2} sx={{
            width: "100%",
            padding: 2,
            borderRadius: "8px"
        }}>
            <Typography sx={{ marginBottom: 1 }}>Status</Typography>
            <EachStatus data={statusArray[activeStatus]}></EachStatus>
        </Paper>
    )
}
