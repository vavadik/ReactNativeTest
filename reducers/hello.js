export default (state = '', action) => {
    switch (action.type) {
        case 'helloAlert':
            alert(state);
            return state;
        case 'helloInput':
            return `Hello ${action.text}`;
        default:
            return state;
    }
};