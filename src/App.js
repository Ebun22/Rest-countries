import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import Countries from './components/countries';
import Details from './components/details';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0,
      info: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }
//to display the details of the clicked country card
  handleClick(e){
    this.setState((prev)=>(console.log(e.target.childNodes[0].innerText),{
      count: prev.count + 1,
      info: e.target.childNodes[0].innerText
    }))
  }

   render(){
    return (
      <div>
        {this.state.count > 0 ?
          <Details info={this.state.info} /> :
          <Countries click={this.handleClick}/>
        }
      </div>
    )

  }
}
export default App;
