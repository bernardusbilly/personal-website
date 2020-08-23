import React from 'react';
import './style.scss';

export const Profile = (props) => {
  const { src = '' } = props;

  return (
    <div className="logo">
      <img alt="Profile" src={src} />
    </div>
  );
};
