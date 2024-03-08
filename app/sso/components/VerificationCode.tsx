import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Pressable,
} from 'react-native';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const VerificationCode = ({navigation}) => {
  const CELL_COUNT = 4;
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const handleSubmit = async values => {
    console.log('------------------------');
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
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backIcon}>
          <Icon name="left" size={20} color="white" />
        </TouchableOpacity>
        <View>
          <Image
            source={require('../../../images/signup.webp')}
            style={styles.flashImage}
          />
        </View>
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          flex: 1,
        }}>
        <View>
          <View style={styles.texts}>
            <Text style={styles.signIn}>Enter Code</Text>
            <Text style={styles.welcomeText}>
              An Authentication Code Has Send To
            </Text>
            <Text style={styles.welcomeText}>mrizwansar+121@gmail.com</Text>
          </View>

          <CodeField
            ref={ref}
            {...props}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.getStartedButton}
            onPress={() => handleSignIn}>
            <View style={styles.buttonContent}>
              <Icon name="arrowright" size={15} style={styles.arrowIcon} />
            </View>
            <View>
              <Text style={styles.getStartedText}>Verify And Proceed</Text>
            </View>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', marginLeft: 150}}>
            <Text style={{color: 'black', marginBottom: 10}}>
              Back To{' '}
              <TouchableOpacity onPress={() => handleSignIn}>
                <Text style={styles.forgotPasswordText}>Sign In</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    backgroundColor: "#FFFAF3",
  },
  backIcon: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  flashImage: {
    width: '120%',
    height: 200,
    borderRadius: 5,
    borderBottomRightRadius: 200,
  },
  texts: {
    marginTop: 20,
    marginLeft: 20,
  },
  signIn: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
    // marginLeft:20
  },
  welcomeText: {
    // marginLeft:10,
    marginTop: 5,
    fontSize: 10,
    fontWeight: 'bold',
  },
  //   root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20,justifyContent:"center"},
  cell: {
    width: 50,
    height: 50,
    fontSize: 30,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
    marginRight:10,
    backgroundColor:"#FFF"
  },
  focusCell: {
    borderColor: '#000',
  },
  getStartedButton: {
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 30,
    paddingVertical: 14,
    margin: 15,
  },
  getStartedText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  buttonContent: {
    backgroundColor: 'white',
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 4,
  },
  arrowIcon: {
    color: 'black',
    borderRadius: 100,
  },
  forgotPasswordText: {
    // marginLeft: 260,
    textDecorationLine: 'underline',
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default VerificationCode;
