'use client'
import { QuoteBar } from '@/components/Main/QuoteBar/QuoteBar';
import { Statistics } from '@/components/Main/Statistics/Statistics';
import { StatusBar } from '@/components/Main/StatusBar/StatusBar';
import { StreaksBar } from '@/components/Main/StreaksBar/StreaksBar';
import { eachStreakType } from '@/components/Main/StreaksBar/StreaksBar';
import { Addiction, AppState } from '@/types/Addiction';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import moment from "moment";
// import { useState } from 'react';

const quoteData = [
  '"Success is the sum of small efforts – repeated day in and day out."',
  '"text2"'
];

const addictions: AppState = [
  {
    addiction: Addiction.drinking,
    data: [
      { date: "21-01-2024", times: 0 },
      { date: "20-01-2024", times: 2 },
      { date: "19-01-2024", times: 2 },
      { date: "18-01-2024", times: 5 },
      { date: "17-01-2024", times: 2 },
      { date: "16-01-2024", times: 0 },
      { date: "15-01-2024", times: 2 },
      { date: "14-01-2024", times: 1 },
      { date: "13-01-2024", times: 2 },
    ]
  },
  {
    addiction: Addiction.smoking,
    data: [
      { date: "21-01-2024", times: 6 },
      { date: "20-01-2024", times: 2 },
      { date: "19-01-2024", times: 2 },
      { date: "18-01-2024", times: 2 },
      { date: "17-01-2024", times: 2 },
      { date: "16-01-2024", times: 0 },
      { date: "15-01-2024", times: 2 },
      { date: "14-01-2024", times: 1 },
      { date: "13-01-2024", times: 2 },
    ]
  },

];

let streaksDataDefault: eachStreakType[] = [
  {
    streak: 12,
    type: "Not drinking"
  },
  {
    streak: 10,
    type: "Not smoking"
  },
  {
    streak: 8,
    type: "Not listening to music"
  },
  {
    streak: 3,
    type: "Not drinking energy drinks"
  },
  {
    streak: 3,
    type: "Not taking drugs"
  }
]

// const addictions: AppState = [
//   {
//     addiction: "Alcohol",
//     info: {
//       weekly: [
//         { label: "mon", times: 0 },
//         { label: "tue", times: 0 },
//         { label: "wed", times: 4 },
//         { label: "thu", times: 10 },
//         { label: "fri", times: 5 },
//         { label: "sat", times: 1 },
//         { label: "sun", times: 3 }
//       ],
//       monthly: [
//         { label: "1 week", times: 9 },
//         { label: "2 week", times: 9 },
//         { label: "3 week", times: 3 },
//         { label: "4 week", times: 4 }
//       ],
//       yearly: [
//         { label: "jan", times: 6 },
//         { label: "feb", times: 6 },
//         { label: "mar", times: 2 },
//         { label: "apr", times: 6 },
//         { label: "may", times: 9 },
//         { label: "jun", times: 7 },
//         { label: "jul", times: 3 },
//         { label: "aug", times: 10 },
//         { label: "sep", times: 0 },
//         { label: "oct", times: 10 },
//         { label: "nov", times: 5 },
//         { label: "dec", times: 8 }
//       ]
//     }
//   },
// ];


const Page: React.FC = () => {
  const [streaksData, setStreaksData] = useState<eachStreakType[]>(streaksDataDefault);
  const [appStateData, setAppStateData] = useState<AppState>(addictions);
  useEffect(() => {
    streaksData.sort((a, b) => b.streak - a.streak);
    console.log(streaksData);
    addStateData();
    setAppStateData(addictions);
    setStreaksData(streaksData);
  }, [streaksData, appStateData])

  const [activeQuote, setActiveQuote] = useState(0);

  const addStateData = () => {
    console.log(moment());
  }
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <StatusBar></StatusBar>
      <QuoteBar quoteData={{ text: quoteData[activeQuote] }}></QuoteBar>
      <StreaksBar streaksData={streaksData}></StreaksBar>
      <Statistics appStateProps={appStateData}></Statistics>

    </Box>
  );
}

export default Page;