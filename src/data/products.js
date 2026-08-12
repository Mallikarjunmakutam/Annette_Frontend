// Comprehensive product dataset for ANNETTE PURE Luxury Fragrance Maison
import wellnessImg from '../assets/wellness_collection.png';
import foundersImg from '../assets/founders_collection.png';
import boutiqueImg from '../assets/boutique_collection.png';
import fallWinterImg from '../assets/fall_winter_collection.png';
import privateLabelImg from '../assets/private_label_services.png';
import milestoneImg from '../assets/milestone_banner.png';

export const PRODUCTS = [
  {
    id: 1,
    title: "Forest Ave.",
    slug: "forest-ave",
    category: "Founder's",
    collection: "Founder's Collection",
    price: 38.00,
    comparePrice: 48.00,
    rating: 5.0,
    reviewCount: 42,
    image: foundersImg,
    hoverImage: wellnessImg,
    images: [foundersImg, wellnessImg, boutiqueImg, milestoneImg],
    isBestseller: true,
    tag: "Best Seller",
    scentFamily: "Woody",
    burnTime: "60-70 Hours",
    waxType: "100% Pure Organic Soy Wax",
    wick: "Lead-Free Braided Cotton Wick",
    netWeight: "11 oz / 312g",
    vessel: "Hand-Blown Matte Amber Glass with Heavy Base",
    tagline: "A walk through sun-dappled coastal redwoods and pine.",
    description: "Step into a lush woodland sanctuary with notes of aged cedarwood, damp pine needles, and a whisper of wild eucalyptus. Poured with intention in small batches, Forest Ave. is our signature tribute to the tranquil, grounding majesty of nature.",
    scentPyramid: {
      top: ["Wild Eucalyptus", "Crushed Pine Needles", "Bergamot Zest"],
      heart: ["Coastal Cedarwood", "Smoked Vetiver", "Juniper Berry"],
      base: ["Amber Resin", "Golden Patchouli", "Oakmoss"]
    },
    specs: {
      intensity: "Medium-Strong",
      mood: "Grounding, Meditative, Calming",
      roomPlacement: "Living Room, Study, Bedroom"
    },
    reviews: [
      { id: 101, author: "Victoria M.", rating: 5, date: "3 days ago", verified: true, title: "The most authentic forest scent ever created", comment: "I am extremely picky about candles, but Forest Ave. is sheer perfection. No synthetic headache—just pure, grounding botanical luxury. It burns so evenly!" },
      { id: 102, author: "Harrison K.", rating: 5, date: "1 week ago", verified: true, title: "Sophisticated and long lasting", comment: "The hot throw fills my entire two-story loft within twenty minutes. The matte amber vessel looks gorgeous on my marble coffee table." },
      { id: 103, author: "Elena S.", rating: 5, date: "2 weeks ago", verified: true, title: "A true staple in our home", comment: "Bought this after smelling it at the Laguna boutique. We always have a backup on hand now." }
    ]
  },
  {
    id: 2,
    title: "Perloat",
    slug: "perloat",
    category: "Wellness",
    collection: "Wellness Collection",
    price: 34.00,
    comparePrice: null,
    rating: 4.8,
    reviewCount: 38,
    image: wellnessImg,
    hoverImage: boutiqueImg,
    images: [wellnessImg, boutiqueImg, foundersImg],
    isBestseller: true,
    tag: "Wellness Pick",
    scentFamily: "Floral & Fresh",
    burnTime: "55-65 Hours",
    waxType: "100% Pure Organic Soy Wax",
    wick: "Pure Cotton Double Wick",
    netWeight: "10 oz / 283g",
    vessel: "Bisque Ceramic Vessel with Cork Lid",
    tagline: "Serene French lavender infused with creamy coconut milk.",
    description: "A calming sanctuary in a vessel. Perloat weaves together authentic French lavender buds, soothing chamomile flowers, and warm coconut milk to guide your mind into deep restorative tranquility.",
    scentPyramid: {
      top: ["French Lavender Blossom", "White Chamomile", "Lemon Balm"],
      heart: ["Coconut Milk", "Clary Sage", "Sweet Vanilla Orchid"],
      base: ["White Amber", "Cashmere Musk", "Sandalwood"]
    },
    specs: {
      intensity: "Medium",
      mood: "Restorative, Sleep-Inducing, Serene",
      roomPlacement: "Master Bedroom, Bath, Reading Nook"
    },
    reviews: [
      { id: 104, author: "Camille D.", rating: 5, date: "5 days ago", verified: true, title: "My nightly wind-down essential", comment: "Lighting Perloat is my favorite evening ritual. The lavender is so soft and natural, balanced by the gentle coconut cream." }
    ]
  },
  {
    id: 3,
    title: "Heritage",
    slug: "heritage",
    category: "Luxury",
    collection: "Founder's Collection",
    price: 42.00,
    comparePrice: 50.00,
    rating: 4.9,
    reviewCount: 51,
    image: boutiqueImg,
    hoverImage: milestoneImg,
    images: [boutiqueImg, milestoneImg, foundersImg],
    isBestseller: true,
    tag: "Artisan Select",
    scentFamily: "Amber & Warm",
    burnTime: "70-80 Hours",
    waxType: "100% Pure Organic Soy Wax",
    wick: "Custom Wooden Crackling Wick",
    netWeight: "12 oz / 340g",
    vessel: "Smoked Glass Jar with Brass Engraved Lid",
    tagline: "Spiced amber, toasted Madagascar vanilla, and aged pipe tobacco.",
    description: "Honoring 22 years of candle mastery, Heritage is a bold and comforting composition of rare amber resin, smoky bourbon vanilla, and cured tobacco leaves. A rich statement piece for any curated home.",
    scentPyramid: {
      top: ["Bourbon Spiced Rum", "Cardamom Pod", "Orange Peel"],
      heart: ["Aged Tobacco Leaf", "Toasted Vanilla Bean", "Clove Bud"],
      base: ["Precious Amber", "Leather Accord", "Warm Cedar"]
    },
    specs: {
      intensity: "Strong",
      mood: "Intimate, Opulent, Cozy",
      roomPlacement: "Living Room, Library, Den"
    },
    reviews: [
      { id: 105, author: "Arthur L.", rating: 5, date: "1 week ago", verified: true, title: "Pure luxury in every sense", comment: "The crackling wood wick adds an unbelievable atmosphere. Smells like an upscale members club in London." }
    ]
  },
  {
    id: 4,
    title: "Layne",
    slug: "layne",
    category: "Luxury",
    collection: "Laguna Boutique",
    price: 36.00,
    comparePrice: null,
    rating: 4.7,
    reviewCount: 29,
    image: milestoneImg,
    hoverImage: fallWinterImg,
    images: [milestoneImg, fallWinterImg, wellnessImg],
    isBestseller: false,
    tag: "Coastal Scent",
    scentFamily: "Fresh & Oceanic",
    burnTime: "60 Hours",
    waxType: "100% Pure Organic Soy Wax",
    wick: "Lead-Free Cotton Wick",
    netWeight: "10.5 oz / 298g",
    vessel: "Frosted Sea-Glass Tumbler",
    tagline: "Coastal jasmine blossoms touched by sea salt and morning mist.",
    description: "Inspired by the sunrise over Laguna Beach, Layne pairs blooming night jasmine with crisp Pacific salt air, white tea leaves, and sun-warmed driftwood. Refreshing and deeply uplifting.",
    scentPyramid: {
      top: ["Pacific Sea Salt", "Ozone Mist", "White Tea"],
      heart: ["Night-Blooming Jasmine", "Cyclamen", "Neroli"],
      base: ["Bleached Driftwood", "Clean Musk", "Soft Sandalwood"]
    },
    specs: {
      intensity: "Medium",
      mood: "Refreshing, Joyful, Uplifting",
      roomPlacement: "Entryway, Living Room, Sunroom"
    },
    reviews: [
      { id: 106, author: "Gwen R.", rating: 5, date: "2 weeks ago", verified: true, title: "Reminds me of Pacific Coast Highway", comment: "Clean, breezy, and floral without being sweet. One of my all-time favorites." }
    ]
  },
  {
    id: 5,
    title: "821-A Holiday Reserve",
    slug: "821-a-holiday",
    category: "Heirloom Artisan",
    collection: "Fall / Winter Collection",
    price: 39.00,
    comparePrice: 45.00,
    rating: 5.0,
    reviewCount: 64,
    image: fallWinterImg,
    hoverImage: privateLabelImg,
    images: [fallWinterImg, privateLabelImg, foundersImg],
    isBestseller: true,
    tag: "Seasonal Favorite",
    scentFamily: "Spicy & Gourmand",
    burnTime: "65 Hours",
    waxType: "100% Pure Organic Soy Wax",
    wick: "Organic Cotton Braided Wick",
    netWeight: "11 oz / 312g",
    vessel: "Lustrous Emerald Glazed Ceramic",
    tagline: "Ceylon cinnamon bark, baked Honeycrisp apples, and roasted clove.",
    description: "The ultimate fireside fragrance. 821-A captures the essence of holiday gatherings with notes of crisp apple slices simmering in brown sugar, ground nutmeg, and warm charred hearth embers.",
    scentPyramid: {
      top: ["Honeycrisp Apple", "Cider Zest", "Crushed Allspice"],
      heart: ["Ceylon Cinnamon Bark", "Nutmeg", "Toasted Clove"],
      base: ["Roasted Chestnut", "Vanilla Custard", "Smoked Pine"]
    },
    specs: {
      intensity: "Strong",
      mood: "Festive, Warm, Welcoming",
      roomPlacement: "Kitchen, Dining Room, Living Room"
    },
    reviews: [
      { id: 107, author: "Sophia T.", rating: 5, date: "1 month ago", verified: true, title: "Warmest scent ever", comment: "Fills the home with instant holiday joy. The emerald vessel is a work of art on the mantle." }
    ]
  },
  {
    id: 6,
    title: "CSLH Clean Linen",
    slug: "cslh-clean-linen",
    category: "Wellness",
    collection: "Wellness Collection",
    price: 35.00,
    comparePrice: null,
    rating: 4.9,
    reviewCount: 31,
    image: privateLabelImg,
    hoverImage: foundersImg,
    images: [privateLabelImg, foundersImg, wellnessImg],
    isBestseller: false,
    tag: "Pure Clean",
    scentFamily: "Fresh",
    burnTime: "55 Hours",
    waxType: "100% Pure Organic Soy Wax",
    wick: "Lead-Free Cotton Wick",
    netWeight: "10 oz / 283g",
    vessel: "White Satin Frosted Tumbler",
    tagline: "Crisp white linen dried in morning sunlight with sweet freesia.",
    description: "Sun-drenched cotton sheets swaying on a gentle breeze. CSLH delivers crisp linen accords softened by white freesia petals, morning dew, and comforting light musk.",
    scentPyramid: {
      top: ["Morning Breeze Accord", "Italian Bergamot", "Crisp Cotton"],
      heart: ["White Freesia", "Lily of the Valley", "Cotton Flower"],
      base: ["Sheer Amber", "Clean Musk", "Blonde Woods"]
    },
    specs: {
      intensity: "Medium-Light",
      mood: "Crisp, Clarifying, Pure",
      roomPlacement: "Laundry, Guest Room, Bath"
    },
    reviews: [
      { id: 108, author: "Julian B.", rating: 5, date: "3 weeks ago", verified: true, title: "The ultimate fresh candle", comment: "So crisp and never overpowering. Makes the whole house smell freshly cleaned and serene." }
    ]
  },
  {
    id: 7,
    title: "Sandalwood Shores",
    slug: "sandalwood-shores",
    category: "For Him",
    collection: "Founder's Collection",
    price: 40.00,
    comparePrice: null,
    rating: 4.8,
    reviewCount: 45,
    image: foundersImg,
    hoverImage: boutiqueImg,
    images: [foundersImg, boutiqueImg, fallWinterImg],
    isBestseller: false,
    tag: "Signature",
    scentFamily: "Woody & Amber",
    burnTime: "65 Hours",
    waxType: "100% Pure Organic Soy Wax",
    wick: "Braided Cotton Wick",
    netWeight: "11 oz / 312g",
    vessel: "Charcoal Slate Vessel with Wood Lid",
    tagline: "Rich Australian sandalwood, warm cardamom, and golden cedar.",
    description: "An elegant, grounding fragrance balancing creamy Australian sandalwood with aromatic cardamom seed, dark cedar, and a touch of smokey vetiver. Masculine, warm, and distinctly modern.",
    scentPyramid: {
      top: ["Green Cardamom", "Cypress Needle", "Black Pepper"],
      heart: ["Australian Sandalwood", "Virginia Cedar", "Iris Root"],
      base: ["Smoked Vetiver", "Golden Resin", "Dark Musk"]
    },
    specs: {
      intensity: "Medium-Strong",
      mood: "Sophisticated, Grounded, Sensual",
      roomPlacement: "Office, Living Room, Bedroom"
    },
    reviews: [
      { id: 109, author: "Marcus P.", rating: 5, date: "4 weeks ago", verified: true, title: "Incredible depth", comment: "The cardamom and sandalwood balance is flawless. Elegant design too." }
    ]
  },
  {
    id: 8,
    title: "Laguna Breeze",
    slug: "laguna-breeze",
    category: "Luxury",
    collection: "Laguna Boutique",
    price: 38.00,
    comparePrice: null,
    rating: 5.0,
    reviewCount: 58,
    image: boutiqueImg,
    hoverImage: wellnessImg,
    images: [boutiqueImg, wellnessImg, milestoneImg],
    isBestseller: true,
    tag: "Best Seller",
    scentFamily: "Citrus & Oceanic",
    burnTime: "65 Hours",
    waxType: "100% Pure Organic Soy Wax",
    wick: "Lead-Free Cotton Wick",
    netWeight: "11 oz / 312g",
    vessel: "Polished Gold Rimmed Glass Vessel",
    tagline: "Coastal sea spray, sun-bleached driftwood, and wild citrus sage.",
    description: "The essence of our coastal home. Laguna Breeze captures the vibrant scent of Pacific tides crashing against sun-warmed rocks, blended with wild coastal sage and vibrant California citrus.",
    scentPyramid: {
      top: ["California Blood Orange", "Ocean Mist", "Crushed Sage"],
      heart: ["Sea Fennel", "Wild Rosemary", "Coastal Violet"],
      base: ["Weathered Driftwood", "Ambergris", "White Cedar"]
    },
    specs: {
      intensity: "Medium-Strong",
      mood: "Invigorating, Sunny, Free-Spirited",
      roomPlacement: "Living Room, Kitchen, Entryway"
    },
    reviews: [
      { id: 110, author: "Chloe H.", rating: 5, date: "1 month ago", verified: true, title: "Our signature home scent", comment: "Every guest who walks in asks what candle is burning. So vibrant and clean!" }
    ]
  },
  {
    id: 9,
    title: "Heirloom Tomato & Basil",
    slug: "heirloom-tomato-basil",
    category: "Heirloom Tomato",
    collection: "Heirloom Artisan",
    price: 44.00,
    comparePrice: null,
    rating: 4.9,
    reviewCount: 27,
    image: wellnessImg,
    hoverImage: boutiqueImg,
    images: [wellnessImg, boutiqueImg],
    isBestseller: false,
    tag: "Artisan Reserve",
    scentFamily: "Fresh & Green",
    burnTime: "70 Hours",
    waxType: "100% Pure Organic Soy Wax",
    wick: "Double Cotton Wick",
    netWeight: "12 oz / 340g",
    vessel: "Handmade Terracotta Vessel",
    tagline: "Sun-ripened green tomato vines, crushed Genovese basil, and moss.",
    description: "An evocative greenhouse escape. Crisp green tomato leaves freshly plucked from the vine, crushed Genovese basil, moist garden soil, and a splash of Meyer lemon.",
    scentPyramid: {
      top: ["Green Tomato Vine", "Meyer Lemon Zest", "Petitgrain"],
      heart: ["Genovese Sweet Basil", "Tarragon", "Garden Mint"],
      base: ["Damp Earth Accord", "Oakmoss", "Sheer Musk"]
    },
    specs: {
      intensity: "Medium",
      mood: "Botanical, Fresh, Culinary",
      roomPlacement: "Kitchen, Dining, Greenhouse"
    },
    reviews: [
      { id: 111, author: "Nadia F.", rating: 5, date: "2 weeks ago", verified: true, title: "Like a summer garden in Provence", comment: "Remarkably authentic green tomato scent. Extremely refreshing!" }
    ]
  },
  {
    id: 10,
    title: "Murano Glass Amber & Rose",
    slug: "murano-glass-amber-rose",
    category: "Heirloom Murano Glass",
    collection: "Luxury",
    price: 68.00,
    comparePrice: 85.00,
    rating: 5.0,
    reviewCount: 22,
    image: boutiqueImg,
    hoverImage: foundersImg,
    images: [boutiqueImg, foundersImg],
    isBestseller: false,
    tag: "Limited Collector",
    scentFamily: "Floral & Amber",
    burnTime: "85 Hours",
    waxType: "100% Pure Organic Soy Wax",
    wick: "Triple Cotton Wick",
    netWeight: "16 oz / 454g",
    vessel: "Hand-Blown Venetian Murano Glass Vessel",
    tagline: "Damascena rose petals, warm golden amber, and oud wood.",
    description: "An opulent collector's piece poured in an authentic hand-blown Venetian-style Murano glass bowl. Fragranced with velvety Damascena rose, liquid amber, and rare royal oud.",
    scentPyramid: {
      top: ["Damascena Rose", "Pink Peppercorn", "Bergamot"],
      heart: ["Moroccan Rose Absolute", "Smoked Oud", "Orris"],
      base: ["Golden Amber", "Labdanum", "Patchouli Leaf"]
    },
    specs: {
      intensity: "Strong",
      mood: "Regal, Dramatic, Romantic",
      roomPlacement: "Foyer, Dining Table, Master Suite"
    },
    reviews: [
      { id: 112, author: "Isabella V.", rating: 5, date: "3 weeks ago", verified: true, title: "A true heirloom centerpiece", comment: "The glass vessel alone is worth every dollar. The scent is pure royalty." }
    ]
  },
  {
    id: 11,
    title: "Discovery Scent Flight (Set of 4)",
    slug: "discovery-scent-flight-4",
    category: "Samples",
    collection: "Discovery Samplers",
    price: 28.00,
    comparePrice: 36.00,
    rating: 4.9,
    reviewCount: 88,
    image: wellnessImg,
    hoverImage: milestoneImg,
    images: [wellnessImg, milestoneImg],
    isBestseller: true,
    tag: "Includes $20 Credit",
    scentFamily: "Assorted",
    burnTime: "15 Hours per tin (60 hrs total)",
    waxType: "100% Pure Organic Soy Wax",
    wick: "Lead-Free Cotton Wicks",
    netWeight: "4 x 2 oz / 56g",
    vessel: "Golden Travel Tins in Embossed Linen Gift Box",
    tagline: "Sample our signature scents and receive $20 towards your full size candle.",
    description: "Discover your signature home scent with our customizable discovery flight. Includes 4 hand-poured travel tins in an embossed keepsake box, plus a voucher code for $20 off your next full-size candle.",
    scentPyramid: {
      top: ["Forest Ave.", "Perloat Lavender", "Heritage Amber"],
      heart: ["Laguna Breeze", "Layne Jasmine", "Clean Linen"],
      base: ["Customizable Selection"]
    },
    specs: {
      intensity: "Medium",
      mood: "Experiential, Curated, Giftable",
      roomPlacement: "Travel, Desk, Gift"
    },
    reviews: [
      { id: 113, author: "Lauren C.", rating: 5, date: "4 days ago", verified: true, title: "Best way to find your favorite", comment: "Loved all 4 scents! Used my $20 coupon immediately on a full-size Forest Ave." }
    ]
  },
  {
    id: 12,
    title: "Artisan Brass Candle Care Kit",
    slug: "artisan-candle-care-kit",
    category: "Accessories",
    collection: "Boutique Accessories",
    price: 32.00,
    comparePrice: 40.00,
    rating: 4.9,
    reviewCount: 35,
    image: boutiqueImg,
    hoverImage: foundersImg,
    images: [boutiqueImg, foundersImg],
    isBestseller: false,
    tag: "Essential Care",
    scentFamily: "Accessory",
    burnTime: "Lifetime Durability",
    waxType: "Solid Brushed Brass",
    wick: "N/A",
    netWeight: "Kit (3 Pieces)",
    vessel: "Heavyweight Cast Brass with Velvet Pouch",
    tagline: "Precision wick trimmer, bell snuffer, and wick dipper in antique brass.",
    description: "Extend the life and clean burn of your candles with our handcrafted 3-piece solid brass care set. Regular trimming ensures a smokeless flame and maximum burn efficiency.",
    scentPyramid: {
      top: ["Wick Trimmer", "Bell Snuffer", "Wick Dipper"],
      heart: ["Brushed Antique Brass Finish"],
      base: ["Custom Linen Travel Bag"]
    },
    specs: {
      intensity: "N/A",
      mood: "Refined, Elegant, Functional",
      roomPlacement: "Candle Care Tray"
    },
    reviews: [
      { id: 114, author: "Daniel W.", rating: 5, date: "1 week ago", verified: true, title: "Stunning quality", comment: "Heavy, solid brass that feels great in hand. Trims wicks cleanly every time." }
    ]
  }
];

export const CATEGORIES = [
  "All Candles",
  "Founder's",
  "Luxury",
  "For Him",
  "Wellness",
  "Heirloom Artisan",
  "Heirloom Murano Glass",
  "Heirloom Tomato",
  "Samples",
  "Accessories"
];

export const SCENT_FAMILIES = [
  "All Scents",
  "Woody",
  "Floral & Fresh",
  "Amber & Warm",
  "Fresh & Oceanic",
  "Spicy & Gourmand",
  "Citrus & Oceanic",
  "Fresh & Green"
];
