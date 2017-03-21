import React from 'react';
import Slider from 'react-slick';
import Title from '../component/Title';
import Image from '../component/Image';
import Text from '../component/Text';
import Interview from '../component/Interview';
import Anonymity from '../component/Anonymity';

import { international } from '../assets/content';
import guides from '../assets/guides';

import cover from '../assets/international-cover.jpg';
import map from '../assets/international-map.jpg';
import helloWorld from '../assets/hello_world.jpg';

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
  },
  helloWorldImage: {
    width: '100%',
    maxHeight: 240,
    opacity: 0,
  },
  content: {
    marginTop: 28,
    lineHeight: 1.3,
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

export default function () {
  return (
    <div style={styles.viewport}>
      <div style={styles.container}>
        <Image src={cover} alt={title.join('')} />
        <div style={styles.row}>
          <div style={styles.left}>
            <Text style={styles.subtitle}>{subtitle}</Text>
            {title.map(text => (<Title key={text}>{text}</Title>))}
            <Image src={map} alt="世界黑客地圖" />
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
        <Image style={styles.helloWorldImage} src={helloWorld} alt="print hello world" />
      </div>
      <div style={styles.container}>
        {content.map(text => (<Text style={styles.content} key={text}>{text}</Text>))}
        <Anonymity {...anonymity} />
      </div>
    </div>
  );
}
