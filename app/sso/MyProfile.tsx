import React, { useEffect } from 'react';
import {Text, View, StyleSheet, Button, Image} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../features/userSlice';
import  Icon from 'react-native-vector-icons/FontAwesome';
import LandingPage from './components/LandingPage';
import FeaturedCategory from './components/FeaturedCategory';
import SelectionCategory from './components/SelectionCategory';

const MyProfile = ({ navigation}) => {
  const selectUserInfo = (state: any) => state?.user;
  const user = useSelector(selectUserInfo);
  console.log("----------------user",user)
  const dispatch = useDispatch()

  const handleLogout = () => {
    // Dispatch the resetStore action
    dispatch(logout());
  };
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerTitle: 'Mobile App Design',
      // headerRight: () => setIconsOnHeader(),
    });
  }, [navigation]);


  // const user = route.params;
  // console.log("----------------user",user)
//   const userData =JSON.stringify(user)
//   console.log("----------------userData",userData)
return (
    <View style={styles.container}>
        <View style={{flexDirection:"row"}}>
          <View style={styles.landingImg}>
            <Image
                source={{
                    uri: 'https://s3-us-west-2.amazonaws.com/seebiz/sso/user/654885b8debaae1671862d34/1700729635990-CPG.jpeg',
                }}
                    style={styles.flashImage}
                  />
            <Text style={styles.displayText}>{user?.displayName}</Text>
            <Button title="Logout" onPress={handleLogout} />
          </View>
          <View style={styles.searchBellIcon}>
                  <Icon name="bell" size={15} />
                  <Icon name="search" size={15} style={{marginLeft:10}}/>
          </View>
        </View>
        <View>
          <LandingPage/>
        </View>
        <View style={{flex:2,backgroundColor:"#FEEB9E"}}>
          <FeaturedCategory />
        </View>
        <View style={{flex:3}}>
          {/* <LandingPage/> */}
          <SelectionCategory/>
        </View>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 3,
      backgroundColor:"#FEF9F3",
    },
    flashImage: {
        width: 30,
        height: 30,
        borderRadius:100,
    },
    displayText:{
        color:"black",
        marginTop:3,
        marginLeft:5,
        fontWeight:"bold"
    },
    forgot_password:{
      borderRadius:50,
      width:"80%",
      height:"65%",
      marginLeft:200
    },
    landingImg:{
      backgroundColor:"white",
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"row",
      borderRadius:50,
      marginLeft:5
    },
    searchBellIcon:{
      flexDirection:"row",
      marginLeft:170,
      marginTop:8
    }
  });
export default MyProfile;