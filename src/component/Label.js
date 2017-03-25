import React, { PropTypes, PureComponent } from 'react';
import color from '../assets/color';

const styles = {
  viewport: {
    default: {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'row',
      height: 26,
      boxSizing: 'border-box',
    },
    left: {
      left: 0,
    },
    right: {
      right: 0,
    },
    top: {
      top: 0,
    },
    bottom: {
      bottom: 0,
    },
  },
  triangle: {
  },
  text: {
    fontSize: 16,
    lineHeight: 26,
    color: color.white,
    backgroundColor: color.blue50,
    height: 26,
    paddingLeft: 12,
    paddingRight: 12,
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default class extends PureComponent {

  static propTypes = {
    style: PropTypes.shape(),
    textStyle: PropTypes.shape(),
    top: PropTypes.bool,
    left: PropTypes.bool,
    right: PropTypes.bool,
    children: PropTypes.string.isRequired,
  }

  static defaultProps = {
    style: {},
    textStyle: {},
    top: false,
    bottom: false,
    left: false,
    right: false,
  }

  triangle = {
    left: () => {
      var points = (this.props.top ? "0 0 18 0 0 26 0 0" : "0 0 18 26 0 26 0 0");
      return (
        <svg width="18px" height="26px" viewBox="0 0 18 26" style={styles.triangle}>
          <g fill={color.blue50} strokeWidth="0">
            <polygon points={points} />
          </g>
        </svg>
      );
    },

    right: () => {
      var points = (this.props.top ? "0 0 18 0 18 26 0 0" : "18 0 18 26 0 26 18 0");
      return (
        <svg width="18px" height="26px" viewBox="0 0 18 26" style={styles.triangle}>
          <g fill={color.blue50} strokeWidth="0">
            <polygon points={points} />
          </g>
        </svg>
      );
    }
  }

  render() {
    const { style, textStyle, top, bottom, left, right, children } = this.props;

    return (
      <div
        style={{
          ...styles.viewport.default,
          ...(left && styles.viewport.left),
          ...(right && styles.viewport.right),
          ...(top && styles.viewport.top),
          ...(bottom && styles.viewport.bottom),
          ...style,
        }}
      >
        {right && this.triangle.right()}
        <div style={{ ...styles.text, ...textStyle }}>
          {children}
        </div>
        {left && this.triangle.left()}
      </div>
    );
  }
}
