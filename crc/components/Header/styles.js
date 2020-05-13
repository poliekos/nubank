import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components';

export const Container = styled.View`
    align-items: center;
    padding-top: 40px;
    padding-bottom: 0px;
    padding-horizontal: 0px;
`
export const Top = styled.View`
        flex-direction: row;
        align-items: center;
        margin-bottom: 10px;

`
export const Logo = styled.Image`
`
export const Title = styled.Text`
    font-size: 18px;
    color: #FFFFFF;
    font-weight: bold;
    margin-left: 8px;
`
export default styles;