import React, { PropTypes } from 'react';
import SpinningWheel from './SpinningWheel';
import background from '../assets/window.jpg';

const styles = {
  viewport: {
    position: 'relative',
    width: '100%',
    height: 299,
    maxWidth: 326,
    backgroundImage: `url(${background})`,
    backgroundSize: '320px 300px',
    backgroundPosition: 'center center',
    margin: '0 auto',
    boxSizing: 'border-box',
    padding: 64,
    paddingTop: 60,
    paddingBottom: 90,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  spinningWheel: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 55,
  },
};

function Component({ children, style }) {
  return (
    <div style={{ ...styles.viewport, ...style }}>
      {children}
      <div style={styles.spinningWheel}>
        <SpinningWheel />
      </div>
    </div>
  );
}

Component.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.shape(),
};

Component.defaultProps = {
  style: {},
};

export default Component;
