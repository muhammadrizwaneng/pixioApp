import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import Signin from './sso/Signin';
import HomePage from './sso/HomePage';
import MyProfile from './sso/MyProfile';
import ForgotPsssword from './sso/ForgotPassword';
import VerificationCode from './sso/components/VerificationCode';
import PixioSelectionCategory from './pixioCategory/PixioSelectionCategory';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { View } from 'react-native';
import UserProfile from './sso/components/UserProfile';
import AccountSetting from './sso/components/AccountSetting';
import Rating from './sso/components/Rating';
import ProfileEdit from './sso/ProfileEdit';
import AntIcon from "react-native-vector-icons/AntDesign"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// const ProfileEditStack = () => (
//   <Stack.Navigator >
//     <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
//   </Stack.Navigator>
// );

const AuthenticatedTabScreens = () => {
  return (
    <Tab.Navigator
      initialRouteName='Profile'
      screenOptions={{
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name='Profile'
        component={MyProfile}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{ backgroundColor: focused ? 'black' : 'transparent', borderRadius: 25, padding: 5 }}>
              <FeatherIcon name='home' size={25} color={focused ? 'white' : color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name='Category'
        component={PixioSelectionCategory}
        options={{
          tabBarLabel: 'Category',
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{ backgroundColor: focused ? 'black' : 'transparent', borderRadius: 25, padding: 5 }}>
              <Icon name='category' size={20} color={focused ? 'white' : color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name='user'
        component={UserProfile}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{ backgroundColor: focused ? 'black' : 'transparent', borderRadius: 25, padding: 5 }}>
              <FeatherIcon name='user' size={17} color={focused ? 'white' : color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name='ProfileEdit'
        component={ProfileEdit} // Use ProfileEditStack component here
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{ backgroundColor: focused ? 'black' : 'transparent', borderRadius: 25, padding: 5 }}>
              <FeatherIcon name='activity' size={17} color={focused ? 'white' : color} />
            </View>
          ),
        }}
      />
{/* <AntIcon name='staro' size={15} style={{color:"black",marginTop:2}}/> */}
<Tab.Screen
        name='Rating'
        component={Rating} // Use ProfileEditStack component here
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{ backgroundColor: focused ? 'black' : 'transparent', borderRadius: 25, padding: 5 }}>
              < AntIcon name='staro' size={17} color={focused ? 'white' : color} />
            </View>
          ),
        }}
      />
      
    </Tab.Navigator>
  );
};

function App() {
  const selectUserInfo = (state: any) => state?.user?.status;
  const isLoggedIn = useSelector(selectUserInfo);

  return (
    <NavigationContainer>
      {isLoggedIn === "authenticated" ? (
         <AuthenticatedTabScreens />
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
          <Stack.Screen name='VerificationCode' component={VerificationCode} />
          <Stack.Screen name='AccountSetting' component={AccountSetting} />
          {/* <Stack.Screen name='EditProfile' component={ProfileEdit} /> */}
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;
