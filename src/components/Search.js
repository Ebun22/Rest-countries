import React, { Component } from 'react'

class Search extends Component {
  render(){
    const { country, query, change } = this.props
    return (
        <input type="search"  value={query} onChange={change} placeholder="Search for a country"
        style={{boxShadow:" 5px 5px 5px 0px hsla(0, 0%, 0%, 0.1)"}}
        className="row-start-1 col-start-1"
        class="my-7 md:mx-0 mx-4 py-2 sm:px-20 bg-gray-700 focus:outline-none rounded-md placeholder-white placeholder-opacity-25 md:col-span-3 sm:col-span-2  md:justify-self-start"
        />
      )
  }
}

export default Search;
