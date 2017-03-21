import React from 'react';
import Text from '../component/Text';
import SolutionPeople from '../component/SolutionPeople';
import Cover from '../component/Cover';
import { solution } from '../assets/content';

import cover from '../assets/solution_cover.jpg';

const { title, topic } = solution;

const styles = {
  cover: {
    backgroundSize: '640px 350px',
  },
  topic: {
    position: 'relative',
    width: '100%',
    maxWidth: 375,
    margin: '0 auto',
  },
};

export default function () {
  return (
    <div>
      <Cover src={cover} style={styles.cover} alt={title.join('')} />
      {title.map(text => (<Text key={text}>{text}</Text>))}
      <div style={styles.topic}>
        {topic.map(item => (<SolutionPeople key={item.name} {...item} />))}
      </div>
    </div>
  );
}
