import React, {Component} from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {StackNavigator} from 'react-navigation'

import CounterApp from '../containers/CounterApp'
import HelloApp from '../containers/HelloApp'
import reducers from '../reducers'

export default class App extends Component {
    render() {
        let store = createStore(reducers);
        return (
            <View style={styles.view}>
                <Provider store={store}>
                    <NavigationApp/>
                </Provider>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'skyblue',
    },
});

const NavigationApp = StackNavigator({
    Counter: {screen: CounterApp},
    Hello: {screen: HelloApp},
});