import * as React from "react";

// Libs
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import SplashScreen from "react-native-splash-screen";

import { store, persistor } from "./store";

const Stack = createNativeStackNavigator();

// PAGES
import Welcome from "./pages/Welcome";
import Identification from "./pages/Identification";
import IdentificationCheck from "./pages/IdentificationCheck";
import Home from "./pages/Home";

export default function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Welcome"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Identification" component={Identification} />
            <Stack.Screen
              name="IdentificationCheck"
              component={IdentificationCheck}
            />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
