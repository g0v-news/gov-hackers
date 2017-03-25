import React, { PropTypes, PureComponent } from 'react';
import Analytics from '../../Analytics';
import More from '../More';
import Label from '../Label';
import TextQuote from '../Text/Quote';
import TextName from '../Text/Name';
import color from '../../assets/color';
import TextArticleTitle from '../Text/ArticleTitle';


const styles = {
  viewport: {
    position: 'relative',
    width: '100%',
    paddingBottom: '62.5%',
    boxSizing: 'border-box',
    display: 'block',
    color: '#000',
    textDecoration: 'none',
  },
  box: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 1,
    border: `1px ${color.border} solid`,
    boxSizing: 'border-box',
    padding: 10,
    paddingRight: 40,
  },
  avatar: {
    default: {
      position: 'absolute',
      width: 180,
      height: 180,
      bottom: 0,
      left: 0,
    },
    alt: {
      left: 'initial',
      right: 0,
    },
  },
  image: {
    width: '100%',
  },
  more: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  label: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  quote: {
    default: {
      position: 'absolute',
      top: 48,
      left: 106,
      width: '9em',
    },
    alt: {
      left: 0,
    },
  },
  source: {
    default: {
      color: color.textAssist,
      fontSize: 15,
      textAlign: 'left',
      lineHeight: 1.3,
      position: 'absolute',
      top: 102,
      left: 196,
    },
    alt: {
      left: 'initial',
      left: 80,
    },
  },
};

export default class extends PureComponent {

  static propTypes = {
    alt: PropTypes.bool,
    avatar: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    alias: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
    link: PropTypes.string,
  };

  static defaultProps = {
    alt: false,
    link: '',
  };

  onClick = () => {
    const { alias } = this.props;

    Analytics.event({
      category: 'component',
      action: 'click',
      label: `solution_people_${alias}`,
    });

    Analytics.event({
      category: 'link',
      action: 'click',
      label: `solution_people_${alias}`,
    });
  }

  render() {
    const { avatar, alt, title, quote, name, alias, team, link } = this.props;

    return (
      <a style={styles.viewport} href={link} target="gov-news" onClick={this.onClick}>
        <div style={styles.box}>
          <TextArticleTitle>{title}</TextArticleTitle>
          <TextQuote style={{ ...styles.quote.default, ...(alt && styles.quote.alt) }}>
            {quote}
          </TextQuote>
          <div style={{ ...styles.avatar.default, ...(alt && styles.avatar.alt) }}>
            <img style={styles.image} src={avatar} alt={name} />
          </div>
          <div style={{ ...styles.source.default, ...(alt && styles.source.alt) }}>
            <TextName>{`“${alias}”`}</TextName>
            <TextName>{name}</TextName>
            <div>{team}</div>
          </div>
          <More style={styles.more} />
          <Label right={!alt} left={alt} bottom>秘訣</Label>
        </div>
      </a>
    );
  }
}
