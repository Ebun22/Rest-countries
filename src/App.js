import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import axios from 'axios'
import Countries from './components/countries';
import Details from './components/details';
import Header from './components/header';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      country: [],
      region: " ",
      name: " ",
      info: '',
      border: '',
      dropDown: false,
      lightMode: true,
      count: 0
    }
    //this keyword can be bound like this or the event handler defined with an arror function as we have done
    //this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount(){
    axios.get("https://restcountries.eu/rest/v2/all")
    .then(response=>{
      this.setState({
        country:response.data
      })
      //console.log(response.data)
    })
    .catch(error=> console.log(error))
  }
//to display the details of the clicked country card
  handleClick=(e)=>{
    this.setState((prev)=>(console.log(this.state.info),{
      count: prev.count + 1,
      info: e.target.childNodes[0].innerText
    }))
  }
  //displays searched for countries
  handleSearch=(e)=>{
    e.preventDefault()
    this.setState({name: e.target.value})
  }
  //filters countries according to regions
  handleFilter=(e)=>{
    this.setState((prev)=>(console.log(prev),
    {region: e.target.innerHTML.toLowerCase(),
      dropDown: !this.state.dropDown}
    ),
     console.log("this.state.dropDown")
  )
    //console.log(this.state.url)
  }
  //display details of border when clicked
  HandleBorder=(e)=>{
    this.setState((prev)=>(console.log(this.state.count),{
      border: e.target.innerText,
      count: prev.count + 1
    }))

  }
  decrement=()=>{
    this.setState((prev)=>({
      count: prev.count - 1
    })
    )
  }
  handleTheme=()=>{
    this.setState({
      lightMode: !this.state.lightMode
    })
  }
   render(){
   const { country , region , name , info , border, count, lightMode, dropDown } = this.state
    return (
      <div class="text-white" >
        <Header lightMode={lightMode} handleTheme={this.handleTheme} />
        {count > 0 ?
          <Details
          country={country}
          info={info}
          count={count}
          border={border}
          handleBorder={this.HandleBorder}
          decrement = {this.decrement}
          />
          :
          <Countries
          country={country}
          name = {name}
          region = {region}
          dropDown = {dropDown}
          handleSearch ={this.handleSearch}
          handleFilter = {this.handleFilter}
          handleClick={this.handleClick}
          />
        }
      </div>
    )

  }
}
export default App;
