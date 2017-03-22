import React, { PropTypes } from 'react';

const styles = {
  viewport: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#5959FF',
  },
  svg: {
    width: 32,
    height: 32,
  },
};

function Component({ children, style, svgStyle }) {
  return (
    <div style={{ ...styles.viewport, ...style }}>
      <div style={styles.text}>{children}</div>
      <div style={{ ...styles.svg, ...svgStyle }}>
        <svg width="100%" height="100%" viewBox="0 0 32 32">
          <g fill="#0000FF">
            <path d="M9.58578644,6.41421356 L20.5857864,17.4142136 C21.366835,18.1952621 22.633165,18.1952621 23.4142136,17.4142136 C24.1952621,16.633165 24.1952621,15.366835 23.4142136,14.5857864 L12.4142136,3.58578644 C11.633165,2.80473785 10.366835,2.80473785 9.58578644,3.58578644 C8.80473785,4.36683502 8.80473785,5.63316498 9.58578644,6.41421356 Z" />
            <path d="M12.4142136,28.4142136 L23.4142136,17.4142136 C24.1952621,16.633165 24.1952621,15.366835 23.4142136,14.5857864 C22.633165,13.8047379 21.366835,13.8047379 20.5857864,14.5857864 L9.58578644,25.5857864 C8.80473785,26.366835 8.80473785,27.633165 9.58578644,28.4142136 C10.366835,29.1952621 11.633165,29.1952621 12.4142136,28.4142136 Z" opacity="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

Component.propTypes = {
  children: PropTypes.string,
  style: PropTypes.shape(),
  svgStyle: PropTypes.shape(),
};

Component.defaultProps = {
  children: null,
  style: {},
  svgStyle: {},
};

export default Component;
