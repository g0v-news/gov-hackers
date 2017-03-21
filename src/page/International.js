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

const { title, topic, content, anonymity } = international;

const styles = {
  ...guides,
  viewport: {
    width: '100%',
    maxWidth: 1024,
    margin: '0 auto',
  },
  interview: {
    flexDirection: 'row',
  },
  slide: {
    flexBasis: '50%',
    maxWidth: 420,
    paddingBottom: 10,
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
      <Image src={cover} alt="五國越洋專訪看黑客出任務" />
      <div style={{ ...styles.row, ...styles.interview }}>
        <div style={styles.left}>
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
          <Image src={helloWorld} alt="print hello world" />
        </div>
      </div>
      {content.map(text => (<Text key={text}>{text}</Text>))}
      <Anonymity {...anonymity} />
    </div>
  );
}
