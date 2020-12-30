import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { View, ActivityIndicator, TouchableOpacity, SafeAreaView, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

type SettingsSreenType = {

}

const SettingsSreen = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() =>{}}>Logout</TouchableOpacity>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        margin: 10,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})
export default SettingsSreen
