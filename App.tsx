import React from 'react';
import StoreProvider from './src/Provider/Store';
import NavigationApp from './src/NavigationApp';
import {SharedElementRenderer} from 'react-native-motion';
import {QueryClient, QueryClientProvider} from 'react-query';
const queryClient = new QueryClient();
const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <SharedElementRenderer>
          <NavigationApp />
        </SharedElementRenderer>
      </StoreProvider>
    </QueryClientProvider>
  );
};

export default App;
