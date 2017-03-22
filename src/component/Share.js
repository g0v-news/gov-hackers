import React, { PropTypes, PureComponent } from 'react';
import More from './More';
import Label from './Label';

const styles = {
  viewport: {
    position: 'relative',
    padding: 4,
    paddingBottom: 26,
    boxSizing: 'border-box',
    display: 'block',
    color: '#000',
    textDecoration: 'none',
  },
  label: {
    top: 'initial',
    right: 4,
    bottom: 0,
  },
  labelText: {
    width: 100,
    paddingRight: 23,
    justifyContent: 'flex-end',
  },
  more: {
    position: 'absolute',
    right: 4,
    bottom: 4,
  },
  moreSvg: {
    width: 18,
    height: 18,
  },
};

export default class extends PureComponent{

  static propTypes = {
    image: PropTypes.string.isRequired,
    link: PropTypes.string,
  };

  static defaultProps ={
    link: '',
  }

  render() {
    const { image, link } = this.props;

    return (
      <div style={styles.viewport}>
        <div>
          <img src={image} alt="" />
        </div>
        <a href={link} target="gov-news" onClick={this.onClick}>
          <Label right top style={styles.label} textStyle={styles.labelText}>
            分享
          </Label>
          <More style={styles.more} svgStyle={styles.moreSvg} />
        </a>
      </div>
    );
  }
}
