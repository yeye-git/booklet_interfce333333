import * as React from 'react';
import { Alert, StyleSheet, View, Image, Text } from 'react-native';
import Checkbox from 'expo-checkbox';
import {
    EmailPasswordSignup,
    GoogleFavicon,
    MakingLearningFunHeaderBar,
    SignupContentPane,
    SUGoogleButton,
    UpperPaneGooglePane,
    UpperPaneGooglePaneIcon,
    LoginForms,
    UpperPaneHeadSubText,
    UpperPaneHeadText,
    UpperPaneHeadTextCont,
    UpperSignupPane,
    SignupHead,
    RememberCont,
    RememberForm,
    ForgotForm,
    SigninSubText,
    ForgotText,
    SignupButtons,
    SignupButtonText,
    SignupButtonsCont,
} from '../components/styles';

import baseUrl from '../common-file/config/index';

export default function SignUp({ navigation }) {
    const handleSR = async (val) => {
        console.log('0000', `${baseUrl}/register`);
        if (!email || !pw) {
            Alert.alert('Please enter your Email or Password!');
            return;
        }
        const Student_Res = { email, password: pw, role: 0 };

        //  const _result = await fetch(
        //       'http://localhost:3000/register',{
        //           method: 'POST',
        //           headers: {
        //             Accept: 'application/json',
        //             'Content-Type': 'application/json'
        //           },
        //           body: Student_Res
        //       }
        //     )
        //       .then((response) => response.data)
        //       .catch((error) => {
        //         console.error(error);
        //       });

        //       console.log('result',_result)

        let response = await fetch(`${baseUrl}/register`, {
            method: 'POST', // ，GET/POST/PUT/DELETE
            mode: 'cors', // ，no-cors/*cors/same-origin
            cache: 'no-cache', // ，*default/no-cache/reload/force-cache/only-if-cached
            credentials: 'same-origin', // cookie，*same-origin/include/omit
            headers: {
                'Content-Type': 'application/json', // body，'application/x-www-form-urlencoded'
            },
            redirect: 'follow', // redirect，*follow/manual/error
            referrer: 'no-referrer', // ，no-referrer, *client
            body: JSON.stringify(Student_Res),
        });

        let responseJson = await response.json();
        console.log('11111', responseJson);

        // ! example:  go to home page

        // setRoleVariable('roleStudent')

        if (responseJson[0].code === 200) {
            Alert.alert('Registration Successful');

            setTimeout(() => {
                navigation.push('LoginName', { name: 'Student.li' });
            }, 1000);
        } else {
            Alert.alert(responseJson[0].message);
        }

        console.log('select error');
    };

    // console.log(123, navigation);
    //   alert(response);
    //   console.log(123)

    const handleTR = async (val) => {

        if (!email || !pw) {
            Alert.alert('Please enter your Email or Password!');
            return;
        }
        const Teacher_Res = { email, password: pw, role: 1 };

        let response = await fetch(`${baseUrl}/register`, {
            method: 'POST', // ，GET/POST/PUT/DELETE
            mode: 'cors', // ，no-cors/*cors/same-origin
            cache: 'no-cache', // ，*default/no-cache/reload/force-cache/only-if-cached
            credentials: 'same-origin', // cookie，*same-origin/include/omit
            headers: {
                'Content-Type': 'application/json', // body，'application/x-www-form-urlencoded'
            },
            redirect: 'follow', // redirect，*follow/manual/error
            referrer: 'no-referrer', // ，no-referrer, *client
            body: JSON.stringify(Teacher_Res),
        });

        let responseJson = await response.json();
        console.log('11111', responseJson);

        if (responseJson[0].code === 200) {
            Alert.alert('Registration Successful');

            setTimeout(() => {
                navigation.push('LoginName', { name: 'Teacher.li' });
            }, 1000);
        } else {
            Alert.alert(responseJson[0].message);
        }
    };

    const [email, onChangeNumber] = React.useState(null);
    const [pw, onChangeNumber2] = React.useState(null);
    const [checked, setChecked] = React.useState(false);
    const responseGoogle = (response) => {
        alert(response);
    };

    const styles = StyleSheet.create({
        container: {
            paddingTop: 50,
        },
        tinyLogo: {
            width: 350,
            height: 350,
            zIndex: 11,
            backgroundColor: 'red',
        },
        logo: {
            width: 66,
            height: 58,
        },
    });

    return (
        <SignupContentPane>
            <UpperSignupPane>
                <UpperPaneHeadTextCont>
                    <UpperPaneHeadText>Create Account</UpperPaneHeadText>
                    <UpperPaneHeadSubText>Join with</UpperPaneHeadSubText>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Image style={{ width: 85, height: 65, margin: 20 }} source={require('../assets/Gmail.jpg')} />
                    </View>
                    <View style={{ margin: 10 }}>
                        <View style={{ width: '100%', backgroundColor: 'black', height: 1 }}></View>
                        <Text
                            style={{
                                textAlign: 'center',
                                position: 'absolute',
                                top: -10,
                                left: '50%',
                                paddingLeft: 10,
                                paddingRight: 10,
                                width: 130,
                                backgroundColor: 'white',
                                marginLeft: -60,
                            }}
                        >
                            {' '}
                            Or Sign Up with{' '}
                        </Text>
                    </View>
                    {/* <UpperPaneGooglePane></UpperPaneGooglePane> */}
                </UpperPaneHeadTextCont>
                <EmailPasswordSignup>
                    {/*<SignupHead>Email</SignupHead>*/}
                    <LoginForms
                        placeholder="Email"
                        onChangeText={(text) => onChangeNumber(text)}
                        value={email}
                        // defaultValue={email}
                        // ref={eamilRef}
                        keyboardType="default"
                        testID="SignUp.usernameInput"
                    ></LoginForms>
                    {/* <TextInput style={{height:40,margin:12,borderWidth:1,padding:10}} ></TextInput> */}
                    {/*<SignupHead>Password</SignupHead>*/}
                    <LoginForms
                        placeholder="Password"
                        onChangeText={(text) => onChangeNumber2(text)}
                        value={pw}
                        keyboardType="default"
                        testID="SignUp.passwordInput"
                    ></LoginForms>
                </EmailPasswordSignup>
                <RememberCont>
                    <RememberForm>
                        <Checkbox
                            value={checked}
                            onValueChange={() => {
                                setChecked(!checked);
                            }}
                            color={checked ? '#b198ff' : undefined}
                        />
                        <SigninSubText>Remember Me?</SigninSubText>
                    </RememberForm>
                    <ForgotForm>
                        <ForgotText>Forgot Password</ForgotText>
                    </ForgotForm>
                </RememberCont>
            </UpperSignupPane>
            <SignupButtonsCont>
                <SignupButtons testID="SignIn.Button" onPress={handleSR}>
                    <SignupButtonText>Student Registration</SignupButtonText>
                </SignupButtons>
                <SignupButtons onPress={handleTR}>
                    <SignupButtonText>Teacher Registration</SignupButtonText>
                </SignupButtons>
            </SignupButtonsCont>
        </SignupContentPane>
    );
}
