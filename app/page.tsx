import Link from "next/link";
import { PartnershipInvitation } from "../components/partnership-invitation";
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
              <p>BESPOKE CLOTHING · CHINA</p>
              <h2>从你的生活出发<br />定制真正适合的衣服</h2>
              <span className="gateway-action">进入中文站 <b aria-hidden="true">↗</b></span>
            </div>
          </Link>

          <Link className="gateway-panel gateway-en" href="/en/heritage">
            <SiteImage src="/images/site/chanhua-making.webp" alt="Hands shaping a traditional wrapped silk flower" />
            <span className="gateway-shade" aria-hidden="true" />
            <div className="gateway-panel-copy">
              <p>HERITAGE CRAFT · INTERNATIONAL</p>
              <h2>Craft with a past.<br />A place in life today.</h2>
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
            title="同一种匠心，两种与你相遇的方式"
            intro="从一件为你而作的衣服，到一件承载手艺与时间的作品，屮微我与 ImArtisan 以不同的方式，让东方审美自然融入当下生活。"
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
              intro="Start with objects you can enjoy now. Explore the makers, techniques and ideas that give them depth."
            />
            <div className="product-grid">
              <ProductCard
                title="Tulip Wrapped-Flower Brooch"
                chinese="郁金香缠花胸针"
                craft="CHANHUA · THREAD-WRAPPED FLORAL ART"
                image="/images/site/tulip-brooch.webp"
                href="/en/heritage/chanhua"
                status="available"
              />
              <ProductCard
                title="Olive Berry Hair Ornament"
                chinese="橄榄枝缠花发饰"
                craft="CHANHUA · HAND-WRAPPED THREAD"
                image="/images/site/chanhua-worn.webp"
                href="/en/heritage/chanhua"
                status="available"
              />
              <ProductCard
                title="Embroidered Lion Charm"
                chinese="醒狮刺绣挂件"
                craft="BIAN EMBROIDERY · LION CHARM"
                image="/images/site/lion-charm.webp"
                href="/en/heritage/lion-charm"
                status="available"
              />
              <ProductCard
                title="Blended-Incense Plaques"
                chinese="太和香堂 · 合香香牌"
                craft="HE XIANG · KAIFENG"
                image="/images/site/incense/round-cloud.webp"
                href="/en/heritage/taihe-xiangtang"
                status="available"
              />
              <ProductCard title="Yangzhou Velvet Flowers" chinese="扬州绒花" craft="RONGHUA · FLORAL KEEPSAKES" image="/images/site/ronghua/ronghua-worn-brooch.webp" href="/en/heritage/ronghua" status="available" />
              <ProductCard title="Chengdu Lacquerware" chinese="成都大漆" craft="LACQUER · ADORNMENT & HOME" image="/images/site/lacquer/red-pendant.webp" href="/en/heritage/chengdu-lacquerware" status="available" />
              <ProductCard title="Bian Embroidered Art" chinese="汴绣画与屏风" craft="BIAN EMBROIDERY · DISPLAY" image="/images/site/uploads-20261027/lotus-standing-screen.webp" href="/en/heritage/bian-embroidery" status="available" />
            </div>
            <div className="collection-actions">
              <Link className="button button-ink" href="/en/heritage">
                View the collection
              </Link>
              <Link className="text-link" href="/en/heritage#collection">
                Explore what each craft can become <span aria-hidden="true">→</span>
              </Link>
              <Link className="text-link" href="/contact#international">Enquire about other crafts <span aria-hidden="true">→</span></Link>
              <a className="text-link" href={etsyShop} target="_blank" rel="noreferrer">
                Shop clothing, Chanhua &amp; lion charms on Etsy <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>


        <section className="bridge-section section-space shell" aria-labelledby="bridge-heading">
          <div className="bridge-image">
            <SiteImage src="/images/site/chanhua-making.webp" alt="Hands shaping a wrapped-thread flower ornament" loading="lazy" />
          </div>
          <div className="bridge-copy">
            <p className="eyebrow">WHAT IMARTISAN DOES</p>
            <h2 id="bridge-heading">A bridge between the maker and the life of the object.</h2>
            <p>We listen in both directions: to the knowledge and working limits of each craft, and to the needs of the people who choose to live with it. Our role is not to decide what everyone should find beautiful, but to make meaningful connections possible.</p>
            <Link className="arrow-link" href="/makers">Meet the makers &amp; studios <span aria-hidden="true">→</span></Link>
          </div>
        </section>
        <section className="studio-story section-space">
          <div className="shell studio-story-grid">
            <div>
              <p className="eyebrow">FROM CRAFT TO CONTEMPORARY LIFE</p>
              <h2>Not every craft belongs on every object.</h2>
              <p>Each new idea begins with a question about suitability. A fine embroidered panel and a frequently handled hair accessory have very different demands for durability, structure and care.</p>
              <Link className="arrow-link" href="/journal/where-craft-belongs">Follow our product-development thinking <span aria-hidden="true">→</span></Link>
            </div>
            <SiteImage src="/images/site/lacquer/process-painting.webp" alt="Hand decoration during a traditional lacquer process" loading="lazy" />
          </div>
        </section>

        <PartnershipInvitation />

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
                以真实生活、体型、场合与个人偏好为起点，通过一对一设计、试衣调整和传统手工细节，让衣服贴近穿着者的需要。传统文化灵感可以自由选择，而非必需。
              </p>
              <div className="custom-pillars">
                <span>理解需求</span>
                <span>专属风格</span>
                <span>传统手工细节</span>
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
              <Link href="/journal/where-craft-belongs" className="journal-tease-card">
                <SiteImage src="/images/site/chanhua-making.webp" alt="Hands cutting velvet for a wrapped flower" loading="lazy" />
                <span>STUDIO JOURNAL</span>
                <h3>Where does a craft truly belong?</h3>
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
