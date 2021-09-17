import React, {useState} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Config from 'react-native-config';
import JobCard from '../../components/JobCard';
import useFetch from '../../hooks/useFetch';

const Jobs = () =>{
    const [loadMoreButton, setLoadMoreButton]=useState(1);
    const {data, loading, error}=useFetch(Config.JOBS_API_URL+loadMoreButton);
    
    const renderJob = ({item}) => <JobCard job={item} />
    return (
        <View style={styles.container}>
            <Text>Jobsss</Text>
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
