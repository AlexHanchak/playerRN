/**
 * React Native Music player
 * learn create self player =)
 *
 * @format
 * @flow strict-local
 */

import React, {Children} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Slider,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  ImageBackground,
  Button,
  Alert,
  TouchableOpacity,
  FlatList,
  getSound,
  Linking,
} from 'react-native';

import Player from 'react-native-track-player';


/*test track from host
 *https://dll.z1.fm/music/f/52/miyagi__endshpil_-_no_reason_feat_truwer_(zf.fm).mp3
 */
 

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content"/>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'green',
          justifyContent: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => Alert.alert('Add Items!')}
            style={{
              flex: 1,
              alignItems: 'center',
              borderRadius: 20,
              backgroundColor: '#00dd00',
              height: 20,
              width: 50,
            }}>
            <Text>Add</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={()=>Alert.alert('PLAY!')}
            style={{
              flex: 1,
              alignItems: 'center',
              borderRadius: 20,
              backgroundColor: '#00dd00',
              height: 20,
              width: 50,
            }}>
            <Text>Play</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Alert.alert('Stop')}
            style={{
              flex: 1,
              alignItems: 'center',
              borderRadius: 20,
              backgroundColor: '#00dd00',
              height: 20,
              width: 50,
            }}>
            <Text>Stop</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={{
            height: 500,
            backgroundColor: '#00ff00',
          }}
          data={[
            {key: 'first track'},
            {key: 'second track'},
            {key: 'third track'},
            {key: 'fourth track'},
            {key: 'fifth track'},
            {key: 'sixth track'},
            {key: 'seventh track'},
            {key: 'e track'},
            {key: 'n track'},
            {key: 't track'},
            {key: 'el track'},
          ]}
          renderItem={({item}) => (
            <Text
              style={{
                fontSize: 25,
                borderBottomWidth: 2,
                borderBottomColor: 'gray',
                marginTop: 2,
              }}>
              {item.key}
            </Text>
          )}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
