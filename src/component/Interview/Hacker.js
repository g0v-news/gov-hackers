import React, { PropTypes, PureComponent } from 'react';
import Analytics from '../../Analytics';
import More from '../More';
import Label from '../Label';
import Quote from '../Quote';
import color from '../../assets/color';
import Article_TitleLine from '../Article/TitleLine';


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
    position: 'absolute',
    width: 180,
    height: 180,
    bottom: 0,
    left: 0,
  },
  avatarRight: {
    left: 'initial',
    right: 0,
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
    position: 'absolute',
    top: 70,
    left: 120,
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
    top: 130,
    left: 180,
  },
  workRight: {
    left: 'initial',
    right: 180,
  },
};

export default class extends PureComponent {

  static propTypes = {
    right: PropTypes.bool,
    avatar: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
    link: PropTypes.string,
  };

  static defaultProps = {
    right: false,
    link: '',
  };

  onClick = () => {
    const { nickname } = this.props;

    Analytics.event({
      category: 'component',
      action: 'click',
      label: `solution_people_${nickname}`,
    });

    Analytics.event({
      category: 'link',
      action: 'click',
      label: `solution_people_${nickname}`,
    });
  }

  render() {
    const { avatar, right, title, quote, name, nickname, team, link } = this.props;

    return (
      <a style={styles.viewport} href={link} target="gov-news" onClick={this.onClick}>
        <div style={styles.box}>
          <Article_TitleLine>{title}</Article_TitleLine>
          <Quote style={{ ...styles.quote, ...(right && styles.quoteRight) }}>
            {quote}
          </Quote>
          <div style={{ ...styles.avatar, ...(right && styles.avatarRight) }}>
            <img style={styles.image} src={avatar} alt={name} />
          </div>
          <div style={{ ...styles.work, ...(right && styles.workRight) }}>
            <div>{nickname}</div>
            <div>{name}</div>
            <div>{team}</div>
          </div>
          <More style={styles.more} />
          <Label right={!right} left={right}>秘訣</Label>
        </div>
      </a>
    );
  }
}
