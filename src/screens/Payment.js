import React from 'react';
import {Text, View, TouchableOpacity,Modal, StyleSheet} from 'react-native';

const Payment = ({navigation}) => {
    const [isvisable,setisvisible]=React.useState(false)
  return (
    <>
      <View style={{flex:1}}>
        <View style={{paddingTop: 20}}>
        <View style={styles.borderTop}>
        <Text style={{alignContent: 'center', fontSize: 30, color:'white', fontWeight:'700'}}>Payments</Text>
        </View>
        </View>
        <TouchableOpacity
        activeOpacity={0.5}
        >
        <View
          style={{
            borderWidth: 1,
            borderRadius: 5,
            borderColor: '#ddd',
            height: 180,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.8,
            shadowRadius: 2,
            borderColor: 'gray',
            elevation: 2,
            margin: 5,
            padding: 10,
          }}>
          <View>
            <Text style={{marginTop: 2, marginBottom: 10, fontSize: 20}}>
              Manual transfer
            </Text>
            <Text style={{marginTop: 10, marginBottom: 10}}>Destination:</Text>
            <Text style={{marginTop: 10, marginBottom: 10}}>isi data</Text>
          </View>
        </View>
        </TouchableOpacity>
      </View>
      
      <View style={{flex: 1}}>
      <TouchableOpacity
      onPress={()=>setisvisible(true)}
        activeOpacity={0.5}
        >
        <View
          style={{
            borderWidth: 1,
            borderRadius: 5,
            borderColor: '#ddd',
            height: 180,
            borderColor: 'gray',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 2,
            margin: 5,
            padding: 10,
          }}>
          <View>
            <Text style={{marginTop: 2, marginBottom: 10, fontSize: 20}}>
              M-Banking Transfer
            </Text>
            <Text style={{marginTop: 10, marginBottom: 10}}>Destination:</Text>
            <Text style={{marginTop: 10, marginBottom: 10}}>isi data</Text>
          </View>
        </View>
</TouchableOpacity>
{/* 
<Modal
  animationType="slide"
  visible={isvisable}
  transparent={true}
>
<View style={{backgroundColor:'white',height:520,width:320,margin:20,padding:10, borderWidth: 1,
            borderRadius: 5,
            borderColor: '#ddd',
           
            borderColor: 'gray',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 2,
         }}>
            <Text style={{marginTop: 2, marginBottom: 10, fontSize: 20}}>
              M-Banking Transfer
            </Text>
            <Text style={{marginTop: 10, marginBottom: 10}}>Destination:</Text>
            <Text style={{marginTop: 10, marginBottom: 10}}>isi data</Text>
            <TouchableOpacity
            style={{
              borderWidth: 0.5,
              elevation: 2,
              borderRadius: 3,
              backgroundColor: 'yellow',
              width: 250,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => navigation.goBack()}>
            <Text style={{fontSize: 18}}>Back</Text>
          </TouchableOpacity>
          </View>
</Modal> */}
        <View style={{margin: 8, alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              borderWidth: 0.5,
              elevation: 2,
              borderRadius: 3,
              backgroundColor: 'yellow',
              width: 250,
              marginLeft:20,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => navigation.goBack()}>
            <Text style={{fontSize: 18}}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Payment;

const styles = StyleSheet.create({
  marginDivider: {
    marginTop: 10,
    marginBottom: 10,
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
    
  }
})