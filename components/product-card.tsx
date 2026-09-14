import Link from "next/link";

export function ProductCard({
  title,
  chinese,
  craft,
  image,
  href,
  tag,
}: {
  title: string;
  chinese: string;
  craft: string;
  image: string;
  href: string;
  tag?: string;
}) {
  const isExternal = href.startsWith("http");
  const content = (
    <>
      <div className="product-card-image">
        <img src={image} alt={`${title} · ${chinese}`} loading="lazy" decoding="async" />
        {tag ? <span>{tag}</span> : null}
      </div>
      <div className="product-card-copy">
        <p>{craft}</p>
        <h3>{title}</h3>
        <span>{chinese}</span>
      </div>
    </>
  );

  if (isExternal) {
    return (
      <a className="product-card" href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link className="product-card" href={href}>
      {content}
    </Link>
  );
}
