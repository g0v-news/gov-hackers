import React, { PropTypes, PureComponent } from 'react';
import Analytics from '../../Analytics';
import TextQuote from '../Text/Quote';
import TextName from '../Text/Name';
import TextNote from '../Text/Note';
import TextArticleTitle from '../Text/ArticleTitle';

import More from '../More';


const styles = {
  viewport: {
    position: 'relative',
    width: '100%',
    paddingBottom: 240,
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
    border: '1px #BFBFFF solid',
    boxSizing: 'border-box',
    padding: 7,
  },
  title: {
    marginLeft: 5,
    marginTop: 5,
  },
  more: {
    position: 'absolute',
    top: 6,
    right: 6,
  },
  avatar: {
    default: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: 180,
      height: 180,
      border: 0,
    },
    alt: {
      left: 'initial',
      right: 0,
    },
  },
  quote: {
    default: {
      position: 'absolute',
      top: 78,
      right: 12,
    },
    alt: {
      left: 4,
      right: 'initial',
    },
  },
  source: {
    default: {
      position: 'absolute',
      bottom: 8,
      right: 12,
    },
    alt: {
      left: 20,
      right: 'initial',
    }
  },
  sourceColumn: {
    display: 'inline-block',
    verticalAlign: 'top',
    marginRight: 8,
  },
};

export default class extends PureComponent {

  static propTypes = {
    alt: PropTypes.bool,
    title: PropTypes.arrayOf(PropTypes.string).isRequired,
    avatar: PropTypes.string.isRequired,
    quote: PropTypes.object.isRequired,
    job: PropTypes.arrayOf(PropTypes.string).isRequired,
    alias: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    link: PropTypes.string,
  };

  static defaultProps = {
    alt: false,
    line: 8,
    link: '',
  };

  onClick = () => {
    const { alias } = this.props;

    Analytics.event({
      category: 'component',
      action: 'click',
      label: `taiwan_people_${alias}`,
    });

    Analytics.event({
      category: 'link',
      action: 'click',
      label: `taiwan_people_${alias}`,
    });
  }

  render() {
    const { avatar, title, quote, job, alias, name, alt, link } = this.props;

    return (
      <a style={styles.viewport} href={link} target="gov-news" onClick={this.onClick}>
        <div style={styles.box}>
          <img
            style={{ ...styles.avatar.default, ...(alt && styles.avatar.alt) }}
            src={avatar}
            alt={alias}
          />
          {title.map(text => (<TextArticleTitle key={text}>{text}</TextArticleTitle>))}
          <div style={{ ...styles.quote.default, ...(alt && styles.quote.alt) }}>
            <TextQuote line={quote.line}>{quote.text}</TextQuote>
          </div>
          <div style={{ ...styles.source.default, ...(alt && styles.source.alt) }}>
            <div style={styles.sourceColumn}>
              {job.map(text => <TextNote key={text}>{text}</TextNote>)}
            </div>
            <div style={styles.sourceColumn}>
              <TextName>{`“${alias}”`}</TextName>
              <TextName>{name}</TextName>
            </div>
          </div>
          <More style={styles.more}>專訪</More>
        </div>
      </a>
    );
  }
}
