import React, { PropTypes } from 'react';

const styles = {
  viewport: {
    width: '100%',
    margin: '0 auto',
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    margin: '0 auto',
    paddingBottom: '56.45%',
  },
};

function Component({ alt, src, style, ...props }) {
  return (
    <div style={styles.viewport}>
      <div style={{ ...styles.image, ...style, ...{ backgroundImage: `url(${src})` } }} {...props} />
    </div>
  );
}

Component.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string,
  style: PropTypes.shape(),
};

Component.defaultProps = {
  src: '',
  style: {},
};

export default Component;
