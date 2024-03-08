import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const UserProfile = ({ route, navigation }) => {
  const selectUserInfo = (state) => state?.user;
  const user = useSelector(selectUserInfo);
  console.log('----------------user', user);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerTitle: 'Mobile App Design',
      // headerRight: () => setIconsOnHeader(),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FEEFB7', '#FFFAF3']}
        style={styles.linearGradient}>
        <View style={styles.header}>
          <View style={styles.leftContainer}>
            <Image
              source={require('../../../images/p-icon.png')}
              style={styles.logo}
            />
            <Text style={styles.title}>PixioSaar</Text>
            
          </View>
          <View style={styles.rightContainer}>
            <Icon name="bell-o" size={20} style={styles.icon} />
            <Icon name="search" size={20} style={styles.icon} />
          </View>
        </View>
        <View style={styles.landingImg}>
            <Image
                source={{
                    uri: 'https://s3-us-west-2.amazonaws.com/seebiz/sso/user/654885b8debaae1671862d34/1700729635990-CPG.jpeg',
                }}
                    style={styles.flashImage}
                  />
            <Text style={styles.displayText}>Hello,</Text>
            <Text style={styles.miniText}>Mini</Text>
        </View>

      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },
  title: {
    color: 'black',
    marginLeft: 3,
    fontWeight: 'bold',
    fontSize: 25,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingTop: 10,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 10,
    color:"black"
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  flashImage: {
    width: 30,
    height: 30,
    borderRadius:100,
},
displayText:{
    color:"black",
    marginTop:4,
    marginLeft:5,
    fontWeight:"bold"
},
miniText:{
    color:"black",
    marginLeft:5,
    fontWeight:"bold",
    fontSize:20
},
landingImg:{
    marginTop:30,
    flexDirection:"row",
    borderRadius:50,
    marginLeft:10
},
});

export default UserProfile;
