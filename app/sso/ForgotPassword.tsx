import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { Text } from 'react-native';
import  Icon from 'react-native-vector-icons/FontAwesome';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';


const ForgotPsssword = ({navigation}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  // const [text, onChangeText] = useState('');
  // const [number, onChangeNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch()

  const handleSubmit = async (values) => {
    setErrorMessage("")
    const { email, password } = values;
    console.log("---------------------", values);
    
    if (!email) {
      setErrorMessage("Please enter email");
      return;
    } else if (!password) {
      setErrorMessage("Please enter Password");
      return;
    }
  
    console.log(email, password);
    const payload = {email, password}

    dispatch(login(payload))
    .unwrap()
    .then((result) => {
      // Handle successful login response
      // console.log("Login successful", result);
      if(result.data.code == 200 || result.data.code == "200"){
        console.log("user is login")
        // navigation.navigate("Home")
      }
    })
    .catch((error) => {
      // Handle login error
      console.error("Login error", error);
    });
  
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerTitle: 'Mobile App Design',
      // headerRight: () => setIconsOnHeader(),
    });
  }, [navigation]);

  return (
    <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Invalid email').required('Email is required'),
          password: Yup.string().required('Password is required'),
        })}
        onSubmit={handleSubmit}
      >
        {(formikProps)=>(
            <View style={styles.container}>
              <View>
                <Image
                      source={require("../../images/vincent-chase.jpeg")}
                      style={styles.flashImage}
                    />
              </View>
              <View style={styles.texts}>
                <Text style={styles.signIn}>Forgot Password</Text>
                <Text style={styles.welcomeText}>Enter The Email Associated With Your Account And</Text>
                <Text style={styles.welcomeText}>We'll Send And Email To Reset Your Password</Text>
              </View>
              <SafeAreaView>
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
            </SafeAreaView>
            <TouchableOpacity
                  style={styles.getStartedButton}
                  onPress={() => formikProps.handleSubmit()}
                >
                    <View style={styles.buttonContent}>
                      <Icon name="arrow-right" size={15} style={styles.arrowIcon} />
                      </View>
                    <View>
                      <Text style={styles.getStartedText}>Send Mail</Text>
                    </View>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFAF3",
    padding:4
  },
  flashImage: {
    width: "110%",
    height: 200,
    borderRadius:5,
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
    borderWidth: 1,
    // padding: 10,
    marginRight:30,
    borderRadius:10,
    color:"black",
    backgroundColor:"#FFFFFF",
    borderColor:"#AFAFAE"
  },
  forgotPasswordText:{
    marginLeft: 260,
    textDecorationLine:"underline",
    color:"black",
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
    marginTop:200
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
  googleText:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#E9E2DC',
    borderRadius: 30,
    paddingVertical: 14,
    margin:15
  },
  appleText:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#E9E2DC',
    borderRadius: 30,
    paddingVertical: 14,
    marginLeft:15,
    marginBottom:15,
    marginRight:15,
  },
  signInText:{
    color:"black",
    marginLeft:5
  },
  createAccount:{
    textDecorationLine:"underline",
    color:"black",
    fontWeight:"bold"
  },
  errorText: {
    color: 'red',
    marginLeft: 20,
  },

});

export default ForgotPsssword;
