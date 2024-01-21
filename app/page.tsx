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
  '"Sukces to suma małych wysiłków, powtarzanych dzień po dniu."',
  '"text2"'
];


let streaksDataDefault: eachStreakType[] = [
  {
    streak: 12,
    type: "Not drinking alcohol"
  },
  {
    streak: 10,
    type: "Not smoking cigarettes"
  },
  {
    streak: 8,
    type: "Not listening to music"
  },
  {
    streak: 3,
    type: "Not drinking energizers"
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