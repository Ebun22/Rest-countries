import React, { Component } from 'react'

class Card extends Component {
  render(){
    const { data, click } = this.props
      return(
        <div onClick={click} class="rounded overflow-hidden shadow-2xl bg-gray-700">
          <div class="w-full h-48">
            <img style={{objectFit: "cover",  height: "100%", width: "100%"}} src={data.flag} alt="flag" />
          </div>
          <div className="details sm:p-7">
            <p class="sm:text-lg font-bold sm:pb-4">{data.name}</p>
            <p><span class="font-medium">Population: </span><span class="font-hairline">{data.population}</span></p>
            <p><span class="font-medium">Region: </span><span class="font-hairline">{data.region}</span></p>
            <p><span class="font-medium">Capital: </span><span class="font-hairline">{data.capital}</span></p>
          </div>
        </div>
      )
  }
}

export default Card;
