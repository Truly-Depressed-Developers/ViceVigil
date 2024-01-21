'use client'
import { QuoteBar } from '@/components/Main/QuoteBar/QuoteBar';
import { Statistics } from '@/components/Main/Statistics/Statistics';
import { StatusBar } from '@/components/Main/StatusBar/StatusBar';
import { StreaksBar } from '@/components/Main/StreaksBar/StreaksBar';
import { eachStreakType } from '@/components/Main/StreaksBar/StreaksBar';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
// import { useState } from 'react';

const quoteData = [
  '"Success is the sum of small efforts – repeated day in and day out."',
  '"text2"'
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

const Page: React.FC = () => {
  const [streaksData, setStreaksData] = useState<eachStreakType[]>(streaksDataDefault);
  useEffect(() => {
    streaksData.sort((a, b) => b.streak - a.streak);
    console.log(streaksData);
    setStreaksData(streaksData);
  }, [streaksData])

  const [activeQuote, setActiveQuote] = useState(0);
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
      <Statistics></Statistics>

    </Box>
  );
}

export default Page;