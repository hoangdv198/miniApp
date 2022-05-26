import React from 'react';
import StoreProvider from './src/Provider/Store';
import NavigationApp from './src/NavigationApp';
import {QueryClient, QueryClientProvider} from 'react-query';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const queryClient = new QueryClient();
const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <GestureHandlerRootView style={{flex: 1}}>
          <NavigationApp />
        </GestureHandlerRootView>
      </StoreProvider>
    </QueryClientProvider>
  );
};

export default App;
