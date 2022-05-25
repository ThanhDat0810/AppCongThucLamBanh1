
// Import React and Component
import React, { useState, createRef } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from "react-native";

import Loader from "./Components/loader";

const RegisterScreen = (props) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userHoten, setUserHoten] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);

  const userInputRef = createRef();
  const nameInputRef = createRef();
  const addressInputRef = createRef();
  const passwordInputRef = createRef();
  const emailInputRef = createRef();

  const handleSubmitButton = () => {
    setErrortext('');
    if (!userName) {
      alert("Please fill Name");
      return;
    }
    if (!userEmail) {
      alert("Please fill Email");
      return;
    }
    if (!userHoten) {
      alert("Please fill Age");
      return;
    }
    if (!userAddress) {
      alert("Please fill Address");
      return;
    }
    if (!userPassword) {
      alert("Please fill Password");
      return;
    }
    //Show Loader
    setLoading(true);
    var dataToSend = {
      UserName: userName,
      email: userEmail,
      HoTen: userHoten,
      DiaChi: userAddress,
      MatKhau: userPassword,
    };
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    fetch('http://192.168.1.166:3000/DangKy', {
      method: 'POST',
      body: formBody,
      headers: {
        //Header Defination
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.status === "success") {
          setIsRegistraionSuccess(true);
          console.log("Registration Successful. Please Login to proceed");
        } else {
          setErrortext(responseJson.msg);
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };
  if (isRegistraionSuccess) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#d64b4b",
          justifyContent: "center",
        }}
      >
      <Image
          source={require('./assets/success.png')}
          style={{
            height: 150,
            resizeMode: "contain",
            alignSelf: "center",
          }}
        />
        <Text style={styles.successTextStyle}>Registration Successful </Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate('Login')}>
          <Text style={styles.buttonTextStyle}>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "#d64b4b" }}>
        <Loader loading={loading} />
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Image
              source={require('./assets/Logo.png')}
              style={{
                width: "50%",
                height: 160,
                resizeMode: "contain",
                margin: 20,
              }}
            />
          </View>
          <KeyboardAvoidingView enabled>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserName) => setUserName(UserName)}
                underlineColorAndroid="#f000"
                placeholder="Tài Khoản"
                placeholderTextColor="white"
                autoCapitalize="sentences"
                returnKeyType="next"
                onSubmitEditing={() =>
                  userInputRef.current && userInputRef.current.focus()
                }
                blurOnSubmit={false}
              />
            </View>

            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserPassword) => setUserPassword(UserPassword)}
                underlineColorAndroid="#f000"
                placeholder="Enter Password"
                placeholderTextColor="white"
                ref={passwordInputRef}
                autoCapitalize="none"
                keyboardType="default"
                returnKeyType="next"
                secureTextEntry={true}
                onSubmitEditing={() =>
                  passwordInputRef.current && passwordInputRef.current.focus()
                }
                blurOnSubmit={false}
              />
            </View>

            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                underlineColorAndroid="#f000"
                placeholder="Enter Email"
                placeholderTextColor="white"
                keyboardType="email-address"
                ref={emailInputRef}
                returnKeyType="next"
                onSubmitEditing={() =>
                  emailInputRef.current && emailInputRef.current.focus()
                }
                blurOnSubmit={false}
              />
            </View>

            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(userHoten) => setUserHoten(userHoten)}
                underlineColorAndroid="#f000"
                placeholder="Enter Name"
                placeholderTextColor="white"
                keyboardType="default"
                ref={nameInputRef}
                returnKeyType="next"
                onSubmitEditing={() =>
                  nameInputRef.current && nameInputRef.current.focus()
                }
                blurOnSubmit={false}
              />
            </View>

            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserAddress) => setUserAddress(UserAddress)}
                underlineColorAndroid="#f000"
                placeholder="Enter Address"
                placeholderTextColor="white"
                autoCapitalize="sentences"
                ref={addressInputRef}
                returnKeyType="next"
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
              />
            </View>
            <View>
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}>
                {errortext}
              </Text>
            ) : null}
            </View>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitButton}
            >
            <Text style={styles.buttonTextStyle}>Đăng ký</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: "#b41616",
    borderWidth: 2,
    color: "#000000",
    borderColor: "#000000",
    height: 40,
    borderStyle: "solid",
    alignItems: "center",
    borderRadius: 10,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: "white",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#dadae8",
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
  successTextStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    padding: 30,
  },
});
