import React, { Component } from 'react'
import axios from 'axios'
import Card from "./countryCard"
import Search from "./Search"
import Filter from "./filter"


class Countries extends Component {
   constructor(props){
     super(props)
     this.state = {
       country: [],
       region: " ",
       name: " "
     }
      this.handleChange = this.handleChange.bind(this)
      this.filter = this.filter.bind(this)
   }
   handleChange(e){
     e.preventDefault()
     this.setState({name: e.target.value})
     this.handleChange = this.handleChange.bind(this)
   }
   filter(e){
     //console.log(`region/${e.target.innerHTML.toLowerCase()}`);
     this.setState((prev)=>(console.log(prev),
     {region: `${e.target.innerHTML.toLowerCase()}` }
      )
   )
     //console.log(this.state.url)
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
    const { country, name, region } = this.state
    const search = country.filter(item=>{
      return (
        item.name.toLowerCase().includes(name.toLowerCase().trim()) &&
        item.region.toLowerCase().includes(region.trim())
      )
    })
    console.log(region)
    return (
      <div>
      <Search change={this.handleChange} />
      <nav>
      <button >Filter</button>
      <Filter region={this.filter} />
      </nav>
        {
          country.length ? search.map((data)=>{
            return(
              <Card data={data} key={data.numericCode} click={this.props. click}/>
            )
          }) : <div>LOADING...</div>
        }
      </div>
    )
  }
}

export default Countries;
