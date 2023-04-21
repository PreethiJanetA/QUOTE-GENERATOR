import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <p className='foot'> Hi it's me "Jane" Have a nive day </p>
      <div className='align'>
      <div className='business'>
          <ul className='head'>DESIGN</ul>
          <ul>Modeling</ul>
          <ul>Design-work</ul>
          <ul>Frameworks</ul>

      </div>
        <div className='resource'>
          <ul className='head'>ANALYSIS</ul>
          <ul>Document</ul>
          <ul>Analysis</ul>
          <ul>Career</ul>

        </div>
        <div className='comp'>
          <ul className='head'>RESEARCH</ul>
          <ul>Research centre</ul>
          <ul>Press</ul>
          <ul>Career</ul>
        </div>
        </div>
    </footer>
  );
}
export default Footer;