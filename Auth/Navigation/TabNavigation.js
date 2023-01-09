import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from 'react-native-vector-icons/Entypo';
import ScanIcon from 'react-native-vector-icons/AntDesign';
import SettingsIcon from 'react-native-vector-icons/Ionicons';
import WalletIcon from 'react-native-vector-icons/Entypo';
import MoneyIcon from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from '../Screens/Components/HomeScreen';
import SecondScreen from '../Screens/Components/SecondScreen';
import ScanScreen from '../Screens/Components/ScanScreen';
import Settings from '../Screens/Components/Settings';
import Trasactions from '../Screens/Components/Trasactions';
import Navbar from '../Screens/Components/Navbar';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <>
     <Navbar />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,

          tabBarStyle: {
            backgroundColor: 'white',
            borderTopWidth: 0,
            elevation: 100,
            marginBottom: 2,
            height: 60,
            paddingTop: 10,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => <HomeIcon name="home" size={25} color={focused ?"blue":"black"}/>,
          }}></Tab.Screen>

        <Tab.Screen
          name="Transactions"
          component={Trasactions}
          options={{
            tabBarIcon: ({focused}) => (
              <MoneyIcon name="money-check" size={20} color={focused ?"blue":"black"}/>
            ),
          }}></Tab.Screen>

        <Tab.Screen
          name="scan & pay"
          component={ScanScreen}
          options={{
            tabBarIcon: () => (
              <View
                style={{
                  position: 'absolute',
                  alignSelf: 'center',
                  backgroundColor: 'grey',
                  width: 70,
                  height: 70,
                  borderRadius: 35,
                  bottom: 2,
                  zIndex: 10,
                }}>
                <View style={[styles.button, styles.actionBtn]}>
                  <ScanIcon name="scan1" size={35} color="white"  />
                </View>
              </View>
            ),
          }}></Tab.Screen>

        <Tab.Screen
          name="Wallet"
          component={SecondScreen}
          options={{
            tabBarIcon: ({focused}) => <WalletIcon name="wallet" size={25} color={focused ?"blue":"black"} />,
          }}></Tab.Screen>

        <Tab.Screen
          name="settings"
          component={Settings}
          options={{
            tabBarIcon: ({focused}) => (
              <SettingsIcon name="settings" size={25}  color={focused ?"blue":"black"}/>
            ),
          }}></Tab.Screen>
      </Tab.Navigator>
    </>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  button: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'blue',
    shadowOpacity: 0.1,
    shadowOffset: {x: 2, y: 0},
    shadowRadius: 2,
    borderRadius: 30,
    position: 'absolute',
    bottom: 20,
    right: 0,
    top: 5,
    left: 5,
    shadowOpacity: 5.0,
  },
  actionBtn: {
    backgroundColor: '#1E90FF',
    textShadowOffset: {width: 5, height: 5},
    textShadowRadius: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
});
