import React from 'react';
import { View, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import styles from './JobCard.style';

const JobCard = ({job,onPressJob}) =>{
    return(
        <TouchableWithoutFeedback onPress={()=> onPressJob(job.id, job.name)}>
            <View style={styles.container}>
                <Text style={styles.title}>{job.name}</Text>
                <Text style={styles.comp}>{job.company.name}</Text>
                <View style={styles.area_container}>
                    <Text style={styles.area}>{job.locations[0].name} </Text>
                    {job.locations[0].sort_name && <Text>,{job.locations[0].sort_name} </Text> }
                </View>
                <Text style={styles.level}>{job.levels[0].name}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default JobCard;
