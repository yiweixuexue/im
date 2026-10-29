import type { ProductPhoto } from "../components/product-gallery";

export type ClothingType = "qipao" | "women" | "men" | "ceremony";
export type ClothingOccasion = "everyday" | "celebration" | "formal";

export const clothingTypes: { id: ClothingType; label: string }[] = [
  { id: "qipao", label: "旗袍与礼服" },
  { id: "women", label: "女士新中式" },
  { id: "men", label: "男士定制" },
  { id: "ceremony", label: "婚礼与双人造型" },
];
export const clothingOccasions: { id: ClothingOccasion; label: string }[] = [
  { id: "everyday", label: "日常与通勤" },
  { id: "celebration", label: "婚礼、宴会与纪念" },
  { id: "formal", label: "正式与商务" },
];

export type BespokeWork = {
  id: string;
  title: string;
  image: string;
  images: ProductPhoto[];
  alt: string;
  type: ClothingType;
  occasions: ClothingOccasion[];
  category: string;
  bestFor: string;
  choices: string;
  consider: string;
  lookbook: string;
};

export const bespokeWorks: BespokeWork[] = [
  {
    id: "BW-01", title: "月蓝缎面旗袍", category: "旗袍 · 典礼",
    image: "/images/lookbook/qipao-blue.webp", alt: "穿月蓝色缎面旗袍和头纱的女性",
    images: [{ src: "/images/lookbook/qipao-blue.webp", alt: "穿月蓝色缎面旗袍和头纱的女性" }],
    type: "qipao", occasions: ["celebration", "formal"],
    bestFor: "婚礼、宴会与纪念肖像，希望保留东方线条与柔和光泽。",
    choices: "可讨论领高、袖长、衣长、开衩、盘扣及面料的光泽和舒适度。",
    consider: "缎面光泽与贴身线条会突出褶皱；需要结合体态、坐姿和活动量试样确认。",
    lookbook: "qipao",
  },
  {
    id: "BW-02", title: "海棠粉短袖旗袍", category: "旗袍 · 柔和",
    image: "/images/lookbook/qipao-pink.webp", alt: "穿浅粉色短袖旗袍的女性肖像",
    images: [{ src: "/images/lookbook/qipao-pink.webp", alt: "穿浅粉色短袖旗袍的女性肖像" }],
    type: "qipao", occasions: ["celebration", "everyday"],
    bestFor: "家庭纪念、聚会及希望多次穿着的轻正式场合。",
    choices: "可讨论收腰程度、领型、衣长、袖口与颜色。",
    consider: "日常穿着需兼顾抬手、落座与步幅，不应只按站立照片决定版型。",
    lookbook: "qipao",
  },
  {
    id: "BW-03", title: "青黛植物纹旗袍", category: "旗袍 · 长线条",
    image: "/images/lookbook/qipao-green.webp", alt: "穿灰绿色植物纹样长旗袍的女性",
    images: [{ src: "/images/lookbook/qipao-green.webp", alt: "穿灰绿色植物纹样长旗袍的女性" }],
    type: "qipao", occasions: ["celebration", "formal"],
    bestFor: "偏爱低饱和配色、植物纹样与克制正式感的人。",
    choices: "可讨论纹样位置、领型、长度、开衩与面料。",
    consider: "有方向性的纹样需结合身体比例与裁片位置安排，不同面料的垂坠也会改变效果。",
    lookbook: "qipao",
  },
  {
    id: "BW-04", title: "红色婚礼双人造型", category: "婚礼 · 成套",
    image: "/images/lookbook/ceremony-courtyard.webp", alt: "穿红色中式礼服与黑色男装的新人走过花艺门廊",
    images: [
      { src: "/images/lookbook/ceremony-courtyard.webp", alt: "红色婚礼双人造型 · 花艺门廊 / Wedding ensemble in the courtyard" },
      { src: "/images/lookbook/ceremony-kiss.webp", alt: "同套婚礼服装 · 近景 / Close view of the same wedding ensemble" },
      { src: "/images/lookbook/ceremony-portrait.webp", alt: "同件红色礼服 · 肖像 / Portrait in the same red wedding dress" },
      { src: "/images/lookbook/ceremony-celebration.webp", alt: "同套婚礼服装 · 庆典 / Same wedding ensemble during the celebration" },
    ],
    type: "ceremony", occasions: ["celebration"],
    bestFor: "婚礼出门、迎宾、敬酒及需要整体协调的两人造型。",
    choices: "可讨论双方的色彩关系、领口、礼服廓形和适合全天活动的细节。",
    consider: "应先明确仪式环节、场地、天气、拍摄和试衣安排，再确定制作计划。",
    lookbook: "ceremony",
  },
  {
    id: "BW-05", title: "山水刺绣短马甲", category: "女士 · 叠搭",
    image: "/images/lookbook/womens-embroidered-vest.webp", alt: "浅紫色山水刺绣女士新中式马甲",
    images: [{ src: "/images/lookbook/womens-embroidered-vest.webp", alt: "浅紫色山水刺绣女士新中式马甲" }],
    type: "women", occasions: ["everyday", "celebration"],
    bestFor: "希望在衬衫、针织或日常裙装外增加一点东方细节。",
    choices: "可讨论马甲长度、肩宽、衬里、纹样范围和搭配衣橱的颜色。",
    consider: "需兼顾内搭厚度与肩袖活动空间；刺绣位置与工时应单独确认。",
    lookbook: "womenswear",
  },
  {
    id: "BW-06", title: "月白盘扣马甲", category: "女士 · 简洁",
    image: "/images/lookbook/womens-vest-ivory.webp", alt: "带细盘扣与圆形纹样口袋的象牙白色马甲",
    images: [{ src: "/images/lookbook/womens-vest-ivory.webp", alt: "带细盘扣与圆形纹样口袋的象牙白色马甲" }],
    type: "women", occasions: ["everyday", "formal"],
    bestFor: "适合日常上班、聚会，以及想把新中式穿得简单的人。",
    choices: "可讨论衣长、门襟位置、盘扣、口袋和面料厚薄。",
    consider: "浅色面料应考虑透度、耐污及洗护；叠搭时应留出合适余量。",
    lookbook: "womenswear",
  },
  {
    id: "BW-07", title: "花砖暖调短马甲", category: "女士 · 图案",
    image: "/images/lookbook/womens-floral-orange.webp", alt: "暖橙花砖纹样新中式短马甲",
    images: [{ src: "/images/lookbook/womens-floral-orange.webp", alt: "暖橙花砖纹样新中式短马甲" }],
    type: "women", occasions: ["everyday", "celebration"],
    bestFor: "与素色内搭组合，用一件单品形成整身造型的重点。",
    choices: "可讨论纹样配色、衣长、领口、盘扣与是否增加内衬。",
    consider: "强纹样面料的裁切位置和花型对位影响视觉效果，需实物选样。",
    lookbook: "womenswear",
  },
  {
    id: "BW-08", title: "蓝调花纹短马甲", category: "女士 · 冷色",
    image: "/images/lookbook/womens-floral-blue.webp", alt: "蓝色与橙色花砖纹样短马甲",
    images: [{ src: "/images/lookbook/womens-floral-blue.webp", alt: "蓝色与橙色花砖纹样短马甲" }],
    type: "women", occasions: ["everyday", "celebration"],
    bestFor: "喜欢有色彩但不过度正式的日常穿搭。",
    choices: "可讨论配色、门襟形式、衣长以及搭配的衬衫或长裙。",
    consider: "先确认与现有衣橱的搭配，再选择纹样面积与面料。",
    lookbook: "womenswear",
  },
  {
    id: "BW-09", title: "墨色盘扣短外套", category: "男士 · 外套",
    image: "/images/lookbook/womens-jacket-black.webp", alt: "带盘扣和窄滚边的黑色新中式短外套",
    images: [{ src: "/images/lookbook/womens-jacket-black.webp", alt: "带盘扣和窄滚边的黑色新中式短外套" }],
    type: "men", occasions: ["everyday", "formal"],
    bestFor: "希望一件黑色外套适用于通勤、聚会与轻正式场合。",
    choices: "可讨论肩宽、衣长、领型、滚边及盘扣的存在感。",
    consider: "确认计划的内搭厚度、活动幅度及所需保暖程度。",
    lookbook: "menswear",
  },
  {
    id: "BW-10", title: "月白轻薄长袖上衣", category: "女士 · 上衣",
    image: "/images/lookbook/womens-blouse-ivory.webp", alt: "月白色轻薄新中式长袖女上衣",
    images: [{ src: "/images/lookbook/womens-blouse-ivory.webp", alt: "月白色轻薄新中式长袖女上衣" }],
    type: "women", occasions: ["everyday", "formal"],
    bestFor: "日常搭配裤装或半身裙，喜欢轻盈、柔和的穿着感。",
    choices: "可讨论袖量、领高、衣长、透度与面料的垂坠。",
    consider: "轻薄面料的透度、静电与洗护方式需要根据实际材料判断。",
    lookbook: "womenswear",
  },
  {
    id: "BW-11", title: "深色男士正装", category: "男士 · 西装",
    image: "/images/lookbook/mens-formal-suit.webp", alt: "人台上展示的深色男士西装与领带",
    images: [{ src: "/images/lookbook/mens-formal-suit.webp", alt: "人台上展示的深色男士西装与领带" }],
    type: "men", occasions: ["formal", "celebration"],
    bestFor: "婚礼、商务会议和需要干净正式轮廓的场合。",
    choices: "可讨论肩线、驳领、衣长、扣位、裤型与面料。",
    consider: "西装的活动合身与体态关系密切，需确认试衣条件和制作时间。",
    lookbook: "menswear",
  },
  {
    id: "BW-12", title: "男士中式立领外套", category: "男士 · 中式结构",
    image: "/images/lookbook/mens-mandarin-navy.webp", alt: "深蓝色男士中式立领外套挂于衣架",
    images: [{ src: "/images/lookbook/mens-mandarin-navy.webp", alt: "深蓝色男士中式立领外套挂于衣架" }],
    type: "men", occasions: ["formal", "celebration"],
    bestFor: "喜欢更克制的中式正式感，或需要婚礼男装的人。",
    choices: "可讨论领高、门襟、袖口、衣长与内搭关系。",
    consider: "高领与颈部活动、肩背比例有关，应结合动态试样确认。",
    lookbook: "menswear",
  },
  {
    id: "BW-13", title: "灰褐粗花呢西装", category: "男士 · 秋冬",
    image: "/images/lookbook/mens-tweed-jacket.webp", alt: "灰褐色粗花呢男士外套搭配围巾与帽子",
    images: [{ src: "/images/lookbook/mens-tweed-jacket.webp", alt: "灰褐色粗花呢男士外套搭配围巾与帽子" }],
    type: "men", occasions: ["everyday", "formal"],
    bestFor: "秋冬工作、城市行走及希望正式中保留松弛感的人。",
    choices: "可讨论面料重量、肩部结构、衣长、领口及口袋形式。",
    consider: "粗花呢与里布重量影响活动及保暖；需结合季节和体感选择。",
    lookbook: "menswear",
  },
  {
    id: "BW-14", title: "象牙白双排扣西装", category: "男士 · 浅色正装",
    image: "/images/lookbook/mens-ivory-suit.webp", alt: "象牙白条纹双排扣男士西装挂于衣架",
    images: [{ src: "/images/lookbook/mens-ivory-suit.webp", alt: "象牙白条纹双排扣男士西装挂于衣架" }],
    type: "men", occasions: ["celebration", "formal"],
    bestFor: "婚礼、晚宴或需要明亮、轻正式着装的场合。",
    choices: "可讨论双排扣比例、驳领、裤型、面料颜色和里布。",
    consider: "浅色面料的透度与易脏程度，以及面料季节性需要提前确认。",
    lookbook: "menswear",
  },
  {
    id: "BW-15", title: "浅褐单排扣套装", category: "男士 · 轻正式",
    image: "/images/lookbook/mens-beige-suit.webp", alt: "浅褐色男士单排扣套装挂于衣架",
    images: [{ src: "/images/lookbook/mens-beige-suit.webp", alt: "浅褐色男士单排扣套装挂于衣架" }],
    type: "men", occasions: ["everyday", "formal"],
    bestFor: "需要可反复搭配的轻商务和正式休闲服装。",
    choices: "可讨论上衣长度、版型松量、裤型和面料纹理。",
    consider: "优先确认穿着频率、季节及能否与已有衬衫和鞋款组合。",
    lookbook: "menswear",
  },
];
