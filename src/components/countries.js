import React from 'react'
import Card from "./countryCard"
import Search from "./Search"
import Filter from "./filter"


const Countries=({ country, name, region , handleSearch, handleClick, handleFilter, dropDown })=>{
    const search = country.filter(item=>{
      return (
        item.name.toLowerCase().includes(name.toLowerCase().trim()) &&
        item.region.toLowerCase().includes(region.trim())
      )
    })
    return (
      <div class="bg-gray-800 px-16 grid gap-9">
        <Search change={handleSearch} />
        <nav class="row-start-1 col-start-4 my-7 justify-self-end">
          <button class="bg-gray-700 py-2 px-4 rounded text-sm pr-8">Filter by Region</button>
          {dropDown ? <Filter region={handleFilter} dropDown={dropDown}/> : " "}
        </nav>
        {
          country.length ? search.map((data)=>{
            return(
                <Card data={data} key={data.numericCode} click={handleClick} />
            )
          }) : <div>LOADING...</div>
        }
      </div>
    )
}

export default Countries;
