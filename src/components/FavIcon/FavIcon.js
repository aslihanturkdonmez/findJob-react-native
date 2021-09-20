import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux'
import styles from './FavIcon.style';


const FavIcon = ({name_icon, color, size, method, data, title}) =>{
    const dispatch = useDispatch();
    const {id, name, company, locations, levels}=data;
    
    const fav = ()=>{
        if(method==true){
                dispatch({
                    type:'ADD_FAV', 
                    payload:{
                        id, 
                        name, 
                        company, 
                        locations, 
                        levels,
                    }})
            }else{
                dispatch({type:'REMOVE_FAV', payload:id})
            }
    }
    
    return(
        <TouchableOpacity onPress={fav} style={styles.container}>
            <Icon name={name_icon} size={size} color={color} />
            {title &&
                <Text style={styles.title}>{title}</Text>
            }
        </TouchableOpacity>
    )
};

export default FavIcon;
