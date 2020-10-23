import React,{useEffect} from 'react';
import {View, ImageBackground, Image, Text, StyleSheet} from 'react-native';
import splashScreen from '../assets/images/splash2.jpeg'
import loGo from '../assets/images/Vacatime1.png'

const Splash=()=>{

    
        return(
            <ImageBackground
                source={splashScreen}
                style={styles.imageStyle}>
                    <View style={styles.bgImage}>
                        <Image source={loGo}
                        style={styles.logo}>

                        </Image>
                        <Text style={styles.textStyle}>
                            Your Travel Buddy!
                            </Text>
                    </View>

            </ImageBackground>
            
        )
}

const styles = StyleSheet.create({
    imageStyle:{
        height: '100%',
        width: '100%'
    },
    bgImage: {
        flex:1,
        justifyContent:'center', 
        alignItems:'center'
    },
    logo: {
        height:100, 
        width:100
    },
    textStyle: {
        fontSize:30, 
        color:'#FF672D', 
        fontWeight: 'bold',
        fontFamily:'sans-serif'
    },
    square: {
        backgroundColor:'white',
        opacity: 0.2
    }
});

export default Splash;
