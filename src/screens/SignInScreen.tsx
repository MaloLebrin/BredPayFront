import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { Text, TextInput, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Colors from "../assets/colors"
import axios from "axios";

type SignInType = {
    API: String,
    setToken: Function,
    setUserData: Function
}

const SignInScreen = ({API, setToken, setUserData }: SignInType) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [data, setData] = useState()
    const navigation = useNavigation();

    const onSubmit = async () => {
        if(email && password) {
            try {
                const response = await axios.post(
                    `${API}user/login`,
                    { email, password}
                )
                setUserData(response.data)
                setToken(response.data.token)
                
            } catch (error) {
                alert(error.response.data.error);
            }
        }
    }

    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
            <View style={styles.wrapper}>
                {/* <Image style={styles.logo} source={require('../assets/')} /> */}
                <Text style={styles.title}>Login</Text>
                <TextInput placeholder="Email"
                placeholderTextColor={Colors.creme}
                keyboardType={"email-address"}
                style={styles.textInput}
                onChangeText={email => setEmail(email)}
                />
                <TextInput placeholder="Password"
                placeholderTextColor={Colors.creme}
                secureTextEntry={true}
                style={styles.textInput}
                onChangeText={password => setPassword(password)}
                />
                <TouchableOpacity
                style={styles.buttonSubmit}
                onPress={async () => {
                    onSubmit()
                }}
                >
                <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => {
                    navigation.navigate("SignUp");
                }}
                >
                <Text style={styles.Signup}>Create an account</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.black,
      alignItems: "center",
      justifyContent: "center"
    },
    wrapper: {
      padding: 24,
      flex: 1,
      alignItems: "center",
      justifyContent: "space-around",
      marginTop: 70
    },
    title: {
      fontSize: 24,
      color: Colors.creme,
      marginVertical: 20,
      fontWeight: "bold"
    },
  
    logo: {
      width: 130,
      height: 150,
      marginBottom: 30,
    },
    buttonSubmit: {
      width: 190,
      height: 65,
      borderRadius: 50,
      backgroundColor: Colors.creme,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 50
    },
    buttonText: {
      color: Colors.black,
      fontSize: 24
    },
    Signup: {
      marginTop: 15,
      color: Colors.creme,
      textDecorationLine: "underline",
    },
    textInput: {
      borderBottomColor: Colors.creme,
      borderBottomWidth: 1,
      width: 330,
      height: 45,
      marginBottom: 30,
      color: Colors.creme,
      position: "relative",
    },
  });
export default SignInScreen
