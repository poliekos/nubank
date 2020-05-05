import React from 'react';
import { Text, View } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';

import styles from './styles';

export default function Tab(props) {

    return (
        <View style={styles.container}>
            <Icon name={props.icon} size={24} color="#FFFFFF" />
            <Text style={styles.text}>{props.name}</Text>
        </View>
    );

}