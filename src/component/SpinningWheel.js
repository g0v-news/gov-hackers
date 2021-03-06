import React from 'react';
import icon from '../assets/spinning_wheel.png';

const styles = {
  viewport: {
    width: '100%',
    height: 42,
    animation: 'loading 0.5s infinite linear',
  },
  icon: {
    width: 42,
    height: 42,
    display: 'inline',
  },
};

function Component() {
  return (
    <div style={styles.viewport} >
      <img style={styles.icon} src={icon} alt="" />
    </div>
  );
}

export default Component;
