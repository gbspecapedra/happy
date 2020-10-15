import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { OrphanagesMap } from "./views/OrphanagesMap";
import { OrphanageDetails } from "./views/OrphanageDetails";

const { Navigator, Screen } = createStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="OrphanagesMap" component={OrphanagesMap} />
        <Screen name="OrphanageDetails" component={OrphanageDetails} />
      </Navigator>
    </NavigationContainer>
  );
};
