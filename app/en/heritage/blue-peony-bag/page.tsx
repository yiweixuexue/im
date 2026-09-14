import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../../../components/site-shell";

export const metadata: Metadata = {
  title: "Blue Peony Bian Embroidery Bag",
  description:
    "Discover the materials, dimensions, cultural background and care of ImArtisan's blue peony Bian embroidery evening bag.",
};

const etsyShop = "https://www.etsy.com/shop/ImArtisanStudio";

const productDetails = [
  ["Chinese name", "蓝色牡丹汴绣包"],
  ["Pinyin", "Lán sè mǔdān Biànxiù bāo"],
  ["Technique", "Traditional Bian embroidery"],
  ["Materials", "Embroidered textile panel, textile body and lining, gold-tone metal frame, top handle and chain strap"],
  ["Dimensions", "Approx. 31 W × 20.5 H × 9.2 D cm / 12.2 × 8.1 × 3.6 in"],
  ["Chain", "Approx. 44 cm / 17.3 in"],
  ["Making & dispatch", "Produced in small quantities; current timing is confirmed on the Etsy listing"],
];

export default function BluePeonyBagPage() {
  return (
    <div className="site-page product-detail-page">
      <SiteHeader market="en" tone="paper" />
      <main id="main-content">
        <section className="product-detail shell-wide">
          <div className="product-gallery">
            <figure>
              <img src="/images/site/blue-peony-bag.webp" alt="Front of the blue peony Bian embroidery evening bag" />
              <figcaption>FRONT · PAINTERLY PEONY PANEL</figcaption>
            </figure>
            <figure>
              <img src="/images/site/blue-peony-detail.webp" alt="Close detail of blue and ivory peony embroidery" />
              <figcaption>DETAIL · STITCH DIRECTION AND TONAL LAYERING</figcaption>
            </figure>
          </div>

          <aside className="product-summary">
            <Link className="product-back" href="/en/heritage">
              ← Heritage Collection
            </Link>
            <p className="eyebrow">THE IMARTISAN EDIT · CARRY</p>
            <h1>Blue Peony<br />Evening Bag</h1>
            <p className="product-chinese">蓝色牡丹汴绣包</p>
            <p className="product-lead">
              A calm, luminous peony translated into thread, balanced by an ivory body and structured gold-tone
              frame.
            </p>
            <div className="product-actions">
              <a className="button button-ink" href={etsyShop} target="_blank" rel="noreferrer">
                Check availability on Etsy
              </a>
              <Link className="text-link" href="/contact#international">
                Ask a question <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <p className="availability-note">Availability, price and dispatch timing are kept current in the Etsy shop.</p>
          </aside>
        </section>

        <section className="product-story section-space">
          <div className="shell product-story-grid">
            <div>
              <p className="eyebrow">CULTURAL BACKGROUND</p>
              <h2>Peony, observed rather than outlined</h2>
            </div>
            <div>
              <p>
                In Chinese visual culture, the peony has long been associated with beauty, abundance and honor.
                This piece moves away from a ceremonial red palette: pale blue, slate and ivory give the familiar
                flower a quieter, more contemporary presence.
              </p>
              <p>
                Bian embroidery is associated with Kaifeng and is known for picture-like expression. Here, the
                maker changes stitch direction and density to build the petals as areas of light and shade. The
                result sits between image and object—more than a surface print, yet designed to be carried.
              </p>
            </div>
          </div>
        </section>

        <section className="product-facts section-space shell">
          <div className="product-facts-head">
            <p className="eyebrow">OBJECT NOTES</p>
            <h2>What to know before choosing</h2>
          </div>
          <dl>
            {productDetails.map(([term, description]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{description}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="product-use section-space">
          <div className="shell product-use-grid">
            <div className="product-use-image">
              <img src="/images/site/blue-peony-detail.webp" alt="Blue peony embroidery in close view" loading="lazy" />
            </div>
            <div>
              <p className="eyebrow">WEAR · DISPLAY · KEEP</p>
              <h2>For an evening out—and the quiet after</h2>
              <p>
                Carry it with a qipao, a wedding-guest look, an evening dress or a pared-back modern outfit. At
                home, store it upright away from strong light and humidity; it can also be displayed as a textile
                object when not in use.
              </p>
              <h3>Care</h3>
              <ul>
                <li>Keep the embroidered surface dry and avoid friction with rough materials.</li>
                <li>Spot-clean only with a clean, barely damp cloth; do not soak or machine wash.</li>
                <li>Store the chain wrapped separately so it does not press into the embroidery.</li>
                <li>Fill lightly with acid-free tissue to help the structure retain its shape.</li>
              </ul>
              <Link className="arrow-link" href="/care">
                Full care & shipping guidance <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="product-final-cta section-space">
          <div className="shell">
            <p className="eyebrow">MORE THAN A BAG</p>
            <h2>An image to carry. A piece of handwork to keep.</h2>
            <div>
              <a className="button button-paper" href={etsyShop} target="_blank" rel="noreferrer">
                Visit ImArtisanStudio on Etsy
              </a>
              <Link className="text-link text-link-light" href="/journal#heritage">
                Read the craft story <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
