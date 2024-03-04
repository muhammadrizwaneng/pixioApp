import React, { useEffect } from 'react';
import { View, TextInput, Image, StyleSheet, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import EcommerceMain from './components/EcommerceMain';
import EcommerceImagesSlider from './components/EcommerceImagesSlider';
import EcommerceFlashDeals from './components/EcommerceFlashDeals';
import {useIsFocused, useNavigation} from '@react-navigation/native';


const EcommerceDesign = () => {
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerTitle: 'Mobile App Design',
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.outerScrollView}>
      <View style={styles.container}>
        <View style={styles.scrollViewContent}>
          <View style={styles.searchContainer}>
            <Icon name="search" size={20} />
            <TextInput
              style={styles.input}
              placeholder="What are you looking for?"
              placeholderTextColor="#888"
            />
            
          </View>
          <View style={styles.searchIcon}>
            <Icon name="minus-square-o" size={40}  />
          </View>
        </View>
        <View>
          <EcommerceMain/>
        </View>
        <View style={{marginTop:20}}>
            <EcommerceImagesSlider/>
        </View>
        <View style={{marginTop:20}}>
            <EcommerceFlashDeals/>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  outerScrollView: {
    flex: 1,
  },
  container: {
    // flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    flexDirection: 'row',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    width:320,
    backgroundColor: '#F3F5F7',
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#F3F5F7',
  },

  textContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  newArrival:{
    flexDirection:"row",
    paddingLeft:20,
    justifyContent:"space-around",
  },
  newArrivaltextContainer: {
    marginHorizontal: 5,
    maxWidth: 100,
  },
  ArrivalText:{
    fontWeight:"bold",
    fontSize:15
  },
  new_arrivals:{
    marginTop:25,
    width:170,
    height:170,
    borderRadius:15,
  },
  new_arrivals_2:{
    marginRight:20
  },
  new_arrivals_text:{
    marginTop:10
  },
  new_arrivals_text_van:{
    paddingLeft:5,
    marginTop:10
  },
  new_arrivals_text_2:{
    fontSize:8
  },
  new_arrivals_text_VAN:{
    paddingLeft:5,
    fontSize:8
  },
  ten_percent_text:{
    flexDirection: 'row',
    marginTop: 5
  },
  ten_percent_text_with_price:{
    paddingLeft: 85,
    color: '#0047AB'
  },
  first_aids_img:{
    marginTop:30,
    width:370,
    height:200,
    borderRadius:30
  },
  set_icons: {
    flexDirection: 'row', 
    marginRight:20,
  },
  searchIcon:{
    marginLeft:10,
    marginTop:0,
  },
});

export default EcommerceDesign;