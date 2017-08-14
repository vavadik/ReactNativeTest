export const increment = () => {
    return {type: 'increment'};
};

export const decrement = () => {
    return {type: 'decrement'};
};

export const helloAlert = () => {
    return {type: 'helloAlert'};
};

export const helloInput = (text) => {
    return {type: 'helloInput', text: text};
};

export const deleteUser = (userId) => {
    return {type: 'deleteUser', userId: userId};
};

export const addUser = () => {
    return {type: 'addUser'};
};

export const initUserData = () => {
    return {type: 'initUserData'};
};