import Link from "next/link";

export function CraftCustomizationInvitation({ craft }: { craft: string }) {
  return (
    <section className="craft-custom-invitation shell section-space" aria-label={`Customization for ${craft}`}>
      <div>
        <p className="eyebrow">CUSTOMIZATION AVAILABLE · BY ENQUIRY</p>
        <h2>Make it meaningful to you.</h2>
      </div>
      <div>
        <p>
          We welcome customization requests for {craft}: personal styling, occasion pieces,
          gifts and retail projects. Share your preferred form, motif, color, dimensions
          or presentation. Possibilities depend on the materials, craft technique and
          maker&apos;s expertise; price, quantity and timing are confirmed before production.
        </p>
        <Link className="button button-ink" href="/contact#international">
          Discuss your custom idea
        </Link>
      </div>
    </section>
  );
}
