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
              <div className="cont flex flex-row sm:pb-20  gap-24" key={index}>
                <div className="flag" class="max-w-xl" >
                <img src={detail.flag}  />
                </div>

                <div className="info grid gap-x-16">
                  <p class="sm:font-bold sm:text-2xl self-center col-start-1 col-span-2 mb-8 mt-4">{detail.name}</p>
                  <div className="row-start-2 col-start-1">
                    <p><span class="font-normal">Native Name:</span> <span class="font-hairline text-gray-300">{detail.nativeName}</span></p>
                    <p><span class="font-normal">Population:</span> <span class="font-hairline text-gray-300">{detail.population}</span></p>
                    <p><span class="font-normal">Region:</span> <span class="font-hairline text-gray-300">{detail.region}</span></p>
                    <p><span class="font-normal">Sub Region:</span> <span class="font-hairline text-gray-300">{detail.subregion}</span></p>
                    <p><span class="font-normal">Capital:</span> <span class="font-hairline text-gray-300">{detail.capital}</span></p>
                  </div>
                  <div className="row-start-2 col-start-2">
                    <p><span class="font-normal">Top Level Domain:</span> <span class="font-hairline text-gray-300">{detail.topLevelDomain}</span></p>
                    <p><span class="font-normal">Currencies:</span> <span class="font-hairline text-gray-300">{detail.currencies.map(curr=> curr.name)}</span></p>
                    <p><span class="font-normal">Languages:</span> <span class="font-hairline text-gray-300">{detail.languages.map(lan=> lan.name + ", ")}</span></p>
                  </div>
                  <div className="row-start-3 col-span-2">
                    <p><span class="font-medium">Border countries:</span> <span>{
                      detail.borders.map((bor,index)=> {
                        return <button key={index} onClick={this.props.click}
                          style={{boxShadow:" 5px 5px 5px 0px hsla(0, 0%, 0%, 0.1)"}}
                         class="bg-gray-700 m-2 py-2 px-4 rounded text-sm"
                        >
                      {bor}
                      </button>})
                    }</span></p>
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
