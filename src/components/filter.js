import React, { Component } from 'react'

class Filter extends Component {
  render(){
    const { region, dropDown } = this.props
    let className =  dropDown ? "className" : " " 
    return (
      <div className={className}>
        <p onClick={region}>Africa</p>
        <p onClick={region}>America</p>
        <p onClick={region}>Asia</p>
        <p onClick={region}>Europe</p>
        <p onClick={region}>Oceania</p>
      </div>
    )
  }
}

export default Filter;
