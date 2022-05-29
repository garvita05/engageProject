import React, { useState } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  PhotosStackScreen,
  SharingStackScreen,
  LibraryStackScreen,
  SearchStackScreen,
} from "./StackScreen";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PhotosScreen from "./PhotosScreen";
import SearchScreen from "./SearchScreen";
import SharingScreen from "./SharingScreen";
import LibraryScreen from "./LibraryScreen";

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
  const [route, setRoute] = useState("Photos");
  return (
    <Tab.Navigator initialRouteName="PhotosStack">
      <Tab.Screen
        name="PhotosStack"
        component={PhotosScreen}
        listeners={{
          tabPress: (e) => {
            setRoute("Photos");
          },
        }}
        options={{
          tabBarLabel: "",
          tabBarColor: "#bc8f8f",
          tabBarIcon: () => (
            <FontAwesome
              name="photo"
              size={24}
              color={route === "Photos" ? "0000" : "fff"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SearchStack"
        component={SearchScreen}
        listeners={{
          tabPress: (e) => {
            setRoute("Search");
          },
        }}
        options={{
          tabBarLabel: "",
          tabBarColor: "#bc8f8f",
          tabBarIcon: () => (
            <FontAwesome
              name="search"
              size={24}
              color={route === "Search" ? "#000" : "#fff"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SharingStack"
        component={SharingScreen}
        listeners={{
          tabPress: (e) => {
            setRoute("Sharing");
          },
        }}
        options={{
          tabBarLabel: "",
          tabBarColor: "#bc8f8f",
          tabBarIcon: () => (
            <Feather
              name="share-2"
              size={24}
              color={route === "Sharing" ? "#000" : "#fff"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="LibraryStack"
        component={LibraryScreen}
        listeners={{
          tabPress: (e) => {
            setRoute("Library");
          },
        }}
        options={{
          tabBarLabel: "",
          tabBarColor: "#bc8f8f",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="library-shelves"
              size={24}
              color={route === "Library" ? "#000" : "#fff"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabScreen;
