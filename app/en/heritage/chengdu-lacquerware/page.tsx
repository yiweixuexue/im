import type { Metadata } from "next";
import Link from "next/link";
import { SiteImage } from "../../../../components/site-image";
import { SiteFooter, SiteHeader } from "../../../../components/site-shell";

export const metadata: Metadata = {
  title: "Chengdu Lacquerware",
  description:
    "Meet ImArtisan's new Chengdu lacquerware partner and discover natural lacquer tea ware, adornments and objects for the home.",
};

const processSteps = [
  {
    number: "01",
    title: "Form",
    text: "The body is shaped and prepared before the surface work begins.",
    image: "/images/site/lacquer/process-forming.webp",
    alt: "Artisan shaping the body of a lacquerware object on a lathe",
  },
  {
    number: "02",
    title: "Prepare",
    text: "Natural lacquer is refined and filtered for an even working consistency.",
    image: "/images/site/lacquer/process-filtering.webp",
    alt: "Red lacquer being filtered through cloth in a workshop",
  },
  {
    number: "03",
    title: "Carve",
    text: "Incised lines bring rhythm and definition to the built-up surface.",
    image: "/images/site/lacquer/process-carving.webp",
    alt: "Hands carving a detailed pattern into a red lacquer surface",
  },
  {
    number: "04",
    title: "Decorate",
    text: "Colour and ornament are applied by hand, one deliberate passage at a time.",
    image: "/images/site/lacquer/process-painting.webp",
    alt: "Artisan hand-painting a detailed red lacquer panel",
  },
];

const facts = [
  ["3,000+ years", "Roots in the lacquer traditions of the ancient Chengdu region"],
  ["1954", "The Chengdu Lacquerware Craft Factory was established"],
  ["2006", "Included in China's first national intangible cultural heritage list"],
  ["7–8 years", "Time a lacquer tree grows before it can first be tapped"],
];

export default function ChengduLacquerwarePage() {
  return (
    <div className="site-page lacquer-page">
      <SiteHeader market="en" tone="light" />
      <main id="main-content">
        <section className="lacquer-hero shell-wide">
          <div className="lacquer-hero-copy">
            <Link className="lacquer-back" href="/en/heritage">
              ← Heritage Collection
            </Link>
            <p className="eyebrow">NEW ARTISAN PARTNER · CHENGDU, CHINA</p>
            <h1>Chengdu lacquerware, shaped by time.</h1>
            <p className="lacquer-chinese">成都漆器</p>
            <p className="lacquer-hero-lead">
              Natural lacquer is applied, rested, polished and decorated through a slow sequence of handwork.
              ImArtisan’s newest partner brings this living Chengdu tradition into objects for tea, adornment and
              the home.
            </p>
            <div className="lacquer-hero-actions">
              <Link className="button button-paper" href="#objects">
                Explore the objects
              </Link>
              <Link className="text-link text-link-light" href="/contact#international">
                Ask about the collection <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
          <figure className="lacquer-hero-visual">
            <SiteImage
              src="/images/site/lacquer/panda-wall.webp"
              alt="Chengdu lacquer wall artwork featuring two pandas among bamboo"
            />
            <figcaption>SELECTED OBJECT · PANDA WALL ART</figcaption>
          </figure>
        </section>

        <section className="lacquer-origin section-space shell">
          <p className="vertical-label">A LIVING TRADITION</p>
          <div className="lacquer-origin-title">
            <p className="eyebrow">FROM ANCIENT CHENGDU TO THE PRESENT</p>
            <h2>A surface made slowly—and made to endure</h2>
          </div>
          <div className="lacquer-origin-copy">
            <p>
              Chengdu lacquerware has roots reaching back more than three millennia. The Chengdu Lacquerware
              Craft Factory was established in 1954 to carry the regional practice forward; the craft was
              included in China’s first national intangible cultural heritage list in 2006 and the first national
              traditional craft revitalisation catalogue in 2018.
            </p>
            <p>
              Its character comes from patient accumulation. A formed body is strengthened and sealed, then
              covered with successive layers of lacquer, ground and polished between stages. Decoration is not a
              final print—it is part of the surface itself.
            </p>
          </div>
        </section>

        <section className="lacquer-facts shell" aria-label="Chengdu lacquerware facts">
          {facts.map(([figure, description]) => (
            <article key={figure}>
              <strong>{figure}</strong>
              <p>{description}</p>
            </article>
          ))}
        </section>

        <section className="lacquer-process section-space">
          <div className="shell">
            <div className="lacquer-process-head">
              <div>
                <p className="eyebrow">FROM TREE TO SURFACE</p>
                <h2>Most of the work happens between layers.</h2>
              </div>
              <div>
                <p>
                  A lacquer tree grows for seven to eight years before its first harvest. Sap is traditionally
                  collected only during a short summer season, then refined before the cycle of forming, coating,
                  drying, sanding and decorating begins.
                </p>
                <blockquote>“Three parts lacquer, seven parts sanding.”</blockquote>
              </div>
            </div>
            <div className="lacquer-process-grid">
              {processSteps.map((step) => (
                <figure key={step.number}>
                  <div>
                    <SiteImage src={step.image} alt={step.alt} decoding="async" />
                    <span>{step.number}</span>
                  </div>
                  <figcaption>
                    <strong>{step.title}</strong>
                    <p>{step.text}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="lacquer-objects section-space shell" id="objects">
          <div className="lacquer-objects-head">
            <p className="eyebrow">THE PARTNER EDIT · 成都漆器</p>
            <div>
              <h2>Objects for daily ritual, wearing and display</h2>
              <p>
                A first look at the partner’s range. Individual availability and detailed specifications are
                confirmed directly with ImArtisan.
              </p>
            </div>
          </div>

          <div className="lacquer-object-group lacquer-object-group-tea">
            <div className="lacquer-group-label">
              <span>01</span>
              <h3>Tea ware</h3>
              <p>茶器 · DAILY RITUAL</p>
            </div>
            <figure className="lacquer-object lacquer-object-feature">
              <SiteImage src="/images/site/lacquer/teapot.webp" alt="Textured Chengdu lacquer teapot" />
              <figcaption>TEXTURED LACQUER TEAPOT</figcaption>
            </figure>
            <figure className="lacquer-object lacquer-object-wide">
              <SiteImage
                src="/images/site/lacquer/orchid-cups.webp"
                alt="Pair of red and black Chengdu lacquer cups decorated with orchids"
              />
              <figcaption>ORCHID CUP PAIR · RED AND BLACK LACQUER</figcaption>
            </figure>
            <figure className="lacquer-object lacquer-object-tall">
              <SiteImage src="/images/site/lacquer/red-cup.webp" alt="Vivid red lacquer tea cup held against blue sky" />
              <figcaption>RED LACQUER CUP</figcaption>
            </figure>
            <figure className="lacquer-object lacquer-object-tall lacquer-object-offset">
              <SiteImage src="/images/site/lacquer/patterned-cup.webp" alt="Dark patterned lacquer cup held in hand" />
              <figcaption>PATTERNED LACQUER CUP</figcaption>
            </figure>
          </div>

          <div className="lacquer-object-group lacquer-object-group-wear">
            <div className="lacquer-group-label">
              <span>02</span>
              <h3>Adornment</h3>
              <p>佩饰 · WEARABLE OBJECTS</p>
            </div>
            <figure className="lacquer-object lacquer-object-square">
              <SiteImage src="/images/site/lacquer/red-bangle.webp" alt="Red Chengdu lacquer bangle" />
              <figcaption>RED LACQUER BANGLE</figcaption>
            </figure>
            <figure className="lacquer-object lacquer-object-wide lacquer-object-necklaces">
              <SiteImage src="/images/site/lacquer/necklaces.webp" alt="Two lacquer pendant necklaces" />
              <figcaption>LACQUER PENDANT NECKLACES</figcaption>
            </figure>
            <figure className="lacquer-object lacquer-object-tall">
              <SiteImage src="/images/site/lacquer/red-pendant.webp" alt="Red drop-shaped lacquer pendant necklace" />
              <figcaption>RED DROP PENDANT</figcaption>
            </figure>
          </div>

          <div className="lacquer-object-group lacquer-object-group-home">
            <div className="lacquer-group-label">
              <span>03</span>
              <h3>For the home</h3>
              <p>陈设 · OBJECTS WITH PRESENCE</p>
            </div>
            <figure className="lacquer-object lacquer-object-home-hero">
              <SiteImage
                src="/images/site/lacquer/panda-wall.webp"
                alt="Panda and bamboo wall artwork in black, ochre and green lacquer"
              />
              <figcaption>PANDA WALL ART · CHENGDU MOTIF</figcaption>
            </figure>
            <figure className="lacquer-object lacquer-object-home-side">
              <SiteImage
                src="/images/site/lacquer/maple-vessel.webp"
                alt="Black lacquer object with a maple-leaf detail and patterned textile top"
              />
              <figcaption>BLACK LACQUER OBJECT · MAPLE DETAIL</figcaption>
            </figure>
          </div>
        </section>

        <section className="lacquer-final section-space">
          <div className="shell lacquer-final-grid">
            <div>
              <p className="eyebrow">MEET THE NEW PARTNER</p>
              <h2>Made in Chengdu.<br />Introduced with context.</h2>
            </div>
            <div>
              <p>
                ImArtisan will introduce this collection gradually as each object, material and making process is
                documented. For current pieces, sourcing enquiries or collaboration, speak with us directly.
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
