import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { useSelector } from "react-redux";

const Activty = ({route, navigation}) => {
  const selectUserInfo = (state: any) => state?.user;
  const user = useSelector(selectUserInfo);
  console.log("----------------user",user)
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
export default Activty;