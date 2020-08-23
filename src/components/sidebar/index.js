import React, { useEffect, useRef } from 'react';
import './style.scss';

export const Sidebar = (props) => {
  useEffect(() => {
    // animation
    navbarRef.current.classList.add(
      'animate__animated',
      'animate__fadeInRight'
    );
  }, []);
  const { menu = [] } = props;
  const navbarRef = useRef();

  return (
    <div ref={navbarRef} className="navbar">
      <ul>
        {menu.map((m) => (
          <li key={m}>
            <a href={`#${m}`}>{m.toUpperCase()}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
