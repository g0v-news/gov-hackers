import React, { PropTypes } from 'react';

const styles = {
  viewport: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'left',
    lineHeight: 1,
    margin: '4px 0',
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
