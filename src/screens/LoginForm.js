import React, { Component, useEffect } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';

import {
    Item,
    Input,
    Form,
    Label,
    Button,
    Thumbnail,
    Text
} from 'native-base';
import Axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

import * as screenNames from '../navigation/screenNames'
import bg from '../assets/images/loadb.jpg'
import loGo from '../assets/images/Vacatime1.png'

const Login = ( props) => {
    const [username, setusername] = React.useState('')
    const [password, setpassword] = React.useState('')
    const [token,settoken] = React.useState('')

    useEffect(()=> { 
        getToken()
    },[])
    const getToken = async ()=> {
        settoken(await AsyncStorage.getItem('token'))
    }
    const _Login = async () => {
     //   alert(`Username : ${username}\nPassword : ${password}`)
        /**
         * * Disini buat logic, ketika user pres s login dan result success dari server. Save indicator user login dengan AsyncStorage
         * * await AsyncStorage.setItem('LOGGED_IN', 'true')
         */
        const request_Headers = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Cache-Control': 'no-cache, no-store, must-revalidate',
              'authorization' : 'Bearer ' + token,
              Pragma: 'no-cache',
              Expires: 0,
            },
            body: JSON.stringify({
              username: username,
              password: password,
            }),
          };
          
          const request_UserURL = 'https://vacatimeapplication.herokuapp.com/customers';
          const response = await fetch(request_UserURL, request_Headers)
            .then((res) => {
                res.json() 
                props.navigation.navigate(screenNames.HOME_SCREEN);
                setusername('')
                setpassword('')
            })            
            .then((res) => { 
                console.log('beres', res)
                 setusername('')
                 setpassword('')
          })
            .catch((error) => console.log(error));
          console.log(response);
        
    }
console.log(token)


        const {navigation} = props;
    return (
        <View style={styles.containerStyle}>

            <Image style={styles.bgImageStyle} source={bg} />
            <View style={styles.logoStyle}>
                <Thumbnail square large source={loGo} />
                <Text style={styles.textLogoStyle}>VacaTime</Text>
            </View>
            <Form style={styles.formLoginStyle}>
                <Item floatingLabel>
                    <Label>
                        <Text style={styles.inputStyle}>Username</Text>
                    </Label>
                <Input value={username} style={styles.inputStyle} onChangeText={(value) => setusername(value)} />
                </Item>
                <Item floatingLabel>
                    <Label>
                        <Text style={styles.inputStyle}>Password</Text>
                    </Label>
                    <Input value={password} style={styles.inputStyle} secureTextEntry={true} onChangeText={(value) => setpassword(value)} />
                </Item>
            </Form>
            <Button onPress={()=>_Login()} block info style={styles.footerBottomStyle}>
                <Text>Sign In</Text>
            </Button>
            <View style={styles.footerSignUpStyle}>
                <TouchableOpacity onPress={() => navigation.navigate(screenNames.REGISTRATION_SCREEN)}>
                    <Text style={styles.signUpStyle}>
                        Don't have an account? Register Here
                  </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
    }




const styles = StyleSheet.create({
    containerStyle: {
        flex: 1
    },
    bgImageStyle: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%'

    },
    logoStyle: {
        marginTop: 70,
        marginBottom: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textLogoStyle: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold'
    },
    formLoginStyle: {
        marginTop: -30,
        paddingLeft: 10,
        paddingRight: 30,
    },
    inputStyle: {
        color: 'white',
        marginBottom: 6,
        fontSize: 14
    },
    footerBottomStyle: {
        marginTop: 26,
        paddingTop: 10,
        marginLeft: 16,
        marginRight: 16,
        backgroundColor: '#FF9800'
    },
    footerSignUpStyle: {
        marginTop: 25,
        alignItems: 'center'
    },
    signUpStyle: {
        color: 'white',
        fontSize: 15 
    }

})

export default Login;

//  setLoading(true);
//     let headers = {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         username: username,
//         password: password,
//       }),
//     };
//     useEffect(() => {
//       fetch('127.0.0.1:8080/customers', headers)
//         .then((response) => response.json())
//         .then((result) => {
//           if (result.status === true) {
//             let session = {
//               username: result.data.userName,
//               email: result.data.email,
//             };
//             this.storeSession(session);
//             setLoading(false);
//             this.props.navigation.navigate(screenNames.HOME_SCREEN);
//           } else {
//             setLoading(false);
//             alert('login gagal');
//           }
//         })
//         .catch((error) => {
//           console.error(error);
//           setLoading(false);
//         })
//         .finally(() => {
//           this.setState({isLoading: false});
//         });
//     });