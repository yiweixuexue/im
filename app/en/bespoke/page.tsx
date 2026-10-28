import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "../../../components/site-shell";
import { BespokeBridge } from "../../../components/bespoke-bridge";
export const metadata: Metadata = { title: "Bespoke Clothing · 服装定制", alternates: {canonical: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/cn/custom/`}, robots: {index:false, follow:true} };
export default function Page(){return <div className="site-page"><SiteHeader market="cn"/><main id="main-content" className="shell section-space bespoke-route-bridge"><h1>服装定制 / Bespoke Clothing</h1><p>中英文内容已合并在同一页面。 Chinese and English now share one page.</p><Link className="button button-ink" href="/cn/custom/">进入双语定制页 / Continue to bespoke clothing →</Link><BespokeBridge/></main><SiteFooter/></div>}
