'use client'
import { QuoteBar } from '@/components/Main/QuoteBar/QuoteBar';
import { Statistics } from '@/components/Main/Statistics/Statistics';
import { StatusBar } from '@/components/Main/StatusBar/StatusBar';
import { Box } from '@mui/material';
import React, { useState } from 'react';
// import { useState } from 'react';

const quoteData = [
  '"Sukces to suma małych wysiłków, powtarzanych dzień po dniu."',
  '"text2"'
]

const Page: React.FC = () => {
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
      <Statistics></Statistics>

    </Box>
  );
}

export default Page;