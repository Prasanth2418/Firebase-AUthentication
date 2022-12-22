import {View, Image, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import auth from "@react-native-firebase/auth"
import { horizontalScale, verticalScale } from '../../Dimensions/Metric';
const Navbar = () => {
 const logout =() =>{
  auth().signOut()
 }
  return (
    <View style={{backgroundColor: 'black', height: 60}}>
      <View>
      <Image
        style={{width: 100, height: 55, marginLeft: horizontalScale(20)}}
        source={{
          uri: 'https://images.firstpost.com/wp-content/uploads/2019/11/Disneyplus.jpg',
        }}
      />
      </View>
     

      <TouchableOpacity activeOpacity={0.8} >
        <Text
        onPress={logout}
          style={{
            color: 'white',
            textAlign: 'right',
            marginRight: 10,
            marginTop: verticalScale(-30),
            fontSize: 15,
          }}>
          Log out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
