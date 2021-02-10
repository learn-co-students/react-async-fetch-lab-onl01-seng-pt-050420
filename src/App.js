import React, { Component } from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);


    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
            .then(response => response.json())
            .then(json => console.log(json));
    }

    render() {
        return (<div>It's a moo point. Like... a cow's opinion; it doesn't matter.</div>);
    }
}
