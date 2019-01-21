import React from 'react';

const TimelineItem = ({ data }) => (
  <li>
    <div className={`direction-${data.direction}`}>
      <div className='flag-wrapper'>
        <span className='flag'>{data.title}</span>
        <span className='tag-wrapper'>
          <span className='time'>{data.date}</span>
        </span>
        <a className='tag-wrapper up' href={data.url}>
          <span className='company'>{data.company}</span>
          <img src={data.image} alt="surialabs" className="inline-icon"/>
        </a>
      </div>
      <div className='desc'>
        {data.desc}
      </div>
    </div>
  </li>
);

export default TimelineItem;