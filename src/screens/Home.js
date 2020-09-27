import React from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    ImageBackground
} from 'react-native';
import DestinationCard from '../components/DestinationCard';
import { product } from '../data';
import * as screenNames from '../navigation/screenNames'
const Home = ({ navigation }) => {

    // const value= await AsyncStorage.getItem('user');
    // if(value){
    //     alert(value)
    // }

    const toDestinationDetail = (item) => {
        navigation.navigate(screenNames.BANDUNG_SCREEN, { item })
    }

    const RenderDestinationProduct = () => {
        return product.map((item, index) => (
            <DestinationCard
                key={index}
                imageUri={item.url}
                title={item.packageTitle}
                onPress={toDestinationDetail.bind(this, item)} />
        ))
    }

    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ backgroundColor: 'white' }}>
                <View style={styles.containerStyle}>
                    <ImageBackground style={styles.upperImageStyle} source={{ uri: 'https://i.ibb.co/9TqB2Nk/top.jpg' }}>
                        <View style={styles.heading}>
                            <Text style={styles.headingTxt}>Let's discover our Destination ❤️</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.content}>
                    <Text style={styles.txtSubHeading}>Our Destination Product</Text>
                    {RenderDestinationProduct()}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        justifyContent: 'center'
    },
    bgImageStyle: {
        flex: 1
    },
    heading: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    headingTxt: {
        fontWeight: '700'
    },
    upperImageStyle: {
        flex: 1,
        resizeMode: 'contain',
        aspectRatio: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        padding: 15
    },
    txtSubHeading: {
        fontSize: 20,
        fontWeight: '700'
    }
})
export default Home;