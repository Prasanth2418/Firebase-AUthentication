import React,{useState,useEffect} from 'react'
import { createNativeStackNavigator} from "@react-navigation/native-stack"
import SignupScreen from '../Screens/SignupScreen'
import LoginScreen from '../Screens/LoginScreen'
import OnboardingScreen from '../Screens/OnboardingScreen'
import ForgetPasswordScreen from '../Screens/ForgetPasswordScreen'
import SentScreen from '../Screens/SentScreen'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Stack = createNativeStackNavigator()
const AuthStack = () => {
    const [isFirstLaunch,setIsFirstLaunch] = useState(null)
    let routeName;
    useEffect(()=>{
        AsyncStorage.getItem("alreadyLaunched").then((value)=>{
            if(value==null){
                AsyncStorage.setItem("alreadyLaunched", "true");
                setIsFirstLaunch(true)
            }else{
                setIsFirstLaunch(false)
            }
        })
    },[])
    if(isFirstLaunch == null){
        return null;
    }else if(isFirstLaunch === true){
        routeName="Onboarding"
    }else{
        routeName="Login"
    }

    return(
      <Stack.Navigator initialRouteName={routeName}>
   
            <Stack.Screen name="Onboarding" component={OnboardingScreen}
            options={{header:()=> null}}
            />
            <Stack.Screen name="Login" component={LoginScreen}
             options={{header:()=> null}}
            />
            <Stack.Screen name="Signup" component={SignupScreen}
             options={{header:()=> null}}
            />
            <Stack.Screen name="forget" component={ForgetPasswordScreen}
            options={{header:()=> null}}
            />
            <Stack.Screen name='sent' component={SentScreen}
            options={{header:()=> null}}
            />
        
      </Stack.Navigator>
     
   
    )
  
}

export default AuthStack