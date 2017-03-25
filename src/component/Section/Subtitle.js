import React, { PropTypes } from 'react';

const styles = {
  viewport: {
    fontSize: 24,
    fontWeight: 'normal',
    textAlign: 'left',
    lineHeight: 1.3333,
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
