import type { ProductPhoto } from "../components/product-gallery";

export type CraftId = "chanhua" | "ronghua" | "hexiang" | "lacquer" | "bian";
export type CatalogStatus = "available" | "past";
export type UseId = "wear" | "ceremony" | "gift" | "home" | "ritual";

export type CraftEntry = {
  id: CraftId;
  label: string;
  subtitle: string;
  status: CatalogStatus;
  href: string;
  summary: string;
};

export type CatalogEntry = {
  id: string;
  craft: CraftId;
  name: string;
  form: string;
  image: string;
  images: ProductPhoto[];
  alt: string;
  uses: UseId[];
  howToUse: string;
  consideration: string;
  status?: CatalogStatus;
  salesChannel?: "etsy" | "enquiry";
};

export const uses: { id: UseId; label: string }[] = [
  { id: "wear", label: "Wear & adorn" },
  { id: "ceremony", label: "Weddings & occasions" },
  { id: "gift", label: "Gifts & keepsakes" },
  { id: "home", label: "Home & display" },
  { id: "ritual", label: "Tea & personal rituals" },
];

export const statusLabels: Record<CatalogStatus, string> = {
  available: "AVAILABLE NOW",
  past: "PAST COLLECTION",
};

export const crafts: CraftEntry[] = [
  { id: "chanhua", label: "Chanhua · Thread-Wrapped Flowers", subtitle: "CHANHUA · FLORAL ORNAMENTS", status: "available", href: "/en/heritage/chanhua", summary: "Thread-wrapped forms for hair, clothing and personal occasions. Individual designs and current stock are verified on Etsy." },
  { id: "ronghua", label: "Yangzhou Ronghua · Velvet Flowers", subtitle: "RONGHUA · VELVET FLOWERS", status: "available", href: "/en/heritage/ronghua", summary: "Soft, sculptural floral works for wearing, gifting and lasting display. Available by direct enquiry; pictured variants and pricing need confirmation." },
  { id: "hexiang", label: "He Xiang · Blended Incense", subtitle: "TAIHE XIANGTANG · KAIFENG", status: "available", href: "/en/heritage/taihe-xiangtang", summary: "Incense plaques, pendants, bracelets and gift forms available for direct sourcing enquiries. Confirm scent, materials, quantity and care for each selection." },
  { id: "lacquer", label: "Chengdu Lacquerware", subtitle: "LACQUER · CHENGDU", status: "available", href: "/en/heritage/chengdu-lacquerware", summary: "Lacquer adornments, display pieces and tea-related forms available by enquiry. Functional suitability and exact specifications are assessed piece by piece." },
  { id: "bian", label: "Bian Embroidery", subtitle: "BIAN EMBROIDERY · KAIFENG", status: "available", href: "/en/heritage/bian-embroidery", summary: "Bian embroidery includes framed artwork, standing screens and embroidered lion charms. Artworks are available by direct enquiry, while lion charms are also sold on Etsy. Only the peony evening bags are Past Collection." },
];

export const catalog: CatalogEntry[] = [
  {
    "id": "CH-01",
    "craft": "chanhua",
    "name": "Olive Berry Hairpin",
    "form": "Hair ornament",
    "image": "/images/site/chanhua-worn.webp",
    "alt": "Olive-berry U hairpin worn in a low bun",
    "images": [
      {
        "src": "/images/site/chanhua-worn.webp",
        "alt": "Olive-berry U hairpin worn in a low bun"
      },
      {
        "src": "/images/site/olive-hairpin.webp",
        "alt": "flat view of the olive-berry U hairpin and its twin prongs"
      },
      {
        "src": "/images/site/gallery-20261029/chanhua-edited/olive-upright.webp",
        "alt": "upright view of the olive-berry U hairpin"
      },
      {
        "src": "/images/site/gallery-20261029/chanhua-edited/olive-flat-detail.webp",
        "alt": "oblique close view of the wrapped leaves and six berries"
      },
      {
        "src": "/images/site/gallery-20261029/chanhua-edited/olive-worn-close.webp",
        "alt": "close view of the olive-berry U hairpin in a bun"
      },
      {
        "src": "/images/site/gallery-20261029/chanhua-edited/olive-worn-angle.webp",
        "alt": "angled styling view of the same olive-berry U hairpin"
      }
    ],
    "uses": [
      "wear",
      "ceremony",
      "gift"
    ],
    "howToUse": "Style in an updo for everyday wear or a celebration, or choose as a personal gift.",
    "consideration": "Protect wrapped threads from crushing, moisture and repeated rubbing. Store in a protective box and confirm current design availability before ordering."
  },
  {
    id: "CH-03", craft: "chanhua", name: "Tulip Floral Brooch", form: "Brooch",
    image: "/images/site/tulip-brooch.webp", alt: "Small handcrafted Chanhua tulip brooches",
    images: [
      {"src": "/images/site/tulip-brooch.webp", "alt": "Small handcrafted Chanhua tulip brooches"},
      {"src": "/images/site/gallery-20261029/chanhua/red-tulip-worn.webp", "alt": "The same red tulip Chanhua brooch worn on a red garment"},
    ],
    uses: ["wear", "gift", "ceremony"], howToUse: "Add a small flower to a jacket, dress or event outfit.",
    consideration: "Check fastening details and fabric compatibility before ordering.",
  },
  {
    id: "CH-04", craft: "chanhua", name: "Tulip Occasion Styling", form: "Brooch / styling reference",
    image: "/images/site/tulip-ceremony.webp", alt: "Pink tulip brooch worn on a pale embroidered garment",
    images: [
      { src: "/images/site/tulip-ceremony.webp", alt: "Pink tulip brooch worn on a pale embroidered garment" },
      { src: "/images/site/gallery-20261030/chanhua/pink-tulip-edited.webp", alt: "Pink thread-wrapped tulip brooch upright, with pearl-edged leaf, dangling pearl and capped pin" },
      { src: "/images/site/gallery-20261029/chanhua/pink-tulip-side.webp", alt: "Side view of the pink tulip brooch, showing its layered petals, pearl details and long capped pin" },
      { src: "/images/site/gallery-20261030/chanhua/pink-tulip-oblique.webp", alt: "Oblique view of the pink tulip brooch, showing all three wrapped leaves and the pearl-edged leaf" },
    ],
    uses: ["ceremony", "wear"], howToUse: "Consider a floral accent for a wedding guest or meaningful occasion.",
    consideration: "A styling example, not a confirmed made-to-order package.",
  },
  {
    "id": "RH-01",
    "craft": "ronghua",
    "name": "Blue Blossom Hair Accessory & Brooch",
    "form": "Hair accessory / brooch",
    "image": "/images/site/ronghua/ronghua-worn-brooch.webp",
    "alt": "Velvet flower brooch worn as an accessory",
    "images": [
      {
        "src": "/images/site/ronghua/ronghua-worn-brooch.webp",
        "alt": "Velvet flower brooch worn as an accessory"
      },
      {
        "src": "/images/site/gallery-20261029/ronghua/rh-01-02.webp",
        "alt": "Velvet-Flower Brooch — alternate photograph 1"
      },
      {
        "src": "/images/site/gallery-20261029/ronghua/rh-01-03.webp",
        "alt": "Velvet-Flower Brooch — alternate photograph 2"
      },
      {
        "src": "/images/site/gallery-20261029/ronghua/rh-01-04.webp",
        "alt": "Velvet-Flower Brooch — alternate photograph 3"
      },
      {
        "src": "/images/site/gallery-20261029/ronghua/rh-01-05.webp",
        "alt": "Velvet-Flower Brooch — alternate photograph 4"
      },
      {
        "src": "/images/site/gallery-20261029/ronghua/rh-01-06.webp",
        "alt": "Velvet-Flower Brooch — reverse and fastening view"
      }
    ],
    "uses": [
      "wear",
      "ceremony",
      "gift"
    ],
    "howToUse": "Wear as a floral hair accessory or a brooch for an everyday outfit, celebration or meaningful gift.",
    "consideration": "Available by enquiry. Choose a hair accessory or brooch fitting, then confirm fastening, finish, care and stock or production options for that use."
  },
  {
    id: "RH-02", craft: "ronghua", name: "Velvet Flowers in a Vase", form: "Floral home display",
    image: "/images/site/ronghua/ronghua-home-vase.webp", alt: "Velvet flowers composed in a porcelain vase",
    images: [
      {"src": "/images/site/ronghua/ronghua-home-vase.webp", "alt": "Velvet flowers composed in a porcelain vase"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-02-02.webp", "alt": "Velvet Flowers in a Vase — alternate photograph 1"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-02-03.webp", "alt": "Velvet Flowers in a Vase — alternate photograph 2"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-02-04.webp", "alt": "Velvet Flowers in a Vase — alternate photograph 3"},
    ],
    uses: ["home", "gift", "ceremony"], howToUse: "Display in a vase as an enduring floral arrangement or keepsake.",
    consideration: "Available by enquiry. Confirm dimensions, display fittings, care and sourcing options for the selected arrangement.",
  },
  {
    id: "HX-01", craft: "hexiang", name: "Cloud Relief Incense Plaque", form: "Scented plaque",
    image: "/images/site/incense/round-cloud.webp", alt: "Round blended-incense plaque with cloud relief on textile",
    images: [{ src: "/images/site/incense/round-cloud.webp", alt: "Round blended-incense plaque with cloud relief on textile" }],
    uses: ["ritual", "gift", "home"], howToUse: "A shaped aromatic object for a personal scent ritual or considered gift.",
    consideration: "Aromatic ingredients, strength and intended use must be confirmed before purchase.",
  },
  {
    id: "HX-02", craft: "hexiang", name: "Floral Relief Incense Plaque", form: "Scented plaque",
    image: "/images/site/incense/round-floral.webp", alt: "Round incense plaque with layered floral relief",
    images: [{ src: "/images/site/incense/round-floral.webp", alt: "Round incense plaque with layered floral relief" }],
    uses: ["ritual", "gift"], howToUse: "A small aromatic object chosen for its carved form and composition.",
    consideration: "Available for a sourcing enquiry; confirm the precise composition, selected design and fulfilment terms.",
  },
  {
    id: "HX-03", craft: "hexiang", name: "Gourd Pendant", form: "Corded scent pendant",
    image: "/images/site/incense/gourd.webp", alt: "Gourd-shaped blended-incense ornament on a cord",
    images: [{ src: "/images/site/incense/gourd.webp", alt: "Gourd-shaped blended-incense ornament on a cord" }],
    uses: ["wear", "gift", "ritual"], howToUse: "An example of an aromatic object designed to be carried on a cord.",
    consideration: "Verify scent composition, cord suitability and contact guidance before wear.",
  },
  {
    id: "HX-04", craft: "hexiang", name: "Rabbit-Motif Ornament", form: "Decorative scent ornament",
    image: "/images/site/incense/rabbit.webp", alt: "Blended-incense ornament with rabbit design and tassel",
    images: [{ src: "/images/site/incense/rabbit.webp", alt: "Blended-incense ornament with rabbit design and tassel" }],
    uses: ["gift", "ritual"], howToUse: "A symbolic gift form within the scented-object tradition.",
    consideration: "Available by enquiry; confirm motif, composition, quantity and supply for the particular design.",
  },
  {
    id: "HX-05", craft: "hexiang", name: "Narrative Relief Plaque", form: "Rectangular scent plaque",
    image: "/images/site/incense/relief-plaque.webp", alt: "Rectangular incense plaque with hand-worked relief",
    images: [{ src: "/images/site/incense/relief-plaque.webp", alt: "Rectangular incense plaque with hand-worked relief" }],
    uses: ["gift", "home", "ritual"], howToUse: "A carved object to appreciate visually alongside its aromatic character.",
    consideration: "Storage, surface care and scent information have not yet been finalised.",
  },
  {
    id: "HX-06", craft: "hexiang", name: "Leaf-Form Pendant", form: "Scent pendant",
    image: "/images/site/incense/leaf-form.webp", alt: "Leaf-form incense ornament with vein details",
    images: [{ src: "/images/site/incense/leaf-form.webp", alt: "Leaf-form incense ornament with vein details" }],
    uses: ["wear", "ritual", "gift"], howToUse: "An example of portable fragrance in a nature-inspired form.",
    consideration: "Enquire about the exact fragrance, wearing instructions, price and fulfilment lead time.",
  },
  {
    id: "HX-07", craft: "hexiang", name: "He Xiang Wrist Ornament", form: "Aromatic wrist ornament",
    image: "/images/site/incense/bracelet-worn-portrait.webp", alt: "Blended-incense bracelet shown on a wrist",
    images: [{ src: "/images/site/incense/bracelet-worn-portrait.webp", alt: "Blended-incense bracelet shown on a wrist" }],
    uses: ["wear", "ritual", "gift"], howToUse: "A scented detail worn at the wrist rather than used as room fragrance.",
    consideration: "Materials, fit and skin-contact suitability must be checked case by case.",
  },
  {
    id: "HX-08", craft: "hexiang", name: "Slender Corded Ornament", form: "Corded scent form",
    image: "/images/site/incense/slender-form.webp", alt: "Slender blended-incense ornament on a decorative cord",
    images: [{ src: "/images/site/incense/slender-form.webp", alt: "Slender blended-incense ornament on a decorative cord" }],
    uses: ["wear", "ritual"], howToUse: "A compact example of fragrance given a wearable shape.",
    consideration: "Available by enquiry. Confirm the specific formula, cord construction and current supply.",
  },
  {
    id: "LC-01", craft: "lacquer", name: "Lacquer Tea Vessel", form: "Tea-related object",
    image: "/images/site/lacquer/teapot.webp", alt: "Textured lacquer teapot-shaped vessel",
    images: [{ src: "/images/site/lacquer/teapot.webp", alt: "Textured lacquer teapot-shaped vessel" }],
    uses: ["ritual", "home"], howToUse: "Explore lacquer as part of a tea-setting or decorative ritual.",
    consideration: "Food contact, heat resistance and liquid suitability must be verified before use.",
  },
  {
    id: "LC-02", craft: "lacquer", name: "Orchid Cup Pair", form: "Cup-shaped objects",
    image: "/images/site/lacquer/orchid-cups.webp", alt: "Red and black lacquer cups with orchid decorations",
    images: [{ src: "/images/site/lacquer/orchid-cups.webp", alt: "Red and black lacquer cups with orchid decorations" }],
    uses: ["ritual", "home", "gift"], howToUse: "A visual example for an elegant tabletop or tea-related setting.",
    consideration: "Do not assume the pictured objects are drinking-safe without verified specifications.",
  },
  {
    id: "LC-03", craft: "lacquer", name: "Red Lacquer Cup", form: "Cup-shaped object",
    image: "/images/site/lacquer/red-cup.webp", alt: "Red lacquer cup held against a bright sky",
    images: [{ src: "/images/site/lacquer/red-cup.webp", alt: "Red lacquer cup held against a bright sky" }],
    uses: ["ritual", "home"], howToUse: "An illustration of vivid lacquer surface and handheld scale.",
    consideration: "Functional contact and cleaning instructions require confirmation.",
  },
  {
    id: "LC-04", craft: "lacquer", name: "Red Lacquer Bangle", form: "Wrist adornment",
    image: "/images/site/lacquer/red-bangle.webp", alt: "Red lacquer bangle bracelet",
    images: [{ src: "/images/site/lacquer/red-bangle.webp", alt: "Red lacquer bangle bracelet" }],
    uses: ["wear", "gift"], howToUse: "A sculptural statement piece for a personal wardrobe.",
    consideration: "Sizing, closure if any, and finish resistance need confirmation.",
  },
  {
    id: "LC-05", craft: "lacquer", name: "Lacquer Pendant Necklaces", form: "Neck adornment",
    image: "/images/site/lacquer/necklaces.webp", alt: "Two handmade lacquer pendant necklaces",
    images: [{ src: "/images/site/lacquer/necklaces.webp", alt: "Two handmade lacquer pendant necklaces" }],
    uses: ["wear", "gift"], howToUse: "A small area of lacquer colour and texture worn close to the body.",
    consideration: "Confirm pendant dimensions, weight, hardware specifications and current availability when enquiring.",
  },
  {
    id: "LC-06", craft: "lacquer", name: "Red Drop Lacquer Pendant", form: "Pendant",
    image: "/images/site/lacquer/red-pendant.webp", alt: "Red drop-shaped lacquer pendant",
    images: [{ src: "/images/site/lacquer/red-pendant.webp", alt: "Red drop-shaped lacquer pendant" }],
    uses: ["wear", "gift", "ceremony"], howToUse: "A restrained focal point for a contemporary or formal outfit.",
    consideration: "Available by enquiry; confirm the exact design, quantities and production feasibility.",
  },
  {
    id: "LC-07", craft: "lacquer", name: "Panda & Bamboo Wall Artwork", form: "Wall art",
    image: "/images/site/lacquer/panda-wall.webp", alt: "Lacquer wall artwork featuring pandas and bamboo",
    images: [{ src: "/images/site/lacquer/panda-wall.webp", alt: "Lacquer wall artwork featuring pandas and bamboo" }],
    uses: ["home", "gift"], howToUse: "Decorative wall art bringing a narrative image into an interior.",
    consideration: "Scale, weight, hanging method and availability are not yet confirmed.",
  },
  {
    id: "LC-08", craft: "lacquer", name: "Maple Detail Object", form: "Decorative home object",
    image: "/images/site/lacquer/maple-vessel.webp", alt: "Dark lacquer decorative piece with maple detail",
    images: [{ src: "/images/site/lacquer/maple-vessel.webp", alt: "Dark lacquer decorative piece with maple detail" }],
    uses: ["home", "gift"], howToUse: "A tactile decorative object for a shelf or display setting.",
    consideration: "Final purpose, materials and handling guidance require maker confirmation.",
  },
  {
    id: "LC-09", craft: "lacquer", name: "Patterned Lacquer Cup", form: "Cup-shaped object",
    image: "/images/site/lacquer/patterned-cup.webp", alt: "Dark patterned lacquer cup held in a hand",
    images: [{ src: "/images/site/lacquer/patterned-cup.webp", alt: "Dark patterned lacquer cup held in a hand" }],
    uses: ["ritual", "home"], howToUse: "An example of fine surface ornamentation on a small vessel form.",
    consideration: "Potential food or beverage use cannot be assumed.",
  },
  {
    id: "BX-01", craft: "bian", status: "past", name: "Blue Peony Evening Bag", form: "Evening bag",
    image: "/images/site/blue-peony-bag.webp", alt: "Blue peony Bian embroidery evening bag",
    images: [
      {"src": "/images/site/blue-peony-bag.webp", "alt": "Blue peony Bian embroidery evening bag"},
      {"src": "/images/site/blue-peony-detail.webp", "alt": "Detail of the same blue peony evening bag"},
      {"src": "/images/site/gallery-20261029/embroidery/bx-01-side.webp", "alt": "Side view of the blue peony evening bag"},
      {"src": "/images/site/gallery-20261029/embroidery/bx-01-back.webp", "alt": "Back and chain of the blue peony evening bag"},
      {"src": "/images/site/gallery-20261029/embroidery/bx-01-interior.webp", "alt": "Open interior and frame of the blue peony evening bag"},
    ],
    uses: ["ceremony", "wear"], howToUse: "A past design showing pictorial embroidery carried with occasion wear.",
    consideration: "Past Collection only. Protect embroidery from abrasion; this bag is not currently for sale.",
  },
  {
    id: "BX-02", craft: "bian", status: "past", name: "Red Peony Evening Bag", form: "Evening bag",
    image: "/images/site/red-peony-bag.webp", alt: "Red peony Bian embroidery evening bag",
    images: [
      {"src": "/images/site/red-peony-bag.webp", "alt": "Red peony Bian embroidery evening bag"},
      {"src": "/images/site/red-peony-detail.webp", "alt": "Detail of the same red peony evening bag"},
      {"src": "/images/site/gallery-20261029/embroidery/bx-02-side.webp", "alt": "Side view of the red peony evening bag"},
      {"src": "/images/site/gallery-20261029/embroidery/bx-02-back.webp", "alt": "Back and chain of the red peony evening bag"},
      {"src": "/images/site/gallery-20261029/embroidery/bx-02-interior.webp", "alt": "Open interior and frame of the red peony evening bag"},
    ],
    uses: ["ceremony", "wear"], howToUse: "A design archive example for formal attire and embroidery study.",
    consideration: "Past Collection only; not a currently available item or confirmed wholesale option.",
  },
  {
    "id": "LE-01",
    "craft": "bian",
    "salesChannel": "etsy",
    "name": "Embroidered Lion Charm",
    "form": "Textile charm · colour variants",
    "image": "/images/site/gallery-20261029/lion-variants/three-colours-front.webp",
    "alt": "Three colour variants of the embroidered lion charm: light blue, coral orange and gold",
    "images": [
      {
        "src": "/images/site/gallery-20261029/lion-variants/three-colours-front.webp",
        "alt": "Three colour variants of the embroidered lion charm: light blue, coral orange and gold",
        "caption": "Three colours"
      },
      {
        "src": "/images/site/lion-charm.webp",
        "alt": "Colorful embroidered lion textile charms with tassels",
        "caption": "Gold · Front"
      },
      {
        "src": "/images/site/gallery-20261029/lion-variants/light-blue-front.webp",
        "alt": "Light-blue embroidered lion charm colour variant, front view",
        "caption": "Light blue · Front"
      },
      {
        "src": "/images/site/gallery-20261029/lion-variants/coral-orange-front.webp",
        "alt": "Coral-orange embroidered lion charm colour variant, front view",
        "caption": "Coral orange · Front"
      },
      {
        "src": "/images/site/gallery-20261029/embroidery/le-01-stitch-detail.webp",
        "alt": "Stitch detail of the same yellow embroidered lion charm",
        "caption": "Gold · Stitch detail"
      },
      {
        "src": "/images/site/gallery-20261029/lion-variants/light-blue-back.webp",
        "alt": "Reverse of the light-blue lion charm with embroidered characters and blue edging",
        "caption": "Light blue · Reverse"
      },
      {
        "src": "/images/site/gallery-20261029/lion-variants/coral-orange-back.webp",
        "alt": "Reverse of the coral-orange lion charm with embroidered characters and gold edging",
        "caption": "Coral orange · Reverse"
      },
      {
        "src": "/images/site/gallery-20261029/lion-variants/gold-back.webp",
        "alt": "Reverse of the gold lion charm with embroidered characters and gold edging",
        "caption": "Gold · Reverse"
      },
      {
        "src": "/images/site/gallery-20261029/lion-variants/three-colours-back.webp",
        "alt": "Reverse views of all three lion charm colour variants with matching cords and tassels",
        "caption": "Three colours · Reverse"
      },
      {
        "src": "/images/site/gallery-20261029/lion-variants/three-colours-angle.webp",
        "alt": "Angled display of the same three embroidered lion charm colour variants and tassels",
        "caption": "Three colours · Side view"
      }
    ],
    "uses": [
      "gift",
      "wear",
      "ceremony"
    ],
    "howToUse": "Explore gold, coral-orange and light-blue colourways of this embroidered lion design. Attach where the specific hardware permits, or give as a joyful keepsake.",
    "consideration": "Choose a colour reference from the gallery, then confirm current variants, hardware, dimensions and prices with the active Etsy listing."
  },

  {
    "id": "HX-09",
    "craft": "hexiang",
    "name": "Tasselled Plaque Pair",
    "form": "Hanging ornaments",
    "image": "/images/site/uploads-20261027/tasselled-plaques.webp",
    images: [{ src: "/images/site/uploads-20261027/tasselled-plaques.webp", alt: "Tasselled Plaque Pair shown in the user-supplied craft archive" }],
    "alt": "Tasselled Plaque Pair shown in the user-supplied craft archive",
    "uses": [
      "gift",
      "home"
    ],
    "howToUse": "A reference for suspended decorative scent forms with knotted cords and long tassels.",
    "consideration": "Confirm hanging position, fragrance and cord construction; pictured designs are not confirmed stock."
  },
  {
    "id": "HX-10",
    "craft": "hexiang",
    "name": "Beaded Hanging Ornaments",
    "form": "Corded ornaments",
    "image": "/images/site/uploads-20261027/beaded-hanging-ornaments.webp",
    images: [{ src: "/images/site/uploads-20261027/beaded-hanging-ornaments.webp", alt: "Beaded Hanging Ornaments shown in the user-supplied craft archive" }],
    "alt": "Beaded Hanging Ornaments shown in the user-supplied craft archive",
    "uses": [
      "gift",
      "home"
    ],
    "howToUse": "Explore a vertical arrangement of beads and shaped ornaments for a display setting.",
    "consideration": "The composition of each bead and the intended mounting need confirmation."
  },
  {
    "id": "HX-11",
    "craft": "hexiang",
    "name": "Bead & Plaque Wrist Ornament",
    "form": "Bracelet",
    "image": "/images/site/uploads-20261027/bead-and-plaque-bracelet.webp",
    images: [{ src: "/images/site/uploads-20261027/bead-and-plaque-bracelet.webp", alt: "Bead & Plaque Wrist Ornament shown in the user-supplied craft archive" }],
    "alt": "Bead & Plaque Wrist Ornament shown in the user-supplied craft archive",
    "uses": [
      "wear",
      "gift"
    ],
    "howToUse": "Compare round beads with a shaped relief plaque in a wrist-sized form.",
    "consideration": "Fit, ingredient composition and skin-contact guidance remain unverified."
  },
  {
    "id": "HX-12",
    "craft": "hexiang",
    "name": "Multicolour Bead Bracelet",
    "form": "Bracelet",
    "image": "/images/site/uploads-20261027/multicolour-bead-bracelet.webp",
    images: [{ src: "/images/site/uploads-20261027/multicolour-bead-bracelet.webp", alt: "Multicolour Bead Bracelet shown in the user-supplied craft archive" }],
    "alt": "Multicolour Bead Bracelet shown in the user-supplied craft archive",
    "uses": [
      "wear",
      "gift"
    ],
    "howToUse": "A colour and arrangement reference for a beaded wrist ornament.",
    "consideration": "Do not infer the material or fragrance of every coloured bead from the photo."
  },
  {
    "id": "HX-13",
    "craft": "hexiang",
    "name": "Corded Relief Plaques",
    "form": "Pendant assortment",
    "image": "/images/site/uploads-20261027/corded-plaque-assortment.webp",
    images: [{ src: "/images/site/uploads-20261027/corded-plaque-assortment.webp", alt: "Corded Relief Plaques shown in the user-supplied craft archive" }],
    "alt": "Corded Relief Plaques shown in the user-supplied craft archive",
    "uses": [
      "wear",
      "gift"
    ],
    "howToUse": "Compare plaque shapes and cord arrangements when discussing a personal ornament.",
    "consideration": "Each motif, fitting and wearing instruction must be confirmed separately."
  },
  {
    "id": "HX-14",
    "craft": "hexiang",
    "name": "Dragon Relief Plaque",
    "form": "Relief ornament",
    "image": "/images/site/uploads-20261027/dragon-relief-plaque.webp",
    images: [{ src: "/images/site/uploads-20261027/dragon-relief-plaque.webp", alt: "Dragon Relief Plaque shown in the user-supplied craft archive" }],
    "alt": "Dragon Relief Plaque shown in the user-supplied craft archive",
    "uses": [
      "gift",
      "home"
    ],
    "howToUse": "A close view of a sculptural dragon-face motif for visual reference.",
    "consideration": "Handheld scale is illustrative; dimensions, hanging fittings and composition are unconfirmed."
  },
  {
    "id": "HX-15",
    "craft": "hexiang",
    "name": "Sculptural Incense Figure",
    "form": "Display figure",
    "image": "/images/site/uploads-20261027/sculptural-incense-figure.webp",
    images: [{ src: "/images/site/uploads-20261027/sculptural-incense-figure.webp", alt: "Sculptural Incense Figure shown in the user-supplied craft archive" }],
    "alt": "Sculptural Incense Figure shown in the user-supplied craft archive",
    "uses": [
      "home",
      "gift"
    ],
    "howToUse": "Explore a freestanding sculptural form within the supplied incense archive.",
    "consideration": "The figure identity, material formula, dimensions and intended scent use need confirmation."
  },
  {
    "id": "HX-16",
    "craft": "hexiang",
    "name": "Incense Sticks in Tubes",
    "form": "Packaged stick incense",
    "image": "/images/site/uploads-20261027/incense-tube-set.webp",
    images: [{ src: "/images/site/uploads-20261027/incense-tube-set.webp", alt: "Incense Sticks in Tubes shown in the user-supplied craft archive" }],
    "alt": "Incense Sticks in Tubes shown in the user-supplied craft archive",
    "uses": [
      "ritual",
      "gift"
    ],
    "howToUse": "A reference for stick incense presented in individual tubes.",
    "consideration": "Confirm composition and maker instructions before burning; use a suitable holder and ventilation, never leave burning incense unattended."
  },
  {
    "id": "HX-17",
    "craft": "hexiang",
    "name": "Mixed-Form Presentation Set",
    "form": "Boxed reference set",
    "image": "/images/site/uploads-20261027/incense-presentation-set.webp",
    images: [{ src: "/images/site/uploads-20261027/incense-presentation-set.webp", alt: "Mixed-Form Presentation Set shown in the user-supplied craft archive" }],
    "alt": "Mixed-Form Presentation Set shown in the user-supplied craft archive",
    "uses": [
      "gift",
      "ritual"
    ],
    "howToUse": "See how a wrist ornament and packaged incense can be arranged together for gifting.",
    "consideration": "Available to enquire about as a gift selection; confirm exact packaging, contents, quantities, price and lead time."
  },
  {
    "id": "BX-03",
    "craft": "bian",
    "name": "Lotus Standing Screen",
    "form": "Circular standing screen",
    "image": "/images/site/uploads-20261027/lotus-standing-screen.webp",
    images: [{ src: "/images/site/uploads-20261027/lotus-standing-screen.webp", alt: "Lotus Standing Screen shown in the user-supplied craft archive" }, { src: "/images/site/uploads-20261027/lotus-screen-detail.webp", alt: "Close view of the same lotus embroidery screen" }],
    "alt": "Lotus Standing Screen shown in the user-supplied craft archive",
    "uses": [
      "home",
      "gift"
    ],
    "howToUse": "Display as a tabletop focal point, allowing room around the circular frame.",
    "consideration": "Confirm base stability, dimensions and whether both faces are intended for viewing."
  },
  {
    "id": "BX-04",
    "craft": "bian",
    "name": "Panda & Bamboo Screen",
    "form": "Circular standing screen",
    "image": "/images/site/uploads-20261027/panda-standing-screen.webp",
    images: [{ src: "/images/site/uploads-20261027/panda-standing-screen.webp", alt: "Panda & Bamboo Screen shown in the user-supplied craft archive" }],
    "alt": "Panda & Bamboo Screen shown in the user-supplied craft archive",
    "uses": [
      "home",
      "gift"
    ],
    "howToUse": "A pictorial textile reference for a shelf or tabletop display.",
    "consideration": "Enquire to confirm exact fibres, dimensions, maker attribution and current stock or production options."
  },
  {
    "id": "BX-05",
    "craft": "bian",
    "name": "Dragon Vase Picture",
    "form": "Framed embroidery picture",
    "image": "/images/site/uploads-20261027/dragon-vase-picture.webp",
    images: [
      {"src": "/images/site/uploads-20261027/dragon-vase-picture.webp", "alt": "Dragon Vase Picture shown in the user-supplied craft archive"},
      {"src": "/images/site/gallery-20261029/embroidery/bx-05-detail.webp", "alt": "Closer view of the dragon vase embroidery picture"},
    ],
    "alt": "Dragon Vase Picture shown in the user-supplied craft archive",
    "uses": [
      "home",
      "gift"
    ],
    "howToUse": "A framed image of a vase with dragon and floral motifs for interior display.",
    "consideration": "This is a picture of a vessel; confirm frame dimensions and hanging fittings."
  },
  {
    "id": "BX-06",
    "craft": "bian",
    "name": "Orchid & Butterfly Picture",
    "form": "Framed embroidery picture",
    "image": "/images/site/uploads-20261027/orchid-framed-picture.webp",
    images: [
      {"src": "/images/site/uploads-20261027/orchid-framed-picture.webp", "alt": "Orchid & Butterfly Picture shown in the user-supplied craft archive"},
      {"src": "/images/site/gallery-20261029/embroidery/bx-06-setting.webp", "alt": "Full framed orchid and butterfly embroidery picture"},
    ],
    "alt": "Orchid & Butterfly Picture shown in the user-supplied craft archive",
    "uses": [
      "home",
      "gift"
    ],
    "howToUse": "A small botanical composition for an interior display or gift discussion.",
    "consideration": "Available by enquiry; confirm frame materials, dimensions, mounting fittings and supply."
  },
  {
    "id": "BX-07",
    "craft": "bian",
    "name": "Paired Vertical Floral Panels",
    "form": "Framed vertical panels",
    "image": "/images/site/uploads-20261027/paired-vertical-panels.webp",
    images: [
      {"src": "/images/site/uploads-20261027/paired-vertical-panels.webp", "alt": "Paired Vertical Floral Panels shown in the user-supplied craft archive"},
      {"src": "/images/site/gallery-20261029/embroidery/bx-07-pair.webp", "alt": "The same paired vertical embroidery panels arranged for viewing"},
      {"src": "/images/site/gallery-20261029/embroidery/bx-07-yellow-detail.webp", "alt": "Bird and flower detail in the yellow vertical embroidery panel"},
      {"src": "/images/site/uploads-20261027/blue-panel-detail.webp", "alt": "Flower and butterfly detail in the blue vertical embroidery panel"},
    ],
    "alt": "Paired Vertical Floral Panels shown in the user-supplied craft archive",
    "uses": [
      "home",
      "gift"
    ],
    "howToUse": "Compare two slender floral compositions as a paired interior display.",
    "consideration": "Available by enquiry; confirm whether both panels can be sourced together, dimensions and mounting."
  },
  {
    "id": "BX-08",
    "craft": "bian",
    "name": "Peonies & Butterflies",
    "form": "Framed embroidery picture",
    "image": "/images/site/uploads-20261027/peony-butterfly-picture.webp",
    images: [{ src: "/images/site/uploads-20261027/peony-butterfly-picture.webp", alt: "Peonies & Butterflies shown in the user-supplied craft archive" }],
    "alt": "Peonies & Butterflies shown in the user-supplied craft archive",
    "uses": [
      "home",
      "gift"
    ],
    "howToUse": "A floral picture that brings layered colour into a room or gift setting.",
    "consideration": "Protect from direct sunlight; confirm textile, frame, care and availability in your sourcing enquiry."
  },
  {
    "id": "BX-09",
    "craft": "bian",
    "name": "Pink Peony Picture",
    "form": "Framed embroidery picture",
    "image": "/images/site/uploads-20261027/pink-peony-picture.webp",
    images: [{ src: "/images/site/uploads-20261027/pink-peony-picture.webp", alt: "Pink Peony Picture shown in the user-supplied craft archive" }],
    "alt": "Pink Peony Picture shown in the user-supplied craft archive",
    "uses": [
      "home",
      "gift"
    ],
    "howToUse": "A close floral composition for a wall display or personal gift reference.",
    "consideration": "Enquire to confirm dimensions, fibres and stock or production options for the pictured style."
  },
  {
    "id": "BX-10",
    "craft": "bian",
    "name": "Mountain Landscape Picture",
    "form": "Framed embroidery picture",
    "image": "/images/site/uploads-20261027/landscape-picture.webp",
    images: [{ src: "/images/site/uploads-20261027/landscape-picture.webp", alt: "Mountain Landscape Picture shown in the user-supplied craft archive" }],
    "alt": "Mountain Landscape Picture shown in the user-supplied craft archive",
    "uses": [
      "home",
      "gift"
    ],
    "howToUse": "A landscape reference for a quiet interior display.",
    "consideration": "Available by enquiry; confirm dimensions, hanging method and care. No named artist attribution is supplied."
  },
  {
    "id": "RH-03",
    "craft": "ronghua",
    "name": "Red Bridal Floral Hair Comb",
    "form": "Ceremonial hair comb",
    "image": "/images/site/ronghua/collection/red-bridal-hair-comb.webp",
    images: [
      {"src": "/images/site/ronghua/collection/red-bridal-hair-comb.webp", "alt": "Red floral velvet flower hair comb with decorative drops"},
      {"src": "/images/site/gallery-20261030/rh03-worn-textfree.webp", "alt": "Red Bridal Floral Hair Comb — worn styling view"},
    ],
    "alt": "Red floral velvet flower hair comb with decorative drops",
    "uses": [
      "wear",
      "ceremony"
    ],
    "howToUse": "A decorative floral comb to anchor a bridal or ceremonial hairstyle.",
    "consideration": "Confirm comb size, weight, attachment and how it fits the intended hairstyle."
  },
  {
    "id": "RH-04",
    "craft": "ronghua",
    "name": "Red Blossom Floral Pair",
    "form": "Floral embellishments",
    "image": "/images/site/ronghua/collection/red-floral-pair.webp",
    images: [
      {"src": "/images/site/ronghua/collection/red-floral-pair.webp", "alt": "Two small red velvet blossom ornaments"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-04-02.webp", "alt": "Red Blossom Floral Pair — alternate photograph 1"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-04-03.webp", "alt": "Red Blossom Floral Pair — alternate photograph 2"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-04-04.webp", "alt": "Red Blossom Floral Pair — alternate photograph 3"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-04-05.webp", "alt": "Red Blossom Floral Pair — alternate photograph 4"},
    ],
    "alt": "Two small red velvet blossom ornaments",
    "uses": [
      "wear",
      "gift",
      "ceremony"
    ],
    "howToUse": "Small flower accents suitable for a personal styling or gifting discussion.",
    "consideration": "Fittings and whether the pair is designed for clothing or hair must be confirmed."
  },
  {
    "id": "RH-05",
    "craft": "ronghua",
    "name": "Coral Leaf Lapel Brooch",
    "form": "Floral lapel ornament",
    "image": "/images/site/ronghua/collection/coral-leaf-brooch-worn.webp",
    images: [
      {"src": "/images/site/ronghua/collection/coral-leaf-brooch-worn.webp", "alt": "Warm red and coral leaf-shaped velvet flower worn on a dark jacket"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-05-02.webp", "alt": "Coral Leaf Lapel Brooch — alternate photograph 1"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-05-03.webp", "alt": "Coral Leaf Lapel Brooch — alternate photograph 2"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-05-04.webp", "alt": "Coral Leaf Lapel Brooch — alternate photograph 3"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-05-05.webp", "alt": "Coral Leaf Lapel Brooch — alternate photograph 4"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-05-06.webp", "alt": "Coral Leaf Lapel Brooch — alternate photograph 5"},
    ],
    "alt": "Warm red and coral leaf-shaped velvet flower worn on a dark jacket",
    "uses": [
      "wear",
      "ceremony"
    ],
    "howToUse": "Add a statement floral detail to a jacket or formal outfit.",
    "consideration": "Confirm pin attachment, dimensions and compatibility with delicate fabrics."
  },
  {
    "id": "RH-06",
    "craft": "ronghua",
    "name": "Goldfish-Inspired Floral Ornaments",
    "form": "Fish-motif decorative accessories",
    "image": "/images/site/ronghua/collection/goldfish-floral-clips.webp",
    images: [
      {"src": "/images/site/ronghua/collection/goldfish-floral-clips.webp", "alt": "A pair of red and pink goldfish-inspired floral ornaments on a ceramic dish"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-06-02.webp", "alt": "Goldfish-Inspired Floral Ornaments — alternate photograph 1"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-06-03.webp", "alt": "Goldfish-Inspired Floral Ornaments — alternate photograph 2"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-06-04.webp", "alt": "Goldfish-Inspired Floral Ornaments — alternate photograph 3"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-06-05.webp", "alt": "Goldfish-Inspired Floral Ornaments — alternate photograph 4"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-06-06.webp", "alt": "Goldfish-Inspired Floral Ornaments — alternate photograph 5"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-06-07.webp", "alt": "Goldfish-Inspired Floral Ornaments — alternate photograph 6"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-06-08.webp", "alt": "Goldfish-Inspired Floral Ornaments — alternate photograph 7"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-06-09.webp", "alt": "Goldfish-Inspired Floral Ornaments — alternate photograph 8"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-06-10.webp", "alt": "Goldfish-Inspired Floral Ornaments — alternate photograph 9"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-06-11.webp", "alt": "Goldfish-Inspired Floral Ornaments — alternate photograph 10"},
    ],
    "alt": "A pair of red and pink goldfish-inspired floral ornaments on a ceramic dish",
    "uses": [
      "wear",
      "gift",
      "ceremony"
    ],
    "howToUse": "Explore a playful fish motif for hair or garment embellishment.",
    "consideration": "Check the intended fastening and whether pieces are sold singly or as a pair."
  },
  {
    "id": "RH-07",
    "craft": "ronghua",
    "name": "Purple Floral Cluster",
    "form": "Clustered flower ornament",
    "image": "/images/site/ronghua/collection/purple-floral-arrangement.webp",
    images: [
      {"src": "/images/site/ronghua/collection/purple-floral-arrangement.webp", "alt": "Layered dark-purple and lavender velvet flowers with dangling accents"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-07-02.webp", "alt": "Purple Floral Cluster — worn styling view"},
    ],
    "alt": "Layered dark-purple and lavender velvet flowers with dangling accents",
    "uses": [
      "wear",
      "ceremony",
      "gift"
    ],
    "howToUse": "Consider a sculptural floral cluster for a special outfit or display.",
    "consideration": "The mounting method, overall weight and exact flower arrangement need confirmation."
  },
  {
    "id": "RH-08",
    "craft": "ronghua",
    "name": "Blue Floral Hairpin",
    "form": "Statement hairpin",
    "image": "/images/site/ronghua/collection/blue-floral-hairpin.webp",
    images: [
      {"src": "/images/site/ronghua/collection/blue-floral-hairpin.webp", "alt": "Bright blue cluster of velvet flowers attached to a long hairpin"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-08-02.webp", "alt": "Blue Floral Hairpin — alternate photograph 1"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-08-03.webp", "alt": "Blue Floral Hairpin — alternate photograph 2"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-08-04.webp", "alt": "Blue Floral Hairpin — alternate photograph 3"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-08-05.webp", "alt": "Blue Floral Hairpin — worn styling view"},
    ],
    "alt": "Bright blue cluster of velvet flowers attached to a long hairpin",
    "uses": [
      "wear",
      "ceremony"
    ],
    "howToUse": "A prominent blue floral accent for an updo or special-occasion hairstyle.",
    "consideration": "Confirm hairpin length, securing method and suitability for hair thickness."
  },
  {
    "id": "RH-09",
    "craft": "ronghua",
    "name": "Scarlet-and-Ivory Lily Motif",
    "form": "Decorative flower stem",
    "image": "/images/site/ronghua/collection/red-white-lily-flower.webp",
    images: [
      {"src": "/images/site/ronghua/collection/red-white-lily-flower.webp", "alt": "Red-and-white lily-shaped velvet flower detail against a dark background"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-09-02.webp", "alt": "Scarlet-and-Ivory Lily Motif — alternate photograph 1"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-09-03.webp", "alt": "Scarlet-and-Ivory Lily Motif — alternate photograph 2"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-09-04.webp", "alt": "Scarlet-and-Ivory Lily Motif — alternate photograph 3"},
    ],
    "alt": "Red-and-white lily-shaped velvet flower detail against a dark background",
    "uses": [
      "wear",
      "ceremony",
      "home"
    ],
    "howToUse": "A bold flower design for a wearable accent or small display arrangement.",
    "consideration": "Confirm the supporting structure and whether the pictured example has a wearable fitting."
  },
  {
    "id": "RH-10",
    "craft": "ronghua",
    "name": "Blue Bird Floral Sculpture",
    "form": "Bird-shaped decorative ornament",
    "image": "/images/site/ronghua/collection/blue-bird-sculpture.webp",
    images: [
      {"src": "/images/site/ronghua/collection/blue-bird-sculpture.webp", "alt": "Small blue bird-shaped velvet ornament presented in a display box"},
    ],
    "alt": "Small blue bird-shaped velvet ornament presented in a display box",
    "uses": [
      "home",
      "gift"
    ],
    "howToUse": "An illustrative bird form for a shelf, display box or special gift.",
    "consideration": "Display stand, fragility, dimensions and packaging should be confirmed."
  },
  {
    "id": "RH-11",
    "craft": "ronghua",
    "name": "Violet Floral Brooch & Vase Arrangement",
    "form": "Brooch / floral arrangement",
    "image": "/images/site/ronghua/collection/violet-floral-vase.webp",
    "images": [
      {
        "src": "/images/site/ronghua/collection/violet-floral-vase.webp",
        "alt": "Lavender velvet flowers arranged in a decorated porcelain vase"
      },
      {
        "src": "/images/site/ronghua/collection/violet-brooch-worn.webp",
        "alt": "Lavender and violet floral corsage worn at the shoulder"
      },
      {
        "src": "/images/site/gallery-20261029/ronghua/rh-12-02.webp",
        "alt": "Violet Statement Lapel Brooch — alternate photograph 1"
      },
      {
        "src": "/images/site/gallery-20261029/ronghua/rh-11-02.webp",
        "alt": "Violet Floral Vase Arrangement — alternate photograph 1"
      },
      {
        "src": "/images/site/gallery-20261029/ronghua/rh-11-03.webp",
        "alt": "Violet Floral Vase Arrangement — alternate photograph 2"
      }
    ],
    "alt": "Lavender velvet flowers arranged in a decorated porcelain vase",
    "uses": [
      "wear",
      "home",
      "gift",
      "ceremony"
    ],
    "howToUse": "Wear this violet floral piece as a brooch, or arrange it in a vase for a home display or celebration keepsake.",
    "consideration": "Choose the intended use when enquiring. Confirm the brooch fastening or display support, dimensions, care and whether a vase is included."
  },
  {
    "id": "RH-14",
    "craft": "ronghua",
    "name": "Pink Blossom Barrette",
    "form": "Flower hair clip",
    "image": "/images/site/ronghua/collection/pink-blossom-hair-clip.webp",
    images: [
      {"src": "/images/site/ronghua/collection/pink-blossom-hair-clip.webp", "alt": "Pink blossoms arranged along a gold-toned hair clip"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-14-02.webp", "alt": "Pink Blossom Barrette — alternate photograph 1"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-14-03.webp", "alt": "Pink Blossom Barrette — reverse and fastening view"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-14-04.webp", "alt": "Pink Blossom Barrette — alternate photograph 3"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-14-05.webp", "alt": "Pink Blossom Barrette — alternate photograph 4"},
    ],
    "alt": "Pink blossoms arranged along a gold-toned hair clip",
    "uses": [
      "wear",
      "ceremony",
      "gift"
    ],
    "howToUse": "A romantic floral barrette for a half-up hairstyle or celebration.",
    "consideration": "Check clip size, grip and how the flower shape sits when worn."
  },
  {
    "id": "RH-15",
    "craft": "ronghua",
    "name": "Peacock-Feather Brooch",
    "form": "Feather-motif adornment",
    "image": "/images/site/ronghua/collection/peacock-feather-brooch.webp",
    images: [
      {"src": "/images/site/ronghua/collection/peacock-feather-brooch.webp", "alt": "Two iridescent blue-green feather-shaped velvet elements"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-15-02.webp", "alt": "Peacock-Feather Brooch — worn styling view"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-15-03.webp", "alt": "Peacock-Feather Brooch — alternate photograph 2"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-15-04.webp", "alt": "Peacock-Feather Brooch — alternate photograph 3"},
    ],
    "alt": "Two iridescent blue-green feather-shaped velvet elements",
    "uses": [
      "wear",
      "ceremony"
    ],
    "howToUse": "A peacock-feather-inspired accent for a jacket or ceremonial outfit.",
    "consideration": "Confirm the brooch attachment, length and finish with the maker."
  },
  {
    "id": "RH-16",
    "craft": "ronghua",
    "name": "Bamboo Leaf Brooch",
    "form": "Botanical lapel ornament",
    "image": "/images/site/ronghua/collection/bamboo-leaf-brooch.webp",
    images: [
      {"src": "/images/site/ronghua/collection/bamboo-leaf-brooch.webp", "alt": "Green-grey bamboo leaf-shaped botanical brooch"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-16-02.webp", "alt": "Bamboo Leaf Brooch — alternate photograph 1"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-16-03.webp", "alt": "Bamboo Leaf Brooch — alternate photograph 2"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-16-04.webp", "alt": "Bamboo Leaf Brooch — alternate photograph 3"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-16-05.webp", "alt": "Bamboo Leaf Brooch — alternate photograph 4"},
    ],
    "alt": "Green-grey bamboo leaf-shaped botanical brooch",
    "uses": [
      "wear",
      "gift"
    ],
    "howToUse": "Add a restrained botanical detail to knitwear, a jacket or coat.",
    "consideration": "Confirm fastening and handling requirements for fine pointed leaves."
  },
  {
    "id": "RH-17",
    "craft": "ronghua",
    "name": "Framed Botanical Craft Art",
    "form": "Framed velvet-flower composition",
    "image": "/images/site/ronghua/collection/framed-bamboo-art.webp",
    images: [
      {"src": "/images/site/ronghua/collection/framed-bamboo-art.webp", "alt": "Framed raised bamboo and botanical composition with Chinese calligraphy as part of the artwork"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-17-02.webp", "alt": "Framed Botanical Craft Art — alternate photograph 1"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-17-03.webp", "alt": "Framed Botanical Craft Art — alternate photograph 2"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-17-04.webp", "alt": "Framed Botanical Craft Art — alternate photograph 3"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-17-05.webp", "alt": "Framed Botanical Craft Art — alternate photograph 4"},
    ],
    "alt": "Framed raised bamboo and botanical composition with Chinese calligraphy as part of the artwork",
    "uses": [
      "home",
      "gift"
    ],
    "howToUse": "A framed botanical piece for a shelf, desk or interior display.",
    "consideration": "Check artwork dimensions, framing, mounting and the original inscription."
  },
  {
    "id": "RH-18",
    "craft": "ronghua",
    "name": "Apricot Blossom Brooch",
    "form": "Soft orange floral brooch",
    "image": "/images/site/ronghua/collection/peach-blossom-brooch.webp",
    images: [
      {"src": "/images/site/ronghua/collection/peach-blossom-brooch.webp", "alt": "Apricot-coloured floral brooch with layered rounded petals"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-18-02.webp", "alt": "Apricot Blossom Brooch — reverse and fastening view"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-18-03.webp", "alt": "Apricot Blossom Brooch — alternate photograph 2"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-18-04.webp", "alt": "Apricot Blossom Brooch — alternate photograph 3"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-18-05.webp", "alt": "Apricot Blossom Brooch — alternate photograph 4"},
    ],
    "alt": "Apricot-coloured floral brooch with layered rounded petals",
    "uses": [
      "wear",
      "gift"
    ],
    "howToUse": "A softly coloured flower accent for a neutral jacket or gift.",
    "consideration": "Confirm pin security and care before wearing on fine fabric."
  },
  {
    "id": "RH-19",
    "craft": "ronghua",
    "name": "Lavender Orchid Brooch",
    "form": "Orchid-inspired brooch",
    "image": "/images/site/ronghua/collection/lavender-orchid-brooch.webp",
    images: [
      {"src": "/images/site/ronghua/collection/lavender-orchid-brooch.webp", "alt": "Purple orchid blossom cluster arranged as a floral accessory"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-19-02.webp", "alt": "Lavender Orchid Brooch — alternate photograph 1"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-19-03.webp", "alt": "Lavender Orchid Brooch — alternate photograph 2"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-19-04.webp", "alt": "Lavender Orchid Brooch — alternate photograph 3"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-19-05.webp", "alt": "Lavender Orchid Brooch — alternate photograph 4"},
    ],
    "alt": "Purple orchid blossom cluster arranged as a floral accessory",
    "uses": [
      "wear",
      "gift",
      "ceremony"
    ],
    "howToUse": "An orchid-like flower accent to wear on a lapel or celebratory outfit.",
    "consideration": "Confirm scale, colour variation and exact fastening."
  },
  {
    "id": "RH-20",
    "craft": "ronghua",
    "name": "Golden Ginkgo Brooch",
    "form": "Ginkgo leaf motif",
    "image": "/images/site/ronghua/collection/golden-ginkgo-brooch.webp",
    images: [
      {"src": "/images/site/ronghua/collection/golden-ginkgo-brooch.webp", "alt": "Bright golden-yellow fan-shaped ginkgo leaf brooch"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-20-02.webp", "alt": "Golden Ginkgo Brooch — alternate photograph 1"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-20-03.webp", "alt": "Golden Ginkgo Brooch — alternate photograph 2"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-20-04.webp", "alt": "Golden Ginkgo Brooch — alternate photograph 3"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-20-05.webp", "alt": "Golden Ginkgo Brooch — worn styling view"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-20-06.webp", "alt": "Golden Ginkgo Brooch — alternate photograph 5"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-20-07.webp", "alt": "Golden Ginkgo Brooch — worn styling view"},
    ],
    "alt": "Bright golden-yellow fan-shaped ginkgo leaf brooch",
    "uses": [
      "wear",
      "gift"
    ],
    "howToUse": "Bring an autumn botanical motif to a jacket or scarf.",
    "consideration": "Confirm pin closure, leaf durability and compatibility with the garment."
  },
  {
    "id": "RH-21",
    "craft": "ronghua",
    "name": "Golden Ginkgo Earrings",
    "form": "Dangling botanical earrings",
    "image": "/images/site/ronghua/collection/ginkgo-earrings.webp",
    images: [
      {"src": "/images/site/ronghua/collection/ginkgo-earrings.webp", "alt": "Pair of long gold-toned earrings with yellow ginkgo-shaped motifs"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-21-02.webp", "alt": "Golden Ginkgo Earrings — alternate photograph 1"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-21-03.webp", "alt": "Golden Ginkgo Earrings — alternate photograph 2"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-21-04.webp", "alt": "Golden Ginkgo Earrings — alternate photograph 3"},
    ],
    "alt": "Pair of long gold-toned earrings with yellow ginkgo-shaped motifs",
    "uses": [
      "wear",
      "ceremony",
      "gift"
    ],
    "howToUse": "Wear a light botanical accent as a matching earring pair.",
    "consideration": "Confirm weight, earring material, fit and sensitivity-related specifications."
  },
  {
    "id": "RH-22",
    "craft": "ronghua",
    "name": "Olive Branch Lapel Brooch",
    "form": "Green botanical brooch",
    "image": "/images/site/ronghua/collection/olive-branch-brooch-worn.webp",
    images: [
      {"src": "/images/site/ronghua/collection/olive-branch-brooch-worn.webp", "alt": "Green leafy brooch worn on a navy patterned garment"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-22-02.webp", "alt": "Olive Branch Lapel Brooch — worn styling view"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-22-03.webp", "alt": "Olive Branch Lapel Brooch — worn styling view"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-22-04.webp", "alt": "Olive Branch Lapel Brooch — alternate photograph 3"},
      {"src": "/images/site/gallery-20261029/ronghua/rh-22-05.webp", "alt": "Olive Branch Lapel Brooch — worn styling view"},
    ],
    "alt": "Green leafy brooch worn on a navy patterned garment",
    "uses": [
      "wear",
      "gift"
    ],
    "howToUse": "A subtle botanical accent for an everyday jacket or formal outfit.",
    "consideration": "Confirm closure and safe attachment to the chosen fabric."
  },
  {
    "id": "RH-23",
    "craft": "ronghua",
    "name": "Red Plum Floral Hair Claw",
    "form": "Floral hair claw",
    "image": "/images/site/gallery-20261030/rh23-reverse-textfree.webp",
    images: [
      {"src": "/images/site/gallery-20261030/rh23-reverse-textfree.webp", "alt": "Red Plum Floral Hair Claw — reverse and fastening view"},
      {"src": "/images/site/ronghua/collection/red-plum-hair-claw.webp", "alt": "Red plum blossom decoration on a dark hair claw"},
    ],
    "alt": "Red Plum Floral Hair Claw — reverse and fastening view",
    "uses": [
      "wear",
      "ceremony"
    ],
    "howToUse": "A decorative hair claw combining a practical grip with traditional floral ornament.",
    "consideration": "Confirm the claw mechanism, grip strength, tooth durability and safe regular-use testing."
  },
];
