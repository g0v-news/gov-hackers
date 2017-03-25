import React, { PropTypes } from 'react';
import color from '../../assets/color.js';

const styles = {
  viewport: {
    fontSize: 15,
    textAlign: 'left',
    lineHeight: 1.333333,
    color: color.blue65,
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
