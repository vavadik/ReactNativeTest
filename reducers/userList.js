import {AsyncStorage} from 'react-native'

export default (state = {}, action) => {
    state.data = state.data || [];
    state.lastId = state.lastId || 0;
    switch (action.type) {
        case 'deleteUser':
            state.data = state.data.filter(value => value.key !== action.userId);
            break;
        case 'initUserData':

            break;
        case 'addUser':
            state.data.push({key: `user${state.lastId + 1}`, title: `User ${state.lastId + 1}`});
            state.lastId++;
            break;
    }
    return {...state};
};