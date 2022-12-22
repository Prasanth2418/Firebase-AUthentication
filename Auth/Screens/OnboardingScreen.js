import { View, Text,Image } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
  <Onboarding
  onSkip={()=>navigation.replace("Login")}
  onDone={()=>navigation.navigate("Login")}
  pages={[
    {
      backgroundColor: 'white',
      image: <Image source={require("../Assets/Img3.png")}
      style={{height:300,width:300}}
      />,
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    {
        backgroundColor: 'white',
        image: <Image source={require("../Assets/Img1.png")} 
        style={{height:300,width:300}}
        />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },

  ]}
/>
    </View>
  )
}

export default OnboardingScreen