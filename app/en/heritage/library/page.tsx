import type { Metadata } from "next";
import Link from "next/link";
import { CraftReferenceLibrary } from "../../../../components/craft-reference-library";
import { SiteFooter, SiteHeader } from "../../../../components/site-shell";

export const metadata: Metadata = {
  title: "Craft & Product Library | Forms, Uses & Sourcing",
  description:
    "Explore 26 documented examples across Chinese traditional craft techniques. Filter by craft, occasion and intended use, then prepare a sourcing enquiry with ImArtisan.",
};

export default function CraftLibraryPage() {
  return (
    <div className="site-page reference-library-page">
      <SiteHeader market="en" tone="paper" />
      <main id="main-content">
        <section className="reference-hero shell">
          <p className="eyebrow">IMARTISAN · CRAFT & PRODUCT LIBRARY</p>
          <h1>Discover what a craft can become.</h1>
          <p>
            From a thread-wrapped hair ornament to a lacquered home object, each technique has its
            own strengths, possibilities and care requirements. Explore real work through the objects
            it produces, how people might use them and the settings in which they belong.
          </p>
          <div className="reference-hero-actions">
            <a className="button button-ink" href="#browse">Explore the library ↓</a>
            <Link href="/en/partnerships" className="arrow-link">
              For retail & business partners <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section className="reference-principles shell" aria-label="How to read the library">
          <article>
            <span>01 · FORM</span>
            <h2>What is it?</h2>
            <p>See the finished form, its craft tradition and a specific example of the maker’s work.</p>
          </article>
          <article>
            <span>02 · LIFE</span>
            <h2>How is it used?</h2>
            <p>Discover possible wearing, gifting, ceremonial or home contexts—and practical limits.</p>
          </article>
          <article>
            <span>03 · FEASIBILITY</span>
            <h2>What can be sourced?</h2>
            <p>Save references, then enquire about actual availability, specifications and order terms.</p>
          </article>
        </section>

        <div className="reference-trust-note shell" id="browse">
          <p className="eyebrow">IMPORTANT · A VISUAL REFERENCE, NOT A LIVE INVENTORY</p>
          <p>
            Images are examples of work, not a promise that every pictured design is currently in stock
            or can be reproduced. An “Available Collection” label describes the craft range, not guaranteed
            availability of the exact photograph. “Coming Soon” collections are previews, while “Past
            Collection” examples are retained for design and technique reference only. Photos, materials,
            safety and care guidance, prices, quantities and production lead times are confirmed for
            a particular project before an order is agreed.
          </p>
          <p>Reference IDs in this library identify images for discussion; they are not retail SKUs or GTINs.</p>
        </div>

        <CraftReferenceLibrary />
      </main>
      <SiteFooter />
    </div>
  );
}
