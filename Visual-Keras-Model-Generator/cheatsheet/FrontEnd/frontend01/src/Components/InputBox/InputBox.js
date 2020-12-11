import React from 'react'

import './InputBox.css'

const InputBox = (props) => {
    return(
        <div className="inputBoxComponent">
            <p className="InputBoxTitle">Network Input</p>
            <p>Enter the input shape:</p>
            <input onChange={props.inputChange} className="input"/>
        </div>
    )
}

export default InputBox;