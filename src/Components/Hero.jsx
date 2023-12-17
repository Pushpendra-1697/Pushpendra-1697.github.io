import React from 'react';

export default function Hero() {
  return (
    <>
      <section id='home' className='hero container flex'>
        <article className='flex sm-column' style={{ alignItems: 'center' }}>
          <div >
            <h1 style={{ textTransform: 'capitalize' }}>
              Hey There!<p>✋</p>
            </h1>
            <h1
              style={{
                textTransform: 'capitalize',
                paddingTop: '1rem',
                marginBottom: '-.5rem',
              }}
            >
              I am
            </h1>
            <h2 style={{ fontWeight: 'bold' }}>
              Pushpendra <br /> <small>Singh</small>
            </h2>
            <h3>
              <a href='#'>
                <i className='fas fa-caret-right'> </i> Full Stack Web Developer
              </a>
            </h3>
            <ul className='display-flex'>
              <li>
                <a href='https://github.com/Pushpendra-1697' target={"_blank"} className='social-icon'>
                  <i className='fab fa-github'></i>
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/pushpendra-singh-48912a23a/'
                  className='social-icon'
                  target={"_blank"}
                >
                  <i className='fab fa-linkedin'></i>
                </a>
              </li>
              <li>
                <a href='https://twitter.com/Pushpendra_1697' className='social-icon' target={"_blank"}>
                  <i className='fab fa-twitter'></i>
                </a>
              </li>
              <li>
                <a href='pushpendra1697@gmail.com' className='social-icon' target={"_blank"}>
                  <i className='fa-solid fa-envelope'></i>
                </a>
              </li>
              <li>
                <a href='tel:9721085620' className='social-icon' target={"_blank"}>
                  <i className='fa-sharp fa-solid fa-phone'> </i>
                </a>
              </li>

              <li className='nav-link resume active' id="resume-button-2">
                <a id="resume-link-2" href='./assets/docs/Pushpendra-Singh-Resume.pdf' download>
                  Resume
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </li>

            </ul>
          </div>
          <figure style={{ paddingTop: '3rem' }}>
            <img className='home-img' src='./assets/docs/myProfile.jpg' alt='Pushpendra-Singh' />
          </figure>
        </article>
      </section>
    </>
  );
};
