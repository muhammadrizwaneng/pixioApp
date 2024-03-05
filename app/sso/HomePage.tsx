import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import  Icon from 'react-native-vector-icons/FontAwesome';

const HomePage = ({navigation}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = event => {
    const screenWidth = Dimensions.get('window').width;
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / screenWidth);
    setActiveIndex(index);
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerTitle: 'Mobile App Design',
      // headerRight: () => setIconsOnHeader(),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <View style={styles.content}>
          <Image
            source={require("../../images/crop_img.jpeg")}
            style={styles.flashImage}
          />
          <View>
            <Text style={styles.mainHeading}>Set Your Wardrobe With Our</Text>
            <Text style={styles.mainHeadingSelection}>Amazing Selection!</Text>
          </View>
          <View>
            <Text style={styles.qualityText}>Change the quality of our appearance</Text>
            <Text style={styles.pixloText}>with Pixlo now.</Text>
          </View>
        </View>
        <View style={styles.content}>
          <Image
            source={require("../../images/second_crop_img.png")}
            style={styles.flashImage}
          />
          <View>
            <Text style={styles.mainHeading}>Set Your Wardrobe With Our</Text>
            <Text style={styles.mainHeadingSelection}>Amazing Selection!</Text>
          </View>
          <View>
            <Text style={styles.qualityText}>Change the quality of our appearance</Text>
            <Text style={styles.pixloText}>with Pixlo now.</Text>
          </View>
        </View>
        <View style={styles.content}>
          <Image
            source={require("../../images/third_crop_img.png")}
            style={styles.flashImage}
          />
          <View>
            <Text style={styles.mainHeading}>Set Your Wardrobe With Our</Text>
            <Text style={styles.mainHeadingSelection}>Amazing Selection!</Text>
          </View>
          <View>
            <Text style={styles.qualityText}>Change the quality of our appearance</Text>
            <Text style={styles.pixloText}>with Pixlo now.</Text>
          </View>
        </View>
        <View style={styles.content}>
          <Image
            source={require("../../images/crop_img.jpeg")}
            style={styles.flashImage}
          />
          <View>
            <Text style={styles.mainHeading}>Set Your Wardrobe With Our</Text>
            <Text style={styles.mainHeadingSelection}>Amazing Selection!</Text>
          </View>
          <View>
            <Text style={styles.qualityText}>Change the quality of our appearance</Text>
            <Text style={styles.pixloText}>with Pixlo now.</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.circleContainer}>
        {[0, 1, 2].map((index) => (
          <View
            key={index}
            style={[
              styles.circle,
              activeIndex === index ? styles.activeCircle : null,
            ]}
          />
        ))}
      </View>
      
      <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => navigation.navigate('Login')}
        >
          <View style={styles.buttonContent}>
              <Icon name="arrow-right" size={15} style={styles.arrowIcon} />
              </View>
            <View>
              <Text style={styles.getStartedText}>Get Started</Text>
            </View>
         
        </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEFAF4"
  },
  content: {
    width: Dimensions.get('window').width,
    padding: 20,
  },
  flashImage: {
    width: "100%",
    height: 400,
  },
  mainHeadingSelection: {
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
    fontSize: 15,
    marginTop: 5,
  },
  mainHeading: {
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
    fontSize: 15,
    marginTop: 20
  },
  qualityText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
    marginTop: 7
  },
  pixloText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
    marginTop: 5
  },
  circleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  activeCircle: {
    backgroundColor: 'black',
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

});

export default HomePage;
