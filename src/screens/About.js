import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import {Thumbnail} from 'native-base';
import Details from './Details'

import * as screenNames from '../navigation/screenNames'

import FB from '../assets/icons/logoFB.png';
import IG from '../assets/icons/logoIG.png';
import WA from '../assets/icons/logoWA.png';
import GM from '../assets/icons/logoLoc.png'
import { Button } from 'react-native-paper';

export default class About extends Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.logoStyle}>
                <Thumbnail square large source={{uri:'https://i.ibb.co/Q6TGfwB/Vacatime1.png'}}/> 
                <Text>
                    Your Travel Buddy!
                </Text>
                </View>
                <View style={{alignItems:'center'}}>
                <View style={styles.border}>
                    <View>
                        <Text style={{fontSize: 30, color:'orange'}}>
                            What is VacaTime?
                        </Text>
                    </View>
                    
                <View >
                    <Text style={styles.infoText}>
                    VacaTime is a boutique tour agency specialising in giving visitor's 
                    to Indonesia a unique personalised experience of this incredible country!  
                    </Text>
                </View>
                <Text style={{paddingBottom:15, fontWeight:'bold'}}>
                    More Further Info Contact US:
                </Text>
                <View style={{paddingBottom:5}}>
                <View style={styles.iconPosition}>
                    <Image style={styles.iconStyle} source={FB}/>
                    <Text style={{paddingLeft: 5}}>
                        Vacatimeid
                    </Text>
                </View>
                </View >
                <View style={{paddingBottom:5}}>
                <View style={styles.iconPosition}>
                    <Image style={styles.iconStyle} source={IG}/>
                    <Text style={{paddingLeft: 5}}>
                        Vacatime.id
                    </Text>
                </View>
                </View>
                <View style={{paddingBottom:5}}>
                <View style={styles.iconPosition}>
                    <Image style={styles.iconStyle} source={WA}/>
                    <Text style={{paddingLeft: 5}}>
                        +62813 8686 4464
                    </Text>
                </View>                
                </View>
                <View style={styles.iconPosition}>
                    <Image style={styles.iconStyle} source={GM}/>
                    <Text style={{paddingLeft: 5}}>
                        Cimahi Selatan, Cimahi
                    </Text>
                </View>
                </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex:1, 
        backgroundColor:'#DCEDC8'
    },    
    border: {
        width: 300,
        marginTop: 5,
        borderWidth: 2,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 40,
        paddingRight: 30,
        paddingLeft: 30,
        alignContent: 'center',
        backgroundColor: '#f4f9ee',
        borderColor: '#f4f9ee'
    },
    logoStyle: {
        marginTop: 20,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center'
      },
    infoText: {
        paddingBottom: 20,
        fontSize:20,
        fontFamily: 'sans-serif-medium'
    },
    iconPosition: {
        flexDirection: 'row',
        alignItems:'center',
    },
    iconStyle: {
        width: 30,
        height: 30,
    }
})