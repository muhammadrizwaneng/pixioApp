import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const EcommerceCategoryImg = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../images/black-friday.jpeg")}
          style={styles.flashimage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    alignItems: 'flex-start',
    marginTop: 10,
  },
  imageContainer: {
    paddingHorizontal:10,
    flex:1
  },
  flashimage: {
    width: '87%',
    height: 180,
    resizeMode: 'contain',
    borderRadius: 15,
    
  },
});

export default EcommerceCategoryImg;
