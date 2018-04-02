import React, { Component, } from 'react'
import { View, Text, StyleSheet, Image, TextInput, Alert, ScrollView, TouchableOpacity, Dimensions, NetInfo, AsyncStorage, Picker, DeviceEventEmitter, FlatList, Modal } from 'react-native';
import Images from '../Themes/Images.js'          // Import Images.js class from Image Folder for images.
import Styles from './Styles/HomeScreenStyle'    // Import LoginScreenStyle.js class from Styles Folder to maintain UI.
import ModalStyles from './Styles/PaymentMethodStyle'
import HeaderStyles from './Styles/HeaderStyle';
import Header from './Header.js'

Date.prototype.addHours = function(h) {    
	this.setTime(this.getTime() + (h*60*60*1000)); 
	return this;   
}
const hours = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
const data = ['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00'];
const timeSlots = [
	
	{
		time: new Date().addHours(1),
		isAvailable: true,
		paymentMethods: [
			"Cash",
			"GrabPay Credit",
			"VISA"
		]
	},
	{
		time: new Date().addHours(2),
		isAvailable: false,
		paymentMethods: [
			"GrabPay Credit",
			"VISA"
		]
	},
	{
		time: new Date().addHours(3),
		isAvailable: true,
		paymentMethods: [
			"GrabPay Credit",
			"VISA"
		]
	},
	{
		time: new Date().addHours(4),
		isAvailable: true,
		paymentMethods: [
			"MASTER",
			"VISA"
		]
	},
	{
		time: new Date().addHours(5),
		isAvailable: false,
		paymentMethods: [
			"GrabPay Credit",
			"VISA"
		]
	},
	{
		time: new Date().addHours(6),
		isAvailable: true,
		paymentMethods: [
			"GrabPay Credit",
			"VISA"
		]
	},
	{
		time: new Date().addHours(7),
		isAvailable: true,
		paymentMethods: [
			"GrabPay Credit",
			"VISA"
		]
	},
	{
		time: new Date().addHours(8),
		isAvailable: false,
		paymentMethods: [
			"GrabPay Credit",
			"VISA"
		]
	},
	{
		time: new Date().addHours(9),
		isAvailable: true,
		paymentMethods: [
			"GrabPay Credit",
			"VISA"
		]
	},
	{
		time: new Date().addHours(10),
		isAvailable: false,
		paymentMethods: [
			"GrabPay Credit",
			"VISA"
		]
	},
	{
		time: new Date().addHours(11),
		isAvailable: true,
		paymentMethods: [
			"GrabPay Credit",
			"VISA"
		]
	},
	{
		time: new Date().addHours(12),
		isAvailable: true,
		paymentMethods: [
			"GrabPay Credit",
			"VISA"
		]
	},
	{
		time: new Date().addHours(13),
		isAvailable: true,
		paymentMethods: [
			"GrabPay Credit",
			"VISA"
		]
	},
	{
		time: new Date().addHours(14),
		isAvailable: true,
		paymentMethods: [
			"GrabPay Credit",
			"VISA"
		]
	},
	{
		time: new Date().addHours(15),
		isAvailable: true,
		paymentMethods: [
			"GrabPay Credit",
			"VISA"
		]
	},
	{
		time: new Date().addHours(16),
		isAvailable: false,
		paymentMethods: [
			"GrabPay Credit",
			"VISA"
		]
	},
	{
		time: new Date().addHours(17),
		isAvailable: true,
		paymentMethods: [
			"GrabPay Credit",
			"VISA"
		]
	},
	{
		time: new Date().addHours(18),
		isAvailable: true,
		paymentMethods: [
			"GrabPay Credit",
			"VISA"
		]
	},
	{
		time: new Date().addHours(19),
		isAvailable: true,
		paymentMethods: [
			"GrabPay Credit",
			"VISA"
		]
	},
	{
		time: new Date().addHours(20),
		isAvailable: true,
		paymentMethods: [
			"GrabPay Credit",
			"VISA"
		]
	},
	{
		time: new Date().addHours(21),
		isAvailable: true,
		paymentMethods: [
			"GrabPay Credit",
			"VISA"
		]
	},
	{
		time: new Date().addHours(22),
		isAvailable: true,
		paymentMethods: [
			"GrabPay Credit",
			"VISA"
		]
	},
	{
		time: new Date().addHours(23),
		isAvailable: true,
		paymentMethods: [
			"GrabPay Credit",
			"VISA"
		]
	}
	
];
const { width, height } = Dimensions.get('window')
class Home extends Component {
constructor() {
  super()
  // Variable Declaration
  this.setPaymentMethod = this.setPaymentMethod.bind(this)
  this._renderFlatlist = this._renderFlatlist.bind(this)
  this._sliderRender = this._sliderRender.bind(this)
  this.bookNowAlert = this.bookNowAlert.bind(this)
  this.inputboxes = this.inputboxes.bind(this)
  this.priceList = this.priceList.bind(this)
  this.state = {
	    isBookNowEnabled : true,
		pickerValue: '',
		cashselect: false,
		creditselect : false,
		visaselect: false,
		pickuploc: '',
		droploc:'',
		paxValue:1,
		bookingtime: '22',
		day: 'today',
		cashtime: '',
		paymentMethod: 'Cash',
		modalVisible:false,
		data:data,
		timeSlots: timeSlots,
  }
}

componentDidMount(){	
	let cd= new Date();
	let ct= cd.getHours();
	for (let obj of hours) {
		if(obj == ct){
			this.setState({cashtime: data[ct]})
		}
	}
	
	let a = this.state.data;
	let i=0
	for (let obj of this.state.data) {
		if(i <= ct){
			a.splice(0,1)
			if(i==23){
				this.setState({data : a})
				alert(this.state.cashtime)
			}
		}
		i=i+1
	}

	AsyncStorage.getItem("paymentMethod").then((value) => {
		if(value){
			this.setState({paymentMethod : value})
		}
	}).done();
}

navigateToPaymentMethod(){
	this.props.navigator.push({name: 'PaymentMethod', index: 0 });
}

_renderFlatlist(item){
	this.setState({bookingtime:item,paymentMethod:item.paymentMethods[0]})
	if(item.paymentMethods.indexOf("Cash") > -1){
		this.setState({isCashDisabled: false})
	}
	else{
		this.setState({isCashDisabled: true})
	}
	if(item.isAvailable == false){
		this.setState({isBookNowEnabled: false})
	}
	else{
		this.setState({isBookNowEnabled: true})
	}
	
}

_sliderRender(item){
	return(
		
	<TouchableOpacity style={(item == this.state.bookingtime)?{backgroundColor:'#00b140',borderRadius:30}:{backgroundColor:'#ffffff'}}
		onPress={() => this._renderFlatlist(item)}>
		<Text style={[{width:width/3,textAlign:'center',height:40,paddingTop:0},(item.isAvailable == false)?{textDecorationLine: 'line-through'}:{color:'#000'}]}>{item.time.getHours()+ ':00'}</Text>
		<Text style={[{width:width/3,textAlign:'center',height:20,paddingTop:0},]}>{item.isAvailable ? item.paymentMethods.indexOf("Cash") > -1 ? "Available" : "Requires GrabPay" : "Sold Out" }</Text>
	</TouchableOpacity>
	)
}

bookNowAlert(){
	this.setState({
		pickerValue: '',
		pickuploc: '',
		droploc:'',
		paxValue:1,
		bookingtime:'22',
		day: 'today',
		paymentMethod: 'Cash'

	})
}

setPaymentMethod(){	
	if(this.state.cashselect){
		this.setState({paymentMethod:'Cash',modalVisible:false})
	}
	if(this.state.creditselect){
		this.setState({paymentMethod:'GrabPay Credit',modalVisible:false})
	}
	if(this.state.visaselect){
		this.setState({paymentMethod:'Visa',modalVisible:false})
	}
}

	inputboxes(){
		return(
			
			<View style={Styles.locationSelectContainer}>
				<View style={Styles.LocationInnerContainer}>
					<View style={Styles.roundDotBox}>							
						<View style={Styles.roundDotBlue}></View>
					</View>
					<TextInput 
						value={this.state.pickuploc}
						style={Styles.LocationInput}
						ref={'PickUpLocation'}
					placeholderTextColor={this.state.usernameError ? "#fff": "#fff"}
					placeholder={this.state.usernameError == "" ? "PickUp Location" : "Enter PickUp Location"} 
						underlineColorAndroid = 'transparent' 
						secureTextEntry={false}
						onChangeText={(val) => this.setState({pickuploc: val})}
						returnKeyType ="next"/
					>
				</View>
				<View style={Styles.LocationInnerContainer}>
					<View style={Styles.roundDotBox}>							
						<View style={Styles.roundDotRed}></View>
					</View>
					<TextInput 
						value={this.state.droploc}
						style={Styles.LocationInput}
						ref={'DropLocation'}
					placeholderTextColor={this.state.usernameError ? "#fff": "#fff"}
					placeholder={this.state.usernameError == "" ? "PickUp Location" : "Enter Drop Location"} 
						underlineColorAndroid = 'transparent' 
						secureTextEntry={false} 
						onChangeText={(val) => this.setState({droploc: val})}
						returnKeyType ="next"/
					>
				</View>
			</View>
		)
	}

	footerRender(){
		return(			
			<View style={Styles.footerContainer}>
				<View style={Styles.footerTotalBox}>
					<View style={Styles.labelDetailContainer}>
						<Text style={Styles.footerText}>Total</Text>
					</View>
					<View style={Styles.LabelValContainer}>
						<Text style={Styles.footerText}>SGD {2+(this.state.paxValue * 6)}</Text>
					</View>								
				</View>	
				<View style={Styles.buttonContainer}>
					<TouchableOpacity disabled = {! this.state.isBookNowEnabled} style={{width:'100%'}} onPress={()=>Alert.alert(
						'',
						'Booking Confirmed',
						[
							{text: 'OK', onPress: () => this.bookNowAlert()},
						],
						{ cancelable: false }
						)}
					>
						<View style={this.state.isBookNowEnabled ? Styles.buttonMainContainer:Styles.buttonMainContainerDisabled }>
							<Text style={Styles.btnText}>BOOK NOW</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		)
	}

	priceList(){
		return(
			<ScrollView>
				<View style={Styles.labelPickerContainer}>
					<View style={Styles.labelContainer}>
						<Text style={Styles.labelText}>Select PickUp Time</Text>
					</View>
					<View style={Styles.PickerContainer}>
						<Picker
							textStyle={{fontSize: 12}}
							style={Styles.PickerContainermain}
							selectedValue={this.state.day}
							onValueChange={(itemValue, itemIndex) => this.setState({day: itemValue})}>
							<Picker.Item label="Today" value="today" />
							<Picker.Item label="Tommorow" value="tomorrow" />
						</Picker>
						{/* <TouchableOpacity style={Styles.pickerTouchableOpacity}>
							<Text style={Styles.pickerText}>Today</Text>
							<Image style={Styles.dropdwnIcon} source={Images.launch} />
						</TouchableOpacity> */}
					</View>
				</View>
				<FlatList
					ref="flatlist"
					showsHorizontalScrollIndicator={false}
					data={this.state.timeSlots}
					keyExtractor={(item) => item}
					getItemLayout={(data, index) => (
						// Max 5 items visibles at once
						{length: Dimensions.get('window').width / 3, offset: Dimensions.get('window').width / 3 * index, index}   
					)}
					style={{marginBottom:30,marginTop:20}}
					horizontal={true}
					// Here is the magic : snap to the center of an item
					snapToAlignment={'center'}  
					// Defines here the interval between to item (basically the width of an item with margins)
					snapToInterval={Dimensions.get('window').width / 3}    
					renderItem={({item}) => this._sliderRender(item)}
				/>
				<View style={Styles.fullBlueunderline}></View>
				<View style={Styles.paymentMethodContainer}>
					<View style={Styles.labelContainer}>
						<Text style={Styles.paymentMethodlabelText}>Payment Methods</Text>
					</View>
					<View style={Styles.PickerContainer}>
						<TouchableOpacity style={Styles.pickerTouchableOpacity} onPress={()=> {
								this.setState({paymentMethod: 'GrabPay Credit', modalVisible:true});
							}}>
							<Text style={Styles.paymentMethodlabelText}>{this.state.paymentMethod}</Text>
							{/* <Image style={Styles.dropdwnIcon} source={Images.launch7} /> */}
						</TouchableOpacity>
					</View>
				</View>
				<View style={Styles.fullBlueunderline}></View>
				<View style={Styles.paymentMethodContainer}>
					<View style={Styles.labelContainer}>
						<Text style={Styles.paymentMethodlabelText}>Number of Pax</Text>
					</View>
					<View style={Styles.paxNumberContainer}>
						<View style={Styles.paxNumberInnerContainer}>
							<TouchableOpacity style={Styles.roundBorderBox} onPress={()=>(this.state.paxValue > 1)?this.setState({paxValue: this.state.paxValue-1}):console.log('can\'t decrement')}>
								<Text style={Styles.roundBoxtext}>-</Text>
							</TouchableOpacity>
							<Text style={Styles.paymentMethodlabelText}>{this.state.paxValue}</Text>								
							<TouchableOpacity style={Styles.roundBorderBox} onPress={()=>(this.state.paxValue < 4)?this.setState({paxValue: this.state.paxValue+1}):console.log('can\'t increment')}>
								<Text style={Styles.roundBoxtext}>+</Text>
							</TouchableOpacity>
						</View>
					</View>						
				</View>		
				<View style={Styles.detailContainer}>
					<View style={Styles.labelDetailContainer}>
						<Text style={Styles.detailText}>Price per Pax</Text>
					</View>
					<View style={Styles.LabelValContainer}>
						<Text style={Styles.detailText}>SGD 6</Text>
					</View>								
				</View>	
				<View style={Styles.detailContainer}>
					<View style={Styles.labelDetailContainer}>
						<Text style={Styles.detailText}>Pax Amount</Text>
					</View>
					<View style={Styles.LabelValContainer}>
						<Text style={Styles.detailText}>{this.state.paxValue}</Text>
					</View>								
				</View>	
				<View style={Styles.detailContainer}>
					<View style={Styles.labelDetailContainer}>
						<Text style={Styles.detailText}>Extra Charge For Cash Payment</Text>
					</View>
					<View style={Styles.LabelValContainer}>
						<Text style={Styles.detailText}>SGD 2</Text>
					</View>								
				</View>	
			</ScrollView>
		)
	}

	ModalRender(){
		return(
			<Modal
				visible={this.state.modalVisible}
				animationType={'slide'}
				onRequestClose={() => this.closeModal()}
				>
				<View style={{flex:1,backgroundColor:'#eaeff2'}}>
				<View style={HeaderStyles.headerContainer}>
					<View style={HeaderStyles.sideContainer}>
						<TouchableOpacity onPress={()=>this.setState({modalVisible:false})}>
							<Image style={HeaderStyles.backIcon} source={Images.launch} />
						</TouchableOpacity>
					</View>
					
					<View style={HeaderStyles.mainContainer}>
						<Text style={HeaderStyles.headerTitle}>Choose Payment Method</Text>
					</View>
				</View>
			<TouchableOpacity disabled={this.state.isCashDisabled} style={this.state.isCashDisabled? Styles.hidden : ModalStyles.TypexBox} onPress={()=>this.setState({cashselect : !this.state.cashselect, visaselect :false,creditselect :false })}>
				<View style={{width:'100%', flexDirection:'row'}}>
					<Text style={ModalStyles.BoxLabel}>Cash</Text>
					<Text style={ModalStyles.BoxVal}>SGD 8</Text>
					<View style={{width:'20%',alignItems:'center'}}>
						{this.state.cashselect? <Image style={{height:14,resizeMode:'contain'}} source={Images.launch8} /> :<View></View>} 
					</View>					
				</View>
				<Text style={ModalStyles.PaxVal}>(1 Pax)</Text>
			</TouchableOpacity>
			<Text style={ModalStyles.savemoneytext}>Save P20 for Cashless Bookings</Text>
			<TouchableOpacity style={[ModalStyles.TypexBox,{marginTop:1}]} onPress={()=>this.setState({creditselect : !this.state.creditselect, visaselect :false, cashselect :false})}>
				<View style={{width:'100%', flexDirection:'row'}}>
					<Text style={ModalStyles.BoxLabel}>GrabPay Credit</Text>
					<Text style={ModalStyles.BoxVal}>SGD 8</Text>
					<View style={{width:'20%',alignItems:'center'}}>
						{this.state.creditselect? <Image style={{height:14,resizeMode:'contain'}} source={Images.launch8} /> :<View></View>} 
					</View>					
				</View>
				<Text style={ModalStyles.PaxVal}>(1 Pax)</Text>
			</TouchableOpacity>
			<TouchableOpacity style={[ModalStyles.TypexBox,{marginTop:1}]} onPress={()=>this.setState({visaselect : !this.state.visaselect,creditselect :false, cashselect :false})}>
				<View style={{width:'100%', flexDirection:'row'}}>
					<Text style={ModalStyles.BoxLabel}>Visa</Text>
					<Text style={ModalStyles.BoxVal}>SGD 8</Text>
					<View style={{width:'20%',alignItems:'center'}}>
						{this.state.visaselect? <Image style={{height:14,resizeMode:'contain'}} source={Images.launch8} /> :<View></View>} 
					</View>					
				</View>
				<Text style={ModalStyles.PaxVal}>(1 Pax)</Text>
			</TouchableOpacity>
			<View style={ModalStyles.buttonContainer}>
				<TouchableOpacity style={{width:'100%'}} onPress={()=>this.setPaymentMethod()}>
					<View style={ModalStyles.buttonMainContainer}>
						<Text style={ModalStyles.btnText}>Add Payment Method</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
				</Modal>
		)
	}

// Default render method and create UI for Login Screen
render() {	
	
    return (
			<View style={{flex:1}}>
				<Header method={this.props} title="Detail" />
				{this.inputboxes()}
				<View style={Styles.ScrollViewHeight}>
					{this.priceList()}
				</View>
				{this.footerRender()}
				{this.ModalRender()}
			</View>
    )
  }
}

export default Home
