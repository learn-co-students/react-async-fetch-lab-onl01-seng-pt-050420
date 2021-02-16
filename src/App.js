import React, { Component } from 'react';

export default class App extends Component {
    
    render() {
        return (
            <div>Hello Kamille!</div>
        )}

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(response => response.json())
            .then(console.log)
    }
}