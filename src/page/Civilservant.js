import React from 'react';
import Slider from 'react-slick';
import Title from '../component/Title';
import Image from '../component/Image';
import Label from '../component/Label';
import More from '../component/More';
import Issue from '../component/Issue';
import Anonymity from '../component/Anonymity';
import { civilservant } from '../assets/content';
import color from '../assets/color';

import cover from '../assets/civilservant-cover.jpg';

const { title, issue, link, anonymity } = civilservant;

const styles = {
  more: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 6,
    width: 40,
  },
  linkTitle: {
    fontSize: 28,
    textAlign: 'left',
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 40,
  },
  content: {
    position: 'relative',
    width: '100%',
    maxWidth: 375,
    margin: '0 auto',
  },
  link: {
    position: 'relative',
    width: '100%',
    paddingBottom: '35%',
    boxSizing: 'border-box',
    border: `1px ${color.border} solid`,
  },
  linkBox: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 1,
    padding: 7,
  },
  issue: {
    width: '100%',
    maxWidth: 375,
    margin: '0 auto',
  },
  issueWrap: {
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
  dotsClass: 'slick-dots civildot',
};

export default function () {
  return (
    <div>
      <Image src={cover} alt={title.join('')} />
      {title.map(text => (<Title key={text}>{text}</Title>))}
      <div style={styles.issueWrap}>
        <div style={styles.issue}>
          <Slider {...slider}>
            {issue.map(data => (
              <div key={data.quote} style={styles.slide}>
                <Issue {...data} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <Image src={civilservant.avatar} alt="au" />
      <div style={styles.content}>
        <div style={styles.link}>
          <div style={styles.linkBox}>
            <Label top left>專訪</Label>
            <div style={styles.linkTitle}>{link.quote}</div>
            <More style={styles.more} />
          </div>
        </div>
      </div>
      <Anonymity {...anonymity} />
    </div>
  );
}
