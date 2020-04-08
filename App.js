import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Home, Chat} from './components';
import {Router, Stack, Scene} from "react-native-router-flux";

export default class App extends React.Component {
    render() {
        return (
            // <React.Fragment>
            //     <Chat/>
            //     <Home/>
            // </React.Fragment>

            <Router>
                <Stack key="mainStack">
                    <Scene key="home" component={Home} title="Home"/>
                    <Scene key="chat" component={Chat} title="Chat"/>
                </Stack>
            </Router>
        );
    }
}