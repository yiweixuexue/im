# ImArtisan Craft & Product Library · Content Workflow

The site library is a **visual reference catalogue**, not a live retail inventory or a promise that every historical/partner work can be reproduced. It supports buyer education, use-case discovery and enquiries. Etsy lists clothing, Chanhua and lion charms; other available craft ranges are sourced through direct quotations. Verify Faire availability per live product rather than assuming publication.

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
| Collection status | Available Now or Past Collection | All craft collections are available for sourcing enquiry; only Bian embroidered evening bags are archived |
| Maker / workshop | Pending attribution approval | Credit only after permission and identity verification |
| Sales status | Not confirmed | Never automatically infer from image |
| Materials / dimensions / care | To confirm | Require maker confirmation before publishing exact specs |
| B2B details | MOQ, lead time, wholesale, ability to reproduce | Confirm separately; never guess |
| Product-page link | Existing verified detail route | Avoid misleading general Etsy links as product-specific CTAs |

## 3. Availability versus sales-channel policy (confirmed October 27, 2026)

- **Available Now:** Chanhua, embroidered lion charms, Yangzhou Ronghua, He Xiang incense forms, Chengdu lacquerware and Bian embroidered framed / tabletop artworks. “Available Now” indicates ImArtisan can handle a sourcing enquiry for that product category; it **does not mean the exact photographed variant is in ready-to-ship inventory**. Verify variant, producer, materials, specifications, price, quantity, timeframe and feasibility for every enquiry.
- **Past Collection:** Only the blue/red peony Bian embroidery **evening bags**; retain for design history and do not show a checkout or wholesale availability.
- **Etsy sales channel:** Only **clothing, Chanhua and embroidered lion charms** are currently on Etsy. Show Etsy shop / exact verified listing links only for those categories. Etsy product availability is defined by the live listing.
- **Direct ImArtisan enquiry:** Yangzhou Ronghua, incense, lacquerware and Bian embroidered artwork are **not currently listed on Etsy**. Their purchasing/sourcing actions should use the website contact form or craft-reference shortlist email.
- Do not misrepresent “available for sourcing enquiry” as unconditional immediate dispatch, identical reproduction of every reference photo, or a confirmed wholesale price. Update specific item status only with maker evidence.

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
