import { useState, useEffect } from 'react';
import Search from './Search';
import axios from 'axios';


 const Weather = ({ name }) => {

    //  the actual    temp variable the set variable is what is changing
    const [response, setResponse] = useState(null);

    const fetchWeater = async () => {

        try {
            const res = await axios.get('https://weatherapi-com.p.rapidapi.com/current.json', {
                headers: {
                    'X-RapidAPI-Key': 'c12851fd20msh21d808cb922c788p103241jsn91fe9186b684',
                    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                },
                params: { q: `${name}` },
            });

            setResponse(res.data);
            console.log(res.data);

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
    console.log("Weather Name ===> ",name)
    fetchWeater();

        },[])

    return (

        <div>
        {response?(

        <>
        
        <h4>Location: {response.location.name}, {response.location.region}, {response.location.country} </h4>

        <p>Temperature: {response.current.temp_f} °F,  {response.current.temp_c} °C</p>

        <p>Humidity: {response.current.humidity} </p>

        <p>Time Zone: {response.location.tz_id}</p>

        <p>{response.current.condition.text}</p>
        <img src={response.current.condition.icon}/> 
        </>

        ) :(
            <p>Loading...</p>
        )}

        
         
        </div>
    )
};
export default Weather
