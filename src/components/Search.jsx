import axios from 'axios';
import { useState, useEffect } from 'react';
import Weather from './Weather';
import City from './City';

const Search = () => {
  const [city, setCity] = useState('');
  const [cities, setCities] =useState(null)
  const [name, setName] =useState("")
  const [visible, setVisibility] = useState(true)

  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/search.json',
    params: { q: `${city}` },
    headers: {
      'X-RapidAPI-Key': 'c653db3d66msh51a730c880982cfp1b9ff5jsn7f8a1b1556f8',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    },
  };

  const search = async () => {
    try {
      const response = await axios.request(options);
      console.log('Cities ===>', response.data);
      setCities(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {

    search();
    console.log('City ===>', city);
  }, [city]); 


  const bringBack =() =>{
    setVisibility(true)
    setName("")
  }

  const textHandler = (event) => {
    setCity(event.target.value);
    console.log('city ==>', city);
    if(cities && !visible){
      bringBack();
    }
  };

  return (
    <div>
      <input
        placeholder="Type city or zip code"
        type="text"
        value={city}
        onChange={textHandler}
      ></input>

    {cities && visible ? (
        <div>
          <h1>Cities</h1>
          {cities.map((c) => (
            <City key={c._id} {...c} setName={setName} visible={visible} setVisibility={setVisibility} />
          ))}
        </div>
      ) : (
        <h1>No cities</h1>
      )}
      {name && <Weather name={name} />}
    </div>
  );
};

export default Search;

