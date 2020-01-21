import React, { Component } from 'react';
import Buttons from './Buttons';
import CounterDisplay from './CounterDisplay';
import Step from './Step';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stepValue: 5,
            counterValue: Number(props.initValue),
            initValue: Number(props.initValue),
        }
    }

    updateStepValue = (newStep) => {
        // Step value ( min. value 1 )
        const currentStepValue = (newStep > 0) ? newStep : 1;
        this.setState({
            stepValue: Number(currentStepValue)
        })
    }
    
    updateCounter = () => {
        const newCounterValue = this.state.counterValue + this.state.stepValue;
        this.setState({
            counterValue: newCounterValue
        })
    }
    
    reinitCounter = () => {
        const initValue = this.state.initValue;
        this.setState({
            counterValue: initValue
        })
    }
    
    resetCounter = () => {
        this.setState({
            counterValue: 0
        })
    }

    render(){
        return (
            <div className="Counter">
                <CounterDisplay currentValue={this.state.counterValue}/>
                <Buttons 
                    onReInit={this.reinitCounter} 
                    onReset={this.resetCounter}
                    onAdd={this.updateCounter} 
                    stepValue={this.state.stepValue}/>
                <Step 
                    setStep={this.updateStepValue} 
                    stepValue={this.state.stepValue}/>
            </div>
        )
    }
}

export default Counter;