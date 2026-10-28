import { CraftCustomizationInvitation } from "../../../../components/craft-customization-invitation";
import type { Metadata } from "next";
import Link from "next/link";
import { SiteImage } from "../../../../components/site-image";
import { SiteFooter, SiteHeader } from "../../../../components/site-shell";

export const metadata: Metadata = {
  title: "Bian Embroidery | Wall Art, Screens & Lion Charms",
  description: "Discover Bian embroidery in framed floral art, tabletop screens and embroidered lion charms. Explore practical uses, embroidery details and different purchasing routes.",
};

const studies = [
  { image: "lotus-screen-detail", title: "Thread follows the petal", text: "In the lotus close view, pale and deep pink stitches change direction across the petals. The visible threads describe both an outline and areas of light: a way to look closely at how an embroidered image is built.", alt: "Close view of visible pink and ivory stitches in a lotus screen" },
  { image: "dragon-vase-picture", title: "A vessel becomes an image", text: "The red vase is the subject of a framed embroidered picture. Dragon scales, flowers and changing stitch directions give it detail; the finished work belongs to an interior display, rather than functioning as a vase.", alt: "Framed embroidered picture depicting a red vase with dragon and flowers" },
  { image: "paired-vertical-panels", title: "The frame changes the encounter", text: "Two slender floral panels sit within wide mounts and long frames. Compared with a circular standing screen, this format asks for a different wall space and viewing distance.", alt: "Two long framed embroidery panels with floral designs" },
  { image: "blue-panel-detail", title: "Read the finished surface", text: "A closer view of the blue-ground panel reveals separate floral motifs along its length. These supplied photographs and the accompanying short video document finished works; they do not show a stitch-by-stitch making sequence.", alt: "Detail of a long floral embroidery panel on a blue ground" },
];

export default function BianEmbroideryPage() {
  return (
    <div className="site-page product-detail-page bian-reference-page">
      <SiteHeader market="en" tone="paper" />
      <main id="main-content">
        <section className="product-detail shell-wide">
          <div className="product-gallery"><figure>
            <SiteImage src="/images/site/uploads-20261027/lotus-standing-screen.webp" alt="Lotus embroidery in a circular freestanding display frame" width={1080} height={1440} />
            <figcaption>LOTUS · CIRCULAR STANDING SCREEN</figcaption>
          </figure></div>
          <div className="product-summary">
            <Link className="product-back" href="/en/heritage">← Heritage Collection</Link>
            <p className="eyebrow">AVAILABLE NOW · BIAN EMBROIDERY</p>
            <h1>An image made in thread.</h1>
            <p className="product-chinese">汴绣 · 屏风与装框作品</p>
            <p className="product-lead">From framed pictures and tabletop screens to embroidered lion charms, Bian embroidery can become a piece for the home or a small object to carry.</p>
            <p>Bian embroidery includes framed art, tabletop screens and embroidered lion charms. Artworks are available by direct ImArtisan enquiry; lion charms are also listed on Etsy. Exact designs, materials, quantities, prices and delivery require confirmation. Only the peony evening bags remain Past Collection.</p>
            <div className="product-actions"><Link className="button button-ink" href="/contact#international">Enquire about Bian embroidery art</Link><Link className="text-link" href="/en/heritage#bian">Compare forms &amp; uses →</Link><a className="text-link" href="#details">Look closer ↓</a></div>
          </div>
        </section>
        <section className="craft-photo-story section-space shell" id="details">
          <p className="eyebrow">LOOKING AT THE HANDWORK</p>
          <h2>Stitch direction, colour and a finished frame.</h2>
          <p className="craft-photo-lead">The finished surfaces offer clues to the making. The captions describe what the photographs show, without assigning unverified stitch names or production methods.</p>
          <div className="craft-photo-grid">{studies.map((item) => <figure key={item.image}>
            <SiteImage src={"/images/site/uploads-20261027/" + item.image + ".webp"} alt={item.alt} loading="lazy" decoding="async" width={1080} height={1440} />
            <figcaption><h3>{item.title}</h3><p>{item.text}</p></figcaption>
          </figure>)}</div>
        </section>
        <section className="shell editorial-media-grid editorial-media-grid-short" aria-labelledby="bian-lion-title">
          <figure>
            <SiteImage src="/images/site/lion-charm.webp" alt="Colorful Bian-embroidered lion charms with tassels" loading="lazy" />
            <figcaption>BIAN EMBROIDERY · LION CHARMS</figcaption>
          </figure>
          <div>
            <p className="eyebrow">ANOTHER FORM OF BIAN EMBROIDERY</p>
            <h2 id="bian-lion-title">An embroidered charm to take with you.</h2>
            <p>While framed embroidery brings handwork into the home, embroidered lion charms bring it into everyday accessories and celebratory gifting. These charms are part of the same Bian embroidery craft collection, with a separate Etsy purchasing route.</p>
            <Link className="button button-ink" href="/en/heritage/lion-charm">Explore lion charms &amp; Etsy availability</Link>
          </div>
        </section>
        <section className="reference-detail-invitation section-space shell">
          <p className="eyebrow">CHOOSING FOR AN INTERIOR OR A GIFT</p>
          <h2>Begin with the format and the setting.</h2>
          <p>Compare a tabletop screen, a single framed picture or a pair of vertical panels. For an enquiry, share the reference ID, intended setting and approximate space available. Dimensions, supports, framing, care and supply must be checked for the particular work.</p>
          <Link className="button button-ink" href="/en/heritage#bian">Browse embroidery references</Link>
          <p><Link className="arrow-link" href="/en/heritage/blue-peony-bag">Explore the archived Blue Peony evening bag →</Link></p>
        </section>
      <CraftCustomizationInvitation craft="Bian embroidery, including home art and lion charms" />
        </main>
      <SiteFooter />
    </div>
  );
}

