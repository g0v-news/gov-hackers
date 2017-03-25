import React, { PropTypes, PureComponent } from 'react';
import mark from '../../assets/quote_mark.png';
import fonts from '../../assets/fonts.js';

const styles = {
  viewport: {
    color: '#444444',
    fontSize: 18,
    lineHeight: 1.2222,
    textAlign: 'left',
    fontFamily: fonts.serif,
    boxSizing: 'content-box',
  },

  mark: {
    paddingTop: 12,
    paddingLeft: 16,
    backgroundSize: '22px 24px',
    backgroundImage: `url(${mark})`,
    backgroundRepeat: 'no-repeat',
  }
};

export default class extends PureComponent {
  static propTypes = {
    style: PropTypes.shape(),
    line: PropTypes.number,
    mark: PropTypes.bool,
    children: PropTypes.string.isRequired,
  }

  static defaultProps = {
    style: {},
    line: 8,
    mark: true,
  }

  render() {
    const { style, line, mark, children } = this.props;
    return (
      <div style={{ ...styles.viewport, ...({width: line + 'em'}), ...(mark && styles.mark), ...style }}>
        {children}
      </div>
    );
  }
};
