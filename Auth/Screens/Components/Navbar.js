import {View, Image, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import {horizontalScale, verticalScale} from '../../Dimensions/Metric';
import UserIcon from "react-native-vector-icons/FontAwesome"

const Navbar = () => {
  const logout = () => {
    auth().signOut();
  };
  return (
    <View style={{backgroundColor: 'white', height: 60}}>
      <View>
        <Image
          style={{width: 115, height: 55, marginLeft: horizontalScale(-15)}}
          source={require('../../Assets/Logo.png')}
        />
      </View>

      <TouchableOpacity activeOpacity={0.8}>
        <View
      style={{
            color: 'black',
           alignItems:"flex-end",
            marginRight: 10,
            marginTop: verticalScale(-37),
            fontSize: 15,
          }}>
        <UserIcon name="user-circle-o" size={30} color={"black"} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
