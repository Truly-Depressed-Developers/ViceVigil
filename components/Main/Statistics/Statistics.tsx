'use client'
import Box from '@mui/material/Box'
import React, { useEffect } from 'react'
import { StatisticsChart } from './StatisticsChart'
import MobileStepper from '@mui/material/MobileStepper'
import Button from '@mui/material/Button'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper'
import ButtonGroup from '@mui/material/ButtonGroup'
import CSS from 'csstype';
import { Typography } from '@mui/material'
import { AppState, LabelType } from '@/types/Addiction'
import moment from 'moment'
// let addictions = [
//     {
//         name: "Alcohol",
//         xAxis: [1, 2, 3, 5, 8, 10],
//         yAxis: [2, 5.5, 2, 8.5, 1.5, 5]
//     },
//     {
//         name: "Drugs",
//         xAxis: [6, 3, 5, 5, 8, 1],
//         yAxis: [8, 5.5, 5, 8.5, 3, 5]
//     },
//     {
//         name: "Smoking",
//         xAxis: [4, 4, 3, 5, 8, 10],
//         yAxis: [8, 6, 2, 2, 1.5, 5]
//     }
// ];

// const addictions = [
//     {
//         category: "Alcohol",
//         info: {
//             weekly: [
//                 { label: "mon", times: 0 },
//                 { label: "tue", times: 0 },
//                 { label: "wed", times: 4 },
//                 { label: "thu", times: 10 },
//                 { label: "fri", times: 5 },
//                 { label: "sat", times: 1 },
//                 { label: "sun", times: 3 }
//             ],
//             monthly: [
//                 { label: "1 week", times: 9 },
//                 { label: "2 week", times: 9 },
//                 { label: "3 week", times: 3 },
//                 { label: "4 week", times: 4 }
//             ],
//             yearly: [
//                 { label: "jan", times: 6 },
//                 { label: "feb", times: 6 },
//                 { label: "mar", times: 2 },
//                 { label: "apr", times: 6 },
//                 { label: "may", times: 9 },
//                 { label: "jun", times: 7 },
//                 { label: "jul", times: 3 },
//                 { label: "aug", times: 10 },
//                 { label: "sep", times: 0 },
//                 { label: "oct", times: 10 },
//                 { label: "nov", times: 5 },
//                 { label: "dec", times: 8 }
//             ]
//         }
//     },
//     {
//         category: "Smoking",
//         info: {
//             weekly: [
//                 { label: "mon", times: 0 },
//                 { label: "tue", times: 6 },
//                 { label: "wed", times: 2 },
//                 { label: "thu", times: 5 },
//                 { label: "fri", times: 6 },
//                 { label: "sat", times: 2 },
//                 { label: "sun", times: 4 }
//             ],
//             monthly: [
//                 { label: "1 week", times: 3 },
//                 { label: "2 week", times: 1 },
//                 { label: "3 week", times: 6 },
//                 { label: "4 week", times: 9 }
//             ],
//             yearly: [
//                 { label: "jan", times: 1 },
//                 { label: "feb", times: 4 },
//                 { label: "mar", times: 0 },
//                 { label: "apr", times: 9 },
//                 { label: "may", times: 0 },
//                 { label: "jun", times: 0 },
//                 { label: "jul", times: 9 },
//                 { label: "aug", times: 5 },
//                 { label: "sep", times: 1 },
//                 { label: "oct", times: 6 },
//                 { label: "nov", times: 7 },
//                 { label: "dec", times: 1 }
//             ]
//         }
//     },
//     {
//         category: "Drugs",
//         info: {
//             weekly: [
//                 { label: "mon", times: 1 },
//                 { label: "tue", times: 7 },
//                 { label: "wed", times: 9 },
//                 { label: "thu", times: 1 },
//                 { label: "fri", times: 6 },
//                 { label: "sat", times: 2 },
//                 { label: "sun", times: 1 }
//             ],
//             monthly: [
//                 { label: "1 week", times: 1 },
//                 { label: "2 week", times: 3 },
//                 { label: "3 week", times: 1 },
//                 { label: "4 week", times: 10 }
//             ],
//             yearly: [
//                 { label: "jan", times: 4 },
//                 { label: "feb", times: 2 },
//                 { label: "mar", times: 8 },
//                 { label: "apr", times: 0 },
//                 { label: "may", times: 0 },
//                 { label: "jun", times: 6 },
//                 { label: "jul", times: 6 },
//                 { label: "aug", times: 7 },
//                 { label: "sep", times: 8 },
//                 { label: "oct", times: 3 },
//                 { label: "nov", times: 3 },
//                 { label: "dec", times: 6 }
//             ]
//         }
//     }
// ];
type Weekday = {
    label: string,
    times: number
}

type MonthWeek = {
    label: string,
    times: number
}

type YearMonth = {
    label: string,
    times: number
}

type ToView = {
    weekly: Weekday[]
    monthly: MonthWeek[]
}

const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
]


export const Statistics: React.FC<{ appStateProps: AppState }> = ({ appStateProps }) => {
    const theme = useTheme();
    const [maxSteps, setSteps] = React.useState(appStateProps.length);
    const [activeStep, setActiveStep] = React.useState(0);
    const [activeInfo, setActiveInfo] = React.useState<"weekly" | "monthly" | "yearly">("weekly");
    const [today, setToday] = React.useState(moment(new Date()).format('DD-MM-YYYY'));
    const [label, setLabel] = React.useState<LabelType[]>([]);
    let [weekly, setWeekly] = React.useState<Weekday[]>([]);
    let [monthly, setMonthly] = React.useState<MonthWeek[]>([]);
    let [yearly, setYearly] = React.useState<YearMonth[]>([]);
    useEffect(() => {
        update();

    }, []);

    const update = () => {
        weekly = [];
        for (let i = 6; i >= 0; i--) {
            let d = new Date();
            d.setDate(d.getDate() - i);
            const mom = moment(d);
            // console.log(mom.format('ddd'))
            // label.push({ date: mom.format('DD-MM-YYYY'), label: mom.format('ddd') });
            weekly.push({ label: mom.format('ddd'), times: appStateProps[activeStep].data[i].times });
        }
        setWeekly(weekly);

        yearly = [];
        // console.log(moment());
        for (let i = 11; i >= 0; i--) {
            let d = new Date();
            // console.log((d.getMonth() + i) % 12);

            const monthName = months[(d.getMonth() + i) % 12];
            let times = 0;
            appStateProps[activeStep].data.forEach(element => {
                const dateof = moment(element.date, "DD-MM-YYYY");
                if (dateof.month() == i) {
                    times += element.times;
                }
                // console.log(dateof.month());
            });
            yearly.push({ label: monthName, times: times });

        }
        setYearly(yearly);
        console.log(yearly);

        monthly = [];
        let week = 1;
        let counter = 0;
        let canDo = false;
        // console.log("ff");
        for (let i = 27; i >= 0; i--) {
            console.log(counter);
            let d = new Date();
            d.setDate(d.getDate() - i);
            const mom = moment(d);
            let datePrev = new Date();
            datePrev.setDate(datePrev.getDate() - i - 7);
            const momPrev = moment(datePrev);
            if (appStateProps[activeStep].data[i]) {
                counter += appStateProps[activeStep].data[i].times;
            }
            if (i % 7 == 0) {
                canDo = true;
            }
            if (canDo) {
                // console.log(momPrev, mom)
                monthly.push({ label: `${momPrev.format('DD.MM')} - ${mom.format('DD.MM')}`, times: counter });
                counter = 0;
                canDo = false;
            }

        }
        console.log(monthly)
        setMonthly(monthly);
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        update();
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        update();
    };

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };

    const handleInfoChange = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, val: "weekly" | "monthly" | "yearly") => {
        setActiveInfo(val);
    }

    const inactiveButton: CSS.Properties = {
        border: "none",
        fontSize: "12px",
        height: "18px",
        borderRadius: "8px",
        margin: 0,
        width: "65px"
    };

    return (
        <Box sx={{
            width: "100%"
        }}>
            <Paper sx={{ width: "100%", padding: 2, marginTop: 2, marginBottom: 2 }} elevation={2}>
                {
                    appStateProps[activeStep] != null ?
                        <div>
                            {
                                activeInfo === "weekly" ?
                                    <StatisticsChart info={weekly}></StatisticsChart>
                                    : (activeInfo === "monthly") ?
                                        <StatisticsChart info={monthly}></StatisticsChart>
                                        : (activeInfo === "yearly") ?
                                            <StatisticsChart info={yearly}></StatisticsChart>
                                            :
                                            null
                            }
                            <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                <ButtonGroup sx={{ borderRadius: "8px", backgroundColor: "#343434", padding: 0 }} variant="contained" aria-label="outlined primary button group">
                                    <Button
                                        style={inactiveButton}
                                        sx={{
                                            backgroundColor: activeInfo === "weekly" ? "white" : "transparent",
                                            color: activeInfo === "weekly" ? "black" : "white",
                                            "&:hover": {
                                                backgroundColor: "white",
                                            },
                                        }}
                                        onClick={(e) => handleInfoChange(e, "weekly")}
                                    >
                                        W
                                    </Button>
                                    <Button
                                        style={inactiveButton}
                                        sx={{
                                            backgroundColor: activeInfo === "monthly" ? "white" : "transparent",
                                            color: activeInfo === "monthly" ? "black" : "white",
                                            "&:hover": {
                                                backgroundColor: "white",
                                            },
                                        }}
                                        onClick={(e) => handleInfoChange(e, "monthly")}
                                    >
                                        M
                                    </Button>
                                    <Button
                                        style={inactiveButton}
                                        sx={{
                                            backgroundColor: activeInfo === "yearly" ? "white" : "transparent",
                                            color: activeInfo === "yearly" ? "black" : "white",
                                            "&:hover": {
                                                backgroundColor: "white",
                                            },
                                        }}
                                        onClick={(e) => handleInfoChange(e, "yearly")}
                                    >
                                        Y
                                    </Button>
                                </ButtonGroup>
                            </Box>
                            <Box sx={{ width: "100%", marginTop: 2, display: "flex", justifyContent: "center" }}>
                                <Box sx={{ width: "80%", display: "flex", justifyContent: "space-between" }}>
                                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                        {theme.direction === 'rtl' ? (
                                            <KeyboardArrowRight />
                                        ) : (
                                            <KeyboardArrowLeft />
                                        )}
                                        {/* Back */}
                                    </Button>
                                    <Typography sx={{ display: "flex", alignItems: "center" }}>{appStateProps[activeStep].addiction}</Typography>
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
                                </Box>

                            </Box>
                        </div>
                        :
                        null


                }


            </Paper>
        </Box>
    )
}
