import React from 'react';
import experience from 'data/experience';
import education from 'data/education';
import skills from 'data/skills';
import languages from 'data/languages';
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const ProfileContent = () => (
  <div className='content'>
    <div className='timeline-title' id='experience'>Experience</div>
    <div className='timeline-container'>
      <ul className="timeline">
        {experience.map(data => (
          <TimelineItem data={data} key={data.id}/>
        ))}
      </ul>
    </div>
    <div className='timeline-title' id='education'>Education</div>
    <div className='timeline-container'>
      <ul className="timeline">
        {education.map(data => (
          <TimelineItem data={data} key={data.id} />
        ))}
      </ul>
    </div>
    <div className='timeline-title' id='skills'>Skills</div>
    <div className='timeline-container'>
      <div className='left'>
        <div className='skills-bar-container'>
          {skills.left.map(data => (
            <SkillItem data={data} key={data.id} />
          ))}
        </div>
      </div>
      <div className='right'>
        <div className='skills-bar-container'>
          {skills.right.map(data => (
            <SkillItem data={data} key={data.id} />
          ))}
        </div>
      </div>
    </div>
    <div className='timeline-title' id='languages'>Languages</div>
    <div className='timeline-container'>
      <div className='skills-bar-container'>
        {languages.map(data => (
          <SkillItem data={data} key={data.id} />
        ))}
      </div>
    </div>
  </div>
);

export default ProfileContent;