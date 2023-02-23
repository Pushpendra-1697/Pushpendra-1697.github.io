import React, { useState } from 'react';
import { ImCross } from 'react-icons/im'
export default function Header() {
  const [flag, setFlag] = useState(true);

  const handleClick = () => {
    setFlag(!flag);
  };

  console.log(flag);

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
            {flag ? <i onClick={handleClick} className='fas fa-bars'></i> : <ImCross onClick={handleClick} />}
          </label>
          <input type='checkbox' id='toggle' />
          <nav className='nav'>
            <ul className='flex sm-column'>
              <li className='list'>
                <a href='#home'>Home</a>
              </li>

              <li className='list'>
                <a href='#about'>About</a>
              </li>

              <li className='list'>
                <a href='#skills'>Skills</a>
              </li>

              <li className='list'>
                <a href='#tool'>Tools</a>
              </li>

              <li className='list'>
                <a href='#projects'>Projects</a>
              </li>

              <li className='list'>
                <a href='#contact'>Contact</a>
              </li>

              <li className='active'>
                <a href='./assets/docs/fw20_0921-Pushpendra Singh-Resume.pdf' download>
                  Resume
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}