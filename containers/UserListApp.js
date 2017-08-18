import {connect} from 'react-redux'

import EditList from '../components/EditList'
import {
    deleteUser,
    addUser,
} from '../actions'

const mapStateToProps = (state) => {
    return {
        listData: state.userList.data,
        lastId: state.userList.lastId,
        modalFields: [
            {key: 'name', title: 'Name'},
            {key: 'money', title: 'Money'},
        ],
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCallback: (userId) => {
            dispatch(deleteUser(userId))
        },
        addCallback: (name, money) => {
            dispatch(addUser(name, money))
        },
    }
};

let combined = connect(mapStateToProps, mapDispatchToProps)(EditList);
combined.navigationOptions = {
    title: 'User List',
};

export default combined;