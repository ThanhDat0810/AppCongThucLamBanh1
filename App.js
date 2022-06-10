import 'react-native-gesture-handler';
import React from "react";
import { StatusBar } from "expo-status-bar";
// import AppLoader from "./apploader";
import { AppRegistry } from "react-native";
import Login from './screen/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigationRoutes from './screen/DrawerNavigationRoutes'
import RegisterScreen from './screen/register';
import SplashScreen from "./screen/SplashScreen";
import ListMan from "./screen/drawerScreens/ListMan"
import ListNgot from "./screen/drawerScreens/ListNgot"
import ListSpecial from "./screen/drawerScreens/ListSpecial"
import ListDrink from "./screen/drawerScreens/ListDrink"
import Detail from "./screen/drawerScreens/Detail"
import HomeScreenLive from "./screen/liveStream/liveStreamScreen"
import PlayStream from './screen/liveStream/PlayStream';
import StreamContent from './screen/liveStream/Live'

const Stack = createNativeStackNavigator();
const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="dang-ky"
        component={RegisterScreen}
        options={{
          title: 'Register', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        />
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        {/* Navigation Drawer as a landing page */}
        <Stack.Screen
          name="DrawerNavigationRoutes"
          component={DrawerNavigationRoutes}
          // Hiding header for Navigation Drawer
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name='BanhMan' 
          component={ListMan}
          screenOptions ={{
                title:'Bánh Mặn',
                headerShown: true}} />

        <Stack.Screen 
          name='BanhNgot' 
          component={ListNgot}
          screenOptions ={{
                title:'Bánh Ngọt',
                headerShown: true}} />

        <Stack.Screen 
          name='DacBiet' 
          component={ListSpecial}
          screenOptions ={{
                title:'Đặc Biệt',
                headerShown: true}} />
        <Stack.Screen name="ChiTiet" component={Detail}/>

        <Stack.Screen 
          name='DoUong' 
          component={ListDrink}
          screenOptions ={{
                title:'Đồ Uống',
                headerShown: true}} />
        {/* <Stack.Screen name="livestream" component= {BroadcastScreen}/> */}
        <Stack.Screen
          name="Homelive"
          component={HomeScreenLive}
          options={{ title: "iShow" }}/>
        <Stack.Screen name="Play" component={PlayStream} />
        <Stack.Screen name="Push" component={StreamContent} />
        {/* <Stack.Screen name='Home' component={HomeScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

// export default App = function () {
//   return (
//     <>
//       {/* <AppLoader/> */}
//       {/* <SignUpView/> */}
//       {/* <Login/> */}
//       <NavigationContainer>
//         {/* Rest of your app code */}
//         <Stack.Navigator
//           initialRouteName='Login'
//           screenOptions={{ headerShown: false }}
//         >
//           <Stack.Screen name='Login' component={Login} />
//           {/* <Stack.Screen name="dangky" component={SignUpView} /> */}
//           <Stack.Screen name='dangky' component={RegisterScreen} />
//           <Stack.Screen name='Home' component={HomeScreen} />
//           <Stack.Screen name='BanhMan' component={ListMan}
//                         screenOptions ={{
//                           title:'Bánh Mặn',
//                           headerShown: true}} />
//           <Stack.Screen name="BanhNgot" component={ListNgot}/>
//           <Stack.Screen name="DacBiet" component={ListSpecial}/>
//           <Stack.Screen name="DoUong" component={ListDrink}/>
//           <Stack.Screen name="ChiTiet" component={Detail}/>
//         </Stack.Navigator>
//       </NavigationContainer>
//     </>
//   );
// };
