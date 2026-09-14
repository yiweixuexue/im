import type { Metadata } from "next";
import Link from "next/link";
import { SiteImage } from "../../components/site-image";
import { SectionHeading, SiteFooter, SiteHeader } from "../../components/site-shell";

export const metadata: Metadata = {
  title: "Culture & Craft Journal",
  description:
    "Heritage Journal, Studio Journal and ImArtisan Notes: cultural context, making processes and the point of view behind ImArtisan.",
};

const journalColumns = [
  {
    id: "heritage",
    number: "01",
    title: "Heritage Journal",
    chinese: "文化与手艺",
    description: "Patterns, techniques, histories and the care required when translating cultural knowledge.",
    image: "/images/site/blue-peony-detail.webp",
  },
  {
    id: "studio",
    number: "02",
    title: "Studio Journal",
    chinese: "制作与材料",
    description: "Hands at work, material choices, packaging and the small decisions that shape a finished piece.",
    image: "/images/site/chanhua-making.webp",
  },
  {
    id: "notes",
    number: "03",
    title: "ImArtisan Notes",
    chinese: "关于自我与生活",
    description: "Founder reflections on individuality, restraint, beauty and the relationship between people and things.",
    image: "/images/site/silk-texture.webp",
  },
];

export default function JournalPage() {
  return (
    <div className="site-page journal-page">
      <SiteHeader market="home" tone="paper" />
      <main id="main-content">
        <section className="paper-hero shell journal-hero">
          <p className="eyebrow">CRAFT JOURNAL · 文化与手艺</p>
          <h1>The object is the beginning<br />of the conversation.</h1>
          <p>
            Three editorial paths connect what you see to where it comes from, how it is made and why it belongs
            in contemporary life.
          </p>
        </section>

        <section className="journal-index shell">
          {journalColumns.map((column) => (
            <a href={"#" + column.id} key={column.id}>
              <span>{column.number}</span>
              <strong>{column.title}</strong>
              <small>{column.chinese}</small>
            </a>
          ))}
        </section>

        {journalColumns.map((column, index) => (
          <section className={"journal-chapter section-space journal-chapter-" + (index + 1)} id={column.id} key={column.id}>
            <div className="shell journal-chapter-grid">
              <div className="journal-chapter-image">
                <SiteImage src={column.image} alt={column.title + " feature"} loading="lazy" />
                <span>{column.number}</span>
              </div>
              <div className="journal-chapter-copy">
                <p className="eyebrow">{column.chinese}</p>
                <h2>{column.title}</h2>
                <p className="journal-description">{column.description}</p>
                {column.id === "heritage" ? (
                  <div className="article-preview">
                    <p>FIELD NOTE · BIAN EMBROIDERY</p>
                    <h3>From brush to thread: observation before technique</h3>
                    <p>
                      Pictorial embroidery does not begin with filling an outline. It begins with looking: where a
                      petal turns, how a pale edge meets a darker ground, and which direction allows thread to hold
                      light. The craft is demanding because the maker must first understand the image, then rebuild
                      its logic by hand.
                    </p>
                    <Link className="arrow-link" href="/en/heritage/blue-peony-bag">
                      See the blue peony piece <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                ) : null}
                {column.id === "studio" ? (
                  <div className="article-preview">
                    <p>PROCESS NOTE · CHANHUA</p>
                    <h3>A flower made by tension, patience and repetition</h3>
                    <p>
                      In wrapped-flower work, the line of the leaf and the curve of a petal emerge through many
                      small acts: preparing the frame, wrapping thread evenly, shaping, joining and adjusting. A
                      finished ornament looks light because the structure beneath it has been carefully controlled.
                    </p>
                    <Link className="arrow-link" href="/en/heritage">
                      Explore wrapped floral ornaments <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                ) : null}
                {column.id === "notes" ? (
                  <div className="article-preview">
                    <p>FOUNDER NOTE · THE SELF</p>
                    <h3>From becoming “better” to becoming clearer</h3>
                    <p lang="zh-CN">
                      曾经觉得“成为更好的自己”，是更漂亮、更优秀、更成功。后来才明白，真正的更好，是越来越知道什么适合自己，也敢于选择与拒绝。物的意义也一样：不是拥有更多，而是留下真正与自己有关的东西。
                    </p>
                    <Link className="arrow-link" href="/about">
                      Read the brand story <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                ) : null}
              </div>
            </div>
          </section>
        ))}

        <section className="language-note section-space shell">
          <SectionHeading
            eyebrow="A NOTE ON LANGUAGE"
            title="“Heritage” is not a blanket label"
            intro="Credibility depends on knowing when a formal designation applies—and when it does not."
          />
          <div className="language-grid">
            <article><span>USE WHEN DOCUMENTED</span><h3>Chinese intangible cultural heritage craft</h3><p>Reserved for a piece with a verifiable craft designation, place, lineage or recognized inheritor relationship.</p></article>
            <article><span>USE FOR TRADITIONAL TECHNIQUE</span><h3>Traditional Chinese craft</h3><p>Clear language for work grounded in an established technique when no specific official designation is being claimed.</p></article>
            <article><span>USE FOR CONTEMPORARY ADAPTATION</span><h3>Contemporary work rooted in Chinese heritage</h3><p>Appropriate when a maker transforms traditional methods, motifs or structures for present-day use.</p></article>
          </div>
        </section>

        <section className="simple-cta section-space">
          <div className="shell">
            <p className="eyebrow">CONTINUE EXPLORING</p>
            <h2>Read with curiosity. Choose with clarity.</h2>
            <div>
              <Link className="button button-paper" href="/en/heritage">Heritage Collection</Link>
              <Link className="text-link text-link-light" href="/about">About ImArtisan <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
