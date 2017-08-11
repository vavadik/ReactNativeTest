import React, {Component} from 'react';
import {connect} from 'react-redux'

import OneFieldForm from '../components/OneFieldForm'
import {helloAlert} from '../actions'

export default class HelloApp extends Component {
    static buttonCallback = (value) => {
        return alert(`Hello ${value}`);
    };

    static navigationOptions = {
        title: 'Hello App',
    };

    render() {
        return (
            <OneFieldForm labelText="Enter your name" buttonCallback={HelloApp.buttonCallback} buttonTitle="Say Hello"/>
        )
    }
}