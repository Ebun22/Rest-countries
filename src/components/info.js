import React, { Component } from 'react'
import axios from 'axios'


class Info extends Component {
  render(){
    const { details } = this.props
    return (
      <div>
        {
          details.map((detail, index)=>{
            return(
              <div className="cont" key={index}>
                <div className="flag">
                <img src={detail.flag} />
                </div>

                <div className="info">
                  <p>{detail.name}</p>
                  <div className="f-left">
                    <p>Native Name: <span>{detail.nativeName}</span></p>
                    <p>Population: <span>{detail.population}</span></p>
                    <p>Region: <span>{detail.region}</span></p>
                    <p>Sub Region: <span>{detail.subregion}</span></p>
                    <p>Capital: <span>{detail.capital}</span></p>
                  </div>
                  <div className="r-left">
                    <p>Top Level Domain: <span>{detail.topLevelDomain}</span></p>
                    <p>Currencies: <span>{detail.currencies[0].name}</span></p>
                    
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Info;