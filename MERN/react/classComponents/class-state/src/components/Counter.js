import React, {Component} from 'react'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    increaseCounter = () => {
        //console.log("clicked!");
        // this.state.counter++;
        this.setState({ //if you need to change your state for a react component you NEED to use setState
            counter: this.state.counter +  1
        })
    }

    render() {
        return(
            <div>
                {this.props.text}
                <h1>{this.state.counter}</h1>
                <button onClick={this.increaseCounter}>click me!</button>
            </div>
        )
    }
}

export default Counter;