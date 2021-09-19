import React from 'react';
import { View, Text, Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector,useDispatch } from 'react-redux';
import JobCard from '../../components/JobCard';

const Favorities = () =>{
    const fav_data=useSelector(state => state.favList);

    const renderFav = ({item}) => <JobCard job={item} />

    return(
        <View>
            <Text>Favoriler</Text>
           <FlatList 
                data={fav_data}
                renderItem={renderFav}
            />
        </View>
    );
};

export default Favorities;
