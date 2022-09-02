
const Items = ( data ) => {

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
            compDate.length === 1 ? compDate = `0${compDate}` : compDate = compDate;
            
            if (splitElem[2] === compDate) {
                
                tempMax < elem.main.temp_max ? tempMax = elem.main.temp_max : tempMax = tempMax;
                tempMin > elem.main.temp_min ? tempMin = elem.main.temp_min : tempMin = tempMin;
                
            }
        
        });
        let setDayName = dayName[dateSet.getDay()]
        liList.push(<li>
                        <h4 className="NextDayName">{setDayName}</h4>
                        <p className="NextDayMin">Máx: {tempMax}°</p>
                        <p className="NextDayMax">Mín: {tempMin}°</p>
                    </li> );
    }

    return liList;

}

export default Items