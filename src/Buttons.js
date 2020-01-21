import React from 'react';

const Buttons = props => {

    console.log(props)
    return (
        <div className='buttons-panel'>
            <button onClick={props.onAdd} className="btn btn-primary mr-2">Add {props.stepValue}</button>
            <button onClick={props.onReInit} className="btn btn-primary mr-2">ReInit</button>
            <button onClick={props.onReset} className="btn btn-primary">Reset</button>        </div>
    );
}

export default Buttons;