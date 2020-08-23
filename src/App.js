import React, { useEffect, useState } from 'react';

import { Sidebar } from 'components/sidebar';
import { Profile } from 'components/profile';
import { Skills } from 'components/skills';
import { Timeline } from 'components/timeline';
import { Projects } from 'components/projects';

import { biodata } from 'data/biodata';

import './style.scss';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="app">
      {loading ? (
        <div className="loading-wrapper">
          <img
            alt="Loading.."
            className="loading-gif"
            src={`${process.env.PUBLIC_URL}/img/spinner.gif`}
          />
        </div>
      ) : (
        <>
          <div className="introduction">
            <div className="introduction-header">
              <div className="introduction-header-main">
                Bernardus Billy Tjiptoning
              </div>
              <div className="introduction-header-sub">
                Senior Software Engineer @{' '}
                <a
                  href="https://www.logichub.com"
                  rel="noopener noreferrer"
                  target="_blank">
                  LogicHub
                </a>
              </div>
            </div>
            <Profile src={`${process.env.PUBLIC_URL}/img/profile.jpg`} />
            <Sidebar menu={['skills', 'biodata', 'projects', 'about']} />
          </div>
          <div id="skills" className="skills">
            <div className="skills-summary">
              <div className="skills-summary-header">Skills</div>
              Graduated from UC Berkeley gave me a diverse set of experiences,
              ranging from Artificial Intelligence to Computer Networking. I
              then found myself most interested in Front End Web Development.
              And I've been working on that field since then.
            </div>
            <div className="skills-list">
              <Skills
                skills={[
                  'HTML & CSS',
                  'React - JSX is just pure awesomeness',
                  'Redux Middleware: Saga',
                  'Version Control: Git',
                ]}
              />
            </div>
          </div>
          <div id="biodata" className="biodata">
            <div className="biodata-header">Biodata</div>
            <Timeline events={biodata} />
          </div>
          <div id="projects" className="projects">
            <div className="projects-header">Projects</div>
            <Projects
              projects={[
                {
                  imgSrc: 'assets/img/preview/commutercronny.jpg',
                  link: 'https://www.youtube.com/watch?v=UFKG9K-U2mE',
                  name: 'Commuter Cronny',
                  tag: '#drivingAssistance',
                },
                {
                  imgSrc: 'assets/img/preview/hearthstone-statistic.jpg',
                  link: 'https://www.npmjs.com/package/hearthstone-statistic',
                  name: 'Hearthstone Statistic Tracker',
                  tag: '#gameAnalysis',
                },
              ]}
            />
          </div>
          <div id="about" className="contact">
            <div className="contact-left">
              <div className="contact-left-header">About Me</div>
              <div>
                <a
                  href="https://www.dropbox.com/s/3i6nha3o9nkjx6e/Resume%20mk.%2022.pdf?dl=0"
                  rel="noopener noreferrer"
                  target="_blank">
                  Resume
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/bernardusbilly"
                  rel="noopener noreferrer"
                  target="_blank">
                  Linkedin
                </a>
              </div>
            </div>
            <div className="contact-right">
              <div className="contact-right-header">Contact</div>
              <div>Jakarta, Indonesia</div>
              <div>bernardus.billy@hotmail.com</div>
            </div>
            <div className="contact-copyright">
              Copyright &copy; 2020, Bernardus Billy Tjiptoning
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
