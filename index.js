//Import a library
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

//Create component
const App = () => {
    return <Header />
};

//Render it to the device
AppRegistry.registerComponent('albums', () => App); 