import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { Text, TextInput, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Colors from '../assets/colors'

type SignUpType = {
    setToken: Function,
    setUserData: Function,
    API: String
}

const SignUpScreen = ({ setToken, setUserData, API} : SignUpType) => {
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")
  const [phone, setPhone] = useState("")

  const OnSubmit = async () => {
    if (email && password && firstName && lastName && phone && password2) {
      try {
        if (password === password2) {
          const response = await axios.post(
            `${API}user/signup`,
            { email, firstName, lastName, password, phone, }
          )
          setUserData(response.data)
          setToken(response.data.token)
        } else {
          alert('both password are different')
        }
      } catch (error) {
        alert(error.response.data.error);
      }

    } else {
      alert("Remplir tous les champs !")
    }
  }
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.wrapper}>
          {/* <Image style={styles.logo} source={require('../assets/')} /> */}
          <Text style={styles.title}>Sign Up</Text>

          <TextInput
            style={styles.textInput}
            keyboardType={"email-address"}
            placeholder="Email"
            placeholderTextColor={Colors.creme}
            onChangeText={email => setEmail(email)}
          />

          <TextInput
            style={styles.textInput}
            placeholder="FirstName"
            placeholderTextColor={Colors.creme}
            onChangeText={name => setFirstName(name)}
          />

          <TextInput
            style={styles.textInput}
            placeholder="LastName"
            placeholderTextColor={Colors.creme}
            onChangeText={name => setLastName(name)}
          />

          <TextInput
            style={styles.textInput}
            placeholder="Phone"
            placeholderTextColor={Colors.creme}
            onChangeText={Phone => setPhone(Phone)}
          />

          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor={Colors.creme}
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
          />

          <TextInput
            style={styles.textInput}
            placeholder="Confirme Password"
            placeholderTextColor={Colors.creme}
            secureTextEntry={true}
            onChangeText={password => setPassword2(password)}
          />

          <TouchableOpacity style={styles.buttonSubmit} onPress={OnSubmit}>
            <Text style={styles.buttonText}> Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignIn");
            }}
          >
            <Text style={styles.SignIn}>
              Déjà un compte ? Se connecter
              </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    alignItems: "center",
    justifyContent: "center"
  },
  wrapper: {
    marginTop: 70,
    padding: 24,
    flex: 1,
    alignItems: "center"
  },
  logo: {
    width: 130,
    height: 150,
  },
  title: {
    fontSize: 24,
    color: Colors.creme,
    marginVertical: 20,
    fontWeight: "bold"
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
  SignIn: {
    marginTop: 15,
    color: Colors.creme,
    textDecorationLine: "underline"
  },
  textInput: {
    borderBottomColor: Colors.creme,
    borderBottomWidth: 1,
    width: 330,
    height: 45,
    marginBottom: 30,
    paddingLeft: 15,
    color: Colors.creme
  },
});
export default SignUpScreen;