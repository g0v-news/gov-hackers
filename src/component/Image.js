import React, { PropTypes } from 'react';

const styles = {
  viewport: {
    width: '100%',
    maxWidth: 640,
    margin: '0 auto',
  },
};

function Component({ alt, ...props }) {
  return (<img style={styles.viewport} alt={alt} {...props} />);
}

Component.propTypes = {
  alt: PropTypes.string.isRequired,
};

export default Component;
