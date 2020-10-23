import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const DestinationCard = ({
    onPress,
    imageUri,
    title,
    subTitle,
    price
    
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.destinationItem}>
            <View style={styles.floatingImage}>
                <Image style={styles.destinationThumbnail} source={{ uri: imageUri }} />
            </View>
            <View style={styles.destinationDescription}>
                <Text style={{fontSize: 20, textAlign:'right'}} numberOfLines={3}>{title}</Text>
                <Text style={{fontSize: 12, paddingBottom:5 ,textAlign:'right'}} numberOfLines={3}>{subTitle}</Text>
                <Text style={{fontSize: 15}} numberOfLines={3}>{price}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    destinationItem: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 15,
        backgroundColor: 'white',
        elevation: 8,
        marginBottom: 10,
        borderRadius: 8
    },
    destinationDescription: {
        padding: 10,
        flex: 1,
    },
    floatingImage: {
        flex: .5,
        width: responsiveWidth(120),
        height: responsiveHeight(12),
    },
    destinationThumbnail: {
        flex: 1,
        borderRadius: 8,
    }
})

export default DestinationCard