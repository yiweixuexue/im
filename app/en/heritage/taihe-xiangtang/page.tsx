import type { Metadata } from "next";
import Link from "next/link";
import { SiteImage } from "../../../../components/site-image";
import { SiteFooter, SiteHeader } from "../../../../components/site-shell";

export const metadata: Metadata = {
  title: "Taihe Xiangtang Blended Incense",
  description:
    "Meet Taihe Xiangtang, ImArtisan's new Kaifeng partner, and discover classical blended-incense plaques, wearable pendants and a he xiang bracelet.",
};

const principles = [
  ["满生欢喜", "A life met with joy"],
  ["以和制香", "Fragrance composed through harmony"],
  ["明心见性", "A clear heart, a true nature"],
  ["以心奉香", "Fragrance offered with intention"],
];

const incenseForms = [
  {
    image: "/images/site/incense/round-floral.webp",
    alt: "Round Taihe Xiangtang incense plaque with layered floral relief",
    caption: "ROUND PLAQUE · LAYERED FLORAL RELIEF",
    className: "incense-study incense-study-tall",
  },
  {
    image: "/images/site/incense/gourd.webp",
    alt: "Gourd-shaped Taihe Xiangtang incense pendant on a blue cord",
    caption: "GOURD FORM · CORDED PENDANT",
    className: "incense-study incense-study-small incense-study-drop",
  },
  {
    image: "/images/site/incense/rabbit.webp",
    alt: "Round Taihe Xiangtang incense plaque with a rabbit motif and tassel",
    caption: "ZODIAC MOTIF · TASSEL FINISH",
    className: "incense-study incense-study-small",
  },
  {
    image: "/images/site/incense/round-relief-one.webp",
    alt: "Round Taihe Xiangtang incense plaque with an intricate relief motif",
    caption: "ROUND PLAQUE · SELECTED RELIEF",
    className: "incense-study incense-study-wide",
  },
  {
    image: "/images/site/incense/round-relief-two.webp",
    alt: "Round Taihe Xiangtang incense plaque with a bird relief motif",
    caption: "ROUND PLAQUE · BIRD MOTIF",
    className: "incense-study incense-study-small incense-study-lift",
  },
  {
    image: "/images/site/incense/relief-plaque.webp",
    alt: "Rectangular Taihe Xiangtang incense plaque with narrative relief carving",
    caption: "RECTANGULAR PLAQUE · NARRATIVE RELIEF",
    className: "incense-study incense-study-tall",
  },
  {
    image: "/images/site/incense/slender-form.webp",
    alt: "Slender Taihe Xiangtang incense ornament with a decorative cord",
    caption: "SLENDER FORM · CORDED ORNAMENT",
    className: "incense-study incense-study-small incense-study-drop",
  },
  {
    image: "/images/site/incense/leaf-form.webp",
    alt: "Leaf-shaped Taihe Xiangtang incense pendant with sculpted vein detail",
    caption: "LEAF FORM · SCULPTED DETAIL",
    className: "incense-study incense-study-small",
  },
];

export default function TaiheXiangtangPage() {
  return (
    <div className="site-page incense-page">
      <SiteHeader market="en" tone="light" />
      <main id="main-content">
        <section className="incense-hero">
          <div className="incense-hero-copy">
            <Link className="incense-back" href="/en/heritage">
              ← Heritage Collection
            </Link>
            <p className="eyebrow">NEW ARTISAN PARTNER · KAIFENG, CHINA</p>
            <h1>Fragrance, composed to be carried.</h1>
            <p className="incense-chinese">太和香堂 · 古法合香香牌</p>
            <p className="incense-hero-lead">
              Taihe Xiangtang shapes blended incense into tactile pendants and adornments—objects made to stay
              close and bring scent into the small rituals of a day.
            </p>
            <div className="incense-hero-actions">
              <Link className="button button-paper" href="#collection">
                Explore the forms
              </Link>
              <Link className="text-link text-link-light" href="/contact#international">
                Ask about the collection <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
          <figure className="incense-hero-visual">
            <SiteImage
              src="/images/site/incense/round-cloud.webp"
              alt="Round Taihe Xiangtang incense plaque with cloud-scroll relief on golden silk"
            />
            <figcaption>TAIHE XIANGTANG · ROUND INCENSE PLAQUE</figcaption>
          </figure>
        </section>

        <section className="incense-intro section-space shell">
          <p className="vertical-label">A SCENT WITH FORM</p>
          <div className="incense-intro-title">
            <p className="eyebrow">HE XIANG · 合香</p>
            <h2>Many aromatics, one considered composition</h2>
          </div>
          <div className="incense-intro-copy">
            <p>
              In Chinese incense culture, <i>he xiang</i> describes a composed blend rather than a single raw
              fragrance. Taihe Xiangtang gives that blend physical form, finishing it as plaques, pendants and a
              small wrist ornament.
            </p>
            <p>
              These are intimate objects. Their carved surfaces invite a closer look; their scent is encountered
              at the pace of wearing, holding and returning—not all at once.
            </p>
          </div>
        </section>

        <section className="incense-context shell" aria-label="Taihe Xiangtang collection context">
          <article>
            <span>01</span>
            <strong>古法合香香牌</strong>
            <p>Classical blended-incense plaques</p>
          </article>
          <article>
            <span>02</span>
            <strong>开封 · 中国</strong>
            <p>Made in Kaifeng, China</p>
          </article>
          <article>
            <span>03</span>
            <strong>市级非遗</strong>
            <p>Kaifeng municipal intangible cultural heritage</p>
          </article>
        </section>

        <section className="incense-principles section-space">
          <div className="shell">
            <div className="incense-principles-head">
              <div>
                <p className="eyebrow">THE STUDIO’S FOUR PHRASES</p>
                <h2>Harmony is both method and intention.</h2>
              </div>
              <p>
                Taihe Xiangtang introduces its work through four short phrases. Together they frame incense not
                only as fragrance, but as a practice of balance, attention and generosity.
              </p>
            </div>
            <div className="incense-principles-grid">
              {principles.map(([chinese, english], index) => (
                <article key={chinese}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{chinese}</strong>
                  <p>{english}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="incense-collection section-space shell" id="collection">
          <div className="incense-collection-head">
            <p className="eyebrow">THE FIRST IMARTISAN SELECTION</p>
            <div>
              <h2>One fragrance tradition, many forms</h2>
              <p>
                Round plaques, auspicious silhouettes and slender pendants turn scent into an object of personal
                choice. This preview focuses on visible form; aromatic compositions, sizing and current
                availability are confirmed directly with ImArtisan.
              </p>
            </div>
          </div>
          <div className="incense-studies">
            {incenseForms.map((form) => (
              <figure className={form.className} key={form.image}>
                <SiteImage src={form.image} alt={form.alt} loading="lazy" decoding="async" />
                <figcaption>{form.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="incense-bracelet section-space" id="bracelet">
          <div className="shell incense-bracelet-grid">
            <figure className="incense-bracelet-flat">
              <SiteImage
                src="/images/site/incense/bracelet-flat.webp"
                alt="Taihe Xiangtang blended-incense bracelet laid flat with pearls, beads and an adjustable cord"
                loading="lazy"
                decoding="async"
              />
              <figcaption>ADJUSTABLE CORD · PEARL AND BEAD DETAILS</figcaption>
            </figure>
            <div className="incense-bracelet-copy">
              <p className="eyebrow">HE XIANG BRACELET · 合香手链</p>
              <h2>A quiet aromatic detail, worn at the wrist</h2>
              <p>
                A small endless-knot-inspired incense centerpiece gives the collection a lighter, everyday form.
                Pearls, coloured beads and an adjustable cord set the warm brown piece against a restrained,
                contemporary palette.
              </p>
              <p>
                Each bracelet is introduced as a complete object: scent, ornament and the simple gesture of
                wearing something made to be noticed slowly.
              </p>
              <Link className="arrow-link" href="/contact#international">
                Enquire about this piece <span aria-hidden="true">→</span>
              </Link>
            </div>
            <figure className="incense-bracelet-worn">
              <SiteImage
                src="/images/site/incense/bracelet-worn-portrait.webp"
                alt="Taihe Xiangtang blended-incense bracelet worn on the wrist"
                loading="lazy"
                decoding="async"
              />
              <figcaption>WORN VIEW · AROMATIC ADORNMENT</figcaption>
            </figure>
            <figure className="incense-bracelet-detail">
              <SiteImage
                src="/images/site/incense/bracelet-worn.webp"
                alt="Close view of the blended-incense bracelet on the wrist"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </section>

        <section className="incense-final section-space">
          <div className="shell incense-final-grid">
            <div>
              <p className="eyebrow">MEET THE NEW PARTNER</p>
              <h2>Discover slowly.<br />Wear closely.</h2>
            </div>
            <div>
              <p>
                ImArtisan is introducing Taihe Xiangtang’s collection with the cultural context and product detail
                each piece deserves. For current forms, aromatic compositions or sourcing enquiries, speak with us
                directly.
              </p>
              <Link className="button button-paper" href="/contact#international">
                Contact ImArtisan
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
