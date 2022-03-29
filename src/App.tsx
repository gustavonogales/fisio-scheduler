import '@/interceptors/authorization';

import { ChakraProvider } from '@chakra-ui/react';
import { configure } from 'axios-hooks';
import React from 'react';

import { Routes } from './routes';
import { api } from './utils';

configure({ axios: api });

export function App() {
  return (
    <ChakraProvider>
      <Routes />
    </ChakraProvider>
  );
}
