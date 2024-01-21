import { Box, Paper, Typography } from '@mui/material';
import React from 'react';
import './../Main.scss';
import { StreaksBarFirst } from './StreaksBarFirst';

export type eachStreakType = {
    streak: number,
    type: string
}

export const StreaksBar: React.FC<{ streaksData: eachStreakType[] }> = ({ streaksData }) => {
    return (
        <Paper className="paperStyle" elevation={2}>
            <Typography sx={{ margin: 2 }}>Daily Streaks</Typography>
            <Box sx={{ width: "100%", display: "flex" }}>
                <Box sx={{ width: "40%" }}><StreaksBarFirst streaksData={streaksData[0]}></StreaksBarFirst></Box>
                <Box sx={{ width: "60%", marginTop: -2 }}>
                    {
                        streaksData.slice(1, streaksData.length).map((eachStreak, i) => {
                            return (
                                <Box key={i} sx={{ display: "flex", justifyContent: "space-between", margin: 2 }}>
                                    <Typography className='smallText'>{eachStreak.type}</Typography>
                                    <Typography className='smallText'>{eachStreak.streak} days</Typography>
                                </Box>
                            )
                        })
                    }
                </Box>
            </Box>
        </Paper>
    )
}
