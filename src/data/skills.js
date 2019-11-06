import reactnative from 'images/skill/reactnative.png';
import rails from 'images/skill/rails.png';
import haml from 'images/skill/haml.png';
import react from 'images/skill/react.png';

const left = [
  {
    id: 'reactnative',
    image: reactnative,
    label: 'React Native',
    progress: 'ninety',
    url: 'https://facebook.github.io/react-native/',
  },
  {
    id: 'rails',
    image: rails,
    label: 'Ruby on Rails',
    progress: 'thirty',
    url: 'https://rubyonrails.org/',
  },
  {
    id: 'html',
    image: null,
    label: 'HTML',
    progress: 'hundred',
    url: 'https://www.w3schools.com/html/',
  },
];

const right = [
  {
    id: 'react',
    image: react,
    label: 'React JS',
    progress: 'eighty',
    url: 'https://reactjs.org/',
  },
  {
    id: 'haml',
    image: haml,
    label: 'HAML',
    progress: 'fifty',
    url: 'http://haml.info/',
  },
  {
    id: 'css3',
    image: null,
    label: 'CSS3',
    progress: 'hundred',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3',
  },
];

export default { left, right };
