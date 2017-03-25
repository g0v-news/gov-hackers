import React, { PropTypes, PureComponent } from 'react';
import quote from '../assets/quote_mark.png';
import fonts from '../assets/fonts.js';

const styles = {
  viewport: {
    color: '#444444',
    fontSize: 18,
    lineHeight: 1.2222,
    textAlign: 'left',
    fontFamily: fonts.serif,
  },

  mark: {
    paddingTop: 12,
    paddingLeft: 16,
    backgroundSize: '22px 24px',
    backgroundImage: `url(${quote})`,
    backgroundRepeat: 'no-repeat',
  }
};

export default class extends PureComponent {
  static propTypes = {
    style: PropTypes.shape(),
    mark: PropTypes.bool,
    children: PropTypes.string.isRequired,
  }

  static defaultProps = {
    style: {},
    mark: true,
  }

  render() {
    const { style, mark, children } = this.props;
    return (
      <div style={{ ...styles.viewport, ...(mark && styles.mark), ...style }}>
        {children}
      </div>
    );
  }
};
/*
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

export default Component;*/
