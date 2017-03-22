import React, { PropTypes } from 'react';

const styles = {
  viewport: {
    fontSize: 18,
    textAlign: 'left',
    lineHeight: 1.6667,
    maxWidth: 288,
    margin: '0 auto 30px',
  },
};

function Component({ children, style, ...props }) {
  return (<div style={{ ...styles.viewport, ...style }} {...props}>{children}</div>);
}

Component.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.shape(),
};

Component.defaultProps = {
  style: {},
};

export default Component;
