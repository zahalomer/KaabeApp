import "react-native-gesture-handler";
import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerView,
} from "@react-navigation/drawer";
import { ChapterScreen } from "../../Src/Screens/ChaptersScreen";
import { HomeScreen } from "../../Src/Screens/Home-Screen";
import { NavigationContainer } from "@react-navigation/native";
import { ProfileScreen } from "../Screens/ProfileScreen";
import { SettingScreen } from "../Screens/SettingScreen";
import { Feather, AntDesign } from "@expo/vector-icons";
import { UserData } from "../Utilits/UserData";
const ScreenStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function StackScreens() {
  return (
    <ScreenStack.Navigator>
      <ScreenStack.Screen
        name="HomeScreen"
        options={{ headerShown: false, animation: "slide_from_bottom" }}
        component={HomeScreen}
      />
      <ScreenStack.Screen
        name="Chapters"
        component={ChapterScreen}
        options={{
          headerShown: false,
          animation: "slide_from_right",
          presentation: "modal",
        }}
      />
      <ScreenStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          animation: "slide_from_right",
          presentation: "modal",
        }}
      />
      <ScreenStack.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          headerShown: false,
          animation: "slide_from_right",
          presentation: "modal",
        }}
      />
    </ScreenStack.Navigator>
  );
}

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ flex: 0.5 }}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={styles.profileImageViewStyle}>
            <Image
              style={styles.profileImageStyle}
              source={require("../../assets/Profile.jpg")}
            />
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={styles.userNameStyle}>
              {UserData.firstName} {UserData.secondName}
            </Text>
            <Text style={styles.numberTextStyle}>0634572516</Text>
          </View>
        </View>
        <DrawerItem
          label="Profile"
          labelStyle={{
            marginLeft: -18,
            fontSize: 15,
            color: "black",
          }}
          onPress={() => props.navigation.navigate("Profile")}
          icon={() => <AntDesign name="profile" color="black" size={25} />}
        />
        <DrawerItem
          label="Setting"
          labelStyle={{ marginLeft: -18, fontSize: 15, color: "black" }}
          onPress={() => props.navigation.navigate("Setting")}
          icon={() => <AntDesign name="setting" color="black" size={25} />}
        />
        <DrawerItem
          label="Subscribe Now"
          labelStyle={{ marginLeft: -18, fontSize: 15, color: "black" }}
          onPress={() => props.navigation.navigate("Setting")}
          icon={() => <AntDesign name="shoppingcart" color="black" size={25} />}
        />
        <DrawerItem
          label="Contact us"
          labelStyle={{ marginLeft: -18, fontSize: 15, color: "black" }}
          onPress={() => props.navigation.navigate("Setting")}
          icon={() => <AntDesign name="contacts" color="black" size={25} />}
        />
        <DrawerItem
          label="Share App"
          labelStyle={{ marginLeft: -18, fontSize: 15, color: "black" }}
          onPress={() => props.navigation.navigate("Setting")}
          icon={() => <AntDesign name="sharealt" color="black" size={25} />}
        />
        <DrawerItem
          label="Term & conditions"
          labelStyle={{ marginLeft: -18, fontSize: 15, color: "black" }}
          onPress={() => props.navigation.navigate("Setting")}
          icon={() => <AntDesign name="filetext1" color="black" size={25} />}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen
          name="Home"
          options={{ headerShown: false, swipeEdgeWidth: 400 }}
          component={StackScreens}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  profileImageViewStyle: {
    overflow: "hidden",
    borderRadius: 35,
    height: 70,
    width: 70,
    margin: 20,
    marginTop: 10,
    borderColor: "black",
    borderWidth: 1,
  },
  profileImageStyle: {
    height: "150%",
    width: "100%",
  },
  userNameStyle: {
    color: "black",
    fontSize: 23,

    fontFamily: "Lato_700Bold",
    marginBottom: 5,
  },
  numberTextStyle: {
    color: "black",
    fontSize: 15,
    fontFamily: "Lato_400Regular",
  },
});