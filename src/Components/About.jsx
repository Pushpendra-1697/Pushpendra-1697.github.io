import React from 'react';

function About() {
  return (
    <>
      <section className='about' id='about'>
        <article>
          <h2> <u>About Me</u> </h2>
          <p className='abuot-p'>
            I am <a style={{color: '#c12020',fontWeight: 'bold', fontSize: '1.5rem'}} href='#contact'>Pushpendra Singh.</a>
            <br/>
             I am a MERN stack developer.
          </p>

          <p className='abuot-p'> I learnd Full Stack Web Development from <a style={{color: '#c12020', fontWeight: 'bold' ,fontSize: '1.5rem'}} href='https://www.masaischool.com/' target="blank">Masai School. </a>
          <br/>
          I am comfortable with both Frontend and Backend.
           </p>
          <p className='abuot-p'>
            {' '}
            <strong> Backend : </strong> Learned Node.js, MongoDB, Express.js.
            Continued with learning Authentication, Authorization, OAuth and much more.
          </p>
          <p className='abuot-p'>
            {' '}
            <strong> Frontend : </strong> Learned React, React Router, React
            Router Dom, Redux. Continued with Functional Components, Class
            Components, State, Props, Context API, HOC, Render Props , Hooks and
            much more.
          </p>

          <ul>
            <li className='brand flex'>
              <a href=''></a>
              <a href='#'>
                {'<'} <strong>Pushpendra</strong>
                {' />'}
              </a>
            </li>
          </ul>
        </article>
      </section>
    </>
  );
}

export default About;
