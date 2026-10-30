"use client";

import { useRef, useState, type ReactNode } from "react";
import { SiteImage } from "./site-image";

export type ProductPhoto = { src: string; alt: string; caption?: string; rotation?: -90 | 90 };

/** Mount only the selected view: hidden slides never request full-size images. */
export function ProductGallery({ images, label, className, children, bilingual = false }: {
  images: readonly ProductPhoto[]; label: string; className: string;
  children?: ReactNode; bilingual?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const start = useRef<{ x: number; y: number; id: number } | null>(null);
  const [failed, setFailed] = useState(false);
  const photo = images[index] ?? images[0];
  const multiple = images.length > 1;
  function go(next: number) {
    setIndex((next + images.length) % images.length);
    setFailed(false);
  }
  if (!photo) return null;
  return (
    <figure className={className + " im-product-gallery" + (photo.rotation ? " im-gallery-rotated-frame" : "")} role="group"
      aria-roledescription={multiple ? "carousel" : undefined} aria-label={label}
      tabIndex={multiple ? 0 : undefined}
      onKeyDown={(event) => {
        if (!multiple || event.altKey || event.ctrlKey || event.metaKey) return;
        if (event.key === "ArrowLeft") { event.preventDefault(); go(index - 1); }
        if (event.key === "ArrowRight") { event.preventDefault(); go(index + 1); }
        if (event.key === "Home") { event.preventDefault(); go(0); }
        if (event.key === "End") { event.preventDefault(); go(images.length - 1); }
      }}
      onPointerDown={(event) => {
        if (!multiple || !event.isPrimary || event.pointerType === "mouse" || (event.target as HTMLElement).closest("button")) return;
        start.current = { x: event.clientX, y: event.clientY, id: event.pointerId };
        event.currentTarget.setPointerCapture(event.pointerId);
      }}
      onPointerCancel={() => { start.current = null; }}
      onPointerUp={(event) => {
        const first = start.current; start.current = null;
        if (!first || first.id !== event.pointerId) return;
        const dx = event.clientX - first.x, dy = event.clientY - first.y;
        if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.5) go(index + (dx < 0 ? 1 : -1));
      }}>
      <SiteImage key={photo.src} src={photo.src} alt={photo.alt} loading="lazy" decoding="async"
        className={photo.rotation ? "im-gallery-rotated-photo" : undefined}
        style={photo.rotation ? { transform: `translate(-50%, -50%) rotate(${photo.rotation}deg)` } : undefined}
        draggable={false} onError={() => setFailed(true)} />
      {failed && <div className="gallery-error" role="status">{bilingual ? "图片暂时无法加载 / Photo unavailable" : "Photo unavailable"}</div>}
      {children}
      {photo.caption && <figcaption className="im-gallery-caption">{photo.caption}</figcaption>}
      {multiple && <div className="gallery-controls">
        <button type="button" aria-label={bilingual ? "上一张照片 / Previous photo" : "Previous photo"} onClick={() => go(index - 1)}>←</button>
        <output aria-live="polite" aria-atomic="true" aria-label={bilingual ? "照片 / Photo" : "Photo"}>{index + 1} / {images.length}</output>
        <button type="button" aria-label={bilingual ? "下一张照片 / Next photo" : "Next photo"} onClick={() => go(index + 1)}>→</button>
      </div>}
    </figure>
  );
}
