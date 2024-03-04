import React from 'react';
import { View, Image, StyleSheet, Text, ScrollView } from 'react-native';


const EcommerceImagesSlider = () => {
  const imageData = [
    {
      imagePath: require('../../../images/apparel-category.webp'),
      text: 'Apparel',
    },
    {
      imagePath: require('../../../images/art-category.webp'),
      text: 'Art',
    },
    {
      imagePath: require('../../../images/sporting-goods.webp'),
      text: 'Sporting Goods',
    },
    {
      imagePath: require('../../../images/baby-and-toddler.webp'),
      text: 'Baby and Toddler',
    },
    {
      imagePath: require('../../../images/boys-clothing.webp'),
      text: 'Boys Clothing',
    },
    {
      imagePath: require('../../../images/clothing-shoe-care.webp'),
      text: 'Clothing Shoe Care',
    },
    {
      imagePath: require('../../../images/costumes.webp'),
      text: 'Costumes',
    },
    {
      imagePath: require('../../../images/dancewear.webp'),
      text: 'Dancewear',
    },
    {
      imagePath: require('../../../images/electronics.webp'),
      text: 'Electronics',
    },
    {
      imagePath: require('../../../images/food.webp'),
      text: 'Food',
    },
    {
      imagePath: require('../../../images/girls-clothing.webp'),
      text: 'Girls Clothing',
    },
    {
      imagePath: require('../../../images/health-beauty.webp'),
      text: 'Health and Beauty',
    },
    {
      imagePath: require('../../../images/home-garden.webp'),
      text: 'Home and Garden',
    },
    {
      imagePath: require('../../../images/jewelry-watches.webp'),
      text: 'Jewelry and Watches',
    },
    {
      imagePath: require('../../../images/men-accessories.webp'),
      text: 'Men Accessories',
    },
    {
      imagePath: require('../../../images/men-clothing.webp'),
      text: 'Men Clothing',
    },
    {
      imagePath: require('../../../images/pet-supplies.webp'),
      text: 'Pet Supplies',
    },
    {
      imagePath: require('../../../images/toys-games.webp'),
      text: 'Toy and Games',
    },
    {
      imagePath: require('../../../images/uniforms-office.webp'),
      text: 'Uniforms Office',
    },
    {
      imagePath: require('../../../images/unisex-kids-clothing.webp'),
      text: 'UniSex Kids Clothing',
    },
    {
      imagePath: require('../../../images/vintage.webp'),
      text: 'Vintage',
    },
  ];

  return (
      <View >
        <ScrollView >
          {/* {imageData.map((item, index) => ( */}
          <View style={styles.scrollViewContent}>
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
                  <Image source={require("../../../images/cell-phones.webp")} style={styles.image} />
                  <Text style={styles.imageText}>Cell Phones</Text>
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
                  <Image source={require("../../../images/health-care.webp")} style={styles.image} />
                  <Text style={styles.imageText}>Health Care</Text>
                </View>
                <View>
                  <Image source={require("../../../images/puzzles.webp")} style={styles.image} />
                  <Text style={styles.imageText}>Puzzles</Text>
                </View>
              </View>
          </View>
          {/* ))} */}
        </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({

  scrollViewContent: {
    justifyContent:"space-between"
  },
  imageBlock: {
    marginRight: 10,
    flexDirection: 'row',
  },
  image: {
    // justifyContent:"space-around",
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
});

export default EcommerceImagesSlider;
