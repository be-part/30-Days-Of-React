import React from 'react';

const techs = ['HTML', 'CSS', 'JavaScript', 'React', 'SQL'];
const techsFormatted = techs.map((tech) => (
  <li className='techs' key={tech}>{tech}</li>
));

const User = () => {
  return (
    <main>
      <div className='profile-wrapper'>
        <img className="profile-image" src="/images/blank_profile.png" alt="blank profile silhouette" />
        <p className='bold'>YOUR NAME</p>
        <p>Software Developer, UK</p>
        <p className='bold'>SKILLS:</p>
        <ul className='skills-list'>{techsFormatted}</ul>
      </div>
    </main>
  );
};

export default User;
