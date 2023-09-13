import axios from 'axios';
import { useState, useEffect } from 'react';

const Search = () => {

const [data, setData] = useState([])

  const search  = async () => {
    try {
      const res = await axios.get(
        `https://weatherapi-com.p.rapidapi.com/search.json`,
        {
          headers: {
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
            'x-rapidapi-key': 'c12851fd20msh21d808cb922c788p103241jsn91fe9186b684'
          },
          params: {q:`${data}`}
        }
      );

      setData(res.data)
      console.log(res.data)
      
    } catch (err) {
      console.log(err);
    }

    useEffect(() => {
      search
    },[])
  };

  return (
    <div>Search</div>
  )
}

export default Search