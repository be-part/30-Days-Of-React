import { useState } from 'react';

const Hexadecimal = () => {
  const [number, setNumber] = useState('');
  const [boxes, setBoxes] = useState([]);

  const hexaColor = () => {
    let str = '0123456789abcdef';
    let color = '';
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length);
      color += str[index];
    }
    return '#' + color;
  };

  const makeBoxes = (number) => {
    const newBoxes = [];
    for (let i = 0; i < number; i++) {
      newBoxes.push(
        <div key={i} style={{ backgroundColor: hexaColor() }} className="grid-item">
          {hexaColor()}
        </div>
      );
    }
    return newBoxes;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedBoxes = makeBoxes(Number(number));
    setBoxes(generatedBoxes);
  };

  return (
    <div className="colour-generator-wrapper">
      <h2>Colour Generator</h2>
      <form className="colour-form" onSubmit={handleSubmit}>
        <label htmlFor="quantity" className="colour-label" >Enter a number between 1 and 100:</label>
        <input htmlFor="quantity" placeholder="0" className="colour-input" type="number" min="1" max="100" required value={number} onChange={(e) => setNumber(e.target.value)} />
        <button className="colour-btn" type="submit">Generate!</button>
      </form>

      <div className="hexadecimal">{boxes}</div>
    </div>
  );
};

export default Hexadecimal;
