import { View, Text,Image,ScrollView } from 'react-native'
import React from 'react'

const Hollywood = () => {
    const Data = [
        {
          id: 1,
          name: 'Tom & Jerry',
          number: '2345578',
          image:
            'https://peacocktv.com/dam/growth/assets/seo/HarryPotter/Franchise/hp-ss-min.png',
        },
        {
          id: 2,
          name: 'Sinchan',
          number: '7564534',
          image:
            'https://peacocktv.com/dam/growth/assets/seo/HarryPotter/Franchise/hp2-min.png',
        },
        {
          id: 3,
          name: 'Oggy',
          number: '97553356',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMlRlyzkGCUOdfXt8-g2moINi489bAjXRLzUcayfVHvZE5iU49Dp0pF1UjOIBjiUj6wII&usqp=CAU',
        },
        {
          id: 4,
          name: 'Ben 10',
          number: '2345678',
          image:
            'https://images.moviesanywhere.com/d489bfce9aef55a5271d8a7d7d42bdb6/d265259e-3386-4a1e-b95f-cc52f30ee6fb.jpg',
        },
        {
          id: 5,
          name: 'Doraemon',
          number: '2345678',
          image:
            'https://web.static.nowtv.com/images/NOWTV_2021/UK/harrypotter/landingpagemovies/moviesgrid/newnames/05_HP_Film5_5.jpg',
        },
        {
          id: 6,
          name: 'Roll 21',
          number: '2345678',
          image:
            'https://web.static.nowtv.com/images/NOWTV_2021/UK/harrypotter/landingpagemovies/moviesgrid/newnames/06_HP_Film6_6.jpg?downsize=200:*&output-quality=19',
        },
        {
          id: 7,
          name: 'Alladin',
          number: '2345678',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlfXXRpUdERdHfIluY8v1binYJfeqHMPW78SN-MAI6YvHtm5v6FmKFpUz0M2oqkTfF1oY&usqp=CAU',
        },
        {
          id: 8,
          name: 'Super man',
          number: '2345678',
          image:
            'https://web.static.nowtv.com/images/NOWTV_2021/UK/harrypotter/landingpagemovies/moviesgrid/newnames/08_HP_Film8_8_.jpg',
        },
        {
          id: 9,
          name: 'Pokemon',
          number: '2345678',
          image:
            'https://images.moviesanywhere.com/c0aa57105f254ade3dd680467b1afec3/472a1552-07ec-4d84-bb5e-5f1f91ec6ab4.jpg',
        },
      ];
  return (
    <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {Data.map(data => (
            <View key={data.id} style={{marginTop: 5}}>
              <Image
                source={{uri: data.image}}
                style={{
                  width: 150,
                  height: 220,
                  borderWidth: 1,
                  borderRadius: 10,
                  margin: 10,
                }}
              />
            </View>
          ))}
        </ScrollView>
    </View>
  )
}

export default Hollywood