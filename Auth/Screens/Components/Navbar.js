import {View, Image, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import {horizontalScale, verticalScale} from '../../Dimensions/Metric';
import UserIcon from 'react-native-vector-icons/FontAwesome';
import { Avatar } from 'react-native-elements';

const Navbar = ({navigation}) => {
  
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
            alignItems: 'flex-end',
            marginRight: 10,
            marginTop: verticalScale(-40),
            fontSize: 15,
          }}>
          <Avatar
          rounded
          showEditButton
            source={{
              uri: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
            }}
            onPress={() => navigation.openDrawer()} 
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
