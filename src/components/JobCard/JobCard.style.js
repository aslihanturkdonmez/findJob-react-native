import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        margin:8,
        borderWidth:1,
        padding:5,
        borderRadius:8,
        backgroundColor:'white',
    },
    title:{
        fontWeight:'bold',
        fontSize:18,


    },
    comp:{
        marginTop:5,
    },
    area:{
        backgroundColor:'red',
        marginTop:5,
        borderRadius:15,
        paddingHorizontal:10,
        paddingVertical:3,
        fontSize:16,
        color:'white',
        fontWeight:'bold',

    },
    level:{
        marginTop:5,
        textAlign:'right',
        color:'red'
    },
    area_container:{
        flex:1,
        flexDirection:'row',
        
    }
})