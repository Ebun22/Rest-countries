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
      <div class="md:bg-blue-800 sm:bg-red-800 bg-gray-800 md:px-16 mx-4 md:mx-0 px-0 md:grid md:gap-9 sm:gap-4">
        <Search change={handleSearch}/>
        <nav class="row-start-1 col-start-4 md:my-7 my-10 mt-2 mx-4 md:mx-0 justify-self-end">
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
