import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../features/userSlice';

const HomePage = ({route, navigation}) => {
  const selectUserInfo = (state: any) => state?.user;
  const user = useSelector(selectUserInfo);
  console.log("----------------user",user)
  const dispatch = useDispatch()

  const handleLogout = () => {
    // Dispatch the resetStore action
    dispatch(logout());
  };


  // const user = route.params;
  // console.log("----------------user",user)
//   const userData =JSON.stringify(user)
//   console.log("----------------userData",userData)
return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Email:</Text>
        <Text>{user?.user?.email}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>First Name:</Text>
        <Text>{user?.user?.first_name}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Last Name:</Text>
        <Text>{user?.user?.last_name}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Phone Number:</Text>
        <Text>{user?.user?.phoneNumber}</Text>
      </View>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 15,
    },
    label: {
      fontWeight: 'bold',
    },
  });
export default HomePage;