import { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {

    //  the actual    temp variable the set variable is what is changing
    const [response, setResponse] = useState([]);
    const fetchWeater = async () => {
        try {
            const res = await axios.get('https://weatherapi-com.p.rapidapi.com/current.json', {
                headers: {
                    'X-RapidAPI-Key': 'c12851fd20msh21d808cb922c788p103241jsn91fe9186b684',
                    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                },
                params: { q: '53.1,-0.13' },
            });

            setResponse(res.data);
            console.log(res.data);

        } catch (err) {
            console.log(err);
        }
    };

    // it's a parameter for what happens after the function is done
    useEffect(() => {
        // Trigger the API Call
        fetchWeater();
    }, []);


    return (

        <div>
          <p>Location: {response.location.name}  </p>
          {/* <p>Temperature: {response.current.temp_f}°C</p>          */}
        </div>
    )
};


export default Weather