# Product gallery media audit · 29 October 2026

PR #12 was already merged as ec9a287. This follow-up starts from that main revision and preserves its bilingual bespoke page, business navigation, descriptions, filters and shortlist.

## Verified gallery mappings

- BW-04: ceremony-courtyard, ceremony-kiss, ceremony-portrait, ceremony-celebration. Visual review confirms the same couple, sleeveless orange-red high-neck gown with waist detail and veil, and black stand-collar jacket. The entrance and floral-detail photos show a textured garment with frog closures rather than the plain portrait dress and are excluded, along with other wedding outfits and generic ceremony details.
- BX-01: blue-peony-bag + blue-peony-detail. Same embroidered flower placement, bag frame and handle.
- BX-02: red-peony-bag + red-peony-detail. Same pink peony composition and metal frame.
- BX-03: lotus-standing-screen + lotus-screen-detail. Same circular black frame and pink lotus composition, from the user-authorized 27 October archive (see craft-media-20261027.json).

All files were already published in the repository. No new third-party or generated photographs were added. Primary images and their original product associations are retained.

## Missing secondary photos

- BW-01–03 and BW-05–15 currently retain one verified photo each. Supply original front, back, side and construction/detail photographs labelled with the exact BW ID, plus permission for website use.
- Do not attach qipao-blue-form, qipao-pink-form or qipao-green-form to the similarly named worn garments: visual review shows different colour, pattern or construction. The pink collar detail is also not established as the same pink qipao.
- Menswear detail images show related fabrics, but their exact garment association is not sufficiently established. Supply labelled original sequences before mapping them.
- Heritage audit correction: the first pass inspected the repository but missed the original brand library after its folder was renamed. Many Ronghua, Chanhua and embroidery products do have alternate photographs. The follow-up inventory in `heritage-gallery-media-20261029.json` supersedes the earlier missing-photo assessment. Similar motifs or different products remain excluded.

## Available material reviewed

Reviewed the complete existing Lookbook image contact sheet, selected full-size garment/wedding images, relevant heritage product and detail images, and the existing 72-image archive inventory and authorization records. The synced sources directory is empty in this task. Locally available social publishing ZIP packs are derivative layouts/video packages, not independently verified garment photo sequences; none were used to fill missing views. Original clothing upload archives are not present in this workspace. The later heritage follow-up located the renamed original NAS library and audited the full product photo groups; see `heritage-gallery-media-20261029.json`.

## Interaction and loading

Both libraries use ProductGallery with explicit images[] and per-view alt text. Cards retain their reserved aspect ratio. Only the selected image is mounted, using browser lazy loading and async decoding; secondary full-size images are requested on navigation. Multiple-photo cards expose 44px previous/next controls, current/total indicator, focusable named carousel, Left/Right/Home/End keyboard navigation and horizontal touch/pen swipe while preserving vertical scroll and pinch zoom. One-photo cards show no carousel controls. No autoplay or added gallery dependency. Lightbox is omitted to keep browsing and shortlist interactions compact.


## Original heritage archive follow-up

The original brand library was located under its renamed folder. Reviewed 172 Chanhua, 268 Ronghua and 238 embroidery stills (678 total). The source-photo mapping and SHA-256 evidence are recorded in `heritage-gallery-media-20261029.json` with paths relative to the brand Product pics folder. No original files were modified.

- Chanhua: all 4 cards now have multiple photos (4 / 4 / 2 / 3). CH-01/02 show the same olive-berry U hairpin in worn/flat contexts; existing reference IDs remain intact. Red and pink tulips are kept separate.
- Ronghua: 22 of 23 references now have 2–11 photos, including overall, angle, fastening, detail and worn views where present. RH-01/RH-13 share the same blue accessory, and RH-11/RH-12 share the same detachable purple floral composition; shared assets avoid duplicate downloads. RH-10 remains one verified single-bird image; photos of a pair and a batch were excluded.
- Embroidery: BX-01/BX-02 now have 5 photos each including side, back and interior; BX-05/BX-06 have 2 each, BX-07 has 4, and LE-01 has 2. BX-03 retains its two established views. BX-04/BX-08/BX-09/BX-10 still need same-object alternate stills.
- 94 unique new WebP assets, 5,502,858 bytes total; 104 additional photo associations reuse shared files. All maximum 1280px, no upscaling, EXIF/GPS removed; original visible marks preserved. Images are requested only when that view is selected, so additional source photos do not load upfront.
- Repeated exports, near-identical takes, different colours/products, unassigned reverse images, workshop context and promotional layouts repeating the same photo are excluded. Original photo group labels and exact fittings/flower placement support associations; no new maker, material, stock or product specification claims are added.

Validation: all 32 static routes export with TypeScript; seven gallery/bilingual regression tests pass. Every added file exists, is unique by SHA-256, has no EXIF and meets the size limit. Existing covers, care/use notes, filters, statuses and shortlists remain unchanged.
