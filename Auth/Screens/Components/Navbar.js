import {View, Image, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import {horizontalScale, verticalScale} from '../../Dimensions/Metric';
import LogoutIcon from "react-native-vector-icons/MaterialIcons"

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
        <Text
          onPress={logout}
          style={{
            color: 'black',
            textAlign: 'right',
            marginRight: 10,
            marginTop: verticalScale(-37),
            fontSize: 15,
          }}>
        <LogoutIcon name="logout" size={30}/>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
