import type { Metadata } from "next";
import Link from "next/link";
import { SiteImage } from "../../../../components/site-image";
import { SiteFooter, SiteHeader } from "../../../../components/site-shell";

export const metadata: Metadata = {
  title: "Yangzhou Ronghua · Velvet Flowers | Coming Soon",
  description:
    "Discover the handcraft of Yangzhou Ronghua velvet flowers and ImArtisan's exploration of occasion wear and lasting home keepsakes. Coming Soon.",
};

export default function RonghuaPage() {
  return (
    <div className="site-page">
      <SiteHeader market="en" tone="paper" />
      <main id="main-content">
        <section className="shell editorial-hero">
          <Link className="product-back" href="/en/heritage#ronghua">
            ← Heritage Collection
          </Link>
          <p className="eyebrow">COMING SOON · YANGZHOU RONGHUA</p>
          <h1>Flowers for the moment. Keepsakes for the years after.</h1>
          <p>
            Yangzhou Ronghua turns patiently shaped velvet into flowers with distinctive volume
            and softness. We are exploring how this craft can belong both to a meaningful occasion
            and to the life that follows it.
          </p>
          <p className="availability-note">
            Collection preview only. These pieces are not currently offered for purchase;
            final designs, release timing and availability have not yet been confirmed.
          </p>
          <Link className="button button-ink" href="/contact#international">
            Enquire about the collection
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
            call for their own design choices and careful testing before launch.
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
          <p className="eyebrow">EXPLORE FORMS &amp; USES · COMING SOON</p>
          <h2>What can this craft become?</h2>
          <p>Explore examples for ceremonies, brooches and lasting floral home displays, with development status clearly marked.</p>
          <Link className="button button-ink" href="/en/heritage/library#ronghua">
            View Yangzhou Ronghua in the Craft Library
          </Link>
        </section>
        </main>
      <SiteFooter />
    </div>
  );
}
