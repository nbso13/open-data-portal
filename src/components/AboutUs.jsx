import React from 'react';
import headshot1 from './headshot1.jpg';
import headshot2 from './headshot2.jpg';
import headshot3 from './headshot3.jpg';

const AboutUs = () => (
  <div className="container">
    <h2>About Us</h2>
    <p>UC Open Data is working to make UChicago's data more accessible  and transparent. Our Open Data Portal allows anyone to find and analyze UChicago-related data, such as data on university finances, student life, and academics.</p>

    <p>UC Open Data works as a part of <a href="https://www.uchicagotechteam.com/" target="_blank" rel="noopener noreferrer">UChicago TechTeam</a>, a civic tech student organization within the Institute of Politics. </p>

    <img src={headshot1} alt="Team members" style={{height: '15.1rem'}} />
    <img src={headshot2} alt="Team members1" style={{height: '15.1rem'}} />
    <img src={headshot3} alt="Team members2" style={{height: '15.1rem'}} />
  </div>
);

export default AboutUs;
