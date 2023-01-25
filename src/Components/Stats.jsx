import React from 'react';
import Githubcalender from 'react-github-calendar';
import { VscGithub } from 'react-icons/vsc';

export default function Stats() {
  return (
    <>
      <section id='stats'>
        <h2> <u>Github Stats</u> </h2>
        <div className='sm-stata-div stats-div'>
          <img
            className='img2 mn-sm-bet'
            src='https://github-readme-stats-sigma-five.vercel.app/api?username=Pushpendra-1697&show_icons=true&locale=en'
            alt='Pushpendra-1697'
          />
          <img
            className='img1 mn-sm-bet'
            src='https://github-readme-stats-sigma-five.vercel.app/api/top-langs?username=Pushpendra-1697&show_icons=true&locale=en&layout=compact'
            alt='Pushpendra-1697'
          />
        </div>
        <div className='git-icon'>
          <a
            className='anchor-tags'
            target='_blank'
            rel='noreferrer'
            href='https://github.com/Pushpendra-1697'
          >
            <abbr title='Open Github Profile'>
              <VscGithub className='github-profile' />
            </abbr>
          </a>
        </div>

        <div margin="auto">
          <Githubcalender className="c" username="Pushpendra-1697" blockSize={10} color={"rgb(81,148,240)"} />
        </div>
      </section>
    </>
  );
}
