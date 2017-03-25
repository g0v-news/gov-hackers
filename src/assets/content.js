import peggy from './people/peggy.png';
import kiang from './people/kiang.png';
import saul from './people/saul.png';
import tonyq from './people/tonyq.png';
import au from './people/au.png';
import cl from './people/cl.png';
import yutin from './people/yutin.png';
import japan from './interview/japan.jpg';
import australia from './interview/australia.jpg';
import pakistan from './interview/pakistan.jpg';
import mexico from './interview/mexico.jpg';
import share1 from './quote_to_share/1.png';
import share2 from './quote_to_share/2.png';
import share3 from './quote_to_share/3.png';
import share4 from './quote_to_share/4.png';
import editorial from './editorial.png';

export const header = {
  tags: [{
    title: '黑客進政府',
    name: 'taiwan',
  }, {
    title: '各國開外掛',
    name: 'international',
  }, {
    title: '問公僕訪唐鳳',
    name: 'civilservant',
  }, {
    title: '社群講秘訣',
    name: 'solution',
  }, {
    title: 'Go Hacking',
    name: 'hacker',
  }],
  share: {
    twitter: 'http://twitter.com/share?url=http://gov-hackers.g0v.news/&hashtags=g0v,g0vnews,taiwan,opengov',
    facebook: 'https://www.facebook.com/sharer/sharer.php?u=http://gov-hackers.g0v.news/',
  },
};

export const enter = {
  subtitle: [
    '「我們在數位時代裡生活、做生意，但政府最後一次大型組織再造，卻是黑白電視時代的事，」美國前總統歐巴馬說。',
    '在數位時代，「更新政府」大家都想做，但公務員們卻說，他們急需幫手。',
    '黑客，就是在面對無助時，能自己打造工具解決問題的人。當黑客走進政府，他們讓公務員，看見什麼可能？',
  ],
};

export const history = {
  title: ['回首黑客們近年來的', '關鍵出擊'],
  subtitle: '2014-now',
  event: [
    { date: '2014/03', name: '太陽花學運', content: '公民黑客運用並開發各種數位工具參與學運' },
    { date: '2014/12', name: '柯P宣誓開放政府', content: '柯文哲提出「開放政府」，邀集黑客擔任競選幕僚，後當選台北市長' },
    { date: '2015/01', name: '黑客幫行政院長上課', content: '選後新內閣的必修課「網路趨勢研習營」，講師包括羅佩琪、王景弘、高嘉良等人' },
    { date: '2015/06', name: '八仙塵爆', content: '點燃台北市與網路社群協作的第一案，24小時內開發傷患搜尋網站' },
    { date: '2016/06', name: '開放台電', content: '70歲台電的黑客松初體驗' },
    { date: '2016/10', name: '唐鳳就任政委', content: '開源社群與g0v長期參與者唐鳳成為台灣首位數位政委' },
  ],
};

export const taiwan = {
  title: ['④個黑客', '進政府實錄'],
  subtitle: '從中央部會到地方，當時被風光迎入政府的他們，是公關、救火隊，還是總教練？',
  topic: [{
    title: ['一個約聘人員', '力推新組織文化'],
    quote: {text: '想做新的事情，結果每個人一開始都問我怎麼做網站？', line: 9},
    job: ['衛生福利部','管理師'],
    alias: 'peggy',
    name: '羅佩琪',
    avatar: peggy,
    link: 'https://g0v.news/%E9%BB%91%E5%AE%A2%E5%85%AC%E5%8B%99%E5%93%A1-%E4%B8%8A-%E4%B8%80%E5%80%8B%E7%B4%84%E8%81%98%E4%BA%BA%E5%93%A1-%E5%8A%9B%E6%8E%A8%E6%96%B0%E7%B5%84%E7%B9%94%E6%96%87%E5%8C%96-4260e2addd5a',
  }, {
    title: ['當黑客松', '只留下一日激情'],
    quote: {text: '（政府）一直辦黑客松，是因為我們走不到下一步。', line: 9},
    job: ['經濟部', '幕僚'],
    alias: 'kiang',
    name: '江明宗',
    avatar: kiang,
    link: 'https://g0v.news/%E9%BB%91%E5%AE%A2%E5%85%AC%E5%8B%99%E5%93%A1-%E4%B8%AD-%E7%95%B6%E9%BB%91%E5%AE%A2%E6%9D%BE%E5%8F%AA%E7%95%99%E4%B8%8B%E4%B8%80%E6%97%A5%E6%BF%80%E6%83%85-ce93ad56a584#.z12u4s51j',
  }, {
    title: ['當民意退潮', '改革還能繼續？'],
    quote: {text: '人都是被戳、會痛，才會變。', line: 7},
    job: ['經濟部', '幕僚'],
    alias: '小彭',
    name: '彭盛韶',
    avatar: saul,
    alt: true,
    link: 'https://g0v.news/%E9%BB%91%E5%AE%A2%E5%85%AC%E5%8B%99%E5%93%A1-%E4%B8%AD-%E7%95%B6%E9%BB%91%E5%AE%A2%E6%9D%BE%E5%8F%AA%E7%95%99%E4%B8%8B%E4%B8%80%E6%97%A5%E6%BF%80%E6%83%85-ce93ad56a584#.z12u4s51j',
  }, {
    title: ['「沒有人」，', '當公僕的公僕'],
    quote: {text: '我是做好（未來）窮困潦倒的準備，才有可能做這件事。', line: 9},
    job: ['嘉義縣智慧城市', '暨青年創業推動', '辦公室執行長'],
    alias: 'TonyQ',
    name: '王景弘',
    avatar: tonyq,
    alt: true,
    link: 'https://g0v.news/%E9%BB%91%E5%AE%A2%E5%85%AC%E5%8B%99%E5%93%A1-%E4%B8%8B-%E6%B2%92%E6%9C%89%E4%BA%BA-%E7%95%B6%E5%85%AC%E5%83%95%E7%9A%84%E5%85%AC%E5%83%95-44754421b3b2#.6u3oa38nw',
  }],
  anonymity: {
    name: 'taiwan',
    quote: ['對於開放政府實踐現況，', '⑫位公務員的第一手觀察'],
    link: 'https://g0v.news/%E5%85%AC%E5%8B%99%E5%93%A1%E5%8C%BF%E5%90%8D%E5%85%B1%E7%AD%86%E2%85%B0-%E5%B0%8D%E6%96%BC%E9%96%8B%E6%94%BE%E6%94%BF%E5%BA%9C%E5%AF%A6%E8%B8%90%E7%8F%BE%E6%B3%81%E7%9A%84%E7%AC%AC%E4%B8%80%E6%89%8B%E8%A7%80%E5%AF%9F-dc93e7ab19cf#.pzxq5po9m',
  },
  window: ['沒有「名份」的黑客、急需甜頭的公務體系，還有逐漸風平浪靜的民意⋯⋯', 'Hacking，要如何繼續？'],
};

export const international = {
  title: ['找黑客與政府的', '④種關係'],
  subtitle: '越洋專訪',
  topic: [{
    title: ['福島核災','讓政府打開大門','迎進黑客'],
    region: '日本',
    cover: japan,
    link: 'https://g0v.news/%E5%B0%88%E8%A8%AA-%E4%B8%80%E5%A0%B4%E6%A0%B8%E7%81%BD-%E8%AE%93%E9%BB%91%E5%AE%A2%E6%95%B2%E9%80%B2%E6%97%A5%E6%9C%AC%E6%94%BF%E5%BA%9C%E5%B0%81%E9%96%89%E5%A4%A7%E9%96%80-d7b557af4fc1#.bv8tw52h5',
  }, {
    title: ['讓公務員和','黑客一起新生訓練'],
    region: '澳洲',
    cover: australia,
    link: 'https://g0v.news/%E5%B0%88%E8%A8%AA-%E5%BE%9E%E4%B8%80%E5%80%8B%E7%B2%89%E7%B5%B2%E9%A0%81-%E8%AE%8A%E6%BE%B3%E6%B4%B2%E6%94%BF%E5%BA%9C%E6%9C%80%E6%9C%89%E5%8A%9B-%E5%A4%96%E6%8E%9B-c2d7976a81c0#.jsp7ytmf5',
  }, {
    title: ['如何開出讓','黑客搶破頭的','職缺？'],
    region: '巴基斯坦',
    cover: pakistan,
    link: 'https://g0v.news/%E5%B0%88%E8%A8%AA-%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E6%94%BF%E5%BA%9C-%E5%A6%82%E4%BD%95%E9%96%8B%E5%87%BA%E8%AE%93%E9%BB%91%E5%AE%A2%E6%90%B6%E7%A0%B4%E9%A0%AD%E7%9A%84%E8%81%B7%E7%BC%BA-d259e73362dc#.udzcxcbnn',
  }, {
    title: ['⑳人實驗室','給②千萬市民的','數位都更'],
    region: '墨西哥市',
    cover: mexico,
    link: 'https://g0v.news/%E5%B0%88%E8%A8%AA-%E5%A2%A8%E8%A5%BF%E5%93%A5-20-%E4%BA%BA%E5%89%B5%E6%96%B0%E5%AF%A6%E9%A9%97%E5%AE%A4-%E7%B5%A6-2100-%E8%90%AC%E4%BA%BA%E7%9A%84%E6%95%B8%E4%BD%8D%E9%83%BD%E6%9B%B4-61d14f8e8893#.kbxcn4k3n',
  }],
  content: [
    '在日本，直到一場核災，政府才開始接受公民社會的協力。在澳洲，政府不知道資料有什麼價值，於是打電話向公民科技社群求救。貪腐嚴重的巴基斯坦，和世界前十大城墨西哥市，急需大破大立，也都拉著民間人才一起衝。',
    '透過fellowship🔎制度，民間社群和政府開始合作，短期內讓公務體系嘗到改變的甜頭、讓民間力量發揮，單點擊破僵化的文化、生態，開始影響整個政府機器。',
  ],
  anonymity: {
    name: 'international',
    quote: ['台灣也需要fellowship嗎？', '聽聽第一線公務員怎麼說'],
    link: 'https://g0v.news/%E5%85%AC%E5%8B%99%E5%93%A1%E5%8C%BF%E5%90%8D%E5%85%B1%E7%AD%86%E2%85%B2-%E5%B0%8D%E6%96%BC%E5%85%AC%E5%8B%99%E9%AB%94%E7%B3%BB%E7%9A%84%E9%9D%A9%E6%96%B0%E6%8C%91%E6%88%B0-%E8%81%BD%E8%81%BD%E5%85%AC%E5%8B%99%E5%93%A1%E7%9A%84%E7%9C%9F%E5%AF%A6%E5%BF%83%E8%81%B2-cc068ffa1119#.8dyf8aftq',
  },
};

export const civilservant = {
  title: ['公務員遇到的障礙', '政委唐鳳怎麼說？'],
  subtitle: '開放政府之路',
  conversation: [{
    anonymous: {text: '有關（開放政府）挑戰跟障礙，更核心一點的問題是整個公部門已經overloading了。', line: 10},
    alias: '捲毛大叔',
    team: '稅務單位',
    experience: '總年資10年',
    minister: {text: '引進自動化工具，沒有別的辦法。', line: 8},
  }, {
    anonymous: {text: '毫無疑問組織文化是政府數位化的最大阻力。', line: 8},
    alias: 'Foxly',
    team: '中央規劃單位',
    experience: '總年資4.5年',
    minister: {text: '除了（公務員）組織起來之外，難道有別的辦法嗎？', lin: 9},
    alt: true,
  }, {
    anonymous: {text: '中高階公務員都不願意多做事，開放政府很明顯會增加工作量，多數會極力抗拒。', line: 10},
    alias: '好想贏韓國',
    team: '衛福部',
    experience: '總年資1年',
    minister: {text: '我覺得很多（情況）是沒有政治意志，沒有政治意志就沒有錢，即使有能力看到需求，也做不到。', line: 11},
  }],
  avatar: au,
  link: {
    quote: ['要公務員搶回主動權', '她計畫這麼做'],
    link: 'https://g0v.news/%E8%A6%81%E5%85%AC%E5%8B%99%E5%93%A1%E6%90%B6%E5%9B%9E%E4%B8%BB%E5%8B%95%E6%AC%8A-%E6%94%BF%E5%A7%94%E5%94%90%E9%B3%B3%E8%A8%88%E7%95%AB%E9%80%99%E9%BA%BC%E5%81%9A-8877e96dab54#.23rk7eukd',
  },
  anonymity: {
    name: 'civilservant',
    quote: ['對於公務體系的升級更新，', '這裡有公務員的真實心聲'],
    link: 'https://g0v.news/%E5%85%AC%E5%8B%99%E5%93%A1%E5%8C%BF%E5%90%8D%E5%85%B1%E7%AD%86%E2%85%B1-%E5%8F%B0%E7%81%A3%E4%B9%9F%E9%9C%80%E8%A6%81-fellowship-%E5%97%8E-%E8%81%BD%E8%81%BD%E7%AC%AC%E4%B8%80%E7%B7%9A%E5%85%AC%E5%8B%99%E5%93%A1%E6%80%8E%E9%BA%BC%E8%AA%AA-9f7673354c77#.v81o3ww5l',
  },
};

export const solution = {
  title: ['②個資深黑客', '⑤國經驗', '⑩個讓黑客與政府', '開心共事的祕訣'],
  subtitle: '公部門快做筆記！',
  topic: [{
    title: '如何打造友善環境？',
    quote: '互信與回饋，讓目標更精準。',
    alias: 'clkao',
    name: '高嘉良',
    team: 'g0v共同發起人',
    avatar: cl,
    link: 'https://g0v.news/2-%E5%80%8B%E8%B3%87%E6%B7%B1%E9%BB%91%E5%AE%A2-5-%E5%9C%8B%E7%B6%93%E9%A9%97-10-%E5%80%8B%E8%AE%93%E9%BB%91%E5%AE%A2%E8%88%87%E6%94%BF%E5%BA%9C%E9%96%8B%E5%BF%83%E5%85%B1%E4%BA%8B%E7%9A%84%E7%A5%95%E8%A8%A3-786d1d7779fe#.4yq0wysd5',
  }, {
    title: '如何鼓勵黑客貢獻？',
    quote: '持續把貢獻者找來挖坑現場。',
    alias: 'yutin',
    name: '劉宇庭',
    team: 'g0v資深貢獻者',
    avatar: yutin,
    alt: true,
    link: 'https://g0v.news/2-%E5%80%8B%E8%B3%87%E6%B7%B1%E9%BB%91%E5%AE%A2-5-%E5%9C%8B%E7%B6%93%E9%A9%97-10-%E5%80%8B%E8%AE%93%E9%BB%91%E5%AE%A2%E8%88%87%E6%94%BF%E5%BA%9C%E9%96%8B%E5%BF%83%E5%85%B1%E4%BA%8B%E7%9A%84%E7%A5%95%E8%A8%A3-786d1d7779fe#.4yq0wysd5',
  }],
  editorial: {
    image: editorial,
    link: 'https://g0v.news/%E7%B7%A8%E8%BC%AF%E7%BE%A4%E8%A7%80%E9%BB%9E-%E9%96%8B%E6%94%BE%E6%94%BF%E5%BA%9C%E7%9A%84%E6%A0%B8%E5%BF%83-%E7%95%B6%E4%B8%80%E5%80%8B-%E6%B2%92%E6%9C%89%E4%BA%BA-d5f2bbbae884#.hxb5iiang',
  },
};

export const hacker = {
  title: ['你就是黑客'],
  subtitle: '不用會寫程式，你也可以成為黑客。',
  topic: [{
    name: 'join_slack',
    quote: '想知道黑客們都在聊些什麼嗎？',
    tip: '加入g0v Slack聊天室',
    link: 'http://join.g0v.today/',
  }, {
    name: 'ocf_email',
    quote: '想獲得最新的報導及活動訊息嗎？',
    tip: '訂閱OCF電子報',
    link: 'http://ocf.tw/subscribe/',
  }, {
    name: 'ocf_donate',
    quote: 'g0v.news是OCF國際交流的專案',
    tip: '捐款支持',
    link: 'https://ocf.neticrm.tw/civicrm/contribute/transact?reset=1&id=11&_ga=1.54528875.130262601.1484722201',
  }],
  share: [
    { name: 'share1', image: share1, link: 'https://www.facebook.com/dialog/share?app_id=284936411936225&href=http://gov-hackers.g0v.news/&picture=http://gov-hackers.g0v.news/share/1.png' },
    { name: 'share2', image: share2, link: 'https://www.facebook.com/dialog/share?app_id=284936411936225&href=http://gov-hackers.g0v.news/&picture=http://gov-hackers.g0v.news/share/2.png' },
    { name: 'share3', image: share3, link: 'https://www.facebook.com/dialog/share?app_id=284936411936225&href=http://gov-hackers.g0v.news/&picture=http://gov-hackers.g0v.news/share/3.png' },
    { name: 'share4', image: share4, link: 'https://www.facebook.com/dialog/share?app_id=284936411936225&href=http://gov-hackers.g0v.news/&picture=http://gov-hackers.g0v.news/share/4.png' },
  ],
};

export const license = {
  title: ['《黑客公務員的血汗之路》'],
  subtitle: '#g0vnews, making news of/with the #civictech community.',
  license: 'This work by g0v.news is licensed under a CC BY-SA 4.0 International license.',
  image: [
    { name: 'peggy', license: 'CC BY 2.0 othree', link: 'https://www.flickr.com/photos/othree/27172214731/' },
    { name: '小彭', license: 'CC BY 2.0 Saul Peng', link: 'https://www.flickr.com/photos/g0v/27065885385/' },
    { name: 'kiang', license: '受訪者授權使用', link: 'https://www.facebook.com/k.olc.tw/photos/a.282923885214415.1073741825.282921805214623/587085298131604/' },
    { name: 'TonyQ', license: 'CC BY 2.0 othree', link: 'https://www.flickr.com/photos/othree/27172287431/' },
    { name: '《各國開外掛》標頭', license: '城市實驗室受訪者授權使用', link: '#' },
    { name: 'Code for Japan', license: '受訪者授權使用', link: '#' },
    { name: 'Code for Australia', license: '受訪者授權使用', link: '#' },
    { name: 'Code for Pakistan', license: '受訪者授權使用', link: '#' },
    { name: '城市實驗室', license: '受訪者授權使用', link: '#' },
    { name: '台北市政府內部', license: 'CC BY 2.0 chihao', link: 'https://www.flickr.com/photos/chihaoyo/32730731413/' },
    { name: '行政院內部', license: 'CC BY 2.0 chihao', link: 'https://www.flickr.com/photos/chihaoyo/32730731723/' },
    { name: '唐鳳', license: 'CC BY SA 2.0 Medialab Prado', link: 'https://www.flickr.com/photos/medialab-prado/31211599222/' },
    { name: 'clkao', license: 'CC BY SA 2.0 COSCUP', link: 'https://www.flickr.com/photos/coscup/9635311317/' },
    { name: 'yutin', license: 'CC BY 2.0 othree', link: 'https://www.flickr.com/photos/othree/26676523245/' },
  ],
  interview: [{ name: '台灣公務革新力量聯盟', link: 'https://www.facebook.com/thinking4public/' }],
  publication: [
    { name: '商業周刊', link: 'http://www.businessweekly.com.tw/' },
    { name: '報導者', link: 'https://www.twreporter.org/' },
  ],
  author: [
    { work: '採訪撰文', alias: 'jason', name: '劉致昕' },
    { work: '編輯', alias: '米尼', name: '吳廷勻' },
    { work: '軟體開發', alias: 'yutin', name: '劉宇庭' },
    { work: '設計', alias: 'chihao', name: '游知澔' },
    { work: '社群協力', alias: 'mg', name: '李梅君' },
    { work: '社群協力', alias: '小班', name: '簡韻真' },
    { work: '監製', alias: '阿端', name: '吳銘軒' },
  ],
};
