import Paper from '@mui/material/Paper'
import React, { useState } from 'react'
import { EachStatus } from './EachStatus'
import { Typography } from '@mui/material'

const statusArray = [
    {
        title: "Congrats!",
        text: "Your current score indicates that you are successfully overcoming your addictions",
        color: "#17302C"
    },
    {
        title: "Be vary!",
        text: "Your current score indicates that you are struggling with being clean",
        color: "#3E341B"
    },
    {
        title: "Attention!",
        text: "Your current score indicates that you are coming back to your addictions",
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
