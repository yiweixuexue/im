import Link from "next/link";
import { SiteImage } from "./site-image";
import styles from "./partnerships.module.css";

export function PartnershipInvitation() {
  return (
    <section className={`${styles.invitation} shell`} aria-labelledby="partnership-invitation-title">
      <SiteImage src="/images/site/gift-packaging.webp" alt="ImArtisan kraft gift box finished with a ribbon" loading="lazy" />
      <div>
        <p className="eyebrow">FOR BUSINESSES & CULTURAL INSTITUTIONS</p>
        <h2 id="partnership-invitation-title">Give something with a story.</h2>
        <p>Artisan gifts, considered retail collections and cultural collaborations. Bring Chinese craftsmanship to the people you want to connect with.</p>
        <Link className="button button-ink" href="/en/partnerships">Explore partnerships <span aria-hidden="true">&nbsp;↗</span></Link>
      </div>
    </section>
  );
}
