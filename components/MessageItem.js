import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import moment from 'moment'

export class MessageItem extends React.Component {

    render() {
        const {message, user, created_at} = this.props;
        const {content} = message;
        const isAuthor = user === message.author;
        return (
            <View style={[styles.root, {
                alignSelf: isAuthor ? "flex-end" : "flex-start",
                backgroundColor: isAuthor ? "#55F" : "#CCC",
            }]}>
                <Text style={styles.author}>{message.author}</Text>
                <Text style={{color: isAuthor ? 'white' : 'black'}}>{content}</Text>
                <Text style={styles.timestamp}>{moment(created_at).fromNow()}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        padding: 8,
        backgroundColor: '#CCC',
        borderRadius: 8,
        margin: 8,
        maxWidth: '70%'
    },
    timestamp: {fontStyle: 'italic', fontSize: 10, textAlign: 'right'},
    author: {fontStyle: 'italic', fontSize: 11}
});