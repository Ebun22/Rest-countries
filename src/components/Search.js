import React, { Component } from 'react'

class Search extends Component {
  render(){
    const { country, query, change } = this.props
    return (
        <input type="search"  value={query} onChange={change} />
      )
  }
}

export default Search;
