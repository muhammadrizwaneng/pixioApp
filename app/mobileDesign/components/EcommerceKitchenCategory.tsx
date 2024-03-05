import React from 'react';
import { View, Image, StyleSheet, Text, ScrollView } from 'react-native';


const EcommerceKitchenImages = () => {
  

  return (
      <View >
        {/* <ScrollView > */}
          {/* {imageData.map((item, index) => ( */}
          <View style={styles.scrollViewContent}>
            <View>
                <Text style={styles.heading}>Random Appliances</Text>
            </View>
              <View style={styles.imageBlock}>
                <View>
                  <Image source={require("../../../images/bath.webp")} style={styles.image} />
                  <Text style={styles.imageText}>Bath</Text>
                </View>
                <View>
                  <Image source={require("../../../images/action-figures.webp")} style={styles.image} />
                  <Text style={styles.imageText}>Action</Text>
                </View>
                <View>
                  <Image source={require("../../../images/art-supplies.webp")} style={styles.image} />
                  <Text style={styles.imageText}>Art</Text>
                </View>
                <View>
                  <Image source={require("../../../images/educational.webp")} style={styles.image} />
                  <Text style={styles.imageText}>Educational</Text>
                </View>
              </View>
              <View style={styles.imageBlock}>
                <View>
                  <Image source={require("../../../images/food.webp")} style={styles.image} />
                  <Text style={styles.imageText}>Food</Text>
                </View>
                <View>
                  <Image source={require("../../../images/electronics.webp")} style={styles.image} />
                  <Text style={styles.imageText}>Electronics</Text>
                </View>
                <View>
                  <Image source={require("../../../images/furniture.webp")} style={styles.image} />
                  <Text style={styles.imageText}>Furniture</Text>
                </View>
                <View>
                  <Image source={require("../../../images/puzzles.webp")} style={styles.image} />
                  <Text style={styles.imageText}>Puzzles</Text>
                </View>
              </View>
          </View>
          {/* ))} */}
        {/* </ScrollView> */}
      </View>
  );
};

const styles = StyleSheet.create({

  scrollViewContent: {
    marginLeft:10
  },
  imageBlock: {
    marginRight: 15,
    flexDirection: 'row',
    justifyContent:"space-between",

  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginBottom: 5,
    borderColor:"black",
    marginRight: 30,
    marginTop:5
  },
  imageText: {
    textAlign: 'center',
    fontSize:8,
    fontWeight:"bold",
    marginRight: 30,
  },
  heading:{
    marginTop:10,
    marginLeft:10,
    fontWeight:"bold",
    color:"black",
    fontSize:15
  }
});

export default EcommerceKitchenImages;
