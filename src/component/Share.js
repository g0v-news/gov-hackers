import React, { PropTypes } from 'react';

const styles = {
  viewport: {
    position: 'relative',
    width: '100%',
    boxSizing: 'border-box',
  },
};

function Component({ image }) {
  return (
    <div style={styles.viewport}>
      <img src={image} alt="" />
    </div>
  );
}

Component.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Component;
