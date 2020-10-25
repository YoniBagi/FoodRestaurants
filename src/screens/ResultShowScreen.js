import React, {useEffect} from "react";
import {View, Text, StyleSheet, FlatList, Image} from "react-native";
import useSingleItem from "../hooks/useSingleItem";

const ResultShowScreen = ({navigation}) => {
    const [getSingleItem, photos, errorMessage] = useSingleItem()
    const itemId = navigation.getParam('id')

    useEffect(() => {
        getSingleItem(itemId)
    }, [])

    return (
        <View>
            <FlatList
                data={photos}
                renderItem={({item}) => {
                    return (
                        <Image style={style.imageItem} source={{uri: item}}/>
                    )
                }}
                keyExtractor={item => item}
            />
        </View>
    )
}

const style = StyleSheet.create({
    imageItem: {
        width: 250,
        height: 150,
        borderRadius: 7,
        alignSelf: 'center',
        marginVertical: 20
    }
})

export default ResultShowScreen