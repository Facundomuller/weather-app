import { useFetch } from "../useFetch";

const CitiesItems = () => {

    const {
        data: weatherData,
        isLoading
    } = useFetch('weather', true);

    if (!isLoading) {
        return (
            <div className='citiesCardContainer'>
                    <h2 className='citiesCityName'>{weatherData.name}</h2>
                    <div className='citiesCityWeather'>
                        <div className='now'>
                            <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" />
                            <p>{weatherData.main.temp}°</p>
                            <span>{weatherData.weather[0].description}</span>
                        </div>
                        <div className='other'>
                            <p>Máx: {weatherData.main.temp_max}°</p>
                            <p>Mín: {weatherData.main.temp_min}°</p>
                        </div>
                    </div>
                </div>
        );
    }

}

export default CitiesItems