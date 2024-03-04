import { View, Image, StyleSheet, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import EcommerceSmaDetail from './components/EcommerceSmaDetail';
import EcommerceSmacookHeader from './components/EcommerceCompany';
import { ScrollView } from 'react-native-gesture-handler';

const EcommerceDetailScreen = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerTitle: 'Mobile App Design',
    });
  }, [navigation]);

  const imageData = [
    {
      imagePath: require('../../images/fryer.webp'),
    },
    {
      imagePath: require('../../images/fryer_2.webp'),
    },
    {
      imagePath: require('../../images/fryer_3.webp')
    }
  ];

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / 350); // Assuming width of each image is 350
    setCurrentIndex(index);
  };

  return (
    <ScrollView>
      <View>
        <View style={styles.imageContainer}>
        <ScrollView horizontal={true} onScroll={handleScroll} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent}>
          {imageData.map((item, index) => (
            <View key={index} >
              <Image source={item.imagePath} style={styles.flashimage} />
            </View>
          ))}
        </ScrollView>
          {/* <Image 
            source={require("../../images/fryer.webp")}
            style={styles.flashimage}
          /> */}
          <View style={styles.textContainer}>
          <Text style={styles.flashViewDate}>{currentIndex + 1}/{imageData.length}</Text>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  flashimage: {
    width: 350,
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
  scrollViewContent: {
    flexDirection: 'row',
  },
});

export default EcommerceDetailScreen;
