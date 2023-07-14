const Seasons = () => {

    const currentDate = new Date();
    const month = currentDate.getMonth()+1

    const autumnImage = require("../assets/images/autumn.jpg")
    const winterImage = require("../assets/images/winter.jpg")
    const springImage = require("../assets/images/spring.jpg")
    const summerImage = require("../assets/images/summer.jpg")

    const checkSeason = function (month) {
       
        if (month >= 9 && month <12) {
           return {currentSeason: 'Autumn',
                    img: autumnImage}
        } else if (month === 12 || month === 1 || month === 2) {
           return {currentSeason: 'Winter',
                    img: winterImage}
        } else if (month >=3 && month <6) {
            return {currentSeason: 'Spring',
                    img: springImage}
        } else if (month >=6 && month <9) {
           return {currentSeason: 'Summer',
                    img: summerImage} }
    }

    return (
      
        <div className='wrapper'>
          <h2>What season is it?</h2>
          <div className="season-container">
            <h3> It is currently {checkSeason(month).currentSeason}.</h3>
            <img className="season-image" src={checkSeason(month).img} alt={`A field in ${checkSeason(month).currentSeason}`}></img>
          </div>
        </div>
      
    );
  };
  
  export default Seasons;