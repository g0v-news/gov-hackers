import React, { PureComponent } from 'react';
import ExecutionEnvironment from 'exenv';
import Analytics from '../Analytics';
import color from '../assets/color';
import logo from '../assets/header.png';
import twitter from '../assets/share_sheet/twitter.png';
import facebook from '../assets/share_sheet/facebook.png';

import { header } from '../assets/content';

const { tags, share } = header;

const styles = {
  viewport: {
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    background: color.background,
    opacity: 0,
  },
  box: {
    width: '100%',
    maxWidth: 1024,
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    color: color.primary,
    alignItems: 'center',
    margin: '0 auto',
    flexFlow: 'row no-wrap',
    justifyContent: 'space-between',
  },
  link: {
    flexGrow: 1,
    textDecoration: 'none',
    color: color.primary,
    textAlign: 'left',
  },
  shareWrap: {
    width: (36 * 2) + 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  share: {
    width: 36,
  },
  logo: {
  },
  logoImage: {
    height: 60,
    marginLeft: -28,
  },
};

export default class extends PureComponent {

  state = {
    opacity: 0,
    offset: -60,
  }

  componentDidMount() {
    if (ExecutionEnvironment.canUseDOM) {
      window.addEventListener('scroll', this.onScroll);
    }
  }

  componentWillUnmount() {
    if (ExecutionEnvironment.canUseDOM) {
      window.removeEventListener('scroll', this.onScroll);
    }
  }

  onScroll = (e) => {
    const { scrollTop } = e.target.body;
    const offset = scrollTop - this.lastScrollTop;

    if (scrollTop > 1600) {
      this.setOffset(offset);
      this.setOpacity((scrollTop - 1600) / 100);
    }

    this.lastScrollTop = scrollTop;
  }

  onClick = label => Analytics.event({
    category: 'tag',
    action: 'goto',
    label,
  });

  onShareFacebookClick = () => Analytics.event({
    category: 'share',
    action: 'click',
    label: 'facebook',
  });

  onShareTwitterClick = () => Analytics.event({
    category: 'share',
    action: 'click',
    label: 'twitter',
  });

  setOffset = (value) => {
    const { offset: stateOffset } = this.state;
    let offset = stateOffset + value;

    if (offset > 0) {
      offset = 0;
    } else if (offset < -60) {
      offset = -60;
    }

    if (stateOffset !== offset) {
      this.setState({ offset });
    }
  }

  setOpacity = (value) => {
    const { opacity: stateOpacity } = this.state;

    let opacity = value;
    if (opacity > 1) {
      opacity = 1;
    } else if (opacity < 0) {
      opacity = 0;
    }

    if (stateOpacity !== opacity) {
      this.setState({ opacity });
    }
  }

  lastScrollTop = 0;

  render() {
    const { opacity, offset } = this.state;

    return (
      <div style={{ ...styles.viewport, top: offset, opacity }}>
        <div style={styles.box} className="header">
          <div style={styles.logo} className="headerlogo">
            <img style={styles.logoImage} src={logo} alt="g0v.news" />
          </div>
          {tags.map(tag => (
            <a
              href={`#${tag.name}`}
              style={styles.link}
              className="headerlink"
              onClick={() => this.onClick(tag.title)}
            >
              {tag.title}
            </a>
          ))}
          <div style={styles.shareWrap}>
            <a onClick={this.onShareTwitterClick} href={share.twitter} target="sharelink">
              <img style={styles.share} src={twitter} alt="share to twitter" />
            </a>
            <a onClick={this.onShareFacebookClick} href={share.facebook} target="sharelink">
              <img style={styles.share} src={facebook} alt="share to facebook" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
