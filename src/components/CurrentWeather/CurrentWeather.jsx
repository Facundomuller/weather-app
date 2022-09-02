import { useFetch } from '../useFetch';
import CurrentList from './CurrentList';

import "./CurrentWeather.css";

const CurrentWeather = () => {

    const {
        data: weatherData,
        isLoading
    } = useFetch('weather');

    if (!isLoading) {
        return (
            <div className='currentContainer'>
                <div className='currentCardContainer'>
                    <h2 className='currentCityName'>{weatherData.name}</h2>
                    <div className='currentCityWeather'>
                        <div className='now'>
                            <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" />
                            <p>{weatherData.main.temp}°</p>
                            <span>{weatherData.weather[0].description}</span>
                        </div>
                        <div className='other'>
                            <p>Humedad: {weatherData.main.humidity} %</p>
                            <p>Presión: {weatherData.main.pressure} hPa</p>
                            <p>Máx: {weatherData.main.temp_max}°</p>
                            <p>Mín: {weatherData.main.temp_min}°</p>
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