import {REHYDRATE} from 'redux-persist/constants'

export default (state = {}, action) => {
    state.data = state.data || [];
    state.lastId = state.lastId || 0;
    switch (action.type) {
        case 'deleteUser':
            state.data = state.data.filter(value => value.key !== action.userId);
            break;
        case 'addUser':
            state.data.push({key: `user${state.lastId + 1}`, title: action.name, money: action.money});
            state.lastId++;
            break;
        case REHYDRATE:
            let incoming = action.payload.userList;
            if (incoming) {
                return {...state, ...incoming}
            }
            break;
    }
    return {...state};
};