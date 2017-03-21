import React, { PropTypes } from 'react';
import More from './More';
import Label from './Label';
import Quote from './Quote';
import color from '../assets/color';

const styles = {
  viewport: {
    position: 'relative',
    width: '100%',
    paddingBottom: '62.5%',
    boxSizing: 'border-box',
  },
  box: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 1,
    border: `1px ${color.border} solid`,
    boxSizing: 'border-box',
    padding: 10,
    paddingRight: 40,
  },
  avatar: {
    position: 'absolute',
    width: 180,
    height: 180,
    bottom: 0,
    left: 0,
  },
  avatarRight: {
    left: 'initial',
    right: 0,
  },
  image: {
    width: '100%',
  },
  more: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  label: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  title: {
    fontSize: 28,
    textAlign: 'left',
  },
  quote: {
    position: 'absolute',
    top: 70,
    left: 120,
    right: 40,
  },
  quoteRight: {
    left: 20,
    right: 140,
  },
  work: {
    color: color.textAssist,
    fontSize: 15,
    textAlign: 'left',
    lineHeight: 1.3,
    position: 'absolute',
    top: 130,
    left: 180,
  },
  workRight: {
    left: 'initial',
    right: 180,
  },
};

function Component({ avatar, right, title, quote, name, nickname, team }) {
  return (
    <div style={styles.viewport} >
      <div style={styles.box}>
        <div style={styles.title}>{title}</div>
        <Quote style={{ ...styles.quote, ...(right && styles.quoteRight) }}>
          {quote}
        </Quote>
        <div style={{ ...styles.avatar, ...(right && styles.avatarRight) }}>
          <img style={styles.image} src={avatar} alt={name} />
        </div>
        <div style={{ ...styles.work, ...(right && styles.workRight) }}>
          <div>{nickname}</div>
          <div>{name}</div>
          <div>{team}</div>
        </div>
        <More style={styles.more} />
        <Label right={!right} left={right}>秘訣</Label>
      </div>
    </div>
  );
}

Component.propTypes = {
  right: PropTypes.bool,
  avatar: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
};

Component.defaultProps = {
  right: false,
};

export default Component;
