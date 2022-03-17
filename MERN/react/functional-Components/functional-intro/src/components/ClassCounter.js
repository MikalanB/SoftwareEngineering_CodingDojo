import React, {Component} from 'react';

class ClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    increaseCounter = () => {
        console.log('increase')
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.counter}</h1>
                <button className="btn btn-primary btn-lg" onClick={this.increaseCounter}>click me!</button>
                <p><em>This is a class component</em></p>
            </div>
        )
    }
}

export default ClassCounter;