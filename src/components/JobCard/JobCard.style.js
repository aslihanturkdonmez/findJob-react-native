import { StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

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
        flex:1,
        marginRight:8,
    },
    comp:{
        marginTop:5,
    },
    area:{
        backgroundColor:'#774F9E',
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
        textAlign:'left',
        color:'#CE8CD1',
        fontWeight:'bold',
        fontSize:16,
    },
    area_container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:15,
        marginRight:3,
    },

    header_container:{
        flexDirection:'row',
        justifyContent:'space-between',
    },

    icon_container:{
        borderWidth:1,
        borderRadius:30,
        padding:6,
        alignSelf:'flex-start',
        borderColor:'#e0e0e0',
    },
})