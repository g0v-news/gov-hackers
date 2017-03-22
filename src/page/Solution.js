import React from 'react';
import Text from '../component/Text';
import Title from '../component/Title';
import SolutionPeople from '../component/SolutionPeople';
import Cover from '../component/Cover';
import { solution } from '../assets/content';
import guides from '../assets/guides';
import cover from '../assets/solution_cover.jpg';

const { title, subtitle, topic } = solution;

const styles = {
  ...guides,
  viewport: {
    width: '100%',
    maxWidth: 1024,
    margin: '0 auto',
    marginTop: 28,
  },
  cover: {
    backgroundSize: '832px 455px',
  },
  coverWrap: {
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 24,
  },
  topic: {
    position: 'relative',
    flex: '1 1 330px',
    marginBottom: 1,
  },
  reverse: {
    flexDirection: 'row-reverse',
  },
};

export default function () {
  return (
    <div style={styles.viewport}>
      <div style={{ ...styles.row, ...styles.reverse }}>
        <div style={{ ...styles.right, ...styles.coverWrap }}>
          <Cover src={cover} style={styles.cover} alt={title.join('')} />
        </div>
        <div style={styles.left}>
          <Text style={styles.subtitle}>{subtitle}</Text>
          {title.map(text => (<Title key={text}>{text}</Title>))}
        </div>
      </div>
      <div style={styles.row}>
        <div style={styles.left} />
        <div style={styles.right} className="slidebox">
          <div>
            {topic.map(item => (
              <div style={styles.topic}>
                <SolutionPeople key={item.name} {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
