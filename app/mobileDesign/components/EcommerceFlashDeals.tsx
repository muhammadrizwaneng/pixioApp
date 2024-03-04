import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const EcommerceFlashDeals = () => {
  return (
    <View style={styles.flashDeals}>
      <View style={styles.flashView}>
        <Text style={styles.flashViewText}>Flash Deals</Text>
        <Text style={styles.flashViewEndText}>Ends in</Text>
        <Text style={styles.flashViewDate}>21:52:53</Text>
      </View>
      <View style={styles.flashViewImages}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../../images/robot.jpeg")}
            style={styles.flashDealimage}
          />
          <Text style={styles.imageText}>-30%</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../../images/kids_doodle.jpeg")}
            style={styles.flashDealimage}
          />
          <Text style={styles.imageText}>-30%</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flashView: {
    flexDirection: 'row',
    marginBottom: 10, // Add some space between header and images
  },
  flashViewImages: {
    flexDirection: 'row',
    justifyContent: "space-around",
    flexWrap: 'wrap', // Allow images to wrap to the next line if needed
  },
  flashViewText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
    marginLeft: 15,
  },
  flashViewEndText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "black",
    marginLeft: 170,
    marginTop: 5,
  },
  flashViewDate: {
    fontSize: 10,
    fontWeight: "bold",
    color: "white",
    marginLeft: 10,
    marginTop: 5,
    backgroundColor: "#F55757",
    width: 50,
    borderRadius: 10,
    textAlign: "center",
  },
  flashDeals: {
    backgroundColor: "#E8F9F9",
    padding: 10,
  },
  flashDealimage: {
    width: 150,
    height: 150,
    marginTop: 5,
    marginBottom: 5,
  },
  imageContainer: {
    position: 'relative', 
  },
  imageText: {
    position: 'absolute',
    top: 5,
    left: 5,
    backgroundColor: '#479295',
    color: 'white',
    padding: 5,
    borderRadius: 5,
  },
});

export default EcommerceFlashDeals;
