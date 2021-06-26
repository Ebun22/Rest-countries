import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import Countries from './components/countries';


class App extends Component {
     constructor(props){
    super(props)
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }
   
   render(){
    return (
      <Countries />
    )

  }
}
export default App;
