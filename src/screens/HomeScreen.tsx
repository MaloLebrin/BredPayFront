import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { View, ActivityIndicator, TouchableOpacity, SafeAreaView, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import axios from "axios";
import CompanyCard from '../components/CompanyCard'
import Colors from '../assets/colors'

type HomeScreenType = {
    API: String,
}

const HomeScreen = ({API}: HomeScreenType) => {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const navigation = useNavigation();

    useEffect(() => {
        console.log(API);
        
        try {
            const fetchData = async () => {
                const response = await axios.get(
                    `${API}`
                );
                console.log(response.data);
                
                setData(response.data);
                setIsLoading(false);
            };
            fetchData();
        } catch (error) {
            return alert(error.message)
        }
    }, []);


    return isLoading ?
        (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: Colors.black }}>
                <ActivityIndicator size="large" />
            </View>
        ) : (
            <SafeAreaView style={styles.homeScreen}>

                <FlatList
                    data={data}
                    keyExtractor={(_, index) => String(index)}
                    renderItem={({ item }: any) => (
                        <TouchableOpacity 
                        // onPress={() => navigation.navigate("Room", { id: item._id })}
                        >
                            <CompanyCard data={item} />
                        </TouchableOpacity>
                    )}
                />
            </SafeAreaView>
        );
}

const styles  = StyleSheet.create({
    homeScreen: {
        backgroundColor: Colors.creme,
        flex: 1,
    }
})
export default HomeScreen;