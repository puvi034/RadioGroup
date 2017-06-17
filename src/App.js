import React, { Component } from 'react';
import Radio from './components/Radio.jsx';
import RadioGroup from './components/RadioGroup.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {

  state = {
    fruit: 'Apple',
    car: 'Chrysler'
  }

  handleFruits = (selectedFruit) => {
    this.setState({
      fruit: selectedFruit
    })
  }

  handleCar = (selectedCar) => {
    this.setState({
      car: selectedCar
    })
  }

  render() {
    const {fruit, car} = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h1>Selected Fruit: {fruit}</h1>
            <RadioGroup name="fruits" defaultValue="Apple" handleSelect={this.handleFruits}>
              <Radio value="Apple"><span className="pad">Apple</span></Radio>
              <Radio value="Banana"><span className="pad">Banana</span></Radio>
              <Radio value="Orange"><span className="pad">Orange</span></Radio>
            </RadioGroup>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <h1>Selected Car: {car}</h1>
            <RadioGroup name="cars" defaultValue="Chrysler" handleSelect={this.handleCar}>
              <Radio value="Chrysler"><span className="pad">Chrysler</span></Radio>
              <Radio value="General Motors"><span className="pad">General Motors</span></Radio>
              <Radio value="Ford"><span className="pad">Ford</span></Radio>
            </RadioGroup>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
