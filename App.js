import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';
import MainNavigation from './App/Containers/MainNavigation'

export default class App extends Component {
  render() {
    return (
			<MainNavigation/>
    );
  }
}
