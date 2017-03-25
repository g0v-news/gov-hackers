import React from 'react';
import TextBody from '../component/Text/Body';
import TextLight from '../component/Text/Light';
import TextSmall from '../component/Text/Small';
import TextTiny from '../component/Text/Tiny';

import { license } from '../assets/content';
import logo from '../assets/logo.png';
import external from '../assets/external_link.png';
import github from '../assets/github.png';
import color from '../assets/color';

const { image, partner, publisher, team } = license;

const styles = {
  viewport: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: `linear-gradient(${color.blue0}, ${color.blue65})`,
    marginBottom: 0,
  },
  title: {
    fontSize: 20,
    color: color.primary,
    margin: 0,
  },
  subtitle: {
    margin: '5.555555rem 0',
    color: color.blue65,
    textAlign: 'center',
  },
  license: {
    fontSize: 16,
    lineHeight: 1.375,
    color: color.textAssist,
  },
  image: {
    table: {
      maxWidth: 320,
    },
    column: {
      padding: '0 0.444444rem',
    },
    column14: {
      width: 14,
    }

  },
  team: {
    table: {
      maxWidth: 320,
      color: color.blue65,
    },
    column: {
      padding: '0 0.444444rem',
    },
  },

  noMargin: {
    margin: 0,
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
    borderBottom: `2px ${color.primary} solid`,
    paddingBottom: 2,
    textDecoration: 'none',
  },
  logo: {
    width: 140,
    height: 120,
    marginTop: 64,
    marginBottom: 48,
  },
  github: {
    margin: '1.7778em 0'
  },
  octocat: {
    width: 32,
    height: 32,
    fill: 'white',
    opacity: 0.65,
  },
};

export default function () {
  return (
    <section style={styles.viewport}>
      <a name="license" />
      <TextBody style={styles.subtitle}>{license.subtitle}</TextBody>
      <div style={styles.title}>{license.title}</div>
      <TextLight>授權條款</TextLight>
      <TextBody style={styles.license}>{license.license}</TextBody>
      <TextLight>圖像授權</TextLight>
      <table style={styles.image.table}>
        <tbody>
          {image.map(item => (
            <tr key={item.name}>
              <td style={styles.image.column}><TextTiny>{item.name}</TextTiny></td>
              <td style={styles.image.column}><TextTiny>{item.license}</TextTiny></td>
              <td style={{ ...styles.image.column, ...styles.image.column14}}>
                {item.link != null &&
                  <a href={item.link} target="license"><img width="14" height="14" alt="link" src={external} /></a>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <TextLight>採訪協力</TextLight>
      <div style={styles.externalLink}>
        {partner.map(item => (
          <a key={item.name} style={styles.link} href={item.link} target="external">{item.name}</a>
        ))}
      </div>
      <TextLight>合作刊登</TextLight>
      <div style={styles.externalLink}>
        {publisher.map(item => (
          <a key={item.name} style={styles.link} href={item.link} target="external">{item.name}</a>
        ))}
      </div>
      <TextLight>團隊</TextLight>
      <table style={styles.team.table}>
        <tbody>
          {team.map(item => (
            <tr key={item.name}>
              <td style={styles.team.column}><TextSmall>{item.work}</TextSmall></td>
              <td style={styles.team.column}><TextBody style={styles.noMargin}>{`“${item.alias}”`}</TextBody></td>
              <td style={styles.team.column}><TextBody style={styles.noMargin}>{item.name}</TextBody></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={styles.github}>
        <a href="https://github.com/g0v-news/gov-hackers" target="github">
          <svg aria-hidden="true" style={styles.octocat} class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
        </a>
      </div>
      <img style={styles.logo} src={logo} alt="g0v.news" />
    </section>
  );
}
