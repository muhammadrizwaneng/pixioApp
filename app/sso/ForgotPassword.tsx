import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity, SafeAreaView, TextInput, Pressable } from 'react-native';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const ForgotPsssword = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    console.log("------------------------")
    navigation.navigate('VerificationCode');
    // Submit logic
  };
  const handleSignIn = () => {
    // Navigate to the ForgotPassword screen
    navigation.navigate('Signin');
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerTitle: 'Mobile App Design',
    });
  }, [navigation]);

  return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
          <Icon name="left" size={20} color="white" />
        </TouchableOpacity>
        <View>
          <Image
            source={require("../../images/vincent-chase.jpeg")}
            style={styles.flashImage}
          />
        </View>
        <View style={styles.texts}>
          <Text style={styles.signIn}>Forgot Password</Text>
          <Text style={styles.welcomeText}>Enter The Email Associated With Your Account And</Text>
          <Text style={styles.welcomeText}>We'll Send An Email To Reset Your Password</Text>
        </View>
        <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Invalid email').required('Email is required'),
        })}
        onSubmit={handleSubmit}
      >
        {(formikProps)=>(
            <View style={{flex:1, justifyContent:'space-between',}}>
              {/* <SafeAreaView> */}
              <View>
          <Text style={styles.passwordText}>Email Address*</Text>
          <TextInput
            style={styles.input}
            onChangeText={formikProps.handleChange('email')}
            value={formikProps.values.email}
            onBlur={formikProps.handleBlur('email')}
          />
          <Text style={styles.errorText}>
            {formikProps.touched.email && formikProps.errors.email ? (
              <>{formikProps.errors.email}</>
            ) : null} </Text>
        {/* </SafeAreaView> */}
        </View>

            <View>
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => formikProps.handleSubmit()}
        >
          <View style={styles.buttonContent}>
            <Icon name="arrowright" size={15} style={styles.arrowIcon} />
          </View>
          <View>
            <Text style={styles.getStartedText}>Send Mail</Text>
          </View>
        </TouchableOpacity>
            <View style={{ flexDirection:"row", marginLeft:150,}}>
                <Text style={{color:"black",marginBottom:10}}>Back To <View><TouchableOpacity
          onPress={() => handleSignIn}><Text style={styles.forgotPasswordText}>Sign In</Text></TouchableOpacity></View>
                </Text>
            </View>
          </View>
          </View>
        )}
      </Formik>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFAF3",
  },
  backIcon: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  flashImage: {
    width: "105%",
    height: 200,
    borderRadius:5,
    borderBottomRightRadius:200,
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
    borderWidth: 1,
    // padding: 10,
    marginRight:30,
    borderRadius:10,
    color:"black",
    backgroundColor:"#FFFFFF",
    borderColor:"#AFAFAE"
  },
  forgotPasswordText:{
    // marginLeft: 260,
    textDecorationLine:"underline",
    color:"black",
    fontSize:15,
    fontWeight:"bold",
    marginTop:5
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
    margin:15,
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
  },
 
  errorText: {
    color: 'red',
    marginLeft: 20,
  },
});

export default ForgotPsssword;
