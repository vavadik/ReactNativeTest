import {connect} from 'react-redux'

import Counter from '../components/Counter'
import {
    increment,
    decrement
} from '../actions'

const mapStateToProps = (state) => {
    return {
        value: state.counter
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => {
            dispatch(increment())
        },
        onDecrement: () => {
            dispatch(decrement())
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);