import React, { PureComponent } from 'react';
import Analytics from '../Analytics';
import Title from '../component/Section/Title';
import TitleLine from '../component/Section/TitleLine';
import Subtitle from '../component/Section/Subtitle';

import InterviewHacker from '../component/Interview/Hacker';
import Cover from '../component/Cover';
import { solution } from '../assets/content';
import guides from '../assets/guides';
import cover from '../assets/solution_cover.jpg';
import hackppl from '../assets/hackppl.png';

const { title, subtitle, editorial, topic } = solution;

const styles = {
  ...guides,
  viewport: {
    width: '100%',
    maxWidth: 1024,
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
  reverse: {
    flexDirection: 'row-reverse',
  },
  topicWrap: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
  },
  topic: {
    position: 'relative',
    flex: '1 1 330px',
    marginTop: 5,
  },
  topicImage: {
    width: '100%',
  },
};

export default class extends PureComponent {

  onTitleClick = () => Analytics.event({
    category: 'component',
    action: 'click',
    label: 'solution_titler',
  });

  onSubTitleClick = () => Analytics.event({
    category: 'component',
    action: 'click',
    label: 'solution_subtitle',
  });

  onCoverClick = () => Analytics.event({
    category: 'component',
    action: 'click',
    label: 'solution_cover',
  });

  onEditorialClick = () => {
    Analytics.event({
      category: 'component',
      action: 'click',
      label: 'solution_editorial',
    });

    Analytics.event({
      category: 'link',
      action: 'click',
      label: 'solution_editorial',
    });
  }

  render() {
    return (
      <section style={styles.viewport}>
        <a name="solution" />
        <div style={{ ...styles.row, ...styles.reverse }}>
          <div style={{ ...styles.right, ...styles.coverWrap }}>
            <Cover src={cover} style={styles.cover} alt={title.join('')} onClick={this.onCoverClick} />
          </div>
          <div style={styles.left}>
            <Title>
              <Subtitle onClick={this.onSubTitleClick}>{subtitle}</Subtitle>
              {title.map(text => (<TitleLine key={text} onClick={this.onTitleClick}>{text}</TitleLine>))}
            </Title>
          </div>
        </div>
        <div style={styles.row}>
          <div style={styles.left} />
          <div style={{ ...styles.right, ...styles.topicWrap }}>
            {topic.map(item => (
              <div key={item.name} style={styles.topic}>
                <InterviewHacker key={item.name} {...item} />
              </div>
            ))}
            <a style={styles.topic} href={editorial.link} target="gov-news" onClick={this.onEditorialClick}>
              <img style={styles.topicImage} src={editorial.image} alt="編輯室觀點" />
            </a>
            <div style={styles.topic}>
              <img style={styles.topicImage} src={hackppl} alt="hackppl" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
