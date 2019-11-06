import React from 'react';
import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import AppItem from 'components/apps/Item';
import apps from 'data/apps';

const Apps = () => (
  <>
    <NavBar />
    <div className="container main">
      <hr />
      <div className="timeline-title">My Apps</div>
      <div className="row justify-content-center">
        {apps.apps.map(data => (
          <AppItem data={data} key={data.id} />
        ))}
      </div>
      <hr />
      <div className="timeline-title">My Games</div>
      <div className="row justify-content-center">
        {apps.games.map(data => (
          <AppItem data={data} key={data.id} />
        ))}
      </div>
      <hr />
      <Footer />
    </div>
  </>
);

export default Apps;
