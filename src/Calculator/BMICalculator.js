import React, { Component } from 'react';
import './BMICalculator.css';
import track1 from '../ekla.mp3';
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
        alert(`Hi ${inputName.toUpperCase()}, We have a surprise for you. Please click on OK button to proceed !`);
        this.setState({
            calculatedBMIValue: this.weightInput.current.value / (this.heightInput.current.value * this.heightInput.current.value),
        });
        let audio = new Audio(track1);
        audio.play();
    }

    render() {
        return (
            <>
                <h1>BMI Calculator</h1>
                <div className='calWrapper'>
                    <span className='textBoxWrapper'>
                        <input className="gate" id="class" ref={this.nameInput} type="text" placeholder="First Name" /><label for="class">Name</label>
                    </span>
                    <span className='textBoxWrapper'>
                        <input className="gate" id="class" type="text" ref={this.heightInput} placeholder="Height in Meters" /><label for="class">Height</label>
                    </span>
                    <span className='textBoxWrapper'>
                        <input className="gate" id="class" type="text" ref={this.weightInput} placeholder="Weight in Kgs" /><label for="class">Weight</label>
                    </span>
                </div>
                <div>
                    <div className="bmi"><b>Your BMI is :</b></div><textarea className="bmiResult" rows="3" value={this.state.calculatedBMIValue} />
                    <div><input type='submit' className="btn btn-success" value='Calculate BMI' style ={{ width :"10rem"}} onClick={this.calculateBMI} /></div>
                </div>
            </>
        );
    }
}
export default BMICalculator;