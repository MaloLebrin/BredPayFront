import React, { useState, useEffect }from "react";
import { View, Text, ActivityIndicator, Image, StyleSheet } from "react-native";
import Loader from './Loader'
import Colors from '../assets/colors'

type ProductCard = {
    data: product,
}
interface product {
    allergens: string,
    category: string,
    description: string,
    photo: any,
    price: number,
    productName: string,
    quantity: number,
    weight: number
    
}

const ProductCard = ({ data } : ProductCard) => {
    return (
        <View style={styles.container}>
            <Text>{}</Text>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        margin: 30,
        backgroundColor: Colors.greyDark
    }
})
export default ProductCard
