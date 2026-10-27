# Supplied craft media batch: 27 October 2026

## Scope and evidence

The user explicitly authorized use of `11_非遗合香.zip` and `摆件.zip` on PR #10. Originals remain outside the repository. The inventory in `craft-media-20261027.json` records all 72 raster images, their original paths and SHA-256 hashes, selections and exclusions, plus the PDF and video review.

- Inspected all 72 photos, all 15 rendered brochure pages, and all 11 seconds of the video as one-second visual samples. The long PNG repeats the brochure designs and was inspected in eleven segments.
- The incense brochure identifies 太和香堂 / Taihe Xiangtang. It supplies no verified recipes, dimensions or current stock. Existing brochure-derived web images are retained rather than duplicated.
- The incense batch includes bread preparation and an oven/fire scene. These are excluded from incense storytelling. Room-smoke pictures are not treated as making evidence.
- Making captions describe powder in a mortar, sticks arranged on trays, bundled sticks and work with bead-edged pendants. They do not invent a complete sequence, moulding method, drying duration or maker identity.
- The user supplied the objects as Bian embroidery material; close views show visible stitches. This supports embroidery reference placement, not an independent attribution of a named maker or stitch school. The vase is depicted in a framed textile picture, not an actual vessel. The short video shows finished panels, not embroidery in progress.

## Published content

- 23 selected WebP images, totalling 5,092,384 bytes. EXIF orientation applied, maximum edge 1,440 pixels without upscaling, quality 82. Original EXIF/GPS metadata is not copied. No generated content or watermark removal.
- 17 new library entries: nine incense references and eight embroidery display references. The library now contains 43 unique reference IDs across six groups.
- New `/en/heritage/bian-embroidery/` story page and a photographic making section on `/en/heritage/taihe-xiangtang/`.
- `reference` is a distinct status for newly supplied embroidery works. Archived bags retain their per-entry `past` status. Status filtering, card badges and enquiry drafts all use the per-entry status when present.
- Full-frame library image fitting keeps tall framed works visible. Responsive story grids use two columns and stack on narrow screens.

## Validation

- `npm run build:github` passes: production compilation, TypeScript and static export, including the new route.
- All 43 reference IDs are unique; all catalog images and image sources in the three affected exported routes resolve.
- All selected WebP images meet the size limit and contain no EXIF.
- Desktop browser review performed for the new embroidery page and library. Reference-only filtering returns eight of 43 entries; adding BX-03 produces a shortlist and an enquiry draft carrying the `reference` status. No email is sent.
- Dedicated mobile visual review and the separate Cloudflare/vinext build are not claimed as validated.

No merge or production deployment is included. No new claim of ingredient composition, fibre, maker identity, product measurements, price, supply capacity or availability is made.
