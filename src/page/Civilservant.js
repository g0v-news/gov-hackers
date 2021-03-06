import React, { PureComponent } from 'react';
import Slider from 'react-slick';
import Analytics from '../Analytics';
import TextArticleTitle from '../component/Text/ArticleTitle';
import Title from '../component/Section/Title';
import TitleLine from '../component/Section/TitleLine';
import Subtitle from '../component/Section/Subtitle';

import Image from '../component/Image';
import Label from '../component/Label';
import More from '../component/More';
import Conversation from '../component/Conversation';
import Anonymity from '../component/Anonymity';
import guides from '../assets/guides';
import { civilservant } from '../assets/content';
import color from '../assets/color';

import office from '../assets/office.jpg';
import officeDigital from '../assets/office_digital.jpg';

const { title, subtitle, conversation, link, anonymity } = civilservant;

const styles = {
  ...guides,
  viewport: {
    width: '100%',
    maxWidth: 1024,
    overflow: 'hidden',
  },
  content: {
    marginTop: 12,
  },
  more: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 6,
    width: 40,
  },
  cover: {
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
  },
  link: {
    position: 'relative',
    width: '100%',
    boxSizing: 'border-box',
    border: `1px ${color.border} solid`,
    marginTop: 0,
    display: 'block',
    color: '#000',
    textDecoration: 'none',
  },
  linkTitle: {
    fontSize: 28,
    textAlign: 'left',
    padding: 12,
    paddingTop: 36,
  },
  conversation: {
    width: '100%',
    maxWidth: 375,
    margin: '0 auto',
    overflow: 'hidden',
  },
  au: {
    maxWidth: 320,
    display: 'block',
    margin: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

const slider = {
  dots: true,
  speed: 500,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: 'slider dots-in-middle',
  dotsClass: 'slick-dots',
};

export default class extends PureComponent {

  onTitileClick = () => Analytics.event({
    category: 'component',
    action: 'click',
    label: 'civilservant_title',
  });

  onSubTitileClick = () => Analytics.event({
    category: 'component',
    action: 'click',
    label: 'civilservant_subtitle',
  });

  onLinkClick = () => {
    Analytics.event({
      category: 'component',
      action: 'click',
      label: 'civilservant_topic',
    });
    Analytics.event({
      category: 'link',
      action: 'click',
      label: 'civilservant_topic',
    });
  }

  render() {
    return (
      <section style={styles.viewport}>
        <a name="civilservant" />
        <div style={styles.cover}>
          <div>
            <Image src={office} alt={title.join('')} />
          </div>
          <div className="disable-when-mobile">
            <Image src={officeDigital} alt={title.join('')} />
          </div>
        </div>
        <div style={{ ...styles.row, ...styles.content }}>
          <div style={styles.left}>
            <Title>
              <Subtitle onClick={this.onSubTitleClick}>{subtitle}</Subtitle>
              {title.map(text => (<TitleLine key={text} onClick={this.onTitleClick}>{text}</TitleLine>))}
            </Title>
          </div>
          <div style={styles.right}>
            <div style={styles.conversation}>
              <Slider {...slider}>
                {conversation.map(data => (
                  <div key={data.anonymous.text}>
                    <Conversation {...data} />
                  </div>
                ))}
              </Slider>
            </div>
            <img style={styles.au} src={civilservant.avatar} alt="au" />
            <a style={styles.link} href={link.link} target="gov-news" onClick={this.onLinkClick}>
              <Label left top>專訪</Label>
              <div style={styles.linkTitle}>{link.quote.map(text => (
                <TextArticleTitle key={text}>{text}</TextArticleTitle>
              ))}</div>
              <More style={styles.more} />
            </a>
          </div>
        </div>
        <Anonymity {...anonymity} />
      </section>
    );
  }
}
