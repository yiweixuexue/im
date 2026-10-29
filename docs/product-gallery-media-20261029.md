# Product gallery media audit · 29 October 2026

PR #12 was already merged as ec9a287. This follow-up starts from that main revision and preserves its bilingual bespoke page, business navigation, descriptions, filters and shortlist.

## Verified gallery mappings

- BW-04: ceremony-courtyard, ceremony-entrance, ceremony-kiss. Visual review confirms the same couple, sleeveless orange-red high-neck gown with waist detail and veil, and black stand-collar jacket. Other wedding outfits and generic ceremony details are excluded.
- BX-01: blue-peony-bag + blue-peony-detail. Same embroidered flower placement, bag frame and handle.
- BX-02: red-peony-bag + red-peony-detail. Same pink peony composition and metal frame.
- BX-03: lotus-standing-screen + lotus-screen-detail. Same circular black frame and pink lotus composition, from the user-authorized 27 October archive (see craft-media-20261027.json).

All files were already published in the repository. No new third-party or generated photographs were added. Primary images and their original product associations are retained.

## Missing secondary photos

- BW-01–03 and BW-05–15 currently retain one verified photo each. Supply original front, back, side and construction/detail photographs labelled with the exact BW ID, plus permission for website use.
- Do not attach qipao-blue-form, qipao-pink-form or qipao-green-form to the similarly named worn garments: visual review shows different colour, pattern or construction. The pink collar detail is also not established as the same pink qipao.
- Menswear detail images show related fabrics, but their exact garment association is not sufficiently established. Supply labelled original sequences before mapping them.
- All heritage references except BX-01–03 still need exact-object alternate views. Similar flower motifs, different colours, paired sets, workshop scenes and other products are not alternate views.

## Available material reviewed

Reviewed the complete existing Lookbook image contact sheet, selected full-size garment/wedding images, relevant heritage product and detail images, and the existing 72-image archive inventory and authorization records. The synced sources directory is empty in this task. Locally available social publishing ZIP packs are derivative layouts/video packages, not independently verified garment photo sequences; none were used to fill missing views. Original clothing upload archives are not present in this workspace.

## Interaction and loading

Both libraries use ProductGallery with explicit images[] and per-view alt text. Cards retain their reserved aspect ratio. Only the selected image is mounted, using browser lazy loading and async decoding; secondary full-size images are requested on navigation. Multiple-photo cards expose 44px previous/next controls, current/total indicator, focusable named carousel, Left/Right/Home/End keyboard navigation and horizontal touch/pen swipe while preserving vertical scroll and pinch zoom. One-photo cards show no carousel controls. No autoplay or added gallery dependency. Lightbox is omitted to keep browsing and shortlist interactions compact.
