import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading, SiteFooter, SiteHeader } from "../../../components/site-shell";

export const metadata: Metadata = {
  title: "定制服装",
  description:
    "屮微我以一对一风格设计、量体试样与手工细节，为婚礼、正式场合、家庭合影和日常新中式提供专属定制。",
};

const scenarios = [
  ["婚礼与敬酒", "让新娘旗袍、新郎正装与婚礼空间形成完整的视觉关系。"],
  ["商务与正式场合", "克制、得体、有辨识度，在重要相见中仍然保持真实的自己。"],
  ["家庭合影与纪念", "不追求整齐复制，而是让每位家人的气质彼此呼应。"],
  ["日常新中式", "用可反复搭配的面料与廓形，让东方审美进入真实生活。"],
];

const steps = [
  ["01", "初识需求", "了解场合、日期、预算与当前最困扰你的穿着问题。"],
  ["02", "灵感沟通", "用 15 分钟语音或视频对谈，确认气质、偏好与不喜欢的方向。"],
  ["03", "方案与报价", "将需求转为清晰的廓形、色彩、细节建议和制作范围。"],
  ["04", "面料与设计确认", "寄送或现场选择面料小样，确认设计图与所有关键细节。"],
  ["05", "量体建档", "记录静态尺寸、体态与活动习惯，建立长期个人定制档案。"],
  ["06", "打版试衣", "制作毛坯样衣，通过站立、坐姿和行走调整动态合身度。"],
  ["07", "制作与完善", "正式裁剪、缝制、盘扣与手工细节，并完成整烫检查。"],
  ["08", "交付与养护", "提供搭配和洗护建议，后续持续维护尺寸与定制记录。"],
];

const faqs = [
  ["为什么定制通常需要 2–4 周？", "时间用于沟通、设计、面料确认、量体、毛坯试样、修改、正式制作与最终检查。复杂刺绣、特殊面料或跨城寄送可能需要更长时间，我们会在确认方案时说明。"],
  ["我没有明确想法，也可以预约吗？", "可以。你只需要带来真实场合、穿着困扰，以及喜欢或不喜欢的直觉参考。把模糊想法转化为可执行方案，本来就是设计服务的一部分。"],
  ["异地客户可以定制吗？", "可以先进行远程灵感沟通。是否适合完整远程定制，会根据品类、时间和试衣条件判断；重要礼服与复杂版型会优先建议可完成试样调整的方式。"],
  ["定制开始前需要准备什么？", "准备穿着日期、场合、预算范围、喜欢与不喜欢的参考图，以及一件目前最合身或最困扰你的衣服即可。"],
];

export default function ChineseCustomPage() {
  return (
    <div className="site-page" lang="zh-CN">
      <SiteHeader market="cn" tone="light" />
      <main id="main-content">
        <section className="market-hero custom-market-hero">
          <img src="/images/site/custom-ceremony.webp" alt="屮微我中式婚礼旗袍与男士正装定制" />
          <div className="market-hero-shade" aria-hidden="true" />
          <div className="shell market-hero-copy">
            <p className="eyebrow">CHUWEIWO BESPOKE · 屮微我定制</p>
            <h1>不先定义你，<br />只先理解你。</h1>
            <p>以命理气韵为灵感，以一对一风格设计与手工细节，完成一件真正属于你的衣服。</p>
            <div className="hero-button-row">
              <Link className="button button-paper" href="/contact#wechat">
                预约 15 分钟灵感对谈
              </Link>
              <Link className="text-link text-link-light" href="#process">
                查看完整流程 <span aria-hidden="true">↓</span>
              </Link>
            </div>
          </div>
          <p className="market-hero-note">雅致国风 · 匠心私定 · 三位一体专属高定</p>
        </section>

        <section className="definition-section section-space shell">
          <p className="vertical-label">WHAT BESPOKE MEANS</p>
          <div>
            <p className="eyebrow">定制是什么</p>
            <h2>不是把你放进一个尺码，<br />而是为你建立一套衣着语言。</h2>
          </div>
          <div className="definition-copy">
            <p>
              我们从你的体型、气质、生活方式和真实场合出发。颜色为什么适合你，廓形怎样回应身体，细节如何表达而不过度——每一个决定都有来由。
            </p>
            <p>
              定制的目标不是制造一件只能穿一次的“作品”，而是让衣服在重要时刻托住你，也能在之后的生活里继续被穿着。
            </p>
          </div>
        </section>

        <section className="scenario-section section-space">
          <div className="shell">
            <SectionHeading
              eyebrow="OCCASIONS"
              title="为重要时刻，也为真正的日常"
              intro="场合决定正式程度，但不决定你必须成为谁。"
            />
            <div className="scenario-grid">
              {scenarios.map(([title, copy], index) => (
                <article key={title}>
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="custom-lookbook section-space shell">
          <SectionHeading
            eyebrow="SELECTED WORKS"
            title="真正的风格，来自具体的人"
            intro="礼服、日常新中式与男士服装使用不同的设计逻辑，却共享同一种尊重个体的尺度。"
          />
          <div className="custom-lookbook-grid">
            <figure className="lookbook-feature">
              <img src="/images/lookbook-women.webp" alt="黑色长款旗袍定制" loading="lazy" />
              <figcaption><span>旗袍定制</span><strong>含蓄的线条，也可以很有力量</strong></figcaption>
            </figure>
            <figure>
              <img src="/images/site/silk-jacket.webp" alt="粉色真丝新中式女上衣" loading="lazy" />
              <figcaption><span>女士新中式</span><strong>不过度设计的日常表达</strong></figcaption>
            </figure>
            <figure>
              <img src="/images/site/blue-shirt.webp" alt="蓝色棉麻新中式男上衣" loading="lazy" />
              <figcaption><span>男士服装</span><strong>传统结构进入当代生活</strong></figcaption>
            </figure>
          </div>
          <Link className="arrow-link lookbook-more" href="/lookbook">
            浏览完整 Lookbook <span aria-hidden="true">→</span>
          </Link>
        </section>

        <section className="pillars-section section-space">
          <div className="shell pillars-layout">
            <div className="pillars-title">
              <p className="eyebrow">THREE-PART BESPOKE SYSTEM</p>
              <h2>一件衣裳，<br />三重专属。</h2>
              <p>三者不是附加卖点，而是同一个设计判断的不同维度。</p>
            </div>
            <div className="pillars-list">
              <article><span>壹</span><div><h3>命理气韵</h3><p>将五行与个人气质作为色彩、材质和寓意的灵感来源，不做机械套用。</p></div></article>
              <article><span>贰</span><div><h3>一对一专属风格</h3><p>结合体型、衣橱、职业和场景，建立不被成衣尺码限制的个人方案。</p></div></article>
              <article><span>叁</span><div><h3>非遗级手作细节</h3><p>盘扣、滚边、刺绣与精细收口，由手艺人的时间让衣服获得温度。</p></div></article>
            </div>
          </div>
        </section>

        <section className="process-section section-space shell" id="process">
          <SectionHeading
            eyebrow="THE BESPOKE JOURNEY"
            title="从初识，到长期陪伴"
            intro="每一步都在降低信息误差，也在让衣服更接近你真实的生活。"
          />
          <ol className="process-grid">
            {steps.map(([no, title, copy]) => (
              <li key={no}>
                <span>{no}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </li>
            ))}
          </ol>
          <div className="timeline-note">
            <strong>通常制作周期：2–4 周</strong>
            <p>重要日期建议提前沟通。复杂工艺、特殊面料与旺季排期会在确认方案前如实说明。</p>
          </div>
        </section>

        <section className="consultation-band section-space" id="wechat">
          <div className="shell consultation-band-grid">
            <div>
              <p className="eyebrow">15-MINUTE INSPIRATION CONVERSATION</p>
              <h2>先聊清楚，再决定是否开始。</h2>
              <p>
                你可以通过语音或视频，说说场合、期待和以往穿衣的困扰。初次对谈不要求你准备完整答案，也不急于促成订单。
              </p>
              <ul>
                <li>适合第一次接触定制的人</li>
                <li>可提前确认档期与制作可行性</li>
                <li>沟通后提供设计方向与面料建议</li>
              </ul>
            </div>
            <div className="wechat-card">
              <img src="/images/wechat-qr.png" alt="屮微我品牌微信二维码" width="632" height="632" loading="lazy" />
              <div><span>微信扫一扫</span><strong>预约灵感对谈</strong><p>添加时请备注“定制咨询”</p></div>
            </div>
          </div>
        </section>

        <section className="faq-section section-space shell">
          <SectionHeading eyebrow="FREQUENTLY ASKED" title="常见问题" />
          <div className="faq-list">
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
