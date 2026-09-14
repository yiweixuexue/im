import type { Metadata } from "next";
import Link from "next/link";
import { SiteImage } from "../../components/site-image";
import { SectionHeading, SiteFooter, SiteHeader } from "../../components/site-shell";

export const metadata: Metadata = {
  title: "Care & Shipping",
  description: "Care, gift presentation, dispatch and shipping guidance for ImArtisan handmade objects.",
};

const careItems = [
  {
    title: "Embroidered bags",
    copy: "Keep dry and avoid friction with rough surfaces. Spot-clean only with a clean, barely damp cloth. Store the chain separately and fill the bag lightly with acid-free tissue so the structure retains its shape.",
  },
  {
    title: "Wrapped floral ornaments",
    copy: "Handle by the stem or metal base rather than pulling petals and leaves. Keep away from moisture, perfume and hairspray. Store flat or supported in its box, away from direct sunlight.",
  },
  {
    title: "Silk and delicate textiles",
    copy: "Follow the item-specific label. For delicate silk, professional dry cleaning is usually the safest option. Avoid prolonged sunlight, high heat and direct contact with cosmetics.",
  },
  {
    title: "Metal frames and findings",
    copy: "Wipe gently with a soft dry cloth after use. Keep metal pieces dry and separated from sharp objects. Natural changes in finish can occur with time and handling.",
  },
];

const shippingFaqs = [
  ["Where do you ship?", "Available destinations are shown in the Etsy listing for each item. Some materials may carry destination-specific restrictions, so shipping coverage can differ by piece."],
  ["How long will dispatch take?", "Current processing and dispatch timing is stated on each Etsy listing. Handmade and small-batch pieces may not share the same timeline; the item page is the source of truth at checkout."],
  ["Will I pay customs or import fees?", "International duties, taxes or carrier fees may be charged by the destination country and are normally the buyer’s responsibility unless the checkout explicitly states otherwise."],
  ["How is my order presented?", "Pieces are prepared in ImArtisan’s gift-ready presentation with protective inner wrapping, a kraft box or suitable protective package, ribbon and a brand card according to the object’s needs."],
  ["Can you include a gift message?", "Yes. A short handwritten message can be included at no additional charge when the text is supplied with the order."],
  ["What if an order arrives damaged?", "Photograph the outer package, shipping label, inner protection and damaged area as soon as possible, then contact us through Etsy so we can review the shipment record and next step."],
];

export default function CarePage() {
  return (
    <div className="site-page care-page">
      <SiteHeader market="en" tone="paper" />
      <main id="main-content">
        <section className="paper-hero shell">
          <p className="eyebrow">CARE · SHIPPING · GIFTING</p>
          <h1>Keep it well.<br />Let it live with you.</h1>
          <p>
            Thoughtful care protects the handwork, while clear shipping information helps every piece begin its
            next life with confidence.
          </p>
        </section>

        <section className="care-intro section-space shell">
          <div className="care-intro-image">
            <SiteImage src="/images/site/gift-packaging.webp" alt="ImArtisan gift-ready kraft box with ivory ribbon" loading="lazy" />
          </div>
          <div>
            <p className="eyebrow">GIFT-READY BY DEFAULT</p>
            <h2>No split between “ordinary” and “special” orders.</h2>
            <p>
              Every ImArtisan piece is meant to feel considered when it is opened. Presentation is adapted to the
              object, but the principle remains the same: protective, restrained and ready to give—including when
              the recipient is you.
            </p>
            <p>A complimentary handwritten message may be added when requested.</p>
          </div>
        </section>

        <section className="care-guides section-space">
          <div className="shell">
            <SectionHeading
              eyebrow="OBJECT CARE"
              title="A small practice of attention"
              intro="Item-specific instructions always take priority over these general guidelines."
            />
            <div className="care-grid">
              {careItems.map((item, index) => (
                <article key={item.title}>
                  <span>0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="shipping-section section-space shell">
          <SectionHeading
            eyebrow="SHIPPING & ORDER QUESTIONS"
            title="What to expect"
            intro="Exact item availability, price and dispatch timing are maintained in the Etsy shop."
          />
          <div className="faq-list">
            {shippingFaqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}<span aria-hidden="true">＋</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="simple-cta section-space">
          <div className="shell">
            <p className="eyebrow">STILL UNSURE?</p>
            <h2>Ask before you choose.</h2>
            <div>
              <Link className="button button-paper" href="/contact#international">Contact ImArtisan</Link>
              <a className="text-link text-link-light" href="https://www.etsy.com/shop/ImArtisanStudio" target="_blank" rel="noreferrer">Visit the Etsy shop <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
