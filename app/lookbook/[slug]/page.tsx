import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteImage } from "../../../components/site-image";
import { SiteFooter, SiteHeader } from "../../../components/site-shell";
import { getLookbookCollection, lookbookCollections } from "../collections";

type CollectionPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return lookbookCollections.map((collection) => ({ slug: collection.slug }));
}

export async function generateMetadata({ params }: CollectionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = getLookbookCollection(slug);

  if (!collection) {
    return { title: "Lookbook 合集" };
  }

  return {
    title: `${collection.title}｜Lookbook`,
    description: collection.deck,
  };
}

export default async function LookbookCollectionPage({ params }: CollectionPageProps) {
  const { slug } = await params;
  const collection = getLookbookCollection(slug);

  if (!collection) {
    notFound();
  }

  const currentIndex = lookbookCollections.findIndex((item) => item.slug === collection.slug);
  const previous = lookbookCollections[(currentIndex - 1 + lookbookCollections.length) % lookbookCollections.length];
  const next = lookbookCollections[(currentIndex + 1) % lookbookCollections.length];

  return (
    <div className={`site-page lookbook-collection-page collection-${collection.slug}`} lang="zh-CN">
      <SiteHeader market="cn" tone="paper" />
      <main id="main-content">
        <section className="collection-detail-hero shell">
          <Link className="collection-back" href="/lookbook">
            <span aria-hidden="true">←</span> 返回全部合集
          </Link>
          <div className="collection-detail-hero-grid">
            <div className="collection-detail-copy">
              <p className="eyebrow">{collection.number} · {collection.eyebrow}</p>
              <p className="collection-kind">{collection.kind}</p>
              <h1>{collection.title}</h1>
              <span>{collection.english}</span>
              <p>{collection.deck}</p>
              <a className="text-link" href="#collection-studies">
                浏览全部作品 <span aria-hidden="true">↓</span>
              </a>
            </div>
            <figure className="collection-cover">
              <SiteImage
                src={collection.cover.image}
                alt={collection.cover.alt}
                decoding="async"
                fetchPriority="high"
                style={{ objectPosition: collection.cover.position }}
              />
              <figcaption>
                <span>{collection.number}</span>
                <p>{String(collection.studies.length + 1).padStart(2, "0")} SELECTED STUDIES</p>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="collection-story shell">
          <p className="eyebrow">COLLECTION NOTE</p>
          <div className="collection-story-title">
            <h2>{collection.storyTitle}</h2>
          </div>
          <div className="collection-story-copy">
            {collection.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </section>

        <section className="collection-facts shell" aria-label={`${collection.title}合集说明`}>
          {collection.facts.map((fact, index) => (
            <article key={fact.label}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{fact.label}</p>
              <h3>{fact.value}</h3>
            </article>
          ))}
        </section>

        <section className="collection-study-section" id="collection-studies">
          <div className="shell">
            <header className="collection-study-heading">
              <div>
                <p className="eyebrow">SELECTED STUDIES</p>
                <h2>{collection.title} · 作品选</h2>
              </div>
              <p>从整体轮廓到贴近身体的细节，按一组完整的视觉叙事浏览。</p>
            </header>

            <div className="collection-study-grid">
              {collection.studies.map((study, index) => (
                <figure className={`collection-study ${study.layout}`} key={`${study.title}-${study.image}`}>
                  <div>
                    <SiteImage
                      src={study.image}
                      alt={study.alt}
                      loading={index > 1 ? "lazy" : undefined}
                      decoding="async"
                    />
                    <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <figcaption>
                    <h3>{study.title}</h3>
                    <p>{study.note}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <nav className="collection-pager shell" aria-label="其他 Lookbook 合集">
          <Link href={`/lookbook/${previous.slug}`}>
            <span>上一个合集</span>
            <strong><b aria-hidden="true">←</b> {previous.title}</strong>
          </Link>
          <Link href={`/lookbook/${next.slug}`}>
            <span>下一个合集</span>
            <strong>{next.title} <b aria-hidden="true">→</b></strong>
          </Link>
        </nav>

        <section className="lookbook-note section-space">
          <div className="shell">
            <p className="eyebrow">BEGIN WITH A CONVERSATION</p>
            <h2>喜欢一种感觉，<br />不必先知道它的名字。</h2>
            <p>告诉我们你喜欢的作品、穿着日期与真实场合，我们会把直觉整理成可以执行的定制方向。</p>
            <div className="collection-actions">
              <Link className="button button-paper" href="/contact#wechat">预约定制对谈</Link>
              <Link className="text-link text-link-light" href="/lookbook">返回全部合集 <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
