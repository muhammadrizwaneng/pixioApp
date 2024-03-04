import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import Signin from './sso/Signin';
import Home from './sso/Home';
import Profile from './sso/Profile';
import PhoneNumber from './sso/PhoneNumber';
import Activity from './sso/Activity';
import MobileDesign from './mobileDesign/MobileDesign';
import EcommerceDesign from './mobileDesign/EcommerceDesign';
import EcommerceDetailScreen from './mobileDesign/EcommerceDetailScreen'
import EcommerceCategories from './mobileDesign/EcommerceCategories';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const AuthenticatedDrawerScreens = () => {
  return (
    <Drawer.Navigator initialRouteName='Tab'>
      <Drawer.Screen name='Home' component={Home} />
      <Drawer.Screen name='Profile' component={Profile} />
      <Drawer.Screen name='Template' component={MobileDesign} />
      <Drawer.Screen name='Ecommerce Design' component={EcommerceDesign} />
      <Drawer.Screen name="Tab" component={AuthenticatedTabScreens} />
    </Drawer.Navigator>
  );
}

const AuthenticatedTabScreens = () => {
  return (
    <Tab.Navigator initialRouteName='Ecommerce Design'>
      <Tab.Screen name='Ecommerce Design' component={EcommerceDesign} />
      <Tab.Screen name='Phone Number' component={PhoneNumber} />
      <Tab.Screen name='Activity' component={Activity} />
      <Tab.Screen name='Fryer Details' component={EcommerceDetailScreen} />
      <Tab.Screen name='Categories' component={EcommerceCategories} />

    </Tab.Navigator>
  );
}

function App() {
  const selectUserInfo = (state: any) => state?.user?.status;
  const isLoggedIn = useSelector(selectUserInfo);
  console.log("isLoggedIn-----",isLoggedIn)

  return (
    <NavigationContainer>
      {isLoggedIn == "authenticated" ? (
        <AuthenticatedDrawerScreens /> // Or <AuthenticatedTabScreens />
      ) : (
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen
            name="Home"
            component={Signin}
            options={{ title: 'Sign In' }}
          />
          <Stack.Screen name="Signin" component={Signin} />
          {/* <Stack.Screen name="HomePage" component={Home} /> */}
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;
