import { CraftCustomizationInvitation } from "../../../../components/craft-customization-invitation";
import type { Metadata } from "next";
import Link from "next/link";
import { SiteImage } from "../../../../components/site-image";
import { SiteHeader, SiteFooter } from "../../../../components/site-shell";
export const metadata: Metadata = { title: "Embroidered Lion Charms | Available Now", description: "Explore ImArtisan's embroidered lion charms and their lively textile character." };
export default function LionCharmPage(){return <div className="site-page"><SiteHeader market="en" tone="paper"/><main id="main-content"><section className="shell editorial-hero"><p className="eyebrow">AVAILABLE NOW · BIAN EMBROIDERY</p><h1>A small lion, a lively expression.</h1><p>These colorful lion charms are a small, wearable form of Bian embroidery from Kaifeng. Their lively motifs turn intricate textile handwork into an everyday accessory or celebratory gift.</p><a className="button button-ink" href="https://www.etsy.com/shop/ImArtisanStudio" target="_blank" rel="noopener noreferrer">Browse current Etsy listings ↗</a><p className="availability-note">Check the Etsy storefront for the specific charm variants currently listed, pricing and dispatch details.</p></section><section className="shell editorial-media-grid editorial-media-grid-short"><figure><SiteImage src="/images/site/lion-charm.webp" alt="Colorful embroidered Chinese lion charms with tassels"/><figcaption>BIAN EMBROIDERY · LION CHARM</figcaption></figure><div><p className="eyebrow">WHY THIS OBJECT</p><h2>Craft can bring delight into the everyday.</h2><p>A textile charm can accompany a bag, a key set or a small gift. Its worth need not depend on a grand occasion: careful making and personal meaning can be part of ordinary life.</p><Link className="arrow-link" href="/en/heritage/bian-embroidery">Explore Bian embroidery artworks &amp; craft story →</Link></div></section><section className="reference-detail-invitation section-space shell">
          <p className="eyebrow">EXPLORE FORMS &amp; USES · AVAILABLE COLLECTION</p>
          <h2>Explore more Bian embroidery forms</h2>
          <p>Review the illustrated charm and its potential uses before checking the current assortment.</p>
          <Link className="button button-ink" href="/en/heritage#bian">
            View lion charms within the Bian embroidery collection
          </Link>
        </section>
        <CraftCustomizationInvitation craft="embroidered lion charms" />
        </main><SiteFooter/></div>}