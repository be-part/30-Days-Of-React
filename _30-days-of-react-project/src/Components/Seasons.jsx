const Seasons = () => {

    const currentDate = new Date();
    const month = currentDate.getMonth()+1


    const checkSeason = function (month) {
       
        if (month >= 9 && month <12) {
           return {currentSeason: 'Autumn',
                    img: '/images/autumn.jpg'}
        } else if (month === 12 || month === 1 || month === 2) {
           return {currentSeason: 'Winter',
                    img: '/images/winter.jpg'}
        } else if (month >=3 && month <6) {
            return {currentSeason: 'Spring',
                    img: '/images/spring.jpg'}
        } else if (month >=6 && month <9) {
           return {currentSeason: 'Summer',
                    img: '/images/summer.jpg'} }
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