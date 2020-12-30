import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
// components imports
import Loader from './Loader'
import { FlatList } from "react-native-gesture-handler";
import ProductElement from "./ProductElement"

//style imports
import Colors from '../assets/colors'
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type CompanyCardType = {
    data: data,
}

interface data {
    name: string,
    description: string,
    openingHours: Object,
    photo: any,
    address: string,
    postalCode: number
    city: string,
    products: [],
}

interface product {
    productName: string,
    photo: any,
}

const CompanyCard= ({ data }: CompanyCardType) => {

    // _renderItem = ({ item, index }) => {
    //     return <Image style={styles.img} source={{ uri: item.url }} />;
    // };
    // console.log(data);
    return data ? (
        <View style={styles.container}>
            {/* <Carousel 
                data={data.photos}
                renderItem={_renderItem}
                sliderWidth={370}
                itemWidth={370}
                loop={true}
            /> */}
            <View style={styles.titleAndProfileImg}>
                <Image
                    style={styles.img}
                    source={{ uri: data.photo[0].secure_url }}
                />
                <View>
                    <Text style={styles.title}>{data.name}</Text>
                    <View style={styles.companyInfos}>
                        <Text style={styles.description}>{data.description}</Text>
                        <ScrollView  horizontal={true}>
                            <MaterialCommunityIcons name="food-croissant" size={24} color={Colors.greyDark} />
                            {data.products.map((element, index) => {
                                return (
                                    <ProductElement elementData={element} key={index} />
                                )
                            })}
                        </ScrollView >
                        <View style={styles.contactWrapper}>
                            <Entypo name="address" size={24} color={Colors.greyDark} />
                            <Text style={styles.address}>{data.address}</Text>
                            <Text>{data.postalCode}</Text>
                            <Text style={styles.city}>{data.city}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    ) : (<Loader/>
        )
}
const styles = StyleSheet.create({
    container: {
        margin: 20,
        // marginTop: 80,
        borderBottomColor: Colors.black,
        borderBottomWidth: 1
    },
    img: {
        height: 215,
        marginBottom: 20,
        borderRadius: 10
    },
    title: {
        fontSize: 18,
        marginBottom: 5,
        fontWeight: "700"
    },
    titleAndProfileImg: {
        marginVertical: 15,
        flexDirection: "column",
        justifyContent: "space-between"
    },
    companyInfos: {
        flexDirection: "column",
    },
    contactWrapper: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    productsList: {
        flexDirection: "row",
    },
    products: {
        fontSize: 14,
        color: Colors.greyDark,
    },
    description: {
        fontSize: 14,
        color: Colors.greyDark,
        marginBottom: 10
    },
    address: {
        fontSize: 14,
    },
    city: {
        fontSize: 14,
    }
});
export default CompanyCard;