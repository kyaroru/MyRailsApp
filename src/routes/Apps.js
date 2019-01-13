import React from 'react';
import NavBar from 'components/NavBar';
import reactblogger from 'images/apps/reactblogger.png';
import appstore from 'images/apps/appstore.svg';
import googleplay from 'images/apps/googleplay.png';
import macstore from 'images/apps/macstore.svg';
import microsoft from 'images/apps/microsoft.png';
import rndraw from 'images/apps/rndraw.png';
import rntodoapp from 'images/apps/rntodoapp.png';
import bearsweeper from 'images/apps/bearsweeper.png';

const Apps = () => (
  <>
    <NavBar />
    <div className='container main'>
      <hr />
      <div className='timeline-title'>My Apps</div>
      <div className='row justify-content-center'>
        <div className='col-12 col-sm-6 col-lg-4 app-container'>
          <div className='app-image'>
            <img src={reactblogger} alt="reactblogger" className="apps-icon"/>
          </div>
          <label>
            <h3>ReactBlogger</h3>
          </label>
          <div className='store'>
            <a href="https://play.google.com/store/apps/details?id=com.reactblogger&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
              <img src={googleplay} alt="Get it on Google Play" className="google-icon"/>
            </a>
            <a href="https://itunes.apple.com/us/app/reactblogger/id1447077887?ls=1&mt=8">
              <img src={appstore} alt="Download on the App Store" className="appstore-icon"/>
            </a>
          </div>
        </div>
        <div className='col-12 col-sm-6 col-lg-4 app-container'>
          <div className='app-image'>
            <img src={rndraw} alt="rndraw" className="apps-icon"/>
          </div>
          <label>
            <h3>RNDraw</h3>
          </label>
          <div className='store'>
            <a href="https://play.google.com/store/apps/details?id=com.rndraw&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
              <img src={googleplay} alt="Get it on Google Play" className="google-icon"/>
            </a>
          </div>
        </div>
        <div className='col-12 col-sm-6 col-lg-4 app-container'>
          <div className='app-image'>
            <img src={rntodoapp} alt="rntodoapp" className="apps-icon"/>
          </div>
          <label>
            <h3>RNTodoApp</h3>
          </label>
          <div className='store'>
            <a href="https://play.google.com/store/apps/details?id=com.rntodoapp&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
              <img src={googleplay} alt="Get it on Google Play" className="google-icon"/>
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className='timeline-title'>My Games</div>
      <div className='row justify-content-center'>
        <div className='col-12 col-sm-6 col-lg-4 app-container'>
          <div className='app-image'>
            <img src={bearsweeper} alt="bearsweeper" className="apps-icon"/>
          </div>
          <label>
            <h3>BearSweeper</h3>
          </label>
          <div className='store'>
            <a href="https://play.google.com/store/apps/details?id=com.bearsweeper&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
              <img src={googleplay} alt="Get it on Google Play" className="google-icon"/>
            </a>
            <a href="https://itunes.apple.com/us/app/bearsweeper/id1447809603?ls=1&mt=8">
              <img src={appstore} alt="Download on the App Store" className="appstore-icon"/>
            </a>
            <br />
            <a href="https://itunes.apple.com/my/app/bearsweeper/id1448125669?mt=12">
              <img src={macstore} alt="Download on the Mac App Store" className="macstore-icon"/>
            </a>
            <a href='https://www.microsoft.com/store/apps/9N72G3W07BZK?ocid=badge'>
              <img src={microsoft} alt="Download on the Microsoft Store" className="microsoft-icon"/>
            </a>
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

export default Apps;

