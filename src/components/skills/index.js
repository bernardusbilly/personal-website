import React, { useRef } from 'react';
import { Waypoint } from 'react-waypoint';

import './style.scss';

export const Skills = (props) => {
  const { skills = [] } = props;
  const listRef = useRef();

  function handleEnter() {
    Array.from(listRef.current.children).forEach((line, index) => {
      line.style.animationDelay = `${index * 100}ms`;

      line.classList.remove('animate__fadeOutRight');
      line.classList.add('animate__animated', 'animate__fadeInRight');
    });
  }

  function handleLeave() {
    Array.from(listRef.current.children).forEach((line) => {
      line.classList.remove('animate__fadeInRight');
      line.classList.add('animate__fadeOutRight');
    });
  }

  return (
    <Waypoint bottomOffset={'30%'} onEnter={handleEnter} onLeave={handleLeave}>
      <ul ref={listRef} className="qualities">
        {skills.map((skill) => (
          <li key={skill} className="animate__animated animate__fadeOutRight">
            {skill}
          </li>
        ))}
      </ul>
    </Waypoint>
  );
};
