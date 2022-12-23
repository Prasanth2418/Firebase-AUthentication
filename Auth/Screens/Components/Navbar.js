import {View, Image, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import {horizontalScale, verticalScale} from '../../Dimensions/Metric';


const Navbar = () => {
  const logout = () => {
    auth().signOut();
  };
  return (
    <View style={{backgroundColor: 'white', height: 60, elevation: 20}}>
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
