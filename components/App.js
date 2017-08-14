import React, {Component} from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import {Provider} from 'react-redux'
import {createStore, compose, applyMiddleware} from 'redux'
import {
    TabNavigator,
} from 'react-navigation'
import {persistStore, autoRehydrate} from 'redux-persist'
import {AsyncStorage} from 'react-native'

import CounterApp from '../containers/CounterApp'
import HelloApp from '../containers/HelloApp'
import UserListApp from '../containers/UserListApp'
import reducers from '../reducers'
import Colors from '../styles/Colors'

export default class App extends Component {
    render() {
        const logger = store => next => action => {
            console.log('dispatching', action);
            let result = next(action);
            console.log('next state', store.getState());
            return result;
        };
        let store = createStore(
            reducers,
            compose(
                applyMiddleware(logger),
                autoRehydrate()
            )
        );
        persistStore(store, {storage: AsyncStorage});
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
        backgroundColor: Colors.gray,
    },
});

const NavigationApp = TabNavigator({
    UserList: {screen: UserListApp},
    Counter: {screen: CounterApp},
    Hello: {screen: HelloApp},
}, {
    tabBarOptions: {
        indicatorStyle: {
            backgroundColor: Colors.secondary,
        },
        activeTintColor: Colors.primaryText,
        style: {
            backgroundColor: Colors.primaryDark,
        },
    },
});
