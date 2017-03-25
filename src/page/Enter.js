import React, { Component } from 'react';
import ExecutionEnvironment from 'exenv';
import color from '../assets/color';
import { enter } from '../assets/content';
import Analytics from '../Analytics';

import title from '../assets/title.png';
import hackerMonitor from '../assets/hacker_monitor.png';
import hackerTable from '../assets/hacker_table.png';
import hackerSilhouette from '../assets/hacker_silhouette.png';
import error from '../assets/error.jpg';

const { subtitle } = enter;

const styles = {
  box: {
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
  },
  error: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  errorImage: {
    margin: '0 auto',
    width: '100%',
    height: '100%',
    minWidth: 216,
    minHeight: 121,
    backgroundImage: `url(${error})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  },
  background: {
    backgroundImage: 'linear-gradient(rgba(4,0,0,0.75) 0%, #040000 100%)',
    height: 1680,
    position: 'relative',
  },
  title: {
    width: '100%',
    marginTop: 40,
    marginBottom: 40,
  },
  enterTip: {
    position: 'absolute',
    left: '50%',
    bottom: 30,
    marginLeft: -17.5,
    width: 30,
  },
  hackerMonitor: {
    position: 'absolute',
    left: '50%',
    top: 994,
    marginLeft: -113,
    width: 226,
  },
  hackerTable: {
    position: 'absolute',
    left: '50%',
    top: 1170,
    marginLeft: -240,
    width: 480,
  },
  hackerSilhouette: {
    position: 'absolute',
    left: '50%',
    top: 1170,
    marginLeft: -127.5,
    width: 255,
    opacity: 0,
  },
  text: {
    color: '#FFFFFF',
    backgroundColor: '#131010',
    padding: '32px 5px 0',
    fontSize: 22,
    lineHeight: 1.4545,
    maxWidth: 286,
    margin: '0 auto',
    textAlign: 'left',
  },
  enter: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -100,
  },
  header: {
    width: '100%',
    maxWidth: 320,
    margin: '0 auto',
  },
  padding: {
    height: 200,
    backgroundImage: `linear-gradient(${color.backgroundAssist}, ${color.primaryAssist})`,
  },
};

export default class extends Component {

  state = {
    offset: 0,
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
    if (scrollTop < 1600) {
      this.setState({ offset: scrollTop });
    }
  }

  onWarningClick = () => Analytics.event({
    category: 'component',
    action: 'click',
    label: 'enter_warning',
  });

  onTitleClick = () => Analytics.event({
    category: 'component',
    action: 'click',
    label: 'enter_title',
  });

  onSubtitleClick = () => Analytics.event({
    category: 'component',
    action: 'click',
    label: 'enter_subtitle',
  });

  render() {
    const { offset } = this.state;

    const silhouetteValue = ((offset - 400) / 800) > 1 ? 1 : ((offset - 400) / 800);
    const silhouette = {
      opacity: offset < 400 ? 0 : silhouetteValue,
      top: offset < 400 ? 1270 : 1270 - (100 * silhouetteValue),
    };

    const errorValue = (offset / 800) > 1 ? 1 : (offset / 800);

    const enterTip = { opacity: offset > 100 ? 0 : 1 - (offset / 100) };

    return (
      <section style={styles.viewport}>
        <div style={styles.box}>
          <div style={{ paddingTop: 800 * errorValue }}>
            <div style={styles.background}>
              <div style={styles.enter}>
                <div style={styles.header}>
                  <img style={styles.title} src={title} alt="黑客公務員的血汗之路" onClick={this.onTitleClick} />
                  {subtitle.map(text => (
                    <div key={text} style={styles.text} onClick={this.onSubtitleClick}>
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={styles.padding} />
          </div>
          <img style={styles.hackerMonitor} src={hackerMonitor} alt="Hacker’s monitor" />
          <img style={styles.hackerTable} src={hackerTable} alt="Hacker’s table" />
          <img
            style={{ ...styles.hackerSilhouette, ...silhouette }}
            src={hackerSilhouette}
            alt="Hacker’s silhouette"
          />
        </div>
        <div style={{ ...styles.error, ...{ top: 1000 * errorValue } }}>
          <div
            style={{
              ...styles.errorImage,
              ...{
                maxWidth: 216 + ((1 - errorValue) * 2592),
                maxHeight: 121 + ((1 - errorValue) * 1452),
              },
            }}
            onClick={this.onWarningClick}
          />
        </div>
        <div style={{ ...styles.enterTip, ...enterTip }}>
          <div className="mouse" />
          <div className="arrow-scroll">
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>
    );
  }
}
