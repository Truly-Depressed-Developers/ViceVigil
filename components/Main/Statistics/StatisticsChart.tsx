import styles from "./Navbar.module.scss";
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';


interface DataStatistics {
    name: string,
    chartData: {
        xAxis: number[],
        yAxis: number[]
    }
}

export const StatisticsChart: React.FC<DataStatistics> = (statProps: DataStatistics) => {
    return (
        <Paper sx={{ width: "100%", height: 250, padding: 1 }} elevation={2}>
            <Typography>{statProps.name}</Typography>
            <BarChart
                xAxis={[{ scaleType: 'band', data: statProps.chartData.xAxis }]}
                series={[
                    { data: statProps.chartData.yAxis }
                ]}
                sx={{ width: "100%", height: "100%" }}
            />
        </Paper>
        // <div>Statistics</div>
    )
}

