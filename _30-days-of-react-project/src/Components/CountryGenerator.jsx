import { useState } from "react";
import { countriesData } from "../data/countries";

const CountryGenerator = () => {
    const numberGenerator = Math.floor(Math.random()* countriesData.length-1) 
    const [country, setCountry] = useState(  {
        name: 'United Kingdom of Great Britain and Northern Ireland',
        capital: 'London',
        languages: ['English'],
        population: 65110000,
        flag: 'https://restcountries.eu/data/gbr.svg',
        currency: 'British pound',
      })

    const handleEvent =() => {
        setCountry(countriesData[numberGenerator])
    }

    return (
     
        <div className='wrapper'>
          <h2>Country Generator</h2>

            <div>
            <p>Press the button to get a country: </p>
            <button className="btn" onClick={handleEvent}>Generate!</button>        
            </div>

            <div className="country-container" >
                <h3>{country.name}</h3>
                <p>Capital: {country.capital}</p>
                <p>Languages: {country.languages}</p>
                <p>Population: {country.population}</p>
                <p>Currency: {country.currency}</p>
            </div>

        </div>
     
    );
  };
  
  export default CountryGenerator;