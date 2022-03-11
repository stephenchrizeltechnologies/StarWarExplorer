import * as WebBrowser from 'expo-web-browser';
import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function MovieDetail(props) {

    console.log('Selected Item :', props);

    props.navigation.setOptions({ title: props.route.params.item.name });

    return (
        <View style={{
            fontSize: 20, fontWeight: 'bold',
        }}>
        <View style={styles.subview}>
          <Text style={styles.lable}>Director</Text>

          <Text style={styles.item}>{props.route.params.item.director}</Text>
</View>
        <View style={styles.subview}>

          <Text style={styles.lable}>Producer</Text>

          <Text style={styles.item}>{props.route.params.item.producer}</Text>
          </View>
 <View style={styles.subview}>
          <Text style={styles.lable} >Release Date</Text>

          <Text style={styles.item}>{props.route.params.item.release_date}</Text>
          </View>
         
        
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    subview:{
    padding: 17,
},
    lable: {
    color: 'darkblue',
    fontSize: 20,
    fontWeight:'bold'
},
    item: {
    padding: 10,
    fontSize: 18,
},
});


