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
  alt: string;
  uses: UseId[];
  howToUse: string;
  consideration: string;
  status?: CatalogStatus;
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
  { id: "bian", label: "Bian Embroidery", subtitle: "PICTORIAL EMBROIDERY · KAIFENG", status: "available", href: "/en/heritage/bian-embroidery", summary: "Bian embroidery includes framed artwork, standing screens and embroidered lion charms. Artworks are available by direct enquiry, while lion charms are also sold on Etsy. Only the peony evening bags are Past Collection." },
];

export const catalog: CatalogEntry[] = [
  {
    id: "CH-01", craft: "chanhua", name: "Olive Berry Hair Ornament", form: "Hair ornament",
    image: "/images/site/chanhua-worn.webp", alt: "Olive berry Chanhua ornament styled in the hair",
    uses: ["wear", "ceremony"], howToUse: "Wear in an updo or as a delicate detail for a celebration.",
    consideration: "Protect the wrapped threads from crushing, moisture and repeated rubbing.",
  },
  {
    id: "CH-02", craft: "chanhua", name: "Olive Branch Hairpin", form: "Hairpin",
    image: "/images/site/olive-hairpin.webp", alt: "Hand-wrapped olive branch floral hairpin",
    uses: ["wear", "gift"], howToUse: "A floral accent for everyday styling or a personal gift.",
    consideration: "Store in a protective box when not worn; current exact design may vary.",
  },
  {
    id: "CH-03", craft: "chanhua", name: "Tulip Floral Brooch", form: "Brooch",
    image: "/images/site/tulip-brooch.webp", alt: "Small handcrafted Chanhua tulip brooches",
    uses: ["wear", "gift", "ceremony"], howToUse: "Add a small flower to a jacket, dress or event outfit.",
    consideration: "Check fastening details and fabric compatibility before ordering.",
  },
  {
    id: "CH-04", craft: "chanhua", name: "Tulip Occasion Styling", form: "Brooch / styling reference",
    image: "/images/site/tulip-ceremony.webp", alt: "Tulip floral ornament shown in occasion styling",
    uses: ["ceremony", "wear"], howToUse: "Consider a floral accent for a wedding guest or meaningful occasion.",
    consideration: "A styling example, not a confirmed made-to-order package.",
  },
  {
    id: "RH-01", craft: "ronghua", name: "Velvet-Flower Brooch", form: "Wearable floral art",
    image: "/images/site/ronghua/ronghua-worn-brooch.webp", alt: "Velvet flower brooch worn as an accessory",
    uses: ["wear", "ceremony", "gift"], howToUse: "A sculptural flower accent for a ceremony or special outfit.",
    consideration: "Available by enquiry. Confirm the fastening, finish, care and stock or production options for the specific brooch.",
  },
  {
    id: "RH-02", craft: "ronghua", name: "Velvet Flowers in a Vase", form: "Floral home display",
    image: "/images/site/ronghua/ronghua-home-vase.webp", alt: "Velvet flowers composed in a porcelain vase",
    uses: ["home", "gift", "ceremony"], howToUse: "Display in a vase as an enduring floral arrangement or keepsake.",
    consideration: "Available by enquiry. Confirm dimensions, display fittings, care and sourcing options for the selected arrangement.",
  },
  {
    id: "HX-01", craft: "hexiang", name: "Cloud Relief Incense Plaque", form: "Scented plaque",
    image: "/images/site/incense/round-cloud.webp", alt: "Round blended-incense plaque with cloud relief on textile",
    uses: ["ritual", "gift", "home"], howToUse: "A shaped aromatic object for a personal scent ritual or considered gift.",
    consideration: "Aromatic ingredients, strength and intended use must be confirmed before purchase.",
  },
  {
    id: "HX-02", craft: "hexiang", name: "Floral Relief Incense Plaque", form: "Scented plaque",
    image: "/images/site/incense/round-floral.webp", alt: "Round incense plaque with layered floral relief",
    uses: ["ritual", "gift"], howToUse: "A small aromatic object chosen for its carved form and composition.",
    consideration: "Available for a sourcing enquiry; confirm the precise composition, selected design and fulfilment terms.",
  },
  {
    id: "HX-03", craft: "hexiang", name: "Gourd Pendant", form: "Corded scent pendant",
    image: "/images/site/incense/gourd.webp", alt: "Gourd-shaped blended-incense ornament on a cord",
    uses: ["wear", "gift", "ritual"], howToUse: "An example of an aromatic object designed to be carried on a cord.",
    consideration: "Verify scent composition, cord suitability and contact guidance before wear.",
  },
  {
    id: "HX-04", craft: "hexiang", name: "Rabbit-Motif Ornament", form: "Decorative scent ornament",
    image: "/images/site/incense/rabbit.webp", alt: "Blended-incense ornament with rabbit design and tassel",
    uses: ["gift", "ritual"], howToUse: "A symbolic gift form within the scented-object tradition.",
    consideration: "Available by enquiry; confirm motif, composition, quantity and supply for the particular design.",
  },
  {
    id: "HX-05", craft: "hexiang", name: "Narrative Relief Plaque", form: "Rectangular scent plaque",
    image: "/images/site/incense/relief-plaque.webp", alt: "Rectangular incense plaque with hand-worked relief",
    uses: ["gift", "home", "ritual"], howToUse: "A carved object to appreciate visually alongside its aromatic character.",
    consideration: "Storage, surface care and scent information have not yet been finalised.",
  },
  {
    id: "HX-06", craft: "hexiang", name: "Leaf-Form Pendant", form: "Scent pendant",
    image: "/images/site/incense/leaf-form.webp", alt: "Leaf-form incense ornament with vein details",
    uses: ["wear", "ritual", "gift"], howToUse: "An example of portable fragrance in a nature-inspired form.",
    consideration: "Enquire about the exact fragrance, wearing instructions, price and fulfilment lead time.",
  },
  {
    id: "HX-07", craft: "hexiang", name: "He Xiang Wrist Ornament", form: "Aromatic wrist ornament",
    image: "/images/site/incense/bracelet-worn-portrait.webp", alt: "Blended-incense bracelet shown on a wrist",
    uses: ["wear", "ritual", "gift"], howToUse: "A scented detail worn at the wrist rather than used as room fragrance.",
    consideration: "Materials, fit and skin-contact suitability must be checked case by case.",
  },
  {
    id: "HX-08", craft: "hexiang", name: "Slender Corded Ornament", form: "Corded scent form",
    image: "/images/site/incense/slender-form.webp", alt: "Slender blended-incense ornament on a decorative cord",
    uses: ["wear", "ritual"], howToUse: "A compact example of fragrance given a wearable shape.",
    consideration: "Available by enquiry. Confirm the specific formula, cord construction and current supply.",
  },
  {
    id: "LC-01", craft: "lacquer", name: "Lacquer Tea Vessel", form: "Tea-related object",
    image: "/images/site/lacquer/teapot.webp", alt: "Textured lacquer teapot-shaped vessel",
    uses: ["ritual", "home"], howToUse: "Explore lacquer as part of a tea-setting or decorative ritual.",
    consideration: "Food contact, heat resistance and liquid suitability must be verified before use.",
  },
  {
    id: "LC-02", craft: "lacquer", name: "Orchid Cup Pair", form: "Cup-shaped objects",
    image: "/images/site/lacquer/orchid-cups.webp", alt: "Red and black lacquer cups with orchid decorations",
    uses: ["ritual", "home", "gift"], howToUse: "A visual example for an elegant tabletop or tea-related setting.",
    consideration: "Do not assume the pictured objects are drinking-safe without verified specifications.",
  },
  {
    id: "LC-03", craft: "lacquer", name: "Red Lacquer Cup", form: "Cup-shaped object",
    image: "/images/site/lacquer/red-cup.webp", alt: "Red lacquer cup held against a bright sky",
    uses: ["ritual", "home"], howToUse: "An illustration of vivid lacquer surface and handheld scale.",
    consideration: "Functional contact and cleaning instructions require confirmation.",
  },
  {
    id: "LC-04", craft: "lacquer", name: "Red Lacquer Bangle", form: "Wrist adornment",
    image: "/images/site/lacquer/red-bangle.webp", alt: "Red lacquer bangle bracelet",
    uses: ["wear", "gift"], howToUse: "A sculptural statement piece for a personal wardrobe.",
    consideration: "Sizing, closure if any, and finish resistance need confirmation.",
  },
  {
    id: "LC-05", craft: "lacquer", name: "Lacquer Pendant Necklaces", form: "Neck adornment",
    image: "/images/site/lacquer/necklaces.webp", alt: "Two handmade lacquer pendant necklaces",
    uses: ["wear", "gift"], howToUse: "A small area of lacquer colour and texture worn close to the body.",
    consideration: "Confirm pendant dimensions, weight, hardware specifications and current availability when enquiring.",
  },
  {
    id: "LC-06", craft: "lacquer", name: "Red Drop Lacquer Pendant", form: "Pendant",
    image: "/images/site/lacquer/red-pendant.webp", alt: "Red drop-shaped lacquer pendant",
    uses: ["wear", "gift", "ceremony"], howToUse: "A restrained focal point for a contemporary or formal outfit.",
    consideration: "Available by enquiry; confirm the exact design, quantities and production feasibility.",
  },
  {
    id: "LC-07", craft: "lacquer", name: "Panda & Bamboo Wall Artwork", form: "Wall art",
    image: "/images/site/lacquer/panda-wall.webp", alt: "Lacquer wall artwork featuring pandas and bamboo",
    uses: ["home", "gift"], howToUse: "Decorative wall art bringing a narrative image into an interior.",
    consideration: "Scale, weight, hanging method and availability are not yet confirmed.",
  },
  {
    id: "LC-08", craft: "lacquer", name: "Maple Detail Object", form: "Decorative home object",
    image: "/images/site/lacquer/maple-vessel.webp", alt: "Dark lacquer decorative piece with maple detail",
    uses: ["home", "gift"], howToUse: "A tactile decorative object for a shelf or display setting.",
    consideration: "Final purpose, materials and handling guidance require maker confirmation.",
  },
  {
    id: "LC-09", craft: "lacquer", name: "Patterned Lacquer Cup", form: "Cup-shaped object",
    image: "/images/site/lacquer/patterned-cup.webp", alt: "Dark patterned lacquer cup held in a hand",
    uses: ["ritual", "home"], howToUse: "An example of fine surface ornamentation on a small vessel form.",
    consideration: "Potential food or beverage use cannot be assumed.",
  },
  {
    id: "BX-01", craft: "bian", status: "past", name: "Blue Peony Evening Bag", form: "Evening bag",
    image: "/images/site/blue-peony-bag.webp", alt: "Blue peony Bian embroidery evening bag",
    uses: ["ceremony", "wear"], howToUse: "A past design showing pictorial embroidery carried with occasion wear.",
    consideration: "Past Collection only. Protect embroidery from abrasion; this bag is not currently for sale.",
  },
  {
    id: "BX-02", craft: "bian", status: "past", name: "Red Peony Evening Bag", form: "Evening bag",
    image: "/images/site/red-peony-bag.webp", alt: "Red peony Bian embroidery evening bag",
    uses: ["ceremony", "wear"], howToUse: "A design archive example for formal attire and embroidery study.",
    consideration: "Past Collection only; not a currently available item or confirmed wholesale option.",
  },
  {
    id: "LE-01", craft: "bian", salesChannel: "etsy", name: "Embroidered Lion Charm", form: "Textile charm",
    image: "/images/site/lion-charm.webp", alt: "Colorful embroidered lion textile charms with tassels",
    uses: ["gift", "wear", "ceremony"], howToUse: "Attach where the specific hardware permits, or give as a joyful keepsake.",
    consideration: "Check current variants, hardware, dimensions and prices with the active Etsy listing.",
  },

  {
    "id": "HX-09",
    "craft": "hexiang",
    "name": "Tasselled Plaque Pair",
    "form": "Hanging ornaments",
    "image": "/images/site/uploads-20261027/tasselled-plaques.webp",
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
    "name": "Violet Floral Vase Arrangement",
    "form": "Floral home arrangement",
    "image": "/images/site/ronghua/collection/violet-floral-vase.webp",
    "alt": "Lavender velvet flowers arranged in a decorated porcelain vase",
    "uses": [
      "home",
      "gift"
    ],
    "howToUse": "An enduring flower arrangement for a console, shelf or celebration keepsake.",
    "consideration": "The vase and flowers may be separate pieces; clarify what is included."
  },
  {
    "id": "RH-12",
    "craft": "ronghua",
    "name": "Violet Statement Lapel Brooch",
    "form": "Wearable floral arrangement",
    "image": "/images/site/ronghua/collection/violet-brooch-worn.webp",
    "alt": "Lavender and violet floral corsage worn at the shoulder",
    "uses": [
      "wear",
      "ceremony"
    ],
    "howToUse": "A statement floral accent on an outer layer for important occasions.",
    "consideration": "Confirm weight, fastening and fabric suitability before ordering."
  },
  {
    "id": "RH-13",
    "craft": "ronghua",
    "name": "Blue Blossom Hair Accent",
    "form": "Blue floral accessory",
    "image": "/images/site/ronghua/collection/blue-flower-hair-clip.webp",
    "alt": "Close-up of a blue flower ornament with decorative beads",
    "uses": [
      "wear",
      "gift"
    ],
    "howToUse": "A delicate blue flower accent for hair or clothing styling.",
    "consideration": "Request the exact clip or pin configuration; the photograph alone does not verify the fitting."
  },
  {
    "id": "RH-14",
    "craft": "ronghua",
    "name": "Pink Blossom Barrette",
    "form": "Flower hair clip",
    "image": "/images/site/ronghua/collection/pink-blossom-hair-clip.webp",
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
    "image": "/images/site/ronghua/collection/red-plum-hair-claw.webp",
    "alt": "Red plum blossom decoration on a dark hair claw",
    "uses": [
      "wear",
      "ceremony"
    ],
    "howToUse": "A decorative hair claw combining a practical grip with traditional floral ornament.",
    "consideration": "Confirm the claw mechanism, grip strength, tooth durability and safe regular-use testing."
  },
];
