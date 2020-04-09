import React from 'react';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import {Home, Chat} from './components';
import {Router, Stack, Scene} from "react-native-router-flux";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Stack key="mainStack">
                        <Scene key="home" component={Home} title="Home"/>
                        <Scene key="chat" component={Chat} title="Chat"/>
                    </Stack>
                </Router>
            </Provider>
        );
    }
}