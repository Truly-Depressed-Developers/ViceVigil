'use client'
import { StatisticsChart } from '@/components/Statistics/StatisticsChart';
import { Box, Button, MobileStepper } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import React from 'react';
import { useTheme } from '@mui/material/styles';
// import { useState } from 'react';

let addictions = [
  {
    name: "Alkohol",
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

const Page: React.FC = () => {
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
      display: "flex",
      flexDirection: "column",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      padding: 3
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

  );
}

export default Page;