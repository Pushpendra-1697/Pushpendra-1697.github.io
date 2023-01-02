import React from 'react';
import { useState } from 'react';
export default function Header() {
  const [flag, setFlag] = useState(false);

  const handleClick = () => {
    setFlag(true);
  };
  const handleClick1 = () => {
    setFlag(false);
  };

  // console.log(flag);

  return (
    <>
      <header className='flex' id='top'>
        <div id="sticky">
          <ul>
            <li className='main-brand'>
              <a href='#'>
                {'<'} <strong>Pushpendra</strong> {'/>'}
              </a>
            </li>
          </ul>
          <label htmlFor='toggle' className='bar'>
            <i onClick={handleClick1} className='fas fa-bars'></i>
          </label>
          <input type='checkbox' id='toggle' />
          {flag === false ? <nav className='nav'>
            <ul className='flex sm-column'>
              <li onClick={handleClick} className='list'>
                <a href='#home'>Home</a>
              </li>

              <li onClick={handleClick} className='list'>
                <a href='#about'>About</a>
              </li>

              <li onClick={handleClick} className='list'>
                <a href='#skills'>Skills</a>
              </li>

              <li onClick={handleClick} className='list'>
                <a href='#tool'>Tools</a>
              </li>

              <li onClick={handleClick} className='list'>
                <a href='#projects'>Projects</a>
              </li>

              <li onClick={handleClick} className='list'>
                <a href='#contact'>Contact</a>
              </li>

              <li onClick={handleClick} className='active'>
                <a href='./assets/docs/PUSHPENDRA_SINGH_Resume.pdf' download>
                  Resume
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </li>
            </ul>
          </nav> : null}

        </div>
      </header>
    </>
  );
}