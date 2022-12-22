import { View, Text,ScrollView,Image } from 'react-native'
import React from 'react'

const Cartoons = () => {
    const Data = [
        {
          id: 1,
          name: 'Tom & Jerry',
          number: '2345578',
          image:
            'https://images.moviesanywhere.com/77e40f83c657fe5fba988e9dcbc8095e/63814f0e-0763-4593-b5a1-4d6f79ccc6af.jpg',
        },
        {
          id: 2,
          name: 'Sinchan',
          number: '7564534',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbhcyLX3bZsRglIJQ5w68q7srr2fhmCna0oA&usqp=CAU',
        },
        {
          id: 3,
          name: 'Oggy',
          number: '97553356',
          image:
            'https://m.media-amazon.com/images/M/MV5BODU4ZjJmMmItYjFhNi00MTU4LWE1ZmEtNzU1NDk0YTFhYmEwXkEyXkFqcGdeQXVyMTQ4NTcxNTI0._V1_FMjpg_UX1000_.jpg',
        },
        {
          id: 4,
          name: 'Ben 10',
          number: '2345678',
          image:
            'https://m.media-amazon.com/images/M/MV5BNWZiM2Q1MzYtMDc5Zi00Y2YzLTkxODktNzM0NGM5NzhkMWU3XkEyXkFqcGdeQXVyMTMwNTg5NDc0._V1_FMjpg_UX1000_.jpg',
        },
        {
          id: 5,
          name: 'Doraemon',
          number: '2345678',
          image:
            'https://m.media-amazon.com/images/M/MV5BMGIzZmQ4YmUtZGQ4NC00OTkyLWE1MGUtMTQ3N2Y3N2E2NWEyXkEyXkFqcGdeQXVyODAzNzAwOTU@._V1_FMjpg_UX1000_.jpg',
        },
        {
          id: 6,
          name: 'Roll 21',
          number: '2345678',
          image:
            'https://m.media-amazon.com/images/M/MV5BMTgwOTgwNDk4OV5BMl5BanBnXkFtZTgwMTY3NDY3NzE@._V1_FMjpg_UX1000_.jpg',
        },
        {
          id: 7,
          name: 'Alladin',
          number: '2345678',
          image:
            'https://m.media-amazon.com/images/M/MV5BMGEyYzk4NjktODg1Yi00ZTQ5LWE2M2EtMDNlZGYyZGU3ZmU5XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_.jpg',
        },
        {
          id: 8,
          name: 'Super man',
          number: '2345678',
          image:
            'https://m.media-amazon.com/images/M/MV5BNDgzOWJjOTMtZjY4ZS00MGRkLTk0YTMtM2E3ZGQyYmMyYzkzXkEyXkFqcGdeQXVyMTA1OTEwNjE@._V1_FMjpg_UX1000_.jpg',
        },
        {
          id: 9,
          name: 'Pokemon',
          number: '2345678',
          image:
            'https://m.media-amazon.com/images/M/MV5BNDcwZDc2NTEtMzU0Ni00YTQyLWIyYTQtNTI3YjM0MzhmMmI4XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg',
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

export default Cartoons