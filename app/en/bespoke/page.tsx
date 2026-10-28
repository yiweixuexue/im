import type { Metadata } from "next";
import Link from "next/link";
import { BespokeWorkLibrary } from "../../../components/bespoke-work-library";
import { SiteImage } from "../../../components/site-image";
import { SiteFooter, SiteHeader } from "../../../components/site-shell";

export const metadata: Metadata = {
  title: "Bespoke Clothing | Design Library & Consultation",
  description: "Explore real bespoke qipao, womenswear, menswear and wedding ensembles by design and occasion. Save references, explore fit choices and discuss a custom project.",
  alternates: { languages: { "zh-CN": "/cn/custom/", en: "/en/bespoke/" } },
};

const steps = [
  [
    "01",
    "Share your needs",
    "Tell us the occasion, date, budget and the things you like or dislike. A single reference photo is enough to begin."
  ],
  [
    "02",
    "Design conversation",
    "Discuss style, physical comfort, use cases and the feasibility of different ideas."
  ],
  [
    "03",
    "Proposal & quote",
    "Review a proposed silhouette, fabric, colors, craft details and provisional cost and schedule."
  ],
  [
    "04",
    "Choose materials",
    "Consider real fabric samples for texture and drape, then confirm the key design decisions."
  ],
  [
    "05",
    "Measurements & profile",
    "Record measurements, posture and movement needs. Remote measurements need suitable arrangements."
  ],
  [
    "06",
    "Trial fitting",
    "Assess the toile while standing, sitting and walking, then adjust fit and ease of movement."
  ],
  [
    "07",
    "Making & finishing",
    "Cutting, sewing, selected hand details, pressing and inspection follow the confirmed plan."
  ],
  [
    "08",
    "Delivery & care",
    "Discuss styling, care and any relevant fitting notes to retain for later."
  ]
];

const decisions = [
  {
    "number": "01",
    "title": "Start with the body in motion",
    "image": "/images/lookbook/handcraft-patterns.webp",
    "alt": "Clothing samples and trial patterns in a studio",
    "copy": "Collar, shoulders, waist and length influence both proportion and movement. Sitting, reaching and turning are part of fitting."
  },
  {
    "number": "02",
    "title": "Choose cloth for real life",
    "image": "/images/site/silk-texture.webp",
    "alt": "Close-up of softly lustrous silk",
    "copy": "The same pattern can feel different in another material. Drape, transparency, warmth, care and frequency of wear should guide the choice."
  },
  {
    "number": "03",
    "title": "Finish with considered handwork",
    "image": "/images/lookbook/handcraft-hand-finishing.webp",
    "alt": "Tailor carefully finishing a garment edge by hand",
    "copy": "Frog buttons, piping, lining and seam finishes belong where they serve the garment. Considered craftsmanship often lives in unseen details."
  }
];

const faqs = [
  [
    "Can I order the exact pieces pictured?",
    "These are real work examples and design references, not ready-made stock. We discuss the forms and details suited to your needs; reproducing a particular cloth or design is not guaranteed."
  ],
  [
    "Can I change the color, collar or length?",
    "You're welcome to request changes. Feasibility depends on fabric, construction, technique, fitting conditions and schedule. We agree on a plan before making."
  ],
  [
    "How long does bespoke clothing take?",
    "Many standard projects take approximately 2–4 weeks. Embroidery, wedding work, additional fittings or remote arrangements may take longer. Delivery dates are confirmed individually."
  ],
  [
    "Can I order remotely?",
    "An initial consultation can be remote. Full remote bespoke work depends on reliable measurements and appropriate fitting arrangements. Close-fitting formal garments generally benefit from an in-person fitting."
  ],
  [
    "Do I have to choose Chinese-inspired styling?",
    "Not at all. Your personal preferences come first. Traditional motifs, Chinese-inspired lines and heritage details are possibilities, never obligations."
  ],
  [
    "What should I prepare for a consultation?",
    "Share your occasion, desired wearing date, city, approximate budget and any images you like or dislike. You can begin without a specific design in mind."
  ]
];

export default function EnglishBespokePage() {
  return (
    <div className="site-page bespoke-landing" lang="en">
      <SiteHeader market="cn" tone="paper" customPage customLocale="en" />
      <main id="main-content">
        <section className="bespoke-editorial-hero shell-wide" aria-labelledby="bespoke-hero-title">
          <div className="bespoke-hero-copy">
            <p className="eyebrow">CHUWEIWO · ONE-TO-ONE BESPOKE CLOTHING</p>
            <h1 id="bespoke-hero-title">Start with a piece you love.<br />Make it truly yours.</h1>
            <p>See real garments and the decisions behind them. Explore by style or occasion, understand what can be changed, and find a path toward clothes that fit your body and life.</p>
            <div className="bespoke-hero-actions">
              <a className="button button-ink" href="#works">Browse designs ↓</a>
              <Link className="arrow-link" href="/contact#wechat">Discuss your project →</Link>
            </div>
            <p className="bespoke-hero-small">CHINA-BASED BESPOKE SERVICE · INDIVIDUAL CONSULTATION · PROJECT-SPECIFIC QUOTES</p>
          </div>
          <div className="bespoke-hero-collage" aria-label="Qipao, contemporary womenswear and tailored menswear">
            <SiteImage src="/images/lookbook/qipao-blue.webp" alt="Moon-blue qipao worn for a celebration" />
            <SiteImage src="/images/lookbook/womens-vest-ivory.webp" alt="Ivory frog-button vest with patterned pockets" loading="lazy" />
            <SiteImage src="/images/lookbook/mens-formal-suit.webp" alt="Dark menswear suit on a dress form" loading="lazy" />
          </div>
        </section>

        <section className="bespoke-three-promises shell" aria-label="How to use the bespoke design library">
          <article><span>01 · LOOK</span><h2>Explore the possibilities</h2><p>Browse qipao, womenswear, menswear and wedding outfits.</p></article>
          <article><span>02 · THINK</span><h2>Consider what works for you</h2><p>Explore adjustable details and what matters in daily wear.</p></article>
          <article><span>03 · TALK</span><h2>Bring your references</h2><p>Save pieces and share your date, budget and fit priorities.</p></article>
        </section>

        <BespokeWorkLibrary locale="en" />

        <section className="bespoke-beyond shell section-space" id="design-decisions" aria-labelledby="bespoke-design-title">
          <div className="bespoke-section-intro">
            <p className="eyebrow">BEYOND THE PHOTO · FIT, FABRIC &amp; HANDWORK</p>
            <h2 id="bespoke-design-title">Beautiful is the beginning. Right for you is the goal.</h2>
            <p>Clothing comes together through choices about the wearer, movement, material and technique. There is no single correct style for everyone.</p>
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
          <Link href="/lookbook/handcraft" className="arrow-link">Explore making and fitting details →</Link>
        </section>

        <section className="bespoke-process-section section-space" id="process" aria-labelledby="bespoke-process-title">
          <div className="shell">
            <div className="bespoke-section-intro">
              <p className="eyebrow">THE BESPOKE JOURNEY · HOW IT WORKS</p>
              <h2 id="bespoke-process-title">Every step has a purpose.</h2>
              <p>From the first conversation to the final pressing, the aim is to discover what works and explain each decision clearly.</p>
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
              <strong>Typical reference: approximately 2–4 weeks</strong>
              <p>Actual timing depends on design complexity, fabric, fittings, production capacity and shipping. This is not a delivery guarantee.</p>
            </div>
          </div>
        </section>

        <section className="bespoke-book-section section-space" id="consultation" aria-labelledby="bespoke-consultation-title">
          <div className="shell bespoke-book-grid">
            <div>
              <p className="eyebrow">START WITH A CONVERSATION</p>
              <h2 id="bespoke-consultation-title">Discuss the idea before committing to a piece.</h2>
              <p>Come with a garment you love, an approaching occasion or a fit problem you want to solve. We first assess a suitable design and fitting path, then discuss a proposal, quote and timeframe.</p>
              <Link href="/contact#wechat" className="button button-paper">WeChat consultation details →</Link>
              <Link href="/lookbook" className="bespoke-book-lookbook">Explore the full Lookbook ↗</Link>
            </div>
            <div className="bespoke-wechat-note">
              <SiteImage src="/images/wechat-qr.png" alt="WeChat QR code for Chuweiwo bespoke consultation" width="632" height="632" loading="lazy" />
              <div><p className="eyebrow">WECHAT CONSULTATION</p><h3>Scan to start a conversation</h3><p>Mention “Bespoke enquiry” when connecting. If you saved designs, include their reference IDs.</p></div>
            </div>
          </div>
        </section>

        <section className="bespoke-faq shell section-space" aria-labelledby="bespoke-faq-title">
          <div className="bespoke-section-intro">
            <p className="eyebrow">FREQUENTLY ASKED</p>
            <h2 id="bespoke-faq-title">Questions worth asking before you begin.</h2>
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
