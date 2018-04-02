import React, { Component } from 'react';
import {Image, View, Dimensions, Text, TouchableOpacity} from 'react-native';
import Images from '../Themes/Images.js';
import Styles from './Styles/HeaderStyle';
const  {width, height} = Dimensions.get('window')

export default class Header extends Component{	
    constructor(props) {
        super(props);
    }

	render(){
		return(
				<View style={Styles.headerContainer}>
					<View style={Styles.sideContainer}>
						<TouchableOpacity onPress={()=>this.props.method.navigator.pop()}>
							<Image style={Styles.backIcon} source={Images.launch} />
						</TouchableOpacity>
					</View>
					
					<View style={Styles.mainContainer}>
						<Text style={Styles.headerTitle}>{this.props.title}</Text>
					</View>
				</View>


		);
	}
}
module.exports = Header;