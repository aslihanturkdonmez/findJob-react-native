import React from 'react';
import { View, Text, Alert, FlatList, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import JobCard from '../../components/JobCard';
import styles from './Favorities.style';

const Favorities = ({navigation}) =>{
    const fav_data=useSelector(state => state.favList);

    const goJobs = () => navigation.navigate('JobsPage');
    const renderFav = ({item}) => <JobCard job={item} navigation={navigation}/>

    return(
        fav_data.length!=0 ?
            <View style={styles.containerList}>
                <FlatList 
                    data={fav_data}
                    renderItem={renderFav}
                />
            </View>
            :
            <View style={styles.containerButton}>
                <Text style={styles.text}>You don't have any favorities</Text>
                <TouchableOpacity style={styles.button} onPress={goJobs}>
                    <Text style={styles.button_desc}>Go to Jobs Page</Text>
                </TouchableOpacity>
            </View>
    );
};

export default Favorities;
