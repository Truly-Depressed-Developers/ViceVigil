import { Typography } from '@mui/material'
import Paper from '@mui/material/Paper'
import React from 'react'

type EachStatusProps = {
    title: string,
    color: string,
    text: string
}

export const EachStatus: React.FC<{ data: EachStatusProps }> = ({ data }) => {
    return (
        <Paper sx={{ width: "100%", borderRadius: "8px", backgroundColor: data.color, padding: 1 }}>
            <Typography fontSize={"16px"}>{data.title}</Typography>
            <Typography fontSize={"12px"}>{data.text}</Typography>
        </Paper>
    )
}
