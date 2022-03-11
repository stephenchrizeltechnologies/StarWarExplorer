import * as WebBrowser from 'expo-web-browser';
import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, ActivityIndicator, FlatList, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { Text, View } from './Themed';
const refreshingHeight = 100;


export default function People() {
  
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const loaderAnimation = require('../assets/96156-loader-2.json');
  const [offsetY, setOffsetY, extraPaddingTop, setExtraPaddingTop, setIsLoading] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const getPeoples = async () => {
    try {
      const response = await fetch('https://swapi.dev/api/people');
      const json = await response.json();
      setData(json.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {

    getPeoples();

  }, []);
  let progress = 0;
  if (offsetY <= 0) {
    progress = -offsetY / refreshingHeight;
  }

  function onScroll(event) {
    const { nativeEvent } = event;
    const { contentOffset } = nativeEvent;
    const { y } = contentOffset;
    setOffsetY(y);
  }
  function onRelease() {
    if (offsetY <= -refreshingHeight && !isRefreshing) {
      setIsRefreshing(true);
      setTimeout(() => {
        setIsRefreshing(false);
      }, 3000);
    }
  }
  function actionOnRow(item) {
    navigation.navigate('PeopleDetail', { item })
  }
  function loadMoredata() {



  }
  return (


    <View>
      <LottieView
        style={styles.lottieView}
        source={loaderAnimation} progress={progress}></LottieView>
      {/* {isLoading ? <ActivityIndicator /> : ( */}


      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity key={item.name} style={styles.row} onPress={() => actionOnRow(item)}>
              <Image style={styles.image} source={require('../assets/images/avatar.png')}></Image>
              <Text style={styles.rowTitle}>{item.name}</Text>
            </TouchableOpacity>
          )
        }}
        style={[
          styles.flatlist,
          {
            paddingTop: 20,
          },
        ]}
        onScroll={onScroll}
        onResponderRelease={onRelease}
        onEndReached={loadMoredata}
        onEndReachedThreshold={0}
        ListHeaderComponent={(
          <View style={{
            paddingTop: extraPaddingTop,
          }}
          />
        )}
      />

      {/* ) } */}


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
  lottieView: {
    height: refreshingHeight,
    position: 'absolute',
    top: 2,
    left: 0,
    right: 0,
  },
  coverImage: {
    width: 100,
    height: 100,
    borderRadius: 8
  },
});
