import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { View, ActivityIndicator, TouchableOpacity, SafeAreaView,ScrollView, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import axios from "axios";
import CompanyCard from '../components/CompanyCard'
import Colors from '../assets/colors'

type CompanyScreenType = {
    data: Company,
}
interface Company {
    
}

const CompanyScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView>

            </ScrollView>
        </SafeAreaView>
    )
}

export default CompanyScreen
