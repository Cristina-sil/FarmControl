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
import Step3 from "./pages/Register/Step3";
import Finish from "./pages/Register/Finish";
import SelectManager from "./pages/Manager/SelectManager";
import HomeManager from "./pages/Manager/HomeManager";
import ManagerDetails from "./pages/Manager/ManagerDetails";
import Step1Edit from "./pages/Manager/EditManager/Step1Edit";
import Step2Edit from "./pages/Manager/EditManager/Step2Edit";

const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
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
        <Stack.Screen name="Step3" component={Step3} />
        <Stack.Screen name="Finish" component={Finish} />
        <Stack.Screen name="SelectManager" component={SelectManager} />
        <Stack.Screen name="HomeManager" component={HomeManager} />
        <Stack.Screen name="ManagerDetails" component={ManagerDetails} />
        <Stack.Screen name="Step1Edit" component={Step1Edit} />
        <Stack.Screen name="Step2Edit" component={Step2Edit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
