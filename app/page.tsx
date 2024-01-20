'use client'
import { Statistics } from '@/components/Statistics/Statistics';
import { StatusBar } from '@/components/StatusBar/StatusBar';
import { Box } from '@mui/material';
import React from 'react';
// import { useState } from 'react';


const Page: React.FC = () => {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <StatusBar></StatusBar>
      <Statistics></Statistics>

    </Box>

  );
}

export default Page;