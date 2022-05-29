import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import PhotosScreen from "./PhotosScreen";
import SearchScreen from "./SearchScreen";
import SharingScreen from "./SharingScreen";
import LibraryScreen from "./LibraryScreen";

const PhotosStack = createStackNavigator();
const SearchStack = createStackNavigator();
const SharingStack = createStackNavigator();
const LibraryStack = createStackNavigator();

const PhotosStackScreen = () => {
  return (
    <PhotosStack.Navigator>
      <PhotosStack.Screen name="Photos" component={PhotosScreen} />
    </PhotosStack.Navigator>
  );
};

export { PhotosStackScreen };

const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator>
      <SearchStackScreen name="Search" component={SearchScreen} />
    </SearchStack.Navigator>
  );
};
export { SearchStackScreen };

const SharingStackScreen = () => {
  return (
    <SharingStack.Navigator>
      <SharingStack.Screen name="Sharing" component={SharingScreen} />
    </SharingStack.Navigator>
  );
};
export { SharingStackScreen };
const LibraryStackScreen = () => {
  return (
    <LibraryStack.Navigator>
      <LibraryStack.Screen name="Library" component={LibraryScreen} />
    </LibraryStack.Navigator>
  );
};
export { LibraryStackScreen };
