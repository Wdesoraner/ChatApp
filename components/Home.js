import React from 'react';
import {connect} from 'react-redux';
import {Text, TextInput, View, StyleSheet, Button} from 'react-native';
import {Actions} from 'react-native-router-flux'
import {chatActions} from "../actions";

@connect()
export class Home extends React.Component {

    state = {
        user: 'Maské',
        room: "Ca m'vénère"
    }
    handleUserChange = user => {
        this.setState({user});
    }
    handleRoomChange = room => {
        this.setState({room});
    }

    handleChatPress = e => {
        const {dispatch} = this.props
        const {user, room} = this.state;
        dispatch(chatActions.join(user, room))
        Actions.chat({title: `Salon "${room || "Général"}"`});

    }

    render() {
        const {user, room} = this.state;
        return (
            <View style={styles.container}>
                <Text style={[styles.h1, styles.big]}>OUUUH YEAH !</Text>
                <TextInput
                    style={[styles.input]}
                    placeholder="Nom d'utilisateur"
                    value={user}
                    onChangeText={this.handleUserChange}
                />
                <Text style={[styles.label]}>Yohoooo</Text>
                <TextInput
                    style={[styles.input]}
                    placeholder="Salon de chat"
                    value={room}
                    onChangeText={this.handleRoomChange}
                />
                <Button
                    title="Go to chat"
                    onPress={this.handleChatPress}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CCC',
        alignItems: 'center',
        justifyContent: 'center',
    },
    h1: {
        fontSize: 16,
        color: 'red'
    },
    big: {
        fontSize: 20,
        color: 'blue'
    },
    label: {
        marginTop: 16,
        textAlign: 'left',
    },
    input: {
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'red',
        margin: 8,
        padding: 4,
        width: '98%'
    }
});