import * as React from 'react';
import { Button, Text, View, Image, Alert } from 'react-native';
import {ForgotHeadText, ForgotButtonCont, ForgotButtons, ForgotForms,
  UpperForgotPane, ForgotContentPane, LowerForgotPane, ForgotSubText  } from '../components/styles';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ForgetPassword =()=>{


  const handleTR = async (val) => {
    alert(response);
    const params = { email }; // Check email
    const result = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: handleTR,
    })
        .then((response) => response.data)
        .catch((error) => {
            console.error(error);
        });

    console.log('result', result);
  };

  const [email, onChangeNumber] = React.useState(null);





  //1. - how to compare the result to the database? - Check if email is valid Adjust forgotforms response type
  //2. - No need to actually implement this feature
    return (
    <ForgotContentPane>
      <UpperForgotPane>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Image style={{ width: 100, height: 70, margin: 20 }} source={require('../assets/fieldtrippr.jpg')} />
      </View>
      <View>
        <ForgotHeadText>Forgot Password</ForgotHeadText>
        <ForgotSubText>
          Enter your email and we will send you a link to reset your password
        </ForgotSubText>
      </View>
      <ForgotSubText>
          Enter email address:
        </ForgotSubText>
      <LowerForgotPane>
        <ForgotForms
          onChangeText={(text) => onChangeNumber(text)}
          value={email}
          // defaultValue={email}
          // ref={eamilRef}
          keyboardType="default"
        ></ForgotForms>
        <ForgotButtonCont>
        <ForgotButtons onPress={handleTR}>
          <ForgotHeadText>Submit</ForgotHeadText>
        </ForgotButtons>
        </ForgotButtonCont>
      </LowerForgotPane>
     </UpperForgotPane>
    </ForgotContentPane>



    );
}
export default ForgetPassword;


