import React, { PropTypes } from 'react';
import Text_Note from '../Text/Note';
import color from '../../assets/color';

const styles = {
  viewport: {
    display: 'flex',
    flexDirection: 'row',
    margin: '8px auto',
    width: '100%',
    maxWidth: 320,
  },
  date: {
    width: 72,
    fontSize: 18,
    textAlign: 'left',
    color: color.blue50,
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    textAlign: 'left',
  },
  text: {
    width: '12em',
    marginTop: 2,
    marginLeft: 40,
  },
};

function Component({ date, name, children }) {
  return (
    <div style={styles.viewport}>
      <div style={styles.date}>{date}</div>
      <div style={styles.content}>
        <div style={styles.name}>{name}</div>
        <Text_Note style={styles.text}>{children}</Text_Note>
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
