import React, {Component, AsyncStorage} from 'react'
import {
    FlatList,
    TouchableHighlight,
    View,
    Text,
    Button,
    StyleSheet,
    Modal,
    TextInput,
} from 'react-native'
import PropTypes from 'prop-types'
import Colors from '../styles/Colors'

export default class EditList extends Component {
    static propTypes = {
        listData: PropTypes.array.isRequired,
        deleteCallback: PropTypes.func.isRequired,
        addCallback: PropTypes.func.isRequired,
        lastId: PropTypes.number.isRequired,
        modalFields: PropTypes.array.isRequired,
    };

    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    constructor(props) {
        super(props);
    }

    renderItem = ({item}) => (
        <View key={item.key}>
            <TouchableHighlight onPress={() => alert(`press item ${item.title}`)}>
                <Text style={{color: Colors.secondaryText,}}>{item.title}</Text>
            </TouchableHighlight>
            <Button color={Colors.primaryLight} title="Delete"
                    onPress={() => this.props.deleteCallback(item.key)}/>
        </View>
    );

    onModalSave = () => {
        this.setModalVisible(false);
        this.props.addCallback();
    };

    onModalCancel = () => {
        this.setModalVisible(false);
        alert('cancel');
    };

    getModel = (key) => (this.listData.find((element, index) => (element.key === key)));

    renderModalFields = (selectedKey = null) => (
        this.props.modalFields.map(({key, title}) => (
            <View key={key}>
                <Text>{title}</Text>
                <TextInput
                    onChangeText={(inputValue) => {

                    }}
                    defaultValue={selectedKey ? this.getModel(selectedKey)[key] : ''}
                    key={key}/>
            </View>
        ))
    );

    renderForm = (selectedKey = null) => (
        <Modal
            animationType={"slide"}
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={this.onModalCancel}
        >
            <View style={style.modal}>
                <View style={style.modalBody}>
                    {this.renderModalFields(selectedKey)}
                </View>
                <View style={style.controlsView}>
                    <TouchableHighlight style={style.buttonPrimary} onPress={this.onModalSave}>
                        <Text style={style.buttonPrimaryText}>Save</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={style.buttonSecondary} onPress={this.onModalCancel}>
                        <Text style={style.buttonSecondaryText}>Cancel</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </Modal>
    );

    render() {
        return (
            <View style={style.mainView}>
                <View style={style.listView}>
                    <FlatList
                        data={this.props.listData}
                        extraData={JSON.stringify(this.props.listData)}
                        renderItem={this.renderItem}
                    />
                </View>
                <View style={style.controlsView}>
                    <TouchableHighlight underlayColor="blue" style={style.buttonPrimary}
                                        onPress={() => this.setModalVisible(true)}>
                        <Text style={style.buttonPrimaryText}>Add</Text>
                    </TouchableHighlight>
                </View>
                {this.renderForm()}
            </View>
        )
    }
}

const style = StyleSheet.create({
    mainView: {
        flex: 1,
        flexDirection: 'column',
    },
    listView: {
        flex: 8,
    },
    buttonPrimary: {
        flex: 1,
        backgroundColor: Colors.primary,
    },
    buttonPrimaryText: {
        flex: 1,
        color: Colors.primaryText,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        textAlignVertical: 'center',
    },
    buttonSecondary: {
        flex: 1,
        backgroundColor: Colors.secondary,
    },
    buttonSecondaryText: {
        flex: 1,
        color: Colors.secondaryText,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        textAlignVertical: 'center',
    },
    controlsView: {
        flexDirection: 'row',
        flex: 1,
    },
    modal: {
        flex: 1,
        flexDirection: 'column'
    },
    modalBody: {
        flex: 8,
    },
});