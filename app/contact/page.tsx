import type { Metadata } from "next";
import Link from "next/link";
import { SiteImage } from "../../components/site-image";
import { SiteFooter, SiteHeader } from "../../components/site-shell";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact 屮微我 for bespoke clothing or ImArtisan for heritage craft, Etsy orders and international enquiries.",
};

export default function ContactPage() {
  return (
    <div className="site-page contact-page">
      <SiteHeader market="home" tone="paper" />
      <main id="main-content">
        <section className="paper-hero shell contact-hero">
          <p className="eyebrow">TWO PATHS · ONE STUDIO</p>
          <h1>让正确的问题，<br />抵达正确的入口。</h1>
          <p>
            Choose the path that matches what you need. We keep bespoke clothing and international heritage
            craft enquiries separate so each conversation can begin with useful context.
          </p>
        </section>

        <section className="contact-paths shell">
          <article className="contact-cn" id="wechat" lang="zh-CN">
            <div className="contact-path-head">
              <span>中国客户 · CHINA</span>
              <h2>定制服装咨询</h2>
              <p>适用于新中式、旗袍、男士正装、婚礼与家庭整体定制。</p>
            </div>
            <div className="contact-wechat-row">
              <SiteImage src="/images/wechat-qr.png" alt="屮微我品牌微信二维码" width="632" height="632" />
              <div>
                <strong>微信扫一扫</strong>
                <p>添加时请备注“定制咨询”，并简单说明穿着场合与预计日期。</p>
                <ul>
                  <li>15 分钟语音或视频灵感对谈</li>
                  <li>确认档期、制作可行性与下一步</li>
                  <li>后续在微信中持续服务</li>
                </ul>
              </div>
            </div>
            <Link className="arrow-link" href="/cn/custom">先了解定制流程 <span aria-hidden="true">→</span></Link>
          </article>

          <article className="contact-en" id="international">
            <div className="contact-path-head">
              <span>INTERNATIONAL</span>
              <h2>Craft, orders & collaborations</h2>
              <p>For product questions, Etsy orders, press, maker relationships and selected ceremonial commissions.</p>
            </div>
            <div className="contact-link-list">
              <a href="https://www.etsy.com/shop/ImArtisanStudio" target="_blank" rel="noreferrer">
                <span><small>SHOP & ORDER MESSAGES</small><strong>Etsy · ImArtisanStudio</strong></span><b aria-hidden="true">↗</b>
              </a>
              <a href="https://www.instagram.com/imartisan_/" target="_blank" rel="noreferrer">
                <span><small>PROCESS & DAILY STORIES</small><strong>Instagram · @ImArtisan_</strong></span><b aria-hidden="true">↗</b>
              </a>
              <a href="mailto:imartisanme@gmail.com">
                <span><small>GENERAL & COLLABORATION</small><strong>imartisanme@gmail.com</strong></span><b aria-hidden="true">↗</b>
              </a>
            </div>
            <p className="contact-response-note">Please include the product or project name, destination country and any relevant date. Replies are usually sent within 1–2 business days.</p>
          </article>
        </section>

        <section className="contact-note section-space shell">
          <div><span>01</span><h3>For bespoke</h3><p>Lead with the occasion, date and what has not worked for you before.</p></div>
          <div><span>02</span><h3>For an object</h3><p>Lead with the piece, destination and whether it is a gift.</p></div>
          <div><span>03</span><h3>For collaboration</h3><p>Share the role you imagine, who it serves and what each side would contribute.</p></div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
