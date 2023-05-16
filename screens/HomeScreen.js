import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useCallback, useState } from "react";
import {
  MagnifyingGlassIcon,
  MapPinIcon,
  CalendarDaysIcon,
} from "react-native-heroicons/outline";
import { fetchLocations, fetchWeatherForecast } from "../api/WeatherApi";

import { debounce } from "lodash";

const HomeScreen = () => {
  const [IsSearch, setIsSearch] = useState(false);
  const [loctions, setloctions] = useState([]);

  const SearchLoctions = (loctions) => {
    setloctions([]);
    fetchWeatherForecast({
      cityName: loc.name,
      day: "7",
    }).then((data) => {
      console.log(data);
    });
  };

  const SearchCity = (value) => {
    if (value.length > 2) {
      fetchLocations({ cityName: value }).then((data) => {
        setloctions(data);
      });
    }
  };

  const searchCityAfterTime = useCallback(debounce(SearchCity, 1200), []);

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
            style={{ backgroundColor: IsSearch ? "#f7f4ea" : null }}
          >
            {IsSearch ? (
              <TextInput
                onChangeText={searchCityAfterTime}
                placeholder="Search City"
                placeholderTextColor={"#000"}
                className="pl-6 h-10 pb-1 flex-1 text-base"
              />
            ) : null}
            <TouchableOpacity
              onPress={() => setIsSearch(!IsSearch)}
              style={{ backgroundColor: "#f7f4ea" }}
              className="rounded-full p-2 m-1"
            >
              <MagnifyingGlassIcon size={25} color={"#000"} />
            </TouchableOpacity>
          </View>
          {loctions.length > 0 && IsSearch ? (
            <View className="absolute w-full bg-gray-100 top-16 rounded-3xl">
              {loctions.map((loc, index) => {
                let showBorder = index + 1 != loctions.length;
                let borderStyle = showBorder
                  ? "border-b-2 border-b-gray-400"
                  : "";
                return (
                  <TouchableOpacity
                    onPress={() => SearchLoctions(loc)}
                    key={index}
                    className={
                      "flex-row items-center border-0 p-3 px-4 mb-1 " +
                      borderStyle
                    }
                  >
                    <MapPinIcon size={22} color={"#000"} />
                    <Text className="text-black text-lg ml-2">
                      {loc?.name} , {loc?.country}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : null}
        </View>
        {/* forecast section */}
        <View className="mx-4 flex justify-around flex-1 mb-2">
          {/* loctions */}
          <Text className="text-white text-center text-2xl font-bold">
            Arad
            <Text className="text-lg font-semibold text-gray-300">
              Tel-Aviv
            </Text>
          </Text>
          {/* weather image */}
          <View className="flex-row justify-center">
            <Image
              source={require("../assets/partlycloudy.png")}
              className="w-52 h-52"
            />
          </View>
          {/* degree celcius */}
          <View className="space-y-2">
            <Text className="text-center font-bold text-white text-6xl ml-5">
              32&#176;
            </Text>
            <Text className="text-center text-white text-xl tracking-widest">
              Partly cloudy
            </Text>
          </View>
          {/* other status */}
          <View className="flex-row justify-between mx-4">
            <View className="flex-row space-x-2 items-center">
              <Image
                className="h-6 w-6"
                source={require("../assets/wind.png")}
              />
              <Text className="text-white font-semibold text-base">22Km</Text>
            </View>
            <View className="flex-row space-x-2 items-center">
              <Image
                className="h-6 w-6"
                source={require("../assets/drop.png")}
              />
              <Text className="text-white font-semibold text-base">32Km</Text>
            </View>
            <View className="flex-row space-x-2 items-center">
              <Image
                className="h-6 w-6"
                source={require("../assets/sunOutLine.png")}
              />
              <Text className="text-white font-semibold text-base">42Km</Text>
            </View>
          </View>
        </View>
        {/* forecast section to the next days */}
        <View className="mb-2 space-y-3">
          <View className="flex-row items-center mx-5 space-x-2">
            <CalendarDaysIcon size={22} color={"#fff"} />
            <Text className="text-white text-base"> Dauly forecast</Text>
          </View>
          <ScrollView
            horizontal
            contentContainerStyle={{ paddingHorizontal: 15 }}
            showsHorizontalScrollIndicator={false}
          >
            <View className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4 bg-slate-500">
              <Image
                source={require("../assets/heavyrain.png")}
                className="h-11 w-11"
              />
              <Text className="text-white">Monday</Text>
              <Text className="text-white text-xl font-semibold">32&#176;</Text>
            </View>
            <View className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4 bg-slate-500">
              <Image
                source={require("../assets/heavyrain.png")}
                className="h-11 w-11"
              />
              <Text className="text-white">Tuesday</Text>
              <Text className="text-white text-xl font-semibold">32&#176;</Text>
            </View>
            <View className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4 bg-slate-500">
              <Image
                source={require("../assets/heavyrain.png")}
                className="h-11 w-11"
              />
              <Text className="text-white">Monday</Text>
              <Text className="text-white text-xl font-semibold">32&#176;</Text>
            </View>
            <View className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4 bg-slate-500">
              <Image
                source={require("../assets/heavyrain.png")}
                className="h-11 w-11"
              />
              <Text className="text-white">Monday</Text>
              <Text className="text-white text-xl font-semibold">32&#176;</Text>
            </View>
            <View className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4 bg-slate-500">
              <Image
                source={require("../assets/heavyrain.png")}
                className="h-11 w-11"
              />
              <Text className="text-white">Monday</Text>
              <Text className="text-white text-xl font-semibold">32&#176;</Text>
            </View>
            <View className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4 bg-slate-500">
              <Image
                source={require("../assets/heavyrain.png")}
                className="h-11 w-11"
              />
              <Text className="text-white">Monday</Text>
              <Text className="text-white text-xl font-semibold">32&#176;</Text>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
