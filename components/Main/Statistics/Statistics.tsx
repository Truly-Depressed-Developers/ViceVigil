import Box from '@mui/material/Box'
import React from 'react'
import { StatisticsChart } from './StatisticsChart'
import MobileStepper from '@mui/material/MobileStepper'
import Button from '@mui/material/Button'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import { useTheme } from '@mui/material/styles';

let addictions = [
    {
        name: "Alcohol",
        xAxis: [1, 2, 3, 5, 8, 10],
        yAxis: [2, 5.5, 2, 8.5, 1.5, 5]
    },
    {
        name: "Drugs",
        xAxis: [6, 3, 5, 5, 8, 1],
        yAxis: [8, 5.5, 5, 8.5, 3, 5]
    },
    {
        name: "Smoking",
        xAxis: [4, 4, 3, 5, 8, 10],
        yAxis: [8, 6, 2, 2, 1.5, 5]
    }
];


export const Statistics: React.FC = () => {
    const theme = useTheme();
    const [maxSteps, setSteps] = React.useState(3);
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{
            width: "100%", height: 300, display: "flex", justifyContent: "center",
            alignItems: "center", flexDirection: "column", margin: 2
        }}>
            <StatisticsChart name={addictions[activeStep].name} chartData={{
                xAxis: addictions[activeStep].xAxis,
                yAxis: addictions[activeStep].yAxis
            }}></StatisticsChart>
            <MobileStepper
                // elevation={2}
                sx={{ background: "transparent" }}
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        {/* Next */}
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        {/* Back */}
                    </Button>
                }
            />
        </Box>
    )
}
