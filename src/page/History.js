import React, { PureComponent } from 'react';
import Text from '../component/Text';
import Title from '../component/Title';
import Event from '../component/Event';
import Analytics from '../Analytics';

import color from '../assets/color';
import guides from '../assets/guides';
import { history } from '../assets/content';

const { event, title } = history;

const styles = {
  ...guides,
  viewport: {
    width: '100%',
    maxWidth: 320,
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

export default class extends PureComponent {

  onTitleClick = () => Analytics.event({
    category: 'component',
    action: 'click',
    label: 'history_title',
  });

  onTitleClick = () => Analytics.event({
    category: 'component',
    action: 'click',
    label: 'history_title',
  });

  onSubtitleClick = () => Analytics.event({
    category: 'component',
    action: 'click',
    label: 'history_subtitle',
  });

  onEventClick = () => Analytics.event({
    category: 'component',
    action: 'click',
    label: 'history_event',
  });

  render() {
    return (
      <div style={styles.viewport}>
        <Text style={styles.subtitle} onClick={this.onSubtitleClick}>{history.subtitle}</Text>
        {title.map(text => (
          <Title key={text} style={styles.title} onClick={this.onTitleClick}>{text}</Title>
        ))}
        {event.map(({ content, ...item }) => (
          <Event key={item.name} onClick={this.onEventClick} {...item}>{content}</Event>
        ))}
      </div>
    );
  }
}
