import React, {useState} from "react";
import { useEffect } from "react";
import s from './NextDays.module.css'

const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function getDateFormat(time) {
    const dateObj = new Date(time * 1000)    
    const date = dateObj.getDate();
    const day = dateObj.getDay();
    const dayName = week[day];

    return `${dayName} ${date}`;
}


export default function NextDays({city}) {

    const [daysData, setDaysData] = useState([]);

    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.latitud}&lon=${city.longitud}&exclude=current,minutely,hourly,alerts&appid=d1d1c566b7fcea57a870f6514858abdc&units=metric`)
        .then(r => r.json())
        .then(response => {
            const daysResponse = response.daily;
            console.log('daysResponse', daysResponse);
            
            const daysData = daysResponse.map(day => {
                return {
                    dateFormat: getDateFormat(day.dt),
                    pop: day.pop,
                    icon: day.weather[0]["icon"],
                    min: Math.round(day.temp.min),
                    max: Math.round(day.temp.max),
                    description: day.weather[0]["description"],
                    id: day.weather[0]["id"]
                };
            });

            console.log('daysData', daysData);

            setDaysData(daysData);
        })
    }, [city])
  
    daysData.shift();

    return (
        <div className={s.tagsGeneral}>{
            daysData.map(dayData => (
                <div key={dayData.id} className={s.cardDaysStyle}>
                    <p className={s.titleDays}>{dayData.dateFormat}</p>
                    <img src={`http://openweathermap.org/img/wn/${dayData.icon}@2x.png`} width='80px' height='80px' alt="img not found"/>
                    <p className={s.description}>{dayData.description}</p>
                    <p className={s.pMaxMin}>{dayData.min}° / {dayData.max}°</p>
                </div>
            ))}
        </div>
    )

}



