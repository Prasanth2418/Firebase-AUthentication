import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import LogoutIcon from "react-native-vector-icons/Entypo"
import { TouchableOpacity } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
const CoustemDrawer = props => {
  const logout = () => {
    auth().signOut();
  };
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#8200d6'}}>
        <ImageBackground
          source={{
            uri: 'https://t3.ftcdn.net/jpg/00/86/56/12/360_F_86561234_8HJdzg2iBlPap18K38mbyetKfdw1oNrm.jpg',
          }}
          style={{padding: 20}}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
            }}
            style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
          />
          <Text style={{color:"#fff",paddingLeft:10,fontWeight:"bold"}}>Jhon Doe</Text>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding:20,borderTopWidth:1,borderTopColor:"#ccc"}}>
        <TouchableOpacity style={{paddingVertical:15}} onPress={logout}>
          <View style={{flexDirection:"row",alignItems:"center"}}>
        <LogoutIcon name="log-out" size={25} color="black" />
        <Text style={{fontSize:20,paddingLeft:10,color:"black"}}>Sign out</Text>
        </View>
        </TouchableOpacity>
      
      </View>
    </View>
  );
};

export default CoustemDrawer;
