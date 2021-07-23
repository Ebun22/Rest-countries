import React from 'react'
import { MoonIcon } from '@heroicons/react/solid'

function Header({lightMode, handleTheme}){
  return (
    <div class="flex flex-row justify-between py-4 shadow-2xl bg-gray-700 sm:px-16">
      <h1 class="text-xl font-bold">Where in the word?</h1>
      <button onClick={handleTheme} >
        {lightMode ? "Light Mode" : <MoonIcon />,"Dark Mode"}
      </button>
    </div>
  )
  }

export default Header;
