import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../components/site-shell";

export const metadata: Metadata = {
  title: "Lookbook｜定制作品",
  description: "浏览屮微我旗袍、婚礼礼服、女士新中式、男士服装与手工细节。",
};

const works = [
  {
    title: "相见",
    meta: "婚礼与仪式 · CEREMONY",
    note: "两个人不必穿成同一种风格，也可以在材质、色彩和分寸上彼此呼应。",
    image: "/images/site/custom-ceremony.webp",
    alt: "屮微我中式婚礼旗袍与男士正装",
    size: "wide",
  },
  {
    title: "兰影",
    meta: "旗袍定制 · QIPAO",
    note: "线条安静地跟随身体，让正式感不以牺牲舒适为代价。",
    image: "/images/lookbook-women.webp",
    alt: "黑色长款旗袍造型",
    size: "tall",
  },
  {
    title: "一件真丝上衣",
    meta: "女士新中式 · EVERYDAY",
    note: "盘扣、斜襟和轻盈面料，不只属于节日，也进入日常衣橱。",
    image: "/images/site/silk-jacket.webp",
    alt: "粉色真丝新中式女士上衣",
    size: "short",
  },
  {
    title: "见山",
    meta: "男士服装 · MENSWEAR",
    note: "克制的立领与宽松结构，为当代生活保留东方气韵。",
    image: "/images/site/blue-shirt.webp",
    alt: "蓝色棉麻新中式男士上衣",
    size: "short",
  },
  {
    title: "手作的时间",
    meta: "缠花细节 · HANDCRAFT",
    note: "当细小的丝线、花瓣和手势被保留下来，衣着也有了可被记住的温度。",
    image: "/images/site/chanhua-worn.webp",
    alt: "佩戴在新中式服装上的传统缠花饰品",
    size: "tall",
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
          <p>旗袍 · 婚礼礼服 · 女士新中式 · 男士服装 · 手作细节</p>
          <span>SELECTED STUDIES · 2026</span>
        </section>

        <section className="lookbook-gallery shell">
          {works.map((work, index) => (
            <article className={`gallery-work ${work.size}`} key={work.title}>
              <figure className="gallery-image">
                <img src={work.image} alt={work.alt} loading={index > 0 ? "lazy" : undefined} />
                <span aria-hidden="true">0{index + 1}</span>
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
