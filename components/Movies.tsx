import * as WebBrowser from 'expo-web-browser';
import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, ActivityIndicator, FlatList,Image } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import MovieDetailScreen from '../screens/MovieDetailScreen';
import navigation from '../navigation';
import { useNavigation } from '@react-navigation/native';

export default function Movies() {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigation = useNavigation();



  const getMovies = async () => {

    try {
      const response = await fetch('https://swapi.dev/api/films' );
      const json = await response.json();
      setData(json.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getMovies();
  }, []);
  function actionOnRow(item) {
    navigation.navigate('MovieDetail', { item })
  }

  return (
    <View>
      <View >
        {isLoading ? <ActivityIndicator /> : (
          <FlatList
            data={data}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity  key={item} style={styles.row} onPress={() => actionOnRow(item)}>
                 <Image style={styles.image} source={require('../assets/images/avatar.png')}></Image>
                  <Text style={styles.rowTitle}>{item.title}</Text>
                  {/* <Text >{item.name}</Text> */}

                </TouchableOpacity>
              )
            }
            }
            style={[
              styles.flatlist,
              {
                paddingTop: 20,
              },
            ]}
           

          />
        )}
      </View>


    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  bgimage: {
    justifyContent: "center",
  },
  image: {
    width:40, height:40,borderRadius:30, paddingTop: 2


  },
  flatlist: {

  },
  row: {
    height: 70,
    justifyContent: 'center',
    padding: 5,
    borderBottomColor: 'black',
  backgroundColor: '#99d6ff',
    margin: 3,
    borderRadius: 5,
  },
  rowTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#6666ff'
  },
 
  coverImage: {
    width: 100,
    height: 100,
    borderRadius: 8
  },
});
