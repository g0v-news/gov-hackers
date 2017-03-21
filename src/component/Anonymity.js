import React, { PropTypes } from 'react';
import Label from './Label';
import More from './More';

import hand from '../assets/hand.png';

const styles = {
  viewport: {
    position: 'relative',
    backgroundSize: 'cover',
    border: '1px #BFBFFF solid',
    height: 116,
    width: '100%',
    maxWidth: 375,
    boxSizing: 'border-box',
    margin: '0 auto',
    marginTop: 20,
  },
  text: {
    fontSize: 22,
    textAlign: 'left',
    paddingLeft: 45,
    paddingRight: 40,
    paddingTop: 10,
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

function Component({ quote, style }) {
  return (
    <div style={{ ...styles.viewport, ...style }}>
      <Label right>公務員匿名共筆</Label>
      {quote.map(text => (<div key={text} style={styles.text}>{text}</div>))}
      <div style={styles.iconWrap}>
        <img src={hand} style={styles.icon} alt="" />
      </div>
      <More style={styles.more} />
    </div>
  );
}

Component.propTypes = {
  quote: PropTypes.arrayOf(PropTypes.string),
  style: PropTypes.shape(),
};

Component.defaultProps = {
  quote: [],
  style: {},
};

export default Component;
