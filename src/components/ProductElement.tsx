import React from "react";
import { View, Text, ActivityIndicator, Image, StyleSheet } from "react-native";
import Loader from './Loader'
import Colors from '../assets/colors'

type ProductElementType = {
    elementData: elementData,
}
interface elementData {
    photo: any,
    productName: string,
}

const ProductElement = ({ elementData } : ProductElementType) => {
    return elementData ? (
        <View style={styles.productWrapper}>
            <Text>{elementData.productName}</Text>
            <Image 
                style={styles.img}
                source={{ uri: elementData.photo[0].result.secure_url }}            
            />
        </View>
    ) : 
    (<Loader />)
}
const styles = StyleSheet.create({
    img : {
        height: 50,
        width: 50,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: Colors.greyDark
    },
    productWrapper : {
        flexDirection: 'column',
        alignItems: "center",
        marginRight: 10,
    }
})
export default ProductElement
