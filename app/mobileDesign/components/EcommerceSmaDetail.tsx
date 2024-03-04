import { View, Image, StyleSheet, Text } from 'react-native';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const EcommerceSmaDetail = () => {

  return (
    <View>
        <View style={styles.textHeading}>
            <View style={styles.textHeadingDetail}>
                <Text style={styles.textStyle}>AED 205.00</Text>
            </View>
            <View style={styles.textHeadingDetail}>
                <Text style={styles.cuttextStyle}>AED 266.00</Text>
            </View>
            <View style={styles.iconSetting}>
                <Icon name="upload" size={20}  />
                <Icon name="heart-o" size={20}  style={styles.heartIcon}/>
            </View>
        </View>
        <View>
            <Text style={styles.textDetails}>Smacook Steam Air Fryer 3 in1 Steam,</Text>
            <Text style={styles.textDetails}>Grill and Air Fryer</Text>
        </View>
        <View style={styles.textHeading}>
            <View style={styles.textHeading}>
                <Icon name="star" size={15} style={{marginLeft:30,marginTop:12,color:"#FACE4B"}} />
                <Text style={styles.starSetting}>4.5</Text>
            </View>
            <View>
                <Text style={styles.reviewsSetting}>4 Reviews</Text>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textHeading: {
    flexDirection:"row"
  },
  textHeadingDetail:{
    marginLeft:10,
    marginTop:15
  },
  textStyle:{
    fontSize:15,
    fontWeight:"bold",
    color:"black"
  },
  cuttextStyle:{
    fontSize:10,
    marginTop:4,
    textDecorationLine: 'line-through',
  },
  iconSetting:{
    flexDirection:"row",
    marginLeft:180,
    marginTop:10,
  },
  heartIcon:{
    marginLeft:20,
  },
  textDetails:{
    fontSize:10,
    fontWeight:"bold",
    color:"black",
    marginTop:5,
    marginLeft:10
  },
  starSetting:{
    marginLeft:5,
    marginTop:11,
    color:"black",
    fontSize:12,
    fontWeight:"bold",
  },
  reviewsSetting:{
    marginLeft:15,
    marginTop:14,
    // color:"black",
    fontSize:8,
    fontWeight:"bold"
  }
});

export default EcommerceSmaDetail;
