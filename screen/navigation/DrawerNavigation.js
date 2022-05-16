import * as React from 'react';
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';

import HomeScreen from "../drawerScreens/HomeScreen";
import SettingScreen from '../drawerScreens/SettingScreen';
import ProfileScreen from '../drawerScreens/ProfileScreen';
import ManageScreen from '../drawerScreens/ManageScreen';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from 'react-navigation-drawer';


const Drawer = createDrawerNavigator();


const CustomDrawer = props => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
            backgroundColor: "#d64b4b",
            marginBottom: 20,
          }} 
        >
          <View>
            <Text>Shiba Shigeru</Text>
              <Text>Bvinhshikeru@gmail.com</Text>
          </View>
     <Image source={require('../assets/pc.png')}
     style={{ width: 60, height: 60, borderRadius: 30 }}
     />
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 0,
          left: 0,
          bottom: 0,
          backgroundColor: "#d64b4b",
          padding: 20,
        }}
      >
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#d64b4b",
          height: 60,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitle: '',
      }}
      drawerContent={props => <CustomDrawer {...props} />}
    >
      <Drawer.Screen component={HomeScreen} name='Home' />
      <Drawer.Screen component={SettingScreen} name='Setting' /> 
      <Drawer.Screen component={ProfileScreen} name='Profile' />
      <Drawer.Screen component={ManageScreen} name='Manage' />
    </Drawer.Navigator>
  );
};

export default function DrawerNavigation() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
