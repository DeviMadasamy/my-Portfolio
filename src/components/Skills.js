import React, { useRef, useState } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJs, faBootstrap, faGit } from '@fortawesome/free-brands-svg-icons';
import CustomHook from './CustomHook';

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
const [listSkills] = useState([
  {
    name: 'HTML',
    des: 'Highly skilled in HTML with a deep understanding of advanced tags such as <article>, <audio>, <figure>, <video>, <file>, among others. Passionate about leveraging HTML to create dynamic and engaging web experiences.',
    icon: faHtml5
  },
  {
    name: 'CSS',
    des: 'I possess a strong proficiency in advanced CSS3 techniques such as CSS animations, 3D transformations, custom fonts, flexbox, grid layouts, color manipulation, gradients, and more.',
    icon: faCss3
  },
  {
    name: 'Javascript',
    des: 'Proficient in advanced JavaScript techniques such as DOM manipulation, asynchronous programming using async/await and callbacks, iteration using JavaScript map and loops, and more. With a passion for JavaScript, I actively integrate it into my projects.',
    icon: faJs},
  {
    name: 'ReactJs',
    des: 'With a strong proficiency in ReactJS concepts such as JSX, React Hooks, Virtual DOM optimization, state management libraries like Redux or context API, and data fetching techniques using Fetch API or Axios, I excel at building modern and efficient web applications.  ',
    icon: faReact
  },
  {
    name: 'Bootstrap',
    des: 'Proficient in Bootstrap, I specialize in creating various components and layouts including landing pages, navigation bars, footer sections, blog pages, and pricing tables.',
    icon: faBootstrap
  },
  {
    name: 'Git/GitHub & Postman',
    des: 'I possess a strong proficiency in utilizing Git for version control, adeptly managing repositories, and configuring settings to streamline collaborative development processes.',
    icon: faGit
  }

]);
  return (
    <section className='skills' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Skills
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        Here are some of my skills for the Frontend Web developer role.
       </div>
       <div className="list">
        {
          listSkills.map((value, key) => (
            <div className={'item '} key={key} ref={(el) => el && divs.current.push(el)}>
              <FontAwesomeIcon icon={value.icon} />
              <h3>{ value.name }</h3>
              <div className="des">{value.des}</div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills