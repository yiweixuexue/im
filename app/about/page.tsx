import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading, SiteFooter, SiteHeader } from "../../components/site-shell";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Yiwei Xue and the idea behind 屮微我 and ImArtisan: seeing the individual in the details and giving Chinese craft a thoughtful contemporary life.",
};

export default function AboutPage() {
  return (
    <div className="site-page about-page">
      <SiteHeader market="home" tone="paper" />
      <main id="main-content">
        <section className="paper-hero shell">
          <p className="eyebrow">ABOUT IMARTISAN · 关于屮微我</p>
          <h1>东方，是来处。<br />自我，是方向。</h1>
          <p>
            Chinese heritage is not a style filter. It is a living source—understood through people, material,
            time and the freedom to make it personal.
          </p>
        </section>

        <section className="about-origin section-space">
          <div className="shell about-origin-grid">
            <div className="about-origin-image">
              <img src="/images/site/founder-portrait.webp" alt="Yiwei Xue, founder and artisan behind ImArtisan" loading="lazy" />
              <span>YIWEI XUE · ARTISAN & CREATIVE DIRECTOR</span>
            </div>
            <div className="about-origin-copy" lang="zh-CN">
              <p className="eyebrow">从金融，到手艺</p>
              <h2>我想做的，不是替别人定义美。</h2>
              <p>
                我曾在金融行业工作，后来回到服装、材料与双手的世界。数字训练我辨认结构，手艺让我重新理解时间：一针一线看起来很慢，却能把人的感受留下来。
              </p>
              <p>
                屮微我从定制服装开始，因为衣服离身体最近，也最容易被统一标准误解。我希望先看见一个人的生活、比例、经历和选择，再决定衣服应该是什么样子。
              </p>
              <blockquote>“不懂爱的设计师，不是好的生活家。”</blockquote>
            </div>
          </div>
        </section>

        <section className="name-story section-space shell">
          <div className="name-mark" aria-hidden="true"><span>屮</span><small>I’M_</small></div>
          <div>
            <p className="eyebrow">WHY THE NAME</p>
            <h2>屮微我：从细微之处，辨认真实的自己</h2>
          </div>
          <div>
            <p lang="zh-CN">
              “微我”指向微观自我、找到自我、做自己。Logo 中的缠枝纹意味着延续与生长，三瓣兰花来自与主理人有关的私人记忆；不同灰度提醒我们，世界从来不只有非黑即白。
            </p>
            <p>
              The English name ImArtisan carries two ideas at once: “I’m an artisan,” and the personal “I am.”
              Craft begins with a maker, but it becomes complete in the life of the person who chooses it.
            </p>
          </div>
        </section>

        <section className="about-english section-space" id="english">
          <div className="shell about-english-grid">
            <div>
              <p className="eyebrow">A DUAL-MARKET BRAND</p>
              <h2>One point of view.<br />Two honest offers.</h2>
            </div>
            <div className="about-paths">
              <article>
                <span>CHINA · 屮微我</span>
                <h3>Bespoke clothing as self-understanding</h3>
                <p>
                  In China, the studio works directly with clients on modern Chinese clothing, qipao and menswear.
                  The goal is not online volume; it is trust, conversation, fitting and long-term service.
                </p>
                <Link className="arrow-link" href="/cn/custom">Explore Chinese bespoke <span aria-hidden="true">→</span></Link>
              </article>
              <article>
                <span>INTERNATIONAL · IMARTISAN</span>
                <h3>Heritage craft with clear context</h3>
                <p>
                  Internationally, the focus shifts to portable, giftable and collectible objects. Culture is
                  explained without flattening every tradition into the same “heritage” label.
                </p>
                <Link className="arrow-link" href="/en/heritage">Explore the collection <span aria-hidden="true">→</span></Link>
              </article>
            </div>
          </div>
        </section>

        <section className="values-section section-space shell">
          <SectionHeading
            eyebrow="WHAT WE VALUE"
            title="Four principles that shape every decision"
          />
          <div className="values-grid">
            <article><span>01</span><h3>See the person</h3><p>Design and selection begin with a real life, not a demographic stereotype.</p></article>
            <article><span>02</span><h3>Name things precisely</h3><p>Technique, origin and heritage status are described with the specificity they deserve.</p></article>
            <article><span>03</span><h3>Respect the hands</h3><p>The maker’s observation, practice and time are part of the value—not invisible overhead.</p></article>
            <article><span>04</span><h3>Choose for longevity</h3><p>We favor fewer objects that can be worn, used, repaired and kept in relationship.</p></article>
          </div>
        </section>

        <section className="about-closing section-space">
          <div className="shell">
            <p className="eyebrow">IMARTISAN · 屮微我</p>
            <h2>Made with a point of view.<br />Chosen with a sense of self.</h2>
            <div>
              <Link className="button button-paper" href="/en/heritage">Discover heritage craft</Link>
              <Link className="text-link text-link-light" href="/cn/custom">了解定制服装 <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
