import React from 'react';

export default function Contact() {
  return (
    <>
      <section id='contact'>
        <h4 style={{ marginBottom: '4rem' }}> <u>Get In Touch</u> </h4>
        <div className='contact-box   sm-center   mn-flex-start '>
          <div className='flex-20 sm-flex-50' style={{marginTop: "5px"}}>
            <h3 className='contact-h3 '>Let's Connect Here ! </h3>

            <div className='contact-icon-div' style={{marginTop: "15px"}}>
              <a
                href='https://www.linkedin.com/in/pushpendra-singh-48912a23a/'
                target='blank'
              >
                {' '}
                <i className='fa-brands fa-linkedin'></i>
              </a>
              <a href='https://twitter.com/Pushpendra_1697' target='blank'>
                {' '}
                <i className='fa-brands fa-square-twitter'></i>
              </a>
              <a href='https://github.com/Pushpendra-1697' target='blank'>
                {' '}
                <i className='fa-brands fa-square-github'></i>{' '}
              </a>
              <a
                href='http://api.whatsapp.com/send?phone=9721085620'
                target='blank'
              >
                {' '}
                <i className='fa-brands fa-square-whatsapp'></i>{' '}
              </a>
            </div>
          </div>

          <div className='flex-50 sm-flex-50 sm-between '>
            <h3 className='contact-h3 center'>
              Make Something Amazing Together
            </h3>

            <div className='contact-mail sm-bet'>
              <div className='flex-65 view-box sm-flex-60'>
                <a
                  className='mail'
                  target='blank'
                  href='mailto:pushpendra1697@gmail.com  '
                >
                  Mail Me : pushpendra1697@gmail.com
                </a>
              </div>
              <div className='flex-40 view-box sm-flex-35'>
                {' '}
                <a className='tel' target='blank' href='tel:9721085620'>
                  Call Me : +919721085620
                </a>
              </div>
            </div>
          </div>
  


  
          <div className='flex-20 sm-flex-50 '>
            <h3 className='contact-h3'> Want To Know More !</h3>
            <div className='resume '>
              <div className='view-box sm-flex-45 '>
                <a href='./assets/docs/Pushpendra-Singh-Resume.pdf' download>
                  Download Resume{' '}
                </a>
              </div>
              <div className='view-box  sm-flex-45 '>
                <a
                  target='blank'
                  href='https://drive.google.com/file/d/1xnEE2pfTY6XU0RMgHckov4oPuE7WhKcN/view?usp=sharing'
                >
                  View Resume{' '}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
