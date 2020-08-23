import React, { useRef } from 'react';
import { Waypoint } from 'react-waypoint';

import './style.scss';

export const Projects = (props) => {
  const { projects = [] } = props;

  return (
    <ul>
      {projects.map((project) => {
        const { imgSrc = '', link = '', name = '', tag = '' } = project;
        return (
          <Project
            imgSrc={imgSrc}
            key={name}
            link={link}
            name={name}
            tag={tag}
          />
        );
      })}
    </ul>
  );
};

export const Project = (props) => {
  function handleEnter() {
    headerRef.current.classList.add('animate__slideInLeft');
    headerRef.current.classList.remove('animate__fadeOut');
    subRef.current.classList.add('animate__slideInLeft');
    subRef.current.classList.remove('animate__fadeOut');
  }

  function handleLeave() {
    headerRef.current.classList.add('animate__fadeOut');
    headerRef.current.classList.remove('animate__slideInLeft');
    subRef.current.classList.add('animate__fadeOut');
    subRef.current.classList.remove('animate__slideInLeft');
  }

  const { link = '', name = '', tag = '' } = props;
  const headerRef = useRef();
  const subRef = useRef();

  return (
    <Waypoint bottomOffset={'30%'} onEnter={handleEnter} onLeave={handleLeave}>
      <a
        className="project-wrapper"
        href={link}
        key={name}
        rel="noopener noreferrer"
        target="_blank">
        <div
          ref={headerRef}
          className="project-wrapper-header animate__animated">
          {name}
        </div>
        <div ref={subRef} className="project-wrapper-sub animate__animated">
          {tag}
        </div>
        {/* <img alt={name} className="project-preview" src={imgSrc} /> */}
      </a>
    </Waypoint>
  );
};
