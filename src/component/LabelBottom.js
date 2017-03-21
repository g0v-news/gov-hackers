import React from 'react';

const styles = {
  viewport: {
    position: 'relative',
    width: 94,
    height: 26,
  },
  text: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    color: '#FFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 20,
  },
};

export default function ({ style, children }) {
  return (
    <div style={{ ...styles.viewport, ...style }}>
      <svg width="94px" height="26px" viewBox="0 0 94 26">
        <g fill="#0000FF" opacity="0.5">
          <polygon points="0 0 76 0 94 26 0 26" />
        </g>
      </svg>
      <div style={styles.text}>
        {children}
      </div>
    </div>
  );
}
