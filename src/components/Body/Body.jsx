import CurrentWeather from "../CurrentWeather/CurrentWeather";
import Cities from "../Cities/Cities";

import "./Body.css"

const Body = () => {

    return (
        <div className="body">

            <div className="col">
                <CurrentWeather />
            </div>
            <div className="col">
                <Cities />
            </div>

        </div>
    )

}

export default Body;