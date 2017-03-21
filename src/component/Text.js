import React, { PropTypes } from 'react';

const styles = {
  viewport: {
    fontSize: 22,
    textAlign: 'justify',
    paddingLeft: 20,
    paddingRight: 20,
    lineHeight: 1.2,
  },
};

function Component({ children, style }) {
  return (<div style={{ ...styles.viewport, ...style }}>{children}</div>);
}

Component.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.shape(),
};

Component.defaultProps = {
  style: {},
};

export default Component;
