import React, { useEffect, useState } from "react";
import styles from "./card.module.css";

const Card = () => {
 const [countries, setCountries] = useState([]);

const fetchCountries = async() => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const result = await response.json();
    setCountries(result);
  } catch(err) {
    console.log(err);
  }
}

useEffect(() => {
  fetchCountries();
}, []);
 
// console.log(countries);

return (
  <div className={styles.grid}>
    {
      countries.map((country) => (
        <div className={styles.card}>
          <img src={country.flags.png} alt={country.name.common} width={100} height={80}/>
          <p>{country.name.common}</p>
        </div> 
      ))
    }
  </div>
)
} 

export default Card;