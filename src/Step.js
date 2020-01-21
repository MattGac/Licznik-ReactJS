  
import React, {Component} from 'react';

class Step extends Component {
    constructor(props){
        super(props)
        this._inputStep = '';
    }
    updateStep = (e) => {
        e.preventDefault();
        this.props.setStep(this._inputStep.value);
    }
    render(){
        return (
        <div className="Step">
            <label className="label col-sm-6 col-md-6">Krok: </label>
            <input className="form col-sm-2 col-md-1" type="number" 
                ref={(data) => { this._inputStep = data} } 
                onChange={this.updateStep}
                value={this.props.stepValue} />
        </div> 
        )
    }
}

export default Step;