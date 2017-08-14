import {connect} from 'react-redux'

import EditList from '../components/EditList'
import {
    deleteUser,
    addUser,
    initUserData,
} from '../actions'

const mapStateToProps = (state) => {
    return {
        listData: state.userList.data,
        lastId: state.userList.lastId,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCallback: (userId) => {
            dispatch(deleteUser(userId))
        },
        addCallback: () => {
            dispatch(addUser())
        },
        initData: () => {
            dispatch(initUserData())
        }
    }
};

let combined = connect(mapStateToProps, mapDispatchToProps)(EditList);
combined.navigationOptions = {
    title: 'User List',
};

export default combined;