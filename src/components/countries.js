import React from 'react'
import Card from "./countryCard"
import Search from "./Search"
import Filter from "./filter"


const Countries=({ country, name, region , handleSearch, handleClick, handleFilter })=>{
    const search = country.filter(item=>{
      return (
        item.name.toLowerCase().includes(name.toLowerCase().trim()) &&
        item.region.toLowerCase().includes(region.trim())
      )
    })
    return (
      <div>
      <Search change={handleSearch} />
      <nav>
      <button>Filter</button>
      <Filter region={handleFilter} />
      </nav>
        {
          country.length ? search.map((data)=>{
            return(
              <Card data={data} key={data.numericCode} click={handleClick}/>
            )
          }) : <div>LOADING...</div>
        }
      </div>
    )
}

export default Countries;
