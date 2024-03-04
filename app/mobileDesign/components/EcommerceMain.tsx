import React from 'react';
import { View, Image, StyleSheet } from 'react-native';


const EcommerceMain = () => {
 
  return (
       <View>
          <Image 
            source={require("../../../images/school_bags.jpeg")}
            style={styles.flashimage}
          />
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
});

export default EcommerceMain;