import React, { PropTypes, PureComponent } from 'react';
import Quote from './Quote';
import color from '../assets/color';
import TextNote from './Text/Note';

import anonymousPerson from '../assets/anonymous_person.png';
import dialogBoxTip from '../assets/dialog_box_tip.png';

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
  anonymous: {
    border: `1px ${color.border} solid`,
    height: '50%',
    boxSizing: 'border-box',
    position: 'relative',
    backgroundImage: `url(${anonymousPerson})`,
    backgroundPosition: 'bottom right',
    backgroundSize: '32px 52px',
    backgroundRepeat: 'no-repeat',
  },
  minister: {
    position: 'relative',
    height: '40%',
    marginTop: 40,
    marginLeft: 15,
    marginRight: 15,
    border: `4px ${color.label} solid`,
    padding: 10,
    textAlign: 'left',
    boxSizing: 'border-box',
  },
  quote: {
    width: '10em',
  },
  quoteRight: {
    left: 20,
    right: 140,
  },
  source: {
    position: 'absolute',
    bottom: 10,
    right: 22,
  },
  sourceRight: {
    left: 'initial',
    right: 180,
  },
  ministerQuote: {
    width: '12em',
  },
  dialogBoxTip: {
    position: 'absolute',
    bottom: -30,
    left: '40%',
    width: 40,
    height: 40,
    border: 0,
  },
};

export default class extends PureComponent {

  static propTypes = {
    right: PropTypes.bool,
    anonymous: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
    minister: PropTypes.string.isRequired,
  };

  static defaultProps = {
    right: false,
  };

  render() {
    const { right, anonymous, alias, team, experience, minister } = this.props;

    return (
      <div style={styles.viewport} >
        <div style={styles.box}>
          <div style={styles.anonymous}>
            <Quote style={{ ...styles.quote, ...(right && styles.quoteRight) }}>
              {anonymous}
            </Quote>
            <div style={{ ...styles.source, ...(right && styles.sourceRight) }}>
              <TextNote>{alias}</TextNote>
              <TextNote>{team}</TextNote>
              <TextNote>{experience}</TextNote>
            </div>
          </div>
          <div style={styles.minister}>
            <Quote mark={false} style={styles.ministerQuote}>{minister}</Quote>
            <img style={styles.dialogBoxTip} src={dialogBoxTip} alt="Dialog box tip" />
          </div>
        </div>
      </div>
    );
  }
}
