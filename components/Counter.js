import React, {Component} from 'react'
import {
    View,
    Text,
    Button
} from 'react-native'
import PropTypes from 'prop-types'
import Colors from '../styles/Colors'

export default class Counter extends Component {
    static navigationOptions = {
        title: 'Counter',
    };
    static propTypes = {
        value: PropTypes.number.isRequired,
        onIncrement: PropTypes.func.isRequired,
        onDecrement: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>{this.props.value}</Text>
                <Button color={Colors.primaryLight} title="+" onPress={this.props.onIncrement}/>
                <Button color={Colors.primaryLight} title="-" onPress={this.props.onDecrement}/>
            </View>
        )
    }
}

