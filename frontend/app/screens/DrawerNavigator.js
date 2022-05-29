import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MainTabScreen } from "./MainTabScreen";

import DrawerContent from "../DrawerContent";

const Drawer = createDrawerNavigator();

function DrawerNavigator(props) {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="MainTab"
        component={MainTabScreen}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
