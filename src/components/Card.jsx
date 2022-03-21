import React from 'react';
import s from './Card.module.css';
import { Link } from 'react-router-dom';
import imgPressure from '../images/pressure.png'
import imgHumidity from '../images/humidity.png'
import imgWind from '../images/wind.png'
import moment from "moment"

export default function Card({min, max, name, img, onClose, id, country, flag, pressure, humidity, wind, timezone}) {
 
  const timeinminutes = timezone / 60;
  const currenttime = moment().utcOffset(timeinminutes).format('h:mm A');
 
 
  return (

  <div className={s.cardStyle}>

    <div>
      <button onClick={() => onClose(id)} className={s.btn}>X</button>
    </div>
    

    <div className={s.componentTag}>

      <div className={s.firstColum}>

        <Link className={s.links} to={`/ciudad/${id}`}>
          <h4 className={s.title}>{name}</h4>
        </Link>

        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="img not found" />
          
        <div className={s.grados}>
          <p className={s.maxTemp}>{max}°</p>
          <p className={s.minTemp}>{min}°</p>
        </div>
      
      </div>


      <div className={s.secondColum}>

        <div className={s.imgText}>
          <img className={s.imgs} src={imgPressure} alt="Img-pressure"/>
          <p className={s.textInfo}>Pressure: <br/>
            {pressure}hPa
          </p>
        </div>
        
        <div className={s.imgText}>
          <img className={s.imgs} src={imgHumidity} alt="Img-humidity"/>
          <p className={s.textInfo}>Humidity: <br/>
            {humidity}%
          </p>
        </div>

        <div className={s.imgText}>
          <img className={s.imgs} src={imgWind} alt="Img-wind"/>
          <p className={s.textInfo}>Wind: <br/>
             {wind}km/h
          </p>
        </div>
       
      </div>


      <div className={s.lastColum}>
        <p className={s.time}>{currenttime}</p>
        <p className={s.country}>País: {country} <br></br> 
        <img className={s.flag} src={`https://flagcdn.com/w320/${flag}.png`} alt="img not found"/></p>
      </div>
        
    </div>
     
  </div>
 )
};