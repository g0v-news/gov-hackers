import React, { PureComponent } from 'react';
import Slider from 'react-slick';
import Analytics from '../Analytics';
import Image from '../component/Image';
import TextBody from '../component/Text/Body';
import Title from '../component/Section/Title';
import TitleLine from '../component/Section/TitleLine';
import Subtitle from '../component/Section/Subtitle';

import Cover from '../component/Cover';

import InterviewWorld from '../component/Interview/World';
import Anonymity from '../component/Anonymity';

import { international } from '../assets/content';
import guides from '../assets/guides';

import cover from '../assets/international-cover.jpg';
import map from '../assets/international-map.jpg';
import helloWorld from '../assets/hello_world-300.png';

const { title, subtitle, topic, content, anonymity } = international;

const styles = {
  ...guides,
  viewport: {
  },
  container: {
    width: '100%',
    maxWidth: 1024,
    margin: '0 auto',
  },
  cover: {
    marginBottom: 24,
  },
  slide: {
    flexBasis: '50%',
    maxWidth: 420,
    paddingBottom: 1,
  },
  helloWorld: {
    marginTop: 15,
    backgroundImage: `url(${helloWorld})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
  },
  helloWorldImage: {
    width: '100%',
    maxHeight: 240,
    opacity: 0,
  },
  content: {
    margin: 'auto',
    marginTop: 28,
    marginBottom: 0,
    lineHeight: 1.3,
    fontSize: 18,
    maxWidth: 288,
  },
  map: {
    maxWidth: 320,
    display: 'block',
    margin: '1em auto',
  },
  reverse: {
    flexDirection: 'row-reverse',
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
    label: 'international_title',
  });

  onSubTitleClick = () => Analytics.event({
    category: 'component',
    action: 'click',
    label: 'international_subtitle',
  });

  onCoverClick = () => Analytics.event({
    category: 'component',
    action: 'click',
    label: 'international_cover',
  });

  onMapClick = () => Analytics.event({
    category: 'component',
    action: 'click',
    label: 'international_map',
  });

  onShowDictionary = () => {
  }

  render() {
    return (
      <section style={styles.viewport}>
        <a name="international" />
        <div style={styles.container}>
          <div style={{ ...styles.row, ...styles.reverse }}>
            <div style={{ ...styles.right, ...styles.cover }}>
              <Cover src={cover} alt={title.join('')} onClick={this.onCoverClick}/>
            </div>
            <div style={styles.left}>
              <Title>
                <Subtitle onClick={this.onSubTitleClick}>{subtitle}</Subtitle>
                {title.map(text => (<TitleLine key={text} onClick={this.onTitleClick}>{text}</TitleLine>))}
              </Title>
              <img style={styles.map} src={map} alt="Map of civic hackers" onClick={this.onMapClick} />
            </div>
          </div>
          <div style={styles.row}>
            <div style={styles.left} />
            <div style={styles.right} className="slidebox">
              <Slider {...slider}>
                {topic.map(data => (
                  <div key={data.region} style={styles.slide}>
                    <InterviewWorld {...data} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <div style={styles.helloWorld}>
          <Image style={styles.helloWorldImage} src={helloWorld} alt="print(&quot;Hello world.&quot;);" />
        </div>
        <div style={styles.container}>
          {content.map(text => (<TextBody key={text}>{text}</TextBody>))}
          <Anonymity {...anonymity} />
        </div>
      </section>
    );
  }
}
