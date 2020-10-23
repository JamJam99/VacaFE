import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    AsyncStorage
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

import * as screenNames from '../navigation/screenNames'
import bg from '../assets/images/loadb.jpg'
import loGo from '../assets/images/Vacatime1.png'

const Login = ({ navigation }) => {
    const [username, setusername] = React.useState('')
    const [password, setpassword] = React.useState('')

    const _Login = async ({ navigation }) => {
        alert(`Username : ${username}\nPassword : ${password}`)
        /**
         * * Disini buat logic, ketika user press login dan result success dari server. Save indicator user login dengan AsyncStorage
         * * await AsyncStorage.setItem('LOGGED_IN', 'true')
         */
    }

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
                    <Input style={styles.inputStyle} onChangeText={(value) => setusername(value)} />
                </Item>
                <Item floatingLabel>
                    <Label>
                        <Text style={styles.inputStyle}>Password</Text>
                    </Label>
                    <Input style={styles.inputStyle} secureTextEntry={true} onChangeText={(value) => setpassword(value)} />
                </Item>
            </Form>
            <Button onPress={_Login} block info style={styles.footerBottomStyle}>
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
    )
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

 // setLoading(true);
    // let headers = {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     username: username,
    //     password: password,
    //   }),
    // };
    // useEffect(() => {
    //   fetch('127.0.0.1:8080/customers', headers)
    //     .then((response) => response.json())
    //     .then((result) => {
    //       if (result.status === true) {
    //         let session = {
    //           username: result.data.userName,
    //           email: result.data.email,
    //         };
    //         this.storeSession(session);
    //         setLoading(false);
    //         this.props.navigation.navigate(screenNames.HOME_SCREEN);
    //       } else {
    //         setLoading(false);
    //         alert('login gagal');
    //       }
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //       setLoading(false);
    //     })
    //     .finally(() => {
    //       this.setState({isLoading: false});
    //     });
    // });