
import React from 'react';
import bear from 'images/bear.png';
import facebook from 'images/facebook.jpg';
import instagram from 'images/instagram.jpg';
import github from 'images/github.png';
import linkedin from 'images/linkedin.jpg';
import skype from 'images/skype.jpg';
import carol from 'images/carol.jpg';
import surialabs from 'images/surialabs.png';
import ifast from 'images/ifast.png';
import jobstreet from 'images/jobstreet.png';
import taruc from 'images/taruc.png';
import reactnative from 'images/reactnative.png';
import rails from 'images/rails.png';
import haml from 'images/haml.png';
import react from 'images/react.png';
import NavBar from 'components/NavBar';

const Profile = () => (
  <>
    <NavBar />
    <div className='container main'>
      <hr />
      <div className='header row justify-content-center'>
        <div className='col-11 col-sm-10 col-md-9'>
          <h1>Chiew Carol</h1>
          <span>I code for a living & brought my bear </span>
          <img src={bear} alt="bear" className="inline-icon"/>
          <span> to travel the world</span>
          <br />
          <span>have the undefeated spirit when comes to problem solving</span>
          <br />
          <span>and also super power in debugging :p</span>
          <div className='social row justify-content-center'>
            <a className='social-link' href="https://fb.me/kyaroru.cc">
              <img src={facebook} alt="facebook" className="social-icon"/>
            </a>
            <a className='social-link' href="https://www.instagram.com/kyaroru.cc">
              <img src={instagram} alt="instagram" className="social-icon"/>
            </a>
            <a className='social-link' href="https://www.github.com/kyaroru">
              <img src={github} alt="github" className="social-icon"/>
            </a>
            <a className='social-link' href="https://www.linkedin.com/in/kyaroru">
              <img src={linkedin} alt="linkedin" className="social-icon"/>
            </a>
            <a className='social-link' href="skype:live:kyaroru_1?chat">
              <img src={skype} alt="skype" className="social-icon"/>
            </a>
          </div>
          <div className='email'>
            <a href="mailto:kyaroru@outlook.com">
              <h5>kyaroru@outlook.com</h5>
            </a>
          </div>
        </div>
        <div className='profile col-10 col-sm-7 col-md-3'>
          <img src={carol} alt="It's me!" className="profile-img"/>
        </div>
      </div>
      <hr />
      <div className='content'>
        <div className='timeline-title' id='experience'>Experience</div>
        <div className='timeline-container'>
          <ul className='timeline'>
            <li>
              <div className='direction-l'>
                <div className='flag-wrapper'>
                  <span className='flag'>Lead Software Engineer</span>
                  <span className='tag-wrapper'>
                    <span className='time'>2018/11 - present</span>
                  </span>
                  <a className='tag-wrapper up' href="https://www.surialabs.com/">
                    <span className='company'>Suria Labs</span>
                    <img src={surialabs} alt="surialabs" className="inline-icon"/>
                  </a>
                </div>
                <div className='desc'>
                  Responsible for keeping the client happy & satisfied,
                  Lead & guide the junior developer,
                  Perform Code Reviews for other members of the team,
                  Come up with my own set of boilerplate to kickstart new project in the company :p
                </div>
              </div>
            </li>
            <li>
              <div className='direction-r'>
                <div className='flag-wrapper'>
                  <span className='flag'>Software Engineer</span>
                  <span className='tag-wrapper'>
                    <span className='time'>2017/04 - 2018/10</span>
                  </span>
                  <a className='tag-wrapper up' href="https://www.surialabs.com/">
                    <span className='company'>Suria Labs</span>
                    <img src={surialabs} alt="surialabs" className="inline-icon"/>
                  </a>
                </div>
                <div className='desc'>
                  Optimise & improve existing code base (for project that exist before I join),
                  Setup new React Native/React project from scratch,
                  Automate app submission process to the Google Play/App Store,
                  Keep track of app releases' changelog,
                  Assist in onboarding of new staff! :p
                </div>
              </div>
            </li>
            <li>
              <div className='direction-l'>
                <div className='flag-wrapper'>
                  <span className='flag'>IT Specialist</span>
                  <span className='tag-wrapper'>
                    <span className='time'>2015/10 - 2017/03</span>
                  </span>
                  <a className='tag-wrapper up' href="http://www.ifastcorp.com/">
                    <span className='company'>iFAST</span>
                    <img src={ifast} alt="ifast" className="inline-icon"/>
                  </a>
                </div>
                <div className='desc'>
                  Revamp of native mobile app homepage using Ionic Framework,
                  Assist in development of internal China mobile app using Ionic,
                  Involved in writing React Native module and integrate into existing Native app,
                  Research & implement better approach for deploying app (eg. automation),
                  Conduct Training Session for Team member :p
                </div>
              </div>
            </li>
            <li>
              <div className='direction-r'>
                <div className='flag-wrapper'>
                  <span className='flag'>Product Intern</span>
                  <span className='tag-wrapper'>
                    <span className='time'>2015/04 - 2015/09</span>
                  </span>
                  <a className='tag-wrapper up' href="https://www.jobstreet.com.my/">
                    <span className='company'>Jobstreet</span>
                    <img src={jobstreet} alt="jobstreet" className="inline-icon"/>
                  </a>
                </div>
                <div className='desc'>
                  Modify the static pages of JobStreet website into responsive web design,
                  Contribute to the UI Library of Jobstreet,
                  Assist in web development of SiVA Recruitment Center ,
                  Involved in agile team and scrum meetings :p
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className='timeline-title' id='experience'>Education</div>
        <div className='timeline-container'>
          <ul className='timeline'>
            <li>
              <div className='direction-r'>
                <div className='flag-wrapper'>
                  <span className='flag'>Software Systems Development</span>
                  <span className='tag-wrapper'>
                    <span className='time'>2013-2015</span>
                  </span>
                  <a className='tag-wrapper up' href="https://www.tarc.edu.my/">
                    <span className='company'>TAR UC</span>
                    <img src={taruc} alt="taruc" className="inline-icon"/>
                  </a>
                </div>
                <div className='desc'>
                  <div className='span'>Cumulative GPA (CGPA) 3.9178</div>
                  <div className='span'>Awarded a Book Prize on Feb 2016</div>
                </div>
              </div>
            </li>
            <li>
              <div className='direction-l'>
                <div className='flag-wrapper'>
                  <span className='flag'>Information Systems Engineering</span>
                  <span className='tag-wrapper'>
                    <span className='time'>2011-2013</span>
                  </span>
                  <a className='tag-wrapper up' href="https://www.tarc.edu.my/">
                    <span className='company'>TAR UC</span>
                    <img src={taruc} alt="taruc" className="inline-icon"/>
                  </a>
                </div>
                <div className='desc'>
                  <div className='span'>Cumulative GPA (CGPA) 3.968</div>
                  <div className='span'>Awarded a Book Prize on Sep 2013</div>
                  <div className='span'>President List Awards for 4 Semester out of 5</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className='timeline-title' id='experience'>Skills</div>
        <div className='timeline-container'>
          <div className='left'>
            <div className='skills-bar-container'>
              <a href="https://facebook.github.io/react-native/">
                <label>React Native</label>
                <img src={reactnative} alt="reactnative" className="inline-icon"/>
                <li>
                  <span className='progress progressbar ninety'></span>
                </li>
              </a>
              <a href="https://rubyonrails.org/">
                <label>Ruby on Rails</label>
                <img src={rails} alt="rails" className="inline-icon"/>
                <li>
                  <span className='progress progressbar thirty'></span>
                </li>
              </a>
              <a href="https://www.w3schools.com/html/">
                <label>HTML</label>
                <li>
                  <span className='progress progressbar hundred'></span>
                </li>
              </a>
            </div>
          </div>
          <div className='right'>
            <div className='skills-bar-container'>
              <a href="https://reactjs.org/">
                <label>React JS</label>
                <img src={react} alt="react" className="inline-icon"/>
                <li>
                  <span className='progress progressbar eighty'></span>
                </li>
              </a>
              <a href="http://haml.info/">
                <label>HAML</label>
                <img src={haml} alt="haml" className="inline-icon"/>
                <li>
                  <span className='progress progressbar fifty'></span>
                </li>
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3">
                <label> CSS3</label>
                <li>
                  <span className='progress progressbar hundred'></span>
                </li>
              </a>
            </div>
          </div>
        </div>
        <div className='timeline-title' id='experience'>Languages</div>
        <div className='timeline-container'>
          <div className='skills-bar-container'>
            <label>English</label>
            <li>
              <span className='progress progressbar eighty'></span>
            </li>
            <label>Mandarin</label>
            <li>
              <span className='progress progressbar hundred'></span>
            </li>
            <label>Bahasa Malaysia</label>
            <li>
              <span className='progress progressbar eighty'></span>
            </li>
          </div>
        </div>
      </div>
      <hr />
      <div className='footer'>
        ©
        {` ${new Date().getFullYear()} `}
        Chiew Carol
      </div>
    </div>
  </>
);

export default Profile;