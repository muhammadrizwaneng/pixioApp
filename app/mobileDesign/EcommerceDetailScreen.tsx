import { View, Image, StyleSheet, Text } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import EcommerceSmaDetail from './components/EcommerceSmaDetail';
import EcommerceSmacookHeader from './components/EcommerceCompany';

const EcommerceDetailScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerTitle: 'Mobile App Design',
    });
  }, [navigation]);

  return (
    <View>
      <View style={styles.imageContainer}>
        <Image 
          source={require("../../images/fryer.webp")}
          style={styles.flashimage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.flashViewDate}>1/6</Text>
        </View>
      </View>
      <View>
        <Text style={styles.mainViewDate}>-25%</Text>
      </View>
      <View>
        <EcommerceSmaDetail/>
      </View>
      <View>
        <EcommerceSmacookHeader/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flashimage: {
    width: '100%',
    height: 180,
    resizeMode: 'contain',
    borderRadius: 15,
  },
  flashViewDate: {
    fontSize: 10,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#7F7F7F",
    width: 50,
    borderRadius: 10,
    textAlign: "center",
    padding: 5,
  },
  imageContainer: {
    position: 'relative',
  },
  textContainer: {
    position: 'absolute',
    bottom: 10, 
    right: 10,
  },
  mainViewDate: {
    fontSize: 10,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#418E91",
    width: 50,
    borderRadius: 10,
    textAlign: "center",
    padding: 5,
    marginLeft:10,
    marginTop:5
  },
});

export default EcommerceDetailScreen;
