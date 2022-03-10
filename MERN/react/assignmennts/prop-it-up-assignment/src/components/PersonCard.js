import React, {Component} from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        }
    }

    increaseAge = () => {
        this.setState({ 
            age: this.state.age + 1
        })
    }

    render() {
        const {firstName, lastName, hairColor} = this.props;
        return(
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.increaseAge}>Birthday Button for {firstName} {lastName}</button>
                <br></br>
            </div>
        )
    }
}

export default PersonCard;