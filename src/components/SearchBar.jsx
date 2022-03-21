import React, { useState } from "react";
import s from './SearchBar.module.css';

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState('');

  return (
    <form className={s.styleDiv} onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('');
    }}>
      <input
        className={s.input}
        type="text"
        placeholder="City..."
        value = {city}
        onChange = {e => setCity(e.target.value)}

      />
      <input type="submit" className={s.btn} value="Search" />
    </form>
  );
};
