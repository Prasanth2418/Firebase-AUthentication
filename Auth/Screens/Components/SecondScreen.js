import React, {useState} from 'react';
import {View, Text, Button, Image, TouchableOpacity} from 'react-native';
import {Keypair} from 'stellar-sdk';
import {randomBytes} from 'react-native-randombytes';
import DepositeAssets from './DepositeAssets';
import {horizontalScale, verticalScale} from '../../Dimensions/Metric';

import {Avatar} from 'react-native-elements';

window.Buffer = window.Buffer || require('buffer').Buffer;

const SecondScreen = ({navigation}) => {
  const [publickey, setPublickey] = useState();
  const [secretkey, setSecretkey] = useState();
  const [created, setCreated] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const [sucess, setSucess] = useState(false);
  console.log(secretkey)

  const createAccount = () => {
    randomBytes(32, (err, bytes) => {
      if (err) {
        console.error(err);
        return;
      }
      const keypair = Keypair.fromRawEd25519Seed(bytes);
      setPublickey(keypair.publicKey());
      setSecretkey(keypair.secret());

      setCreated(true);
    });
  };
  const fundAccount = async () => {
    setIsLoading(true);
    const friendbotUrl = `https://friendbot.stellar.org?addr=${publickey}`;
    const response = await fetch(friendbotUrl);
    const responseJSON = await response.json();
    console.log(responseJSON)

    setIsLoading(false);
    setSucess(true);
  };

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
      <View style={{marginTop: 10}}>
        {created === false ? (
          <View>
            <Button onPress={createAccount} title="Create account" />
          </View>
        ) : (
          <View>
            <View>
              <Text style={{padding: 10}}>Account key : {publickey}</Text>
            </View>
            <View style={{marginTop: 20}}>
              {sucess === false ? (
                <TouchableOpacity onPress={fundAccount}>
                  <Text>
                    {isloading === true ? 'Funding...' : 'Fund Account'}
                  </Text>
                </TouchableOpacity>
              ) : (
                <View>
                  <Text
                    style={{
                      color: 'green',
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}>
                    Deposite Sucessfully
                  </Text>
                </View>
              )}

              {/* <DepositeAssets  sourceSecretkey={secretkey} create={created} /> */}
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default SecondScreen;
