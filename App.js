import {Text, View} from 'react-native';
import React, {Component, useEffect} from 'react';

import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store';
//redux prisist

import {PersistGate} from 'redux-persist/integration/react';
import strings from './src/constants/lang/i18n';
import Routes from './src/Navigation/Routes';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App() {
  // useEffect(() => {
  //   strings.setLanguage('en');
  //   strings.setLanguage('en');
  // }, []);

  return (
    <>
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Routes />
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    </>
  );
}

export default App;
