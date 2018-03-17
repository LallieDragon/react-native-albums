//Import a library to create component
  //Npm modules don't need direct path
import React from 'react';
import { AppRegistry, View } from 'react-native';
  //Files you create require direct path
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//Create a component
const App = () => (
  //Empty JSX tags are self-closing
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

//Render it to the device
AppRegistry.registerComponent('Albums', () => App);
