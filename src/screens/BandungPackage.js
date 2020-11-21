import React from 'react';
import {
  View,
  Image,
  ScrollView,
  Dimensions,
  Text,
  StyleSheet,
  ImageBackground,
  Button,
  TouchableOpacity, 
  Alert
} from 'react-native';
import MapView, {MapViewProps, Marker} from 'react-native-maps';

import * as screenName from '../navigation/screenNames';
import DatePicker from 'react-native-datepicker';
import AsyncStorage from '@react-native-community/async-storage';
import { TabActions } from '@react-navigation/native'
// const images = [
//   'https://i.ibb.co/61qmHv6/bandung3.jpg',
//   'https://i.ibb.co/Gt5gzzR/bandung.jpg',
//   'https://i.ibb.co/61qmHv6/bandung3.jpg',
// ];

var today = new Date().toISOString().slice(0, 10);
const jumpToLogin = TabActions.jumpTo('Login')

const BandungPackage = ({navigation, route}) => {
  const item = route.params.item;
  const [date, setDate] = React.useState(today);

   const toBookingScreen = async () => {
  //   const checkLogin = await AsyncStorage.getItem('LOGGED_IN')
  //   if (checkLogin === null) {
  //     Alert.alert(
  //       'You must login first!', 
  //       'Please login first before you do a booking',
  //       [
  //         {
  //           text: 'Login',
  //           onPress: () => navigation.dispatch(jumpToLogin)
  //         },
  //         {
  //           text: 'Cancel',
  //           onPress: () => console.log('cancel'),
  //           style: 'cancel'
  //         }
  //       ])
  //   } else {
      navigation.navigate(screenName.BOOKING_SCREEN, {
        date,
        item
      })
    }
 // PRICE PAKAI textDecorationLine "line-through"

  return (
    <ScrollView style={styles.containerStyle}>
      <View style={{backgroundColor: 'white'}}>
        <View style={{width: 410, height: 220, justifyContent:'flex-end'}} >
          <ScrollView pagingEnabled horizontal>
            {item.images.map((image, index) => (
              <View key={String(index)} style={{position:'relative', width: 410, alignItems: 'center'}}>
                <Image
                  source={{uri: image}}
                  style={{width: 410, height: 220}}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    position: 'absolute',
                    bottom: 10,
                    left: 180,
                  }}>
                  {item.images.map((data, i) => (
                    <Text
                      style={{
                        fontSize: 40,
                        color: index === i ? 'white' : 'gray',
                      }}>
                      •
                    </Text>
                  ))}
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={{paddingTop: 20}}></View>
        <View>        
          <Text style={styles.pointing}>{item.title}</Text>
          </View>
          <View style={styles.borderTop}>
            <View>
            <Text style={{fontSize:30, color:'orange'}}>Details:</Text>
          <Text style={{letterSpacing: 1, fontSize:15}}>
            Free cancelation before 24 Hours{'\n'}
            Duration 9 Hours{'\n'}
            Bahasa / English
          </Text>
          </View>
          
        <View style={styles.border}>
          <Text style={styles.poin}>Include:</Text>
          {item.include.map((data, index) => (
            <Text>• {data}</Text>
          ))}
          </View>
          
        <View>
          <Text style={styles.poin}>Exclude:</Text>
          {item.exclude.map((data, index) => (
            <Text>• {data}</Text>
          ))}
          </View>
        <View style={styles.border}>
          <Text style={styles.poin}>Itinerary</Text>
          {item.Itinerary.map((data, index) => (
            <Text>• {data}</Text>
          ))}
          </View>
          </View>
          <View style={{paddingTop: 20}}>
          <View style={styles.border2}>
            <Text style={styles.poin}>Meeting Poin</Text>
            <View style={{justifyContent: 'center'}}>
              <Text style={{wordSpacing: 5}}>{item.about}</Text>
            </View>
            <View>
              <MapView
                style={{width: '100%', height: 200, marginTop: 9}}
                initialRegion={item.initialRegion}>
                  <Marker
                    coordinate={item.marker}
                    title={item.meetingpoint}
                  />
              </MapView>
            </View>
          </View>

          <View style={{ flexDirection: 'row', margin: 5, paddingLeft:25}}>
            <View style={{backgroundColor :'white'}}>
            <DatePicker
              style={{width: 150}}
              date={date}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              minDate="2020-05-01"
              maxDate="2023-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 10,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  width: 10,
                  marginLeft: 5,
                  padding: 0,
                },
              }}
              onDateChange={(date) => {
                setDate(date);
              }}
            />
            </View>

            <TouchableOpacity
              style={styles.bookingButton}
              onPress={toBookingScreen}>
              <Text style={{fontSize: 18,color:'white', fontWeight:'bold'}}>Book</Text>
            </TouchableOpacity>
          </View>          
          </View>
          
        </View>
    </ScrollView>
  );
            }

const styles = StyleSheet.create({
  headerText: {
    fontSize: 25,
    alignItems: 'center',
    color: '#E65100',
    fontWeight: 'bold',
  },
  pointing: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingBottom: 15,
    left:1,
    color:'black',
    paddingLeft: 10
  },

  poin: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'orange'
  },
  border: {
    borderBottomColor: '#E2F4CF',
    paddingLeft: 5,
    alignContent: 'center',
    paddingTop: 10,
    paddingBottom: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius:10

  },
  border2: {
    borderColor: 'white',
    borderWidth:10,
    paddingLeft: 5,
    backgroundColor: '#E2F4CF',
    alignContent: 'center',
    paddingTop: 10,
    paddingBottom: 20,
    borderRadius: 20

  },
  borderTop: {
    backgroundColor:'#E2F4CF',
    borderColor: 'white',
    borderWidth: 20,
    padding: 15,
    alignContent: 'center',
    paddingTop: 7,
    borderRadius:50,
  },
  bookingButton: {    
    borderWidth: 0.5,
    elevation: 1,
    borderRadius: 3,
    backgroundColor: '#FF9800',
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    borderColor: '#FF9800'
  }
});

export default BandungPackage;
