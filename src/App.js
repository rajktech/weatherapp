import './App.css';
import React from 'react';
//import Getweather from './Getweather';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: '',
      lat: '',
      lon: '',
      place: ''
    }
  }
  getWeather() {
    var place = this.state.place;
    var URL = "http://api.openweathermap.org/data/2.5/weather?q=" + place + "&APPID=60134b44fe9def5919e7e8d376a82ffc&units=metric";
    fetch(URL)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          if (result.cod === 200) {
            this.setState({
              temp: result.main.temp+'C',
              lat: result.coord.lat,
              lon: result.coord.lon,
            });
          } else {
            this.setState({
              temp: 'not found',
              lat: 'not found',
              lon: 'not found',
            });
          } 
        },
        (error) => {
          console.log(error);
        }
      )
    
  }

  updateValue(e) {
    this.setState({place: e.target.value});
  }
  render() {
    return (
      <div className="App">
       Enter City Name: <input type="text" onChange={this.updateValue.bind(this)}  /> 
        <button onClick={this.getWeather.bind(this)} >Click</button>
        <br/>
        Temp: {this.state.temp}<br/>
        Lat: {this.state.lat}<br/>
        Lon: {this.state.lon}
      </div>
    );
  }
  
}

export default App;
