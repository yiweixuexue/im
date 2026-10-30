# Photo recheck and Chinese-text removal · 30 October 2026

## Result

- CH-04: reviewed 26 source stills. Following the user's explicit request to complete this gallery and put the model-worn photo first, show four views: worn, edited upright (`10_缠花绒花/edited/DSC08995.jpg`), side and oblique. This supersedes the earlier single-photo selection. The two additional camera angles show the same pink brooch's leaves, pearls and capped pin; no retouched versions of those angles were found. Repeated phone captures and red/paired tulips are excluded. Existing product-use/care copy and shortlist remain unchanged.
- RH-03: remove Chinese calligraphic logo, slogan and lower-left Chinese sentence from the worn image. Retain the small English RONGMEIQI / RONGHUA wording.
- RH-23: remove Chinese writing from the reverse/fastening image. Preserve the photographed red floral claw.
- Searched neighboring source photographs and the original ZIP: all corresponding versions contain embedded Chinese and no editable native artwork was found. Original files are retained.

## Saved project assets

- `public/images/site/gallery-20261030/chanhua/pink-tulip-edited.webp` — real, already-edited original photograph, not generated.
- `public/images/site/gallery-20261030/chanhua/pink-tulip-oblique.webp` — optimized original photograph; no generated content. The gallery also reuses the existing worn and side views.
- `public/images/site/gallery-20261030/rh03-worn-textfree.webp`
- `public/images/site/gallery-20261030/rh23-reverse-textfree.webp`

The two text-removal edits used the built-in image_gen tool. Outputs were visually reviewed for text removal, floral structure, fittings, person/clothing and composition, then converted to maximum-1280px WebP without EXIF/GPS. Original source and derivative SHA-256 are recorded in `heritage-gallery-media-20261029.json`. Full-resolution edit outputs also remain in the task workspace under `outputs/website-image-edits-20261030/` (outside this repository).

The user subsequently requested reversing RH-23's two photos: the text-free reverse/fastening view is now first, followed by the floral front view. RH-03 keeps its existing order.

## Final prompts

### RH-03 worn photograph

Edit target: the provided existing portrait photograph for the ImArtisan product gallery. Make a precise text-removal edit. Remove every Chinese character and the Chinese calligraphic brand logo from the upper right, the vertical Chinese slogan and small decorative red mark down the left side, and the Chinese sentence at lower left. Remove the tiny registered mark associated with the removed Chinese logo. Fill only those text areas with the same natural pale pink photographic background. Keep the existing small English words RONGMEIQI and RONGHUA at lower left. Preserve the entire photograph otherwise exactly: same framing and portrait aspect ratio, identical woman, hairstyle, hair strands, skin, collar, beige brocade clothing, same deep red floral hair comb with its two black prongs and exactly the same dangling chains/beads, identical lighting and pink translucent ribbons. Do not reconstruct, restyle, beautify or alter the person or product. No new text, symbols or added objects.

### RH-23 reverse photograph

Edit target: the provided existing close-up product photograph of a red floral black hair claw. Precise text-removal only. Remove all Chinese writing: the large black calligraphic characters down the upper left and the small vertical Chinese text immediately left of/partly crossing the upper red flower. Fill these text areas naturally from the surrounding pale blue-grey photographic background or underlying existing red petal where necessary. Keep the small beige decorative cloud motifs unless they are inseparable from lettering. Preserve the actual object and composition exactly: every red petal shape and gold fleck, fine gold edging, black flower stamens, pearl detail, glossy black open claw structure, spring, teeth, dangling red/gold charms and black curl; retain exact perspective, focus/blur, lighting, image framing and portrait aspect ratio. Do not redraw, restyle, replace or change any product detail; no new text or objects.
