import React, { Component } from 'react';
import ExecutionEnvironment from 'exenv';
import Text from '../component/Text';
import color from '../assets/color';
import { enter } from '../assets/content';

import title from '../assets/title.png';
import error from '../assets/error.jpg';

const { subtitle } = enter;

const styles = {
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
    backgroundImage: 'linear-gradient(rgba(4,0,0,0.75) 5%, #040000 100%)',
    height: 1680,
    position: 'relative',
  },
  title: {
    paddingTop: 40,
    paddingBottom: 40,
  },
  text: {
    color: '#FFFFFF',
    backgroundColor: '#131010',
    paddingBottom: 40,
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
    this.setState({ offset: e.target.body.scrollTop });
  }

  render() {
    const { offset } = this.state;

    const top = offset > 800 ? 800 : offset;

    return (
      <div style={{ ...styles.viewport, paddingTop: top }}>
        <div style={styles.background}>
          <div style={styles.enter}>
            <div style={styles.header}>
              <div style={styles.title}>
                <img src={title} alt="黑客公務員的血汗之路" />
              </div>
              <Text>;</Text>
              {subtitle.map(text => (<Text key={text} style={styles.text}>{text}</Text>))}
            </div>
          </div>
        </div>
        <div style={styles.padding} />
        <div style={{ ...styles.error, ...{ top: (top / 800) * 1000 } }}>
          <div
            style={{
              ...styles.errorImage,
              ...{ maxWidth: 2400 - ((top / 800) * 2400), maxHeight: 1350 - ((top / 800) * 1350) },
            }}
          />
        </div>
      </div>
    );
  }
}
