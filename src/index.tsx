import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

// PAGES
import Welcome from "./pages/Welcome";
import Identification from "./pages/Identification";
import IdentificationCheck from "./pages/IdentificationCheck";
import Home from "./pages/Home";

export default function App() {
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
