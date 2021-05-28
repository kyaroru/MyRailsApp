import taruc from 'images/education/taruc.png';
import React from 'react';

const education = [
  {
    id: 'taruc-degree',
    direction: 'r',
    title: 'Software Systems Development',
    date: '2013-2015',
    company: 'TAR UC',
    image: taruc,
    url: 'https://www.tarc.edu.my/',
    desc: (
      <>
        <div className="span">Cumulative GPA (CGPA) 3.9178</div>
        <div className="span">Awarded a Book Prize on Feb 2016</div>
      </>
    ),
  },
  {
    id: 'taruc-diploma',
    direction: 'l',
    title: 'Information Systems Engineering',
    date: '2011-2013',
    company: 'TAR UC',
    image: taruc,
    url: 'https://www.tarc.edu.my/',
    desc: (
      <>
        <div className="span">Cumulative GPA (CGPA) 3.968</div>
        <div className="span">Awarded a Book Prize on Sep 2013</div>
        <div className="span">
          President List Awards for 4 Semester out of 5
        </div>
      </>
    ),
  },
];

export default education;
