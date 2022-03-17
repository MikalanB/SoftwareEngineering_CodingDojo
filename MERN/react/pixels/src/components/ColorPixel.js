import React, {Component} from 'react';
var randomColor = require('randomcolor');

class ColorPixel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "white"
        }
    }

    onClickHandler = () => {
        console.log("pixel clicked");
            this.setState({
                color: randomColor()
            });
    }

    render() {
        const colorStyle = {
            backgroundColor: this.state.color
        }
        return(
            <div style={colorStyle} onClick={this.onClickHandler} className = "pixel"> </div>
        )
    }
}

export default ColorPixel;