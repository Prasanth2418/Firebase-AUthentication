import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import axios from 'axios';

export default HomeScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    axios
      .get(
        'https://horizon-testnet.stellar.org/accounts/GDGQFGAMAGMS6G5QBCRKNZVPLJ6JE4TQ4MVD2ZYRN45EP5OQQNG2RNUN',
      )
      .then(res => setData(res.data.balances));
    

    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      <Text style={{color: 'balck'}}>{JSON.stringify(data[0])}</Text>
    </View>
  );
};
