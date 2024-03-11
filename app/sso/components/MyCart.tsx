import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {RadioButton} from 'react-native-paper';
import FeatherIcon from 'react-native-vector-icons/Feather';

const MyCart = ({navigation}) => {
  const selectUserInfo = (state: any) => state?.user;
  const user = useSelector(selectUserInfo);
  console.log('----------------user', user);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState('first');

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerTitle: 'Mobile App Design',
      // headerRight: () => setIconsOnHeader(), checkcircle
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: '#FFF', flexDirection: 'row'}}>
        <View style={{margin: 15}}>
          <Text style={styles.cartText}>My Cart</Text>
          <View style={styles.flexDirectionRow}>
            <Text style={styles.itemText}>8 Items</Text>
            <Text style={styles.deliverToText}>
              Deliver To: <Text style={styles.itemText}>London</Text>
            </Text>
          </View>
        </View>
        <View style={styles.detailCircle}>
          <Text style={styles.detailText}>
            <EvilIcons name="location" size={15} color="#000" />
            Change
          </Text>
        </View>
      </View>
      <View style={{margin: 15}}>
        <Text style={styles.subTotalText}>
          SubTotal <Text style={styles.totalPriceText}>$3,599</Text>
        </Text>

        <Text style={styles.freeOrder}>
          {' '}
          <AntIcon
            name="checkcircle"
            size={20}
            style={{color: '#2F9E42'}}
          />{' '}
          Your order is eligible for free Delivery
        </Text>
      </View>
      <View style={styles.startLine}></View>
      <ScrollView>
        <View style={styles.flexDirectionRow}>
          <View style={styles.categoryItem}>
            <View style={styles.categoryImge4Circle}>
              <Icon name="heart-o" size={15} style={styles.heartIcon} />
              <Image
                source={require('../../../images/category_4-removebg.png')}
                style={styles.categoryImge2}
              />
            </View>
          </View>
          <View style={styles.ratingText}>
            <Text style={styles.ratingBlue}>Bluebell Hand Block Tiered</Text>
            <Text style={styles.ratingBlue}>Dress</Text>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Text style={styles.ratingBlue}>$80</Text>
              <Text style={styles.ratingPrice}>$95</Text>
              <Text style={styles.Qty}>
                {' '}
                <AntIcon name="star" size={10} style={styles.reviewText} /> (2k
                Review)
              </Text>
            </View>
            <View style={{marginTop: 5}}>
              <Text style={styles.Delivery}>FREE Delivery</Text>
              <View style={styles.sizeContainer}>
                <View style={styles.XSizeCircle}>
                  <Text>
                    {' '}
                    <AntIcon name="minus" color="#FFF" size={15} />
                  </Text>
                </View>
                <Text style={styles.TextOne}>1</Text>
                <View style={styles.XSizeCircle}>
                  <Text>
                    {' '}
                    <AntIcon name="plus" color="#FFF" size={15} />
                  </Text>
                </View>
                <Text style={{marginLeft: 40, marginTop: 5}}>
                  <AntIcon name="delete" color="#000" size={15} /> Remove
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.startLine}></View>
        <View style={styles.flexDirectionRow}>
          <View style={styles.categoryItem}>
            <View style={styles.categoryImge4Circle}>
              <Icon name="heart-o" size={15} style={styles.heartIcon} />
              <Image
                source={require('../../../images/pretty-young-removebg_1.png')}
                style={styles.prettyYoungImg}
              />
            </View>
          </View>
          <View style={styles.ratingText}>
            <Text style={styles.ratingBlue}>Bluebell Hand Block Tiered</Text>
            <Text style={styles.ratingBlue}>Dress</Text>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Text style={styles.ratingBlue}>$80</Text>
              <Text style={styles.ratingPrice}>$95</Text>
              <Text style={styles.Qty}>
                {' '}
                <AntIcon name="star" size={10} style={styles.reviewText} /> (2k
                Review)
              </Text>
            </View>
            <View style={{marginTop: 5}}>
              <Text style={styles.Delivery}>FREE Delivery</Text>
              <View style={styles.sizeContainer}>
                <View style={styles.XSizeCircle}>
                  <Text>
                    {' '}
                    <AntIcon name="minus" color="#FFF" size={15} />
                  </Text>
                </View>
                <Text style={styles.TextOne}>1</Text>
                <View style={styles.XSizeCircle}>
                  <Text>
                    {' '}
                    <AntIcon name="plus" color="#FFF" size={15} />
                  </Text>
                </View>
                <Text style={{marginLeft: 40, marginTop: 5}}>
                  <AntIcon name="delete" color="#000" size={15} /> Remove
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.startLine}></View>
        <View style={styles.flexDirectionRow}>
          <View style={styles.categoryItem}>
            <View style={styles.excitedGirlImgCircle}>
              <Icon name="heart-o" size={15} style={styles.heartIcon} />
              <Image
                source={require('../../../images/excited-white-girl_1-removebg_1.png')}
                style={styles.exciteImage}
              />
            </View>
          </View>
          <View style={styles.ratingText}>
            <Text style={styles.ratingBlue}>Bluebell Hand Block Tiered</Text>
            <Text style={styles.ratingBlue}>Dress</Text>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Text style={styles.ratingBlue}>$80</Text>
              <Text style={styles.ratingPrice}>$95</Text>
              <Text style={styles.Qty}>
                {' '}
                <AntIcon name="star" size={10} style={styles.reviewText} /> (2k
                Review)
              </Text>
            </View>
            <View style={{marginTop: 5}}>
              <Text style={styles.Delivery}>FREE Delivery</Text>
              <View style={styles.sizeContainer}>
                <View style={styles.XSizeCircle}>
                  <Text>
                    {' '}
                    <AntIcon name="minus" color="#FFF" size={15} />
                  </Text>
                </View>
                <Text style={styles.TextOne}>1</Text>
                <View style={styles.XSizeCircle}>
                  <Text>
                    {' '}
                    <AntIcon name="plus" color="#FFF" size={15} />
                  </Text>
                </View>
                <Text style={{marginLeft: 40, marginTop: 5}}>
                  <AntIcon name="delete" color="#000" size={15} /> Remove
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.startLine}></View>
        <View style={styles.flexDirectionRow}>
          <View style={styles.categoryItem}>
            <View style={styles.excitedGirlImgCircle}>
              <Icon name="heart-o" size={15} style={styles.heartIcon} />
              <Image
                source={require('../../../images/Red-OL-removebg.png')}
                style={styles.exciteImage}
              />
            </View>
          </View>
          <View style={styles.ratingText}>
            <Text style={styles.ratingBlue}>Bluebell Hand Block Tiered</Text>
            <Text style={styles.ratingBlue}>Dress</Text>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Text style={styles.ratingBlue}>$80</Text>
              <Text style={styles.ratingPrice}>$95</Text>
              <Text style={styles.Qty}>
                {' '}
                <AntIcon name="star" size={10} style={styles.reviewText} /> (2k
                Review)
              </Text>
            </View>
            <View style={{marginTop: 5}}>
              <Text style={styles.Delivery}>FREE Delivery</Text>
              <View style={styles.sizeContainer}>
                <View style={styles.XSizeCircle}>
                  <Text>
                    {' '}
                    <AntIcon name="minus" color="#FFF" size={15} />
                  </Text>
                </View>
                <Text style={styles.TextOne}>1</Text>
                <View style={styles.XSizeCircle}>
                  <Text>
                    {' '}
                    <AntIcon name="plus" color="#FFF" size={15} />
                  </Text>
                </View>
                <Text style={{marginLeft: 40, marginTop: 5}}>
                  <AntIcon name="delete" color="#000" size={15} /> Remove
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.startLine}></View>
      </ScrollView>
      <TouchableOpacity style={styles.getStartedButton}>
        <View>
          <Text style={styles.getStartedText}>Proceed To Buy (8 Items) </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 3,
    backgroundColor: '#FEF9F3',
  },
  reviewText: {color: '#F8B444', marginTop: 2},
  deliverToText: {
    fontWeight: 'bold',
    fontSize: 10,
    marginLeft: 20,
    color: '#363535',
  },
  freeOrder: {color: '#2F9E42', fontWeight: '600', marginTop: 5},
  itemText: {fontWeight: 'bold', fontSize: 10, color: '#000'},
  Mycart: {
    fontWeight: 'bold',
    color: '#000',
  },
  totalPriceText: {color: '#000', fontWeight: 'bold', fontSize: 17},
  subTotalText: {color: '#000', fontWeight: '400'},
  cartText: {fontWeight: 'bold', color: '#000'},
  sizeContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  TextOne: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    fontWeight: 'bold',
    color: '#000',
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'rgba(107, 72, 56, 0.3)',
    padding: 5,
    borderRadius: 15,
    color: 'white',
  },
  detailText: {
    color: 'black',
    fontWeight: 'bold',
  },
  XSizeCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  detailCircle: {
    width: 100,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 100,
    marginTop: 20,
  },
  flexDirectionRow: {
    flexDirection: 'row',
  },
  ratingPrice: {
    marginLeft: 5,
    fontSize: 12,
    marginTop: 3,
    textDecorationLine: 'line-through',
  },
  categoryImge2: {
    width: 180,
    height: 125,
  },
  exciteImage: {
    width: 60,
    height: 125,
  },
  ratingText: {
    margin: 15,
  },
  prettyYoungImg: {
    width: 100,
    height: 125,
  },
  getStartedButton: {
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 30,
    paddingVertical: 14,
    margin: 15,
  },
  getStartedText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  backIcon: {
    marginLeft: 15,
  },
  startLine: {
    height: 0.5,
    backgroundColor: 'gray',
    marginLeft: 0,
  },
  ratingBlue: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 15,
  },
  categoryItem: {
    alignItems: 'center',
    marginTop: 10,
  },
  Qty: {
    fontSize: 10,
    marginLeft: 30,
    marginTop: 5,
  },
  Delivery: {
    color: '#2F9E42',
    fontWeight: '500',
  },

  categoryImge4Circle: {
    width: 100,
    height: 125,
    borderRadius: 10,
    backgroundColor: '#FABD76',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    position: 'relative',
    marginLeft: 15,
  },
  excitedGirlImgCircle: {
    width: 100,
    height: 125,
    borderRadius: 10,
    backgroundColor: '#FFC5CF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    position: 'relative',
  },
});
export default MyCart;
