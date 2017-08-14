import React, {Component, AsyncStorage} from 'react'
import {
    FlatList,
    Button,
    TouchableHighlight,
    View,
    Text,
    StyleSheet,
} from 'react-native'
import PropTypes from 'prop-types'

export default class EditList extends Component {
    static propTypes = {
        initData: PropTypes.func.isRequired,
        listData: PropTypes.array.isRequired,
        deleteCallback: PropTypes.func.isRequired,
        addCallback: PropTypes.func.isRequired,
        lastId: PropTypes.number.isRequired,
    };

    componentDidMount() {
        this.props.initData();
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={style.mainView}>
                <View style={style.listView}>
                    <FlatList
                        data={this.props.listData}
                        extraData={JSON.stringify(this.props.listData)}
                        renderItem={({item}) => {
                            return (
                                <View key={item.key}>
                                    <TouchableHighlight onPress={() => alert('press item')}>
                                        <Text>{item.title}</Text>
                                    </TouchableHighlight>
                                    <Button title="Delete" onPress={() => this.props.deleteCallback(item.key)}/>
                                </View>
                            )
                        }}
                    />
                </View>
                <View style={style.controlsView}>
                    <TouchableHighlight underlayColor="blue" style={style.addButton} onPress={this.props.addCallback}>
                        <Text style={style.addButtonText}>Add</Text>
                    </TouchableHighlight>

                </View>
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
    addButton: {
        flex: 1,
        backgroundColor: '#1C7293',
    },
    addButtonText: {
        flex: 1,
        color: '#DBE9EE',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        textAlignVertical: 'center',
    },
    controlsView: {
        flexDirection: 'row',
        flex: 1,
    },
});