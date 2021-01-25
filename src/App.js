import React, { Component } from 'react'

class App extends Component {
    state = {
        peopleInSpace: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(rsp => rsp.json())
            .then(obj => this.setState({ peopleInSpace: obj.people }))
    }

    render() {
        return (
            <div>
                <ol>
                    {this.state.peopleInSpace.map(person => <li>{person.name}</li>)}
                </ol>

            </div>
        )
    }
}

export default App;