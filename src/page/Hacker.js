import React from 'react';
import Slider from 'react-slick';
import Title from '../component/Title';
import Text from '../component/Text';
import Share from '../component/Share';

import { hacker } from '../assets/content';

const { title, subtitle, share } = hacker;

const styles = {
  viewport: {
    width: '100%',
    maxWidth: 1024,
    margin: '0 auto',
    marginTop: 28,
  },
  share: {
    width: '100%',
    overflow: 'hidden',
  },
  slide: {
    flex: '1 1 20%',
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
      {title.map(text => (<Title key={text}>{text}</Title>))}
      <Text style={styles.subtitle}>{subtitle}</Text>
      <div style={styles.share} className="slidelink">
        <Slider {...slider}>
          {share.map(data => (
            <div key={data.image} style={styles.slide}>
              <Share {...data} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
