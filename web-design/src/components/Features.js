import React from 'react';
import './Features.js';

function Features() {
  return (
    <section className='features'>
      <h2>About Us</h2>
      <ul className='needed'>
        <li>
          We deliver the best cutting edge technology to solve real word problem
          especially in various{' '}
        </li>
        <li>
          sectors like Education, Health and Bussiness. We are open for various
          consultations around the world
        </li>
      </ul>
      <img
        src='services.jpg'
        height='400'
        width='900'
        alt='background'
        class='img-advt'
      ></img>
      <img
        src='ABOUT.png'
        height='400'
        width='900'
        alt='background'
        class='img-advt'
      ></img>
    </section>
  );
}

export default Features;