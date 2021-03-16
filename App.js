import React from 'react';
import 'react-native-gesture-handler';

import AppNavContainer from './src/navigation';
import GlobalProvider from './src/context/Provider';

export default function App() {
  return (
    <GlobalProvider>
      <AppNavContainer/>
    </GlobalProvider>
  );
}