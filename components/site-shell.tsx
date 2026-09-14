import Link from "next/link";

type Market = "home" | "cn" | "en";
type Tone = "light" | "paper";

type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

const navByMarket: Record<Market, NavItem[]> = {
  home: [
    { label: "About", href: "/about" },
    { label: "Journal", href: "/journal" },
    { label: "Contact", href: "/contact" },
  ],
  cn: [
    { label: "首页", href: "/" },
    { label: "定制服装", href: "/cn/custom" },
    { label: "定制流程", href: "/cn/custom#process" },
    { label: "Lookbook", href: "/lookbook" },
    { label: "品牌故事", href: "/about" },
    { label: "文化与手艺", href: "/journal" },
    { label: "联系我们", href: "/contact" },
  ],
  en: [
    { label: "Home", href: "/" },
    { label: "Heritage Collection", href: "/en/heritage" },
    { label: "Craft Journal", href: "/journal" },
    { label: "About", href: "/about#english" },
    { label: "Care & Shipping", href: "/care" },
    { label: "Ceremonial Custom", href: "/en/custom" },
    { label: "Contact", href: "/contact" },
  ],
};

export function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <Link
      className={`brand-mark ${light ? "brand-mark-light" : ""}`}
      href="/"
      aria-label="ImArtisan and 屮微我 home"
    >
      <span className="brand-cn">屮微我</span>
      <span className="brand-divider" aria-hidden="true" />
      <span className="brand-en">ImArtisan</span>
    </Link>
  );
}

function NavLink({ item }: { item: NavItem }) {
  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noreferrer">
        {item.label}
      </a>
    );
  }
  return <Link href={item.href}>{item.label}</Link>;
}

export function SiteHeader({
  market = "home",
  tone = "paper",
}: {
  market?: Market;
  tone?: Tone;
}) {
  const marketLink =
    market === "cn"
      ? { label: "EN", href: "/en/heritage" }
      : market === "en"
        ? { label: "中文", href: "/cn/custom" }
        : { label: "中文 / EN", href: "#choose-your-path" };

  return (
    <header className={`site-header site-header-${tone}`}>
      <div className="header-inner shell-wide">
        <BrandMark light={tone === "light"} />
        <nav className="desktop-nav" aria-label={market === "cn" ? "主导航" : "Primary navigation"}>
          {navByMarket[market].map((item) => (
            <NavLink key={`${item.href}-${item.label}`} item={item} />
          ))}
        </nav>
        <Link className="market-switch" href={marketLink.href}>
          {marketLink.label}
          <span aria-hidden="true">↗</span>
        </Link>
        <details className="mobile-menu">
          <summary aria-label="Open navigation / 打开导航">
            <i />
            <i />
          </summary>
          <div className="mobile-menu-panel">
            <div className="mobile-menu-head">
              <BrandMark />
              <span>MENU</span>
            </div>
            <nav aria-label={market === "cn" ? "移动端导航" : "Mobile navigation"}>
              {navByMarket[market].map((item, index) => (
                <div key={`${item.href}-${item.label}`}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <NavLink item={item} />
                </div>
              ))}
            </nav>
            <Link className="mobile-market-link" href={marketLink.href}>
              {marketLink.label} <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  light?: boolean;
}) {
  return (
    <div className={`section-heading ${light ? "section-heading-light" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <div>
        <h2>{title}</h2>
        {intro ? <p>{intro}</p> : null}
      </div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <BrandMark light />
          <p>于微小处，看见真我。</p>
          <p>Seeing the self in the details.</p>
        </div>
        <div className="footer-column">
          <p>中国客户 · CHINA</p>
          <Link href="/cn/custom">定制服装</Link>
          <Link href="/lookbook">作品 Lookbook</Link>
          <Link href="/contact#wechat">微信预约</Link>
        </div>
        <div className="footer-column">
          <p>INTERNATIONAL</p>
          <Link href="/en/heritage">Heritage Collection</Link>
          <a href="https://www.etsy.com/shop/ImArtisanStudio" target="_blank" rel="noreferrer">
            Shop on Etsy
          </a>
          <Link href="/care">Care & Shipping</Link>
        </div>
        <div className="footer-column">
          <p>STUDIO</p>
          <Link href="/about">About ImArtisan</Link>
          <Link href="/journal">Culture & Craft</Link>
          <a href="https://www.instagram.com/imartisan_/" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 IMARTISAN · 屮微我</span>
        <span>CHINESE HERITAGE, CONTEMPORARY LIFE</span>
      </div>
    </footer>
  );
}
