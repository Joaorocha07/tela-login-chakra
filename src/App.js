import React from 'react';
import { ChakraProvider,theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher 
        justifySelf="flex-end" 
        position="absolute" 
        top={4} 
        right={3} 
      />
      <AppRoutes />
    </ChakraProvider>
  );
}

export default App;
