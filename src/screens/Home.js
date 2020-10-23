import React, {useState}from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    ImageBackground,
    FlatList,
    Image
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DestinationCard from '../components/DestinationCard';
import DestinationUp from '../components/DestinationUp'
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
                subTitle={item.subTitle}
                price={item.price}
                onPress={toDestinationDetail.bind(this, item)}/>
        ))
    }

    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ backgroundColor: 'white' }}>
                <View style={styles.containerStyle}>
                    <ImageBackground 
                    style={styles.upperImageStyle} 
                    source={{ uri: 'https://i.ibb.co/9TqB2Nk/top.jpg' }}
                    imageStyle={{borderBottomRightRadius: 65}}>
                        <View style={styles.heading}>
                            <Text style={styles.headingTxt}>It is Vacation Time!</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.content}>
                    <View>
                        <Text style={styles.txtSubHeading}>Top Destination</Text>
                    <FlatList
                        horizontal={true}
                        data={product}
                        renderItem={({item}) => {
                            return(
                                <View>
                                    <TouchableOpacity>
                                    <DestinationUp            
                                        imageUri={item.url}
                                        title={item.headerTitle}
                                        onPress={toDestinationDetail.bind(this, item)}/>
                                    </TouchableOpacity>
                                </View>
                            )}}/>
                    </View>
                    <Text style={styles.txtSubHeading}>Your Wonderful Destination Begins Here</Text>
                    {RenderDestinationProduct()}
                    
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        justifyContent: 'center',        
    },
    bgImageStyle: {
        flex: 1
    },
    heading: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20
    },
    headingTxt: {
        fontWeight: '700',
        
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
        fontSize: 25,
        fontWeight: '700',
        paddingTop: 15,
        paddingBottom: 15
    },
})
export default Home;