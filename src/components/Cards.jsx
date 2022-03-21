import React from 'react';
import Card from './Card';
import s from './Cards.module.css';

export default function Cards({cities, onClose}) {
  
  let emptyHome = cities.length;
  
  
    return (
      <div>
        {
          <div className={s.cardGen}>
            {
            cities && cities.map(c => ( 
              <Card
                key={c.id}
                max={c.max}
                min={c.min}
                name={c.name}
                img={c.img}
                onClose={onClose}
                id={c.id}
                country={c.country}
                flag={c.flag}
                pressure={c.pressure}
                humidity={c.humidity}
                wind={c.wind}
                timezone={c.timezone}
              />
            ))
            }
          </div>
        }

        {
          !emptyHome ?<div className={s.divHome}> 
              <h1 className={s.h1}>  WELCOME TO THE WEATHER APP</h1>
              <img className={s.img} src="https://i.pinimg.com/originals/d2/9b/d9/d29bd92275fc40c9a4f23b624ba0bc55.gif" alt='img not found'/>
              <h3 className={s.h3}>  Start searching for a city</h3>
            </div>: <p></p>
        }
      </div>
    )
};