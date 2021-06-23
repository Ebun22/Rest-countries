import React, { Component } from 'react'
import axios from 'axios'
import Card from "./countryCard"
import Search from "./Search"


class Countries extends Component {
   constructor(props){
     super(props)
     this.state = {
       country: [],
       query: " "
     }
      this.handleChange = this.handleChange.bind(this)
   }
   handleChange(e){
     e.preventDefault()
     this.setState({query: e.target.value})
     console.log(e.target.value);
   }

   componentDidMount(){
     axios.get("https://restcountries.eu/rest/v2/all")
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
      <Search query={query} change={this.handleChange} />
        {
          country.length ? country.map(data=>{
            return(
              <Card data={data} key={data.data.numericCode}/>
            )
          }) : <div>LOADING...</div>
        }
      </div>
    )
  }
}

export default Countries;
