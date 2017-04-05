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
import cancel from '../assets/share_sheet/cancel.png';

const { title, subtitle, topic, content, tip, anonymity } = international;

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
  tip: {
    cursor: 'pointer',
  },
  tipbox: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    zIndex: 999,
  },
  showTipbox: {
    display: 'flex',
  },
  tipboxContent: {
    background: 'linear-gradient(to bottom, rgba(59, 71, 245, 0.25), #3B47F5)',
    width: '100%',
    height: '100%',
    maxWidth: 420,
    maxHeight: 420,
    color: '#F0F1FE',
    padding: 20,
    boxSizing: 'border-box',
    paddingTop: 30,
    position: 'relative',
  },
  tipLabel: {
    textAlign: 'left',
    fontSize: 22,
    marginTop: 10,
  },
  tipItem: {
    marginTop: 30,
  },
  tipBody: {
    textAlign: 'left',
    fontSize: 18,
    marginTop: 20,
  },
  cancel: {
    position: 'absolute',
    right: 10,
    top: 10,
    width: 56,
    height: 56,
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

  state = {
    isShowTipBox: false,
  }

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

  onTip = () => this.setState({ isShowTipBox: true });

  onTipClose = () => this.setState({ isShowTipBox: false });

  render() {
    const { isShowTipBox } = this.state;

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
          {content.map(text => (
            <TextBody key={text}>
              {text.indexOf('🔎') ?
                <span>
                  {text.substr(0, text.indexOf('🔎'))}
                  <span onClick={this.onTip} style={styles.tip}>🔎</span>
                  {text.substr(text.indexOf('🔎') + 2)}
                </span>
              : text}
            </TextBody>
          ))}
          <Anonymity {...anonymity} />
        </div>
        <div
          style={{ ...styles.tipbox, ...(isShowTipBox && styles.showTipbox) }}
          onClick={this.onTipClose}
        >
          <div style={styles.tipboxContent}>
            {tip.map(({ label, text }) => (
              <div style={styles.tipItem}>
                {label.map(item => <div key={item} style={styles.tipLabel}>{item}</div>)}
                <div key={label.join('')} style={styles.tipBody}>{text}</div>
              </div>
            ))}
            <img style={styles.cancel} src={cancel} alt="cancel" />
          </div>
        </div>
      </section>
    );
  }
}
