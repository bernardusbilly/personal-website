import React, { useEffect, useRef, useState } from 'react';
import { Waypoint } from 'react-waypoint';

import './style.scss';

export const Timeline = (props) => {
  const { events = [] } = props;
  const [parsedEvents, setParsedEvents] = useState([]);

  useEffect(() => {
    // crunching data with the same year
    const parsed = {};
    events.forEach((event) => {
      const { year } = event;
      if (year in parsed) {
        const { text, location } = parsed[year];
        const crunchedText = (
          <>
            {text}
            {location && (
              <div className="timeline-wrapper-location">
                <span className="fa fa-map-marker"></span>
                {location}
              </div>
            )}
            {event.text}
            {event.location && (
              <div className="timeline-wrapper-location">
                <span className="fa fa-map-marker"></span>
                {event.location}
              </div>
            )}
          </>
        );
        parsed[year].location = '';
        parsed[year].text = crunchedText;
      } else {
        parsed[year] = event;
      }
    });

    // sort by year
    const sorted = Object.values(parsed).sort(
      ({ year: yearA }, { year: yearB }) => {
        return parseInt(yearA) - parseInt(yearB);
      }
    );
    setParsedEvents(sorted);
  }, [events]);

  return (
    <>
      <div className="timeline-line" />
      <div className="timeline">
        {parsedEvents.map((event, index) => {
          const { year = '', text = '', location = '' } = event;
          return (
            <Event
              index={index}
              key={year}
              location={location}
              text={text}
              year={year}
            />
          );
        })}
      </div>
    </>
  );
};

const Event = (props) => {
  const { year = '', text = '', location = '', index = 0 } = props;
  const isOdd = index % 2 === 1;
  const eventRef = useRef();
  const indicatorRef = useRef();

  const indicatorInAnimationClass = 'animate__fadeInDown';
  const indicatorOutAnimationClass = 'animate__fadeOut';

  const eventOutAnimationClass = 'animate__fadeOut';

  function handleEventEnter() {
    eventRef.current.classList.remove(eventOutAnimationClass);
    eventRef.current.classList.add(
      isOdd ? 'animate__fadeInLeft' : 'animate__fadeInRight'
    );

    indicatorRef.current.classList.remove(indicatorOutAnimationClass);
    indicatorRef.current.classList.add(indicatorInAnimationClass);
  }

  function handleEventLeave() {
    eventRef.current.classList.add(eventOutAnimationClass);
    eventRef.current.classList.remove(
      'animate__fadeInLeft',
      'animate__fadeInRight'
    );

    indicatorRef.current.classList.remove(indicatorInAnimationClass);
    indicatorRef.current.classList.add(indicatorOutAnimationClass);
  }

  return (
    <Waypoint
      bottomOffset={'30%'}
      onEnter={handleEventEnter}
      onLeave={handleEventLeave}>
      <div
        className="timeline-wrapper animate__animated animate__fadeOut"
        ref={eventRef}>
        <img
          alt="indicator"
          className="timeline-wrapper-indicator animate__animated animate__fadeOut"
          ref={indicatorRef}
          src={`${process.env.PUBLIC_URL}/img/diamond.png`}
        />
        <div className="timeline-wrapper-year">{year}</div>
        {text}
        {location && (
          <div className="timeline-wrapper-location">
            <span className="fa fa-map-marker"></span>
            {location}
          </div>
        )}
      </div>
    </Waypoint>
  );
};
