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