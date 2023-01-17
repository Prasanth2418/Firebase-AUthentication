import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeIcon from 'react-native-vector-icons/Entypo';
import SettingsIcon from 'react-native-vector-icons/Ionicons';
import WalletIcon from 'react-native-vector-icons/Entypo';
import MoneyIcon from 'react-native-vector-icons/FontAwesome5';

import Trasactions from '../Screens/Components/Trasactions';
import wallet from '../Screens/Components/SecondScreen';
import Settings from '../Screens/Components/Settings';
import CoustemDrawer from './CoustemDrawer';
import TabNavigation from '../Navigation/TabNavigation';

const Drawer = createDrawerNavigator();
const AppStack = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerLabelStyle: {marginLeft: -25, fontSize: 15},
          drawerActiveBackgroundColor: 'blue',
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#333',
        }}
        drawerContent={props => <CoustemDrawer {...props} />}>
        <Drawer.Screen
          name="Home"
          component={TabNavigation}
          options={{
            drawerIcon: ({focused}) => <HomeIcon name="home" size={25} />,
          }}
        />
         
        <Drawer.Screen
          name="Trasactions"
          component={Trasactions}
          options={{
            drawerIcon: ({focused}) => (
              <MoneyIcon name="money-check" size={25} />
            ),
          }}
        />
        <Drawer.Screen
          name="wallet"
          component={wallet}
          options={{
            drawerIcon: ({focused}) => <WalletIcon name="wallet" size={30} />,
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={Settings}
          options={{
            drawerIcon: ({focused}) => (
              <SettingsIcon name="settings" size={25} />
            ),
          }}
        />
      </Drawer.Navigator>
    </>
  );
};

export default AppStack;
