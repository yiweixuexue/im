import type { Metadata } from "next";
import Link from "next/link";
import { CraftReferenceLibrary } from "../../../components/craft-reference-library";
import { PartnershipInvitation } from "../../../components/partnership-invitation";
import { SiteImage } from "../../../components/site-image";
import { SiteFooter, SiteHeader } from "../../../components/site-shell";

export const metadata: Metadata = {
  title: "Heritage Crafts & Product Library | ImArtisan",
  description:
    "Explore handmade Chinese craft objects by technique, practical use and care. Discover Chanhua, Yangzhou Ronghua, blended incense, Chengdu lacquerware, Bian embroidery art and lion charms, then enquire about sourcing.",
};

const craftStories = [
  {
    title: "Chanhua · Thread-Wrapped Flowers",
    type: "FLORAL ADORNMENT · AVAILABLE NOW",
    image: "/images/site/chanhua-making.webp",
    alt: "Handwork behind Chanhua thread-wrapped flowers",
    href: "/en/heritage/chanhua",
    description: "How careful wrapping and shaping become delicate hair ornaments and brooches.",
  },
  {
    title: "Yangzhou Ronghua · Velvet Flowers",
    type: "FLORAL ART · AVAILABLE NOW",
    image: "/images/site/ronghua/ronghua-craft-hands.webp",
    alt: "Hands crafting a velvet flower",
    href: "/en/heritage/ronghua",
    description: "A soft floral craft with potential to move from ceremonies to treasured home displays.",
  },
  {
    title: "He Xiang · Blended Incense",
    type: "FRAGRANCE & FORM · AVAILABLE NOW",
    image: "/images/site/uploads-20261027/incense-pendant-finishing.webp",
    alt: "Finishing a traditional shaped incense ornament",
    href: "/en/heritage/taihe-xiangtang",
    description: "Explore aromatic ingredients, shaped plaques and the choices behind portable scent.",
  },
  {
    title: "Chengdu Lacquerware",
    type: "LAYERED HANDWORK · AVAILABLE NOW",
    image: "/images/site/lacquer/process-painting.webp",
    alt: "A maker painting a decorated lacquer surface",
    href: "/en/heritage/chengdu-lacquerware",
    description: "The patient layers and surface work behind lacquer adornments and home objects.",
  },
  {
    title: "Bian Embroidery · Pictorial Art",
    type: "EMBROIDERED HOME ART · AVAILABLE NOW",
    image: "/images/site/uploads-20261027/lotus-screen-detail.webp",
    alt: "Close detail of a Bian-embroidered lotus screen",
    href: "/en/heritage/bian-embroidery",
    description: "See how stitches, tonal depth and framing translate into wall art and table screens.",
  },
  {
    title: "Embroidered Lion Charms",
    type: "TEXTILE ORNAMENTS · AVAILABLE NOW",
    image: "/images/site/lion-charm.webp",
    alt: "Small embroidered lion charms with tassels",
    href: "/en/heritage/lion-charm",
    description: "Expressive textile ornaments for everyday accessories and joyful gifting.",
  },
];

export default function HeritageCollectionPage() {
  return (
    <div className="site-page heritage-library-home">
      <SiteHeader market="en" tone="paper" />
      <main id="main-content">
        <section className="heritage-library-hero shell-wide" aria-labelledby="heritage-heading">
          <div className="heritage-library-hero-copy">
            <p className="eyebrow">IMARTISAN · HERITAGE COLLECTION</p>
            <h1 id="heritage-heading">Discover what a craft can become.</h1>
            <p>
              A living library of handmade objects—what they are, how to use them,
              what to consider, and the craft knowledge behind each form.
              Explore at your own pace, then select references to discuss with ImArtisan.
            </p>
            <div className="heritage-library-hero-actions">
              <a className="button button-ink" href="#collection">
                Browse crafts &amp; objects ↓
              </a>
              <Link className="arrow-link" href="#customize">
                Explore customization <span aria-hidden="true">→</span>
              </Link>
            </div>
            <p className="heritage-library-hero-note">
              TRADITIONAL CRAFT · CONTEMPORARY LIFE · CUSTOMIZATION WELCOME
            </p>
          </div>
          <div className="heritage-library-hero-images" aria-label="Three crafted objects: a Chanhua floral brooch, a worn Ronghua corsage, and a lacquer vessel">
            <SiteImage src="/images/site/tulip-brooch.webp" alt="Red Chanhua tulip brooch with carefully wrapped petals on a pale background" />
            <SiteImage src="/images/site/ronghua/collection/violet-brooch-worn.webp" alt="Lavender Yangzhou Ronghua floral brooch worn with a modern grey garment" loading="lazy" />
            <SiteImage src="/images/site/lacquer/maple-vessel.webp" alt="Black Chengdu lacquer home vessel with maple-leaf decoration" loading="lazy" />
          </div>
        </section>

        <section className="heritage-library-guidance shell" aria-label="How to use the collection">
          <div>
            <strong>Explore the form</strong>
            <p>Search by craft, object or intended use.</p>
          </div>
          <div>
            <strong>Understand its life</strong>
            <p>Read how to use and care for each reference.</p>
          </div>
          <div>
            <strong>Ask about sourcing</strong>
            <p>Build a shortlist, then confirm specific products and terms.</p>
          </div>
        </section>

        <div id="collection" className="heritage-primary-library">
          <CraftReferenceLibrary />
        </div>

        <section className="heritage-custom-section section-space" id="customize" aria-labelledby="heritage-custom-title">
          <div className="shell heritage-custom-grid">
            <div className="heritage-custom-visual">
              <SiteImage
                src="/images/site/ronghua/ronghua-craft-hands.webp"
                alt="A maker shaping a flower through traditional handwork"
                loading="lazy"
              />
              <span>CUSTOM WORK · MADE IN CONVERSATION</span>
            </div>
            <div className="heritage-custom-copy">
              <p className="eyebrow">CUSTOMIZATION ACROSS EVERY CRAFT</p>
              <h2 id="heritage-custom-title">The right object starts with your idea.</h2>
              <p>
                Every heritage craft in our collection is open to customization enquiries.
                Whether you are selecting a meaningful personal piece, developing an event gift,
                or sourcing a distinctive retail collection, tell us what you have in mind.
              </p>
              <p>
                We work with the makers to explore suitable forms, colors, motifs, scale,
                presentation and quantities. What can be changed depends on the technique,
                material and the maker&apos;s creative decisions; each proposal, cost and timeline
                is confirmed before production. Archived Bian embroidery evening bags
                remain a Past Collection.
              </p>
              <div className="heritage-custom-actions">
                <Link className="button button-ink" href="/contact#international">
                  Discuss a custom project
                </Link>
                <Link className="arrow-link" href="/en/partnerships">
                  Wholesale &amp; gifting enquiries <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="heritage-stories-section section-space" id="craft-stories" aria-labelledby="craft-stories-heading">
          <div className="shell">
            <div className="heritage-stories-head">
              <div>
                <p className="eyebrow">THE PEOPLE &amp; PROCESSES BEHIND THE OBJECTS</p>
                <h2 id="craft-stories-heading">First the object. Then the depth behind it.</h2>
              </div>
              <p>
                When a piece catches your attention, follow its techniques, materials and making.
                Our role is to bring a maker&apos;s knowledge into conversation with how the object might be lived with.
              </p>
            </div>
            <div className="heritage-stories-grid">
              {craftStories.map((story) => (
                <article key={story.href} className="heritage-story-card">
                  <Link href={story.href} aria-label={`Read about ${story.title}`}>
                    <SiteImage src={story.image} alt={story.alt} loading="lazy" />
                  </Link>
                  <p className="eyebrow">{story.type}</p>
                  <h3>{story.title}</h3>
                  <p>{story.description}</p>
                  <Link className="arrow-link" href={story.href}>
                    Explore the craft story <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
            <p className="heritage-archive-note">
              The peony-embroidered evening bags are preserved separately as a
              {" "}<Link href="/en/heritage/blue-peony-bag">Past Collection archive</Link>.
            </p>
          </div>
        </section>

        <section className="gift-section section-space shell">
          <div className="gift-copy">
            <p className="eyebrow">CONSIDERED PACKAGING · GIFT-READY</p>
            <h2>Minimal by design.<br />Protective in transit.<br />Gift-ready on arrival.</h2>
            <p>
              ImArtisan pieces are presented as gifts whether they are chosen for someone else or for yourself.
              A complimentary handwritten message can be included when requested.
            </p>
            <div className="gift-links">
              <Link className="button button-ink" href="/care">Care &amp; shipping</Link>
              <Link className="text-link" href="/contact#international">
                Ask about gift and packaging options <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
          <SiteImage
            src="/images/site/gift-packaging.webp"
            alt="Kraft gift box tied with an ivory ribbon"
            loading="lazy"
          />
        </section>

        <PartnershipInvitation />
      </main>
      <SiteFooter />
    </div>
  );
}
