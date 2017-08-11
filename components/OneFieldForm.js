import React, {Component} from 'react'
import {
    Button,
    TextInput,
    Text,
    View,
} from 'react-native'
import PropTypes from 'prop-types'

export default class OneFieldForm extends Component {
    static propTypes = {
        labelText: PropTypes.string.isRequired,
        buttonCallback: PropTypes.func.isRequired,
        placeholder: PropTypes.string,
        buttonTitle: PropTypes.string.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {inputValue: ''};
    }

    render() {
        return (
            <View>
                <Text>{this.props.labelText}</Text>
                <TextInput
                    placeholder={this.props.placeholder}
                    onChangeText={(inputValue) => {
                        this.setState({inputValue})
                    }}
                />
                <Button title={this.props.buttonTitle}
                        onPress={() => this.props.buttonCallback(this.state.inputValue)}/>
            </View>
        );
    }
}