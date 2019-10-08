import React from 'react';
import './CharComponent.css';

const CharComponent = (props) => {
        return <p className='char-component' onClick={props.clicked}>{props.char} <br></br> {props.id}</p>
}

export default CharComponent;