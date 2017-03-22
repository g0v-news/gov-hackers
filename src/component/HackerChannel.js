import React, { PropTypes, PureComponent } from 'react';
import Analytics from '../Analytics';
import More from './More';
import Label from './Label';

const styles = {
  viewport: {
    position: 'relative',
    height: 50,
    width: '100%',
    maxWidth: 375,
    margin: '0 auto',
    marginTop: 20,
  },
  label: {
    top: 'initial',
    bottom: 0,
  },
  labelText: {
    width: 200,
    paddingRight: 23,
    justifyContent: 'flex-end',
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
      <div style={styles.viewport} href={link} target="gov-news" onClick={this.onClick}>
        {quote}
        <Label right top style={styles.label} textStyle={styles.labelText}>
          {tip}
        </Label>
        <More style={styles.more} svgStyle={styles.moreSvg} />
      </div>
    );
  }
}
