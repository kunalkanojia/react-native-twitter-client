import React, {Component} from "react";
import {Navigator} from "react-native";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import * as reducers from "../reducers";
import TwitterClientApp from "./twitterClientApp";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <TwitterClientApp />
            </Provider>
        )
    }
}
