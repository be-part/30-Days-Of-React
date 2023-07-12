const Hexadecimal = () => {

    const hexaColor = () => {
        let str = '0123456789abcdef'
        let color = ''
        for (let i = 0; i < 6; i++) {
          let index = Math.floor(Math.random() * str.length)
          color += str[index]
        }
        return '#' + color
      }
      
      return (
        <div className="hexadecimal">
        <div style={{ width: '200px', height: '30px', backgroundColor: hexaColor() }}></div>
        <div style={{ width: '200px', height: '30px', backgroundColor: hexaColor() }}></div>
        <div style={{ width: '200px', height: '30px', backgroundColor: hexaColor() }}></div>
        </div>
      ) 
}

export default Hexadecimal