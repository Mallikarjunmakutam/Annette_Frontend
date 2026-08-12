import wellnessImg from '../assets/wellness_collection.png';
import foundersImg from '../assets/founders_collection.png';
import boutiqueImg from '../assets/boutique_collection.png';
import milestoneImg from '../assets/milestone_banner.png';
import brandVideoMock from '../assets/brand_video_mock.png';

export const BLOG_POSTS = [
  {
    id: 1,
    title: "The Art of Scent Layering: Elevating Home Ambiance",
    slug: "art-of-scent-layering",
    date: "August 2026",
    category: "Fragrance Guide",
    readTime: "5 min read",
    author: "Annette Makutam, Founder",
    image: boutiqueImg,
    summary: "How to harmonize woody basenotes with fresh florals across different rooms to create a seamless olfactory sanctuary in your living spaces.",
    content: `
      Scent is the most intimate of senses, capable of altering mood, triggering nostalgic memory, and creating an unmistakable sense of sanctuary. When designing a home, we often focus on visual textures—linen drapery, travertine tables, and warm ambient lighting. Yet, olfactory layering is the unseen architecture of luxury living.

      ### 1. The Living Room: Warm Anchors & Welcoming Notes
      For shared gathering areas, choose fragrances that blend warm amber, cedarwood, or smoky vetiver with bright top notes like bergamot or blood orange. Our *Heritage* and *Forest Ave.* candles offer the perfect balance of warmth without overwhelming conversation.

      ### 2. The Kitchen & Dining: Crisp Herbals & Green Florals
      Avoid heavy gourmands or overly sweet florals near food. Instead, celebrate culinary botanical notes—sun-ripened tomato vine, fresh sweet basil, and citrus peel. Lighting *Heirloom Tomato & Basil* thirty minutes before guests arrive awakens the palate.

      ### 3. The Master Sanctuary: Calming Lavender & Coconut Cream
      Your bedroom and bath should signal to your nervous system that it is time to unwind. Pure French lavender blossoms paired with creamy coconut milk in our *Perloat* candle soothe circadian rhythms and facilitate restorative sleep.
    `
  },
  {
    id: 2,
    title: "Why Pure Soy Wax & Lead-Free Cotton Matter for Indoor Air Quality",
    slug: "clean-soy-wax-air-quality",
    date: "July 2026",
    category: "Clean Living",
    readTime: "6 min read",
    author: "Dr. Clara Evans, Environmental Chemist",
    image: wellnessImg,
    summary: "Understanding the science behind non-toxic candles: the difference between paraffin petroleum wax and sustainably sourced botanical soy.",
    content: `
      Many commercial candles are cast from paraffin wax—a petroleum by-product that releases benzene and toluene compounds into your indoor air when burned. At ANNETTE PURE, we made a strict commitment over two decades ago to pour only 100% natural, certified non-GMO organic soy wax.

      ### The Clean Burn Advantage
      - **Zero Petrochemicals**: Soy wax is derived directly from renewable American soybeans.
      - **Cooler, Longer Burn**: Soy wax melts at a lower temperature, resulting in a burn time that is 40-50% longer than paraffin equivalents.
      - **Lead-Free Cotton Wicks**: We use unbleached, braided cotton wicks that prevent black soot buildup on your walls and ceilings.
      - **Phthalate-Free Fragrance Oils**: Our botanical extracts are certified free from parabens, phthalates, and reproductive toxins.
    `
  },
  {
    id: 3,
    title: "The 4-Inch Rule: Essential Candle Care to Double Burn Time",
    slug: "essential-candle-care-guide",
    date: "June 2026",
    category: "Candle Care",
    readTime: "4 min read",
    author: "Master Chandler Studio",
    image: foundersImg,
    summary: "Simple ritual habits—from the crucial first memory burn to 1/4 inch wick trimming—that prevent tunneling and ensure an even, smokeless burn.",
    content: `
      A luxury candle is an investment in your daily peace. By observing a few mindful habits, you can extend the life of your vessel while enjoying pure, smokeless fragrance.

      ### 1. The Crucial First Burn
      Wax has memory. On the very first lighting, allow your candle to burn for 3 to 4 hours, or until the liquid melt pool reaches all edges of the vessel. This prevents the dreaded 'tunneling' effect where wax remains stuck along the walls.

      ### 2. Trim the Wick to 1/4 Inch
      Before every single burn, snip the charred mushroom head of the cotton wick using a dedicated brass trimmer. A trimmed wick yields a clean, calm flame without soot.

      ### 3. Snuff, Don't Blow
      Blowing out a candle creates smoke that lingers and overpowers delicate fragrance notes. Use a brass snuffer or gently dip the wick into the liquid pool and restraighten it.
    `
  }
];

export const PODCAST_EPISODES = [
  {
    id: 1,
    title: "Episode 18: The Psychology of Scent & Memory Architecture",
    host: "Annette Makutam & Guest Chandler Marcel Dupont",
    duration: "42 min",
    date: "August 2026",
    thumbnail: brandVideoMock,
    audioUrl: "#",
    description: "An intimate exploration into how olfactory receptors trigger deep limbic memory faster than sight or sound, and how bespoke hotels design invisible brand identities."
  },
  {
    id: 2,
    title: "Episode 17: Sustainable Alchemy — From Soybean Fields to Luxury Vessels",
    host: "Annette Makutam & Organic Farm Director Tyler Vance",
    duration: "36 min",
    date: "July 2026",
    thumbnail: milestoneImg,
    audioUrl: "#",
    description: "A behind-the-scenes discussion on zero-waste farming, regenerative agriculture, and creating carbon-neutral candle packaging."
  },
  {
    id: 3,
    title: "Episode 16: Building an Artisan Brand in California for 22 Years",
    host: "Annette Makutam & Design Editor Maya Lin",
    duration: "48 min",
    date: "June 2026",
    thumbnail: foundersImg,
    audioUrl: "#",
    description: "Reflections on 22 years of hand-pouring candles in Laguna Beach, preserving artisan traditions in an era of automated mass production."
  }
];

export const PRESS_FEATURES = [
  {
    outlet: "VOGUE LIVING",
    quote: "Annette Pure captures the subtle, sun-drenched coastal elegance of Southern California with botanical sophistication.",
    year: "2026",
    articleTitle: "Top 10 Sustainable Luxury Home Scents"
  },
  {
    outlet: "ARCHITECTURAL DIGEST",
    quote: "These hand-blown vessels are sculptural masterpieces that elevate any mantle even before they are lit.",
    year: "2026",
    articleTitle: "The Interior Designer's Guide to Home Fragrance"
  },
  {
    outlet: "ELLE DECOR",
    quote: "A masterclass in clean formulation—long-lasting aroma without a single harmful chemical.",
    year: "2025",
    articleTitle: "Clean Luxury: The Brands Changing Home Wellness"
  },
  {
    outlet: "FORBES LUXURY",
    quote: "Annette Pure's bespoke private label program has quietly crafted signature scents for the world's most discerning boutique hotels.",
    year: "2025",
    articleTitle: "The Invisible Art of Olfactory Branding"
  }
];
