import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {MessageItem} from "./MessageItem";

const messages = [
    {
        content: "Han, Maské et Maître Grims",
        author: 'Maské',
        created_at: new Date()
    },
    {
        content: "Hou Yeah",
        author: 'Maitre Grims',
        created_at: new Date()
    },
    {
        content: "De retour parce qu'on revient et ainsi de suite",
        author: 'Maské',
        created_at: new Date()
    },
    {
        content: "Ho Ho",
        author: 'Maitre Grims',
        created_at: new Date()
    },
    {
        content: "Y'a trop de trucs qui m'énervent sur Terre",
        author: 'Maské',
        created_at: new Date()
    },
    {
        content: "Les chômeurs sans travail, les orphelins sans père",
        author: 'Maské',
        created_at: new Date()
    },
    {
        content: "Plus rien ne tourne rond et personne veut l'admettre",
        author: 'Maské',
        created_at: new Date()
    },
    {
        content: "Et ça m'vénère, dis leur Maître",
        author: 'Maské',
        created_at: new Date()
    },
    {
        content: "Ça m'vénère ! Quand je marche en chaussettes dans la salle de bains",
        author: 'Maitre Grims',
        created_at: new Date()
    },
    {
        content: "Et qu'y a de l'eau partout j'fais ça tout les matins",
        author: 'Maitre Grims',
        created_at: new Date()
    },
    {
        content: "Je tire mal mon rideau qu'y a des motifs indiens",
        author: 'Maitre Grims',
        created_at: new Date()
    },
    {
        content: "Oh ça m'vénère, oui ça m'vénère !",
        author: 'Maitre Grims',
        created_at: new Date()
    },
    {
        content: "Okay D’accord, j’te comprends mais j’pensais pas à ça",
        author: 'Maské',
        created_at: new Date()
    },
    {
        content: "Plus aux problèmes de la jeunesse tu vois les trucs comme ça",
        author: 'Maské',
        created_at: new Date()
    },
]

export class Chat extends React.Component {
    render() {
        const {user} = this.props;
        return (
            <View style={styles.container}>
                <FlatList
                    data={messages.map((message, i) => ({...message, key: `message_${i}`}))}
                    renderItem={({item: message}) =>
                        <MessageItem user={user} message={message} created_at={message.created_at}/>
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: '#fff'},
    h1: {fontSize: 20},
    textRed: {color: 'red'},
});