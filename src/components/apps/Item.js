import React from 'react';
import appstore from 'images/apps/appstore.svg';
import googleplay from 'images/apps/googleplay.png';
import macstore from 'images/apps/macstore.svg';
import microsoft from 'images/apps/microsoft.png';

const AppItem = ({ data }) => (
  <div className='col-12 col-sm-6 col-lg-4 app-container'>
    <div className='app-image'>
      <img src={data.image} alt={data.id} className="apps-icon"/>
    </div>
    <label>
      <h3>{data.label}</h3>
    </label>
    <div className='store'>
      {data.googleUrl && <a href={data.googleUrl}>
        <img src={googleplay} alt="Get it on Google Play" className="google-icon"/>
      </a>}
      {data.appleUrl && <a href={data.appleUrl}>
        <img src={appstore} alt="Download on the App Store" className="appstore-icon"/>
      </a>}
      <br />
      {data.macstoreUrl && <a href={data.macstoreUrl}>
        <img src={macstore} alt="Download on the Mac App Store" className="macstore-icon"/>
      </a>}
      {data.microsoftUrl && <a href={data.microsoftUrl}>
        <img src={microsoft} alt="Download on the Microsoft Store" className="microsoft-icon"/>
      </a>}
    </div>
  </div>
);

export default AppItem;