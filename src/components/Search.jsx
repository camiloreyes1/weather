import axios from 'axios';

// const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/search.json',
  params: {q: '<REQUIRED>'},
  headers: {
    'X-RapidAPI-Key': 'c12851fd20msh21d808cb922c788p103241jsn91fe9186b684',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}


const Search = () => {
  return (
    <div>Search</div>
  )
}

export default Search