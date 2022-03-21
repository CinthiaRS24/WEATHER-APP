import React from "react";
import s from './Ciudad.module.css'
import NextDays from './NextDays';
import moment from "moment"
import imgPressure from '../images/pressure.png'
import imgHumidity from '../images/humidity.png'
import imgWind from '../images/wind.png'
import map from '../images/map.png'


export default function Ciudad({city}) {
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);

    const timeinminutes = city.timezone / 60;
    const currenttime = moment().utcOffset(timeinminutes).format('h:mm A');

    return (

        <div className={s.General}>

            <div className={s.tag}>


                <div>
                    <p className={s.title}>{city.name}</p>
                    <div className={s.divSubtitle}>
                        <p className={s.subTitle}>City ​​located in: </p>
                        <img className={s.flag} src={`https://flagcdn.com/w320/${city.flag}.png`} alt="img not found"/>   
                    </div>
                </div>
                

                <div className={s.secondPart}>

                    <div>
                        <div className={s.firstColum}>{hoy.toDateString()}</div>
                        <p className={s.firstColum}>{currenttime}</p>
                        <img className={s.imgMain} src={`http://openweathermap.org/img/wn/${city.img}@2x.png`} alt="img not found" />
                    </div>

                    <div>
                        <div>
                            <div className={s.temp}>{city.temp}ºC</div>
                            <div className={s.maxMin}>Max: {city.max}º   Min: {city.min}°</div>
                        </div>

                        <div className={s.divMap}>
                            <a className={s.aMap} target="_blank" rel="noreferrer" href={`https://maps.google.com/?ll=${city.latitud},${city.longitud}&z=12`} >
                                <img className={s.imagenMap} src={map} alt="img not found"/>
                                <p className={s.textMap}>View Map</p>
                            </a>
                        </div>
                    </div>
                    
                    <div className={s.lastColum}>
                        <div className={s.imgText}>
                            <img className={s.imgs} src={imgPressure} alt="Img-pressure"/>
                            <p className={s.textInfo}>Pressure: <br/>
                                {city.pressure}hPa
                            </p>
                        </div>

                        <div className={s.imgText}>
                            <img className={s.imgs} src={imgHumidity} alt="Img-humidity"/>
                            <p className={s.textInfo}>Humidity: <br/>
                                {city.humidity}%
                            </p>
                        </div>

                        <div className={s.imgText}>
                            <img className={s.imgs} src={imgWind} alt="Img-wind"/>
                            <p className={s.textInfo}>Wind: <br/>
                                {city.wind}km/h
                            </p>
                        </div>
                        
                    </div>

                </div>
                    
            </div>

                <NextDays city = {city}/>
        </div>

        
    )
}