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
   
  handleClick(){
    this.setState((prev)=>(console.log(prev),{
      count: prev.count + 1
    }))
  }

   render(){
    return (
      <div>
        {this.state.count > 0 ?
          console.log("details") :
          <Countries click={this.handleClick}/>
        }

      </div>
    )

  }
}
export default App;
