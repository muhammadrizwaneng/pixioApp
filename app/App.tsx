import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signin from './sso/Signin';
import Home from './sso/Home';
const Stack = createNativeStackNavigator();

function App() {
  return (
    // <View>
    //   <Text>111111111</Text>
    //   <MainComp/>
    // </View>
    <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen
                name="Home"
                component={Signin}
                options={{title: 'Overview'}}
                />
                <Stack.Screen name="Signin" component={Signin} />
                <Stack.Screen name="HomePage" component={Home} />
            </Stack.Navigator>
    </NavigationContainer>
  );
}


// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
