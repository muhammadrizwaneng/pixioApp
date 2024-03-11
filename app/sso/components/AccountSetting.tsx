import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';

const AccountSetting = ({navigation}) => {
  const selectUserInfo = (state) => state?.user;
  const user = useSelector(selectUserInfo);
  console.log('----------------user', user);

//   useEffect(() => {
//     navigation.setOptions({
//       headerShown: false,
//       headerTitle: 'Mobile App Design',
//       // headerRight: () => setIconsOnHeader(),
//     });
//   }, [navigation]);

  return (
    <View style={{marginTop:5}}>
        <Text style={styles.AccountText}>Account Settings</Text>
        <View style={styles.profileIcon}>
            <View style={{flexDirection:"row"}}>
                <Icon name='user-o' size={15} style={{color:"black",marginTop:2}}/>
                <Text style={styles.profileText}>Edit Profile</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("ProfileEdit")} >
                <AntIcon name="right" size={15} color="black" style={{color:"black",marginTop:2}}/>
            </TouchableOpacity>
        </View>
        <View style={styles.profileIcon}>
            <View style={{flexDirection:"row"}}>
                <FontAwesome5Icon name='credit-card' size={15} style={{color:"black",marginTop:2}}/>
                <Text style={styles.profileText}>Saved Cards & Wallet</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.goBack()} >
                <AntIcon name="right" size={15} color="black" style={{color:"black",marginTop:2}}/>
            </TouchableOpacity>
        </View>
        <View style={styles.profileIcon}>
            <View style={{flexDirection:"row"}}>
                <Ionicons name='location-outline' size={15} style={{color:"black",marginTop:2}}/>
                <Text style={styles.profileText}>Saved Addresses</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.goBack()} >
                <AntIcon name="right" size={15} color="black" style={{color:"black",marginTop:2}}/>
            </TouchableOpacity>
        </View>
        <View style={styles.profileIcon}>
            <View style={{flexDirection:"row"}}>
                <Icon name='language' size={15} style={{color:"black",marginTop:2}}/>
                <Text style={styles.profileText}>Select Language</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.goBack()} >
                <AntIcon name="right" size={15} color="black" style={{color:"black",marginTop:2}}/>
            </TouchableOpacity>
        </View>
        <View style={styles.profileIcon}>
            <View style={{flexDirection:"row"}}>
                <Ionicons name='notifications-outline' size={15} style={{color:"black",marginTop:2}}/>
                <Text style={styles.profileText}>Notification Settings</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.goBack()} >
                <AntIcon name="right" size={15} color="black" style={{color:"black",marginTop:2}}/>
            </TouchableOpacity>
        </View>
        <Text style={styles.AccountText}>Account Settings</Text>
        <View style={styles.profileIcon}>
            <View style={{flexDirection:"row"}}>
                <AntIcon name='staro' size={15} style={{color:"black",marginTop:2}}/>
                <Text style={styles.profileText}>Reviews</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Rating")} >
                <AntIcon name="right" size={15} color="black" style={{color:"black",marginTop:2}}/>
            </TouchableOpacity>
        </View>
        <View style={styles.profileIcon}>
            <View style={{flexDirection:"row"}}>
                <MaterialIcons name='question-answer' size={15} style={{color:"black",marginTop:2}}/>
                <Text style={styles.profileText}>Question & Answers</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.goBack()} >
                <AntIcon name="right" size={15} color="black" style={{color:"black",marginTop:2}}/>
            </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    AccountText:{
        marginTop:20,
        // marginLeft:3,
        fontSize:17,
        fontWeight:"bold",
        color:"black"
    },
    profileIcon:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:20
    },
    profileText:{
        color:"black",
        marginLeft:10,
    }
});

export default AccountSetting;
