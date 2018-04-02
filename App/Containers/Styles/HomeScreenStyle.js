import {Dimensions, Platform} from 'react-native'

const { width, height } = Dimensions.get('window')

export default {

    locationSelectContainer:{
        height:100,
        width:'100%',
        backgroundColor:'#00b140',
        padding:10
    },

    LocationInnerContainer:{
        height:40,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },

    roundDotBox:{
      width:'7%',
      alignItems:'center',
      justifyContent:'center'
    },

    roundDotBlue:{
      width:5,
      height:5,
      borderRadius:2.5,
      backgroundColor:'blue'
    },

    roundDotRed:{
      width:5,
      height:5,
      borderRadius:2.5,
      backgroundColor:'#e95e41'
    },

    LocationInput:{
      color:'#fff',
      width:'93%',
      fontSize:14
    },

    ScrollViewHeight:{
      height:height-285
    },

    labelPickerContainer:{
      height:34,
      width:'100%',
      flexDirection:'row'
    },

    labelContainer:{
      justifyContent:'center',
      width:'50%',
      padding:10
    },

    labelText:{
      fontSize:12,
      fontWeight:'bold',
      color:'#7f7f7f'
    },

    PickerContainer:{      
      justifyContent:'center',
      width:'50%',
      padding:10,
      alignItems:'flex-end'
    },

    PickerContainermain:{      
      justifyContent:'center',
      width:'60%',
      alignItems:'flex-end',
    },

    pickerText:{
      fontSize:12,
      color:'#777777'
    },

    pickerTouchableOpacity:{
      flexDirection:'row',
      alignItems:'center'
    },

    dropdwnIcon:{
      width:12,
      resizeMode:'contain',
      marginLeft:6,
    },

    fullBlueunderline:{
      width:'100%',
      borderWidth:0.5,
      borderColor:'#9cbecc'
    },

    paymentMethodContainer:{
      width:'100%',
      height:55,
      alignItems:'center',
      flexDirection:'row',
    },

    paymentMethodlabelText:{
      fontSize:14,
      color:'#7f7f7f'
    },

    paxNumberContainer:{   
      justifyContent:'center',   
      width:'50%',
      padding:10,
      alignItems:'flex-end',
    },

    paxNumberInnerContainer:{
      flexDirection:'row',      
    },

    roundBorderBox:{
      width:20,
      height:20,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#dfecf5',
      borderRadius:10,
      marginLeft:20,
      marginRight:20
    },

    roundBoxtext:{
      fontSize:16,
      fontWeight:'bold'
    },

    detailContainer:{
      width:'100%',
      flexDirection:'row'
    },

    labelDetailContainer:{
      justifyContent:'center',
      width:'75%',
      padding:10
    },

    LabelValContainer:{
      justifyContent:'center',
      width:'25%',
      padding:10,
      alignItems:'flex-end'
    },

    detailText:{
      fontSize:14,
      color:'#969aa3'      
    },

    footerContainer:{
      height:130,
      width:'100%',
      elevation:2,
      shadowColor: '#1b8c05',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 1,
      borderWidth:0.3,
      borderColor:'#9cbecc',
      backgroundColor:'#fff'
    },

    footerTotalBox:{
      width:'100%',
      flexDirection:'row',
      height:45,
    },

    footerText:{
      fontSize:16,
      color:'#363a45',
      fontWeight:'bold',
    },

    buttonContainer:{
      height:60,
      width:'100%',
      alignItems:'center',
      justifyContent:'center',
      padding:10
    },

    buttonMainContainer:{
      height:40,
      width:'100%',      
      backgroundColor:'#00b140',
      alignItems:'center',
      justifyContent:'center'
    },
    hidden: {display: "none", backgroundColor: "red"},
    buttonMainContainerDisabled: {
      height:40,
      width:'100%',      
      backgroundColor:'#555',
      alignItems:'center',
      justifyContent:'center'
    },

    btnText:{
      fontSize:14,
      color:'#ffffff',
      fontWeight:'bold',
    }
}
