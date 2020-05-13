import React from "react";
import { View, Text } from "react-native";
import styled from 'styled-components';
import {styles,Container,Content,Card,CardHeader,CardFooter,CardContent,Title,Description,Anotattion} from './styles';
import Header from "../../components/Header";
import Tabs from "../../components/Tabs";
import Icon from "@expo/vector-icons/MaterialIcons";


export const Texto = styled.Text`
	color: ${prop => prop.cor};
	font-size: ${prop => prop.tamanho + 'px'};
	text-decoration: underline;
 `;
export default function Main() {
	return (
		<Container>
			<Header />
			<Content>
				<Card>
					<Texto cor={'#b4b4'} tamanho={12}>Testando componente</Texto>
					<CardHeader>
						<Icon name="attach-money" size={28} color="#666" />
						<Icon name="visibility-off" size={28} color="#666" />
					</CardHeader>
					<CardContent>
						<Title>Saldo disponível</Title>
						<Description>R$ 6.666.666,66</Description>
					</CardContent>
					<CardFooter>
						<Anotattion>
							Transfência de R$66,66 recebida de José Estalo hoje as 11:11h
						</Anotattion>
					</CardFooter>
				</Card>
			</Content>
			<Tabs />
		</Container>
	);
}