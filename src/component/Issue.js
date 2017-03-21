import React, { PropTypes } from 'react';
import Quote from './Quote';
import color from '../assets/color';
import issueSolution from '../assets/issue_solution.png';

const styles = {
  viewport: {
    position: 'relative',
    width: '100%',
    paddingBottom: '112%',
    boxSizing: 'border-box',
  },
  box: {
    position: 'absolute',
    top: 0,
    bottom: 20,
    left: 1,
    right: 1,
    boxSizing: 'border-box',
  },
  issue: {
    border: `1px ${color.border} solid`,
    height: '50%',
    boxSizing: 'border-box',
    position: 'relative',
  },
  solution: {
    position: 'relative',
    height: '40%',
    fontSize: 18,
    marginTop: 40,
    marginLeft: 15,
    marginRight: 15,
    border: `4px ${color.label} solid`,
    padding: 10,
    textAlign: 'left',
    boxSizing: 'border-box',
  },
  title: {
    fontSize: 28,
    textAlign: 'left',
  },
  quote: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 40,
  },
  quoteRight: {
    left: 20,
    right: 140,
  },
  work: {
    color: color.textAssist,
    fontSize: 15,
    textAlign: 'left',
    lineHeight: 1.3,
    position: 'absolute',
    bottom: 20,
    right: 40,
  },
  workRight: {
    left: 'initial',
    right: 180,
  },
  solutionTip: {
    position: 'absolute',
    bottom: -30,
    left: '40%',
    width: 40,
    height: 40,
    border: 0,
  },
};

function Component({ right, quote, team, experience, solution }) {
  return (
    <div style={styles.viewport} >
      <div style={styles.box}>
        <div style={styles.issue}>
          <Quote style={{ ...styles.quote, ...(right && styles.quoteRight) }}>
            {quote}
          </Quote>
          <div style={{ ...styles.work, ...(right && styles.workRight) }}>
            <div>{team}</div>
            <div>{experience}</div>
          </div>
        </div>
        <div style={styles.solution}>
          {solution}
          <img style={styles.solutionTip} src={issueSolution} alt="" />
        </div>
      </div>
    </div>
  );
}

Component.propTypes = {
  right: PropTypes.bool,
  quote: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
  solution: PropTypes.string.isRequired,
};

Component.defaultProps = {
  right: false,
};

export default Component;
