import React, { PropTypes } from 'react';

const styles = {
  viewport: {
    fontSize: 36,
    textAlign: 'left',
    padding: 5,
    paddingLeft: 20,
  },
};

function Component({ style, children }) {
  return (<div style={{ ...styles.viewport, ...style }}>{children}</div>);
}

Component.propTypes = {
  style: PropTypes.shape(),
  children: PropTypes.string.isRequired,
};

Component.defaultProps = {
  style: {},
};

export default Component;
