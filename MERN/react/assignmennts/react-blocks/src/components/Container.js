import React, {Component} from 'react'
import Main from './Main'
import Navigation from './Navigation';

class Container extends Component {
    render() {
        return (
            <div className="container">
                <Navigation />
                <Main></Main>
            </div>
        )
    }
}

export default Container;