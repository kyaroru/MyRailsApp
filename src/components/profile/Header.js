import React from 'react';
import bear from 'images/bear.png';
import facebook from 'images/social/facebook.jpg';
import instagram from 'images/social/instagram.jpg';
import github from 'images/social/github.png';
import linkedin from 'images/social/linkedin.jpg';
import skype from 'images/social/skype.jpg';
import carol from 'images/carol.jpg';

const social = [
  {
    id: 'facebook',
    url: 'https://fb.me/kyaroru.cc',
    image: facebook,
  },
  {
    id: 'instagram',
    url: 'https://www.instagram.com/kyaroru.cc',
    image: instagram,
  },
  {
    id: 'github',
    url: 'https://www.github.com/kyaroru',
    image: github,
  },
  {
    id: 'linkedin',
    url: 'https://www.linkedin.com/in/kyaroru',
    image: linkedin,
  },
  {
    id: 'skype',
    url: 'skype:live:kyaroru_1?chat',
    image: skype,
  },
];
const ProfileHeader = () => (
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
        {social.map(item => (
          <a className='social-link' href={item.url} key={item.id}>
            <img src={item.image} alt={item.id} className="social-icon"/>
          </a>
        ))}
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
);

export default ProfileHeader;