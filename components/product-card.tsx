import Link from "next/link";
import { SiteImage } from "./site-image";

export type CollectionStatus = "available" | "coming" | "past";
const statusLabels: Record<CollectionStatus, string> = {
  available: "AVAILABLE NOW",
  coming: "COMING SOON",
  past: "PAST COLLECTION",
};

export function ProductCard({
  title, chinese, craft, image, href, tag, status,
}: {
  title: string;
  chinese: string;
  craft: string;
  image: string;
  href: string;
  tag?: string;
  status?: CollectionStatus;
}) {
  const isExternal = href.startsWith("http");
  const content = (
    <>
      <div className="product-card-image">
        <SiteImage src={image} alt={`${title} · ${chinese}`} loading="lazy" decoding="async" />
        {(status || tag) ? <span className={status ? `product-status product-status-${status}` : undefined}>{status ? statusLabels[status] : tag}</span> : null}
      </div>
      <div className="product-card-copy">
        <p>{craft}</p>
        <h3>{title}</h3>
        <span>{chinese}</span>
      </div>
    </>
  );
  return isExternal
    ? <a className="product-card" href={href} target="_blank" rel="noopener noreferrer">{content}</a>
    : <Link className="product-card" href={href}>{content}</Link>;
}
