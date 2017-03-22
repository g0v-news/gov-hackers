import React, { PureComponent } from 'react';
import Slider from 'react-slick';
import Analytics from '../Analytics';
import Title from '../component/Title';
import Image from '../component/Image';
import Text from '../component/Text';
import BodyText from '../component/BodyText';
import Interview from '../component/Interview';
import Anonymity from '../component/Anonymity';

import { international } from '../assets/content';
import guides from '../assets/guides';
import color from '../assets/color';

import cover from '../assets/international-cover.jpg';
import map from '../assets/international-map.jpg';
import helloWorld from '../assets/hello_world-300.png';

const { title, subtitle, topic, content, anonymity } = international;

const styles = {
  ...guides,
  viewport: {
    marginTop: 28,
  },
  container: {
    width: '100%',
    maxWidth: 1024,
    margin: '0 auto',
  },
  subtitle: {
    fontSize: 24,
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
    backgroundColor: color.backgroundAssist,
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
    margin: '0 auto',
  }
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

  render() {
    return (
      <div style={styles.viewport}>
        <div style={styles.container}>
          <Image src={cover} alt={title.join('')} onClick={this.onCoverClick} />
          <div style={styles.row}>
            <div style={styles.left}>
              <Text style={styles.subtitle} onClick={this.onSubTitleClick}>{subtitle}</Text>
              {title.map(text => (<Title key={text} onClick={this.onTitleClick}>{text}</Title>))}
              <img style={styles.map} src={map} alt="世界黑客地圖" onClick={this.onMapClick} />
            </div>
            <div style={styles.right} className="slidebox">
              <Slider {...slider}>
                {topic.map(data => (
                  <div key={data.region} style={styles.slide}>
                    <Interview {...data} />
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
          {content.map(text => (<BodyText key={text}>{text}</BodyText>))}
          <Anonymity {...anonymity} />
        </div>
      </div>
    );
  }
}
