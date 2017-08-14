import {combineReducers} from 'redux'
import counter from './counter'
import hello from './hello'

export default combineReducers({
    counter,
    hello,
});