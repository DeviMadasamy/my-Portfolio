import React, { useState, useRef } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Projects() {
const [listProjects] = useState([
  {
    name: 'Modern Music Player',
    des: 'Designed and developed a  Modern Music Player application using React, featuring sleek animated interfaces for an enhanced user experience.Integrated audio playback functionality with a library of 10 tracks sourced from Google, offering users a diverse selection of music. Implemented advanced features including volume adjustment, repeat one track, shuffle, and next track functionalities for a seamless listening experience.',
    mission: 'Frontend Web Developer and design',
    language: 'HTML5, CSS3, React JS,Javascript, Git,...',
    images: '/project-1.jpeg'
  },
  {
    name: 'E-Commerce Website',
    des: 'The e-commerce cake website I developed showcases a blend of my technical skills and creativity.This project included designing a user-friendly menu, an engaging About page, a well-structured footer, and an integrated customer review system.I implemented media queries in the CSS to ensure the website seamlessly adapts to different screen sizes.',
    mission: 'Frontend Web Developer and design',
    language: 'HTML5, CSS3,Javascript, Git, Animation,...',
    images: '/project-2.jpeg'
  },
  {
    name: 'Rock Paper Scissors Game',
    des: 'Developed a responsive and interactive Rock-Paper-Scissors game, showcasing proficiency in front-end web development. Implemented game logic using JavaScript to enable user interactions and determine outcomes. Styled the user interface using CSS and Tailwind CSS, ensuring a visually appealing and user-friendly design.',
    mission: 'Frontend Web Developer and design',
    language: 'HTML5, CSS3, React JS,Javascript, Tailwind CSS,...',
    images: '/project-3.jpeg'
  },

]);
const divs = useRef([]);
const scrollTab = useRef();
CustomHook(scrollTab, divs);
  return (
    <section className='projects' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Projects
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        I have worked on a wide range of projects. Here are some of my projects.
       </div>
       <div className="list">
        {
          listProjects.map((value, key) => (
            <div className='item' key={key} ref={(el) => el && divs.current.push(el)}>
              <div className="images">
                <img src={value.images} alt="" />
              </div>
              <div className="content">
                <h3>{value.name}</h3>
                <div className="des">{value.des}</div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                    <div>
                        <h4>Mission</h4>
                        <div className="des">{value.mission}</div>
                    </div>
                </div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                    <div>
                        <h4>Languages</h4>
                        <div className="des">{value.language}</div>
                    </div>
                </div>
              </div>
            </div>
          ))
        }
       </div>
    </section>
  )
}
export default Projects