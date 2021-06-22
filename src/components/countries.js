import React, { Component } from 'react'
import axios from 'axios'
import Card from "./countryCard"
import Search from "./Search"


class Countries extends Component {
   constructor(props){
     super(props)
     this.state = {
       country: [],
       query: " ",
       searchQuery:"https://restcountries.eu/rest/v2/all"
     }
   }
   handleChange(e){
     e.preventDefault()
     this.setState({query: e.target.value})
     console.log(e.target.value);
   }

   handleSubmit(e){
     e.preventDefault()
     console.log(this.state.query);
   }
   componentDidMount(){
     axios.get(this.state.searchQuery)
     .then(response=>{
       this.setState({
         country:response.data
       })
       console.log(response.data)
     })
     .catch(error=> console.log(error))
   }
  render(){
    const { country, query } = this.state
    return (
      <div>
      <Search query={query} change={this.handleChange} submit={this.handleSubmit}/>
        {
          country.length ? country.map((data, index)=>{
            return(
              <Card data={data} key={index}/>
            )
          }) : <div>LOADING...</div>
        }
      </div>
    )
  }
}

export default Countries;
