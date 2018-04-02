import React, { Component, } from 'react'
import { View, Text, StyleSheet, Image, TextInput, Alert, ScrollView, TouchableOpacity, Dimensions, NetInfo, AsyncStorage, DeviceEventEmitter } from 'react-native';
import Images from '../Themes/Images.js'          // Import Images.js class from Image Folder for images.
import Styles from './Styles/PaymentMethodStyle'    // Import LoginScreenStyle.js class from Styles Folder to maintain UI.
import Header from './Header.js'

class PaymentMethod extends Component {

constructor(props) {
  super(props)
  // Variable Declaration
  this.setPaymentMethod = this.setPaymentMethod.bind(this)
  this.state = {
		pickerValue: '',
		cashselect: false,
		creditselect : false,
		visaselect: false
  }
}

setPaymentMethod(){	
	if(this.state.cashselect){
		AsyncStorage.setItem("paymentMethod", "Cash")
		this.props.navigator.pop()
	}
	if(this.state.creditselect){
		AsyncStorage.setItem("paymentMethod", "GrabPay Credit")
		this.props.navigator.pop()
		DeviceEventEmitter.emit('xxx')
	}
	if(this.state.visaselect){
		AsyncStorage.setItem("paymentMethod" ,"Visa")
		this.props.navigator.pop()
	}
}

// Default render method and create UI for Login Screen
render() {	
	
    return (
		<View style={{flex:1,backgroundColor:'#eaeff2'}}>
			<Header method={this.props} title="Choose Payment Method" />
			<TouchableOpacity style={Styles.TypexBox} onPress={()=>this.setState({cashselect : !this.state.cashselect, visaselect :false,creditselect :false })}>
				<View style={{width:'100%', flexDirection:'row'}}>
					<Text style={Styles.BoxLabel}>Cash</Text>
					<Text style={Styles.BoxVal}>SGD 8</Text>
					<View style={{width:'20%',alignItems:'center'}}>
						{this.state.cashselect? <Image style={{height:14,resizeMode:'contain'}} source={Images.launch8} /> :<View></View>} 
					</View>					
				</View>
				<Text style={Styles.PaxVal}>(1 Pax)</Text>
			</TouchableOpacity>
			<Text style={Styles.savemoneytext}>Save P20 for Cashless Bookings</Text>
			<TouchableOpacity style={[Styles.TypexBox,{marginTop:1}]} onPress={()=>this.setState({creditselect : !this.state.creditselect, visaselect :false, cashselect :false})}>
				<View style={{width:'100%', flexDirection:'row'}}>
					<Text style={Styles.BoxLabel}>GrabPay Credit</Text>
					<Text style={Styles.BoxVal}>SGD 8</Text>
					<View style={{width:'20%',alignItems:'center'}}>
						{this.state.creditselect? <Image style={{height:14,resizeMode:'contain'}} source={Images.launch8} /> :<View></View>} 
					</View>					
				</View>
				<Text style={Styles.PaxVal}>(1 Pax)</Text>
			</TouchableOpacity>
			<TouchableOpacity style={[Styles.TypexBox,{marginTop:1}]} onPress={()=>this.setState({visaselect : !this.state.visaselect,creditselect :false, cashselect :false})}>
				<View style={{width:'100%', flexDirection:'row'}}>
					<Text style={Styles.BoxLabel}>Visa</Text>
					<Text style={Styles.BoxVal}>SGD 8</Text>
					<View style={{width:'20%',alignItems:'center'}}>
						{this.state.visaselect? <Image style={{height:14,resizeMode:'contain'}} source={Images.launch8} /> :<View></View>} 
					</View>					
				</View>
				<Text style={Styles.PaxVal}>(1 Pax)</Text>
			</TouchableOpacity>
			<View style={Styles.buttonContainer}>
				<TouchableOpacity style={{width:'100%'}} onPress={()=>this.setPaymentMethod()}>
					<View style={Styles.buttonMainContainer}>
						<Text style={Styles.btnText}>Add Payment Method</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
    )
  }
}

export default PaymentMethod
