import { useState } from 'react';

const ColourCoder = () => {
  const [number, setNumber] = useState('')
  const [numberArray, setNumberArray] = useState([])


  const handleSubmit = (e) => {
    e.preventDefault();

    const arr = []
   for (let i = 1; i <= number; i++) {
      arr.push(i)
   }
   setNumberArray(arr)
  }

  const colourBoxes = () => {


    return numberArray.map((number, index) => {
      if (number === 1) {
        return <div key={index} className="grid-item" style={{ backgroundColor: "#F1BC33" }}>{number}</div>;
      } else if (number === 2) {
        return <div key={index} className="grid-item" style={{ backgroundColor: "#D5392F" }}>{number}</div>;
      } else {
        for (let i = 2; i < number; i++) {
          if (number % i === 0 && number % 2 === 0) {
            return <div key={index} className="grid-item" style={{ backgroundColor: "#75AD5D" }}>{number}</div>;
          } else if (number % i === 0 && number % 2 !== 0) {
            return <div key={index} className="grid-item" style={{ backgroundColor: "#F1BC33" }}>{number}</div>;
          }
        }
        return <div key={index} className="grid-item" style={{ backgroundColor: "#D5392F" }}>{number}</div>;
      }
    });
  };

  return (
    <div className='colour-coder-wrapper'>
      <h2>Colour Coder</h2>

      <form className="colour-form" onSubmit={handleSubmit}>
        <label htmlFor="quantity" className="colour-label" >Enter a number between 1 and 100:</label>
        <input htmlFor="quantity" placeholder="0" className="colour-input" type="number" min="1" max="100" required value={number} onChange={(e) => setNumber(e.target.value)} />
        <button className="colour-btn" type="submit">Generate!</button>
      </form>

      <div className="key">
      <p><span className="key-title">Key:</span></p>
      <p>Yellow = Odd and not prime</p>
      <p>Green = Even and not prime</p>
      <p>Red = Prime</p>
      </div>

      <div className="colour-coder-container">{colourBoxes()}</div>
    </div>
  );
};

export default ColourCoder;
