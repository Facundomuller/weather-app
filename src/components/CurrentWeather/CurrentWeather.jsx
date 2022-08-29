import { useEffect, useState } from 'react';
import { Geolocation } from '../Functions';
import CurrentList from './CurrentList';

import "./CurrentWeather.css";

const CurrentWeather = () => {

    const geolocation = Geolocation();

    // Variables
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    // Petición del clima actual
    useEffect(() => {

        if (geolocation) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${geolocation.latitude}&lon=${geolocation.longitude}&appid=f6bcf45c7db82e275f9a777e9b288c83&units=metric&lang=sp`)
            .then( response => response.json() )
            .then( res => {
                setData(res);
                setIsLoading(false)
            } );
        }

    }, [geolocation]);

    if (!isLoading) {
        return (
            <div className='currentContainer'>
                <div className='currentCardContainer'>
                    <h2 className='currentCityName'>{data.name}</h2>
                    <div className='currentCityWeather'>
                        <div className='now'>
                            <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" />
                            <p>{data.main.temp}°</p>
                            <span>{data.weather[0].description}</span>
                        </div>
                        <div className='other'>
                            <p>Humedad: {data.main.humidity} %</p>
                            <p>Presión: {data.main.pressure} hPa</p>
                            <p>Máx: {data.main.temp_max}°</p>
                            <p>Mín: {data.main.temp_min}°</p>
                        </div>
                    </div>
                </div>
                <div className='currentListContainer'>
                    <CurrentList />
                </div>
            </div>
        );
    }

    // Respuesta si el fetch aún no cargó
    return (
        <div className='currentContainer'>
          <h3>Cargando...</h3>
        </div>
    );

}

export default CurrentWeather;