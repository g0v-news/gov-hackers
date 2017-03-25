import React, { PureComponent } from 'react';
import BodyText from '../component/BodyText';
import Event from '../component/History/Event';
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
    textAlign: 'center',
    color: color.textAssist,
    marginTop: 0,
    marginBottom: 0,
  },
};

export default class extends PureComponent {

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
        <a name="history" />
        <BodyText style={styles.subtitle} onClick={this.onSubtitleClick}>{history.subtitle}</BodyText>
        {title.map(text => (
          <div key={text} style={styles.title} onClick={this.onTitleClick}>{text}</div>
        ))}
        {event.map(({ content, ...item }) => (
          <Event key={item.name} onClick={this.onEventClick} {...item}>{content}</Event>
        ))}
      </div>
    );
  }
}
