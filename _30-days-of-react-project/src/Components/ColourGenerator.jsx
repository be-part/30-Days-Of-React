import { useState } from 'react';

const Hexadecimal = () => {
  const [number, setNumber] = useState('');
  const [boxes, setBoxes] = useState([]);
  const [codeType, setCodeType] = useState('hex')

  const hexaColor = () => {
    let str = '0123456789abcdef';
    let color = '';
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length);
      color += str[index];
    }
    return '#' + color;
  };

  const rgbColour = () => {
      let total = 0;
      while (total < number) {
          let resultArray = []
          let setOfThree = 0;

              while (setOfThree < 3) {
                  let counter = 0;
                  let result = ''
                   const setLength = Math.ceil(Math.random() * 3)
                          while (counter < setLength) {
                          
                          result += Math.floor(Math.random() * 4);
                          counter +=1;
                          }
                      let parsedNumber = parseInt(result) 
                      resultArray.push(parsedNumber)
                      setOfThree +=1;
          }
          total +=1;
          return "rgb(" + resultArray + ")"
          
      }
  
  }

  const makeBoxes = (number) => {
    

    if (codeType === 'RGB') {
      const newBoxes = [];
      for (let i = 0; i < number; i++) {
        newBoxes.push(
          <div key={i} style={{ backgroundColor: rgbColour() }} className="grid-item">
            {rgbColour()}
          </div>
        );
      } return newBoxes

    } else if (codeType === 'hex') {
      const newBoxes = [];
       for (let i = 0; i < number; i++) {
      newBoxes.push(
        <div key={i} style={{ backgroundColor: hexaColor() }} className="grid-item">
          {hexaColor()}
        </div>
      );
    } return newBoxes
      
    }
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedBoxes = makeBoxes(Number(number));
    setBoxes(generatedBoxes);
  };

  return (
    <div className="wrapper">
      <h2>Colour Generator</h2>
      <form className="colour-form" onSubmit={handleSubmit}>
      
      <label htmlFor="code" className="code-label" >Choose a code type:</label>
      <select className="code-input" name="code" htmlFor="code" onChange={(e) => setCodeType(e.target.value)}>
        <option className="value-input" value="hex">Hexadecimal</option>
        <option className="value-input" value="RGB">RGB</option>
      </select>
        <label htmlFor="quantity" className="colour-label" >Enter a number between 1 and 100:</label>
        <input htmlFor="quantity" placeholder="0" className="colour-input" type="number" min="1" max="100" required value={number} onChange={(e) => setNumber(e.target.value)} />
        <button className="btn" type="submit">Generate!</button>
      </form>

      <div className="hexadecimal">{boxes}</div>
    </div>
  );
};

export default Hexadecimal;
