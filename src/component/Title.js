import React, { PropTypes } from 'react';

const styles = {
  viewport: {
    fontSize: 36,
    textAlign: 'left',
    padding: 10,
    paddingLeft: 20,
  },
};

function Component({ children }) {
  return (<div style={styles.viewport}>{children}</div>);
}

Component.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Component;
