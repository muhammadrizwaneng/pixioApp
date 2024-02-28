import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, GestureResponderEvent } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
// import 
// import axios from "axios";

const Signin = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch()

  const onChangeEmail = (text) => {
    setErrorMessage("")
    setEmail(text);
  };
  const onChangePassword = (newText) => {
    setErrorMessage("")
    setPassword(newText);
  };
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
      console.log("Login successful", result);
      if(result.data.code == 200 || result.data.code == "200"){
        navigation.navigate("Home")
      }
    })
    .catch((error) => {
      // Handle login error
      console.error("Login error", error);
    });
  
    // try {
    //   const response = await fetch(`https://accountsapi.seebiz.cloud/login`, {
    //     method: 'POST',
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //     },
    //     body: JSON.stringify({ email, password })
    //   });
  
    //   if (!response.ok) {
    //     throw new Error('Network response was not ok');
    //   }
  
    //   const responseData = await response.json();
    //   console.log("-------------=======response", responseData);
    //   if(responseData.code == 201 || responseData.code == "201"){
    //     setErrorMessage(responseData.message);
    //     return;
    //   } else if(responseData.code == 203 || responseData.code == "203"){
    //     setErrorMessage(responseData.message);
    //     return;
    //   }else if(responseData.code == 200 || responseData.code == "200"){
        
    //     navigation.navigate("HomePage",{
    //       user: responseData.user,
    //     })
    //     // setErrorMessage(responseData.message);
    //     // return;
    //   }
    // } catch (error) {
    //   console.error('Error:', error);
    // }
  };
  

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required'),
      })}
      onSubmit={handleSubmit}
    >
      {(formikProps) => (
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              value={formikProps.values.email}
              placeholder='Type Here...'
              onChangeText={formikProps.handleChange('email')}
              onBlur={formikProps.handleBlur('email')}
              style={styles.input}
            />
            <Text style={styles.errorText}>
            {formikProps.touched.email && formikProps.errors.email ? (
              <>{formikProps.errors.email}</>
            ) : null}
          </Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              value={formikProps.values.password}
              placeholder='Type Here...'
              onChangeText={formikProps.handleChange('password')}
              onBlur={formikProps.handleBlur('password')}
              secureTextEntry={true}
              style={styles.input}
            />
            <Text style={styles.errorText}>
              {formikProps.touched.password && formikProps.errors.password ? (
                <>{formikProps.errors.password}</>
              ) : null}
            </Text>
          </View>
          <View style={styles.buttonContainer}>
          <Text style={styles.errorText}>{errorMessage}</Text>
          <Button 
              title="Sign in" 
              onPress={(event: GestureResponderEvent) => formikProps.handleSubmit()} 
            />
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'flex-start',
    position:"absolute",
    paddingHorizontal: 20
  },
  label: {
    marginBottom: 10,
  },
  inputContainer: {
    // flex:1,
    width: '100%',
    marginBottom: 20,
  },
  PassinputContainer: {
    // flex:2,
    width: '100%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    // width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
  buttonContainer: {
    marginTop: 10,
  },
});

export default Signin;