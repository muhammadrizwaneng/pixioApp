import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { useSelector } from "react-redux";

const PhoneNumber = ({route, navigation}) => {
  const selectUserInfo = (state: any) => state?.user;
  const user = useSelector(selectUserInfo);
  console.log("----------------user",user)
//   const userData =JSON.stringify(user)
//   console.log("----------------userData",userData)
return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Phone Number:</Text>
        <Text>{user?.user?.phoneNumber}</Text>
      </View>
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
export default PhoneNumber;