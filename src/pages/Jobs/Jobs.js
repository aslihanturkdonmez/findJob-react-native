import React, {useState} from 'react';
import { FlatList, View} from 'react-native';
import Config from 'react-native-config';
import JobCard from '../../components/JobCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import styles from './Jobs.style';

const Jobs = ({navigation}) =>{
    const [page, setPage]=useState(1);
    const {data, loading, error}=useFetch(Config.JOBS_API_URL+page);

    if(loading){
        return <Loading />
    }

    if(error){
        return <Error />
    }

    const renderJob = ({item}) => <JobCard job={item} navigation={navigation}/>
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
