import React, { Component } from 'react'

class Search extends Component {

  render(){
    const { country, query, change, submit } = this.props
    return (
      <form onSubmit={submit}>
        <input type="search"  value={query} onChange={change} />
      </form>
    )
  }
}

export default Search;
