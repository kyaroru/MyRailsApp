
import React from 'react';
import NavBar from 'components/NavBar';
import ProfileHeader from 'components/profile/Header';
import ProfileContent from 'components/profile/Content';
import Footer from 'components/Footer';

const Profile = () => (
  <>
    <NavBar />
    <div className="container main">
      <hr />
      <ProfileHeader />
      <hr />
      <ProfileContent />
      <hr />
      <Footer />
    </div>
  </>
);

export default Profile;
