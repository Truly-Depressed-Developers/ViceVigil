import styles from "./Navbar.module.scss";
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { ArgumentAxis, BarSeries, Chart, Title, ValueAxis } from "@devexpress/dx-react-chart-material-ui";
import { Palette } from '@devexpress/dx-react-chart';
import Box from "@mui/material/Box";


type DatailedInfo = {
    label: string,
    times: number
}

type DataStatistics = {
    category: string,
    info: DatailedInfo[]

}


export const StatisticsChart: React.FC<DataStatistics> = (statProps: DataStatistics) => {
    return (

        <Box>
            <div>
                <Chart height={230} data={statProps.info}>
                    <ArgumentAxis />
                    <ValueAxis showGrid={false} />
                    <BarSeries color="#E65900" valueField="times" argumentField="label" />
                </Chart>
            </div>

        </Box>
        // </Paper>
        // <div>Statistics</div>
    )
}

