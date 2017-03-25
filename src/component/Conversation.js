import React, { PropTypes, PureComponent } from 'react';
import color from '../assets/color';

import TextQuote from './Text/Quote';
import TextName from './Text/Name';
import TextNote from './Text/Note';

import anonPerson from '../assets/anonymous_person.png';
import anonPersonHorizontal from '../assets/anonymous_person_horizontal.png';
import dialogBoxTip from '../assets/dialog_box_tip.png';

const styles = {
  viewport: {
    position: 'relative',
    width: '100%',
    paddingBottom: '20rem', //360
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
    default: {
      border: `1px ${color.border} solid`,
      height: '9.333333rem', //168
      boxSizing: 'border-box',
      position: 'relative',
      backgroundImage: `url(${anonPerson})`,
      backgroundSize: '32px 52px',
      backgroundPosition: 'bottom right',
      backgroundRepeat: 'no-repeat',
    },
    alt: {
      backgroundImage: `url(${anonPersonHorizontal})`,
      backgroundSize: '52px 32px',
      backgroundPosition: 'top left',
    }
  },
  minister: {
    position: 'relative',
    height: '4.777778rem', //86
    marginTop: 40,
    marginLeft: 15,
    marginRight: 15,
    border: `4px ${color.label} solid`,
    padding: 10,
    textAlign: 'left',
    boxSizing: 'content-box',
  },
  quote: {
    default: {
      position: 'absolute',
      top: 0,
    },
    alt: {
      top: 'initial',
      bottom: 12,
    }
  },
  source: {
    default: {
      position: 'absolute',
      bottom: 10,
      right: 22,
    },
    alt: {
      top: 12,
      left: 16,
      right: 'initial',
    },
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
    alt: PropTypes.bool,
    anonymous: PropTypes.object.isRequired,
    team: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
    minister: PropTypes.object.isRequired,
  };

  static defaultProps = {
    right: false,
  };

  render() {
    const { alt, anonymous, alias, team, experience, minister } = this.props;

    return (
      <div style={styles.viewport} >
        <div style={styles.box}>
          <div style={{ ...styles.anonymous.default, ...(alt && styles.anonymous.alt) }}>
            <TextQuote line={anonymous.line} style={{ ...styles.quote.default, ...(alt && styles.quote.alt) }}>
              {anonymous.text}
            </TextQuote>
            <div style={{ ...styles.source.default, ...(alt && styles.source.alt) }}>
              <TextName>{`“${alias}”`}</TextName>
              <TextNote>{team}</TextNote>
              <TextNote>{experience}</TextNote>
            </div>
          </div>
          <div style={styles.minister}>
            <TextQuote line={minister.line} mark={false}>{minister.text}</TextQuote>
            <img style={styles.dialogBoxTip} src={dialogBoxTip} alt="Dialog box tip" />
          </div>
        </div>
      </div>
    );
  }
}
