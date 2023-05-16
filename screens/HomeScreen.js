import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
} from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <View className="flex-1 relative">
      <StatusBar style="light" />
      <Image
        blurRadius={70}
        source={require("../assets/bg.png")}
        className="absolute h-full w-full"
      />
      <SafeAreaView className="flex flex-1">
        <View style={{ height: "7%" }} className="mx-4 relative z-50">
          <View
            className="flex-row justify-end items-center rounded-full"
            style={{ backgroundColor: "#fff" }}
          >
            <TextInput
              placeholder="Search City"
              placeholderTextColor={"#000"}
              className="pl-6 h-10 flex-1 text-base text-white"
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
