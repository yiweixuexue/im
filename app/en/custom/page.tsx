import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading, SiteFooter, SiteHeader } from "../../../components/site-shell";

export const metadata: Metadata = {
  title: "Select Ceremonial Custom",
  description:
    "Selected Chinese-inspired qipao, wedding and tailored ceremonial commissions by ImArtisan, considered case by case.",
};

const process = [
  ["01", "Context first", "We begin with the occasion, location, date and what you want the clothing to express."],
  ["02", "Feasibility", "We confirm whether fittings, timing and communication can support the quality the piece requires."],
  ["03", "Direction", "Silhouette, material, palette and craft details are developed as one coherent proposal."],
  ["04", "Fitting & making", "The fitting plan is agreed before the commission begins; complex work is never treated as remote ready-to-wear."],
];

export default function CeremonialCustomPage() {
  return (
    <div className="site-page">
      <SiteHeader market="en" tone="light" />
      <main id="main-content">
        <section className="market-hero ceremonial-market-hero">
          <img src="/images/site/custom-ceremony.webp" alt="Couple in coordinated Chinese-inspired ceremonial clothing" />
          <div className="market-hero-shade" aria-hidden="true" />
          <div className="shell market-hero-copy">
            <p className="eyebrow">SELECT CEREMONIAL CUSTOM</p>
            <h1>Clothing for a moment<br />you will remember.</h1>
            <p>
              A limited number of Chinese-inspired qipao and tailored commissions are considered for weddings,
              ceremonies and meaningful portraits.
            </p>
            <div className="hero-button-row">
              <Link className="button button-paper" href="/contact#international">
                Discuss a commission
              </Link>
              <Link className="text-link text-link-light" href="/lookbook">
                View selected work <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="commission-position section-space shell">
          <SectionHeading
            eyebrow="A COMPLEMENTARY SERVICE, NOT THE MAIN COLLECTION"
            title="Considered case by case"
            intro="Heritage objects remain ImArtisan’s international focus. Ceremonial custom is offered only when distance, timing and fitting conditions allow the work to be done responsibly."
          />
          <div className="commission-three">
            <article><span>QIPAO</span><h3>Modern qipao</h3><p>Traditional line, contemporary proportion and details chosen for the person rather than a fixed ideal.</p></article>
            <article><span>TAILORING</span><h3>Coordinated menswear</h3><p>Chinese references and modern tailoring developed to sit naturally beside the bride’s look.</p></article>
            <article><span>FAMILY</span><h3>Family & portrait dressing</h3><p>A shared visual language without placing every person in the same garment.</p></article>
          </div>
        </section>

        <section className="commission-process section-space">
          <div className="shell">
            <SectionHeading eyebrow="HOW IT BEGINS" title="Clarity before commitment" light />
            <ol>
              {process.map(([no, title, copy]) => (
                <li key={no}><span>{no}</span><div><h3>{title}</h3><p>{copy}</p></div></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="commission-fit section-space shell">
          <div>
            <p className="eyebrow">A GOOD FIT FOR</p>
            <h2>This service may be right when…</h2>
          </div>
          <ul>
            <li>Your event date allows time for design, fitting and careful production.</li>
            <li>You value a coherent couple or family story more than a single trend reference.</li>
            <li>You are able to support an agreed fitting plan in China or through a suitable local arrangement.</li>
            <li>You want a piece to keep after the ceremony, not a costume for one photograph.</li>
          </ul>
        </section>

        <section className="simple-cta section-space">
          <div className="shell">
            <p className="eyebrow">START WITH CONTEXT</p>
            <h2>Tell us where, when and what the moment means to you.</h2>
            <Link className="button button-paper" href="/contact#international">Discuss a commission</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
