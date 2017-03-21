import React from 'react';
import Slider from 'react-slick';
import Title from '../component/Title';
import Text from '../component/Text';
import Share from '../component/Share';

import { hacker } from '../assets/content';

const { share } = hacker;

const styles = {
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
    <div>
      <Title>黑客精神</Title>
      <Text>只要有心、有想像力，你就是黑客。</Text>
      <Slider {...slider}>
        {share.map(data => (
          <div key={data.image} style={styles.slide}>
            <Share {...data} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
