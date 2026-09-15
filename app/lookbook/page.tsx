import type { Metadata } from "next";
import Link from "next/link";
import { SiteImage } from "../../components/site-image";
import { SiteFooter, SiteHeader } from "../../components/site-shell";
import { lookbookCollections, lookbookWorks, type CollectionGroup } from "./collections";

export const metadata: Metadata = {
  title: "Lookbook｜作品合集",
  description: "按婚礼、旗袍、女士新中式、男士定制、手作工艺与配饰礼物，浏览屮微我作品合集。",
};

const collectionGroups: Array<{
  id: string;
  group: CollectionGroup;
  eyebrow: string;
  title: string;
  intro: string;
}> = [
  {
    id: "services",
    group: "service",
    eyebrow: "SERVICE & OCCASION",
    title: "按服务与场合浏览",
    intro: "从一次具体的相见开始：婚礼整体定制、女士旗袍与男士正装，各自拥有不同的设计判断。",
  },
  {
    id: "products",
    group: "product",
    eyebrow: "PRODUCT & CRAFT",
    title: "按产品与工艺浏览",
    intro: "从可进入日常的衣服，到制作过程与随身小物，看见品牌完整的产品语言。",
  },
];

export default function LookbookPage() {
  return (
    <div className="site-page lookbook-page" lang="zh-CN">
      <SiteHeader market="cn" tone="paper" />
      <main id="main-content">
        <section className="paper-hero shell lookbook-hero">
          <p className="eyebrow">LOOKBOOK · CURATED COLLECTIONS</p>
          <h1>从一个合集出发，<br />看见一件衣裳的完整故事。</h1>
          <p>按产品、服务与真实场合进入不同作品合集；每一组都从轮廓延伸到细节、工艺与穿着关系。</p>
        </section>

        <nav className="lookbook-index shell" aria-label="Lookbook 合集导航">
          <p>
            <a href="#services">服务与场合</a> · <a href="#products">产品与工艺</a> · <a href="#selected-studies">精选掠影</a>
          </p>
          <span>06 COLLECTIONS · 48 STUDIES</span>
        </nav>

        <section className="lookbook-collection-section shell" aria-label="作品合集">
          {collectionGroups.map((group, groupIndex) => {
            const collections = lookbookCollections.filter((collection) => collection.group === group.group);

            return (
              <div className="lookbook-collection-group" id={group.id} key={group.id}>
                <header className="lookbook-group-heading">
                  <p className="eyebrow">{group.eyebrow}</p>
                  <div>
                    <h2>{group.title}</h2>
                    <p>{group.intro}</p>
                  </div>
                </header>

                <div className="lookbook-collection-grid">
                  {collections.map((collection, cardIndex) => (
                    <Link
                      className="lookbook-collection-card"
                      href={`/lookbook/${collection.slug}`}
                      key={collection.slug}
                      aria-label={`查看${collection.title}合集`}
                    >
                      <figure>
                        <SiteImage
                          src={collection.cover.image}
                          alt={collection.cover.alt}
                          loading={groupIndex === 0 && cardIndex === 0 ? undefined : "lazy"}
                          decoding="async"
                          style={{ objectPosition: collection.cover.position }}
                        />
                        <span aria-hidden="true">{collection.number}</span>
                      </figure>
                      <div className="lookbook-collection-card-copy">
                        <p>{collection.kind}</p>
                        <h3>{collection.title}</h3>
                        <span>{collection.english}</span>
                        <p>{collection.deck}</p>
                        <div>
                          <small>{String(collection.studies.length + 1).padStart(2, "0")} STUDIES</small>
                          <b aria-hidden="true">↗</b>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        <section className="lookbook-gallery-heading shell" id="selected-studies">
          <p className="eyebrow">SELECTED STUDIES · ALL COLLECTIONS</p>
          <div>
            <h2>全系列掠影</h2>
            <p>保留原有的编辑式浏览节奏；点击任一作品，可继续进入它所属的完整合集。</p>
          </div>
        </section>

        <section className="lookbook-gallery shell" aria-label="精选作品">
          {lookbookWorks.map((work, index) => (
            <article className={`gallery-work ${work.size}`} key={work.title}>
              <Link className="gallery-work-link" href={`/lookbook/${work.collection}`}>
                <figure className="gallery-image">
                  <SiteImage
                    src={work.image}
                    alt={work.alt}
                    loading="lazy"
                    decoding="async"
                  />
                  <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                </figure>
                <div className="gallery-caption">
                  <p>{work.meta}</p>
                  <h2>{work.title}</h2>
                  <p>{work.note}</p>
                </div>
              </Link>
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
