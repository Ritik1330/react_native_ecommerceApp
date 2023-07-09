import {Text, View} from 'react-native';
import React, {Component, useEffect} from 'react';

import {Provider} from 'react-redux';
import store from './src/redux/store';
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
          <Routes />
        </Provider>
      </SafeAreaProvider>
    </>
  );
}

export default App;
