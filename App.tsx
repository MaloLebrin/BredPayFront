import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from 'react-native';

import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';

import Colors from './src/assets/colors'
import { Ionicons, AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [userToken, setUserToken] = useState(String)
  const [user, setUser] = useState(Object)

  const API = "http://localhost:3000/"

  const setToken = async (token: string) => {
    // console.log(token);
    
    if (token) {
      await AsyncStorage.setItem('userToken', token)
    } else {
      await AsyncStorage.removeItem('userToken');
    }
    setUserToken(token);
  }

  const setUserData = async (user: Object) => {
    // console.log(user);
    
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
      {isLoading ? null : userToken === null ? (
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen
            name="SignIn"
            options={{ header: () => null, animationEnabled: false }}
          >
            {() => <SignInScreen API={API} setUserData={setUserData} setToken={setToken}/>}
          </Stack.Screen>
          <Stack.Screen
            name="SignUp"
            options={{ header: () => null, animationEnabled: false }}
          >
            {() => <SignUpScreen API={API} setUserData={setUserData} setToken={setToken} />}
          </Stack.Screen>
        </Stack.Navigator>)
        :(
        <Stack.Navigator>
          <Stack.Screen
            name="Tab"
            options={{ header: () => null, animationEnabled: false }}
          >
            {()=> (
              <Tab.Navigator
                tabBarOptions={{
                  activeTintColor: Colors.creme,
                  inactiveTintColor: Colors.white,
                  style: {
                    backgroundColor: Colors.greyDark
                  }
                }}
              >
                <Tab.Screen
                    name="Home"
                    options={{
                      tabBarLabel: "Home",
                      tabBarIcon: ({ color, size }) => (
                        <Ionicons name={"ios-home"} size={size} color={color} />
                      ),
                    }}
                  >
                    {() => (
                      <Stack.Navigator>
                        <Stack.Screen
                          name="Home"
                          options={{
                            headerStyle: { backgroundColor: Colors.greyDark, height: 90 },
                            headerTitleAlign: "center",
                          }}
                        >
                          {() => <HomeScreen API={API}/>}
                        </Stack.Screen>
                    </Stack.Navigator>
                    )}
                  </Tab.Screen>
                  <Tab.Screen
                    name="Settings"
                    options={{
                      tabBarLabel: "Settings",
                      tabBarIcon: ({ color, size }) => (
                        <AntDesign name="setting" size={24} color={color} />
                      ),
                    }}
                  >
                    {() => (
                      <Stack.Navigator>
                        <Stack.Screen
                          name="Settings"
                          options={{
                            headerStyle: { backgroundColor: Colors.greyDark, height: 90 },
                            headerTitleAlign: "center",
                          }}
                        >
                          {() => <SettingsScreen setToken={setToken}/>}
                        </Stack.Screen>
                    </Stack.Navigator>
                    )}
                  </Tab.Screen>

              </Tab.Navigator>
            )}
          </Stack.Screen>
        </Stack.Navigator>
        )}
      </NavigationContainer>
  );
}
