import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { MaterialCommunityIcons, Fontisto, AntDesign, Feather } from '../assets/icons/Icons';

const DestinationUp = ({
    onPress,
    imageUri,
    title,
    subTitle,
    price
    
}) => {
    return (
            <View style={styles.floatingImage}>
        <TouchableOpacity
            onPress={onPress}
            style={styles.destinationItem}>
                <Image style={styles.destinationThumbnail} source={{ uri: imageUri }} />
                <View style={styles.imageOverlay}></View>
                <Feather name='map-pin' color='white' size={16}
                stle={styles.imageLocationIcon}/>
                <Text style={styles.imageText}>{title}</Text>                
            
        </TouchableOpacity>
            </View>
    )
}

const styles = StyleSheet.create({
    destinationItem: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 15,
        marginBottom: 10,
        borderRadius: 10,
        paddingRight: 0
    },
    destinationDescription: {
        padding: 10,
        flex: 1,
    },
    floatingImage: {
        paddingVertical: 10,
        paddingLeft: 10
    },
    destinationThumbnail: {
        width: 150,
        height: 250,
        marginRight: 8,
        borderRadius: 20,
    },
    imageOverlay: {
        width: 150,
        height: 250,
        marginRight: 8,
        borderRadius: 20,
        position: 'absolute',
        backgroundColor: '#000',
        opacity: 0.2
    },
    imageLocationIcon: {
        position: 'absolute',
        marginTop: 4,
        left: 10,
        bottom: 10
    },
    imageText: {
        position: 'absolute',
        color: 'white',
        fontWeight: 'bold',
        marginTop: 4,
        fontSize: 14,
        left: 10,
        bottom: 10
    }
})

export default DestinationUp;