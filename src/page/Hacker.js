import React from 'react';
import Slider from 'react-slick';
import Title from '../component/Title';
import Text from '../component/Text';
import Share from '../component/Share';

import { hacker } from '../assets/content';

const { title, subtitle, share } = hacker;

const styles = {
  viewport: {
    marginTop: 28,
  },
  share: {
    width: '100%',
    overflow: 'hidden',
  },
};

const slider = {
  dots: true,
  speed: 500,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: 'slider',
};

export default function () {
  return (
    <div style={styles.viewport}>
      {title.map(text => (<Title key={text}>{text}</Title>))}
      <Text style={styles.subtitle}>{subtitle}</Text>
      <div style={styles.share}>
        <Slider {...slider}>
          {share.map(data => (
            <div key={data.image}>
              <Share {...data} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
