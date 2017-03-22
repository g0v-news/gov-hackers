import React from 'react';
import Text from '../component/Text';
import { license } from '../assets/content';
import logo from '../assets/logo.png';
import external from '../assets/external_link.png';
import color from '../assets/color';

const { image, interview, publication, author } = license;

const styles = {
  viewport: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: `linear-gradient(${color.primaryAssist}, ${color.label})`,
  },
  title: {
    fontSize: 20,
    color: color.primary,
    marginTop: 80,
  },
  subtitle: {
    fontSize: 18,
    color: color.textAssist,
    marginTop: 40,
  },
  license: {
    fontSize: 16,
    textAlign: 'left',
    color: color.textAssist,
    paddingLeft: 20,
    paddingRight: 20,
  },
  group: {
    color: color.textAssist,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  image: {
    fontSize: 10,
    textAlign: 'left',
    border: 0,
    marginLeft: 20,
    marginRight: 20,
    maxWidth: 375,
    color: color.textAssist,
  },
  imageName: {
    width: 120,
    paddingTop: 5,
  },
  imageLicense: {
    paddingTop: 5,
  },
  imageLink: {
    width: 50,
    paddingTop: 5,
  },
  team: {
    fontSize: 18,
    textAlign: 'left',
    border: 0,
    marginLeft: 20,
    marginRight: 20,
    maxWidth: 375,
    color: color.primary,
  },
  teamWork: {
    textAlign: 'left',
    paddingTop: 10,
  },
  teamNickname: {
    paddingTop: 10,
  },
  teamName: {
    paddingTop: 10,
  },
  externalLink: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    maxWidth: 160,
    justifyContent: 'space-between',
    margin: '0 auto',
  },
  link: {
    fontSize: 16,
    color: color.primary,
    borderBottom: `1px ${color.primary} solid`,
    paddingBottom: 2,
  },
  logo: {
    width: 140,
    height: 120,
    marginTop: 80,
    marginBottom: 40,
  },
};

export default function () {
  return (
    <div style={styles.viewport}>
      <div style={styles.subtitle}>{license.subtitle}</div>
      <div style={styles.title}>{license.title}</div>
      <Text style={styles.group}>授權條款</Text>
      <div style={styles.license}>{license.license}.</div>
      <Text style={styles.group}>圖像授權</Text>
      <table style={styles.image}>
        <tbody>
          {image.map(item => (
            <tr key={item.name}>
              <td style={styles.imageName}>{item.name}</td>
              <td style={styles.imageLicense}>{item.license}</td>
              <td style={styles.imageLink}>
                <a href={item.link} target="license">
                  <img width="14" height="14" alt="link" src={external} />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Text style={styles.group}>採訪協力</Text>
      <div style={styles.externalLink}>
        {interview.map(item => (
          <a key={item.name} style={styles.link} href={item.link} target="external">{item.name}</a>
        ))}
      </div>
      <Text style={styles.group}>合作刊登</Text>
      <div style={styles.externalLink}>
        {publication.map(item => (
          <a key={item.name} style={styles.link} href={item.link} target="external">{item.name}</a>
        ))}
      </div>
      <Text style={styles.group}>團隊</Text>
      <table style={styles.team}>
        <tbody>
          {author.map(item => (
            <tr key={item.name}>
              <td style={styles.teamWork}>{item.work}</td>
              <td style={styles.teamNickname}>{`“${item.nickname}”`}</td>
              <td style={styles.teamName}>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <img style={styles.logo} src={logo} alt="g0v.news" />
    </div>
  );
}
