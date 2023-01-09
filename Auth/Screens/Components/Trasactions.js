import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Trasactions = () => {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://horizon-testnet.stellar.org/accounts/GCLNZL4EIBZZ42KIYASJSJWA7I6IHKZX6ID7HVLMZQAMMEYMDYU5AOGH/transactions?limit=20&order=asc&include_failed=true',
      )
      .then(res => setTransactions(res.data._embedded.records));
  }, []);
  return (
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
  );
};

export default Trasactions;
