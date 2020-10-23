import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import {Thumbnail} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome' 
import instaBG from '../assets/images/InstaBG.jpg'

import FB from '../assets/icons/logoFB.png';
import IG from '../assets/icons/logoIG.png';
import WA from '../assets/icons/logoWA.png';
import GM from '../assets/icons/logoLoc.png'


const myButton = (
    <Icon.Button
      name="facebook"
      backgroundColor="#3b5998"
      onPress={{}}
    >
        Vacatimeid
    </Icon.Button>,
    <Icon.Button
    name="instagram"
    backgroundColor= "purple"
    onPress={{}}
  >
      Vacatime.id
  </Icon.Button>,
   <Icon.Button
   name="whatsapp"
   backgroundColor= "purple"
   onPress={{}}
 >
     Vacatime.id
 </Icon.Button>
  );

export default class About extends Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.logoStyle}>
                <Thumbnail square large source={{uri:'https://i.ibb.co/Q6TGfwB/Vacatime1.png'}}/> 
                <Text style={{fontSize:20}}>
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
                <Icon.Button name="facebook" backgroundColor="#3b5998">
                    <Text style={{ fontFamily: 'Arial', fontSize: 15, color: 'white' }}>
                    Vacatimeid
                    </Text>
                </Icon.Button>
                </View >
                <View style={{paddingBottom:5}}>
                    <TouchableOpacity>
                <View style={styles.iconPosition}>
                    <Image style={styles.iconStyle} source={IG}/>
                    <Text style={{paddingLeft: 5}}>
                        Vacatime.id
                    </Text>
                </View>
                </TouchableOpacity>
                </View>
                <View style={{paddingBottom:5}}>
                <Icon.Button name="whatsapp" backgroundColor="#25D366">
                    <Text style={{ fontFamily: 'Arial', fontSize: 15, color: 'white' }}>
                    +62 813 8686 4464
                    </Text>
                </Icon.Button>           
                </View>
                <View style={styles.iconPosition}>
                    <Image style={styles.iconStyle} source={GM}/>
                    <Text style={styles.textIcon}>
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
        marginTop: 2,
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
    },
    textIcon: {
        paddingLeft: 10,
        fontFamily: 'sans-serif-medium'


    }

})