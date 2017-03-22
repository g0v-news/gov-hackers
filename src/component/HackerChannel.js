import React, { PropTypes } from 'react';
import More from './More';
import Label from './Label';

const styles = {
  viewport: {
    position: 'relative',
    height: 50,
    width: '100%',
    maxWidth: 375,
    margin: '0 auto',
    marginTop: 20,
  },
  label: {
    top: 'initial',
    bottom: 0,
  },
  labelText: {
    width: 200,
    paddingRight: 23,
    justifyContent: 'flex-end',
  },
  more: {
    position: 'absolute',
    right: 2,
    bottom: 4,
  },
  moreSvg: {
    width: 18,
    height: 18,
  },
};

function Component({ quote, tip }) {
  return (
    <div style={styles.viewport}>
      {quote}
      <Label right top style={styles.label} textStyle={styles.labelText}>
        {tip}
      </Label>
      <More style={styles.more} svgStyle={styles.moreSvg} />
    </div>
  );
}

Component.propTypes = {
  quote: PropTypes.string.isRequired,
  tip: PropTypes.string.isRequired,
};

Component.defaultProps = {
};

export default Component;
