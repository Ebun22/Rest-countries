import React, { Component } from 'react'

class Card extends Component {
  render(){
    const { data } = this.props
      return(
        <div>
          <div className="img">
            <img src={data.flag} alt="flag" />
          </div>
          <div className="details">
            <p>{data.name}</p>
            <span>Population: </span><p>{data.population}</p>
            <span>Region: </span><p>{data.region}</p>
            <span>Capital: </span><p>{data.capital}</p>
          </div>
        </div>
      )
  }
}

export default Card;
