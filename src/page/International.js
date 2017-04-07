import React, { PureComponent } from 'react';
import Slider from 'react-slick';
import Analytics from '../Analytics';
import Image from '../component/Image';
import TextBody from '../component/Text/Body';
import PGroup from '../component/PGroup';
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
    color: 'blue',
    borderBottom: '2px blue solid',
    margin: '0 4px',
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
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    zIndex: 999,
  },
  showTipbox: {
    display: 'flex',
  },
  tipboxContent: {
    background: 'linear-gradient(to bottom, rgba(0, 0, 255, 0.5), rgba(0, 0, 255, 0.75)), linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.75))',
    width: '100%',
    height: '100%',
    maxWidth: 320,
    maxHeight: 568,
    color: 'white',
    padding: '60px 44px 60px 24px',
    boxSizing: 'border-box',
    position: 'relative',
  },
  tipItem: {
    marginTop: 36,
  },
  tipWord: {
    textAlign: 'left',
    fontSize: 24,
    marginTop: 6,
    opacity: 0.65,
  },
  tipTranslation: {
    textAlign: 'left',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 6,
  },
  tipDescription: {
    textAlign: 'left',
    fontSize: 18,
    marginTop: 18,
    lineHeight: 1.444444,
  },
  cancel: {
    position: 'absolute',
    right: 10,
    top: 10,
    width: 56,
    height: 56,
    cursor: 'pointer',
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
    const tipTriggerText = 'fellowship🔎';

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
          <PGroup>
          {content.map(text => (
            text.indexOf(tipTriggerText) > -1 ?
              <TextBody key={text}>
                <span>{text.substr(0, text.indexOf(tipTriggerText))}</span>
                <span onClick={this.onTip} style={styles.tip}>{tipTriggerText}</span>
                <span>{text.substr(text.indexOf(tipTriggerText) + tipTriggerText.length)}</span>
              </TextBody>
            :
              <TextBody key={text}>{text}</TextBody>
          ))}
          </PGroup>
          <Anonymity {...anonymity} />
        </div>
        <div
          style={{ ...styles.tipbox, ...(isShowTipBox && styles.showTipbox) }}
          onClick={this.onTipClose}
        >
          <div style={styles.tipboxContent}>
            {tip.map(({ word, translation, description }) => (
              <div key={[word, translation].join('-')} style={styles.tipItem}>
                <div style={styles.tipWord}>{word}</div>
                <div style={styles.tipTranslation}>{translation}</div>
                <div style={styles.tipDescription}>{description}</div>
              </div>
            ))}
            <img style={styles.cancel} src={cancel} alt="cancel" />
          </div>
        </div>
      </section>
    );
  }
}
