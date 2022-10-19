import React, { useRef } from 'react';
import { Text, Alert, View, Image, TextInput } from 'react-native';
import {
    BottomButtons,
    BottomButtonText,
    LoginButtons,
    LoginButtonText,
    LoginContBottomButtons,
    LoginContForms,
    LoginContSplash,
    LoginContSubmissionButtons,
    LoginForms,
    LoginHeadText,
    LoginPageView,
} from '../components/styles';
import loginBg from '../assets/login-bg.png';

import baseUrl from '../common-file/config';
import Utils from '../utils/utils';

const LoginPage = ({ navigation, setRoleVariable, set_UserName, c_setIsVisible, c_setTextBtn }) => {
    const [email, onChangeNumber] = React.useState('');
    const [pw, onChangeNumber2] = React.useState('');
    const eamilRef = useRef(null);
    const pushHome = () => {
        console.log('1123123123');
        navigation.push('HomeName', { name: 'xaiohei' });
    };

    const handleLogin = async (val) => {
        // TODO
        // console.log(email, pw, val, 'flag111');

        if (!email || !pw) {
            Alert.alert('Please enter your Email or Password!');
            return;
        }

        // switch (val) {
        //     case 0:
        //         console.log('111122');
        //         break;
        //     case 1:
        //         console.log('2233');
        //         break;
        // }

        switch (val) {
            case 0:
                //TODO these code base on back end document.
                //TODO request URL need to Linux, local URL request fail.
                // logic of student
                const LoginparamsS = { email, password: pw, role: 0 };
                console.log(email, pw, val, 'flag222');

                let responseS = await fetch(`${baseUrl}/login`, {
                    method: 'POST', // ，GET/POST/PUT/DELETE
                    mode: 'cors', // ，no-cors/*cors/same-origin
                    cache: 'no-cache', // ，*default/no-cache/reload/force-cache/only-if-cached
                    credentials: 'same-origin', // cookie，*same-origin/include/omit
                    headers: {
                        'Content-Type': 'application/json', // body，'application/x-www-form-urlencoded'
                    },
                    redirect: 'follow', // redirect，*follow/manual/error
                    referrer: 'no-referrer', // ，no-referrer, *client
                    body: JSON.stringify(LoginparamsS),
                });

                // console.log('111', response);

                let responseJsonS = await responseS.json();

                if (responseJsonS[0].status === 'SUCCESS') {
                    set_UserName(email);

                    Alert.alert('Login Successful');

                    setRoleVariable('roleStudent');

                    setTimeout(() => {
                        navigation.push('HomeName', { name: 'Student.li' });
                    }, 1000);
                    return;
                } else {
                    Alert.alert(responseJsonS[0].message);
                    return;
                }

                // ! example:  go to home page

                // navigation.push('HomeName', { name: 'Student.li' });
                break;
            case 1:
                //TODO these code base on back end document.
                //TODO request URL need to Linux, local URL request fail.
                //logic of teacher
                const LoginparamsT = { email, password: pw, role: 1 };
                console.log(LoginparamsT, `${baseUrl}/login`);

                let responseT = await fetch(`${baseUrl}/login`, {
                    method: 'POST', // ，GET/POST/PUT/DELETE
                    mode: 'cors', // ，no-cors/*cors/same-origin
                    cache: 'no-cache', // ，*default/no-cache/reload/force-cache/only-if-cached
                    credentials: 'same-origin', // cookie，*same-origin/include/omit
                    headers: {
                        'Content-Type': 'application/json', // body，'application/x-www-form-urlencoded'
                    },
                    redirect: 'follow', // redirect，*follow/manual/error
                    referrer: 'no-referrer', // ，no-referrer, *client
                    body: JSON.stringify(LoginparamsT),
                });

                let responseJsonT = await responseT.json();

                console.log(responseJsonT, '---', responseJsonT[0].status);

                if (responseJsonT[0].status === 'SUCCESS') {
                    const { userId } = responseJsonT[0];
                    Utils.userId = userId
                    console.log('-----1-------------', Utils.userId);
                    set_UserName(email);
                    Alert.alert('Login Successful');
                    setRoleVariable('roleTeacher');
                   
                    setTimeout(() => {
                        navigation.push('HomeName', { name: 'Teacher.li' });
                    }, 1000);
                    return;
                } else {
                    Alert.alert(responseJsonT[0].message);
                    return;
                }

                // ! example:  go to home page
                break;
            default:
                console.log('select error');
        }

        // console.log(123, navigation);
    };

    const handleSignup = () => {
        navigation.push('SignUpName', { name: 'Mrs.li' });
    };

    const handleForgotPassword = () => {
        // navigation.push('ForgotPasswordName', { pasword: 'password' });
        // 調用父組件的函數 setIsvisible
        // const setIsVisible=>{}

        c_setIsVisible(true);
        c_setTextBtn('continue');
    };

    const [value, onChangeText] = React.useState('Useless Placeholder');

    return (
        <LoginPageView>
            {/* <View>
            <Image style={{ width: 35, height: 35 }} source={require('../assets/Book-open.png')} />
        </View> */}
            <LoginContSplash source={loginBg} resizeMode="cover">
                <LoginHeadText>Hello Again!</LoginHeadText>
            </LoginContSplash>
            <LoginContForms>
                <LoginForms
                    onChangeText={(text) => onChangeNumber(text)}
                    value={email}
                    // defaultValue={email}
                    // ref={eamilRef}
                    // placeholder="email"
                    placeholder="Email"
                    keyboardType="default"
                ></LoginForms>
                {/* <TextInput style={{height:40,margin:12,borderWidth:1,padding:10}} ></TextInput> */}
                <LoginForms
                    onChangeText={(text) => onChangeNumber2(text)}
                    value={pw}
                    placeholder="Password"
                    keyboardType="default"
                ></LoginForms>
            </LoginContForms>
            <LoginContSubmissionButtons>
                <LoginButtons onPress={() => handleLogin(1)}>
                    <LoginButtonText>T-Login</LoginButtonText>
                </LoginButtons>
                <LoginButtons onPress={() => handleLogin(0)}>
                    {/* <LoginButtons onPress={() =>Alert.alert('11')}> */}
                    <LoginButtonText>S-Login</LoginButtonText>
                </LoginButtons>
            </LoginContSubmissionButtons>
            <LoginContBottomButtons>
                <BottomButtons onPress={handleSignup}>
                    <BottomButtonText>Register</BottomButtonText>
                </BottomButtons>
                <BottomButtons onPress={() => handleForgotPassword()}>
                    <BottomButtonText>Forgot Password?</BottomButtonText>
                </BottomButtons>
            </LoginContBottomButtons>
        </LoginPageView>
    );
};
export default LoginPage;
