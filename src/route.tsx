import React from "react";

// Libs
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// PAGES
import Welcome from "./pages/Welcome";
import Identification from "./pages/Identification";
import IdentificationCheck from "./pages/IdentificationCheck";
import Home from "./pages/Home";
import Step1 from "./pages/Register/Step1";
import Step2 from "./pages/Register/Step2";

const Stack = createNativeStackNavigator();

const Route = () => {
  return (
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
        <Stack.Screen name="Step1" component={Step1} />
        <Stack.Screen name="Step2" component={Step2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
