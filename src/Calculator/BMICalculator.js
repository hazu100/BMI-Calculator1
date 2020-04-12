import React from 'react';
import './BMICalculator.css';
const BMICalculator = () => {

    return (
        <>
            <h1>BMI Calculator</h1>
            <div className='calWrapper'>
                <input type='text' /><span>Height</span>
                <input type='text' /><span>Weight</span>
                <div className="bmi">BMI</div><input type='text' />
            </div>
        </>
    );

}
export default BMICalculator;