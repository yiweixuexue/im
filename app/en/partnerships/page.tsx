import type { Metadata } from "next";
import Link from "next/link";
import { SiteImage } from "../../../components/site-image";
import { SiteFooter, SiteHeader } from "../../../components/site-shell";
import { PartnershipInquiry } from "../../../components/partnership-inquiry";
import styles from "../../../components/partnerships.module.css";

export const metadata: Metadata = {
  title: "Corporate Gifts, Wholesale & Cultural Partnerships",
  description: "Partner with ImArtisan for Chinese artisan gifts, museum and boutique wholesale, wedding gifting and cultural experiences. Tell us your occasion, budget and quantity.",
};

const services = [
  { id: "corporate", number: "01", name: "Corporate gifting", audience: "FOR TEAMS, CLIENTS & IMPORTANT GUESTS", text: "A considered thank-you, a welcome or a milestone. Choose gifts with a maker’s story and a cultural meaning your recipients can connect with.", examples: "Client appreciation · Speaker gifts · Seasonal gifting", action: "Plan a gifting project" },
  { id: "retail", number: "02", name: "Museum & boutique retail", audience: "FOR BUYERS & CULTURAL INSTITUTIONS", text: "Build a small, distinctive selection around Chinese craft, textile art or everyday rituals. Discuss wholesale availability, product stories and a collection suited to your shop.", examples: "Museum stores · Independent boutiques · Cultural retail", action: "Request a wholesale selection" },
  { id: "events", number: "03", name: "Weddings & meaningful occasions", audience: "FOR PLANNERS, HOSTS & VENUES", text: "Bring a personal cultural connection to the table. Explore guest gifts, family keepsakes and special pieces with thoughtful presentation and a message for the occasion.", examples: "Multicultural weddings · Private events · Guest welcomes", action: "Explore event gifting" },
  { id: "programs", number: "04", name: "Culture, experienced together", audience: "FOR TEAMS, UNIVERSITIES & COMMUNITY GROUPS", text: "Let a craft become the beginning of a conversation. Enquire about a tailored introduction, maker story or hands-on experience shaped around your audience.", examples: "Cultural programs · Craft introductions · Workshop enquiries", action: "Discuss a cultural program" },
];

const pieces = [
  { name: "Embroidered lion charms", craft: "A SMALL GESTURE OF GOOD WISHES", image: "lion-charm.webp", alt: "Colorful embroidered Chinese lion charms with tassels", text: "A lively starting point for seasonal celebrations and guest gifting.", href: "/en/heritage#collection" },
  { name: "Blended-incense objects", craft: "TAIHE XIANGTANG · KAIFENG", image: "incense/round-cloud.webp", alt: "Carved round incense plaque from Taihe Xiangtang", text: "Sculpted plaques and wearable forms rooted in Chinese scent culture.", href: "/en/heritage/taihe-xiangtang" },
  { name: "Chengdu lacquerware", craft: "LAYERED COLOR & HAND FINISHING", image: "lacquer/red-pendant.webp", alt: "Red Chengdu lacquer pendant", text: "Small adornments and selected objects for distinctive retail or personal gifts.", href: "/en/heritage/chengdu-lacquerware" },
  { name: "Hand-wrapped floral brooches", craft: "CHANHUA · THREAD INTO PETALS", image: "tulip-brooch.webp", alt: "Hand-wrapped tulip brooches", text: "A wearable floral detail for celebrations, appreciation and thoughtful retail.", href: "/en/heritage#collection" },
  { name: "Peony embroidery bags", craft: "BIAN EMBROIDERY · ART TO CARRY", image: "blue-peony-bag.webp", alt: "Blue peony Bian embroidered evening bag", text: "Detailed pictorial embroidery for a small number of special recipients.", href: "/en/heritage/blue-peony-bag" },
  { name: "A personal aromatic detail", craft: "TAIHE XIANGTANG · WEARABLE INCENSE", image: "incense/bracelet-worn-portrait.webp", alt: "Taihe Xiangtang incense bracelet worn at the wrist", text: "An intimate gift to consider for individual preferences and everyday rituals.", href: "/en/heritage/taihe-xiangtang#bracelet" },
];

const questions = [
  ["What are your minimum quantities and lead times?", "They depend on the piece, current stock, artisan capacity, packaging and destination. Tell us your quantity and required date; we will confirm feasibility, minimums and a delivery schedule in your proposal before you commit."],
  ["How does wholesale differ from corporate gifting?", "Wholesale is for approved retail partners purchasing for resale. We confirm the selection, wholesale prices, suggested retail prices, opening order requirements and reorder terms directly. Corporate and event gifting is quoted around your recipients, quantities, packaging and service needs."],
  ["Can we add our logo or a personal message?", "Ask about a message card, bilingual cultural note or co-branded sleeve. Custom colors, packaging and exclusive pieces are assessed with the maker. Design, sample and customization fees are itemized where applicable."],
  ["Can we see a sample first?", "Ask about available samples or a sample proposal. Sample costs, shipping and any custom development are confirmed before arranging them. Production follows your approval of the agreed specification."],
  ["Can you organize a workshop?", "We welcome program enquiries. Craft, format, facilitator, location, materials, accessibility and group size are planned together. Availability and fees are confirmed for each project; submitting an enquiry is not a booking."],
  ["What if our order is larger than a maker’s capacity?", "We will discuss a different selection, a phased delivery or a combination of crafts. We agree realistic quantities and timelines with artisans so that careful work and fair compensation remain part of every collaboration."],
];

export default function PartnershipsPage() {
  return (
    <div className={`site-page ${styles.page}`} lang="en">
      <SiteHeader market="en" tone="paper" />
      <main id="main-content">
        <section className={`${styles.hero} shell`}>
          <div className={styles.heroCopy}>
            <p className="eyebrow">IMARTISAN · BUSINESS & CULTURAL PARTNERSHIPS</p>
            <h1>Meaningful gifts.<br /><em>Human connections.</em></h1>
            <p>Bring Chinese craftsmanship into the moments that matter to your organization. Artisan gifts, thoughtful retail collections and cultural experiences, curated with care.</p>
            <div className={styles.actions}><a className="button button-ink" href="#inquiry">Start a conversation ↗</a><a className="text-link" href="#partnerships">Find your partnership ↓</a></div>
            <span className={styles.heroFoot}>MADE BY HANDS · CHOSEN WITH INTENTION</span>
          </div>
          <figure className={styles.heroImage}><SiteImage src="/images/site/blue-peony-detail.webp" alt="Close-up of peony petals rendered in fine Bian embroidery stitches" fetchPriority="high" /><figcaption>BIAN EMBROIDERY · A PAINTING EXPRESSED IN THREAD</figcaption></figure>
        </section>

        <nav className={styles.jumpNav} aria-label="Partnership types"><div className="shell">{services.map(s => <a key={s.id} href={`#${s.id}`}>{s.name}<span aria-hidden="true">↘</span></a>)}</div></nav>

        <section className={`${styles.section} shell`} id="partnerships">
          <div className={styles.sectionHead}><p className="eyebrow">01 / WAYS TO WORK TOGETHER</p><h2>A shared story.<br />Many ways to bring it to life.</h2></div>
          <div className={styles.services}>{services.map(s => <article key={s.id} id={s.id}><span className={styles.number}>{s.number}</span><div><p className="eyebrow">{s.audience}</p><h3>{s.name}</h3><p>{s.text}</p><p className={styles.examples}>{s.examples}</p><a className="arrow-link" href="#inquiry">{s.action} <span aria-hidden="true">→</span></a></div></article>)}</div>
        </section>

        <section className={styles.collection} id="selection"><div className={`shell ${styles.section}`}>
          <div className={styles.sectionHead}><p className="eyebrow">02 / THE CRAFT SELECTION</p><div><h2>Objects worth a closer look.</h2><p>A starting point for your collection or occasion. Final selection, quantities and availability are confirmed with our makers for each project.</p></div></div>
          <div className={styles.pieces}>{pieces.map(p => <article key={p.name}><Link href={p.href} aria-label={`Explore ${p.name}`}><SiteImage src={`/images/site/${p.image}`} alt={p.alt} loading="lazy" /></Link><p className="eyebrow">{p.craft}</p><h3>{p.name}</h3><p>{p.text}</p><Link className="text-link" href={p.href}>Explore the craft <span aria-hidden="true">↗</span></Link></article>)}</div>
        </div></section>

        <section className={`${styles.section} shell`} id="gifting">
          <div className={styles.sectionHead}><p className="eyebrow">03 / YOUR OCCASION, CONSIDERED</p><div><h2>A gift, at the right scale.</h2><p>Share your budget per recipient. We will curate a focused proposal with the pieces, presentation and service clearly set out.</p></div></div>
          <div className={styles.tiers}>
            <article><span>THOUGHTFUL</span><h3>A small, meaningful gesture.</h3><p>A single craft object with a cultural note and considered packaging.</p><small>For guest welcomes, team appreciation and seasonal occasions.</small></article>
            <article><span>SIGNATURE</span><h3>A story to discover.</h3><p>A distinctive personal piece or a proposed pairing of complementary crafts.</p><small>For clients, speakers and memorable celebrations.</small></article>
            <article><span>HERITAGE</span><h3>Something to keep.</h3><p>Selected embroidery or lacquerwork for a small group of special recipients.</p><small>For important guests, milestones and personal recognition.</small></article>
          </div>
          <p className={styles.smallNote}>Each project is individually quoted. Product selection, packaging, customization, shipping and applicable taxes are confirmed in writing.</p>
        </section>

        <section className={styles.makerSection}><div className={`shell ${styles.makerGrid}`}>
          <figure><SiteImage src="/images/site/chanhua-making.webp" alt="Hands carefully shaping a wrapped silk flower" loading="lazy" /><figcaption>THE HANDS BEHIND THE OBJECT</figcaption></figure>
          <div><p className="eyebrow">A PARTNERSHIP THAT RESPECTS THE MAKER</p><h2>Good work takes care.<br />And people.</h2><p>ImArtisan connects organizations with Chinese artisans through thoughtful selection, cultural storytelling and a personal point of contact.</p><p>We plan around real making time, agree fair compensation and work within each artisan’s capacity. Every collaboration should be worthwhile for the maker, the partner and the person receiving the piece.</p><div className={styles.makerLinks}><Link href="/en/heritage/taihe-xiangtang">Meet Taihe Xiangtang ↗</Link><Link href="/en/heritage/chengdu-lacquerware">Discover Chengdu lacquerware ↗</Link></div></div>
        </div></section>

        <section className={`${styles.section} shell`} id="process"><div className={styles.sectionHead}><p className="eyebrow">04 / FROM IDEA TO DELIVERY</p><h2>One conversation starts it.</h2></div><ol className={styles.steps}>
          <li><span>01</span><h3>Tell us the occasion</h3><p>Audience, quantity, budget, destination and requested date.</p></li>
          <li><span>02</span><h3>Explore a curated proposal</h3><p>A focused selection, clear costs and a realistic production plan.</p></li>
          <li><span>03</span><h3>Approve the details</h3><p>Confirm samples where needed, presentation, terms and payment schedule.</p></li>
          <li><span>04</span><h3>Make, prepare & deliver</h3><p>Artisan coordination, gift preparation and delivery updates through ImArtisan.</p></li>
        </ol></section>

        <section className={`${styles.faq} shell`}><div><p className="eyebrow">BEFORE WE BEGIN</p><h2>A few practical details.</h2></div><div>{questions.map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>

        <section className={styles.inquirySection} id="inquiry"><div className={`shell ${styles.inquiryGrid}`}><div><p className="eyebrow">LET’S CREATE SOMETHING MEANINGFUL</p><h2>Tell us who<br />it’s for.</h2><p>A thoughtful gift starts with the people receiving it. Share what you have in mind, even if the details are still taking shape.</p><a className="text-link" href="mailto:imartisanme@gmail.com">imartisanme@gmail.com ↗</a><p className={styles.contactNote}>Prefer to email directly? Include your occasion, quantity, budget and requested date.<br /><br /><span lang="zh-CN">欢迎使用中文或英文洽谈企业礼赠、零售采购与文化合作。</span></p></div><PartnershipInquiry /></div></section>
      </main>
      <SiteFooter />
    </div>
  );
}
