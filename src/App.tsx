import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { QueryClient, QueryClientProvider } from 'react-query';
import { RestaurantManager } from './components/RestaurantManager';
const queryClient = new QueryClient();


const App: React.FC = () => {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <RestaurantManager />
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default App;