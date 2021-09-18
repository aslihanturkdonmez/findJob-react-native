import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1,
    },
    header_container:{
        marginLeft:8,
    },
    name:{
        fontWeight:'bold',
        fontSize:25,
        marginTop:4,
    },
    loc_title:{
        marginTop:8,
        fontSize:16,
        fontWeight:'bold',
        color:'red',
    },
    location:{
        color:'black',
    },
    level_title:{
        marginTop:8,
        fontSize:16,
        fontWeight:'bold',
        color:'red',
    },
    level:{
        color:'black',
    },
    content_title:{
        marginTop:4,
        textAlign:'center',
        fontWeight:'bold',
        fontSize:20,
    },
    scroll:{
        backgroundColor:'white',
        marginTop:15,
        padding:7,
    },
    button_container:{
        flexDirection:'row',
        justifyContent:'space-around',
        padding: 10,
    },
    button_text:{
        fontSize:20,
    }

})