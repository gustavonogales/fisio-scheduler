import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';

import { Routes } from './routes';

export function App() {
  return (
    <ChakraProvider>
      <Routes />
    </ChakraProvider>
  );
}
