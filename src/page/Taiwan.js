import React, { PureComponent } from 'react';
import Slider from 'react-slick';
import Analytics from '../Analytics';
import TextBody from '../component/Text/Body';
import Title from '../component/Section/Title';
import TitleLine from '../component/Section/TitleLine';
import InterviewTaiwan from '../component/Interview/Taiwan';
import Anonymity from '../component/Anonymity';
import Window from '../component/Window';
import Cover from '../component/Cover';

import guides from '../assets/guides';
import { taiwan } from '../assets/content';

import cover from '../assets/taiwan_cover.jpg';

const { title, subtitle, topic, window, anonymity } = taiwan;

const styles = {
  ...guides,
  viewport: {
    width: '100%',
    maxWidth: 1024,
  },
  subtitle: {
    margin: '14px auto 0',
    fontSize: 18,
    lineHeight: 1.6667,
    maxWidth: 288,
    paddingRight: 36,
  },
  cover: {
    marginBottom: 24,
  },
  topic: {
    marginTop: 10,
  },
  slide: {
    flexBasis: '50%',
    maxWidth: 420,
    paddingBottom: 1,
  },
  reverse: {
    flexDirection: 'row-reverse',
  },
  windowText: {
    width: 198,
  },
};

const slider = {
  dots: true,
  speed: 500,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: 'slider',
  responsive: [
    { breakpoint: 420, settings: { slidesToShow: 1 } },
    { breakpoint: 960, settings: { slidesToShow: 2 } },
    { breakpoint: 100000, settings: 'unslick' },
  ],
};

export default class extends PureComponent {

  onTitleClick = () => Analytics.event({
    category: 'component',
    action: 'click',
    label: 'taiwan_title',
  });

  onSubTitleClick = () => Analytics.event({
    category: 'component',
    action: 'click',
    label: 'taiwan_subtitle',
  });

  onCoverClick = () => Analytics.event({
    category: 'component',
    action: 'click',
    label: 'taiwan_cover',
  });

  render() {
    return (
      <section style={styles.viewport}>
        <a name="taiwan" />
        <div style={{ ...styles.row, ...styles.reverse }}>
          <div style={{ ...styles.right, ...styles.cover }}>
            <Cover src={cover} alt="What happens when a hacker meets the government?" onClick={this.onCoverClick} />
          </div>
          <div style={styles.left}>
            <Title>
              {title.map(text => (<TitleLine key={text} onClick={this.onTitleClick}>{text}</TitleLine>))}
            </Title>
            <TextBody onClick={this.onSubTitleClick}>{subtitle}</TextBody>
          </div>
        </div>
        <div style={styles.row}>
          <div style={styles.left} />
          <div style={{ ...styles.right, ...styles.topic }} className="slidebox">
            <Slider {...slider}>
              {topic.map(data => (
                <div key={data.name} style={styles.slide}>
                  <InterviewTaiwan {...data} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <Anonymity {...anonymity} />
        <Window>
          {window.map(text => (
            <TextBody style={styles.windowText} key={text}>{text}</TextBody>
          ))}
        </Window>
      </section>
    );
  }
}
