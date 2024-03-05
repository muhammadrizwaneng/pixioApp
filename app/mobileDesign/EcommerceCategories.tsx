import { View, Image, StyleSheet, Text, ScrollView, TextInput, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import EcommerceCategoryImg from './components/EcommerceCategoryImg';
import EcommerceKitchenImages from './components/EcommerceKitchenCategory';
import EcommerceOtherAppliance from './components/EcommerceOtherAppliance';


const windowWidth = Dimensions.get('window').width;
const leftContent = 70;
const rightContent =(windowWidth - leftContent) ;

console.log("windowWidth", rightContent)

const EcommerceCategories = () => {

  const navigation = useNavigation();
  const imageData = [
    { text: 'Apparel' },
    { text: 'Art' },
    { text: 'Flash Deals' },
    { text: 'Gadget' },
    { text: 'Smart Home' },
    { text: 'Season Sale' },
    { text: 'Costumes' },
    { text: 'Dancewear' },
    { text: 'Beauty' },
    { text: 'Food' },
    { text: 'Toys' },
    { text: 'Sports' },
    { text: 'Baby Care' },
    { text: 'Fashion' },
    { text: 'BackTo School' },
    { text: 'Vintage' },
  ];

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerTitle: 'Mobile App Design',
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <View >
        <View style={styles.textDirection}>
            <Text style={styles.categoryText}>Categories</Text>
            <View  style={styles.searchBarSet}>
                <Icon name="search" size={17}  style={styles.iconSetting}/>
                <TextInput
                  style={styles.input}
                placeholder=" What are you looking for?"
                placeholderTextColor="#888"
                />
            </View>
        </View>
        <View style={styles.textDirection}>
            <View style={{width:leftContent, }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent}>
                    {imageData.map((item, index) => {
                      return (
                        <View key={index} style={styles.itemContainer}>
                          <View style={item.text == "Smart Home" ? styles.smartHomeView :null}>
                            <Text style={item.text == "Smart Home" ? styles.smartHomeText :styles.itemText}>{item.text}</Text>
                          </View>
                          {/* {item.text == "Smart Home" ? (
                            <>
                            <View  style={styles.smartHomeText}>
                              <Text>{item.text}</Text>
                            </View>
                            </>
                          ) : (
                            <Text style={styles.itemText}>{item.text}</Text>
                          )} */}
                        </View>
                      );
                    })}
                </ScrollView>
            </View>
            <View style={{width:rightContent, }}>
                <EcommerceCategoryImg />
                <View style={styles.spaceBetweenComponents}>
                    <EcommerceKitchenImages />
                </View>
                <EcommerceOtherAppliance />
            </View>
        </View>
      </View>
    </ScrollView>
  );
}  

const styles = StyleSheet.create({
  scrollViewContent: {
    flexDirection: "column",
    marginTop: 30,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  spaceBetweenComponents: {
    marginBottom: 20, 
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:"#FFFFFF"
  },
  itemContainer: {
    marginBottom: 10,
  },
  itemText: {
    fontSize: 10,
    fontWeight: "bold",
    color:"black"
  },
  textDirection:{
    flexDirection:"row"
  },
  input: {
    height: 40,
    color: '#333',
  },
  searchBarSet:{
    flexDirection:"row",
    backgroundColor:"#F3F5F7",
    borderRadius:10,
    justifyContent:"flex-start",
    marginLeft:15,
    width:290
  },
  categoryText:{
    marginTop:10,
    fontWeight:"bold",
    color:"black"
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
    flexDirection:"column"
  },
    iconSetting:{
        marginTop:12,
        marginLeft:15
    },
    smartHomeView:{
      backgroundColor: "#F2DBD4",
      textAlign: "center",
      borderRadius:5,
      paddingVertical:8,
      paddingHorizontal:4
      // width:50,
    },
    smartHomeText: {
      fontSize: 10,
      fontWeight: "bold",
      color: "#F08463",
    }
});

export default EcommerceCategories;
