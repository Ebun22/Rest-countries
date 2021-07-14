import React from 'react'
import axios from 'axios'
import Info from './info';

const Details=({country, info, border, handleBorder, decrement })=>{
  const search = []
  search.push(country.find(item=>{
      //console.log(item.name.toLowerCase().startsWith(info.toLowerCase().trim()))
      return (
      item.name.toLowerCase().startsWith(info.toLowerCase().trim()),
      item.alpha3Code.toLowerCase().includes(border.toLowerCase())
      )
    }))
    console.log(search)
    return (
      <div>
        <button onClick={decrement}>Back</button>
        {
          <Info details={search} click={handleBorder} />
        }
      </div>
    )
  }

export default Details;
