import Link from "next/link";
import { ProductCard } from "../components/product-card";
import { SiteImage } from "../components/site-image";
import { SectionHeading, SiteFooter, SiteHeader } from "../components/site-shell";

const etsyShop = "https://www.etsy.com/shop/ImArtisanStudio";

export default function Home() {
  return (
    <div className="site-page home-page">
      <SiteHeader market="home" tone="light" />
      <main id="main-content">
        <section className="gateway-hero" id="choose-your-path" aria-labelledby="gateway-title">
          <Link className="gateway-panel gateway-cn" href="/cn/custom" lang="zh-CN">
            <SiteImage src="/images/site/custom-ceremony.webp" alt="屮微我中式婚礼定制服装案例" />
            <span className="gateway-shade" aria-hidden="true" />
            <div className="gateway-panel-copy">
              <p>CHINA · BESPOKE CLOTHING</p>
              <h2>为中国客户<br />探索定制服装</h2>
              <span className="gateway-action">进入中文站 <b aria-hidden="true">↗</b></span>
            </div>
          </Link>

          <Link className="gateway-panel gateway-en" href="/en/heritage">
            <SiteImage src="/images/site/chanhua-making.webp" alt="Hands shaping a traditional wrapped silk flower" />
            <span className="gateway-shade" aria-hidden="true" />
            <div className="gateway-panel-copy">
              <p>INTERNATIONAL · HERITAGE CRAFT</p>
              <h2>Discover craft<br />made to be lived with</h2>
              <span className="gateway-action">Enter international site <b aria-hidden="true">↗</b></span>
            </div>
          </Link>

          <div className="gateway-center">
            <p className="gateway-kicker">IMARTISAN · 屮微我</p>
            <h1 id="gateway-title">
              <span lang="zh-CN">于微小处，看见真我</span>
              <small>Seeing the self in the details.</small>
            </h1>
            <p>东方审美定制服装 · Chinese heritage craft</p>
          </div>
          <div className="gateway-scroll" aria-hidden="true">
            <span /> CHOOSE YOUR PATH
          </div>
        </section>

        <section className="home-dual section-space shell" aria-labelledby="dual-title">
          <SectionHeading
            eyebrow="ONE PHILOSOPHY · TWO PATHS"
            title="同一种价值观，两条清晰的转化路径"
            intro="屮微我不把同一批产品推给所有人。我们从真实市场需求出发，让定制服装与传统工艺各自在最适合它们的场景里被理解。"
          />
          <div className="dual-grid" id="dual-title">
            <article lang="zh-CN">
              <span>01 · CHINA</span>
              <h3>一件真正属于你的衣服</h3>
              <p>
                在中国，我们以一对一风格设计、量体试样和手工细节，把模糊的期待转化为可穿、可久留的衣服。
              </p>
              <Link className="arrow-link" href="/cn/custom">
                了解定制服务 <span aria-hidden="true">→</span>
              </Link>
            </article>
            <article>
              <span>02 · INTERNATIONAL</span>
              <h3>Objects that carry a living tradition</h3>
              <p>
                Internationally, ImArtisan introduces thoughtfully selected Chinese craft through its makers,
                materials, cultural context and place in contemporary life.
              </p>
              <Link className="arrow-link" href="/en/heritage">
                Explore heritage craft <span aria-hidden="true">→</span>
              </Link>
            </article>
          </div>
        </section>

        <section className="featured-collection section-space">
          <div className="shell">
            <SectionHeading
              eyebrow="THE IMARTISAN EDIT"
              title="Tradition, translated into objects for now"
              intro="Pieces chosen for the intelligence of their making—not simply for looking ‘traditional.’"
            />
            <div className="product-grid">
              <ProductCard
                title="Blue Peony Evening Bag"
                chinese="蓝色牡丹汴绣包"
                craft="TRADITIONAL BIAN EMBROIDERY"
                image="/images/site/blue-peony-bag.webp"
                href="/en/heritage/blue-peony-bag"
                tag="FEATURED"
              />
              <ProductCard
                title="Red Peony Evening Bag"
                chinese="红色牡丹汴绣包"
                craft="TRADITIONAL BIAN EMBROIDERY"
                image="/images/site/red-peony-bag.webp"
                href={etsyShop}
              />
              <ProductCard
                title="Olive Berry Hair Ornament"
                chinese="橄榄枝缠花发饰"
                craft="HAND-WRAPPED SILK THREAD"
                image="/images/site/olive-hairpin.webp"
                href={etsyShop}
              />
              <ProductCard
                title="Tulip Brooch"
                chinese="郁金香缠花胸针"
                craft="CONTEMPORARY CHANHUA"
                image="/images/site/tulip-brooch.webp"
                href={etsyShop}
              />
            </div>
            <div className="collection-actions">
              <Link className="button button-ink" href="/en/heritage">
                View the collection
              </Link>
              <a className="text-link" href={etsyShop} target="_blank" rel="noreferrer">
                Shop availability on Etsy <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="home-custom section-space" lang="zh-CN">
          <div className="shell home-custom-grid">
            <div className="home-custom-image">
              <SiteImage src="/images/site/studio-tailoring.webp" alt="屮微我工作室服装制作过程" loading="lazy" />
              <p>THE ATELIER · 杭州</p>
            </div>
            <div className="home-custom-copy">
              <p className="eyebrow">CHUWEIWO BESPOKE · 屮微我定制</p>
              <h2>从“认识你”开始，<br />而不是从一件现成衣服开始。</h2>
              <p>
                命理气韵提供色彩与材质的灵感，一对一设计回应体型、场合与生活方式，手工细节让衣服拥有无法复制的温度。
              </p>
              <div className="custom-pillars">
                <span>命理气韵</span>
                <span>专属风格</span>
                <span>非遗手作</span>
              </div>
              <Link className="button button-paper" href="/cn/custom">
                开始了解定制
              </Link>
            </div>
          </div>
        </section>

        <section className="home-belief section-space shell">
          <div className="belief-mark" aria-hidden="true">
            屮
          </div>
          <div>
            <p className="eyebrow">WHY IMARTISAN</p>
            <h2>
              We do not use heritage as decoration. We ask what a craft means, who carries it, and how it can
              remain alive.
            </h2>
          </div>
          <div className="belief-copy">
            <p lang="zh-CN">
              “屮微我”意为微观自我、找到自我、做自己。世界并非非黑即白，人的美也不应只有一种标准。
            </p>
            <p>
              ImArtisan brings that belief into objects: fewer pieces, clearer provenance, careful use, and a
              longer relationship between people and what they choose to keep.
            </p>
            <Link className="arrow-link" href="/about">
              Read our story <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section className="journal-tease section-space">
          <div className="shell">
            <SectionHeading
              eyebrow="CULTURE · PROCESS · NOTES"
              title="Three ways into the story"
              intro="Understand the cultural source, watch the work take shape, and meet the point of view behind the selection."
            />
            <div className="journal-tease-grid">
              <Link href="/journal#heritage" className="journal-tease-card">
                <SiteImage src="/images/site/blue-peony-detail.webp" alt="Detail of blue peony Bian embroidery" loading="lazy" />
                <span>HERITAGE JOURNAL</span>
                <h3>From brush-like shading to thread</h3>
              </Link>
              <Link href="/journal#studio" className="journal-tease-card">
                <SiteImage src="/images/site/chanhua-making.webp" alt="Hands cutting velvet for a wrapped flower" loading="lazy" />
                <span>STUDIO JOURNAL</span>
                <h3>Why patient hands still matter</h3>
              </Link>
              <Link href="/journal#notes" className="journal-tease-card">
                <SiteImage src="/images/site/gift-packaging.webp" alt="ImArtisan gift-ready kraft box and ribbon" loading="lazy" />
                <span>IMARTISAN NOTES</span>
                <h3>A gift, including when it is for yourself</h3>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
