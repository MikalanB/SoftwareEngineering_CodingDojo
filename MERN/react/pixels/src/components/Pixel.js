import React, {Component} from 'react';

class Pixel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filled: false
        }
    }

    onClickHandler = () => {
        console.log("pixel clicked");
        if (!this.state.filled) {
            this.setState({
                filled: true
            });
        } else {
            this.setState({
                filled: false
            })
        }
    }

    render() {
        return(
            <div onclick={this.onClickHandler} className = {this.state.filled ? "pixel filled" : "pixel"}> </div>
        )
    }
}

export default Pixel;