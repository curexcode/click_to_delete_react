import React from 'react';
import './InputField.css'

const InputField = (props) => {
    return (
        <div className="InputField">
            <p id="para-text">{props.text}</p>
            <input type="text" onChange={props.changed}></input>
            <p>Length = {props.inputLength}</p>

        </div>

    );
}

export default InputField;