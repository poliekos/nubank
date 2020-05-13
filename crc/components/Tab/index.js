import React from 'react';
import { Text, View } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';

import {styles,Container,Text} from './styles';

export default function Tab(props) {

    return (
        <Container>
            <Icon name={props.icon} size={24} color="#FFFFFF" />
            <Text>{props.name}</Text>
        </Container>
    );

}