import { Box, Paper, Typography } from '@mui/material';
import React from 'react';
import './../Main.scss';
import { eachStreakType } from './StreaksBar';
import streak from "@/public/streak.svg"
import Image from 'next/image';

export const StreaksBarFirst: React.FC<{ streaksData: eachStreakType }> = ({ streaksData }) => {
    return (
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Box sx={{ position: "relative" }}><Image
                priority
                src={streak}
                alt="streak svg"
            />
                <Box sx={{ width: "100%", position: "absolute", bottom: 5, display: "flex", marginLeft: "-3px", justifyContent: "center" }}><Typography fontWeight="bold">{streaksData.streak}</Typography></Box></Box>
            <Box><Typography fontWeight="bold" sx={{ fontSize: "12px" }}>{streaksData.type}</Typography></Box>
        </Box>
    )
}
