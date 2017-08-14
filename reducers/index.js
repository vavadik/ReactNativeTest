import {combineReducers} from 'redux'
import counter from './counter'
import hello from './hello'
import userList from './userList'

export default combineReducers({
    counter,
    hello,
    userList,
});