import React, { Component } from 'react';

class StateTestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changeColor: 'Red'
        }
    }

    componentDidMount() {
        this.setState({
            changeColor: 'Green'
        })
    }
    
    render() {
        return (
            <div>
                <h1>My Favarate Color is {this.state.changeColor}</h1>
            </div>
        );
    }
}

export default StateTestComponent;