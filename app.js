const CONTENT_VERSION = '0.4.1';
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

const SOURCE_CATALOG = {
  curriculum: {
    label: '课程标准与上海课程实施文件',
    level: '一级',
    file: '01_命题依据_课程标准/普通高中语文课程标准日常修订版（2017年版2025年修订）.pdf；上海市普通高中课程实施方案_沪教委基2021_35号.txt',
    verification: '库内文件已通过 C1—C8 校验；2025 修订版来源页为二级渠道，未标为教育部官网原件。',
    scope: '能力方向与课程语境依据'
  },
  textbook: {
    label: '统编版高中语文教材篇目表',
    level: '一级/二级交叉',
    file: '03_教材_统编版篇目/统编版古诗文篇目表.md；人教社官网目录页',
    verification: '篇目多源一致，待纸本终校；用于判断课内语境，不等同于 72 篇背诵清单。',
    scope: '教材语境与能力练习'
  },
  officialReview: {
    label: '上海高考官方评析与结构核定表',
    level: '一级',
    file: '04_真题_官方评析与核定表/官方评析索引.md；历年真题结构逐年核定表.md',
    verification: '仅覆盖已公开的官方评析与结构信息；未声称拥有完整真题卷面或内部阅卷细则。',
    scope: '题型趋势与命题语境依据'
  },
  textReference: {
    label: '古籍文本参照层',
    level: '三级',
    file: '05_原文_古籍底本与工具书/底本选择与版本记录.md',
    verification: '汉典材料存在版本、标点、字形与授权边界，只用于字句比对和异文发现。',
    scope: '不能作为默写标准答案、教材底本或正式判分依据'
  }
};

const PASSAGE_SOURCE = {
  'passage-chen-she': { title: '《史记·卷四十八》完整原文参照', sources: ['curriculum', 'textbook', 'textReference'], note: '训练区显示《史记·卷四十八·陈涉世家》的完整公开卷本文本；本地仅作简体字与现代标点整理，卡片仍是原创训练，不是上海真题原题。' },
  'passage-zhuxu': { title: '《左传·僖公三十年》完整原文参照', sources: ['curriculum', 'textbook', 'textReference'], note: '训练区显示《左传·僖公三十年·烛之武退秦师》的完整公开篇本文本；本地仅作简体字与现代标点整理，卡片仍是原创训练，不是上海真题原题。' },
  'passage-lianpo': { title: '《史记·卷八十一》完整原文参照', sources: ['curriculum', 'textbook', 'textReference'], note: '训练区显示《史记·卷八十一·廉颇蔺相如列传》的完整公开卷本文本；本地仅作简体字与现代标点整理，卡片仍是原创训练。' },
  'passage-hongmen': { title: '《史记·卷七》鸿门宴完整原文参照', sources: ['curriculum', 'textbook', 'textReference'], note: '训练区显示《史记·卷七·项羽本纪》中鸿门宴段落的完整公开卷本文本；本地仅作简体字与现代标点整理，卡片仍是原创训练。' },
  'passage-yueyang': { title: '《岳阳楼记》完整原文参照', sources: ['curriculum', 'textbook', 'textReference'], note: '训练区显示范仲淹《岳阳楼记》的完整公开篇本文本；本地仅作简体字与现代标点整理，异文参照不进入答案标准。' },
  'passage-xiaoyaoyou': { title: '《庄子·逍遥游》完整篇目参照', sources: ['curriculum', 'textbook', 'textReference'], note: '训练区显示教材通行的《逍遥游》完整篇目文本；文本参照层仅用于阅读与字句比对，不作为默写标准答案或正式判分依据。' }
};

const FULL_PASSAGES = {
  ...(window.WENYAN_FULL_PASSAGES || {}),
  ...(window.WENYAN_SAMPLE_FULL_PASSAGES || {})
};

const EXPANSION_PASSAGES = window.WENYAN_EXPANSION_PASSAGES || [];
const EXPANSION_ITEMS = EXPANSION_PASSAGES.flatMap((passage) => passage.cards.map((card, index) => ({
  ...card,
  id: `exp-${passage.id}-${index + 1}`,
  passageId: passage.id,
  family: `信源扩充-${passage.title.replace(/^《|》$/g, '')}`,
  source: 'WB 信源库 · 原创训练',
  passageTitle: passage.title,
  passageExcerpt: passage.text,
  passageText: FULL_PASSAGES[passage.id] || passage.text
})));

ITEMS.push(...EXPANSION_ITEMS);
EXPANSION_PASSAGES.forEach((passage) => {
  PASSAGE_SOURCE[passage.id] = {
    title: 'WB 信源库扩充语境训练',
    sources: ['curriculum', 'textbook', 'textReference'],
    note: `依据《${passage.title.replace(/^《|》$/g, '')}》的信源库文本参照层整理；训练区显示对应篇目的完整原文，卡片为原创训练。`,
    author: passage.author,
    contentType: passage.contentType,
    rangeLabel: passage.rangeLabel,
    textbookStatus: passage.textbookStatus,
    sourceFile: passage.sourceFile
  };
});

ITEMS.forEach((item) => {
  item.passageExcerpt = item.passageExcerpt || item.passageText;
  item.passageText = FULL_PASSAGES[item.passageId] || item.passageText;
  const passageSource = PASSAGE_SOURCE[item.passageId] || PASSAGE_SOURCE['passage-chen-she'];
  item.identity = 'original_training';
  item.identityLabel = '原创训练';
  item.status = 'published';
  item.sourceId = passageSource.sources.join('+');
  item.sourceLevel = passageSource.sources.map((id) => SOURCE_CATALOG[id].level).join(' · ');
  item.sourceFile = passageSource.sourceFile || passageSource.sources.map((id) => SOURCE_CATALOG[id].file).join('；');
  item.designBasis = SOURCE_CATALOG.officialReview.file;
  item.verification = `逐条核对题面、解析与对应篇目片段；训练卡型参考上海高考官方评析的能力描述。${SOURCE_CATALOG.textbook.verification}`;
  item.rangeLabel = passageSource.rangeLabel || '教材语境训练';
  item.textbookStatus = passageSource.textbookStatus || '教材语境';
  item.contentType = passageSource.contentType || '文言文';
  item.usageScope = `日常闪卡训练；${item.rangeLabel}；不得当作上海高考真题原题或官方标准答案。`;
  item.sourceNote = `${passageSource.note} 卡型依据：${SOURCE_CATALOG.officialReview.label}。`;
});

const PASSAGE_IDS = [...new Set(ITEMS.map((item) => item.passageId))];
const PASSAGE_OPTION_COUNT = Math.min(5, PASSAGE_IDS.length);

const SKILLS = ['词句理解', '翻译', '信息与人物', '结构与论证', '观点与表达', '诗歌鉴赏'];
const DEFAULT_STATE = {
  schemaVersion: 1,
  attempts: [],
  reviewStates: {},
  exposures: {},
  flags: {},
  sessions: [],
  resumeSession: null,
  passagePicker: null,
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

function shuffle(items) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

function passageSetKey(ids = []) {
  return [...ids].sort().join('|');
}

function createPassageOptions(previousIds = []) {
  const previousKey = passageSetKey(previousIds);
  let next = shuffle(PASSAGE_IDS).slice(0, PASSAGE_OPTION_COUNT);
  let attempts = 0;
  while (passageSetKey(next) === previousKey && PASSAGE_IDS.length > PASSAGE_OPTION_COUNT && attempts < 12) {
    next = shuffle(PASSAGE_IDS).slice(0, PASSAGE_OPTION_COUNT);
    attempts += 1;
  }
  return next;
}

function ensurePassageOptions() {
  const savedIds = state.passagePicker?.ids;
  const valid = Array.isArray(savedIds)
    && savedIds.length === PASSAGE_OPTION_COUNT
    && new Set(savedIds).size === savedIds.length
    && savedIds.every((id) => PASSAGE_IDS.includes(id));
  if (!valid) {
    state.passagePicker = { ids: createPassageOptions(), refreshedAt: Date.now() };
  }
  return state.passagePicker.ids;
}

function passageInfo(passageId) {
  const items = ITEMS.filter((item) => item.passageId === passageId);
  const first = items[0];
  if (!first) return null;
  const completed = state.attempts.filter((attempt) => attempt.articleFamily === first.family && !attempt.skipped).length;
  const due = items.filter((item) => state.reviewStates[item.id]?.dueAt <= Date.now()).length;
  return {
    id: passageId,
    title: first.passageTitle.replace(/片段$/, '').trim(),
    family: first.family.replace(/^(教材样例|信源扩充)-/, ''),
    text: first.passageExcerpt || first.passageText,
    itemCount: items.length,
    completed,
    due,
    sourceLevel: first.sourceLevel,
    contentType: first.contentType,
    author: PASSAGE_SOURCE[passageId]?.author || '项目原有语料',
    rangeLabel: first.rangeLabel,
    textbookStatus: first.textbookStatus,
    note: PASSAGE_SOURCE[passageId]?.note || '依据当前已核验的教材语境设计。'
  };
}

function renderPassagePicker() {
  const container = $('#passage-options');
  if (!container) return;
  const ids = ensurePassageOptions();
  container.innerHTML = '';
  ids.map(passageInfo).filter(Boolean).forEach((passage, index) => {
    const card = document.createElement('article');
    card.className = 'passage-option-card';
    card.setAttribute('role', 'listitem');

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'passage-option';
    button.dataset.passageId = passage.id;
    button.setAttribute('aria-label', `选择${passage.title}进行篇目训练`);

    const head = document.createElement('span');
    head.className = 'passage-option-head';
    const number = document.createElement('span');
    number.className = 'passage-option-number';
    number.textContent = String(index + 1).padStart(2, '0');
    const source = document.createElement('span');
    source.className = 'passage-option-source';
    source.textContent = `${passage.contentType} · ${passage.author} · ${passage.rangeLabel}`;
    head.append(number, source);

    const title = document.createElement('strong');
    title.className = 'passage-option-title';
    title.textContent = passage.title;

    const excerpt = document.createElement('span');
    excerpt.className = 'passage-option-excerpt';
    excerpt.textContent = passage.text;

    const foot = document.createElement('span');
    foot.className = 'passage-option-foot';
    const status = passage.completed
      ? `已练 ${Math.min(passage.completed, passage.itemCount)}/${passage.itemCount} 张`
      : '尚未开始';
    const due = passage.due ? ` · ${passage.due} 张待复习` : '';
    foot.textContent = `${status}${due}`;

    button.append(head, title, excerpt, foot);
    card.append(button);
    container.append(card);
  });
  const note = $('#passage-picker-note');
  if (note) note.textContent = `从当前已入库的 ${PASSAGE_IDS.length} 篇文言文与诗歌语料中抽取 ${PASSAGE_OPTION_COUNT} 篇；选中后会连续练习这篇的全部训练卡。`;
}

async function refreshPassageOptions() {
  const current = state.passagePicker?.ids || [];
  state.passagePicker = { ids: createPassageOptions(current), refreshedAt: Date.now() };
  await persistState();
  renderPassagePicker();
  announce(`已换一批 ${PASSAGE_OPTION_COUNT} 篇可选古文。`);
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
    state = { ...cloneDefault(), ...saved, attempts: saved.attempts || [], reviewStates: saved.reviewStates || {}, exposures: saved.exposures || {}, flags: saved.flags || {}, sessions: saved.sessions || [], resumeSession: saved.resumeSession || null, passagePicker: saved.passagePicker || null };
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

function buildQueue(mode = 'default') {
  const due = dueItems().sort((a, b) => (state.reviewStates[a.id]?.dueAt || 0) - (state.reviewStates[b.id]?.dueAt || 0));
  const flagged = ITEMS.filter((item) => state.flags[item.id] && !due.includes(item)).sort((a, b) => (state.flags[a.id]?.flaggedAt || 0) - (state.flags[b.id]?.flaggedAt || 0));
  const fresh = unseenItems().sort((a, b) => a.estimatedSec - b.estimatedSec);
  const fallback = ITEMS.filter((item) => !due.includes(item) && !fresh.includes(item)).sort((a, b) => {
    const aState = state.reviewStates[a.id] || {};
    const bState = state.reviewStates[b.id] || {};
    return (aState.lastAttemptAt || 0) - (bState.lastAttemptAt || 0);
  });
  let result = [];
  [...due, ...flagged, ...fresh, ...fallback].forEach((item) => { if (!result.includes(item)) result.push(item); });
  if (mode === 'quick') return result.slice(0, 1);
  if (mode === 'read') {
    const firstByPassage = [];
    result.forEach((item) => { if (!firstByPassage.some((candidate) => candidate.passageId === item.passageId)) firstByPassage.push(item); });
    return firstByPassage.slice(0, 2);
  }
  return result.slice(0, 4);
}

function buildPassageQueue(passageId) {
  const items = ITEMS.filter((item) => item.passageId === passageId);
  const due = items.filter((item) => state.reviewStates[item.id]?.dueAt <= Date.now())
    .sort((a, b) => (state.reviewStates[a.id]?.dueAt || 0) - (state.reviewStates[b.id]?.dueAt || 0));
  const flagged = items.filter((item) => state.flags[item.id] && !due.includes(item));
  const rest = items.filter((item) => !due.includes(item) && !flagged.includes(item))
    .sort((a, b) => (state.reviewStates[a.id]?.lastAttemptAt || 0) - (state.reviewStates[b.id]?.lastAttemptAt || 0));
  return [...due, ...flagged, ...rest];
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
  const passageCount = $('#passage-count');
  const itemCount = $('#item-count');
  if (passageCount) passageCount.textContent = PASSAGE_IDS.length;
  if (itemCount) itemCount.textContent = ITEMS.length;
  $('#yesterday-count').textContent = yesterdayCount;
  $('#today-progress').value = progress;
  $('#today-progress').style.setProperty('--value', progress);
  $('#today-progress-label').textContent = `${progress}%`;
  $('#session-estimate').textContent = `约 ${calculateEstimate(buildQueue())} 分钟`;
  $('#session-note').textContent = fresh.length ? '今天的新卡不会在本次结束时立即计入掌握。' : '到期复习优先；换一篇文章再做一次，才算真正的延迟检查。';
  const continueButton = $('#continue-session');
  const continueCopy = $('#continue-session-copy');
  if (continueButton && continueCopy) {
    const resume = state.resumeSession;
    continueButton.disabled = !resume;
    continueCopy.textContent = resume ? `还剩 ${Math.max(1, resume.queueIds.length - resume.index)} 张卡` : '没有未完成训练';
    continueButton.setAttribute('aria-disabled', String(!resume));
  }
  renderStreak();
  renderSkills();
  renderHistory();
  renderPassagePicker();
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
    const attempts = recent.filter((attempt) => attempt.skill === skill && !attempt.skipped);
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
    span.textContent = `${formatDate(dateKey(new Date(attempt.submittedAt)))} · ${attempt.skipped ? '跳过待复核' : (attempt.delayed ? '延迟复测' : '首次练习')} · ${attempt.scoring === 'objective' ? '客观题' : '自评题'}`;
    main.append(strong, span);
    const grade = document.createElement('span');
    grade.className = 'attempt-grade';
    grade.textContent = attempt.skipped ? '已跳过' : (['完全不会', '有印象', '基本掌握', '非常熟练'][attempt.grade] || '已记录');
    li.append(main, grade);
    list.append(li);
  });
}

function startSession(mode = 'default', passageId = null) {
  let queue;
  let resume = null;
  if (mode === 'continue' && state.resumeSession) {
    resume = state.resumeSession;
    queue = resume.queueIds.map(getItem).filter(Boolean);
    if (!queue.length) {
      state.resumeSession = null;
      persistState();
      renderDashboard();
      announce('上次训练的内容已不在当前内容版本中。');
      return;
    }
  } else if (mode === 'passage' && passageId) {
    queue = buildPassageQueue(passageId);
  } else {
    queue = buildQueue(mode);
  }
  if (!queue.length) {
    announce('暂时没有可安排的任务。');
    return;
  }
  session = {
    queue,
    index: resume ? Math.min(resume.index, queue.length - 1) : 0,
    startedAt: Date.now(),
    completed: resume?.completed || 0,
    correct: resume?.correct || 0,
    current: null,
    saved: false,
    mode,
    passageId: resume?.passageId || passageId
  };
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
  $('#session-mode').textContent = session.passageId ? '篇目训练' : (state.reviewStates[item.id] ? '到期复习' : '新的内容');
  $('#session-time').textContent = `约 ${calculateEstimate(session.queue.slice(session.index))} 分钟`;
  const sessionProgress = Math.round((session.index / total) * 100);
  $('#session-progress-bar').style.width = `${sessionProgress}%`;
  $('.progress-track').setAttribute('aria-valuenow', String(sessionProgress));
  $('#question-kicker').textContent = `QUESTION ${String(session.index + 1).padStart(2, '0')}`;
  $('#item-source').textContent = `${item.identityLabel} · ${item.contentType} · ${item.rangeLabel}`;
  $('#item-type').textContent = item.typeLabel;
  $('#passage-title').textContent = item.passageTitle.replace(/片段$/, '').trim();
  $('#passage-text').textContent = item.passageText;
  $('#item-source-note').textContent = `${item.sourceNote} ${item.usageScope}`;
  $('#passage-text').hidden = false;
  $('#toggle-context').textContent = '收起原文';
  $('#session-title').textContent = item.title;
  $('#answer-area').innerHTML = '';
  $('#answer-hint').textContent = item.promptHint || '先凭自己的判断作答，再查看解析。';
  $('#feedback-panel').classList.add('is-hidden');
  $('#flag-question').disabled = false;
  $('#skip-card').disabled = false;
  $('#flag-question').textContent = state.flags[item.id] ? '已标记疑问' : '答案有疑问';
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

async function saveGrade(grade, options = {}) {
  if (!session || !session.current.submitted || session.current.grade !== null) return;
  const item = session.current.item;
  session.current.grade = grade;
  session.current.skipped = Boolean(options.skipped);
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
    noHint: isNoHint && !options.skipped,
    grade,
    skipped: Boolean(options.skipped),
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
  if (options.skipped) $('#feedback-note').textContent = '已跳过并安排明天再看；这次不计入掌握。';
  $('#skip-card').disabled = true;
  const next = document.createElement('button');
  next.type = 'button'; next.className = 'secondary-button next-button'; next.textContent = session.index === session.queue.length - 1 ? '查看今日总结 →' : '下一题 →';
  next.addEventListener('click', advanceSession, { once: true });
  $('#feedback-panel').append(next);
  announce(options.skipped ? '已跳过这张卡，明天再看。' : `已记录：${['完全不会', '有印象', '基本掌握', '非常熟练'][grade]}。${interval} 天后复习。`);
}

async function flagCurrentQuestion() {
  if (!session?.current?.item) return;
  const item = session.current.item;
  state.flags[item.id] = { itemId: item.id, flaggedAt: Date.now(), sourceId: item.sourceId, reason: 'learner_question' };
  await persistState();
  $('#flag-question').textContent = '已标记疑问';
  $('#flag-question').disabled = true;
  $('#feedback-note').textContent = '已记录你的疑问，后续复核时会优先保留这张卡。';
  announce('已标记答案有疑问。');
}

function skipCurrentQuestion() {
  if (!session?.current?.submitted) return;
  saveGrade(0, { skipped: true });
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
  const resumeIndex = session.current && session.current.grade !== null ? session.index + 1 : session.index;
  if (partial && resumeIndex < session.queue.length) {
    state.resumeSession = { queueIds: session.queue.map((item) => item.id), index: resumeIndex, completed: session.completed, correct: session.correct, passageId: session.passageId || null, savedAt: Date.now() };
  } else {
    state.resumeSession = null;
  }
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
    state = { ...cloneDefault(), ...incoming, reviewStates: incoming.reviewStates || {}, exposures: incoming.exposures || {}, flags: incoming.flags || {}, resumeSession: incoming.resumeSession || null, passagePicker: incoming.passagePicker || null };
    ensurePassageOptions();
    await persistState();
    renderDashboard(); renderRecords();
    announce('备份已导入。');
  } catch {
    announce('备份文件无法读取，当前记录没有变化。');
  }
}

function wireEvents() {
  $$('[data-view]').forEach((button) => button.addEventListener('click', () => setView(button.dataset.view)));
  $('#start-session').addEventListener('click', () => startSession('three'));
  $$('[data-start-mode]').forEach((button) => button.addEventListener('click', () => {
    if (button.disabled) return;
    startSession(button.dataset.startMode);
  }));
  $('#refresh-passages').addEventListener('click', refreshPassageOptions);
  $('#passage-options').addEventListener('click', (event) => {
    const button = event.target.closest('.passage-option');
    if (!button) return;
    startSession('passage', button.dataset.passageId);
  });
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
  $('#flag-question').addEventListener('click', flagCurrentQuestion);
  $('#skip-card').addEventListener('click', skipCurrentQuestion);
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
  const previousPassagePicker = state.passagePicker?.ids?.join('|') || '';
  ensurePassageOptions();
  if (state.passagePicker?.ids?.join('|') !== previousPassagePicker) await persistState();
  renderDashboard();
  renderRecords();
}

init();
