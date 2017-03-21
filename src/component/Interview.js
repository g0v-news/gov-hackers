import React, { PropTypes } from 'react';
import More from './More';
import Label from './Label';
import color from '../assets/color';

const styles = {
  viewport: {
    position: 'relative',
    width: '100%',
    paddingBottom: '90%',
    boxSizing: 'border-box',
  },
  box: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 1,
    border: `1px ${color.border}  solid`,
    boxSizing: 'border-box',
    padding: 7,
  },
  cover: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
  },
  title: {
    fontSize: 30,
    textAlign: 'left',
    padding: 20,
    paddingRight: 40,
    width: '100%',
  },
  image: {
    border: 0,
  },
  more: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: 120,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

function Component({ title, cover, region }) {
  return (
    <div style={styles.viewport}>
      <div style={styles.box}>
        <div style={styles.title}>{title.join('')}</div>
        <div style={styles.cover}>
          <img style={styles.image} src={cover} alt={region} />
        </div>
        <div style={styles.more}><More /></div>
        <Label right top>專訪</Label>
      </div>
    </div>
  );
}

Component.propTypes = {
  title: PropTypes.arrayOf(PropTypes.string).isRequired,
  cover: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
};

export default Component;
