import React from 'react';


const ValidationComponent = (props) => {

    if(props.textLength > 5){
        return  <p> Text is long enough.</p>;
    }

    if(props.textLength <= 5){
        return  <p> Text is too short.</p>;
    }
}

export default ValidationComponent;