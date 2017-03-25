import React, { PropTypes } from 'react';
import color from '../../assets/color';

const styles = {
  viewport: {
    fontSize: 18,
    fontWeight: 'bold',
    color: color.blue50,
    textAlign: 'center',
    lineHeight: 1.6667,
    maxWidth: 288,
    margin: '1.7778em auto 0.4444em',
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
