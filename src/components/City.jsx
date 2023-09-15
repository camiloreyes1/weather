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
    <button onClick={seeWeather}>{name}</button>
    <p>{region}</p>  
    <p>{country}</p>
    </div>
  )
}

export default City
