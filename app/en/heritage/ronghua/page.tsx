import { CraftCustomizationInvitation } from "../../../../components/craft-customization-invitation";
import type { Metadata } from "next";
import Link from "next/link";
import { SiteImage } from "../../../../components/site-image";
import { SiteFooter, SiteHeader } from "../../../../components/site-shell";

export const metadata: Metadata = {
  title: "Yangzhou Ronghua · Velvet Flowers | Available Now",
  description:
    "Discover the handcraft of Yangzhou Ronghua velvet flowers and ImArtisan's exploration of occasion wear and lasting home keepsakes. Available Now.",
};

const ronghuaForms = [
  { name: "Bridal hair comb", image: "red-bridal-hair-comb", alt: "Red velvet-flower comb with ornamental hanging details" },
  { name: "Floral hairpin", image: "blue-floral-hairpin", alt: "Blue floral arrangement on a long hairpin" },
  { name: "Lapel flower", image: "violet-brooch-worn", alt: "Violet velvet-flower corsage worn on a shoulder" },
  { name: "Ginkgo earrings", image: "ginkgo-earrings", alt: "Yellow ginkgo flower earrings displayed as a pair" },
  { name: "Decorative hair claw", image: "red-plum-hair-claw", alt: "Red plum flowers fitted to a dark hair claw" },
  { name: "Home floral arrangement", image: "violet-floral-vase", alt: "Violet flowers arranged in a porcelain vase" },
  { name: "Bird sculpture", image: "blue-bird-sculpture", alt: "Blue bird-shaped floral sculpture in a display box" },
  { name: "Framed botanical art", image: "framed-bamboo-art", alt: "Framed bamboo leaf composition with original calligraphy" },
];

export default function RonghuaPage() {
  return (
    <div className="site-page">
      <SiteHeader market="en" tone="paper" />
      <main id="main-content">
        <section className="shell editorial-hero">
          <Link className="product-back" href="/en/heritage#ronghua">
            ← Heritage Collection
          </Link>
          <p className="eyebrow">AVAILABLE NOW · YANGZHOU RONGHUA</p>
          <h1>Flowers for the moment. Keepsakes for the years after.</h1>
          <p>
            Yangzhou Ronghua turns patiently shaped velvet into flowers with distinctive volume
            and softness. We are exploring how this craft can belong both to a meaningful occasion
            and to the life that follows it.
          </p>
          <p className="availability-note">
            Ronghua pieces are available through direct enquiry with ImArtisan, not on Etsy.
            Please contact us to confirm the specific design, production options, price,
            quantity, care requirements and delivery timeline.
          </p>
          <Link className="button button-ink" href="/contact#international">
            Enquire about Ronghua pieces
          </Link>
        </section>

        <section className="shell editorial-media-grid" aria-label="Yangzhou Ronghua gallery">
          <figure>
            <SiteImage
              src="/images/site/ronghua/ronghua-home-vase.webp"
              alt="Yangzhou velvet flowers arranged as a lasting decorative floral display"
              loading="lazy"
            />
            <figcaption>01 / A FLORAL OBJECT FOR THE HOME</figcaption>
          </figure>
          <figure>
            <SiteImage
              src="/images/site/ronghua/ronghua-craft-hands.webp"
              alt="Hands shaping a traditional Ronghua velvet flower"
              loading="lazy"
            />
            <figcaption>02 / THE MAKING</figcaption>
          </figure>
          <figure>
            <SiteImage
              src="/images/site/ronghua/ronghua-worn-brooch.webp"
              alt="A handmade velvet-flower brooch styled as an accessory"
              loading="lazy"
            />
            <figcaption>03 / WEARABLE FLORAL ART</figcaption>
          </figure>
        </section>

        <section className="shell ronghua-form-section section-space" aria-labelledby="ronghua-form-title">
          <div className="ronghua-form-heading">
            <div>
              <p className="eyebrow">FROM THE COLLECTION · DIFFERENT FORMS</p>
              <h2 id="ronghua-form-title">More than a single kind of flower.</h2>
            </div>
            <p>
              Discover Ronghua as bridal combs, hairpins, hair claws, brooches,
              earrings, floral arrangements and display art. Each form asks for a
              different fitting, structure and care approach.
            </p>
          </div>
          <div className="ronghua-form-grid">
            {ronghuaForms.map((item) => (
              <figure key={item.image}>
                <SiteImage
                  src={`/images/site/ronghua/collection/${item.image}.webp`}
                  alt={item.alt}
                  loading="lazy"
                />
                <figcaption>{item.name}</figcaption>
              </figure>
            ))}
          </div>
          <Link className="button button-ink" href="/en/heritage#ronghua">
            Browse all 23 Ronghua references &amp; uses
          </Link>
        </section>

        <section className="shell editorial-section" id="making">
          <p className="eyebrow">WHY RONGHUA</p>
          <h2>One flower, two lives.</h2>
          <p>
            A wedding, graduation or celebration may last only a day. The craft behind an
            accessory deserves more consideration than a single use. Our design direction
            explores floral brooches and hair ornaments that could later become a small
            home display or a personal keepsake.
          </p>
          <p>
            Ronghua is distinct from Chanhua, the thread-wrapped floral technique in our
            available collection. Ronghua's velvet texture, volume and care requirements
            call for their own design choices and care considerations when selecting a specific piece.
          </p>
          <Link className="arrow-link" href="/en/heritage/chanhua">
            Discover available Chanhua ornaments <span aria-hidden="true">→</span>
          </Link>
          <div className="ronghua-article-return">
            <Link className="arrow-link" href="/journal/where-craft-belongs">
              Read our approach to matching craft with everyday use <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      <section className="reference-detail-invitation section-space shell">
          <p className="eyebrow">EXPLORE FORMS &amp; USES · AVAILABLE NOW</p>
          <h2>What can this craft become?</h2>
          <p>Explore 23 documented forms including wedding combs, floral brooches, earrings, hair accessories, bird sculptures and home arrangements. Each design is available for sourcing enquiry, subject to its individual specifications.</p>
          <Link className="button button-ink" href="/en/heritage#ronghua">
            View Yangzhou Ronghua in the Craft Library
          </Link>
        </section>
        <CraftCustomizationInvitation craft="Yangzhou Ronghua velvet flowers" />
        </main>
      <SiteFooter />
    </div>
  );
}
