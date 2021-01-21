import React, { Component } from 'react'

export default class App extends Component {

    constructor() {
        super()
        this.state = {
            fetchedData: ""
        }
    }

    render() {
        return("")
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(res => res.json())
        .then(data => this.setState({fetchedData: data}))
    }

}