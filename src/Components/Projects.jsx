import React, { useState } from 'react';
import { VscGithub } from 'react-icons/vsc';
import { FaEye } from 'react-icons/fa';
import { TbChevronsLeft } from 'react-icons/tb';
import { TbChevronsRight } from 'react-icons/tb';

let projects = [
  {
    id: 0,
    img: 'BeautyCare.png',
    title: 'E-commerce Beauty products system',
    discription:
      'This is E-commerce authentication and authorization full Stack Project (Frontend & Backend).',
    tags: ['react-redux', 'chakra-ui', 'expressjs', 'mongodb', 'nodejs', 'css'],
    repolink: 'https://github.com/abhiamber/resonant-dinosaurs-925',
    livelink: 'https://frontend-eight-tawny-20.vercel.app/',
  },
  {
    id: 1,
    img: 'Myntra.png',
    title: 'E-commerce store for fashion and lifestyle system',
    discription:
      'This is E-commerce store for fashion and lifestyle System  after authentication.',
    tags: ['react', 'react-router', 'react-redux', 'css'],
    repolink: 'https://github.com/harshau9/Myntra-Clone',
    livelink: 'https://myntra-black.vercel.app/',
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
    img: 'rentomojo.png',
    title: 'Sales-Oriented Cloneing System',
    discription:
      'This is a Fitnesss & Electronics Booking System after authentication.',
    tags: ["html", 'javascript', 'css'],
    repolink: 'https://github.com/Pushpendra-1697/panicky-smash-9541',
    livelink: 'https://glittering-liger-3137f9.netlify.app/',
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
    // console.log(arr);
    return arr;
  });
  // console.log(frontProjects);

  function handleLeft() {
    setCount((prevState) => {
      if (count > 0) {
        return prevState - 1;
      } else {
        return 0;
      }
    });

    setFrontProjects(() => {
      let arr = [];
      for (let i = count; i < count + num; i++) {
        arr.push(projects[i]);
      }
      // console.log(arr);
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

    setFrontProjects(() => {
      let arr = [];
      for (let i = count; i < count + num; i++) {
        arr.push(projects[i]);
      }
      // console.log(arr);
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
                  <div className='tag-box' style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", marginTop: "25px" }}>
                    {item.tags.map((tag) => {
                      return <button style={{ borderRadius: "10px", backgroundColor: "rgba(193, 32, 32, 0.5)", color: "white", padding: "4px" }} key={tag}> {tag.toUpperCase()}</button>;
                    })}
                  </div>
                  <div className='repolink-box'>
                    <abbr title='Go To Repository'>
                      <a href={item.repolink} target='blank'>
                        <VscGithub />
                      </a>
                    </abbr>
                    <abbr title='Go To Live Demo'>
                      <a href={item.livelink} target='blank'>
                        {item.tags.includes('css') ? <FaEye /> : ''}
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















