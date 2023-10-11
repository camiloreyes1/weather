import axios from 'axios';
import { useState, useEffect } from 'react';
import Weather from './Weather';
import City from './City';

const Search = () => {
  const [city, setCity] = useState('');
  const [cities, setCities] = useState(null)
  const [name, setName] = useState("")
  const [visible, setVisibility] = useState(true)

  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/search.json',
    params: { q: `${city}` },
    headers: {
      'X-RapidAPI-Key': '6bf2e8c221mshd37db1dd6649100p167a91jsnd687b3c279fe',
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


  const bringBack = () => {
    setVisibility(true)
    setName("")
  }

  const textHandler = (event) => {
    setCity(event.target.value);
    console.log('city ==>', city);
    if (cities && !visible) {
      bringBack();
    }
  };

  return (
    <div>

      
<form>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search City, Zip Code, Coordinates..."   value={city} onChange={textHandler}/>
    </div>
</form>

      {cities && visible ? (
        <div>          
          {cities.map((c) => (
            <City key={c._id} {...c} setName={setName} visible={visible} setVisibility={setVisibility} />
          ))}  
        </div>
      ) : (
        <h1> </h1>
      )}
      {name && <Weather name={name} />}
    </div>
  );
};

export default Search;

