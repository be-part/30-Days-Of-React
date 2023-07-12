const TechImages = () => {

  const images = ["/images/html_logo.png", "/images/css_logo.png", "/images/react_logo.png"];
  
  const techsImages = images.map((image) => (
    <li className='images' key={image}>
      <img src={image} alt="" />
    </li>
  ));

  return (
    <div className='images-wrapper'>
      <p className='text'><span className='bold'>Front End Technologies</span></p>
      <ul className='images-list'>{techsImages}</ul>
    </div>
  );
};

export default TechImages;
