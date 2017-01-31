import React, {Component} from "react";
import {ListView, StyleSheet, Text, View, Image} from "react-native";

export default class TweetView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tweet: props.tweet
        };
    }

    render() {
        return (
            <View style={styles.row}>
                <Image style={styles.iconContainer}
                    source={{uri: this.state.tweet.user.profile_background_image_url_https}}
                />
                <View style={styles.title}>
                    <Text>{this.state.tweet.text}</Text>
                </View>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    row: {
        borderColor: '#f1f1f1',
        borderBottomWidth: 1,
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
        paddingTop: 20,
        paddingBottom: 20,
    },
    iconContainer: {
        alignItems: 'center',
        backgroundColor: '#004bb4',
        borderColor: '#004bb4',
        borderRadius: 25,
        borderWidth: 0.5,
        justifyContent: 'center',
        height: 50,
        width: 50,
    },
    title: {
    },
});