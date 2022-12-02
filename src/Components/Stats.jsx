import React from 'react';

import { VscGithub } from 'react-icons/vsc';

export default function Stats() {
  return (
    <>
      <section id='stats'>
        <h2> <u>Github Stats</u> </h2>
        <div className='sm-stata-div stats-div'>
          <img
            className='img2 mn-sm-bet'
            src='https://github-readme-stats.vercel.app/api?username=umakant-2113&show_icons=true&theme=dracula&title_color=c12020&bg_color=303030&icon_color=c12020'
          />
          <img
            className='img1'
            src='https://github-readme-stats.vercel.app/api/top-langs/?username=umakant-2113&theme=dracula&title_color=c12020&bg_color=303030&icon_color=c12020&hide=html'
          />
        </div>
        <div className='git-icon'>
          <a
            className='anchor-tags'
            target='blank'
            href='https://github.com/Pushpendra-1697'
          >
            <abbr title='Open Github Profile'>
              <VscGithub className='github-profile' />
            </abbr>
          </a>
        </div>
      </section>
    </>
  );
}
