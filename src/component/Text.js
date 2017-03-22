import React, { PropTypes } from 'react';

const styles = {
  viewport: {
    fontSize: 22,
    textAlign: 'left',
    paddingLeft: 17,
    paddingRight: 17,
    lineHeight: 1.45,
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
