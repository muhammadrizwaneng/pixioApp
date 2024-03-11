import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Button, Image, TextInput, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {RadioButton} from 'react-native-paper';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Rating = ({navigation}) => {
  const selectUserInfo = (state: any) => state?.user;
  const user = useSelector(selectUserInfo);
  console.log('----------------user', user);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState('first');

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerTitle: 'Mobile App Design',
      // headerRight: () => setIconsOnHeader(),
    });
  }, [navigation]);

  // const user = route.params;
  // console.log("----------------user",user)
  //   const userData =JSON.stringify(user)
  //   console.log("----------------userData",userData)
  return (
    <View style={styles.container}>
      <View style={{flex:2,backgroundColor:"#FFF",flexDirection:"row" ,justifyContent:"space-between",alignItems:"center"}}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
            <AntIcon name="left" size={20} color="#000" />
          </TouchableOpacity>
        <Text style={{fontWeight:"bold",color:"#000"}}>Write Review</Text>
        <FeatherIcon name='home' size={20} color="black" style={{marginRight:10}}/>
      </View>
      <View style={{flexDirection: 'row'}}>
          <View style={styles.categoryImge4Circle}>
            <Image
              source={require('../../../images/category_4-removebg.png')}
              style={styles.categoryImge2}
            />
          </View>
        <View style={styles.ratingText}>
          <Text style={styles.ratingBlue}>Bluebell Hand Block Tiered</Text>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Text style={styles.ratingBlue}>$80</Text>
            <Text style={styles.ratingPrice}>$95</Text>
            <Text style={styles.Qty}>Qty: 2</Text>
          </View>
          <View style={{marginTop: 5}}>
            <Text style={styles.Delivery}>In Delivery</Text>
            <Text style={styles.off}>40% Off</Text>
          </View>
        </View>
      </View>
      <View style={styles.startLine}></View>
      <View style={styles.overRating}>
        <Text style={styles.Overall}>Overall Rating</Text>
        <Text style={{marginTop: 5, fontWeight: 'bold'}}>
          Your Average Rating is 4.0
        </Text>
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <AntIcon
            name="star"
            size={30}
            style={{color: '#F8B444', marginTop: 2}}
          />
          <AntIcon
            name="star"
            size={30}
            style={{color: '#F8B444', marginTop: 2}}
          />
          <AntIcon
            name="star"
            size={30}
            style={{color: '#F8B444', marginTop: 2}}
          />
          <AntIcon
            name="star"
            size={30}
            style={{color: '#F8B444', marginTop: 2}}
          />
          <AntIcon
            name="staro"
            size={30}
            style={{color: 'gray', marginTop: 2}}
          />
        </View>
      </View>
      <View style={{marginTop: 25}}>
        <Text style={{marginLeft: 15, color: '#000', fontWeight: 'bold'}}>
          Review Title
        </Text>
        <TextInput style={styles.input} />
      </View>
      <View>
        <Text
          style={{
            marginLeft: 15,
            color: '#000',
            fontWeight: 'bold',
            marginTop: 20,
          }}>
          Review Title
        </Text>
        <TextInput multiline numberOfLines={3} style={styles.inputText} />
      </View>
      <View style={{marginLeft:15,marginTop:15}}>
        <Text style={{marginTop:5,color:"#000",fontWeight:"400"}} >Would you recommend this product to a friend?</Text>
        <View>
          <RadioButton.Group
            onValueChange={newValue => setChecked(newValue)}
            value={checked} >
            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'row'}}>
                <RadioButton value="first" color='#000'/>
                <Text style={{marginTop:5,color:"#000",fontWeight:"bold"}}>Yes</Text>
              </View>
              <View style={{flexDirection: 'row',marginLeft:10}}>
                <RadioButton value="second" color='#000'/>
                <Text style={{marginTop:5,color:"#000",fontWeight:"bold"}}>No</Text>
              </View>
            </View>
          </RadioButton.Group>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 3,
    backgroundColor: '#FEF9F3',
  },
  input: {
    height: 40,
    marginLeft: 15,
    marginTop: 5,
    borderWidth: 1,
    // padding: 10,
    marginRight: 30,
    borderRadius: 10,
    color: 'black',
    borderColor: '#000',
    backgroundColor: '#FFFFFF',
  },
  paragraph: {
    marginBottom: 10, // Adjust the space between paragraphs
    // Add additional styles for your paragraph text as needed
    fontSize: 16,
    lineHeight: 24,
  },
  ratingPrice: {
    marginLeft: 5,
    fontSize: 12,
    marginTop: 3,
    textDecorationLine: 'line-through',
  },
  categoryImge2: {
    width: 210,
    height: 150,
  },
  ratingText: {
    margin: 15,
  },
  inputText: {
    height: 100,
    marginLeft: 15,
    marginTop: 5,
    borderWidth: 1,
    marginRight: 30,
    borderRadius: 10,
    color: 'black',
    borderColor: '#000',
    backgroundColor: '#FFFFFF',
  },
  backIcon: {
    marginLeft:15
    // position: 'absolute',
    // top: 20,
    // left: 20,
    // zIndex: 1,
  },
  startLine: {
    marginTop: 20,
    height: 0.1,
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
  },
  overRating: {
    justifyContent: 'center',
    marginTop: 20,
    alignItems: 'center',
  },
  Qty: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 10,
    marginLeft: 50,
    marginTop:5
  },
  Delivery: {
    color: '#2F9E42',
    fontWeight: 'bold',
  },
  off: {
    color: '#F14337',
    marginTop: 7,
    fontWeight: 'bold',
  },
  Overall: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#000',
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
    marginLeft:15
  },
});
export default Rating;
