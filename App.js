import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurant.screen";
//const isAndroid = Platform.OS === "android";
// console.log(StatusBar.currentHeight);
export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}