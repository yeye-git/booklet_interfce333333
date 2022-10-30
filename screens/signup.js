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

import { register } from '~/common-file/apis';

export default function SignUp({ navigation }) {
    const [email, onChangeNumber] = React.useState(null);
    const [pw, onChangeNumber2] = React.useState(null);
    const [checked, setChecked] = React.useState(false);

    const handleSignup = async (type) => {
        if (!email || !pw) {
            Alert.alert('Please enter your Email or Password!');
            return;
        }

        const params = {
            type: Number(type),
            email,
            password: pw,
        };

        const result = await register(params);

        if (result) {
            setTimeout(() => {
                navigation.push('LoginName');
            }, 1000);
        } else {
            Alert.alert(responseJson[0].message);
        }
    };

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
                <SignupButtons testID="SignIn.Button" onPress={() => handleSignup(2)}>
                    <SignupButtonText>Student Registration</SignupButtonText>
                </SignupButtons>
                <SignupButtons onPress={() => handleSignup(1)}>
                    <SignupButtonText>Teacher Registration</SignupButtonText>
                </SignupButtons>
            </SignupButtonsCont>
        </SignupContentPane>
    );
}
