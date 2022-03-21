import React, { useState } from 'react'; //Se agregó el { useState }
import {Route, Switch} from 'react-router-dom'
import { Redirect } from 'react-router-dom';
import swal from 'sweetalert';

import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import About from './components/About.jsx';
import Ciudad from './components/Ciudad';

function App() {
  const [cities, setCities] = useState([]);


  function onSearch (ciudad) {
    //Acá habría que hacer el llamado a la API para obtener los datos de la ciudad
    //pero de momento agregaremos una ciudad por default para ver que funcione

    let detalle = ciudad;
    let transformar = detalle.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
    let compare = transformar.charAt(0).toUpperCase() + transformar.slice(1);

    for (let i = 0; i < cities.length; i++) {
      if(compare === cities[i]['name']) {
        return swal({
          title: "This city has already been added",
          text: "Search a different city",
          icon: "error",
          button: "Ok"
        });
      }
    }

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=d1d1c566b7fcea57a870f6514858abdc&units=metric`)
    .then(r => r.json())
    .then((recurso) => {
      if(recurso.main !== undefined){
        const ciudad = {
          min: Math.round(recurso.main.temp_min),
          max: Math.round(recurso.main.temp_max),
          feels: Math.round(recurso.main.feels_like),
          img: recurso.weather[0].icon,
          id: recurso.id,
          wind: recurso.wind.speed,
          temp: Math.round(recurso.main.temp),
          name: recurso.name,
          weather: recurso.weather[0].main,
          weatherD: recurso.weather[0].description,
          clouds: recurso.clouds.all,
          latitud: recurso.coord.lat,
          longitud: recurso.coord.lon,
          country: recurso.sys.country,
          flag: recurso.sys.country.toLowerCase(),
          pressure: recurso.main.pressure,
          humidity: recurso.main.humidity,
          timezone: recurso.timezone
        };

        setCities(oldCities => [...oldCities, ciudad]);
      } else {
        return swal({
          title: "City ​​not found",
          text: "Check if the entered name is correct",
          icon: "error",
          button: "Ok"
        });
      }
    });
  }


  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  function onFilter(ciudadId) {
    let ciudad = cities.find(c => c.id === parseInt(ciudadId));
    return ciudad;
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      <Switch>
      <Redirect from="/ciudad/about" to="/about" />
        <Route path='/about'>
          <About />
        </Route>
        <Route exact path='/ciudad/:ciudadId'>
          {({match}) => <Ciudad city={onFilter(match.params.ciudadId)} />}
        </Route>
        <Route path='/'>
          <Cards cities={cities} onClose={onClose}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
