import React, { useState } from 'react';
import { VscGithub } from 'react-icons/vsc';
import { FaEye } from 'react-icons/fa';
import { TbChevronsLeft } from 'react-icons/tb';
import { TbChevronsRight } from 'react-icons/tb';

let projects = [
  {
    id: 0,
    img: 'Hotel_Booking.png',
    title: 'Hotels Booking System',
    discription:
      'This is a Flights & Hotel Booking System after authentication.',
    tags: ['react', 'react-router', 'jsx', 'css'],
    repolink: 'https://github.com/Pushpendra-1697/naughty-discussion-3257',
    livelink: 'https://expedia-travel.vercel.app',
  },
  {
    id: 1,
    img: 'Hotel_Booking.png',
    title: 'Hotels Booking System',
    discription:
      'This is a Flights & Hotel Booking System after authentication.',
    tags: ['react', 'react-router', 'jsx', 'css'],
    repolink: 'https://github.com/Pushpendra-1697/naughty-discussion-3257',
    livelink: 'https://expedia-travel.vercel.app',
  },
  {
    id: 2,
    img: 'Hotel_Booking.png',
    title: 'Hotels Booking System',
    discription:
      'This is a Flights & Hotel Booking System  after authentication.',
    tags: ['react', 'react-router', 'jsx', 'css'],
    repolink: 'https://github.com/Pushpendra-1697/naughty-discussion-3257',
    livelink: 'https://expedia-travel.vercel.app',
  },
  {
    id: 3,
    img: 'Hotel_Booking.png',
    title: 'Hotels Booking System',
    discription:
      'This is a Flights & Hotel Booking System  after authentication.',
    tags: ['react', 'react-router', 'jsx', 'css'],
    repolink: 'https://github.com/Pushpendra-1697/naughty-discussion-3257',
    livelink: 'https://expedia-travel.vercel.app',
  },
  {
    id: 4,
    img: 'Hotel_Booking.png',
    title: 'Hotels Booking System',
    discription:
      'This is a Flights & Hotel Booking System  after authentication.',
    tags: ['react', 'react-router', 'jsx', 'css'],
    repolink: 'https://github.com/Pushpendra-1697/naughty-discussion-3257',
    livelink: 'https://expedia-travel.vercel.app',
  }
];

function Projects() {
  let num;
  if (window.outerWidth <= 480) {
    num = 1;
  } else if (window.outerWidth > 480 && window.outerWidth <= 768) {
    num = 2;
  } else {
    num = 3;
  }
  const [count, setCount] = useState(0);

  const [frontProjects, setFrontProjects] = useState(() => {
    let arr = [];
    for (let i = count; i < count + num; i++) {
      arr.push(projects[i]);
    }
    console.log(arr);
    return arr;
  });

  function handleLeft() {
    setCount((prevState) => {
      if (count > 0) {
        return prevState - 1;
      } else {
        return 0;
      }
    });

    setFrontProjects((prevState) => {
      let arr = [];
      for (let i = count; i < count + num; i++) {
        arr.push(projects[i]);
      }
      return arr;
    });
  }

  function handleRight() {
    setCount((prevState) => {
      if (count < projects.length - num) {
        return prevState + 1;
      } else {
        return projects.length - num;
      }
    });

    setFrontProjects((prevState) => {
      let arr = [];

      for (let i = count; i < count + num; i++) {
        arr.push(projects[i]);
      }
      return arr;
    });
  }

  return (
    <>
      <section className='projects' id='projects'>
        <h2> <u>Projects</u> </h2>
        <div className='project-box mn-sm-center '>
          {frontProjects && frontProjects.map((item, index) => {
            return (
              <div
                className='flex-30 project-item sm-flex-45 mn-sm-bet'
                key={index}
              >
                <div>
                  <figure className='figure'>
                    <img
                      className='full-width'
                      src={`./assets/projects/${item.img}`}
                      alt=''
                    />
                  </figure>
                  <h3 className='project-name'> {item.title}</h3>
                  <p className='discription'>{item.discription} </p>
                  <div className='tag-box'>
                    {item.tags.map((tag, i) => {
                      return <p key={i}> {tag.toUpperCase()}</p>;
                    })}
                  </div>
                  <div className='repolink-box'>
                    <abbr title='Go To Repository'>
                      {' '}
                      <a href={`${item.repolink}`} target='blank'>
                        <VscGithub />
                      </a>
                    </abbr>
                    <abbr title='Go To Live Demo'>
                      <a href={`${item.livelink}`} target='blank'>
                        {item.tags.includes('css') ? <FaEye /> : ''}{' '}
                      </a>
                    </abbr>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <TbChevronsLeft
          className='left sm-left mn-left '
          onClick={handleLeft}
        />
        <TbChevronsRight
          className='right  sm-right mn-right'
          onClick={handleRight}
        />
      </section>
    </>
  );
}

export default Projects;
