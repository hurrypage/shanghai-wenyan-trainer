const CONTENT_VERSION = '0.2.0';
const DB_NAME = 'wenyan-shanghai-trainer';
const DB_VERSION = 1;
const STORE_NAME = 'key-value';
const STATE_KEY = 'state';
const DAY = 24 * 60 * 60 * 1000;

const ITEMS = [
  {
    id: 'sample-01',
    passageId: 'passage-chen-she',
    family: '教材样例-陈涉世家',
    source: '样例 · 教材语料',
    typeLabel: '词句理解',
    type: 'choice',
    skill: '词句理解',
    estimatedSec: 45,
    title: '“辍耕之垄上”中的“之”是什么意思？',
    passageTitle: '《陈涉世家》片段',
    passageText: '陈涉少时，尝与人佣耕，辍耕之垄上，怅恨久之，曰：“苟富贵，无相忘。”',
    options: ['到、往', '的', '他，指陈涉', '因为'],
    answerIndex: 0,
    correctAnswer: 'A · 到、往。这里“之”是动词，表示到田埂上去。',
    explanation: '判断实词或虚词要先看它在句中的位置。“之”后面是名词“垄上”，整句需要一个动作“到……去”。',
    tags: ['词句理解']
  },
  {
    id: 'sample-02',
    passageId: 'passage-chen-she',
    family: '教材样例-陈涉世家',
    source: '样例 · 教材语料',
    typeLabel: '翻译练习',
    type: 'short',
    skill: '翻译',
    estimatedSec: 85,
    title: '请翻译：“苟富贵，无相忘。”',
    passageTitle: '《陈涉世家》片段',
    passageText: '陈涉少时，尝与人佣耕，辍耕之垄上，怅恨久之，曰：“苟富贵，无相忘。”',
    promptHint: '请尽量译出“苟”“无”“相”三个关键点。',
    correctAnswer: '如果将来有一天富贵了，不要互相忘记。',
    explanation: '“苟”是“如果”，“无”是“不要”，“相”表示动作偏指一方，可译作“互相”。翻译要把假设关系和祈使语气都表达出来。',
    tags: ['翻译']
  },
  {
    id: 'sample-03',
    passageId: 'passage-chen-she',
    family: '教材样例-陈涉世家',
    source: '样例 · 教材语料',
    typeLabel: '信息理解',
    type: 'choice',
    skill: '信息与人物',
    estimatedSec: 55,
    title: '从这段话看，陈涉当时最直接的情绪是什么？',
    passageTitle: '《陈涉世家》片段',
    passageText: '陈涉少时，尝与人佣耕，辍耕之垄上，怅恨久之，曰：“苟富贵，无相忘。”',
    options: ['对困顿现状的不甘与感慨', '对田间劳作的满足', '对同伴忘恩负义的责备', '对未来生活的恐惧'],
    answerIndex: 0,
    correctAnswer: 'A · 对困顿现状的不甘与感慨。',
    explanation: '“怅恨”直接写出失意和不平，“苟富贵，无相忘”又把这种情绪推向对未来的想象。答案需要同时抓住情绪词和后一句的愿望。',
    tags: ['信息与人物']
  },
  {
    id: 'sample-04',
    passageId: 'passage-zhuxu',
    family: '教材样例-烛之武',
    source: '样例 · 教材语料',
    typeLabel: '逻辑关系',
    type: 'choice',
    skill: '结构与论证',
    estimatedSec: 60,
    title: '“越国以鄙远，君知其难也”在游说中起什么作用？',
    passageTitle: '《烛之武退秦师》片段',
    passageText: '越国以鄙远，君知其难也。焉用亡郑以陪邻？邻之厚，君之薄也。',
    options: ['先指出秦国越过晋国管理远地的困难，再引出利害分析', '描写郑国边远的地理环境', '承认秦国已经取得郑国土地', '说明晋国和秦国是亲近的邻国'],
    answerIndex: 0,
    correctAnswer: 'A · 先指出现实困难，再引出“损秦利晋”的利害分析。',
    explanation: '这句话不是单纯说明地理位置，而是在谈判中设置一个前提：秦国即使得到郑国，也面临管理困难。后文“邻之厚，君之薄”因此有了逻辑支点。',
    tags: ['结构与论证']
  },
  {
    id: 'sample-05',
    passageId: 'passage-zhuxu',
    family: '教材样例-烛之武',
    source: '样例 · 教材语料',
    typeLabel: '翻译练习',
    type: 'short',
    skill: '翻译',
    estimatedSec: 90,
    title: '请翻译：“邻之厚，君之薄也。”',
    passageTitle: '《烛之武退秦师》片段',
    passageText: '越国以鄙远，君知其难也。焉用亡郑以陪邻？邻之厚，君之薄也。',
    promptHint: '留意两个“之”的结构，以及“厚”“薄”的活用意义。',
    correctAnswer: '邻国的势力雄厚了，您的势力就相对削弱了。',
    explanation: '两个“之”用于主谓之间取消句子独立性；“厚”“薄”在这里不是厚薄的形状，而是势力强弱。翻译要体现秦与邻国此消彼长的关系。',
    tags: ['翻译', '结构与论证']
  },
  {
    id: 'sample-06',
    passageId: 'passage-zhuxu',
    family: '教材样例-烛之武',
    source: '样例 · 教材语料',
    typeLabel: '观点判断',
    type: 'choice',
    skill: '观点与表达',
    estimatedSec: 60,
    title: '烛之武这一段劝说最突出的表达特点是什么？',
    passageTitle: '《烛之武退秦师》片段',
    passageText: '越国以鄙远，君知其难也。焉用亡郑以陪邻？邻之厚，君之薄也。',
    options: ['站在对方利益上分析得失，逐步形成说服力', '只反复强调郑国的无辜，回避秦国利益', '用夸张故事激怒秦伯，迫使其退兵', '先承诺郑国会立即归还所有土地'],
    answerIndex: 0,
    correctAnswer: 'A · 站在秦国利益上分析得失，逐步形成说服力。',
    explanation: '游说没有直接诉诸情感，而是从秦国越过晋国控制远地的困难说起，再指出“亡郑陪邻”会损害秦国利益，论证层层推进。',
    tags: ['观点与表达']
  },
  {
    id: 'sample-07',
    passageId: 'passage-lianpo',
    family: '教材样例-廉颇蔺相如列传',
    source: '样例 · 教材语料',
    typeLabel: '词句理解',
    type: 'choice',
    skill: '词句理解',
    estimatedSec: 50,
    title: '“而蔺相如徒以口舌为劳”中的“徒”是什么意思？',
    passageTitle: '《廉颇蔺相如列传》片段',
    passageText: '廉颇曰：“我为赵将，有攻城野战之大功，而蔺相如徒以口舌为劳，而位居我上。且相如素贱人，吾羞，不忍为之下！”',
    options: ['只、不过', '暗中', '门徒', '从事劳作的人'],
    answerIndex: 0,
    correctAnswer: 'A · 只、不过。廉颇认为蔺相如只是凭言辞建立功劳。',
    explanation: '“徒”在这里表示范围限定，相当于“只、不过”。它和“攻城野战之大功”形成对比，表现廉颇对蔺相如功劳的轻视。',
    tags: ['词句理解', '人物']
  },
  {
    id: 'sample-08',
    passageId: 'passage-lianpo',
    family: '教材样例-廉颇蔺相如列传',
    source: '样例 · 教材语料',
    typeLabel: '翻译练习',
    type: 'short',
    skill: '翻译',
    estimatedSec: 95,
    title: '请翻译：“且相如素贱人，吾羞，不忍为之下！”',
    passageTitle: '《廉颇蔺相如列传》片段',
    passageText: '廉颇曰：“我为赵将，有攻城野战之大功，而蔺相如徒以口舌为劳，而位居我上。且相如素贱人，吾羞，不忍为之下！”',
    promptHint: '请留意“且”“素”“贱”“为之下”的意思和语气。',
    correctAnswer: '况且蔺相如本来是地位低微的人，我感到羞耻，不能容忍位居他的下面！',
    explanation: '“且”是“况且”，“素”是“向来、本来”，“贱人”指地位低微的人；“为之下”是“处在他的下面”。句末的感叹语气要译出来。',
    tags: ['翻译', '人物']
  },
  {
    id: 'sample-09',
    passageId: 'passage-lianpo',
    family: '教材样例-廉颇蔺相如列传',
    source: '样例 · 教材语料',
    typeLabel: '信息与人物',
    type: 'choice',
    skill: '信息与人物',
    estimatedSec: 55,
    title: '廉颇对蔺相如不满的直接原因是什么？',
    passageTitle: '《廉颇蔺相如列传》片段',
    passageText: '廉颇曰：“我为赵将，有攻城野战之大功，而蔺相如徒以口舌为劳，而位居我上。且相如素贱人，吾羞，不忍为之下！”',
    options: ['认为自己的军功更大，却位次低于蔺相如', '认为蔺相如夺走了赵国的土地', '担心秦国会因此再次进攻赵国', '不满蔺相如拒绝出使秦国'],
    answerIndex: 0,
    correctAnswer: 'A · 他以军功自居，认为自己应当排在蔺相如之上。',
    explanation: '“有攻城野战之大功”与“徒以口舌为劳”是廉颇的比较标准，“而位居我上”点明了冲突的直接触发点。',
    tags: ['信息与人物']
  },
  {
    id: 'sample-10',
    passageId: 'passage-hongmen',
    family: '教材样例-鸿门宴',
    source: '样例 · 教材语料',
    typeLabel: '词句理解',
    type: 'choice',
    skill: '词句理解',
    estimatedSec: 50,
    title: '“项伯杀人，臣活之”中的“活”是什么用法？',
    passageTitle: '《鸿门宴》片段',
    passageText: '秦时与臣游，项伯杀人，臣活之；今事有急，故幸来告良。',
    options: ['使动用法，使……活下来', '名词作动词，生活', '形容词作动词，活跃', '意动用法，认为……有活力'],
    answerIndex: 0,
    correctAnswer: 'A · 使动用法，使项伯活下来。',
    explanation: '“活”后面带宾语“之”，意思不是项伯自己活跃，而是“使他活下来”，属于使动用法。',
    tags: ['词句理解', '语法']
  },
  {
    id: 'sample-11',
    passageId: 'passage-hongmen',
    family: '教材样例-鸿门宴',
    source: '样例 · 教材语料',
    typeLabel: '翻译练习',
    type: 'short',
    skill: '翻译',
    estimatedSec: 90,
    title: '请翻译：“秦时与臣游，项伯杀人，臣活之。”',
    passageTitle: '《鸿门宴》片段',
    passageText: '秦时与臣游，项伯杀人，臣活之；今事有急，故幸来告良。',
    promptHint: '请译出“游”“活之”的语境义。',
    correctAnswer: '秦朝时项伯曾经同我交游；他杀了人，是我使他活了下来。',
    explanation: '“游”是交游、交往；“活之”是使他活下来。翻译时要把前后两层经历关系表达清楚。',
    tags: ['翻译', '语法']
  },
  {
    id: 'sample-12',
    passageId: 'passage-hongmen',
    family: '教材样例-鸿门宴',
    source: '样例 · 教材语料',
    typeLabel: '结构关系',
    type: 'choice',
    skill: '结构与论证',
    estimatedSec: 55,
    title: '“今事有急，故幸来告良”与前文构成怎样的关系？',
    passageTitle: '《鸿门宴》片段',
    passageText: '秦时与臣游，项伯杀人，臣活之；今事有急，故幸来告良。',
    options: ['由旧日交情和恩情转入眼前危急，说明项伯来报信的原因', '由战事结果转入对宴会礼仪的描写', '先否定刘邦，再赞扬项伯的军功', '用夸张手法描写秦朝法律的严酷'],
    answerIndex: 0,
    correctAnswer: 'A · 先叙旧交和救命之恩，再说明项伯因形势紧急前来报信。',
    explanation: '分号前回顾两人的交往和恩情，分号后用“今”“故”把叙事推进到当前危机，因果关系清楚。',
    tags: ['结构与论证']
  },
  {
    id: 'sample-13',
    passageId: 'passage-yueyang',
    family: '教材样例-岳阳楼记',
    source: '样例 · 教材语料',
    typeLabel: '词句理解',
    type: 'choice',
    skill: '词句理解',
    estimatedSec: 45,
    title: '“居庙堂之高则忧其民”中的“居”是什么意思？',
    passageTitle: '《岳阳楼记》片段',
    passageText: '不以物喜，不以己悲；居庙堂之高则忧其民；处江湖之远则忧其君。',
    options: ['处在、居于', '积蓄、储存', '居住的房屋', '停止不动'],
    answerIndex: 0,
    correctAnswer: 'A · 处在、居于。',
    explanation: '“居庙堂之高”与“处江湖之远”相对，都是处所意义，指身居朝廷高位。',
    tags: ['词句理解', '结构与论证']
  },
  {
    id: 'sample-14',
    passageId: 'passage-yueyang',
    family: '教材样例-岳阳楼记',
    source: '样例 · 教材语料',
    typeLabel: '翻译练习',
    type: 'short',
    skill: '翻译',
    estimatedSec: 85,
    title: '请翻译：“不以物喜，不以己悲。”',
    passageTitle: '《岳阳楼记》片段',
    passageText: '不以物喜，不以己悲；居庙堂之高则忧其民；处江湖之远则忧其君。',
    promptHint: '请把两个“以”的介词意义和对举关系译完整。',
    correctAnswer: '不因外物的好坏和自己的得失而或喜或悲。',
    explanation: '“以”是“因为、由于”；“物”指外在环境，“己”指个人处境。两个分句对举，强调情绪不被外物和个人得失左右。',
    tags: ['翻译', '观点与表达']
  },
  {
    id: 'sample-15',
    passageId: 'passage-yueyang',
    family: '教材样例-岳阳楼记',
    source: '样例 · 教材语料',
    typeLabel: '观点表达',
    type: 'choice',
    skill: '观点与表达',
    estimatedSec: 60,
    title: '这段话如何概括“古仁人”的处世态度？',
    passageTitle: '《岳阳楼记》片段',
    passageText: '不以物喜，不以己悲；居庙堂之高则忧其民；处江湖之远则忧其君。',
    options: ['不因个人得失改变志向，并始终把百姓和国家放在心上', '只在身居高位时追求个人名声', '远离社会现实，以保持内心平静', '根据外界赞誉和批评随时调整立场'],
    answerIndex: 0,
    correctAnswer: 'A · 情绪上不为物喜己悲，责任上无论进退都忧国忧民。',
    explanation: '前两句写不受外界和个人处境影响，后两句写身处不同位置都承担责任，合起来构成“古仁人”的稳定价值判断。',
    tags: ['观点与表达', '信息与人物']
  },
  {
    id: 'sample-16',
    passageId: 'passage-xiaoyaoyou',
    family: '教材样例-逍遥游',
    source: '样例 · 教材语料',
    typeLabel: '词句理解',
    type: 'choice',
    skill: '词句理解',
    estimatedSec: 50,
    title: '“且举世誉之而不加劝”中的“劝”是什么意思？',
    passageTitle: '《逍遥游》片段',
    passageText: '且举世誉之而不加劝，举世非之而不加沮；定乎内外之分，辩乎荣辱之境，斯已矣。',
    options: ['勉励、奋勉', '劝说别人', '劝阻、制止', '劝告君王'],
    answerIndex: 0,
    correctAnswer: 'A · 勉励、奋勉。',
    explanation: '“誉之”与“非之”相对，“不加劝”与“不加沮”相对，分别表示不因赞誉而更加奋勉、不因非难而更加沮丧。',
    tags: ['词句理解', '观点与表达']
  },
  {
    id: 'sample-17',
    passageId: 'passage-xiaoyaoyou',
    family: '教材样例-逍遥游',
    source: '样例 · 教材语料',
    typeLabel: '翻译练习',
    type: 'short',
    skill: '翻译',
    estimatedSec: 95,
    title: '请翻译：“且举世誉之而不加劝，举世非之而不加沮。”',
    passageTitle: '《逍遥游》片段',
    passageText: '且举世誉之而不加劝，举世非之而不加沮；定乎内外之分，辩乎荣辱之境，斯已矣。',
    promptHint: '注意“誉”“非”“劝”“沮”四个词的对举。',
    correctAnswer: '况且全社会的人都赞誉他，他也不因此更加奋勉；全社会的人都非难他，他也不因此更加沮丧。',
    explanation: '“誉”是赞誉，“非”是非难、责备；“劝”是奋勉，“沮”是沮丧。两个分句结构相同，翻译时要保留对举关系。',
    tags: ['翻译', '观点与表达']
  },
  {
    id: 'sample-18',
    passageId: 'passage-xiaoyaoyou',
    family: '教材样例-逍遥游',
    source: '样例 · 教材语料',
    typeLabel: '观点判断',
    type: 'choice',
    skill: '观点与表达',
    estimatedSec: 60,
    title: '这段话所强调的“独立”主要指什么？',
    passageTitle: '《逍遥游》片段',
    passageText: '且举世誉之而不加劝，举世非之而不加沮；定乎内外之分，辩乎荣辱之境，斯已矣。',
    options: ['不因世人的赞誉或非难改变自己的判断和志向', '完全拒绝与他人交往，独自生活', '只要获得功名就不必再努力', '把荣辱看得很重，以争取更多赞誉'],
    answerIndex: 0,
    correctAnswer: 'A · 不受外界评价牵动，能够守住自己的判断和志向。',
    explanation: '“不加劝”“不加沮”写不随赞毁增减情绪，“定乎内外之分，辩乎荣辱之境”则写能够辨明边界，核心是精神上的自持。',
    tags: ['观点与表达']
  }
];

const SKILLS = ['词句理解', '翻译', '信息与人物', '结构与论证', '观点与表达'];
const DEFAULT_STATE = {
  schemaVersion: 1,
  attempts: [],
  reviewStates: {},
  exposures: {},
  sessions: [],
  updatedAt: null
};

let state = structuredClone(DEFAULT_STATE);
let db = null;
let activeView = 'overview';
let session = null;

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function cloneDefault() {
  return structuredClone(DEFAULT_STATE);
}

function dateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function formatDate(key, includeWeekday = false) {
  const date = new Date(`${key}T12:00:00`);
  if (Number.isNaN(date.getTime())) return key;
  const weekday = new Intl.DateTimeFormat('zh-CN', { weekday: 'short' }).format(date);
  return includeWeekday ? `${weekday} · ${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}` : `${date.getMonth() + 1}月${date.getDate()}日`;
}

function formatDuration(seconds) {
  if (!seconds) return '—';
  const minutes = Math.max(1, Math.round(seconds / 60));
  return `${minutes} 分钟`;
}

function announce(message) {
  const region = $('#announcement');
  region.textContent = '';
  window.setTimeout(() => { region.textContent = message; }, 20);
}

function openDatabase() {
  return new Promise((resolve) => {
    if (!('indexedDB' in window)) return resolve(null);
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => request.result.createObjectStore(STORE_NAME);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => resolve(null);
  });
}

function readFromDatabase() {
  return new Promise((resolve) => {
    if (!db) return resolve(null);
    const transaction = db.transaction(STORE_NAME, 'readonly');
    const request = transaction.objectStore(STORE_NAME).get(STATE_KEY);
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => resolve(null);
  });
}

function writeToDatabase(value) {
  return new Promise((resolve) => {
    if (!db) return resolve(false);
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    transaction.objectStore(STORE_NAME).put(value, STATE_KEY);
    transaction.oncomplete = () => resolve(true);
    transaction.onerror = () => resolve(false);
  });
}

async function loadState() {
  db = await openDatabase();
  let saved = await readFromDatabase();
  if (!saved) {
    try { saved = JSON.parse(localStorage.getItem(DB_NAME) || 'null'); } catch { saved = null; }
  }
  if (saved && saved.schemaVersion === DEFAULT_STATE.schemaVersion) {
    state = { ...cloneDefault(), ...saved, attempts: saved.attempts || [], reviewStates: saved.reviewStates || {}, exposures: saved.exposures || {}, sessions: saved.sessions || [] };
  }
}

async function persistState() {
  state.updatedAt = new Date().toISOString();
  const wrote = await writeToDatabase(state);
  if (!wrote) localStorage.setItem(DB_NAME, JSON.stringify(state));
}

function getItem(id) { return ITEMS.find((item) => item.id === id); }

function dueItems(now = Date.now()) {
  return ITEMS.filter((item) => state.reviewStates[item.id] && state.reviewStates[item.id].dueAt <= now);
}

function unseenItems() {
  return ITEMS.filter((item) => !state.exposures[item.passageId]);
}

function buildQueue() {
  const due = dueItems().sort((a, b) => (state.reviewStates[a.id]?.dueAt || 0) - (state.reviewStates[b.id]?.dueAt || 0));
  const fresh = unseenItems().sort((a, b) => a.estimatedSec - b.estimatedSec);
  const fallback = ITEMS.filter((item) => !due.includes(item) && !fresh.includes(item)).sort((a, b) => {
    const aState = state.reviewStates[a.id] || {};
    const bState = state.reviewStates[b.id] || {};
    return (aState.lastAttemptAt || 0) - (bState.lastAttemptAt || 0);
  });
  const result = [];
  [...due, ...fresh, ...fallback].forEach((item) => { if (!result.includes(item)) result.push(item); });
  return result.slice(0, 4);
}

function calculateEstimate(queue) {
  return Math.max(1, Math.round(queue.reduce((total, item) => total + item.estimatedSec, 0) / 60));
}

function setView(view) {
  if (session && view !== 'session') return;
  activeView = view;
  ['overview', 'records', 'session'].forEach((name) => {
    const node = $(`#${name}-view`);
    if (node) node.classList.toggle('is-hidden', name !== view);
  });
  $$('.nav-link').forEach((button) => button.classList.toggle('is-active', button.dataset.view === view));
  if (view === 'overview') renderDashboard();
  if (view === 'records') renderRecords();
  if (view !== 'session') window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderDashboard() {
  const today = dateKey();
  const due = dueItems();
  const fresh = unseenItems();
  const todaySessions = state.sessions.filter((entry) => entry.dateKey === today);
  const todayCompleted = todaySessions.reduce((total, entry) => total + (entry.completed || 0), 0);
  const todayPlanned = todaySessions.reduce((total, entry) => total + (entry.planned || 0), 0);
  const progress = todayPlanned ? Math.min(100, Math.round((todayCompleted / todayPlanned) * 100)) : 0;
  const yesterday = new Date(Date.now() - DAY);
  const yesterdayKey = dateKey(yesterday);
  const yesterdayCount = state.attempts.filter((attempt) => dateKey(new Date(attempt.submittedAt)) === yesterdayKey && attempt.grade === 0).length;
  const headerDate = $('.eyebrow-row .eyebrow');
  if (headerDate) headerDate.textContent = formatDate(today, true);
  $('#due-count').textContent = due.length;
  $('#new-count').textContent = fresh.length;
  $('#yesterday-count').textContent = yesterdayCount;
  $('#today-progress').value = progress;
  $('#today-progress').style.setProperty('--value', progress);
  $('#today-progress-label').textContent = `${progress}%`;
  $('#session-estimate').textContent = `约 ${calculateEstimate(buildQueue())} 分钟`;
  $('#session-note').textContent = fresh.length ? '今天的新卡不会在本次结束时立即计入掌握。' : '到期复习优先；换一篇文章再做一次，才算真正的延迟检查。';
  renderStreak();
  renderSkills();
  renderHistory();
}

function renderStreak() {
  const completedKeys = new Set(state.sessions.filter((entry) => entry.completed > 0).map((entry) => entry.dateKey));
  let streak = 0;
  let cursor = new Date();
  while (completedKeys.has(dateKey(cursor))) { streak += 1; cursor = new Date(cursor.getTime() - DAY); }
  $('#streak-count').textContent = streak;
  $('#streak-copy').textContent = streak ? '每一次回来，都让下一次更轻松。' : '今天开始，点亮第一天。';
  const dots = $('#week-dots');
  dots.innerHTML = '';
  const today = new Date();
  for (let offset = 6; offset >= 0; offset -= 1) {
    const date = new Date(today.getTime() - offset * DAY);
    const dot = document.createElement('span');
    dot.className = `week-dot${completedKeys.has(dateKey(date)) ? ' is-done' : ''}${offset === 0 ? ' is-today' : ''}`;
    dot.textContent = new Intl.DateTimeFormat('zh-CN', { weekday: 'short' }).format(date).replace('周', '');
    dots.append(dot);
  }
}

function renderSkills() {
  const list = $('#skill-list');
  list.innerHTML = '';
  const recent = state.attempts.slice(0, 40);
  let totalSamples = 0;
  SKILLS.forEach((skill) => {
    const attempts = recent.filter((attempt) => attempt.skill === skill);
    totalSamples += attempts.length;
    const score = attempts.length ? attempts.reduce((sum, attempt) => sum + (attempt.grade / 3), 0) / attempts.length : 0;
    const row = document.createElement('div');
    row.className = 'skill-row';
    const label = document.createElement('span');
    label.className = 'skill-name';
    label.textContent = skill;
    const track = document.createElement('span');
    track.className = 'bar-track';
    const fill = document.createElement('span');
    fill.className = 'bar-fill';
    fill.style.width = `${Math.round(score * 100)}%`;
    track.append(fill);
    const result = document.createElement('span');
    result.className = 'skill-score';
    result.textContent = attempts.length >= 5 ? `${Math.round(score * 100)}%` : attempts.length ? `样本 ${attempts.length}` : '未测';
    row.append(label, track, result);
    list.append(row);
  });
  $('#sample-meta').textContent = totalSamples ? `${totalSamples} 条近期记录` : '样本尚未形成';
}

function renderHistory() {
  const body = $('#history-body');
  body.innerHTML = '';
  if (!state.sessions.length) {
    body.innerHTML = '<tr><td colspan="4" class="empty-row">还没有学习记录，今天先完成一小段。</td></tr>';
    return;
  }
  state.sessions.slice(0, 7).forEach((entry) => {
    const tr = document.createElement('tr');
    const result = entry.completed >= entry.planned ? '已完成' : '已暂停';
    tr.innerHTML = `<td>${formatDate(entry.dateKey)}</td><td>${entry.completed} / ${entry.planned} 题</td><td>${formatDuration(entry.durationSec)}</td><td><span class="result-pill">${result}</span></td>`;
    body.append(tr);
  });
}

function renderRecords() {
  $('#total-attempts').textContent = state.attempts.length;
  const minutes = state.sessions.reduce((sum, entry) => sum + Math.max(0, Math.round((entry.durationSec || 0) / 60)), 0);
  $('#total-minutes').textContent = minutes;
  $('#delayed-checks').textContent = state.attempts.filter((attempt) => attempt.delayed).length;
  $('#record-list-meta').textContent = `${state.attempts.length} 条`;
  const list = $('#attempt-list');
  list.innerHTML = '';
  if (!state.attempts.length) {
    list.innerHTML = '<li class="empty-list">完成第一次训练后，这里会出现你的作答轨迹。</li>';
    return;
  }
  state.attempts.slice(0, 20).forEach((attempt) => {
    const item = getItem(attempt.itemId);
    const li = document.createElement('li');
    const main = document.createElement('div');
    main.className = 'attempt-main';
    const strong = document.createElement('strong');
    strong.textContent = item ? item.title : '已删除的题目';
    const span = document.createElement('span');
    span.textContent = `${formatDate(dateKey(new Date(attempt.submittedAt)))} · ${attempt.delayed ? '延迟复测' : '首次练习'} · ${attempt.scoring === 'objective' ? '客观题' : '自评题'}`;
    main.append(strong, span);
    const grade = document.createElement('span');
    grade.className = 'attempt-grade';
    grade.textContent = ['完全不会', '有印象', '基本掌握', '非常熟练'][attempt.grade] || '已记录';
    li.append(main, grade);
    list.append(li);
  });
}

function startSession() {
  const queue = buildQueue();
  if (!queue.length) {
    announce('暂时没有可安排的任务。');
    return;
  }
  session = { queue, index: 0, startedAt: Date.now(), completed: 0, correct: 0, current: null, saved: false };
  $('#session-card').classList.remove('is-hidden');
  $('#session-summary').classList.add('is-hidden');
  setView('session');
  renderSessionItem();
}

function renderSessionItem() {
  const item = session.queue[session.index];
  session.current = { item, submitted: false, grade: null, answer: '', correct: null, submittedAt: null };
  const total = session.queue.length;
  $('#session-step').textContent = `${session.index + 1} / ${total}`;
  $('#session-mode').textContent = state.reviewStates[item.id] ? '到期复习' : '新的内容';
  $('#session-time').textContent = `约 ${calculateEstimate(session.queue.slice(session.index))} 分钟`;
  const sessionProgress = Math.round((session.index / total) * 100);
  $('#session-progress-bar').style.width = `${sessionProgress}%`;
  $('.progress-track').setAttribute('aria-valuenow', String(sessionProgress));
  $('#question-kicker').textContent = `QUESTION ${String(session.index + 1).padStart(2, '0')}`;
  $('#item-source').textContent = item.source;
  $('#item-type').textContent = item.typeLabel;
  $('#passage-title').textContent = item.passageTitle;
  $('#passage-text').textContent = item.passageText;
  $('#passage-text').hidden = false;
  $('#toggle-context').textContent = '收起原文';
  $('#session-title').textContent = item.title;
  $('#answer-area').innerHTML = '';
  $('#answer-hint').textContent = item.promptHint || '先凭自己的判断作答，再查看解析。';
  $('#feedback-panel').classList.add('is-hidden');
  $$('.grade-button').forEach((button) => { button.disabled = false; button.classList.remove('is-selected'); });
  $$('.next-button').forEach((button) => button.remove());
  const submit = $('.submit-answer');
  submit.style.display = 'inline-flex';
  submit.disabled = false;
  if (item.type === 'choice') {
    const fieldset = document.createElement('fieldset');
    fieldset.className = 'option-list';
    const legend = document.createElement('legend');
    legend.className = 'visually-hidden';
    legend.textContent = '选择一个答案';
    fieldset.append(legend);
    item.options.forEach((option, index) => {
      const label = document.createElement('label');
      label.className = 'option-label';
      const input = document.createElement('input');
      input.type = 'radio'; input.name = 'choice'; input.value = String(index); input.required = true;
      const text = document.createElement('span'); text.textContent = `${String.fromCharCode(65 + index)} · ${option}`;
      label.append(input, text); fieldset.append(label);
    });
    $('#answer-area').append(fieldset);
  } else {
    const label = document.createElement('label');
    label.className = 'visually-hidden'; label.htmlFor = 'short-answer'; label.textContent = '输入你的答案';
    const textarea = document.createElement('textarea');
    textarea.id = 'short-answer'; textarea.name = 'short_answer'; textarea.className = 'answer-input'; textarea.required = true; textarea.maxLength = 800; textarea.enterKeyHint = 'done';
    $('#answer-area').append(label, textarea);
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
  $('#session-title').focus?.();
}

function getSubmittedAnswer(item) {
  if (item.type === 'choice') {
    const selected = $('input[name="choice"]:checked');
    return selected ? selected.value : '';
  }
  return $('#short-answer')?.value.trim() || '';
}

function revealFeedback(item, answer) {
  const correct = item.type === 'choice' ? Number(answer) === item.answerIndex : null;
  session.current.submitted = true;
  session.current.answer = answer;
  session.current.correct = correct;
  session.current.submittedAt = Date.now();
  const status = $('#feedback-status');
  status.classList.toggle('is-miss', correct === false);
  status.textContent = item.type === 'choice' ? (correct ? '✓ 这次答对了' : '↺ 先别急，回到证据再看一遍') : '◎ 这是自评题，请按评分点对照';
  $('#correct-answer').textContent = item.correctAnswer;
  $('#explanation').textContent = item.explanation;
  $('#feedback-note').textContent = '选择回忆感觉后，系统才会安排下一次复习。';
  $('#feedback-panel').classList.remove('is-hidden');
  $('.submit-answer').style.display = 'none';
  $$('#answer-area input, #answer-area textarea').forEach((control) => { control.disabled = true; });
  announce(status.textContent);
}

function handleAnswerSubmit(event) {
  event.preventDefault();
  if (!session || session.current.submitted) return;
  const item = session.current.item;
  const answer = getSubmittedAnswer(item);
  if (!answer) {
    $('#answer-form').reportValidity();
    announce('请先完成这道题，再查看答案。');
    return;
  }
  revealFeedback(item, answer);
}

function scheduleReview(item, grade) {
  const previous = state.reviewStates[item.id] || { repetitions: 0 };
  const repetitions = grade === 0 ? 0 : previous.repetitions + 1;
  let interval = 1;
  if (grade === 2) interval = 3;
  if (grade === 3) interval = repetitions >= 3 ? 14 : 7;
  state.reviewStates[item.id] = { dueAt: Date.now() + interval * DAY, interval, repetitions, lastGrade: grade, lastAttemptAt: Date.now() };
  return interval;
}

async function saveGrade(grade) {
  if (!session || !session.current.submitted || session.current.grade !== null) return;
  const item = session.current.item;
  session.current.grade = grade;
  const delayed = Boolean(state.exposures[item.passageId] && Date.now() - state.exposures[item.passageId].firstSeenAt >= 20 * 60 * 60 * 1000);
  if (!state.exposures[item.passageId]) state.exposures[item.passageId] = { firstSeenAt: Date.now(), family: item.family };
  const isNoHint = item.type === 'choice' ? session.current.correct === true : grade >= 2;
  const attempt = {
    id: `attempt-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    itemId: item.id,
    skill: item.skill,
    articleFamily: item.family,
    answer: session.current.answer,
    correct: session.current.correct,
    noHint: isNoHint,
    grade,
    delayed,
    scoring: item.type === 'choice' ? 'objective' : 'self_check',
    submittedAt: session.current.submittedAt,
    durationSec: Math.max(1, Math.round((Date.now() - session.current.submittedAt + item.estimatedSec * 1000) / 1000)),
    contentVersion: CONTENT_VERSION
  };
  state.attempts.unshift(attempt);
  const interval = scheduleReview(item, grade);
  session.completed += 1;
  if (isNoHint) session.correct += 1;
  await persistState();
  $$('.grade-button').forEach((button) => {
    button.classList.toggle('is-selected', Number(button.dataset.grade) === grade);
    button.disabled = true;
  });
  $('#feedback-note').textContent = grade === 0 ? '已安排明天重新学习这张卡。' : `已安排约 ${interval} 天后复习；换语境的题会单独记录。`;
  const next = document.createElement('button');
  next.type = 'button'; next.className = 'secondary-button next-button'; next.textContent = session.index === session.queue.length - 1 ? '查看今日总结 →' : '下一题 →';
  next.addEventListener('click', advanceSession, { once: true });
  $('#feedback-panel').append(next);
  announce(`已记录：${['完全不会', '有印象', '基本掌握', '非常熟练'][grade]}。${interval} 天后复习。`);
}

function advanceSession() {
  if (!session) return;
  if (session.index >= session.queue.length - 1) return finishSession();
  session.index += 1;
  renderSessionItem();
}

async function finishSession(partial = false) {
  if (!session || session.saved) return;
  session.saved = true;
  const durationSec = Math.max(1, Math.round((Date.now() - session.startedAt) / 1000));
  state.sessions.unshift({ id: `session-${Date.now()}`, dateKey: dateKey(), startedAt: session.startedAt, endedAt: Date.now(), durationSec, planned: session.queue.length, completed: session.completed, correct: session.correct, partial, contentVersion: CONTENT_VERSION });
  await persistState();
  if (partial) {
    session = null;
    setView('overview');
    announce('训练已暂停，已保存当前完成的题目。');
    return;
  }
  $('#session-card').classList.add('is-hidden');
  $('#session-summary').classList.remove('is-hidden');
  const completedProgress = Math.round(session.completed / session.queue.length * 100);
  $('#session-progress-bar').style.width = `${completedProgress}%`;
  $('.progress-track').setAttribute('aria-valuenow', String(completedProgress));
  $('#summary-completed').textContent = session.completed;
  $('#summary-correct').textContent = session.correct;
  $('#summary-minutes').textContent = Math.max(1, Math.round(durationSec / 60));
  $('#summary-copy').textContent = session.completed === session.queue.length ? '新内容会在之后的日子里回来。下一次，换一个语境再试试。' : '已完成的部分已经保存，剩下的题可以留给下一次。';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  announce('今日训练完成。');
}

function exportData() {
  const payload = { app: '文言 · 上海', schemaVersion: state.schemaVersion, contentVersion: CONTENT_VERSION, exportedAt: new Date().toISOString(), state };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url; anchor.download = `文言上海-学习备份-${dateKey()}.json`; anchor.click();
  URL.revokeObjectURL(url);
  announce('备份文件已生成。');
}

async function importData(file) {
  try {
    const payload = JSON.parse(await file.text());
    const incoming = payload?.state;
    if (!incoming || incoming.schemaVersion !== DEFAULT_STATE.schemaVersion || !Array.isArray(incoming.attempts) || !Array.isArray(incoming.sessions)) throw new Error('invalid');
    state = { ...cloneDefault(), ...incoming, reviewStates: incoming.reviewStates || {}, exposures: incoming.exposures || {} };
    await persistState();
    renderDashboard(); renderRecords();
    announce('备份已导入。');
  } catch {
    announce('备份文件无法读取，当前记录没有变化。');
  }
}

function wireEvents() {
  $$('[data-view]').forEach((button) => button.addEventListener('click', () => setView(button.dataset.view)));
  $('#start-session').addEventListener('click', startSession);
  $('#finish-session').addEventListener('click', () => { session = null; setView('overview'); });
  $('#quit-session').addEventListener('click', () => finishSession(true));
  $('#answer-form').addEventListener('submit', handleAnswerSubmit);
  $('#grade-options').addEventListener('click', (event) => {
    const button = event.target.closest('.grade-button');
    if (button) saveGrade(Number(button.dataset.grade));
  });
  $('#toggle-context').addEventListener('click', () => {
    const passage = $('#passage-text');
    passage.hidden = !passage.hidden;
    $('#toggle-context').textContent = passage.hidden ? '展开原文' : '收起原文';
  });
  $('#export-data').addEventListener('click', exportData);
  $('#import-data').addEventListener('click', () => $('#import-file').click());
  $('#import-file').addEventListener('change', (event) => { if (event.target.files[0]) importData(event.target.files[0]); event.target.value = ''; });
  const help = $('#help-dialog');
  $('#open-help').addEventListener('click', () => help.showModal());
  $('#close-help').addEventListener('click', () => help.close());
  $('#close-help-cta').addEventListener('click', () => help.close());
}

async function init() {
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);
  wireEvents();
  await loadState();
  renderDashboard();
  renderRecords();
}

init();
