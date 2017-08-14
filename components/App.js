import React, {Component} from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {
    TabNavigator,
} from 'react-navigation'

import CounterApp from '../containers/CounterApp'
import HelloApp from '../containers/HelloApp'
import reducers from '../reducers'

export default class App extends Component {
    render() {
        let store = createStore(reducers);
        return (
            <Provider store={store}>
                <View style={styles.view}>
                    <NavigationApp/>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'skyblue',
    },
});

const NavigationApp = TabNavigator({
    Counter: {screen: CounterApp},
    Hello: {screen: HelloApp},
}, {
    tabBarOptions: {
        activeTintColor: '#e91e63',
        tabBarPosition: 'bottom',
    },
    tabBarPosition: 'bottom',
});
