# ImArtisan Craft & Product Library · Content Workflow

The site library is a **visual reference catalogue**, not a live retail inventory or a promise that every historical/partner work can be reproduced. It supports buyer education, use-case discovery and enquiries. Live prices, lead times and purchase links remain on verified Etsy / Faire listings or in individual quotes.

## 1. Decide whether an image belongs in the public gallery

- Confirm ownership/permission for commercial website display and maker attribution when appropriate.
- Photograph must clearly show a finished craft form, its use, and/or credible making process. Process images belong on the craft story page; reference catalogue cards should preferably show finished forms.
- Keep different craft techniques distinct. **Ronghua (velvet-flower craft)** is not the same as **Chanhua (thread-wrapped floral craft)**.
- Do not treat reference samples or prototype tests as purchasable listings.
- Multiple camera angles of one object are useful on a detail page, but generally count as **one** reference object in the browsing catalogue unless they demonstrate a meaningful use-case variation.

## 2. Required fields for each reference

| Field | Example | Editorial rule |
| --- | --- | --- |
| Reference ID | RH-03 | Internal image reference, **not an SKU/GTIN** |
| Craft | Ronghua | Choose from existing craft categories |
| Name | Floral head ornament | English buyer-facing name |
| Finished form | Hair accessory | State what the object is |
| Image + alt text | /images/site/ronghua/...webp | Own / authorized real image and literal description |
| Uses | wear, ceremony | Tag only demonstrated or reasonable use contexts |
| How it can be used | A floral accent for a ceremony | Practical, not only poetic |
| Considerations | Confirm fit, finish and structural testing | Be accurate about limitations |
| Collection status | Coming Soon | Status belongs to craft range until SKU-level facts are verified |
| Maker / workshop | Pending attribution approval | Credit only after permission and identity verification |
| Sales status | Not confirmed | Never automatically infer from image |
| Materials / dimensions / care | To confirm | Require maker confirmation before publishing exact specs |
| B2B details | MOQ, lead time, wholesale, ability to reproduce | Confirm separately; never guess |
| Product-page link | Existing verified detail route | Avoid misleading general Etsy links as product-specific CTAs |

## 3. Collection status policy

- **Available collection:** Chanhua and embroidered lion charms. This **does not** guarantee an individual photographed variant is in stock. Check active Etsy listings.
- **Coming Soon:** Yangzhou Ronghua, blended incense and Chengdu lacquer examples. They are visual previews, not current checkout offers.
- **Past Collection:** Bian embroidery bags; retain for design history and craftsmanship but do not market as available.
- **Reference Work:** supplied works with no confirmed collection release or inventory status. Use per-entry status overrides to keep archived bags marked Past Collection when their craft group also contains reference works. See `craft-media-20261027.md` and its JSON inventory for the first uploaded batch.
- A future craft can have multiple product statuses only when source data verifies *specific products* separately.

## 4. Preparing a new NAS batch

1. Create a subfolder per craft, e.g. \`Product pics / Ronghua / Hair Ornaments\`.
2. Keep originals safely in NAS; export selected website crops as compressed **WebP** with useful descriptive English filenames.
3. Prepare: one clean hero photo, one detail photo, one scale or wearing view, and one context/use image where applicable.
4. Avoid excessive nearly identical images, distracting watermarks, untranslated Chinese promotional banners or unsupported cultural/heritage claims.
5. Attach a CSV/Excel inventory with the required fields before updating the website. Use a reference ID to match photos to descriptions.
6. Add the files to \`public/images/site/<craft>/\`; add **one entry per distinct object/use case** to \`data/heritage-catalog.ts\`.
7. Check mobile crops, alt descriptions, image permissions, actual URL and the correct status before opening a PR.
8. Merge to \`main\` only after reviewing the PR. Confirm that GitHub Pages reports deployment success.

## 5. Useful next-stage improvements

Once photos and verified product data expand, consider a lightweight content-management workflow or structured imports rather than manually editing TypeScript for every example. A buyer-only wholesale view could include actual MOQ, wholesale price, MSRP, replenishment and production timelines **once these are confirmed**. Maintain separate photography groups for **inspiration/reference**, **retail-ready**, and **B2B-ready** items.

Keep ImArtisan's two-way role visible: let craft knowledge and real use cases shape the products, rather than forcing every craft onto every possible category.
