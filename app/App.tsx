import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import Signin from './sso/Signin';
import HomePage from './sso/HomePage';
import MyProfile from './sso/MyProfile';
import ForgotPsssword from './sso/ForgotPassword';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// const AuthenticatedDrawerScreens = () => {
//   return (
//     <Drawer.Navigator initialRouteName='Tab'>
//       <Drawer.Screen name='Home' component={Home} />
//       <Drawer.Screen name='Profile' component={Profile} />
//       <Drawer.Screen name='Template' component={MobileDesign} />
//       <Drawer.Screen name='Ecommerce Design' component={EcommerceDesign} />
//       <Drawer.Screen name="Tab" component={AuthenticatedTabScreens} />
//     </Drawer.Navigator>
//   );
// }

const AuthenticatedTabScreens = () => {
  return (
    <Tab.Navigator initialRouteName='Profile'>
      {/* <Tab.Screen name='Ecommerce Design' component={EcommerceDesign} /> */}
      {/* <Tab.Screen name='Phone Number' component={PhoneNumber} />
      <Tab.Screen name='Activity' component={Activity} /> */}
      <Tab.Screen name='Profile' component={MyProfile} />
      {/* <Tab.Screen name='Categories' component={EcommerceCategories} /> */}

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
         <AuthenticatedTabScreens /> // Or <AuthenticatedTabScreens />
      ) : (
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen
            name="Signin"
            component={HomePage}
            options={{ title: 'Sign In' }}
          />
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Login" component={Signin} />
          <Stack.Screen name="ForgotPassword" component={ForgotPsssword} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;
