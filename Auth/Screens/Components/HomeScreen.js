import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const HomeScreen = () => {
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
