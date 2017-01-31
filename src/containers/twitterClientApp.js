import React, {Component} from "react";
import {AppRegistry, ListView, Text, View, Button} from "react-native";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as counterActions from "../actions/couterActions";
import TweetView from "../components/tweetView";


class TwitterClientApp extends Component {


    // Initialize the hardcoded data
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.text !== r2.text});
        this.state = {
            dataSource: ds.cloneWithRows([])
        };
    }

    componentWillMount(){
        this.onLoad();
    }

    onLoad = async () => {
        this.setState({ dataSource: this.state.dataSource.cloneWithRows([])});

        const response = await
            fetch('https://twitter-tags-server.cfapps.io/v1/tweets', {
                method: 'GET',
            });

        const result = await response.json();
        const data = { dataSource: this.state.dataSource.cloneWithRows(result)};
        this.setState(data);
    };

    render() {
        return (
            <View style={{flex: 1, paddingTop: 22}}>
                <Button
                    onPress={this.onLoad.bind(this)}
                    title="Refresh"
                    color="#004bb4"
                />
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <TweetView tweet={rowData}/>}
                />
            </View>
        );
    }
}


export default connect(state => ({
        state: state.counter
    }),
    (dispatch) => ({
        actions: bindActionCreators(counterActions, dispatch)
    })
)(TwitterClientApp);
