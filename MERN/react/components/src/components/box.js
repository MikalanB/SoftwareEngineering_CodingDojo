import React, {Component} from 'react';

class Box extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {text, number} = this.props;

        return (
            <div className={this.props.isDark ? "box dark" : "box"}>
                <marquee><h1>{text}</h1></marquee>
                <h1>{number > 0 ? "positive number" : "negative number"}</h1>

                {this.props.children}
            </div>
        )
    }
}

export default Box;