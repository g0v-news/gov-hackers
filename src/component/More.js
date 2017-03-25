import React, { PropTypes } from 'react';
import go from '../assets/go.png';

const styles = {
  viewport: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#5959FF',
  },
  go: {
    width: 26,
    height: 26,
  },
  small: {
    width: 20,
    height: 20,
  }
};

function Component({ children, style, small }) {
  return (
    <div style={{ ...styles.viewport, ...style }}>
      <div style={styles.text}>{children}</div>
      <img src={go} style={{ ...styles.go, ...small ? styles.small : {} }} />
    </div>
  );
}

Component.propTypes = {
  children: PropTypes.string,
  style: PropTypes.shape(),
  small: PropTypes.bool,
};

Component.defaultProps = {
  children: null,
  style: {},
  small: false,
};

export default Component;
