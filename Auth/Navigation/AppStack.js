import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator} from "@react-navigation/native-stack"
import HomeScreen from "../Screens/Components/HomeScreen"
 const Stack = createNativeStackNavigator()
const AppStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}
         options={{header:()=> null}}
        />
    </Stack.Navigator>
  )
}

export default AppStack