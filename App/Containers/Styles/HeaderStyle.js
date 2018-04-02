import {Dimensions, Platform} from 'react-native'

const { width, height } = Dimensions.get('window')

export default {
    headerContainer:{
        height:55,
        width:'100%',
        backgroundColor:'#00b140',
        elevation:2,
        shadowColor: '#1b8c05',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        flexDirection:'row'
    },

    backIcon:{
        resizeMode:'contain',
        height:15,       
    },

    sideContainer:{
        width:'20%',  
        justifyContent:'center'     
    },

    mainContainer:{
        width:'60%',   
        justifyContent:'center'    
    },

    headerTitle:{
        color:'#fff',
        fontSize:16,
        textAlign:'center'
    }
}