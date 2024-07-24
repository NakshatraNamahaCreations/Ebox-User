import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
// import OtpInputs from 'react-native-otp-inputs';
import OTPTextInput from 'react-native-otp-textinput';

function OtpScreen({navigation}) {
  let otpInput = useRef(null);

  const clearText = () => {
    otpInput.current.clear();
  };

  const setText = () => {
    otpInput.current.setValue('1234');
  };
  return (
    <>
      <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../../assets/one-time-password.png')}
            style={styles.logo}
          />
        </View>

        <Text style={styles.helperText}>OTP</Text>
        {/* <TextInput style={styles.input} keyboardType="numeric" /> */}
        <OTPTextInput
          ref={e => (otpInput = e)}
          textInputStyle={{
            borderWidth: 1,
            borderBottomWidth: 1,
            borderRadius: 5,
            marginTop: 10,
          }}
          tintColor="#3f8107"
        />
        {/* <OTPTextInput ref={e => (this.otpInput = e)} /> */}
        {/* <OtpInputs handleChange={code => console.log(code)} numberOfInputs={6} /> */}

        <Text
          style={{
            color: '#7d8592',
            fontSize: 15,
            fontWeight: '500',
            textAlign: 'center',
            padding: 25,
            fontFamily: 'Poppins-Regular',
          }}>
          Enter OTP received on previously entered mobile number
        </Text>
        <View style={{marginTop: '3%', alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.otpBtn}
            onPress={() => navigation.navigate('BottomTab')}>
            <Text
              style={{
                color: 'black',
                fontSize: 17,
                fontFamily: 'Montserrat-Medium',
              }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 50,
    resizeMode: 'cover',
  },
  helperText: {
    color: 'black',
    fontSize: 30,
    marginTop: 20,
    marginBottom: 12,
    fontFamily: 'Poppins-Medium',
    letterSpacing: 2,
  },
  input: {
    // backgroundColor: '#EFEFEF',
    borderColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: '#787878',
    width: '20%',
    height: 30,
    paddingTop: 5,
    paddingBottom: 5,
    color: '#4b4b4b',
    fontSize: 20,
    // paddingLeft: 16,
    textAlign: 'center',
    fontWeight: '500',
  },
  otpBtn: {
    backgroundColor: '#ceffa4',
    height: 50,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: 'transparent',
    elevation: 3,
    marginTop: '5%',
    marginHorizontal: 70,
    width: 150,
  },
});
export default OtpScreen;
