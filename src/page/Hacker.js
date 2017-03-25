import React, { PureComponent } from 'react';
import Slider from 'react-slick';
import TextBody from '../component/Text/Body';
import Title from '../component/Section/Title';
import TitleLine from '../component/Section/TitleLine';

import Share from '../component/Share';
import Join from '../component/Join';
import Analytics from '../Analytics';

import { hacker } from '../assets/content';

const { title, subtitle, share, topic } = hacker;

const styles = {
  viewport: {
    width: '100%',
    maxWidth: 1024,
  },
  share: {
    width: '100%',
    overflow: 'hidden',
    marginBottom: 64,
  },
  slide: {
    flex: '1 1 20%',
  },
  channels: {
    display: 'block',
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
    label: 'hacker_titler',
  });

  onSubTitleClick = () => Analytics.event({
    category: 'component',
    action: 'click',
    label: 'hacker_subtitle',
  });

  render() {
    return (
      <section style={styles.viewport}>
        <a name="hacker" />
        <Title>
          {title.map(text => (<TitleLine key={text} onClick={this.onTitleClick}>{text}</TitleLine>))}
        </Title>
        <TextBody onClick={this.onSubTitleClick}>{subtitle}</TextBody>
        <div style={styles.share} className="slidelink">
          <Slider {...slider}>
            {share.map(data => (
              <div key={data.image} style={styles.slide}>
                <Share {...data} />
              </div>
            ))}
          </Slider>
        </div>
        <div style={styles.channels}>
        {topic.map(data => (<Join {...data} />))}
        </div>
      </section>
    );
  }
}
