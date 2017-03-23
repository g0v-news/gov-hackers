import React, { PropTypes, PureComponent } from 'react';
import Analytics from '../Analytics';
import More from './More';
import Label from './Label';
import color from '../assets/color';
import ArticleTitleText from './ArticleTitleText';


const styles = {
  viewport: {
    position: 'relative',
    width: '100%',
    paddingBottom: '100%',
    boxSizing: 'border-box',
    display: 'block',
    color: '#000',
  },
  box: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 1,
    border: `1px ${color.border}  solid`,
    boxSizing: 'border-box',
    padding: 10,
  },
  cover: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
  },
  title: {
    textAlign: 'left',
    width: '100%',
  },
  image: {
    border: 0,
    display: 'block',
  },
  more: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: 120,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default class extends PureComponent {

  static propTypes = {
    title: PropTypes.arrayOf(PropTypes.string).isRequired,
    cover: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    link: PropTypes.string,
  };

  static defaultProps = {
    link: '',
  }

  onClick = () => {
    const { region } = this.props;

    Analytics.event({
      category: 'component',
      action: 'click',
      label: `international_region_${region}`,
    });

    Analytics.event({
      category: 'link',
      action: 'click',
      label: `international_region_${region}`,
    });
  }

  render() {
    const { title, cover, link, region } = this.props;

    return (
      <a style={styles.viewport} href={link} target="gov-news" onClick={this.onClick}>
        <div style={styles.box}>
          {title.map(text => (
            <ArticleTitleText className="interview">{text}</ArticleTitleText>
          ))}
          <div style={styles.cover}>
            <img style={styles.image} src={cover} alt={region} />
          </div>
          <div style={styles.more}><More /></div>
          <Label right top>專訪</Label>
        </div>
      </a>
    );
  }
}
