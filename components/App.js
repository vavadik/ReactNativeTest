import React, {Component} from 'react';
import {
    View
} from 'react-native';
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import CounterApp from '../containers/CounterApp'
import counterApp from '../reducers'

export default class App extends Component {
    render() {
        let store = createStore(counterApp);
        return (
            <View>
                <Provider store={store}>
                    <CounterApp/>
                </Provider>
            </View>
        );
    }
}