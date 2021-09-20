import React from 'react';
import { View,Text, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import styles from './Detail.style';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import RenderHTML from 'react-native-render-html';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import FavIcon from '../../components/FavIcon';

const Detail = ({route}) =>{
    const post_id=route.params.id;
    const {data, loading, error}=useFetch(Config.JOB_DETAILS_API_URL+post_id);
    const {id}=data;
    const favFlag=useSelector(state => state.favList.find(s=>s.id==id));
    
    //const dispatch = useDispatch();
    /* console.log(data);
    const addFav = () =>{
        dispatch({
            type:'ADD_FAV', 
            payload:{
                id, 
                name, 
                company, 
                locations, 
                levels,
            }})
    }
    const removeFav = () =>{
        dispatch({type:'REMOVE_FAV', payload:data.id})
    } */

    if(loading){
        return <Loading />
    }

    if(error){
        return <Error />
    }
    return (
        <View style={styles.container}>
            <View style={styles.header_container}>
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.loc_title}>Locations:
                    <Text style={styles.location}> {data.locations && data.locations[0].name}</Text>
                </Text>
                <Text style={styles.level_title}>Job Level:
                    <Text style={styles.level}> {data.levels && data.levels[0].name}</Text>
                </Text>
            </View>
            <Text style={styles.content_title}>Job Detail</Text>
            
            <ScrollView style={styles.scroll}>
                <RenderHTML 
                    source={{html: data.contents}}
                    contentWidth={Dimensions.get('window').width}
                />
            </ScrollView>
            <View style={styles.button_container}>
                <View style={styles.button}>
                    <TouchableOpacity>
                        <View style={styles.submit_container}>
                            <Icon name="launch" size={27} color="#D33A58"  />
                            <Text style={styles.button_text}>Submit</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {!favFlag ?
                <View style={styles.button}>
                    <FavIcon 
                        name_icon="favorite-border" 
                        size={27} 
                        color="#D33A58" 
                        data={data} 
                        method={true}
                        title="Favorite Job"
                    />
                </View>
                :
                <View style={styles.button}>
                    <FavIcon 
                        style={styles.button} 
                        name_icon="favorite" 
                        size={27} 
                        color="#D33A58" 
                        data={data} 
                        method={false}
                        title="Remove Fav"
                    />
                </View>
                }
                
            </View>
        </View>
    );
};

export default Detail;
