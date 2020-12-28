import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from 'react-native';

import SignInScreen from './src/screens/SignInScreen'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [userToken, setUserToken] = useState(String)
  const [user, setUser] = useState(Object)

  const setToken = async (token: string) => {
    if (token) {
      await AsyncStorage.setItem('userToken', token)
    } else {
      await AsyncStorage.removeItem('userToken');
    }
    setUserToken(token);
  }

  const setUserData = async (user: Object) => {
    if (user) {
      const USER = JSON.stringify(user);
      await AsyncStorage.setItem('user', USER);
    } else {
      await AsyncStorage.removeItem('user')
    }
    setUser(user)
  }

  useEffect(() => {
    const checkToken = async () => {
      const userToken : any  = await AsyncStorage.getItem('userToken');
      setIsLoading(false)
      setUserToken(userToken)
    };

    checkToken();
  },[])

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen
            name="SignIn"
            options={{ header: () => null, animationEnabled: false }}
          >
            {() => <SignInScreen />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
  );
}
