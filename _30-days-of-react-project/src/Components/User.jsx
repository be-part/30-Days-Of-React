import React from 'react';

const imageSource = require("../assets/images/blank_profile.png")

const techs = ['HTML', 'CSS', 'JavaScript', 'React', 'SQL'];
const techsFormatted = techs.map((tech) => (
  <li className='techs' key={tech}>{tech}</li>
));

const User = () => {
  return (
    <main>
      <div className='wrapper'>
        <img className="profile-image" src={imageSource} alt="blank profile silhouette" />
        <p className='text'><span className='bold'>YOUR NAME</span></p>
        <p className='text'>Software Developer, UK</p>
        <p className='text'><span className='bold'>SKILLS:</span></p>
        <ul className='skills-list'>{techsFormatted}</ul>
      </div>
    </main>
  );
};

export default User;
