import {View, Text, Image, ScrollView,RefreshControl} from 'react-native';
import React, { useState } from 'react';
import Cartoons from './Cartoons';
import Hollywood from './Hollywood';
import Navbar from './Navbar';



const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

const HomeScreen = () => {

    const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false)
    
    );
  }, []);
  const [Data1,SetData1] = useState([
    {
      id: 1,
      name: 'Spider man far from home',

      image: 'https://m.media-amazon.com/images/I/81+HImlvK4L.jpg',
    },
    {
      id: 2,
      name: 'The incridible hulk',

      image: 'https://flxt.tmsimg.com/assets/p176337_p_v8_am.jpg',
    },
    {
      id: 3,
      name: 'Avengers infinity war',

      image:
        'https://lumiere-a.akamaihd.net/v1/images/p_avengersinfinitywar_19871_cb171514.jpeg?region=0%2C0%2C540%2C810',
    },
    {
      id: 4,
      name: 'Avengers endgame',

      image:
        'https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810',
    },
    {
      id: 5,
      name: 'Avengers',

      image:
        'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    },
    {
      id: 6,
      name: 'Thor love and thunder',

      image:
        'https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg',
    },
    {
      id: 7,
      name: 'Spider man no way home',

      image:
        'https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/spider-man-no-way-home-et00310790-1662017800.jpg',
    },
    {
      id: 8,
      name: 'Black widow',

      image: 'https://m.media-amazon.com/images/I/914MHuDfMSL.jpg',
    },
    {
      id: 9,
      name: 'Ant man',

      image: 'https://m.media-amazon.com/images/I/51DEufRmJeL._AC_SY580_.jpg',
    },
  ])
  return (
    <View
      style={{
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
      
      }}>
        <Navbar/>

      <ScrollView vertical={true}
       refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
      >
        
        <View>
          <Text
            style={{
              color: 'black',
              marginTop: 5,
              paddingLeft: 10,
              fontSize: 20,
            }}>
            Best marvel movies
          </Text>
          <ScrollView horizontal={true}>
            {Data1.map(data => (
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
        <View>
          <Text
            style={{
              color: 'black',
              marginTop: 5,
              paddingLeft: 10,
              fontSize: 20,
            }}>
            Best cartoon shows
          </Text>
          <Cartoons />
        </View>
        <View >
          <Text
            style={{
              color: 'black',
              marginTop: 5,
              paddingLeft: 10,
              fontSize: 20,
            }}>
            Hollywood Fantasy movies
          </Text>
          <Hollywood />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
