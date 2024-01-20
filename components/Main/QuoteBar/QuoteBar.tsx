import { Paper, Typography } from '@mui/material'
import React from 'react'

type QuoteProps = {
    text: string
}

export const QuoteBar: React.FC<{ quoteData: QuoteProps }> = ({ quoteData }) => {
    return (
        <Paper elevation={2} sx={{
            width: "100%",
            margin: 2,
            padding: 2
        }}>
            <Typography sx={{ marginBottom: 1 }}>Daily Quotes</Typography>
            <Typography fontSize={"14px"} fontStyle={"italic"} color={"#BCBABA"}>{quoteData.text}</Typography>
        </Paper>
    )
}
