const Header = () => {
  const explanation = 'This is an example of a React app for practise.';

  return (
    <header>
      <div className='header-wrapper'>
        <h1>Welcome to a <span className='italic'>30DaysOfReact</span> Project</h1>
        <p>{explanation}</p>
      </div>
    </header>
  );
};

export default Header;