import React from 'react';
import { View } from 'react-native';

import {styles,Container,TabsContainer} from './styles';
import { ScrollView } from 'react-native-gesture-handler';

import Tab from '../Tab';

export default function Tabs() {

    return (
        <Container>
            <ScrollView horizontal={true} 
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={TabsContainer}>
                <Tab name="Indicar amigos" icon="person-add" />
                <Tab name="Cobrar" icon="chat-bubble-outline" />
                <Tab name="Depositar" icon="arrow-downward" />
                <Tab name="Transferir" icon="arrow-upward" />
                <Tab name="Bloquear cartão" icon="lock" />
            </ScrollView>
        </Container>
    );

}