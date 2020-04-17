import React, { Component } from 'react';
import './BMICalculator.css';
import Food from '../Pili.jpg';
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
        if (inputName.toLowerCase()) {
            if (inputName.toLowerCase() === 'piyali    ') {
                alert("Piyali, Apni Hindi khub e valo bolen....................................................................... r amake fuchka khawaben na ? khawaben na fuchka amake ?\n\n\n Click on Ok to see your BMI");
                this.props.getRef().current.style.backgroundImage = `url(${Food})`;

            }
            else {
                alert(`Hi ${inputName.toUpperCase()}, We have a surprise for you. Please click on OK button to proceed !`);
            }

            inputName.toLowerCase() === 'piyali    ' ?
                this.setState({
                    calculatedBMIValue: 'Hi Piyali, you do not need to check your BMI. Just go though these beautiful lines.......You are the cutest..I like the way you smile...I like your mentality...I love your personality...I like the way you counter me ...ha ha ha...The innocent child inside me wants to swim in your dimples...And I like the way you utter TAARPOR while smiling...Do not think too much...Always remain like this..And pray with me so that this Corona goes away from our beautiful planet and everyone can come back into normla life .... '
                }) :
                this.setState({
                    calculatedBMIValue: this.weightInput.current.value / (this.heightInput.current.value * this.heightInput.current.value),
                });
            let audio = new Audio(track1);
            audio.play();
        }
    }

    render() {
        return (
            <>
                <h1>BMI Calculator</h1>
                <div className='calWrapper'>
                    <span className='row textBoxWrapper'>
                        <input className="gate" id="class" ref={this.nameInput} type="text" placeholder="First Name" /><label for="class">Name</label>
                    </span>
                    <span className='row textBoxWrapper'>
                        <input className="gate" id="class" type="text" ref={this.heightInput} placeholder="Height in Meters" /><label for="class">Height</label>
                    </span>
                    <span className='row textBoxWrapper'>
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