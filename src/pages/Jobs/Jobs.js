import React, {useState} from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import Config from 'react-native-config';
import JobCard from '../../components/JobCard';
import useFetch from '../../hooks/useFetch';

const Jobs = ({navigation}) =>{
    const [page, setPage]=useState(1);
    const {data, loading, error}=useFetch(Config.JOBS_API_URL+page);

    if(loading){
        return <ActivityIndicator size={30} />
    }

    if(error){
        <Text>{error}</Text>
    }

    const showDetail = (id, name) =>{
        navigation.navigate('Detail',{id:id, name:name});
    }
    
    const renderJob = ({item}) => <JobCard job={item} onPressJob={showDetail}/>
    return (
        <View style={styles.container}>
            <FlatList 
                data={data.results}
                renderItem={renderJob}
            />
        </View>
    );
};

export default Jobs;

const styles=StyleSheet.create({
    container:{
        flex:1,
    }
})
