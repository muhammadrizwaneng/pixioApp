import React, { useEffect } from 'react';
import { View, TextInput, Image, StyleSheet, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useIsFocused, useNavigation} from '@react-navigation/native';


const MobileDesign = () => {
  const navigation = useNavigation()
  const imageData = [
    {
      imagePath: require('../../images/apparel-category.webp'),
      text: 'Apparel',
    },
    {
      imagePath: require('../../images/art-category.webp'),
      text: 'Art',
    },
    {
      imagePath: require('../../images/sporting-goods.webp'),
      text: 'Sporting Goods',
    },
    {
      imagePath: require('../../images/baby-and-toddler.webp'),
      text: 'Baby and Toddler',
    },
    {
      imagePath: require('../../images/boys-clothing.webp'),
      text: 'Boys Clothing',
    },
    {
      imagePath: require('../../images/clothing-shoe-care.webp'),
      text: 'Clothing Shoe Care',
    },
    {
      imagePath: require('../../images/costumes.webp'),
      text: 'Costumes',
    },
    {
      imagePath: require('../../images/dancewear.webp'),
      text: 'Dancewear',
    },
    {
      imagePath: require('../../images/electronics.webp'),
      text: 'Electronics',
    },
    {
      imagePath: require('../../images/food.webp'),
      text: 'Food',
    },
    {
      imagePath: require('../../images/girls-clothing.webp'),
      text: 'Girls Clothing',
    },
    {
      imagePath: require('../../images/health-beauty.webp'),
      text: 'Health and Beauty',
    },
    {
      imagePath: require('../../images/home-garden.webp'),
      text: 'Home and Garden',
    },
    {
      imagePath: require('../../images/jewelry-watches.webp'),
      text: 'Jewelry and Watches',
    },
    {
      imagePath: require('../../images/men-accessories.webp'),
      text: 'Men Accessories',
    },
    {
      imagePath: require('../../images/men-clothing.webp'),
      text: 'Men Clothing',
    },
    {
      imagePath: require('../../images/pet-supplies.webp'),
      text: 'Pet Supplies',
    },
    {
      imagePath: require('../../images/toys-games.webp'),
      text: 'Toy and Games',
    },
    {
      imagePath: require('../../images/uniforms-office.webp'),
      text: 'Uniforms Office',
    },
    {
      imagePath: require('../../images/unisex-kids-clothing.webp'),
      text: 'UniSex Kids Clothing',
    },
    {
      imagePath: require('../../images/vintage.webp'),
      text: 'Vintage',
    },
  ];

  const setIconsOnHeader = () =>{
    return (
      <View style={styles.set_icons}>
        <Icon name="shopping-cart" size={20}  style={{paddingRight:10}}/>
        <Icon name="bell" size={20}  style={{paddingRight:10}}/>
        <Icon name="gear" size={20}  />
      </View>
    )
  }
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: 'Mobile App Design',
      headerRight: () => setIconsOnHeader(),
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.outerScrollView}>
      <View style={styles.container}>
        <View style={styles.scrollViewContent}>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.input}
              placeholder="Search brand or Products..."
              placeholderTextColor="#888"
            />
            <Icon name="search" size={20}  />
          </View>
          <View style={styles.searchIcon}>
            <Icon name="list-ul" size={40}  />
          </View>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent}>
          {imageData.map((item, index) => (
            <View key={index} style={styles.imageBlock}>
              <Image source={item.imagePath} style={styles.image} />
              <Text style={styles.imageText}>{item.text}</Text>
            </View>
          ))}
        </ScrollView>
        <View>
          <Image 
            source={require("../../images/flash-sale.png")}
            style={styles.flashimage}
          />
        </View>
        <View style={styles.textContainer}>
          <View >
            <Text style={styles.ArrivalText}>New Arrivals</Text>
          </View>
          <View style={styles.newArrival}>
            <Text style={styles.newArrivaltextContainer}>Dress</Text>
            <Text style={styles.newArrivaltextContainer}>Pants</Text>
            <Text style={styles.newArrivaltextContainer}>Shirt</Text>
            <Text style={styles.newArrivaltextContainer}>Western</Text>
            <Text style={styles.newArrivaltextContainer}>Costumes</Text>
          </View>
        </View>
        <View style={styles.scrollViewContent}>
          <View style={styles.new_arrivals_2}>
            <Image 
                source={require("../../images/books-6FC23D382749-2zQ.jpeg")}
                style={styles.new_arrivals}
              />
            <Text style={styles.new_arrivals_text}>TISTABENE</Text>
            <Text style={styles.new_arrivals_text_2}>Comfort Slim Block Print Shirt</Text>
            <View style={styles.ten_percent_text}>
              <Text>$125</Text>
              <Text style={styles.ten_percent_text_with_price}>10% OFF</Text>
            </View>
            
          </View>
          <View >
            <Image 
                source={require("../../images/watch.jpeg")}
                style={styles.new_arrivals}
              />
            <Text style={styles.new_arrivals_text_van}>VAN HEUSEN</Text>
            <Text style={styles.new_arrivals_text_VAN}>Comfort Slim Block Print Shirt</Text>
            <View style={styles.ten_percent_text}>
              <Text>$1125</Text>
              <Text style={styles.ten_percent_text_with_price}>10% OFF</Text>
            </View>
          </View>
        </View>
        <View>
        <Image 
            source={require("../../images/first-aids-s.webp")}
            style={styles.first_aids_img}
          />
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
    width:320
  },
  input: {
    flex: 1,
    height: 40,
    color: '#333',
  },
  imageBlock: {
    marginRight: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginBottom: 5,
    borderColor:"black",
  },
  flashimage: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
    borderRadius: 10,
    marginTop: 20,
  },
  imageText: {
    textAlign: 'center',
    fontSize:8,
    fontWeight:"bold"
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
    marginTop:0
  },
});

export default MobileDesign;
