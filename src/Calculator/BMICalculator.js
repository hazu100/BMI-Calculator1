import React, { Component } from 'react';
import './BMICalculator.css';

class BMICalculator extends Component {

    constructor(props) {
        super(props);
        this.heightInput = React.createRef();
        this.weightInput = React.createRef();
        this.calculateBMI = this.calculateBMI.bind(this);
        this.state = {
            calculatedBMIValue : null,
        };
    }

    calculateBMI() {
        this.setState({
            calculatedBMIValue : this.weightInput.current.value/(this.heightInput.current.value*this.heightInput.current.value),
        });
    }

    render() {
        return (
            <>
                <h1>BMI Calculator</h1>
                <div className='calWrapper'>
                    <input type='text' ref={this.heightInput} /><span>Height</span>
                    <input type='text' ref={this.weightInput} /><span>Weight</span>
                    <div className="bmi">BMI</div><input type='text' value={this.state.calculatedBMIValue}/>
                    <input type='submit' value='Calculate BMI' onClick={this.calculateBMI}/>
                </div>
            </>
        );
    }
}
export default BMICalculator;