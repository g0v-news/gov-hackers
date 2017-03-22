import React, { PureComponent } from 'react';
import Slider from 'react-slick';
import Analytics from '../Analytics';
import Title from '../component/Title';
import Text from '../component/Text';
import TaiwanPeople from '../component/TaiwanPeople';
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
    margin: '0 auto',
    marginTop: 28,
  },
  subtitle: {
    marginTop: 14,
  },
  cover: {
    backgroundColor: '#F5F5FF',
    marginBottom: 10,
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
    fontSize: 18,
    lineHeight: 1.5,
  },
  windowTextBottom: {
    fontWeight: 'bold',
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
      <div style={styles.viewport}>
        <div style={{ ...styles.row, ...styles.reverse }}>
          <div style={{ ...styles.right, ...styles.cover }}>
            <Cover src={cover} alt="黑客進政府實錄" onClick={this.onCoverClick} />
          </div>
          <div style={styles.left}>
            {title.map(text => (<Title key={text} onClick={this.onTitleClick}>{text}</Title>))}
            <Text style={styles.subtitle} onClick={this.onSubTitleClick}>{subtitle}</Text>
          </div>
        </div>
        <div style={styles.row}>
          <div style={styles.left} />
          <div style={{ ...styles.right, ...styles.topic }} className="slidebox">
            <Slider {...slider}>
              {topic.map(data => (
                <div key={data.name} style={styles.slide}>
                  <TaiwanPeople {...data} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <Anonymity {...anonymity} />
        <Window>
          {window.map(text => (
            <Text key={text} style={styles.windowText}>{text}</Text>
          ))}
        </Window>
      </div>
    );
  }
}
