import React, { Component } from 'react'
import axios from 'axios'
import Countries from './countries';
import Info from './info';

class Details extends Component {
   constructor(props){
     super(props)
     this.state = {
       count: 0,
       details: [],
       name:this.props.info
     }
   }

   handleClick(e){
     this.setState((prev)=>(console.log(e.target.childNodes[0].innerText),{
       count: prev.count + 1
     }))
   }

   componentDidMount(){
     axios.get(`https://restcountries.eu/rest/v2/name/${this.state.name}`)
     .then(response=>{
       this.setState({
         details:response.data
       })
       console.log(response.data)
       console.log(this.props.info)
     })
     .catch(error=> console.log(error))
   }

  render(){
    const { details, count } = this.state
    return (
      <div>
        <button onClick={this.clickBack}>Back</button>
        {
          count > 0 ?
          <Countries click={this.handleClick}/> :
          <Info details={details} />
        }
      </div>
    )
  }
}

export default Details;
