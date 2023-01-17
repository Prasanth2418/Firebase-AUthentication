import {View, Text, TouchableOpacity,Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {horizontalScale, verticalScale} from '../../Dimensions/Metric';

import {Avatar} from 'react-native-elements';

const HomeScreen = ({navigation}) => {
  const [details, setDetails] = useState([]);
  const update = () => {
    axios
      .get(
        'https://horizon-testnet.stellar.org/accounts/GCLNZL4EIBZZ42KIYASJSJWA7I6IHKZX6ID7HVLMZQAMMEYMDYU5AOGH',
      )
      .then(res => setDetails(res.data.balances));
  };
  useEffect(() => {
    axios
      .get(
        'https://horizon-testnet.stellar.org/accounts/GCLNZL4EIBZZ42KIYASJSJWA7I6IHKZX6ID7HVLMZQAMMEYMDYU5AOGH',
      )
      .then(res => setDetails(res.data.balances));
  }, []);

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
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
      <View style={{flexDirection: 'row', margin: 10}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Account balance</Text>

        <TouchableOpacity
          onPress={update}
          activeOpacity={0.9}
          style={{
            backgroundColor: 'blue',
            marginLeft: '45%',
            borderRadius: 5,
            marginTop: 4,
          }}>
          <Text style={{textAlign: 'right', color: 'white', padding: 5}}>
            Update
          </Text>
        </TouchableOpacity>
      </View>
      {details.map((account, index) => (
        <View
          key={index}
          style={{
            margin: 5,
            backgroundColor: 'white',
            borderRadius: 10,
            padding: 10,
            elevation: 20,
          }}>
          <Text style={{fontWeight: 'bold'}}>
            Total balance: {account.balance}
          </Text>
          <Text style={{fontWeight: 'bold'}}>
            Asset type: {account.asset_type}
          </Text>
          <Text style={{fontWeight: 'bold'}}>
            Asset code: {account.asset_code}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default HomeScreen;
