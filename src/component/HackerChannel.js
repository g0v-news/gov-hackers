import React, { PropTypes, PureComponent } from 'react';
import Analytics from '../Analytics';
import More from './More';
import Label from './Label';
import BodyText from './BodyText';

const styles = {
  viewport: {
    position: 'relative',
    height: 58,
    width: '100%',
    maxWidth: 375,
    margin: '0 auto',
    marginTop: 20,
    display: 'block',
    color: '#000',
    textDecoration: 'none',
    textAlign: 'left',
  },
  label: {
    top: 'initial',
    bottom: 0,
  },
  labelText: {
    width: 200,
    paddingRight: 23,
    justifyContent: 'flex-end',
    fontSize: 16,
  },
  more: {
    position: 'absolute',
    right: 2,
    bottom: 4,
  },
  moreSvg: {
    width: 18,
    height: 18,
  },
};

export default class extends PureComponent {

  static propTypes = {
    quote: PropTypes.string.isRequired,
    tip: PropTypes.string.isRequired,
    link: PropTypes.string,
    name: PropTypes.string,
  };

  static defaultProps = {
    link: '',
    name: '',
  };

  onClick = () => {
    const { name } = this.props;

    Analytics.event({
      category: 'component',
      action: 'click',
      label: `hacker_${name}`,
    });

    Analytics.event({
      category: 'link',
      action: 'click',
      label: `hacker_${name}`,
    });
  }

  render() {
    const { quote, tip, link } = this.props;

    return (
      <a style={styles.viewport} href={link} target="gov-news" onClick={this.onClick}>
        <BodyText>{quote}</BodyText>
        <Label right top style={styles.label} textStyle={styles.labelText}>
          {tip}
        </Label>
        <More style={styles.more} svgStyle={styles.moreSvg} />
      </a>
    );
  }
}