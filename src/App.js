// create your App component here
import React, { Component } from 'react';
const spaceAPI = 'http://api.open-notify.org/astros.json' 

//no need to modify anything in this component
class App extends Component {

    constructor() {
        super()
        this.state = {
            peopleInSpace: []
        }
    }
    render() {
        return(
            <div>
                {this.state.peopleInSpace.map((person, id) => <h1 key={id}>{person.name}</h1>)}
            </div>
        )
    }

    componentDidMount() {
        fetch(spaceAPI)
        .then(res => res.json())
        .then(({astros}) => {
            this.setState({peopleInSpace: astros})
        })
    }


}

export default App
