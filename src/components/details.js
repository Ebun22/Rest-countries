import React, {Component} from 'react'
import axios from 'axios'
import Info from './info';

class Details extends Component{
  render(){
    const {country, info, border, handleBorder, decrement, count } = this.props
  const search = country.filter(item=>{
        return item.name.toLowerCase().includes(info.toLowerCase().trim())
      })
      const searchborder = country.filter(item=>{
        return (item.alpha3Code.toLowerCase().includes(border.toLowerCase()))
      })
      console.log(count)
      return (
        <div class="px-16">
          <button onClick={decrement} class="bg-gray-700 sm:my-16 sm:py-2 px-4 md:pt-12 rounded text-sm pr-8">Back</button>
          {
            <Info details={!border ? search : searchborder} click={handleBorder} />
          }
        </div>
      )
  }

  }

export default Details;
