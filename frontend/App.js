import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import React, { useState } from "react";
import DrawerNavigator from "./app/screens/DrawerNavigator";
import MainTabScreen from "./app/screens/MainTabScreen";
import "react-native-gesture-handler";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  PhotosStackScreen,
  SharingStackScreen,
  LibraryStackScreen,
  SearchStackScreen,
} from "./app/screens/StackScreen";

import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PhotosScreen from "./app/screens/PhotosScreen";
import SearchScreen from "./app/screens/SearchScreen";
import SharingScreen from "./app/screens/SharingScreen";
import LibraryScreen from "./app/screens/LibraryScreen";
const Tab = createMaterialBottomTabNavigator();

function MyApp({ navigation }) {
  const [route, setRoute] = useState("Photos");
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="PhotosStack">
        <Tab.Screen
          name="Photos"
          component={PhotosScreen}
          listeners={{
            tabPress: (e) => {
              setRoute("Photos");
            },
          }}
          options={{
            tabBarLabel: "Photos",
            tabBarColor: "#bc8f8f",
            tabBarIcon: () => (
              <FontAwesome name="photo" size={24} color="#000000" />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          listeners={{
            tabPress: (e) => {
              setRoute("Search");
            },
          }}
          options={{
            tabBarLabel: "Search",
            tabBarColor: "#bc8f8f",
            tabBarIcon: () => (
              <FontAwesome name="search" size={24} color="#000000" />
            ),
          }}
        />
        <Tab.Screen
          name="Sharing"
          component={SharingScreen}
          listeners={{
            tabPress: (e) => {
              setRoute("Sharing");
            },
          }}
          options={{
            tabBarLabel: "Sharing",
            tabBarColor: "#bc8f8f",
            tabBarIcon: () => (
              <Feather name="share-2" size={24} color="#000000" />
            ),
          }}
        />
        <Tab.Screen
          name="Library"
          component={LibraryScreen}
          listeners={{
            tabPress: (e) => {
              setRoute("Library");
            },
          }}
          options={{
            tabBarLabel: "Library",
            tabBarColor: "#bc8f8f",
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="library-shelves"
                size={24}
                color="#000000"
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyApp;
