import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PixioCategory = () => {
  return (
    <View style={styles.container}>
        <View style={styles.categoryContainer}>
          <View style={styles.categoryItem}>
            <View style={styles.categoryImge2Circle}>
              <Icon name="heart-o" size={15} style={styles.heartIcon} />
              <Image
                source={require('../../../images/category_2-removebg.png')}
                style={styles.categoryImge2}
              />
              <View style={styles.textContainer}>
                <Text style={styles.text}>Jackets (24 Items)</Text>
              </View>
            </View>
          </View>
          <View style={styles.categoryItem}>
            <View style={styles.categoryImgeCircle}>
              <Icon name="heart-o" size={15} style={styles.heartIcon} />
              <Image
                source={require('../../../images/men-image.jpeg')}
                style={styles.image}
              />
              <View style={styles.textContainer}>
                <Text style={styles.text}>Jackets (24 Items)</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.categoryContainer}>
          <View style={styles.categoryItem}>
            <View style={styles.categoryImge4Circle}>
              <Icon name="heart-o" size={15} style={styles.heartIcon} />
              <Image
                source={require('../../../images/category_4-removebg.png')}
                style={styles.categoryImge2}
              />
              <View style={styles.textContainer}>
                <Text style={styles.text}>Jackets (24 Items)</Text>
              </View>
            </View>
          </View>
          <View style={styles.categoryItem}>
            <View style={styles.categoryImgeCircle}>
              <Icon name="heart-o" size={15} style={styles.heartIcon} />
              <Image
                source={require('../../../images/Red-OL-removebg.png')}
                style={styles.redimage}
              />
              <View style={styles.textContainer}>
                <Text style={styles.text}>Jackets (24 Items)</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.categoryContainer}>
          <View style={styles.categoryItem}>
            <View style={styles.preetYoungImgCircle}>
              <Icon name="heart-o" size={15} style={styles.heartIcon} />
              <Image
                source={require('../../../images/pretty-young-removebg_1.png')}
                style={styles.prettyYoungImg}
              />
              <View style={styles.textContainer}>
                <Text style={styles.text}>Jackets (24 Items)</Text>
              </View>
            </View>
          </View>
          <View style={styles.categoryItem}>
            <View style={styles.excitedGirlImgCircle}>
              <Icon name="heart-o" size={15} style={styles.heartIcon} />
              <Image
                source={require('../../../images/excited-white-girl_1-removebg_1.png')}
                style={styles.exciteImage}
              />
              <View style={styles.textContainer}>
                <Text style={styles.text}>Jackets (24 Items)</Text>
              </View>
            </View>
          </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  lastcategoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  categoryItem: {
    alignItems: 'center',
  },
  categoryImgeCircle: {
    width: 130,
    height: 150,
    borderRadius: 10,
    backgroundColor: '#D7A189',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    position: 'relative',
  },
  excitedGirlImgCircle: {
    width: 130,
    height: 150,
    borderRadius: 10,
    backgroundColor: '#FFC5CF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    position: 'relative',
  },
  preetYoungImgCircle: {
    width: 130,
    height: 150,
    borderRadius: 10,
    backgroundColor: '#9287C5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    position: 'relative',
  },
  categoryImge2Circle: {
    width: 130,
    height: 150,
    borderRadius: 10,
    backgroundColor: '#F09A9E',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    position: 'relative',
  },
  categoryImge4Circle: {
    width: 130,
    height: 150,
    borderRadius: 10,
    backgroundColor: '#FABD76',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    position: 'relative',
  },
  categoryImge2: {
    width: 210,
    height: 150,
  },
  prettyYoungImg: {
    width: 130,
    height: 150,
  },
  image: {
    width: 200,
    height: 150,
  },
  redimage: {
    width: 100,
    height: 150,
  },
  exciteImage:{
    width: 100,
    height: 150,
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#C78D47',
    padding: 5,
    borderRadius: 15,
    color:"white",
  },
  textContainer: {
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(107, 72, 56, 0.5)',
    paddingVertical: 5,
    borderRadius: 10,
    position: 'absolute',
  },
  scrollViewContent: {
    flexDirection: 'column',
    marginTop: 30,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  text: {
    textAlign: 'center',
    color: '#FCFBFB',
    fontWeight: 'bold',
  fontSize:12
  },
});

export default PixioCategory;
