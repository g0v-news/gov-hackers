import React, { PropTypes } from 'react';
import color from '../assets/color';
import Quote from './Quote';
import More from './More';

const styles = {
  viewport: {
    position: 'relative',
    width: '100%',
    paddingBottom: '73.33%',
    boxSizing: 'border-box',
  },
  box: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 1,
    border: '1px #BFBFFF solid',
    boxSizing: 'border-box',
    padding: 7,
  },
  avatar: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: 180,
    height: 180,
    border: 0,
  },
  avatarRight: {
    left: 'initial',
    right: 0,
  },
  quote: {
    position: 'absolute',
    top: 78,
    right: 10,
    left: 120,
  },
  quoteRight: {
    left: 10,
    right: 120,
  },
  title: {
    fontSize: 28,
    textAlign: 'left',
    marginLeft: 5,
    marginTop: 5,
  },
  more: {
    position: 'absolute',
    top: 6,
    right: 6,
  },
  team: {
    fontSize: 14,
    color: color.textAssist,
    position: 'absolute',
    bottom: 10,
    right: 80,
    textAlign: 'left',
    lineHeight: 1.4,
  },
  teamRight: {
    right: 'initial',
    left: 80,
  },
  name: {
    fontSize: 16,
    color: color.textAssist,
    position: 'absolute',
    bottom: 10,
    right: 10,
    textAlign: 'left',
    lineHeight: 1.4,
  },
  nameRight: {
    right: 'initial',
    left: 10,
  },
};

function Component({ avatar, title, quote, team, work, nickname, name, right }) {
  return (
    <div style={styles.viewport}>
      <div style={styles.box}>
        <img
          style={{ ...styles.avatar, ...(right && styles.avatarRight) }}
          src={avatar}
          alt={nickname}
        />
        {title.map(text => (<div key={text} style={styles.title}>{text}</div>))}
        <div style={{ ...styles.quote, ...(right && styles.quoteRight) }}>
          <Quote>{quote}</Quote>
        </div>
        <div style={{ ...styles.team, ...(right && styles.teamRight) }}>
          <div>{team}</div>
          <div>{work}</div>
        </div>
        <div style={{ ...styles.name, ...(right && styles.nameRight) }}>
          <div>{`“${nickname}”`}</div>
          <div>{name}</div>
        </div>
        <More style={styles.more}>專訪</More>
      </div>
    </div>
  );
}

Component.propTypes = {
  right: PropTypes.bool,
  title: PropTypes.arrayOf(PropTypes.string).isRequired,
  avatar: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  work: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

Component.defaultProps = {
  right: false,
};

export default Component;
