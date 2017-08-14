import {connect} from 'react-redux'

import OneFieldForm from '../components/OneFieldForm'
import {
    helloAlert,
    helloInput,
} from '../actions'

const mapStateToProps = (state) => {
    return {
        labelText: 'Enter your name:',
        placeholder: 'Name',
        buttonTitle: 'Press me',
        inputValue: state.hello,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        buttonCallback: () => {
            dispatch(helloAlert())
        },
        inputChange: (inputValue) => {
            dispatch(helloInput(inputValue))
        },
    }
};

let combined = connect(mapStateToProps, mapDispatchToProps)(OneFieldForm);
combined.navigationOptions = {
    title: 'Hello App',
};

export default combined;