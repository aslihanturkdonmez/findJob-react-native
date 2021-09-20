import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { useSelector } from 'react-redux';

import styles from './JobCard.style';
import FavIcon from '../FavIcon';


const JobCard = ({job,onPressJob}) =>{

    const favFlag=useSelector(state => state.favList.find(s=>s.id==job.id));

    return(
        <TouchableWithoutFeedback onPress={()=> onPressJob(job.id, job.name)}>
            <View style={styles.container}>
                <View style={styles.header_container}>
                    <Text style={styles.title}>{job.name}</Text>
                    <View style={styles.icon_container} pointerEvents="box-none">
                        {favFlag ?
                        <FavIcon  name_icon="favorite" size={25} color="#D33A58" data={job} method={false}/>
                        :
                        <FavIcon name_icon="favorite-border" size={25} color="#D33A58" data={job} method={true}/>
                        }
                    </View>
                </View>
                <Text style={styles.comp}>{job.company.name}</Text>
                <View style={styles.area_container}>
                    <Text style={styles.level}>{job.levels[0].name}</Text>
                    {job.locations[0] &&
                        <Text style={styles.area}>{job.locations.map(loc => loc.name)}</Text>
                    }
                </View>
            </View>
        </TouchableWithoutFeedback>

    );
};

export default JobCard;
