import React, { PropTypes, PureComponent } from 'react';
import color from '../assets/color';

const styles = {
  viewport: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    height: 26,
    boxSizing: 'border-box',
    bottom: 0,
  },
  viewportLeft: {
    left: 0,
  },
  viewportRight: {
    right: 0,
  },
  viewportTop: {
    top: 0,
    bottom: 'initial',
  },
  text: {
    color: '#FFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.label,
    height: 26,
    paddingLeft: 10,
    paddingRight: 10,
    border: `1px solid ${color.label}`,
    boxSizing: 'border-box',
  },
  left: {
    marginRight: -1,
  },
  right: {
    marginLeft: -1,
  },
};

export default class extends PureComponent {

  static propTypes = {
    style: PropTypes.shape(),
    top: PropTypes.bool,
    left: PropTypes.bool,
    right: PropTypes.bool,
    children: PropTypes.string.isRequired,
  }

  static defaultProps ={
    style: {},
    top: false,
    left: false,
    right: false,
  }

  renderLeft = () => {
    if (this.props.top) {
      return (
        <svg width="18px" height="26px" viewBox="0 0 18 26" style={styles.left}>
          <g fill={color.label} strokeWidth="0">
            <polygon points="0 0 17 0 17 26 0 0" />
          </g>
        </svg>
      );
    }

    return (
      <svg width="18px" height="26px" viewBox="0 0 18 26" style={styles.left}>
        <g fill={color.label} strokeWidth="0">
          <polygon points="17 0 18 0 18 26 0 26" />
        </g>
      </svg>
    );
  }

  renderRight = () => {
    if (this.props.top) {
      return (
        <svg width="18px" height="26px" viewBox="0 0 18 26" style={styles.right}>
          <g fill={color.label} strokeWidth="0">
            <polygon points="0 0 18 0 1 26 0 26" />
          </g>
        </svg>
      );
    }

    return (
      <svg width="18px" height="26px" viewBox="0 0 18 26" style={styles.right}>
        <g fill={color.label} strokeWidth="0">
          <polygon points="0 0 1 0 18 26 0 26" />
        </g>
      </svg>
    );
  }

  render() {
    const { style, top, left, right, children } = this.props;

    return (
      <div
        style={{
          ...styles.viewport,
          ...(left && styles.viewportLeft),
          ...(right && styles.viewportRight),
          ...(top && styles.viewportTop),
          ...style,
        }}
      >
        {right && this.renderLeft()}
        <div style={styles.text}>
          {children}
        </div>
        {left && this.renderRight()}
      </div>
    );
  }
}
