import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

type SettingsScreenType = {
    setToken: Function,
}

const SettingsScreen = ({setToken}: SettingsScreenType) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
            onPress={() =>{setToken(null)}}>
                <Text>Logout</Text></TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        margin: 10,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    LogoutButton:{
        fontSize: 24
    },
})
export default SettingsScreen
