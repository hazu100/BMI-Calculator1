import React, { Component } from 'react';
import './App.css';
import BMICalculator from './Calculator/BMICalculator';


class App extends Component {

  constructor(props){
    super(props);
    this.myImage = React.createRef();
  }

  getImageRef = ()=> {
    return this.myImage;
  }

  render()
  {
  return (
    <div className="App" ref={this.myImage}>
      <BMICalculator getRef = {this.getImageRef}/>
    </div>
  );
}
}

export default App;
