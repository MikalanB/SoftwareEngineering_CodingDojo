import React from 'react';

const Box = (props) => {
    const style = {
        backgroundColor: props.color,
        width: '150px',
        height: '150px'
    }

    return (
        <div style={style}>
            
        </div>
    )
}

export default Box;