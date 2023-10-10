import Weather from './Weather';
import { useState } from 'react';

const City = ({name, region, country, setName, setVisibility, visible}) => {
    const seeWeather = () => {
        console.log("Name ===>", name)
        setName(name)
        setVisibility(false)
    }
  return (
  <div>
    <button  onClick={seeWeather} type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">{name}</button>
    <p>{region}</p>  
    <p>{country}</p>
    <br></br>
</div>
  )
}

export default City
