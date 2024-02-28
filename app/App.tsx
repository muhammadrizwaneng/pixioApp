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

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const AuthenticatedDrawerScreens = () => {
  return (
    <Drawer.Navigator initialRouteName='Profile'>
      <Drawer.Screen name='Home' component={Home} />
      <Drawer.Screen name='Profile' component={Profile} />
      <Drawer.Screen name="Tab" component={AuthenticatedTabScreens} />
    </Drawer.Navigator>
  );
}

const AuthenticatedTabScreens = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Phone Number' component={PhoneNumber} />
      <Tab.Screen name='Activity' component={Activity} />
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
            options={{ title: 'Overview' }}
          />
          <Stack.Screen name="Signin" component={Signin} />
          {/* <Stack.Screen name="HomePage" component={Home} /> */}
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;
