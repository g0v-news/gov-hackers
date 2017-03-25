import React, { PropTypes, PureComponent } from 'react';
import Analytics from '../Analytics';
import Label from './Label';
import More from './More';

import hand from '../assets/hand.png';

const styles = {
  viewport: {
    position: 'relative',
    backgroundSize: 'cover',
    border: '1px #BFBFFF solid',
    height: 88,
    width: '100%',
    maxWidth: 375,
    boxSizing: 'border-box',
    margin: '64px auto',
    display: 'block',
    color: '#000',
    textDecoration: 'none',
    paddingTop: '0.333333rem',
  },
  text: {
    lineHeight: 1.4,
    textAlign: 'left',
    paddingLeft: 45,
    paddingRight: 40,
    paddingTop: 0,
    display: 'flex',
  },
  iconWrap: {
    position: 'absolute',
    left: 5,
    top: 6,
  },
  icon: {
    width: 32,
    height: 32,
  },
  more: {
    position: 'absolute',
    right: 0,
    top: 12,
    width: 40,
  },
};

export default class extends PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    quote: PropTypes.arrayOf(PropTypes.string),
    style: PropTypes.shape(),
    link: PropTypes.string,
  };

  static defaultProps = {
    name: '',
    quote: [],
    style: {},
    link: '',
  };

  onClick = () => {
    const { name } = this.props;

    Analytics.event({
      category: 'component',
      action: 'click',
      label: `anonymity_${name}`,
    });

    Analytics.event({
      category: 'link',
      action: 'click',
      label: `anonymity_${name}`,
    });
  }

  render() {
    const { quote, style, link } = this.props;

    return (
      <a style={{ ...styles.viewport, ...style }} href={link} target="gov-news" onClick={this.onClick}>
        <Label right bottom>公務員匿名共筆</Label>
        {quote.map(text => (<div key={text} style={styles.text} className="anonymity">{text}</div>))}
        <div style={styles.iconWrap}>
          <img src={hand} style={styles.icon} alt="" />
        </div>
        <More style={styles.more} />
      </a>
    );
  }
}
