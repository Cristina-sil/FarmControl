import React, { useEffect } from "react";
import {BackHandler} from 'react-native';

// Libs
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import SplashScreen from "react-native-splash-screen";

// Utils
import { store, persistor } from "./store";

// App
import Route from "./route";

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
    BackHandler.addEventListener('hardwareBackPress', () => true);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', () => true);
    }
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Route />
      </PersistGate>
    </Provider>
  );
}
