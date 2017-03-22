import React, { PropTypes } from 'react';

const styles = {
  viewport: {
    position: 'relative',
    padding: 4,
    boxSizing: 'border-box',
  },
};

function Component({ image }) {
  return (
    <div style={styles.viewport}>
      <div>
        <img src={image} alt="" />
      </div>
    </div>
  );
}

Component.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Component;
