import React, {Component} from 'react'
import Pixel from './Pixel'
import ColorPixel from './ColorPixel';

class Row extends Component {
    render() {
        return (
            <div className=" container w-50 mx-auto">
            <ColorPixel/>
            <ColorPixel/>
            <ColorPixel/>
            <ColorPixel/>
            <ColorPixel/>
            <ColorPixel/>
        </div>
        )
    }
}

export default Row;