import {View, Text, ScrollView,Image,TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {horizontalScale, verticalScale} from '../../Dimensions/Metric';
import {Avatar} from 'react-native-elements';

const Trasactions = ({navigation}) => {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://horizon-testnet.stellar.org/accounts/GCLNZL4EIBZZ42KIYASJSJWA7I6IHKZX6ID7HVLMZQAMMEYMDYU5AOGH/transactions?limit=20&order=asc&include_failed=true',
      )
      .then(res => setTransactions(res.data._embedded.records));
  }, []);
  return (
    <View>
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
    <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
      <View style={{backgroundColor: 'white'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', padding: 10}}>
          Transactions history
        </Text>

        {transactions.map(data => (
          <View
            key={data.id}
            style={{
              margin: 5,
              backgroundColor: 'white',
              borderRadius: 10,
              padding: 10,
              elevation: 20,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontWeight: 'bold'}}> Ledger: {data.ledger}</Text>
              <Text style={{paddingLeft: '50%'}}>
                {' '}
                {data.successful == true ? (
                  <Text style={{color: 'green', fontWeight: 'bold'}}>
                    Sucess
                  </Text>
                ) : (
                  <Text style={{color: 'red', fontWeight: 'bold'}}>Failed</Text>
                )}
              </Text>
            </View>
            <Text style={{fontWeight: 'bold'}}>
              {' '}
              Fee charged: {data.fee_charged}
            </Text>
            <Text style={{fontWeight: 'bold'}}>Hash :</Text>
            <Text style={{fontWeight: 'bold'}}> {data.hash}</Text>
            <View style={{flexDirection: 'row', paddingTop: 5}}>
              <Text>{data.created_at}</Text>
              <Text style={{paddingLeft: '20%'}}>{data.valid_after}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
    </View>
  );
};

export default Trasactions;
