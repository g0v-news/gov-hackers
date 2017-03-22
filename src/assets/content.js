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
    { date: '2016/10', name: '唐鳳就任政委', content: '開源社群與g0v長期參與者唐鳳，成為台灣首位數位政委' },
  ],
};

export const taiwan = {
  title: ['④個黑客', '進政府實錄'],
  subtitle: '從中央部會到地方，當時被風光迎入政府的他們，是公關、救火隊，還是總教練？',
  topic: [{
    title: ['一個約聘人員', '帶進新組織文化'],
    quote: '想做新的事情，結果每個人一開始都問我怎麼做網站？',
    team: '衛生福利部',
    work: '管理師',
    nickname: 'peggy',
    name: '羅佩琪',
    avatar: peggy,
    link: '',
  }, {
    title: ['當黑客松', '只剩下一日激情'],
    quote: '（政府）一直辦黑客松，是因為我們走不到下一步。',
    team: '經濟部',
    work: '幕僚',
    nickname: 'kiang',
    name: '江明宗',
    avatar: kiang,
    link: '',
  }, {
    title: ['當民意退潮', '改革還能繼續？'],
    quote: '人都是被戳、會痛，才會變。',
    team: '經濟部',
    work: '幕僚',
    nickname: '小彭',
    name: '彭盛韶',
    avatar: saul,
    right: true,
    link: '',
  }, {
    title: ['「沒有人」，', '當公僕的公僕'],
    quote: '我是做好（未來）窮困潦倒的準備，才有可能做這件事。',
    team: '嘉義縣智慧城市暨青年創業',
    work: '推動辦公室執行長',
    nickname: 'TonyQ',
    name: '王景弘',
    avatar: tonyq,
    right: true,
    link: '',
  }],
  anonymity: {
    name: 'taiwan',
    quote: ['對於開放政府實踐現況，', '⑫位公務員的第一手觀察'],
    link: '',
  },
  window: ['沒有「名份」的黑客、急需甜頭的公務體系，還有逐漸風平浪靜的民意⋯⋯', 'Hacking，要如何繼續？'],
};

export const international = {
  title: ['找黑客與政府的', '④種關係'],
  subtitle: '越洋專訪',
  topic: [{
    title: ['福島核災讓政府打開大門迎進黑客'],
    region: '日本',
    cover: japan,
    link: '',
  }, {
    title: ['讓公務員和黑客一起新生訓練'],
    region: '澳洲',
    cover: australia,
    link: '',
  }, {
    title: ['如何開出讓黑客搶破頭的職缺？'],
    region: '巴基斯坦',
    cover: pakistan,
    link: '',
  }, {
    title: ['⑳人實驗室給②千萬市民的數位都更'],
    region: '墨西哥市',
    cover: mexico,
    link: '',
  }],
  content: [
    '在日本，直到一場核災，政府才開始接受公民社會的協力。在澳洲，政府不知道資料有什麼價值，於是向公民科技社群求救。貪腐嚴重的巴基斯坦，和世界前十大城墨西哥市，急需大破大立，也都拉著民間人才一起衝。',
    '透過fellowship🔎制度，民間社群和政府開始合作，短期內讓公務體系嘗到改變的甜頭、讓民間力量發揮，單點擊破僵化的文化、生態，開始影響整個政府機器。',
  ],
  anonymity: {
    name: 'international',
    quote: ['台灣也需要fellowship嗎？', '聽聽第一線公務員怎麼說'],
    link: '',
  },
};

export const civilservant = {
  title: ['公務員遇到的障礙', '政委唐鳳怎麼說？'],
  subtitle: '開放政府之路',
  issue: [{
    quote: '有關（開放政府）挑戰跟障礙，更核心一點的問題是整個公部門已經overloading了。',
    team: '稅務單位',
    experience: '總年資10年',
    solution: '引進自動化工具，沒有別的辦法。',
    link: '',
  }, {
    quote: '毫無疑問組織文化是政府數位化的最大阻力。',
    team: '中央規劃單位',
    experience: '總年資4.5年',
    solution: '除了（公務員）組織起來之外，難道有別的辦法嗎？',
    link: '',
  }, {
    quote: '中高階公務員都不願意多做事，開放政府很明顯會增加工作量，多數會極力抗拒。',
    team: '衛福部',
    experience: '總年資1年',
    solution: '我覺得很多（情況）是沒有政治意志，沒有政治意志就沒有錢，即使有能力看到需求，也做不到。',
    link: '',
  }],
  avatar: au,
  link: {
    quote: ['要公務員搶回主動權', '她計畫這麼做'],
    link: '',
  },
  anonymity: {
    name: 'civilservant',
    quote: ['對於公務體系的升級更新，', '這裡有公務員的真實心聲'],
    link: '',
  },
};

export const solution = {
  title: ['②個資深黑客', '⑤國經驗', '⑩個讓黑客與政府', '開心共事的秘訣'],
  subtitle: '公部門快做筆記！',
  topic: [{
    title: '如何打造友善環境？',
    quote: '互信與回饋，讓目標更精準。',
    nickname: 'clkao',
    name: '高嘉良',
    team: 'g0v共同發起人',
    avatar: cl,
    link: '',
  }, {
    title: '如何鼓勵黑客貢獻？',
    quote: '持續把貢獻者找來挖坑現場。',
    nickname: 'yutin',
    name: '劉宇庭',
    team: 'g0v資深貢獻者',
    avatar: yutin,
    right: true,
    link: '',
  }],
  editorial: {
    image: editorial,
    link: '',
  },
};

export const hacker = {
  title: ['你就是黑客'],
  subtitle: '不用會寫程式，你也可以成為黑客。',
  topic: [{
    name: 'join_slack',
    quote: '想知道黑客們都在聊些什麼嗎？',
    tip: '加入g0v Slack聊天室',
    link: '',
  }, {
    name: 'ocf_email',
    quote: '想獲得最新的報導及活動訊息嗎？',
    tip: '訂閱OCF電子報',
    link: '',
  }],
  share: [
    { image: share1, link: '' },
    { image: share2, link: '' },
    { image: share3, link: '' },
    { image: share4, link: '' },
  ],
};

export const license = {
  title: ['《黑客公務員的血汗之路》'],
  subtitle: '#g0vnews, making news of/with the #civictech community.',
  license: 'This work by g0v.news is licensed under a CC BY-SA 4.0 International license.',
  image: [
    { name: 'peggy', license: 'CC BY 2.0 othree', link: 'https://creativecommons.org/licenses/by/2.0/deed.zh_TW' },
    { name: '小彭', license: 'CC BY 2.0 Saul Peng', link: 'https://creativecommons.org/licenses/by/2.0/deed.zh_TW' },
    { name: 'kiang', license: '受訪者授權使用', link: '' },
    { name: 'TonyQ', license: 'CC BY 2.0 othree', link: 'https://creativecommons.org/licenses/by/2.0/deed.zh_TW' },
    { name: '《各國開外掛》標頭', license: '城市實驗室受訪者授權使用', link: '' },
    { name: 'Code for Japan', license: '受訪者授權使用', link: '' },
    { name: 'Code for Australia', license: '受訪者授權使用', link: '' },
    { name: 'Code for Pakistan', license: '受訪者授權使用', link: '' },
    { name: '城市實驗室', license: '受訪者授權使用', link: '' },
    { name: '台北市政府內部', license: 'CC BY 2.0 chihao', link: 'https://creativecommons.org/licenses/by/2.0/deed.zh_TW' },
    { name: '行政院內部', license: 'CC BY 2.0 chihao', link: 'https://creativecommons.org/licenses/by/2.0/deed.zh_TW' },
    { name: '唐鳳', license: 'CC BY SA 2.0 Medialab Prado', link: 'https://creativecommons.org/licenses/by-sa/2.0/tw/' },
    { name: 'clkao', license: 'CC BY SA 2.0 COSCUP', link: 'https://creativecommons.org/licenses/by-sa/2.0/tw/' },
    { name: 'yutin', license: 'CC BY 2.0 othree', link: 'https://creativecommons.org/licenses/by/2.0/deed.zh_TW' },
  ],
  interview: [{ name: '台灣公務革新力量聯盟', link: 'https://www.facebook.com/thinking4public/' }],
  publication: [
    { name: '商業週刊', link: 'http://www.businessweekly.com.tw/' },
    { name: '報導者', link: 'https://www.twreporter.org/' },
  ],
  author: [
    { work: '採訪撰文', nickname: 'jason', name: '劉致昕' },
    { work: '編輯', nickname: '米尼', name: '吳廷勻' },
    { work: '軟體開發', nickname: 'yutin', name: '劉宇庭' },
    { work: '設計', nickname: 'chihao', name: '游知澔' },
    { work: '社群協力', nickname: 'mg', name: '李梅君' },
    { work: '社群協力', nickname: '小班', name: '簡韻真' },
    { work: '監製', nickname: '阿端', name: '吳銘軒' },
  ],
};
