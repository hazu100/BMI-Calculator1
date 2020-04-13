import React, { Component } from 'react';
import './BMICalculator.css';

class BMICalculator extends Component {

    constructor(props) {
        super(props);
        this.heightInput = React.createRef();
        this.weightInput = React.createRef();
        this.nameInput = React.createRef();
        this.calculateBMI = this.calculateBMI.bind(this);
        this.state = {
            calculatedBMIValue: null,
        };
    }

    calculateBMI() {
        const inputName = this.nameInput.current.value;
        inputName.toLowerCase() === 'pooja' ? 
        this.setState({
            calculatedBMIValue : inputName.toUpperCase()+' is always overweight',
        }) : 
        this.setState({
            calculatedBMIValue : this.weightInput.current.value/(this.heightInput.current.value*this.heightInput.current.value),
        });
    }

    render() {
        return (
            <>
                <h1>BMI Calculator</h1>
                <div className='calWrapper'>
                    <input type='text' placeholder="Enter your First Name" ref={this.nameInput} /><span>First Name</span>
                    <input type='text' placeholder="Enter your height in Meters" ref={this.heightInput} /><span>Height</span>
                    <input type='text' placeholder="Enter your weight in KGs" ref={this.weightInput} /><span>Weight</span>
                    <div className="bmi">BMI</div><textarea value={this.state.calculatedBMIValue}/>
                    <div><input type='submit' value='Calculate BMI' onClick={this.calculateBMI}/></div>
                </div>
            </>
        );
    }
}
export default BMICalculator;