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
import UserListApp from '../containers/UserListApp'
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
        backgroundColor: '#DBE9EE',
    },
});

const NavigationApp = TabNavigator({
    Counter: {screen: CounterApp},
    Hello: {screen: HelloApp},
    UserList: {screen: UserListApp},
}, {
    tabBarOptions: {
        activeTintColor: '#DBE9EE',
        inactiveBackgroundColor: '#114B5F',
        activeBackgroundColor: '#1C7293',
        style: {
            backgroundColor: '#1C7293',
        },
    },
});
