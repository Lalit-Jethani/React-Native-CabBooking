import {Dimensions, Platform} from 'react-native'

const { width, height } = Dimensions.get('window')

export default {
    TypexBox:{
        height:75,
        width:'100%',
        backgroundColor:'#ffffff',
        elevation:2,
        alignItems:'center',
        justifyContent:'center',
        padding:10
    },

    BoxLabel:{
        width:'40%',
        fontSize:14,
        color:'#363a45'
    },

    BoxVal:{
        fontSize:14,
        color:'#363a45',
        fontWeight:'bold',
        width:'45%',
        textAlign:'right'
    },

    PaxVal:{
        fontSize:14,
        color:'#969aa3',
        width:'85%',
        textAlign:'right',
        alignSelf:'flex-start'
    },

    savemoneytext:{    
        fontSize:14,
        color:'#7f7f7f',
        marginTop:35,
        paddingLeft:10
    },
    
    buttonContainer:{
        marginTop:20,
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

    btnText:{
        fontSize:14,
        color:'#ffffff',
        fontWeight:'bold',
    }
}