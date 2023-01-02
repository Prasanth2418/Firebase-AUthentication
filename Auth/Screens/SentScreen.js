import {View, Image,Text, TouchableOpacity} from 'react-native';
import React from 'react';

const SentScreen = ({navigation}) => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"white",
        height:"100%"
      }}>
      <Image
        source={require("../Assets/Sent.gif")}
        style={{height: 200, width: 200}}
      />
      <Text style={{textAlign:'center',fontSize:17}}>
        Password reset mail sent successfully,please check your inbox.
      </Text>
      <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
        <Text style={{color:"blue",marginTop:20,textDecorationLine:"underline"}}>Go back login page</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SentScreen;
