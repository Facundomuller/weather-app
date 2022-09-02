import { useFetch } from "../useFetch";
import Items from "./Items";

const CurrentList = () => {

    let cities = []
    const {
        data: weatherData,
        isLoading
    } = useFetch('forecast');

    if (!isLoading) {

        const listItems = Items(weatherData)

        return (

            <div>
                <h3>Próximos días</h3>
                <ul>
                    {listItems}
                </ul>
            </div>

        );
        
    }

    return <></>;

}

export default CurrentList;