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
        inputValue: PropTypes.string.isRequired,
        labelText: PropTypes.string.isRequired,
        buttonCallback: PropTypes.func.isRequired,
        inputChange: PropTypes.func.isRequired,
        placeholder: PropTypes.string,
        buttonTitle: PropTypes.string.isRequired,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>{this.props.labelText}</Text>
                <TextInput
                    placeholder={this.props.placeholder}
                    onChangeText={(inputValue) => {
                        this.props.inputChange(inputValue);
                    }}
                />
                <Button title={this.props.buttonTitle}
                        onPress={this.props.buttonCallback}/>
            </View>
        );
    }
}