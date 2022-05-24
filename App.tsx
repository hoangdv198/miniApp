import React from 'react';
import StoreProvider from './src/Provider/Store';
import NavigationApp from './src/NavigationApp';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();
const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <NavigationApp />
      </StoreProvider>
    </QueryClientProvider>
  );
};

export default App;
