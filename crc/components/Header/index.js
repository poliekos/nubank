import React from 'react';
import { Text, View } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';
import styled from 'styled-components';
import {styles,Container,Logo,Title } from './styles';
import logo from '../../../assets/Nubank_Logo.png';
import { Container } from '../../pages/Main/styles';

export default function Header() {

    return (
        <Container>
            <Top>
                <Logo />
                <Title>Jonathan</Title>
            </Top>
            <Icon name="keyboard-arrow-down" size={20} color="#FFFFFF" />
        </Container>
    );

}