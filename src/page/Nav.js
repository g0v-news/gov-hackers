import React, { PureComponent } from 'react';
import ExecutionEnvironment from 'exenv';
import Analytics from '../Analytics';
import color from '../assets/color';
import logo from '../assets/logo-small.png';
import twitter from '../assets/share_sheet/twitter.png';
import facebook from '../assets/share_sheet/facebook.png';

import { header } from '../assets/content';

import guides from '../assets/guides';

const { title, tags, share } = header;

const styles = {
  viewport: {
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    opacity: 0,
    zIndex: guides.z.nav,
  },
  links: {
    display: 'flex',
    flexDirection: 'row',
    color: color.primary,
    alignItems: 'center',
    flexFlow: 'row no-wrap',
    justifyContent: 'space-between',
  },
  link: {
    flexGrow: 1,
    textDecoration: 'none',
    color: color.primary,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  share: {
    group: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      right: 0,
      width: (48 * 2),
    },
    icon: {
      display: 'inline-block',
      verticalAlign: 'middle',
      width: 24,
      padding: '0 12px',
    },
  },
  logo: {
    group: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      left: 0,
      textAlign: 'left',
    },
    image: {
      display: 'inline-block',
      verticalAlign: 'middle',
      height: 36,
      marginLeft: -14,
    },
    type: {
      display: 'inline-block',
      verticalAlign: 'middle',
      fontSize: 22,
      fontWeight: 'bold',
      marginLeft: 4,
    }
  },

};

export default class extends PureComponent {

  maxOffset = -(48 + 36 + 4*2 + 2)

  state = {
    opacity: 0,
    offset: this.maxOffset,
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
    } else if (offset < this.maxOffset) {
      offset = this.maxOffset;
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
      <nav style={{ ...styles.viewport, top: offset, opacity }}>
        <div style={styles.logo.group}>
          <img style={styles.logo.image} src={logo} alt="g0v.news" />
          <div style={styles.logo.type}>{title};</div>
        </div>
        <div style={styles.share.group}>
          <a onClick={this.onShareTwitterClick} href={share.twitter} target="sharelink">
            <img style={styles.share.icon} src={twitter} alt="share to twitter" />
          </a>
          <a onClick={this.onShareFacebookClick} href={share.facebook} target="sharelink">
            <img style={styles.share.icon} src={facebook} alt="share to facebook" />
          </a>
        </div>
        <div style={styles.links} className="links">
          {tags.map(tag => (
            <a className={[tag.italic ? 'italic' : '', 'link'].join(' ')} key={tag.name} href={`#${tag.name}`} style={styles.link} onClick={() => this.onClick(tag.title.join(''))}>
              {tag.title.map(line => (
                  <div className="line">{line}</div>
              ))}
            </a>
          ))}
        </div>
      </nav>
    );
  }
}
