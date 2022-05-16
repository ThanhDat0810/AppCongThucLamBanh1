import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
// import AppLoader from "./apploader";
import { AppRegistry } from "react-native";
import Login from './screen/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import  ListMan  from './screen/drawerScreens/ListMan';
import ListNgot from './screen/drawerScreens/ListNgot';
import ListSpecial from './screen/drawerScreens/ListSpecial';
import ListDrink from './screen/drawerScreens/ListDrink';
import HomeScreen from './screen/drawerScreens/HomeScreen';
import RegisterScreen from './screen/register';
import Detail from "./screen/drawerScreens/Detail";
const Stack = createNativeStackNavigator();
export default App = function () {
  return (
    <>
      {/* <AppLoader/> */}
      {/* <SignUpView/> */}
      {/* <Login/> */}
      <NavigationContainer>
        {/* Rest of your app code */}
        <Stack.Navigator
          initialRouteName='Login'
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name='Login' component={Login} />
          {/* <Stack.Screen name="dangky" component={SignUpView} /> */}
          <Stack.Screen name='dangky' component={RegisterScreen} />
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='BanhMan' component={ListMan}
                        screenOptions ={{
                          title:'Bánh Mặn',
                          headerShown: true}} />
          <Stack.Screen name="BanhNgot" component={ListNgot}/>
          <Stack.Screen name="DacBiet" component={ListSpecial}/>
          <Stack.Screen name="DoUong" component={ListDrink}/>
          <Stack.Screen name="ChiTiet" component={Detail}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
