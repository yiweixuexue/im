import type { ImgHTMLAttributes } from "react";

const siteBasePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

function siteAssetPath(src: ImgHTMLAttributes<HTMLImageElement>["src"]) {
  if (
    typeof src !== "string" ||
    !src ||
    !siteBasePath ||
    !src.startsWith("/") ||
    src.startsWith("//") ||
    src === siteBasePath ||
    src.startsWith(`${siteBasePath}/`)
  ) {
    return src;
  }

  return `${siteBasePath}${src}`;
}

export function SiteImage({ src, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  return <img {...props} src={siteAssetPath(src)} />;
}
