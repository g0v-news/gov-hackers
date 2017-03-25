import React, { PureComponent } from 'react';
import TextArticleTitle from '../component/Text/ArticleTitle';
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
    maxWidth: 288,
  },
  title: {
    color: color.blue65,
    margin: '16px 0',
  },
  titleLine: {
    color: color.blue65,
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
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
      <section style={styles.viewport}>
        <a name="history" />
        <div style={styles.title}>
          <div style={styles.subtitle} onClick={this.onSubtitleClick}>{history.subtitle}</div>
          {title.map(text => (
            <TextArticleTitle key={text} style={styles.titleLine} onClick={this.onTitleClick}>{text}</TextArticleTitle>
          ))}
        </div>
        {event.map(({ content, ...item }) => (
          <Event key={item.name} onClick={this.onEventClick} {...item}>{content}</Event>
        ))}
      </section>
    );
  }
}
