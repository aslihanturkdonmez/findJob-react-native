import React from 'react';
import { View,Text, Dimensions, ActivityIndicator, ScrollView, Button, TouchableOpacity } from 'react-native';
import styles from './Detail.style';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import RenderHTML from 'react-native-render-html';

const Detail = ({route}) =>{
    const id=route.params.id;
    const {data, loading, error}=useFetch(Config.JOB_DETAILS_API_URL+id);

    if(loading){
        return <ActivityIndicator size="large" />
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
                <TouchableOpacity>
                    <Text style={styles.button_text}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style={styles.button_text}>Favorite Job</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Detail;
