export type CraftId = "chanhua" | "ronghua" | "hexiang" | "lacquer" | "bian" | "lion";
export type CatalogStatus = "available" | "coming" | "past";
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
};

export const uses: { id: UseId; label: string }[] = [
  { id: "wear", label: "Wear & adorn" },
  { id: "ceremony", label: "Weddings & occasions" },
  { id: "gift", label: "Gifts & keepsakes" },
  { id: "home", label: "Home & display" },
  { id: "ritual", label: "Tea & personal rituals" },
];

export const statusLabels: Record<CatalogStatus, string> = {
  available: "AVAILABLE COLLECTION",
  coming: "COMING SOON",
  past: "PAST COLLECTION",
};

export const crafts: CraftEntry[] = [
  { id: "chanhua", label: "Chanhua · Thread-Wrapped Flowers", subtitle: "CHANHUA · FLORAL ORNAMENTS", status: "available", href: "/en/heritage/chanhua", summary: "Thread-wrapped forms for hair, clothing and personal occasions. Individual designs and current stock are verified on Etsy." },
  { id: "ronghua", label: "Yangzhou Ronghua · Velvet Flowers", subtitle: "RONGHUA · VELVET FLOWERS", status: "coming", href: "/en/heritage/ronghua", summary: "Soft, sculptural flowers explored as wearable accents and lasting display pieces after an important occasion." },
  { id: "hexiang", label: "He Xiang · Blended Incense", subtitle: "TAIHE XIANGTANG · KAIFENG", status: "coming", href: "/en/heritage/taihe-xiangtang", summary: "Fragrant compositions shaped into plaques, pendants and wrist ornaments. Scents and final specifications remain to be confirmed." },
  { id: "lacquer", label: "Chengdu Lacquerware", subtitle: "LACQUER · CHENGDU", status: "coming", href: "/en/heritage/chengdu-lacquerware", summary: "Layered lacquer translated into adornments, display objects and tea-related forms. Usability is assessed piece by piece." },
  { id: "bian", label: "Bian Embroidery", subtitle: "PICTORIAL EMBROIDERY · KAIFENG", status: "past", href: "/en/heritage/blue-peony-bag", summary: "Examples from a past collection illustrate fine pictorial embroidery. The bags shown are not currently offered for sale." },
  { id: "lion", label: "Embroidered Lion Charms", subtitle: "TEXTILE EMBROIDERY · LION MOTIFS", status: "available", href: "/en/heritage/lion-charm", summary: "Expressive small textile charms for personal accessories and celebratory gifting. Check current listings for individual designs." },
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
    consideration: "Coming Soon: finished designs, fastenings and wear testing are not yet confirmed.",
  },
  {
    id: "RH-02", craft: "ronghua", name: "Velvet Flowers in a Vase", form: "Floral home display",
    image: "/images/site/ronghua/ronghua-home-vase.webp", alt: "Velvet flowers composed in a porcelain vase",
    uses: ["home", "gift", "ceremony"], howToUse: "Display in a vase as an enduring floral arrangement or keepsake.",
    consideration: "A craft reference; final dimensions, display fittings and release details are pending.",
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
    consideration: "Shown as a coming-soon reference, not currently available to order.",
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
    consideration: "Reference work; motif, composition and supply would need confirmation.",
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
    consideration: "Release timing, wearing instructions and exact fragrance are unconfirmed.",
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
    consideration: "Display reference only; do not assume a specific composition or stock.",
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
    consideration: "Pendant dimensions, weight and hardware specifications are pending.",
  },
  {
    id: "LC-06", craft: "lacquer", name: "Red Drop Lacquer Pendant", form: "Pendant",
    image: "/images/site/lacquer/red-pendant.webp", alt: "Red drop-shaped lacquer pendant",
    uses: ["wear", "gift", "ceremony"], howToUse: "A restrained focal point for a contemporary or formal outfit.",
    consideration: "Do not assume every illustrated design is available for production.",
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
    id: "BX-01", craft: "bian", name: "Blue Peony Evening Bag", form: "Evening bag",
    image: "/images/site/blue-peony-bag.webp", alt: "Blue peony Bian embroidery evening bag",
    uses: ["ceremony", "wear"], howToUse: "A past design showing pictorial embroidery carried with occasion wear.",
    consideration: "Past Collection only. Protect embroidery from abrasion; this bag is not currently for sale.",
  },
  {
    id: "BX-02", craft: "bian", name: "Red Peony Evening Bag", form: "Evening bag",
    image: "/images/site/red-peony-bag.webp", alt: "Red peony Bian embroidery evening bag",
    uses: ["ceremony", "wear"], howToUse: "A design archive example for formal attire and embroidery study.",
    consideration: "Past Collection only; not a currently available item or confirmed wholesale option.",
  },
  {
    id: "LE-01", craft: "lion", name: "Embroidered Lion Charm", form: "Textile charm",
    image: "/images/site/lion-charm.webp", alt: "Colorful embroidered lion textile charms with tassels",
    uses: ["gift", "wear", "ceremony"], howToUse: "Attach where the specific hardware permits, or give as a joyful keepsake.",
    consideration: "Check current variants, hardware, dimensions and prices with the active Etsy listing.",
  },
];
