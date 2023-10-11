import { useState, useEffect } from 'react';
import Search from './Search';
import axios from 'axios';

const Weather = ({ name }) => {

    //  the actual    temp variable the set variable is what is changing
    const [response, setResponse] = useState(null);
    const [astroResponse, setAstroResponse] = useState("");


    const fetchWeater = async () => {
        try {
            const res = await axios.get('https://weatherapi-com.p.rapidapi.com/current.json', {
                headers: {
                    'X-RapidAPI-Key': '6bf2e8c221mshd37db1dd6649100p167a91jsnd687b3c279fe',
                    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                },
                params: { q: `${name}` },
            });

            setResponse(res.data);
            console.log(res.data);

            const resAstro = await axios.get('https://weatherapi-com.p.rapidapi.com/astronomy.json', {
                headers: {
                    'X-RapidAPI-Key': '6bf2e8c221mshd37db1dd6649100p167a91jsnd687b3c279fe',
                    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                },
                params: { q: `${name}` },
            });

            setAstroResponse(resAstro.data)
            console.log(resAstro.data);

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        console.log("Weather Name ===> ", name)
        fetchWeater();

    }, [name])

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
            {response && astroResponse ? (
                <>

                    <a class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {response.location.name}, {response.location.region}, {response.location.country}</h5>
                        <p>Temperature: {response.current.temp_f} °F,  {response.current.temp_c} °C</p>
                        <p>Humidity: {response.current.humidity} </p>
                        <p>Condition: {response.current.condition.text}</p>
                        <br></br>
                        <p>Sunrise: {astroResponse.astronomy.astro.sunrise}</p>
                        <p>Sunset: {astroResponse.astronomy.astro.sunset}</p>
                        <p>Moon Phase: {astroResponse.astronomy.astro.moon_phase} </p>

                        <img src={response.current.condition.icon} />
                    </a>
                    <br>
                    </br>  

                    

                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
};
export default Weather
