import React, { useRef } from 'react';
import { Alert } from 'react-native';
import storage from '~/common-file/store/storage';
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
import useStore from '~/common-file/store';
import { login } from '~/common-file/apis';

const LoginPage = ({ navigation, c_setIsVisible, c_setTextBtn }) => {
    const [email, onChangeNumber] = React.useState('');
    const [pw, onChangeNumber2] = React.useState('');
    const setUser = useStore((state) => state.setUser);

    const handleLogin = async (type) => {
        if (!email || !pw) {
            Alert.alert('Please enter your Email or Password!');
            return;
        }

        const params = {
            type: Number(type),
            email,
            password: pw,
        };

        const result = await login(params);
        if (result) {
            console.log('🚀 ~ file: login2.js ~ line 40 ~ handleLogin ~ result', result);
            setUser({
                ...result.userInfo,
            });
            storage.setItem('token', result.token);

            Alert.alert('Login Successful');

            setTimeout(() => {
                navigation.push('HomeName', { name: Number(type) === 1 ? 'Teacher.li' : 'Student.li' });
            }, 1000);
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
                <LoginButtons onPress={() => handleLogin(212)}>
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
