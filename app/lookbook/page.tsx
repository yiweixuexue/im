import type { Metadata } from "next";
import Link from "next/link";
import { SiteImage } from "../../components/site-image";
import { SiteFooter, SiteHeader } from "../../components/site-shell";

export const metadata: Metadata = {
  title: "Lookbook｜定制作品",
  description: "浏览屮微我从婚礼仪式、旗袍定制到日常新中式的精选作品与手作细节。",
};

const works = [
  {
    title: "相见",
    meta: "婚礼与仪式 · CEREMONY",
    note: "在鼓乐、花枝与旧宅檐影之间，两个人穿着自己的样子，一起走进同一个故事。",
    image: "/images/lookbook/ceremony-celebration.webp",
    alt: "穿着红色礼服与黑色中式男装的新人和舞狮合影",
    size: "feature",
  },
  {
    title: "檐下",
    meta: "婚礼与仪式 · CEREMONY",
    note: "礼服不只在镜头前成立，也应该在真实的行走、回望和笑意里保持分寸。",
    image: "/images/lookbook/ceremony-courtyard.webp",
    alt: "穿着红色礼服与黑色中式男装的新人在花艺门廊前",
    size: "tall",
  },
  {
    title: "一身红",
    meta: "婚礼与仪式 · CEREMONY",
    note: "从出门那一刻开始，颜色先替人表达心意。",
    image: "/images/lookbook/ceremony-portrait.webp",
    alt: "穿红色中式礼服的女性侧身坐姿肖像",
    size: "short",
  },
  {
    title: "月白",
    meta: "旗袍定制 · QIPAO",
    note: "缎面在光线里有自己的起伏，细节不必大声也会被看见。",
    image: "/images/lookbook/qipao-blue.webp",
    alt: "穿着月蓝色缎面旗袍与头纱的女性",
    size: "tall",
  },
  {
    title: "海棠影",
    meta: "旗袍定制 · QIPAO",
    note: "柔粉、立领和轻轻的收腰，留下日常也愿意穿的从容。",
    image: "/images/lookbook/qipao-pink.webp",
    alt: "穿粉色短袖旗袍的女性肖像",
    size: "short",
  },
  {
    title: "青黛",
    meta: "旗袍定制 · QIPAO",
    note: "低饱和的颜色与干净线条，让东方感更接近今天的生活。",
    image: "/images/lookbook/qipao-green.webp",
    alt: "穿灰绿色长款旗袍的女性",
    size: "tall",
  },
  {
    title: "相牵",
    meta: "婚礼与仪式 · CEREMONY",
    note: "袖口与手的距离，是礼服最真实的尺度。",
    image: "/images/lookbook/ceremony-connection.webp",
    alt: "中式礼服袖口与两只牵手的手部细节",
    size: "short",
  },
  {
    title: "花事",
    meta: "造型细节 · DETAIL",
    note: "一枝花、一段绸带，把穿着从轮廓延伸到心意。",
    image: "/images/lookbook/ceremony-floral-detail.webp",
    alt: "红色礼服与花艺手捧的细节",
    size: "tall",
  },
  {
    title: "山色",
    meta: "女士新中式 · EVERYDAY",
    note: "盘扣、肌理和一幅小小的山水，把安静的东方感带进日常。",
    image: "/images/lookbook/womens-embroidered-vest.webp",
    alt: "铺陈在白色布面上的浅紫山水刺绣马甲",
    size: "short",
  },
  {
    title: "有度",
    meta: "男士服装 · MENSWEAR",
    note: "从肩线到领口，克制的结构让正式感保留余地。",
    image: "/images/lookbook/mens-formal-suit.webp",
    alt: "展示在立裁人台上的深灰紫色男士西装",
    size: "square",
  },
  {
    title: "牡丹入手",
    meta: "配饰 · ADORN",
    note: "一只刺绣手袋，把花开时的浓度留在掌心。",
    image: "/images/lookbook/peony-bag-red.webp",
    alt: "黑色背景上的红粉牡丹刺绣手提包",
    size: "square",
  },
  {
    title: "一针",
    meta: "手作细节 · HANDCRAFT",
    note: "针脚落下的地方，时间也留下了自己的纹理。",
    image: "/images/lookbook/handcraft-stitching.webp",
    alt: "手工缝制白色衣料的手部特写",
    size: "square",
  },
  {
    title: "袖口",
    meta: "男士服装 · DETAIL",
    note: "袖扣、里布与一枚小小的签名，构成衣服的内在秩序。",
    image: "/images/lookbook/mens-button-detail.webp",
    alt: "浅色西装袖口上的棕色纽扣细节",
    size: "detail",
  },
  {
    title: "领间",
    meta: "旗袍细节 · COLLAR",
    note: "领型是人与衣服第一次相遇的地方，也最接近气质。",
    image: "/images/lookbook/collar-detail-pink.webp",
    alt: "粉色立领与盘扣刺绣细节",
    size: "detail",
  },
  {
    title: "花成形",
    meta: "手作细节 · HANDCRAFT",
    note: "从一片花瓣到可以佩戴的形状，手工让轻盈拥有骨架。",
    image: "/images/lookbook/handcraft-flower.webp",
    alt: "手工制作红色花朵配饰的工作台细节",
    size: "square",
  },
  {
    title: "发间",
    meta: "配饰 · ADORN",
    note: "一枚发饰不抢先说话，只在转身时留下光。",
    image: "/images/lookbook/adornment-hairpin.webp",
    alt: "女性发髻上的银色花朵发饰",
    size: "short",
  },
  {
    title: "一枚花",
    meta: "配饰 · ADORN",
    note: "花朵、衣料与身体靠近之后，配饰才真正完成。",
    image: "/images/lookbook/adornment-brooch.webp",
    alt: "红色中式礼服上的花朵胸针",
    size: "tall",
  },
  {
    title: "随身之物",
    meta: "日用配饰 · EVERYDAY",
    note: "把祝愿做成可以带在身边的小物，日常也有被照看的时刻。",
    image: "/images/lookbook/everyday-pendant.webp",
    alt: "白色背景上的醒狮刺绣挂饰",
    size: "square",
  },
];

export default function LookbookPage() {
  return (
    <div className="site-page lookbook-page" lang="zh-CN">
      <SiteHeader market="cn" tone="paper" />
      <main id="main-content">
        <section className="paper-hero shell lookbook-hero">
          <p className="eyebrow">LOOKBOOK · SELECTED WORKS</p>
          <h1>每一件衣裳，<br />都因一个真实的人而完整。</h1>
          <p>从仪式礼服到日常新中式，我们记录的不只是成衣，也记录衣服怎样进入身体、关系与生活。</p>
        </section>

        <section className="lookbook-index shell" aria-label="作品范围">
          <p>婚礼仪式 · 旗袍定制 · 女士新中式 · 男士服装 · 手作与配饰</p>
          <span>18 SELECTED STUDIES · 2026</span>
        </section>

        <section className="lookbook-gallery shell" aria-label="精选作品">
          {works.map((work, index) => (
            <article className={`gallery-work ${work.size}`} key={work.title}>
              <figure className="gallery-image">
                <SiteImage
                  src={work.image}
                  alt={work.alt}
                  loading={index > 0 ? "lazy" : undefined}
                  decoding="async"
                  fetchPriority={index === 0 ? "high" : "auto"}
                />
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              </figure>
              <div className="gallery-caption">
                <p>{work.meta}</p>
                <h2>{work.title}</h2>
                <p>{work.note}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="lookbook-note section-space">
          <div className="shell">
            <p className="eyebrow">REAL PEOPLE · REAL STORIES</p>
            <h2>真实的穿着，<br />比完美的造型更有力量。</h2>
            <p>你的需求不需要先被整理成专业语言。带来场合、日期和真实困扰，我们从一次 15 分钟灵感对谈开始。</p>
            <Link className="button button-paper" href="/contact#wechat">预约定制对谈</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
