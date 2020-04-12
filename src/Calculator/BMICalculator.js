import React from 'react';
import './BMICalculator.css';
const BMICalculator = () => {

    return (
        <div className='calWrapper'>
            <input type='text' /><span>Height</span>
            <input type='text' /><span>Weight</span>
            <span>BMI</span><input type='text' />
        </div>
    );

}
export default BMICalculator;