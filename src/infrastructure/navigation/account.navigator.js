import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen
      name="main"
      component={() => (
        <View>
          <Text>Account Screen</Text>
        </View>
      )}
    />
    <Stack.Screen
      name="Login"
      component={() => (
        <View>
          <Text>Login Screen</Text>
        </View>
      )}
    />
  </Stack.Navigator>
);
