import React, { PropTypes, PureComponent } from 'react';
import Analytics from '../Analytics';
import More from './More';
import Label from './Label';
import TextBody from './Text/Body';

const styles = {
  viewport: {
    position: 'relative',
    width: '100%',
    maxWidth: 320,
    height: 56,
    margin: '1rem auto',
    overflow: 'hidden',
  },
  link: {
    position: 'absolute',
    display: 'block',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,
  },
  label: {
    top: 'initial',
    bottom: 0,
  },
  labelText: {
    width: 200,
    paddingRight: 23,
    fontSize: 16,
  },
  more: {
    position: 'absolute',
    right: 2,
    bottom: 3,
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
      <div style={styles.viewport}>
        <TextBody>{quote}</TextBody>
        <Label right top style={styles.label} textStyle={styles.labelText}>
          {tip}
        </Label>
        <More style={styles.more} small />
        <a style={styles.link} href={link} target="gov-news" onClick={this.onClick}>　</a>
      </div>
    );
  }
}
