import React from 'react'
import {Text, View, Image, StyleSheet} from 'react-native'

const ResultsDetails = ({result}) => {
    return(
        <View style={styles.container}>
            <Image style={styles.imageRestaurant} source={{ uri: result.image_url}}/>
            <Text style={styles.nameRestaurant}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginRight:15
    },
    nameRestaurant:{
        fontSize: 16,
        fontWeight: 'bold',
    },

    imageRestaurant:{
        width: 250,
        height: 220,
        borderRadius: 4
    },

    rating:{

    }
})

export default ResultsDetails