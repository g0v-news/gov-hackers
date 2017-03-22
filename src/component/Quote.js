import React, { PropTypes } from 'react';
import quote from '../assets/quote_mark.png';
import fonts from '../assets/fonts.js';

const styles = {
  viewport: {
    paddingTop: 10,
    paddingLeft: 20,
    backgroundSize: '22px 24px',
    backgroundImage: `url(${quote})`,
    backgroundRepeat: 'no-repeat',
    textAlign: 'left',
    color: '#444444',
    fontSize: 18,
    lineHeight: 1.2222,
    fontFamily: fonts.serif,
  },
};

function Component({ children, style }) {
  return (
    <div style={{ ...styles.viewport, ...style }}>
      {children}
    </div>
  );
}

Component.propTypes = {
  style: PropTypes.shape(),
  children: PropTypes.string.isRequired,
};

Component.defaultProps = {
  style: {},
};

export default Component;
