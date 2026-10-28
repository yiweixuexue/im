import type { Metadata } from "next";
import Link from "next/link";
import { BespokeWorkLibrary } from "../../../components/bespoke-work-library";
import { SiteImage } from "../../../components/site-image";
import { SiteFooter, SiteHeader } from "../../../components/site-shell";

export const metadata: Metadata = {
  title: "定制服装｜作品图库、选款与定制咨询",
  description: "浏览屮微我真实服装作品，按旗袍、女士新中式、男士定制及婚礼场景筛选，了解版型、材料和可调整细节，保存参考并预约一对一定制沟通。",
};

const steps = [
  ["01", "说出需求", "告诉我们穿着场合、日期、预算、喜欢与不喜欢的感觉，也可以只带来一张参考图。"],
  ["02", "设计沟通", "通过初步对谈确认风格、身体需求、使用场景与制作可行性。"],
  ["03", "方案与报价", "提出廓形、面料、色彩及工艺方向，说明预计费用、周期与下一步。"],
  ["04", "确认面料", "根据实际样布、垂坠和手感选择材料，并确认重要设计细节。"],
  ["05", "量体与建档", "综合尺寸、体态和活动习惯记录需求；异地客户需要确认可靠的量体方式。"],
  ["06", "毛坯试样", "通过试样观察站立、落座、行走等状态，调整版型和活动空间。"],
  ["07", "正式制作", "裁剪、缝制、细节处理、整烫与检查，根据项目选用合适手工工艺。"],
  ["08", "交付与养护", "提供穿搭和保养建议；与客户沟通后续尺寸或版型记录的维护。"],
];

const decisions = [
  { number: "01", title: "先看身体与动作", image: "/images/lookbook/handcraft-patterns.webp", alt: "悬挂的不同服装试样和毛坯裁片", copy: "领型、肩线、腰线和衣长不只是视觉比例。坐下、转身、抬手的舒适感，需要在试样时一并考虑。" },
  { number: "02", title: "再看面料与生活", image: "/images/site/silk-texture.webp", alt: "丝质面料的柔和光泽与纹理特写", copy: "同一种版型在不同面料里会呈现不同性格。透度、垂坠、保暖、清洗及穿着频率，都应该影响选择。" },
  { number: "03", title: "最后完成手工细节", image: "/images/lookbook/handcraft-hand-finishing.webp", alt: "裁缝以双手处理衣料边缘的手工收口", copy: "盘扣、滚边、里布与缝份要适合这件衣服，而非为了装饰而添加。精细收口往往藏在看不见的地方。" },
];

const faqs = [
  ["所有图片里的衣服都可以直接下单吗？", "这些是实际作品及设计参考，不是现货商城。我们会根据你的场合、体型和预算讨论适合的形制；具体款式、面料和工艺的可执行性需要确认。"],
  ["我能根据参考款调整颜色、领型或长度吗？", "可以提出希望保留或修改的部分。是否可行由面料、结构、工艺、试衣条件和制作周期共同决定，确认方案后再制作。"],
  ["定制通常需要多久？", "常规项目通常需要约 2–4 周，实际取决于面料、工艺难度、试样修改和排期。婚礼、复杂刺绣或异地项目请更早咨询；确认时间前不保证交付日期。"],
  ["不在本地，能远程定制吗？", "可以先远程沟通。是否适合全程远程定制，要结合具体品类、准确量体和试衣调整的条件判断；复杂贴身礼服通常更依赖现场试样。"],
  ["不喜欢中式元素，也可以定制吗？", "当然可以。设计从你的需求出发，并不要求每个人接受同一种审美。中式细节、传统纹样和文化意象都是可以讨论的选项，而非必须添加的元素。"],
  ["第一次咨询要准备什么？", "最有用的是场合、希望穿着的日期、所在城市、预算范围，以及喜欢和不喜欢的图片。暂时没有明确款式也可以开始沟通。"],
];

export default function ChineseCustomPage() {
  return (
    <div className="site-page bespoke-landing" lang="zh-CN">
      <SiteHeader market="cn" tone="paper" customPage />
      <main id="main-content">
        <section className="bespoke-editorial-hero shell-wide" aria-labelledby="bespoke-hero-title">
          <div className="bespoke-hero-copy">
            <p className="eyebrow">屮微我 · 一对一服装定制</p>
            <h1 id="bespoke-hero-title">从一件喜欢的衣服，<br />开始属于你的定制。</h1>
            <p>看见真实作品，也看见背后的选择。按款式与场合找到喜欢的方向，了解哪些细节可以调整，以及怎样让衣服真正适合你的身体和生活。</p>
            <div className="bespoke-hero-actions">
              <a className="button button-ink" href="#works">浏览作品与选款 ↓</a>
              <Link className="arrow-link" href="/contact#wechat">咨询定制方案 →</Link>
            </div>
            <p className="bespoke-hero-small">中国客户定制服务 · 一对一沟通 · 按实际方案报价</p>
          </div>
          <div className="bespoke-hero-collage" aria-label="旗袍、女士新中式与男士正装作品">
            <SiteImage src="/images/lookbook/qipao-blue.webp" alt="月蓝缎面旗袍的佩戴造型" />
            <SiteImage src="/images/lookbook/womens-vest-ivory.webp" alt="月白盘扣马甲与花纹口袋" loading="lazy" />
            <SiteImage src="/images/lookbook/mens-formal-suit.webp" alt="深色男士西装的人台展示" loading="lazy" />
          </div>
        </section>

        <section className="bespoke-three-promises shell" aria-label="如何使用定制作品图库">
          <article><span>01 · LOOK</span><h2>看款式与场合</h2><p>按旗袍、女士、男士与婚礼方向筛选真实作品。</p></article>
          <article><span>02 · THINK</span><h2>想清楚自己的需要</h2><p>看见可调整的细节，也了解实际穿着中的限制。</p></article>
          <article><span>03 · TALK</span><h2>带着参考来沟通</h2><p>保存心仪案例，说明日期、预算和希望改善的穿衣问题。</p></article>
        </section>

        <BespokeWorkLibrary />

        <section className="bespoke-beyond shell section-space" id="design-decisions" aria-labelledby="bespoke-design-title">
          <div className="bespoke-section-intro">
            <p className="eyebrow">BEYOND THE PHOTO · 不只是一张好看的照片</p>
            <h2 id="bespoke-design-title">好看，是开始。适合，才是定制的重点。</h2>
            <p>一件服装的美感来自整体选择：身体、动作、材料与工艺之间是否互相成全。我们不把某一种东方审美作为标准答案。</p>
          </div>
          <div className="bespoke-decisions-grid">
            {decisions.map((item) => (
              <article key={item.number}>
                <SiteImage src={item.image} alt={item.alt} loading="lazy" />
                <p className="eyebrow">{item.number} · THE MAKING</p>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
          <Link href="/lookbook/handcraft" className="arrow-link">查看更多手作与试样细节 →</Link>
        </section>

        <section className="bespoke-process-section section-space" id="process" aria-labelledby="bespoke-process-title">
          <div className="shell">
            <div className="bespoke-section-intro">
              <p className="eyebrow">THE BESPOKE JOURNEY · 了解制作过程</p>
              <h2 id="bespoke-process-title">每一步都有目的，也值得被看见。</h2>
              <p>从初次沟通到完成制作，关键不是加快每一步，而是尽早发现不适合的地方，并把决定讲清楚。</p>
            </div>
            <ol className="bespoke-process-grid">
              {steps.map(([number, heading, copy]) => (
                <li key={number}>
                  <span>{number}</span>
                  <h3>{heading}</h3>
                  <p>{copy}</p>
                </li>
              ))}
            </ol>
            <div className="bespoke-timeline-note">
              <strong>常规制作参考：约 2–4 周</strong>
              <p>具体日期需根据设计复杂度、面料、试样、制作排期及运输条件确认；不以参考周期作为交付承诺。</p>
            </div>
          </div>
        </section>

        <section className="bespoke-book-section section-space" id="consultation" aria-labelledby="bespoke-consultation-title">
          <div className="shell bespoke-book-grid">
            <div>
              <p className="eyebrow">START WITH A CONVERSATION · 开始定制</p>
              <h2 id="bespoke-consultation-title">先把想法聊清楚，再决定要不要做。</h2>
              <p>你可以从一件喜欢的衣服、一场即将到来的活动，或一个长期的穿着困扰开始。我们先确认是否有合适的版型与制作路径，再讨论方案、价格和时间。</p>
              <Link href="/contact#wechat" className="button button-paper">查看微信预约方式 →</Link>
              <Link href="/lookbook" className="bespoke-book-lookbook">继续浏览完整 Lookbook ↗</Link>
            </div>
            <div className="bespoke-wechat-note">
              <SiteImage src="/images/wechat-qr.png" alt="屮微我定制服装微信咨询二维码" width="632" height="632" loading="lazy" />
              <div><p className="eyebrow">WECHAT CONSULTATION</p><h3>微信扫码咨询</h3><p>添加时备注「定制咨询」，如已在上方保存作品，请附上复制的参考编号。</p></div>
            </div>
          </div>
        </section>

        <section className="bespoke-faq shell section-space" aria-labelledby="bespoke-faq-title">
          <div className="bespoke-section-intro">
            <p className="eyebrow">FREQUENTLY ASKED · 常见问题</p>
            <h2 id="bespoke-faq-title">提前了解，选择才更从容。</h2>
          </div>
          <div className="bespoke-faq-list">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}<span aria-hidden="true">＋</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
