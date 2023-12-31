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
    <br></br>
    <button onClick={seeWeather} type="button" class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">{name}, {region}, {country}</button>
    <br></br>
</div>
  )
}

export default City
