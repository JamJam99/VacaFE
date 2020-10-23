import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {PAYMENT_SCREEN} from '../navigation/screenNames';
import SessionManager from '../data/SessionManager';

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      user: null,
    };
  }

  componentDidMount() {
    this.getUser();
  }
 
  getUser = async () => {
    try {
      this.setState({isLoading: true});
      let user = await SessionManager.getSession();
      this.setState({isLoading: false, user: user});
    } catch (e) {
      console.log(e);
      this.setState({isLoading: false});
    }
  };

  render() {
    const {navigation} = this.props;
    const {date, item} = this.props.route.params;
    const {isLoading, user} = this.state;
    if (isLoading === true) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={{flex: 1}}>
        <View style={{paddingTop: 25, paddingBottom: 20}}>
        <View style={styles.borderTop}>
        <Text style={{alignContent: 'center', fontSize: 30, color:'white', fontWeight:'700'}}>Booking</Text></View>
        </View>
        <View
          style={styles.border}>
          <View>
            <Text style={
              {
                marginTop: 10,
                marginBottom: 10,
              fontSize:20,
              color: 'orange',
              fontWeight:'700',
              borderBottomWidth: 5,
              borderBottomColor:'orange' 
             }
            
            }>
              Booking Details
            </Text>
            <View >            
            <View style={styles.borderCustomer}><Text style={{marginBottom:10}}><Text style={styles.marginDivider}>Name:</Text> <Text>{user.username}</Text></Text></View>
            <View style={styles.borderCustomer}><Text style={{marginBottom:10}}><Text style={styles.marginDivider}>Email:</Text><Text> {user.email}</Text></Text></View>
            <View style={styles.borderCustomer}><Text style={{marginBottom:10}}><Text style={styles.marginDivider}>Date:</Text>  <Text>{date}</Text></Text></View>
            <View style={styles.borderCustomer}><Text style={{marginBottom:10}}><Text style={styles.marginDivider}>Destination:</Text> {item.packageTitle}</Text></View>
            <View style={styles.borderCustomer}><Text style={{marginBottom:10}}><Text style={styles.marginDivider}>Description:</Text> {item.des}</Text></View>
            <View style={styles.borderCustomer}><Text style={{marginBottom:10}}><Text style={styles.marginDivider}>Price:</Text> {item.price}</Text></View>
            </View>
           
          </View>

        <View style={{top: 100, alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.buttonPayment}
            onPress={() => navigation.navigate(PAYMENT_SCREEN)}>
            <Text style={{fontSize: 18, fontWeight:'bold', color:'white' }}>Payment</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonBack}
            onPress={() => navigation.goBack()}>
            <Text style={{fontWeight:'bold' ,fontSize: 18, color:'#FF9800'}}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      </View>
    );
  }
}

export default Booking;

const styles = StyleSheet.create({
  marginDivider: {
    marginTop: 10,
    marginBottom: 10,
    fontWeight:'bold',
    marginRight: 10
  },
  borderTop:{
    width: 200, 
    height: 50, 
    borderColor:'#FF1B2D', 
    borderWidth: 2, 
    alignItems:'center',
    borderTopRightRadius:20,    
    borderBottomRightRadius:20,
    backgroundColor:'#FF1B2D',  
  },
  borderCustomer: {
      paddingTop:5,  
      paddingLeft: 10, 
      borderBottomWidth: 1, 
      borderBottomColor: 'gray',
      borderTopEndRadius: 5,
      
    
  },
  border: {
    marginHorizontal: 20,    
    width: 350,
    height: 300,
    borderRadius: 10,
    shadowOpacity: 5,
    shadowRadius: 2,
    elevation: 5,
    marginTop: 30,
    padding: 10,
    borderColor: '#E6FFCD',
    backgroundColor: 'white',
  },
  buttonPayment: {
    margin: 10,
    borderRadius: 20,
    elevation: 2,
    backgroundColor: '#FF9800',
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderColor: 'white'

  },
  buttonBack: {    
    margin: 10,
    borderRadius: 20,
    elevation: 2,
    backgroundColor: 'white',
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderColor: '#FF9800',
  }
});