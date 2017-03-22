import React, { PropTypes } from 'react';
import color from '../assets/color';

const styles = {
  viewport: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    margin: '0 auto',
    marginTop: 18,
    width: '100%',
    maxWidth: 320,
  },
  date: {
    width: 100,
    fontSize: 20,
    textAlign: 'left',
    color: color.textAssist,
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    textAlign: 'left',
    color: color.text,
  },
  text: {
    width: '12em',
    fontSize: 13,
    textAlign: 'left',
    color: color.textAssist,
    marginTop: 3,
    lineHeight: 1.5,
  },
};

function Component({ date, name, children }) {
  return (
    <div style={styles.viewport}>
      <div style={styles.date}>{date}</div>
      <div style={styles.content}>
        <div style={styles.name}>{name}</div>
        <div style={styles.text}>{children}</div>
      </div>
    </div>
  );
}

Component.propTypes = {
  date: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.string.isRequired,
};

Component.defaultProps = {
  date: '',
  name: '',
};

export default Component;
