import React from "react";
import { TouchableOpacity, Text} from 'react-native'
import {styles} from './styles';

const TaskItem = ({item, onHandleSelected}) => {
    return (
        <TouchableOpacity style={[styles.listItemContainer]} onPress={() => onHandleSelected(item)}>   
        <Text style={styles.listItemTitle}>'{item.value}'</Text>
        </TouchableOpacity>
    )
}

export default TaskItem;