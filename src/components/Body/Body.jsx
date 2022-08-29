import CurrentWeather from "../CurrentWeather/CurrentWeather";
import "./Body.css"

const Body = () => {

    return (
        <div className="body">

            <div className="col">
                <CurrentWeather />
            </div>
            <div className="col">

            </div>

        </div>
    )

}

export default Body;