import { SiteImage } from "./site-image";

const observations = [
  { image: "powder-in-mortar", title: "A closer look at the mixture", text: "The supplied workshop photographs show a fine brown powder in a mortar and a coarser aromatic mixture. They reveal texture, without establishing a recipe or identifying individual ingredients.", alt: "Fine brown powder in a mortar in the supplied incense archive" },
  { image: "incense-sticks-on-trays", title: "Slender forms, laid out in rows", text: "Long sticks rest side by side on trays. A second view shows bundled sticks: two views of the handling of this form, rather than a complete account of its production or drying time.", alt: "Long incense sticks arranged in rows on trays" },
  { image: "incense-pendant-finishing", title: "Attention at the finishing table", text: "A person works with relief pendants edged in decorative beadwork. The photograph brings the finishing details into view; it does not identify the person or demonstrate how the relief itself was formed.", alt: "Hands working with relief pendants and decorative beaded borders" },
  { image: "incense-stick-bundles", title: "From workshop view to finished form", text: "Bundled sticks sit alongside an archive of plaques, wrist ornaments and presentation sets. These are different ways to encounter the craft; wearing guidance and burning instructions must be confirmed for the specific form.", alt: "Bundles of long incense sticks on a work surface" },
];

export function IncenseMakingStory() {
  return (
    <section className="craft-photo-story section-space shell" id="making">
      <p className="eyebrow">WORKSHOP PHOTOGRAPHS · HE XIANG</p>
      <h2>Texture, form and the finishing touch.</h2>
      <p className="craft-photo-lead">A view into making through the supplied photographic archive. These observations follow what is visible, rather than presenting an unverified step-by-step recipe.</p>
      <div className="craft-photo-grid">
        {observations.map((item) => (
          <figure key={item.image}>
            <SiteImage src={"/images/site/uploads-20261027/" + item.image + ".webp"} alt={item.alt} loading="lazy" decoding="async" width={1080} height={1440} />
            <figcaption><h3>{item.title}</h3><p>{item.text}</p></figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
