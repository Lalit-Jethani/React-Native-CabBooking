import React, { Component, } from 'react'
import {View, AsyncStorage } from 'react-native'
import Home from './Home';
import PaymentMethod from './PaymentMethod';
import PropTypes from 'prop-types';
import {Navigator}  from 'react-native-deprecated-custom-components';


class MainNavigation extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }


renderScene(route, navigator) {
   if(route.name == 'Home') {
     return <Home navigator={navigator} />
   }
   if(route.name == 'PaymentMethod') {
     return <PaymentMethod navigator={navigator} />
   }

}
  render() {
    return (
      <Navigator
        initialRoute={{name: 'Home',index: 0}} 
        renderScene={this.renderScene}
        configureScene={(route, routeStack) =>{
          return Navigator.SceneConfigs.FloatFromBottom
      }}/>
    )
  }
}

export default MainNavigation
