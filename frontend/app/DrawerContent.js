import React from "react";

import { DrawerContentScrollView } from "@react-navigation/drawer";
import { DrawerItemList } from "@react-navigation/drawer";
import { DrawerItem } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function DrawerContent(props) {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Photos"
        labelStyle={{ color: "#000" }}
        onPress={() => navigation.navigate("PhotosStack")}
        icon={() => <FontAwesome name="photo" size={24} color="#000" />}
      />
      <DrawerItem
        label="Search"
        labelStyle={{ color: "#000" }}
        onPress={() => navigation.navigate("SearchStack")}
        icon={() => <FontAwesome name="search" size={24} color="#000" />}
      />
      <DrawerItem
        label="Sharing"
        labelStyle={{ color: "#000" }}
        onPress={() => navigation.navigate("SharingStack")}
        icon={() => <Feather name="share-2" size={24} color="#000" />}
      />
      <DrawerItem
        label="Library"
        labelStyle={{ color: "#000" }}
        onPress={() => navigation.navigate("LibraryStack")}
        icon={() => (
          <MaterialCommunityIcons
            name="library-shelves"
            size={24}
            color="#000"
          />
        )}
      />
    </DrawerContentScrollView>
  );
}
