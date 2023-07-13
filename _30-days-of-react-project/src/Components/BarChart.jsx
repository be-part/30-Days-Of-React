import { tenHighestPopulation } from "../data/ten_most_highest_populations";

const BarChart = () => {
    
    return (
     
        <div className='header-wrapper'>
          <h2>Bar Chart</h2>

          <ul>
          {tenHighestPopulation.map((country, index) => {
            return (
            <li key={index} className="single-country">
                <p className="country-info" >{country.country.toUpperCase()}</p>
                <div className="bar-chart" style={{ width: `${(country.population / 7693165599) * 100}%` }}></div>
                <p className="country-info"> {country.population}</p>
            </li>)
          })}
          </ul>

        </div>
      
    );
  };
  
  export default BarChart;