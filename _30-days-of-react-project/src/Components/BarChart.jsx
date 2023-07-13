import { tenHighestPopulation } from "../data/ten_most_highest_populations";

const BarChart = () => {
    
    return (
     
        <div className='wrapper'>
          <h2>Bar Chart</h2>
          <h3 className="bar-title" >World Population</h3>
          <p className="explanation" >Ten most populated countries.</p>
          <ul>
          {tenHighestPopulation.map((country, index) => {
            return (
            <li key={index} className="single-country">
                <p className="country-info" >{country.country.toUpperCase()}</p>
                <div className="bar-chart" style={{ width: `${(country.population / 7693165599) * 100}%` }}></div>
                <p className="country-info"> {country.population.toLocaleString()}</p>
            </li>)
          })}
          </ul>

        </div>
      
    );
  };
  
  export default BarChart;