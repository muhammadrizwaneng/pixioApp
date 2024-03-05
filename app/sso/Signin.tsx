import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { Text } from 'react-native';
import  Icon from 'react-native-vector-icons/FontAwesome';
import { Link } from '@react-navigation/native';

const Signin = ({navigation}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerTitle: 'Mobile App Design',
      // headerRight: () => setIconsOnHeader(),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View>
        <Image
              source={require("../../images/pretty-young.jpeg")}
              style={styles.flashImage}
            />
      </View>
      <View style={styles.texts}>
        <Text style={styles.signIn}>Sign In To Your Account</Text>
        <Text style={styles.welcomeText}>Welcome Back You've Been Missed!</Text>
      </View>
      <SafeAreaView>
        <Text style={styles.passwordText}>Email Address</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <Text style={styles.passwordText}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
        />
    </SafeAreaView>
    <View>
    {/* <Link to={{ screen: 'Profile', params: { id: 'jane' } }}>
      Go to Jane's profile
    </Link> */}
      <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
    </View>
    <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => navigation.navigate('Login')}
        >
          <View style={styles.buttonContent}>
              <Icon name="arrow-right" size={15} style={styles.arrowIcon} />
              </View>
            <View>
              <Text style={styles.getStartedText}>Sign in</Text>
          </View>
    </TouchableOpacity>
      <View style={styles.conituneWithStyle}>
        <View style={styles.startLine} /><View>
          <Text style={styles.continueText}>Or Continue with</Text>
        </View><View style={styles.afetLine} />
      </View>
      <View></View>
    {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEFAF4",
    padding:3
  },
  flashImage: {
    width: "100%",
    height: 200,
    borderRadius:15,
    borderBottomRightRadius:150,
  },
  texts:{
    marginTop:20,
    marginLeft:20
  },
  signIn:{
    fontWeight:"bold",
    color:"black",
    fontSize:20,
    // marginLeft:20
  },
  welcomeText:{
    // marginLeft:10,
    marginTop:5,
    fontSize:10,
    fontWeight:"bold"
  },
  input: {
    height: 40,
    marginLeft: 20,
    marginTop: 5,
    borderWidth: 2,
    // padding: 10,
    marginRight:30,
    borderRadius:10,
    color:"#D6D4D4",
    borderColor:"#AFAFAE"
  },
  forgotPasswordText:{
    marginLeft: 260,
    textDecorationLine:"underline",
    color:"black"
  },
  passwordText:{
    marginLeft: 20,
    marginTop:15,
    fontWeight:"bold",
    color:"black",
    fontSize:12
  },
  getStartedButton: {
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: 'black',
    borderRadius: 30,
    paddingVertical: 14,
    margin:15
  },
  getStartedText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  buttonContent: {
    backgroundColor: 'white',
    width:40,
    height:40,
    borderRadius:100,
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    left:4
  },
  arrowIcon: {
    color: 'black',
    borderRadius: 100,
  },
  startLine:{
    flex: 1, 
    height: 1, 
    backgroundColor: 'black',
    marginLeft:20
  },
  afetLine:{
    flex: 1, 
    height: 1,
    backgroundColor: 'black',
    marginRight:20
  },
  continueText:{
    width: 150, 
    textAlign: 'center'
  },
  conituneWithStyle:{
    flexDirection: 'row', 
    alignItems: 'center'
  }

});

export default Signin;
