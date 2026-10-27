import type { Metadata } from "next";
import Link from "next/link";
import { PartnershipInvitation } from "../../../components/partnership-invitation";
import { ProductCard } from "../../../components/product-card";
import { SiteImage } from "../../../components/site-image";
import { SectionHeading, SiteFooter, SiteHeader } from "../../../components/site-shell";

export const metadata: Metadata = {
  title: "Heritage Collection",
  description:
    "Explore ImArtisan's Chanhua floral ornaments, forthcoming Yangzhou Ronghua velvet flowers, blended incense and Chengdu lacquerware, with clear collection availability.",
};

const etsyShop = "https://www.etsy.com/shop/ImArtisanStudio";

export default function HeritageCollectionPage() {
  return (
    <div className="site-page">
      <SiteHeader market="en" tone="light" />
      <main id="main-content">
        <section className="market-hero heritage-market-hero">
          <SiteImage src="/images/site/chanhua-worn.webp" alt="Hand-wrapped silk flower ornament worn in contemporary life" />
          <div className="market-hero-shade" aria-hidden="true" />
          <div className="shell market-hero-copy">
            <p className="eyebrow">IMARTISAN · HERITAGE COLLECTION</p>
            <h1>Craft with a past.<br />Objects with a life now.</h1>
            <p>
              Available ornaments, forthcoming collaborations and an archive of past pieces—presented through the people, techniques and
              cultural ideas that give them meaning.
            </p>
            <div className="hero-button-row">
              <a className="button button-paper" href={etsyShop} target="_blank" rel="noreferrer">
                Shop on Etsy
              </a>
              <Link className="text-link text-link-light" href="#collection">
                Explore the edit <span aria-hidden="true">↓</span>
              </Link>
            </div>
          </div>
          <p className="market-hero-note">CHINESE HERITAGE · CONTEMPORARY LIFE</p>
        </section>

        <section className="heritage-intro section-space shell">
          <p className="vertical-label">OUR WAY OF SEEING</p>
          <div>
            <p className="eyebrow">BEYOND THE OBJECT</p>
            <h2>First, beauty draws you in.<br />Then the making gives it depth.</h2>
          </div>
          <div className="definition-copy">
            <p>
              ImArtisan is not a marketplace of anything that merely appears Chinese. Each piece is considered
              for the intelligence of its construction, the clarity of its cultural roots and its ability to live
              naturally in a contemporary wardrobe or home.
            </p>
            <p>
              We name techniques carefully. A documented heritage designation is stated only where it can be
              supported; otherwise we use precise language such as “traditional Chinese craft” or “contemporary
              work rooted in Chinese heritage.”
            </p>
          </div>
        </section>

        <section className="heritage-partner-feature chanhua-partner-feature section-space" id="chanhua" aria-labelledby="chanhua-title">
          <div className="shell heritage-partner-grid">
            <div className="heritage-partner-visuals">
              <SiteImage
                src="/images/site/chanhua-worn.webp"
                alt="Chanhua thread-wrapped silk flower hair ornament styled for contemporary wear"
                loading="lazy"
              />
              <SiteImage
                src="/images/site/tulip-brooch.webp"
                alt="Hand-wrapped tulip Chanhua brooches"
                loading="lazy"
              />
              <span>AVAILABLE NOW</span>
            </div>
            <div className="heritage-partner-copy">
              <p className="eyebrow">AVAILABLE NOW · CHANHUA</p>
              <h2 id="chanhua-title">A flower, shaped one thread at a time</h2>
              <p>
                Chanhua is the art of shaping decorative flowers through careful thread wrapping.
                From delicate hair ornaments to floral brooches, its strength lies in the patient control
                of form, tension and proportion—details that bring tradition into a wearable everyday object.
              </p>
              <div className="heritage-partner-notes" aria-label="Chanhua collection themes">
                <span>THREAD-WRAPPED ART</span>
                <span>HAIR ORNAMENTS</span>
                <span>FLORAL BROOCHES</span>
              </div>
              <Link className="button button-ink" href="/en/heritage/chanhua">
                Explore Chanhua
              </Link>
            </div>
          </div>
        </section>

        <section className="ronghua-feature section-space" id="ronghua" aria-labelledby="ronghua-title">
          <div className="shell ronghua-feature-grid">
            <div className="ronghua-feature-gallery" aria-label="Yangzhou Ronghua in everyday life">
              <figure className="ronghua-photo ronghua-photo-home">
                <SiteImage src="/images/site/ronghua/ronghua-home-vase.webp" alt="Handmade Yangzhou velvet flowers arranged in a porcelain vase at home" loading="lazy" />
                <figcaption>01 / FLOWERS FOR THE HOME</figcaption>
              </figure>
              <figure className="ronghua-photo ronghua-photo-making">
                <SiteImage src="/images/site/ronghua/ronghua-craft-hands.webp" alt="Artisan shaping the petals of a velvet flower using a hand tool" loading="lazy" />
                <figcaption>02 / THE MAKING</figcaption>
              </figure>
              <figure className="ronghua-photo ronghua-photo-worn">
                <SiteImage src="/images/site/ronghua/ronghua-worn-brooch.webp" alt="A Yangzhou velvet-flower brooch styled as a wearable accessory" loading="lazy" />
                <figcaption>03 / WEARABLE FLORAL ART</figcaption>
              </figure>
            </div>
            <div className="ronghua-feature-copy">
              <p className="eyebrow">COMING SOON · YANGZHOU RONGHUA</p>
              <h2 id="ronghua-title">Flowers for a moment.<br />Keepsakes for the years after.</h2>
              <p>
                Yangzhou Ronghua is a traditional velvet-flower craft, shaping soft,
                dimensional blossoms through patient handwork. Its texture and construction
                are distinct from Chanhua, the thread-wrapped flower technique in our available collection.
              </p>
              <p>
                We are exploring its potential for weddings, celebrations and graduation:
                floral adornments that can also become meaningful home displays after the occasion.
                The right design must respect the maker’s technique and the practical needs of both uses.
              </p>
              <div className="ronghua-actions">
                <Link className="button button-ink" href="/en/heritage/ronghua">Explore Yangzhou Ronghua</Link>
                <Link className="arrow-link" href="/journal/where-craft-belongs">
                  Our product-development approach <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="heritage-partner-feature incense-partner-feature section-space">
          <div className="shell heritage-partner-grid">
            <div className="heritage-partner-visuals">
              <SiteImage
                src="/images/site/incense/round-cloud.webp"
                alt="Round Taihe Xiangtang incense plaque with cloud-scroll relief"
                loading="lazy"
              />
              <SiteImage
                src="/images/site/incense/bracelet-worn.webp"
                alt="Taihe Xiangtang blended-incense bracelet worn on the wrist"
                loading="lazy"
              />
              <span>COMING SOON · 开封</span>
            </div>
            <div className="heritage-partner-copy">
              <p className="eyebrow">COMING SOON · TAIHE XIANGTANG</p>
              <h2>Fragrance, shaped for daily life</h2>
              <p>
                From Kaifeng, Taihe Xiangtang composes blended incense into carved plaques, pendants and a small
                wrist ornament—forms designed to bring scent into the pace of everyday wearing.
              </p>
              <div className="heritage-partner-notes" aria-label="Collection themes">
                <span>INCENSE PLAQUES</span>
                <span>WEARABLE FORMS</span>
                <span>KAIFENG HERITAGE</span>
              </div>
              <Link className="button button-ink" href="/en/heritage/taihe-xiangtang">
                Discover Taihe Xiangtang
              </Link>
            </div>
          </div>
        </section>

        <section className="heritage-partner-feature section-space">
          <div className="shell heritage-partner-grid">
            <div className="heritage-partner-visuals">
              <SiteImage
                src="/images/site/lacquer/panda-wall.webp"
                alt="Chengdu lacquer wall artwork featuring pandas and bamboo"
                loading="lazy"
              />
              <SiteImage
                src="/images/site/lacquer/teapot.webp"
                alt="Textured Chengdu lacquer teapot"
                loading="lazy"
              />
              <span>COMING SOON · 成都</span>
            </div>
            <div className="heritage-partner-copy">
              <p className="eyebrow">COMING SOON · CHENGDU LACQUERWARE</p>
              <h2>A new chapter in lacquer, built one layer at a time</h2>
              <p>
                Meet ImArtisan’s partner from Chengdu. Natural lacquer, repeated polishing and hand-worked
                decoration give tea ware, adornments and objects for the home their depth and quiet lustre.
              </p>
              <div className="heritage-partner-notes" aria-label="Collection themes">
                <span>TEA WARE</span>
                <span>ADORNMENT</span>
                <span>OBJECTS FOR THE HOME</span>
              </div>
              <Link className="button button-ink" href="/en/heritage/chengdu-lacquerware">
                Meet the partner
              </Link>
            </div>
          </div>
        </section>

        <section className="heritage-collection section-space" id="collection">
          <div className="shell">
            <SectionHeading
              eyebrow="THE IMARTISAN EDIT · CURRENT SELECTION"
              title="Discover, choose and follow the making"
              intro="Available Now: wrapped-flower ornaments and lion charms. Coming Soon: Yangzhou velvet flowers, blended incense and lacquer. Past Collection: Bian embroidery bags, kept as an archive of our work."
            />
            <div className="product-grid product-grid-heritage">
              <ProductCard title="Olive Berry Hair Ornament" chinese="橄榄枝缠花发饰" craft="HAND-WRAPPED SILK THREAD" image="/images/site/chanhua-worn.webp" href="/en/heritage/chanhua" status="available" />
              <ProductCard title="Tulip Brooch" chinese="郁金香缠花胸针" craft="CONTEMPORARY CHANHUA" image="/images/site/tulip-brooch.webp" href="/en/heritage/chanhua" status="available" />
              <ProductCard title="Yangzhou Velvet Flowers" chinese="Yangzhou · Ronghua" craft="RONGHUA · YANGZHOU" image="/images/site/ronghua/ronghua-worn-brooch.webp" href="/en/heritage/ronghua" status="coming" />
              <ProductCard title="Lion Embroidered Charm" chinese="醒狮刺绣挂件" craft="EMBROIDERED TEXTILE ORNAMENT" image="/images/site/lion-charm.webp" href="/en/heritage/lion-charm" status="available" />
              <ProductCard title="Taihe Blended-Incense Plaques" chinese="太和香堂 · 合香香牌" craft="HE XIANG · KAIFENG" image="/images/site/incense/round-cloud.webp" href="/en/heritage/taihe-xiangtang" status="coming" />
              <ProductCard title="Chengdu Lacquerware" chinese="成都大漆产品" craft="TRADITIONAL LACQUER · CHENGDU" image="/images/site/lacquer/red-pendant.webp" href="/en/heritage/chengdu-lacquerware" status="coming" />
              <ProductCard title="Blue Peony Evening Bag" chinese="蓝色牡丹汴绣包" craft="TRADITIONAL BIAN EMBROIDERY" image="/images/site/blue-peony-bag.webp" href="/en/heritage/blue-peony-bag" status="past" />
              <ProductCard title="Red Peony Evening Bag" chinese="红色牡丹汴绣包" craft="TRADITIONAL BIAN EMBROIDERY" image="/images/site/red-peony-bag.webp" href="/en/heritage/blue-peony-bag#archive" status="past" />
            </div>
          </div>
        </section>

        <section className="craft-explainer section-space">
          <div className="shell craft-explainer-grid">
            <div className="craft-explainer-image">
              <SiteImage src="/images/site/blue-peony-detail.webp" alt="Close detail showing tonal embroidery stitches" loading="lazy" />
              <span>THREAD AS SHADE, LINE AND LIGHT</span>
            </div>
            <div>
              <p className="eyebrow">BIAN EMBROIDERY · 汴绣</p>
              <h2>When thread begins to behave like a brush</h2>
              <p>
                Bian embroidery is associated with Kaifeng, China, and is admired for its pictorial approach.
                Tonal shifts, stitch direction and density work together to suggest the movement of petals,
                leaves and light.
              </p>
              <p>
                The challenge is not simply to fill a shape. The maker must observe how an image is built, then
                translate that observation into thread without flattening it.
              </p>
              <Link className="arrow-link" href="/journal#heritage">
                Read the Heritage Journal <span aria-hidden="true">→</span>
              </Link>
            </div>
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
              <Link className="button button-ink" href="/care">
                Care & shipping
              </Link>
              <a className="text-link" href={etsyShop} target="_blank" rel="noreferrer">
                View the Etsy shop <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <SiteImage src="/images/site/gift-packaging.webp" alt="Kraft gift box tied with an ivory ribbon" loading="lazy" />
        </section>

        <PartnershipInvitation />

        <section className="custom-supplement section-space">
          <div className="shell custom-supplement-grid">
            <SiteImage src="/images/site/custom-ceremony.webp" alt="Chinese-inspired ceremonial custom clothing" loading="lazy" />
            <div>
              <p className="eyebrow">SELECT CEREMONIAL CUSTOM</p>
              <h2>For a small number of meaningful commissions</h2>
              <p>
                Heritage craft is the international focus. For selected weddings and ceremonial occasions,
                ImArtisan also considers Chinese-inspired qipao and tailored garments by request.
              </p>
              <Link className="arrow-link" href="/en/custom">
                Learn about ceremonial commissions <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
