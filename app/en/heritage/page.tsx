import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "../../../components/product-card";
import { SectionHeading, SiteFooter, SiteHeader } from "../../../components/site-shell";

export const metadata: Metadata = {
  title: "Heritage Collection",
  description:
    "Explore ImArtisan's edit of Chinese embroidery, hand-wrapped floral ornaments and thoughtful objects, with clear cultural and material context.",
};

const etsyShop = "https://www.etsy.com/shop/ImArtisanStudio";

export default function HeritageCollectionPage() {
  return (
    <div className="site-page">
      <SiteHeader market="en" tone="light" />
      <main id="main-content">
        <section className="market-hero heritage-market-hero">
          <img src="/images/site/blue-peony-bag.webp" alt="Blue peony evening bag with traditional Bian embroidery" />
          <div className="market-hero-shade" aria-hidden="true" />
          <div className="shell market-hero-copy">
            <p className="eyebrow">IMARTISAN · HERITAGE COLLECTION</p>
            <h1>Craft with a past.<br />Objects with a life now.</h1>
            <p>
              Chinese heritage craft and thoughtful objects, presented through the hands, techniques and
              cultural ideas that give them meaning.
            </p>
            <div className="hero-button-row">
              <a className="button button-paper" href={etsyShop} target="_blank" rel="noreferrer">
                Shop on Etsy
              </a>
              <Link className="text-link text-link-light" href="#collection">
                Explore the edit <span aria-hidden="true">↓</span>
              </Link>
            </div>
          </div>
          <p className="market-hero-note">CHINESE HERITAGE · CONTEMPORARY LIFE</p>
        </section>

        <section className="heritage-intro section-space shell">
          <p className="vertical-label">OUR WAY OF SEEING</p>
          <div>
            <p className="eyebrow">BEYOND THE OBJECT</p>
            <h2>First, beauty draws you in.<br />Then the making gives it depth.</h2>
          </div>
          <div className="definition-copy">
            <p>
              ImArtisan is not a marketplace of anything that merely appears Chinese. Each piece is considered
              for the intelligence of its construction, the clarity of its cultural roots and its ability to live
              naturally in a contemporary wardrobe or home.
            </p>
            <p>
              We name techniques carefully. A documented heritage designation is stated only where it can be
              supported; otherwise we use precise language such as “traditional Chinese craft” or “contemporary
              work rooted in Chinese heritage.”
            </p>
          </div>
        </section>

        <section className="heritage-collection section-space" id="collection">
          <div className="shell">
            <SectionHeading
              eyebrow="THE IMARTISAN EDIT · CURRENT SELECTION"
              title="Objects chosen to be used, gifted and kept"
              intro="Current availability and dispatch timing are shown in the Etsy shop."
            />
            <div className="product-grid product-grid-heritage">
              <ProductCard
                title="Blue Peony Evening Bag"
                chinese="蓝色牡丹汴绣包"
                craft="TRADITIONAL BIAN EMBROIDERY"
                image="/images/site/blue-peony-bag.webp"
                href="/en/heritage/blue-peony-bag"
                tag="STORY + DETAILS"
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
                image="/images/site/chanhua-worn.webp"
                href={etsyShop}
              />
              <ProductCard
                title="Tulip Brooch"
                chinese="郁金香缠花胸针"
                craft="CONTEMPORARY CHANHUA"
                image="/images/site/tulip-brooch.webp"
                href={etsyShop}
              />
              <ProductCard
                title="Lion Embroidered Charm"
                chinese="醒狮刺绣挂件"
                craft="EMBROIDERED TEXTILE ORNAMENT"
                image="/images/site/lion-charm.webp"
                href={etsyShop}
              />
              <ProductCard
                title="Tulip for Ceremony"
                chinese="郁金香缠花胸针"
                craft="WEARABLE FLORAL ORNAMENT"
                image="/images/site/tulip-ceremony.webp"
                href={etsyShop}
              />
            </div>
          </div>
        </section>

        <section className="craft-explainer section-space">
          <div className="shell craft-explainer-grid">
            <div className="craft-explainer-image">
              <img src="/images/site/blue-peony-detail.webp" alt="Close detail showing tonal embroidery stitches" loading="lazy" />
              <span>THREAD AS SHADE, LINE AND LIGHT</span>
            </div>
            <div>
              <p className="eyebrow">BIAN EMBROIDERY · 汴绣</p>
              <h2>When thread begins to behave like a brush</h2>
              <p>
                Bian embroidery is associated with Kaifeng, China, and is admired for its pictorial approach.
                Tonal shifts, stitch direction and density work together to suggest the movement of petals,
                leaves and light.
              </p>
              <p>
                The challenge is not simply to fill a shape. The maker must observe how an image is built, then
                translate that observation into thread without flattening it.
              </p>
              <Link className="arrow-link" href="/journal#heritage">
                Read the Heritage Journal <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="gift-section section-space shell">
          <div className="gift-copy">
            <p className="eyebrow">GIFT-READY BY DEFAULT</p>
            <h2>A thoughtful object should arrive thoughtfully.</h2>
            <p>
              ImArtisan pieces are presented as gifts whether they are chosen for someone else or for yourself.
              A complimentary handwritten message can be included when requested.
            </p>
            <div className="gift-links">
              <Link className="button button-ink" href="/care">
                Care & shipping
              </Link>
              <a className="text-link" href={etsyShop} target="_blank" rel="noreferrer">
                View the Etsy shop <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <img src="/images/site/gift-packaging.webp" alt="Kraft gift box tied with an ivory ribbon" loading="lazy" />
        </section>

        <section className="custom-supplement section-space">
          <div className="shell custom-supplement-grid">
            <img src="/images/site/custom-ceremony.webp" alt="Chinese-inspired ceremonial custom clothing" loading="lazy" />
            <div>
              <p className="eyebrow">SELECT CEREMONIAL CUSTOM</p>
              <h2>For a small number of meaningful commissions</h2>
              <p>
                Heritage craft is the international focus. For selected weddings and ceremonial occasions,
                ImArtisan also considers Chinese-inspired qipao and tailored garments by request.
              </p>
              <Link className="arrow-link" href="/en/custom">
                Learn about ceremonial commissions <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
