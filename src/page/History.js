import React from 'react';
import Text from '../component/Text';
import Title from '../component/Title';
import Event from '../component/Event';

import color from '../assets/color';
import guides from '../assets/guides';
import { history } from '../assets/content';

const { event, title } = history;

const styles = {
  ...guides,
  viewport: {
    width: '100%',
    maxWidth: 1024,
    margin: '0 auto',
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    color: color.textAssist,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: color.textAssist,
  },
};

export default function () {
  return (
    <div style={styles.viewport}>
      <Text style={styles.subtitle}>{history.subtitle}</Text>
      {title.map(text => (
        <Title key={text} style={styles.title}>{text}</Title>
      ))}
      {event.map(({ content, ...item }) => (
        <Event key={item.name} {...item}>{content}</Event>
      ))}
    </div>
  );
}
