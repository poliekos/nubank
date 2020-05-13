import React from 'react';
import Routes from './crc/routes';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#8b10ae'/>
      <Routes />
    </>
  );
}


