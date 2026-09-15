export type CollectionGroup = "service" | "product";
export type StudyLayout = "tall" | "short" | "square";

export type CollectionStudy = {
  title: string;
  note: string;
  image: string;
  alt: string;
  layout: StudyLayout;
};

export type LookbookCollection = {
  slug: string;
  number: string;
  group: CollectionGroup;
  kind: string;
  eyebrow: string;
  title: string;
  english: string;
  deck: string;
  cover: {
    image: string;
    alt: string;
    position?: string;
  };
  storyTitle: string;
  story: string[];
  facts: Array<{ label: string; value: string }>;
  studies: CollectionStudy[];
};

export const lookbookCollections: LookbookCollection[] = [
  {
    slug: "ceremony",
    number: "01",
    group: "service",
    kind: "场合与整体定制",
    eyebrow: "CEREMONY & WEDDING",
    title: "婚礼与仪式",
    english: "Ceremony",
    deck: "从出门、迎宾到敬酒，把两个人的衣着、动作与婚礼空间放进同一个叙事。",
    cover: {
      image: "/images/lookbook/ceremony-celebration.webp",
      alt: "穿着红色礼服与黑色中式男装的新人和舞狮合影",
      position: "center 46%",
    },
    storyTitle: "礼服不是独立的一件衣服，\n它要进入一整天的关系与行动。",
    story: [
      "婚礼定制从来不只是选择一件红色礼服。我们会一起考虑仪式节奏、场地光线、两人的身形与气质，以及衣服在行走、拥抱、落座和合影时的状态。",
      "新娘旗袍、新郎正装与随身配饰可以独立表达，也可以在色彩、领型与手作细节上彼此回应，让重要的一天完整而不刻意。",
    ],
    facts: [
      { label: "适合场景", value: "出门 · 迎宾 · 典礼 · 敬酒 · 合影" },
      { label: "可定制", value: "新娘旗袍 · 新郎正装 · 手作配饰" },
      { label: "服务重点", value: "双人风格关系、场地色彩与动态合身" },
    ],
    studies: [
      {
        title: "檐下",
        note: "旧宅、花枝与并肩而行的两个人，让礼服进入真实的空间。",
        image: "/images/lookbook/ceremony-courtyard.webp",
        alt: "穿着红色礼服与黑色中式男装的新人走过花艺门廊",
        layout: "tall",
      },
      {
        title: "一身红",
        note: "颜色先抵达，人的神情与姿态随后让它安静下来。",
        image: "/images/lookbook/ceremony-portrait.webp",
        alt: "穿红色中式礼服的女性侧身坐姿肖像",
        layout: "short",
      },
      {
        title: "相牵",
        note: "袖口与手的距离，是礼服最真实的尺度。",
        image: "/images/lookbook/ceremony-connection.webp",
        alt: "中式礼服袖口与两只牵手的手部细节",
        layout: "square",
      },
      {
        title: "花事",
        note: "一枝花、一段绸带，把穿着延伸到整场仪式的心意。",
        image: "/images/lookbook/ceremony-floral-detail.webp",
        alt: "红色礼服与花艺手捧的细节",
        layout: "square",
      },
      {
        title: "相吻",
        note: "衣服退到关系之后，留下一个只属于两个人的片刻。",
        image: "/images/lookbook/ceremony-kiss.webp",
        alt: "穿红色旗袍与黑色中式男装的新人相吻",
        layout: "square",
      },
      {
        title: "入礼",
        note: "走进仪式时，衣摆、花束与台阶一起形成了画面。",
        image: "/images/lookbook/ceremony-entrance.webp",
        alt: "穿红色礼服与黑色正装的新人步入中式婚礼场地",
        layout: "tall",
      },
      {
        title: "共舞",
        note: "正式的一天也需要轻盈，衣服应该允许身体自在移动。",
        image: "/images/lookbook/ceremony-first-dance.webp",
        alt: "新人在婚礼晚宴上共舞",
        layout: "short",
      },
    ],
  },
  {
    slug: "qipao",
    number: "02",
    group: "service",
    kind: "女士一对一定制",
    eyebrow: "BESPOKE QIPAO",
    title: "旗袍定制",
    english: "Qipao",
    deck: "从领型、袖长到面料与盘扣，在身体与场合之间找到属于你的分寸。",
    cover: {
      image: "/images/lookbook/qipao-blue.webp",
      alt: "穿月蓝色缎面旗袍与头纱的女性",
      position: "center 35%",
    },
    storyTitle: "旗袍的线条越简洁，\n越需要准确地理解穿衣的人。",
    story: [
      "我们不会先从一个固定款式开始，而是先看穿着场合、身体比例、活动方式，以及你希望被看见或被保留的部分。领高、肩线、开衩与长度都因此有不同答案。",
      "面料的光泽、纹样的密度和盘扣的位置共同决定一件旗袍的语气。最终的目标不是复制某个年代，而是让东方线条自然地属于今天的你。",
    ],
    facts: [
      { label: "适合场景", value: "婚礼 · 敬酒 · 宴会 · 纪念肖像" },
      { label: "可定制", value: "领型 · 袖型 · 长度 · 面料 · 盘扣" },
      { label: "服务方式", value: "一对一风格设计、量体与毛坯试样" },
    ],
    studies: [
      {
        title: "海棠影",
        note: "柔粉与轻轻的收腰，留下日常也愿意穿的从容。",
        image: "/images/lookbook/qipao-pink.webp",
        alt: "穿粉色短袖旗袍的女性肖像",
        layout: "tall",
      },
      {
        title: "青黛",
        note: "低饱和颜色与干净线条，让东方感更接近今天的生活。",
        image: "/images/lookbook/qipao-green.webp",
        alt: "穿灰绿色长款旗袍的女性",
        layout: "short",
      },
      {
        title: "领间",
        note: "领型最接近面部，也最先决定一件旗袍的气质。",
        image: "/images/lookbook/collar-detail-pink.webp",
        alt: "粉色立领与盘扣刺绣细节",
        layout: "square",
      },
      {
        title: "靛蓝成形",
        note: "深蓝色把轮廓收得安静，长线条保留正式感。",
        image: "/images/lookbook/qipao-blue-form.webp",
        alt: "人台上展示的深蓝色长款旗袍",
        layout: "square",
      },
      {
        title: "绿意成形",
        note: "植物纹样沿着身体延展，远看克制，近看丰富。",
        image: "/images/lookbook/qipao-green-form.webp",
        alt: "人台上展示的灰绿色植物纹样旗袍",
        layout: "square",
      },
      {
        title: "粉色长线",
        note: "光线越柔，面料与刺绣的层次越需要经得起靠近。",
        image: "/images/lookbook/qipao-pink-form.webp",
        alt: "人台上展示的浅粉色长款旗袍",
        layout: "tall",
      },
      {
        title: "一粒珠",
        note: "花瓣形领口与一粒珠扣，让红色有了更轻的节奏。",
        image: "/images/lookbook/collar-detail-red.webp",
        alt: "红色花瓣形立领与珍珠盘扣细节",
        layout: "short",
      },
    ],
  },
  {
    slug: "womenswear",
    number: "03",
    group: "product",
    kind: "产品系列",
    eyebrow: "WOMEN'S NEW CHINESE",
    title: "女士新中式",
    english: "Womenswear",
    deck: "马甲、短衫与轻外套，把纹样、盘扣和当代衣橱放在一起。",
    cover: {
      image: "/images/lookbook/womens-embroidered-vest.webp",
      alt: "铺陈在白色布面上的浅紫山水刺绣马甲",
    },
    storyTitle: "新中式不必只在节日出现，\n它可以成为每天都会拿起的一件衣服。",
    story: [
      "女士日常系列从可搭配和可复穿出发。我们保留立领、斜襟、盘扣与织锦的文化辨识度，同时控制纹样面积、体量和正式程度。",
      "一件马甲可以叠在衬衫或针织外，一件短衫也可以与牛仔裤相处。东方审美不是附加的符号，而是进入真实衣橱之后仍然自然的结构与气息。",
    ],
    facts: [
      { label: "产品方向", value: "马甲 · 短衫 · 外套 · 套装" },
      { label: "适合场景", value: "通勤 · 聚会 · 节日 · 日常叠搭" },
      { label: "设计重点", value: "可搭配、可复穿与不过度符号化" },
    ],
    studies: [
      {
        title: "花砖暖调",
        note: "温暖花色集中在短马甲上，成为素色衣橱里的一个亮点。",
        image: "/images/lookbook/womens-floral-orange.webp",
        alt: "暖橙色花砖纹样女士新中式短马甲",
        layout: "tall",
      },
      {
        title: "花砖蓝调",
        note: "同一种结构换成冷色，气质从热烈转向清新。",
        image: "/images/lookbook/womens-floral-blue.webp",
        alt: "蓝橙花砖纹样女士新中式短马甲",
        layout: "short",
      },
      {
        title: "织锦马甲",
        note: "密集纹样用利落轮廓收住，适合与简单内搭组合。",
        image: "/images/lookbook/womens-vest-brocade.webp",
        alt: "多色织锦花纹女士新中式马甲",
        layout: "square",
      },
      {
        title: "月白马甲",
        note: "圆形织锦口袋与细盘扣，只留下轻轻的东方线索。",
        image: "/images/lookbook/womens-vest-ivory.webp",
        alt: "月白色女士新中式马甲与圆形织锦口袋",
        layout: "square",
      },
      {
        title: "墨色短衫",
        note: "深色、窄滚边与传统结构，安静地建立轮廓。",
        image: "/images/lookbook/womens-jacket-black.webp",
        alt: "黑色女士新中式盘扣短外套",
        layout: "square",
      },
      {
        title: "金线盘扣",
        note: "把装饰留在胸前的小范围，近看才发现完整纹样。",
        image: "/images/lookbook/womens-jacket-gold.webp",
        alt: "黑色女士新中式上衣的金线纹样与盘扣细节",
        layout: "tall",
      },
      {
        title: "月白上衣",
        note: "轻薄面料与柔和袖量，让立领也能进入松弛的日常。",
        image: "/images/lookbook/womens-blouse-ivory.webp",
        alt: "月白色轻薄女士新中式长袖上衣",
        layout: "short",
      },
    ],
  },
  {
    slug: "menswear",
    number: "04",
    group: "service",
    kind: "男士一对一定制",
    eyebrow: "MEN'S BESPOKE",
    title: "男士定制",
    english: "Menswear",
    deck: "从中式立领到当代西装，用肩线、比例和细节建立克制的正式感。",
    cover: {
      image: "/images/lookbook/mens-formal-suit.webp",
      alt: "展示在立裁人台上的深灰紫色男士西装",
    },
    storyTitle: "男士定制的变化很少喧哗，\n却会被肩线、领口与行动感清楚地看见。",
    story: [
      "我们从体态、职业和穿着频率出发，在中式立领、西装结构与更松弛的外套之间选择合适方向。好的正式感不是把人变得僵硬，而是让身体有支撑。",
      "驳领宽度、衣长、扣位与袖口都影响整个人的比例。通过量体与毛坯试样，这些看似微小的决定最终会变成从容和可信赖的外在语言。",
    ],
    facts: [
      { label: "适合场景", value: "婚礼 · 商务 · 宴会 · 纪念场合" },
      { label: "可定制", value: "中式立领 · 西装 · 外套 · 衬衫" },
      { label: "服务方式", value: "体态量体、毛坯试样与细节确认" },
    ],
    studies: [
      {
        title: "袖口",
        note: "纽扣、面料与内里的秩序，构成衣服靠近身体的一面。",
        image: "/images/lookbook/mens-button-detail.webp",
        alt: "浅色西装袖口上的棕色纽扣细节",
        layout: "tall",
      },
      {
        title: "立领",
        note: "简洁的中式领型让正式感集中在面部与肩部。",
        image: "/images/lookbook/mens-mandarin-navy.webp",
        alt: "衣架上展示的深蓝色男士中式立领外套",
        layout: "short",
      },
      {
        title: "粗花呢",
        note: "纹理与柔和肩线，让秋冬外套在正式之外保留温度。",
        image: "/images/lookbook/mens-tweed-jacket.webp",
        alt: "人台上展示的灰褐色粗花呢男士西装与帽子",
        layout: "square",
      },
      {
        title: "象牙白",
        note: "双排扣与细条纹收住浅色西装的轻盈。",
        image: "/images/lookbook/mens-ivory-suit.webp",
        alt: "衣架上展示的象牙白细条纹双排扣男士西装",
        layout: "square",
      },
      {
        title: "浅褐套装",
        note: "自然色与单排扣适合更松弛的正式场合。",
        image: "/images/lookbook/mens-beige-suit.webp",
        alt: "衣架上展示的浅褐色男士西装套装",
        layout: "square",
      },
      {
        title: "驳领尺度",
        note: "领宽、扣眼与粗花呢方向共同修正上身比例。",
        image: "/images/lookbook/mens-lapel-detail.webp",
        alt: "灰褐色人字纹男士西装驳领与扣眼细节",
        layout: "tall",
      },
      {
        title: "四枚扣",
        note: "袖口的功能与装饰被压缩到四枚深色纽扣之间。",
        image: "/images/lookbook/mens-cuff-detail.webp",
        alt: "浅灰色西装袖口的四枚深色纽扣细节",
        layout: "short",
      },
    ],
  },
  {
    slug: "handcraft",
    number: "05",
    group: "product",
    kind: "工艺与服务过程",
    eyebrow: "HANDCRAFT & ATELIER",
    title: "手作工艺",
    english: "Handcraft",
    deck: "针脚、疏缝、整烫与版型，把看不见的时间留在每一件衣服里面。",
    cover: {
      image: "/images/lookbook/handcraft-stitching.webp",
      alt: "手工缝制白色衣料的手部特写",
    },
    storyTitle: "手作不是表面的复古感，\n而是衣服在细节处仍然被认真对待。",
    story: [
      "从毛坯试样到正式制作，一件定制服装会经历反复标记、疏缝、拆解、调整与整烫。很多工序最后不会被直接看见，却决定衣服是否顺着身体落下。",
      "盘扣、滚边、刺绣和花饰让手的痕迹留在表面；内里的收口、衬布与缝份则让衣服经得起穿着。工艺的价值，最终落在舒适、耐久与个人感受上。",
    ],
    facts: [
      { label: "包含工艺", value: "手缝 · 疏缝 · 盘扣 · 滚边 · 刺绣 · 整烫" },
      { label: "关注细节", value: "结构稳定、活动余量与内外收口" },
      { label: "工艺意义", value: "用制作时间换取贴身的秩序与耐久" },
    ],
    studies: [
      {
        title: "花成形",
        note: "从一片花瓣到可以佩戴的形状，手工让轻盈拥有骨架。",
        image: "/images/lookbook/handcraft-flower.webp",
        alt: "手工制作红色花朵配饰的工作台细节",
        layout: "tall",
      },
      {
        title: "手中收口",
        note: "细小的缝份在指尖被固定，决定成衣表面的平整。",
        image: "/images/lookbook/handcraft-hand-finishing.webp",
        alt: "双手在灰色布料边缘进行手工收口",
        layout: "short",
      },
      {
        title: "暗色缝线",
        note: "看不见的内侧，同样需要稳定而均匀的针脚。",
        image: "/images/lookbook/handcraft-black-hem.webp",
        alt: "双手在黑色衣料边缘进行手工缝制",
        layout: "square",
      },
      {
        title: "疏缝",
        note: "正式落针之前，先用临时线迹验证布料与结构。",
        image: "/images/lookbook/handcraft-basting.webp",
        alt: "双手在带白色疏缝线的衣料上调整缝份",
        layout: "square",
      },
      {
        title: "花瓣定位",
        note: "每一片立体花饰都需要先在衣料上确定方向与疏密。",
        image: "/images/lookbook/handcraft-flower-applique.webp",
        alt: "双手在红色衣料上排列立体花瓣装饰",
        layout: "square",
      },
      {
        title: "蒸汽与布面",
        note: "整烫不是最后修饰，而是让结构真正成立的一道工序。",
        image: "/images/lookbook/handcraft-pressing.webp",
        alt: "熨斗正在整烫浅色衣料",
        layout: "tall",
      },
      {
        title: "版型留痕",
        note: "不同颜色的毛坯样片，记录着比例与结构被反复确认的过程。",
        image: "/images/lookbook/handcraft-patterns.webp",
        alt: "悬挂排列的多色服装毛坯样片",
        layout: "short",
      },
    ],
  },
  {
    slug: "adorn",
    number: "06",
    group: "product",
    kind: "产品与礼物系列",
    eyebrow: "ADORNMENT & GIFT",
    title: "配饰与礼物",
    english: "Adorn",
    deck: "手袋、发饰、胸针与随身挂饰，让衣着之外的心意也有具体形状。",
    cover: {
      image: "/images/lookbook/peony-bag-red.webp",
      alt: "黑色背景上的红粉牡丹刺绣手提包",
    },
    storyTitle: "小物不需要抢先说话，\n它们在靠近之后完成一身衣着。",
    story: [
      "配饰可以延续服装的颜色与纹样，也可以成为整身造型里唯一的亮点。手袋、发簪、胸针与挂饰因此有不同的分量，却共享同一种克制。",
      "它们也适合承载祝愿：婚礼当天的一枚花、送给重要之人的一只手袋，或陪伴日常的醒狮挂饰。礼物被使用，心意才继续发生。",
    ],
    facts: [
      { label: "产品方向", value: "手袋 · 发簪 · 胸针 · 挂饰 · 礼盒" },
      { label: "适合场景", value: "婚礼配饰 · 节日赠礼 · 日常点缀" },
      { label: "可协同", value: "与服装色彩、面料和场合成套设计" },
    ],
    studies: [
      {
        title: "发间",
        note: "一枚发饰不抢先说话，只在转身时留下光。",
        image: "/images/lookbook/adornment-hairpin.webp",
        alt: "女性发髻上的银色花朵发饰",
        layout: "tall",
      },
      {
        title: "一枚花",
        note: "花朵、衣料与身体靠近之后，配饰才真正完成。",
        image: "/images/lookbook/adornment-brooch.webp",
        alt: "红色中式礼服上的花朵胸针",
        layout: "short",
      },
      {
        title: "随身之物",
        note: "把祝愿做成可以带在身边的小物，日常也有被照看的时刻。",
        image: "/images/lookbook/everyday-pendant.webp",
        alt: "白色背景上的醒狮刺绣挂饰",
        layout: "square",
      },
      {
        title: "蓝牡丹",
        note: "同一只包换成蓝色，花开从热烈变得沉静。",
        image: "/images/lookbook/adorn-peony-bag-blue.webp",
        alt: "黑色背景上的蓝色牡丹刺绣手提包",
        layout: "square",
      },
      {
        title: "郁金香成对",
        note: "两种颜色并置，像是为不同衣着预留的两种语气。",
        image: "/images/lookbook/adornment-tulip-pair.webp",
        alt: "白色背景上的粉色与红色郁金香胸针",
        layout: "square",
      },
      {
        title: "红郁金香",
        note: "单独看见一枚花时，手作的叶脉、花瓣与针脚更清楚。",
        image: "/images/lookbook/adornment-tulip-red.webp",
        alt: "白色背景上的红色郁金香胸针",
        layout: "tall",
      },
      {
        title: "礼物入盒",
        note: "从作品到礼物，最后一道工序是把心意妥帖地交到手中。",
        image: "/images/lookbook/ceremony-gift-box.webp",
        alt: "穿浅绿色中式服装的人从红色礼盒中取出物件",
        layout: "short",
      },
    ],
  },
];

export function getLookbookCollection(slug: string) {
  return lookbookCollections.find((collection) => collection.slug === slug);
}

export const lookbookWorks = [
  {
    title: "相见",
    meta: "婚礼与仪式 · CEREMONY",
    note: "在鼓乐、花枝与旧宅檐影之间，两个人穿着自己的样子，一起走进同一个故事。",
    image: "/images/lookbook/ceremony-celebration.webp",
    alt: "穿着红色礼服与黑色中式男装的新人和舞狮合影",
    size: "feature",
    collection: "ceremony",
  },
  {
    title: "檐下",
    meta: "婚礼与仪式 · CEREMONY",
    note: "礼服不只在镜头前成立，也应该在真实的行走、回望和笑意里保持分寸。",
    image: "/images/lookbook/ceremony-courtyard.webp",
    alt: "穿着红色礼服与黑色中式男装的新人在花艺门廊前",
    size: "tall",
    collection: "ceremony",
  },
  {
    title: "一身红",
    meta: "婚礼与仪式 · CEREMONY",
    note: "从出门那一刻开始，颜色先替人表达心意。",
    image: "/images/lookbook/ceremony-portrait.webp",
    alt: "穿红色中式礼服的女性侧身坐姿肖像",
    size: "short",
    collection: "ceremony",
  },
  {
    title: "月白",
    meta: "旗袍定制 · QIPAO",
    note: "缎面在光线里有自己的起伏，细节不必大声也会被看见。",
    image: "/images/lookbook/qipao-blue.webp",
    alt: "穿着月蓝色缎面旗袍与头纱的女性",
    size: "tall",
    collection: "qipao",
  },
  {
    title: "海棠影",
    meta: "旗袍定制 · QIPAO",
    note: "柔粉、立领和轻轻的收腰，留下日常也愿意穿的从容。",
    image: "/images/lookbook/qipao-pink.webp",
    alt: "穿粉色短袖旗袍的女性肖像",
    size: "short",
    collection: "qipao",
  },
  {
    title: "青黛",
    meta: "旗袍定制 · QIPAO",
    note: "低饱和的颜色与干净线条，让东方感更接近今天的生活。",
    image: "/images/lookbook/qipao-green.webp",
    alt: "穿灰绿色长款旗袍的女性",
    size: "tall",
    collection: "qipao",
  },
  {
    title: "相牵",
    meta: "婚礼与仪式 · CEREMONY",
    note: "袖口与手的距离，是礼服最真实的尺度。",
    image: "/images/lookbook/ceremony-connection.webp",
    alt: "中式礼服袖口与两只牵手的手部细节",
    size: "short",
    collection: "ceremony",
  },
  {
    title: "花事",
    meta: "造型细节 · DETAIL",
    note: "一枝花、一段绸带，把穿着从轮廓延伸到心意。",
    image: "/images/lookbook/ceremony-floral-detail.webp",
    alt: "红色礼服与花艺手捧的细节",
    size: "tall",
    collection: "ceremony",
  },
  {
    title: "山色",
    meta: "女士新中式 · EVERYDAY",
    note: "盘扣、肌理和一幅小小的山水，把安静的东方感带进日常。",
    image: "/images/lookbook/womens-embroidered-vest.webp",
    alt: "铺陈在白色布面上的浅紫山水刺绣马甲",
    size: "short",
    collection: "womenswear",
  },
  {
    title: "有度",
    meta: "男士服装 · MENSWEAR",
    note: "从肩线到领口，克制的结构让正式感保留余地。",
    image: "/images/lookbook/mens-formal-suit.webp",
    alt: "展示在立裁人台上的深灰紫色男士西装",
    size: "square",
    collection: "menswear",
  },
  {
    title: "牡丹入手",
    meta: "配饰 · ADORN",
    note: "一只刺绣手袋，把花开时的浓度留在掌心。",
    image: "/images/lookbook/peony-bag-red.webp",
    alt: "黑色背景上的红粉牡丹刺绣手提包",
    size: "square",
    collection: "adorn",
  },
  {
    title: "一针",
    meta: "手作细节 · HANDCRAFT",
    note: "针脚落下的地方，时间也留下了自己的纹理。",
    image: "/images/lookbook/handcraft-stitching.webp",
    alt: "手工缝制白色衣料的手部特写",
    size: "square",
    collection: "handcraft",
  },
  {
    title: "袖口",
    meta: "男士服装 · DETAIL",
    note: "袖扣、里布与一枚小小的签名，构成衣服的内在秩序。",
    image: "/images/lookbook/mens-button-detail.webp",
    alt: "浅色西装袖口上的棕色纽扣细节",
    size: "detail",
    collection: "menswear",
  },
  {
    title: "领间",
    meta: "旗袍细节 · COLLAR",
    note: "领型是人与衣服第一次相遇的地方，也最接近气质。",
    image: "/images/lookbook/collar-detail-pink.webp",
    alt: "粉色立领与盘扣刺绣细节",
    size: "detail",
    collection: "qipao",
  },
  {
    title: "花成形",
    meta: "手作细节 · HANDCRAFT",
    note: "从一片花瓣到可以佩戴的形状，手工让轻盈拥有骨架。",
    image: "/images/lookbook/handcraft-flower.webp",
    alt: "手工制作红色花朵配饰的工作台细节",
    size: "square",
    collection: "handcraft",
  },
  {
    title: "发间",
    meta: "配饰 · ADORN",
    note: "一枚发饰不抢先说话，只在转身时留下光。",
    image: "/images/lookbook/adornment-hairpin.webp",
    alt: "女性发髻上的银色花朵发饰",
    size: "short",
    collection: "adorn",
  },
  {
    title: "一枚花",
    meta: "配饰 · ADORN",
    note: "花朵、衣料与身体靠近之后，配饰才真正完成。",
    image: "/images/lookbook/adornment-brooch.webp",
    alt: "红色中式礼服上的花朵胸针",
    size: "tall",
    collection: "adorn",
  },
  {
    title: "随身之物",
    meta: "日用配饰 · EVERYDAY",
    note: "把祝愿做成可以带在身边的小物，日常也有被照看的时刻。",
    image: "/images/lookbook/everyday-pendant.webp",
    alt: "白色背景上的醒狮刺绣挂饰",
    size: "square",
    collection: "adorn",
  },
];
