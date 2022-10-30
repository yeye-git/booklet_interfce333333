import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { View, Text, Image, SafeAreaView, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';
import LoginPage from './login2';
import { BottomSheet } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-paper';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import storage from '~/common-file/store/storage';

import baseUrl from '../common-file/config';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import {
    CustomButton,
    CustomButtonText,
    CustomTextInput,
    CustomTextInputWrapper,
    StyledTextInput,
} from '../components/styles';

export default function Login({ navigation }) {
    const [text, setText] = React.useState('');
    const [isVisible, setIsVisible] = React.useState(false);
    const [textBtn, setTextBtn] = React.useState('continue');
    const [pageState, setPageState] = React.useState(1);
    const [email, onChangeNumber] = React.useState('');
    const [password, onChangeNumberpd] = React.useState('');
    const [showEmailText, setShowEmailText] = React.useState(false);
    const [showPasswordText, setShowPasswordText] = React.useState(false);
    const [showConfirmPasswordText, setShowConfirmPasswordText] = React.useState(false);

    useEffect(() => {
        storage.setItem('token', '');
    }, []);

    const handleStep = async () => {
        if (pageState === 1) {
            setPageState(2);
            const LoginparamsT = { email };
            console.log('0000', LoginparamsT, `${baseUrl}/send_gmail`);

            let responseT = await fetch(`${baseUrl}/send_gmail`, {
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

            console.log(responseJsonT, '111');

            if (responseJsonT[0].code == '200') {
                // set_UserName(email);
                Alert.alert(responseJsonT[0].message);
                return;
            } else {
                Alert.alert(responseJsonT[0].message);
                return;
            }
        } else if (pageState === 2) {
            setPageState(3);
            setTextBtn('Reset password');
        } else if (pageState === 3) {
            const LoginparamsT = { email, password: password, code: '1234' };
            console.log('0000', LoginparamsT, `${baseUrl}/forgetPw`);

            let responseT = await fetch(`${baseUrl}/forgetPw`, {
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

            console.log(responseJsonT, '111');

            if (responseJsonT[0].code == '200') {
                // set_UserName(email);
                Alert.alert('password reset success');
                setIsVisible(false);
                return;
            } else {
                Alert.alert(responseJsonT[0].message);
                return;
            }
        }
    };
    const styles = StyleSheet.create({
        Input: {
            width: '100%',
            height: 15,
            borderRadius: '20%',
            backgroundColor: 'white',
        },
        popupView: { backgroundColor: 'white', padding: 20, borderRadius: 30 },
        //      This is verified code from Gmail
        root: { flex: 1, padding: 20 },
        title: { textAlign: 'center', fontSize: 30 },
        codeFieldRoot: { marginTop: 20 },
        cell: {
            width: 40,
            height: 40,
            lineHeight: 38,
            fontSize: 24,
            borderWidth: 2,
            borderColor: '#00000030',
            textAlign: 'center',
        },
        focusCell: {
            borderColor: '#000',
        },
    });

    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const CELL_COUNT = 4;

    return (
        <View>
            {/** TODO redundance code, It can be optimized */}
            <LoginPage c_setIsVisible={setIsVisible} c_setTextBtn={setTextBtn} navigation={navigation} />
            {/* <SafeAreaProvider> */}
            {/* <Button title="Open Bottom Sheet" onPress={() => setIsVisible(true)}  /> */}
            <BottomSheet modalProps={{}} isVisible={isVisible}>
                <View style={styles.popupView}>
                    {pageState === 1 && (
                        <View style={{ height: 350, paddingBottom: 50 }}>
                            <Text
                                onPress={() => {
                                    setPageState(1);
                                    setIsVisible(false);
                                }}
                                style={{ paddingBottom: 20 }}
                            >
                                <AntDesignIcons name="closecircleo" size={20} color="#6b5ec1" />
                            </Text>
                            <Text style={{ paddingBottom: 70, fontSize: 20 }}>Forget Password</Text>
                            <Text style={{ paddingBottom: 50, fontSize: 15 }}>
                                Enter your email for the verification process, we will send 4 digitals code to your
                                Email111
                            </Text>

                            {/*<TextInput*/}

                            {/*    value={email}*/}
                            {/*    style={{ border: 'none', outline: 'none' }}*/}
                            {/*    label="Gmail"*/}
                            {/*    secureTextEntry*/}
                            {/*    right={<TextInput.Icon icon="eye" />}*/}
                            {/*/>*/}
                            <CustomTextInputWrapper>
                                <CustomTextInput
                                    placeholder="Gmail"
                                    secureTextEntry={!showEmailText}
                                    onChangeText={(text) => onChangeNumber(text)}
                                    value={email}
                                />
                                <MaterialIcons
                                    name={showEmailText ? 'visibility-off' : 'visibility'}
                                    size={24}
                                    color="#454545"
                                    style={{ position: 'absolute', right: 15, top: 12 }}
                                    onPress={() => setShowEmailText(!showEmailText)}
                                />
                            </CustomTextInputWrapper>
                        </View>
                    )}

                    {pageState === 2 && (
                        <View style={{ height: 350 }}>
                            <Text
                                onPress={() => {
                                    setPageState(1);
                                    setIsVisible(false);
                                }}
                                style={{ paddingBottom: 20 }}
                            >
                                <AntDesignIcons name="closecircleo" size={20} color="#6b5ec1" />
                            </Text>
                            <Text style={{ paddingBottom: 40, fontSize: 20 }}>Enter 4 Digits Code</Text>
                            <Text>Enter 4 Digits Code that you received on your email</Text>
                            <SafeAreaView style={styles.root}>
                                <Text style={styles.title}>Verification</Text>
                                <CodeField
                                    ref={ref}
                                    {...props}
                                    // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                                    value={value}
                                    onChangeText={setValue}
                                    cellCount={CELL_COUNT}
                                    rootStyle={styles.codeFieldRoot}
                                    keyboardType="number-pad"
                                    textContentType="oneTimeCode"
                                    renderCell={({ index, symbol, isFocused }) => (
                                        <Text
                                            key={index}
                                            style={[styles.cell, isFocused && styles.focusCell]}
                                            onLayout={getCellOnLayoutHandler(index)}
                                        >
                                            {symbol || (isFocused ? <Cursor /> : null)}
                                        </Text>
                                    )}
                                />
                            </SafeAreaView>
                        </View>
                    )}
                    {pageState === 3 && (
                        <View style={{ paddingBottom: 50 }}>
                            <Text
                                onPress={() => {
                                    setPageState(1);
                                    setIsVisible(false);
                                }}
                                style={{ paddingBottom: 20 }}
                            >
                                <AntDesignIcons name="closecircleo" size={20} color="#6b5ec1" />
                            </Text>
                            <Text style={{ paddingBottom: 40, fontSize: 20 }}>Reset Password</Text>
                            <Text style={{ paddingBottom: 40, fontSize: 15 }}>
                                Set the new password for your account so you can login and access all the features
                            </Text>
                            <Text style={{ paddingBottom: 20 }}>Password</Text>
                            {/*<TextInput*/}
                            {/*    style={{ borderRadius: 20 }}*/}
                            {/*    label="Password"*/}
                            {/*    secureTextEntry*/}
                            {/*    right={<TextInput.Icon icon="eye" />}*/}
                            {/*    onChangeText={(text) => onChangeNumberpd(text)}*/}
                            {/*    value={password}*/}

                            {/*/>*/}
                            <CustomTextInputWrapper>
                                <CustomTextInput
                                    placeholder="Password"
                                    secureTextEntry={!showPasswordText}
                                    onChangeText={(text) => onChangeNumberpd(text)}
                                    value={password}
                                />
                                <MaterialIcons
                                    name={showPasswordText ? 'visibility-off' : 'visibility'}
                                    size={24}
                                    color="#454545"
                                    style={{ position: 'absolute', right: 15, top: 15 }}
                                    onPress={() => setShowPasswordText(!showPasswordText)}
                                />
                            </CustomTextInputWrapper>
                            <Text style={{ paddingBottom: 20, paddingTop: 20 }}>Password</Text>
                            {/*<TextInput label="Password" secureTextEntry right={<TextInput.Icon icon="eye" />} />*/}
                            <CustomTextInputWrapper>
                                <CustomTextInput placeholder="Password" secureTextEntry={!showConfirmPasswordText} />
                                <MaterialIcons
                                    name={showConfirmPasswordText ? 'visibility-off' : 'visibility'}
                                    size={24}
                                    color="#454545"
                                    style={{ position: 'absolute', right: 15, top: 15 }}
                                    onPress={() => setShowConfirmPasswordText(!showConfirmPasswordText)}
                                />
                            </CustomTextInputWrapper>
                        </View>
                    )}

                    <CustomButton onPress={handleStep}>
                        <CustomButtonText>{textBtn}</CustomButtonText>
                    </CustomButton>
                    {/*<Button title={textBtn} onPress={handleStep} style={{borderRadius: 20}}></Button>*/}
                </View>
            </BottomSheet>
            {/* </SafeAreaProvider> */}
        </View>
    );
}
