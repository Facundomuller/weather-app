import { useEffect, useState } from "react";
import { Geolocation} from "../Functions";

const CurrentList = () => {

    const geolocation = Geolocation();

    // Variables
    const [data, setData] = useState(null);
    let arrTemp = []

    // Petición del clima actual
    useEffect(() => {

        if (geolocation) {
            fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${geolocation.latitude}&lon=${geolocation.longitude}&appid=f6bcf45c7db82e275f9a777e9b288c83&units=metric&lang=sp`)
            .then( response => response.json() )
            .then( res => {
                setData(res);
            } );
        }

    }, [geolocation]);

    if (data) {
        let date = new Date();
        let dateSet = new Date(date.getTime());
        let dayName = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        let liList = []

        for (let i = 0; i < 4; i++) {
            dateSet.setDate(dateSet.getDate() + 1);
            let tempMax = -999;
            let tempMin = 999;
            data.list.forEach(elem => {

                let splitElem = elem.dt_txt.split(" ")
                splitElem = splitElem[0].split("-");

                let compDate = dateSet.getDate().toString()
                compDate.length === 1 ? compDate = `0${compDate}` : compDate = compDate
                if (splitElem[2] === compDate) {
                    
                    tempMax < elem.main.temp_max ? tempMax = elem.main.temp_max : tempMax = tempMax;
                    tempMin > elem.main.temp_min ? tempMin = elem.main.temp_min : tempMin = tempMin;
                    
                }
            
            });
            let setDayName = dayName[dateSet.getDay()]
            liList.push(<li>
                            <h4 className="NextDayName">{setDayName}</h4>
                            <p className="NextDayMin">Máx: {tempMin}°</p>
                            <p className="NextDayMax">Mín: {tempMax}°</p>
                        </li> );
        }

        return (

            <div>
                <h3>Próximos días</h3>
                <ul>
                    {liList}
                </ul>
            </div>

        );
        
    }

    return <></>;

}

export default CurrentList;