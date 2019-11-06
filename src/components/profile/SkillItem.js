import React from 'react';

const SkillItem = ({ data }) => (
  <a href={data.url}>
    <label>{data.label}</label>
    {data.image && <img src={data.image} alt={data.id} className="inline-icon" />}
    <li>
      <span className={`progress progressbar ${data.progress}`} />
    </li>
  </a>
);

export default SkillItem;
