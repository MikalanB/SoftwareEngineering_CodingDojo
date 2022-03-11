import React, {Component} from 'react'
import SubContents from './SubContents'
import Advertisement from './Advertisement'

class Main extends Component {
    render() {
        return (
            <div className="main">
                <SubContents/>
                <SubContents/>
                <SubContents/>
                <Advertisement/>
            </div>
        )
    }
}

export default Main;