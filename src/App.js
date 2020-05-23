import React, { Component } from 'react';
import './App.css';
import fatchData from "./api";
// import Cards from "./component/Cards/Cards";
// import Chart from "./component/Chart/Chart";
// import CountryPicker from "./component/CountryPicker/CountryPicker";
// -------------------------------------------------------------------------
// bettr way of importing file -----------------

import {Cards,Chart,CountryPicker} from './component';

class App extends Component {
  state={
    covid:{},
    country:'',
  }

  async componentDidMount(){
    const data = await fatchData();
    this.setState({covid:data});
    console.log(data);
  }

  handleCountryChange= async(country)=>{
    const fetchedData = await fatchData(country);
    //fetch data 
    //set the state
    this.setState({covid:fetchedData , country:country});
    // console.log(fetchedData);
    // console.log(this.state.country);
  }


  render(){
  return (
    <div className="container">
      <Cards covidData={this.state.covid}/>
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
      <Chart/>
    </div>
  );
  }
}

export default App;
