import React, { PropTypes, PureComponent } from 'react';
import color from '../assets/color';

const styles = {
  viewport: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    height: 26,
    boxSizing: 'border-box',
  },
  vpLeft: {
    left: 0,
  },
  vpRight: {
    right: 0,
  },
  vpTop: {
    top: 0,
  },
  vpBottom: {
    bottom: 0,
  },
  text: {
    fontSize: 16,
    lineHeight: 26,
    color: color.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.blue50,
    height: 26,
    paddingLeft: 12,
    paddingRight: 12,
    boxSizing: 'border-box',
  },
  left: {
    marginRight: 0,
  },
  right: {
    marginLeft: 0,
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

  static defaultProps ={
    style: {},
    textStyle: {},
    top: false,
    bottom: false,
    left: false,
    right: false,
  }

  renderLeft = () => {
    var points = (this.props.top ? "0 0 18 0 18 26 0 0" : "18 0 18 0 18 26 0 26");
    return (
      <svg width="18px" height="26px" viewBox="0 0 18 26" style={styles.left}>
        <g fill={color.blue50} strokeWidth="0">
          <polygon points={points} />
        </g>
      </svg>
    );
  }

  renderRight = () => {
    var points = (this.props.top ? "0 0 18 0 0 26 0 26" : "0 0 0 0 18 26 0 26");
    return (
      <svg width="18px" height="26px" viewBox="0 0 18 26" style={styles.right}>
        <g fill={color.blue50} strokeWidth="0">
          <polygon points={points} />
        </g>
      </svg>
    );
  }

  render() {
    const { style, textStyle, top, bottom, left, right, children } = this.props;

    return (
      <div
        style={{
          ...styles.viewport,
          ...(left && styles.vpLeft),
          ...(right && styles.vpRight),
          ...(top && styles.vpTop),
          ...(bottom && styles.vpBottom),
          ...style,
        }}
      >
        {right && this.renderLeft()}
        <div style={{ ...styles.text, ...textStyle }}>
          {children}
        </div>
        {left && this.renderRight()}
      </div>
    );
  }
}
