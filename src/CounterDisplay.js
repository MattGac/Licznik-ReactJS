import React from 'react';


const CounterDisplay = props => {

    return (
        <div className="Display mb-3">
            <h3>Licznik: <strong>{props.currentValue}</strong></h3>
        </div>
    )
}
export default CounterDisplay;