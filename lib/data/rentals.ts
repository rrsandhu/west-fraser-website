import type { Rental } from "@/lib/types";

// ─────────────────────────────────────────────────────────────────────────────
// HOW TO ADD OR EDIT A RENTAL PROPERTY
// ─────────────────────────────────────────────────────────────────────────────
//
// Each rental is one object in the array below. Copy the template at the
// bottom of this file and fill in the fields.
//
// PHOTOS
//   • Save photos to:  wesgroup-clone/public/<FolderName>/
//     e.g.  public/Everett/photo-1.jpg
//           public/Everett/photo-2.jpg
//
//   • Reference them in code as:  "/Everett/photo-1.jpg"
//     (use %20 for spaces:  "/Mission%20Village/photo-1.jpg")
//
//   • img     → the card thumbnail shown in the listings grid
//   • gallery → array of 3 photos (first spans 2 columns — use the best shot first)
//
// FIELDS
//   id           → URL slug (kebab-case)  e.g. "everett"
//   name         → Display name
//   location     → City, Province  e.g. "Surrey, BC"
//   neighbourhood→ District/area name
//   suites       → Suite types offered  e.g. "1 Bed · 2 Bed · 3 Bed"
//   available    → Availability status  e.g. "Now Leasing" | "Coming Soon" | "Units Available"
//   description  → 1-2 sentence summary shown on the listing card
//   overview     → 3-5 sentence paragraph for the detail page
//   features     → Bullet list of highlights
//   address      → Street address or neighbourhood + city
// ─────────────────────────────────────────────────────────────────────────────

export const rentals: Rental[] = [
  // ── SURREY CITY CENTRE ────────────────────────────────────────────────────
  {
    id: "surrey-city-centre",
    name: "Surrey City Centre",
    location: "Surrey, BC",
    neighbourhood: "Surrey City Centre",
    suites: "1 Bed · 2 Bed · 3 Bed",
    available: "Leasing This Summer",
    address: "Surrey City Centre, Surrey, BC",

    img: "/Surrey%20City%20Centre/photo-1.jpeg",

    description:
      "An upscale rental community of 115 suites across two buildings in the heart of Surrey City Centre — steps from SkyTrain, restaurants, and shopping.",

    overview:
      "Surrey City Centre is West Fraser's newest upscale rental community, currently under construction in the heart of Surrey. Spanning over 200,000 square feet across two buildings — north and south — the development offers 115 beautifully appointed suites in one of Metro Vancouver's most dynamic urban centres. Residents will enjoy premium finishes, modern layouts, and unmatched walkability to SkyTrain, dining, entertainment, and the surrounding amenities of Surrey City Centre.",

    features: [
      "115 rental suites across two buildings",
      "1-, 2-, and 3-bedroom configurations",
      "Upscale interior finishes throughout",
      "In-suite laundry",
      "Secure underground parking",
      "Heart of Surrey City Centre",
      "Steps to SkyTrain and shopping",
      "Over 200,000 sq ft of residential space",
    ],

    gallery: [
      "/Surrey%20City%20Centre/photo-1.jpeg",
      "/Surrey%20City%20Centre/photo-2.jpeg",
    ],
  },

  // ── EVERETT ───────────────────────────────────────────────────────────────
  {
    id: "everett",
    name: "Everett",
    location: "Surrey, BC",
    neighbourhood: "Whalley",
    suites: "1 Bed · 2 Bed · 3 Bed",
    available: "Now Leasing",
    address: "13070 115th Avenue, Surrey, BC",

    // Card thumbnail
    img: "/Everett/photo-1.jpg",

    // Short description (listing card)
    description:
      "A striking modern residential tower in Surrey offering open-concept suites with premium finishes. Located at 13070–115th Avenue in the heart of Whalley.",

    // Full description (detail page)
    overview:
      "Everett is a striking modern residential tower in Surrey's Whalley neighbourhood, offering open-concept suites with premium finishes and thoughtful layouts designed for everyday living. Each suite features 9-foot ceilings, engineered hardwood flooring, and a designer kitchen package. Located at 13070–115th Avenue, residents are steps from shopping, dining, transit, and green space — with quick SkyTrain access to downtown Vancouver.",

    features: [
      "Modern high-rise residential tower",
      "1-, 2-, and 3-bedroom suites",
      "Open-concept floor plans with 9-foot ceilings",
      "Engineered hardwood floors",
      "Designer kitchen with premium appliances",
      "In-suite laundry",
      "Secure underground parking",
      "Amenity lounge and fitness centre",
      "Steps to public transit and shopping",
    ],

    // Gallery photos — first image is the hero (spans 2 cols)
    gallery: [
      "/Everett/photo-1.jpg",
      "/Everett/photo-2.jpg",
      "/Everett/photo-3.jpg",
    ],
  },

  // ── MISSION VILLAGE ───────────────────────────────────────────────────────
  {
    id: "mission-village",
    name: "Mission Village",
    location: "Mission, BC",
    neighbourhood: "Downtown Mission",
    suites: "Studios · 1 Bed · 2 Bed",
    available: "Contact Us",
    address: "Downtown Mission, Mission, BC",

    img: "/million%20village/photo-1.jpeg",

    description:
      "A 5-storey residential building in the centre of Mission featuring modern yet familiar comfort design — built for the community to enjoy.",

    overview:
      "Mission Village is West Fraser's newest rental community in the Fraser Valley, bringing modern, community-focused residential living to the heart of downtown Mission. The five-storey building offers studios, one-bedroom, and two-bedroom suites designed with everyday livability in mind — warm material palettes, functional layouts, and modern comfort throughout. Situated steps from Mission City's vibrant downtown core, residents are close to local shops, restaurants, the West Coast Express, and the natural beauty of the surrounding region.",

    features: [
      "5-storey purpose-built rental building",
      "Studio, 1-bedroom, and 2-bedroom suites",
      "Modern interior design with warm finishes",
      "In-suite laundry",
      "Secure entry and parking",
      "Community-oriented neighbourhood",
      "Steps to downtown Mission amenities",
      "Close to West Coast Express",
    ],

    gallery: [
      "/million%20village/photo-1.jpeg",
      "/million%20village/photo-2.jpeg",
      "/million%20village/photo-3.jpeg",
    ],
  },

  // ── RHODES ON 41ST ────────────────────────────────────────────────────────
  {
    id: "rhodes-on-41st",
    name: "Rhodes On 41st",
    location: "Vancouver, BC",
    neighbourhood: "Oakridge",
    suites: "1 Bed · 2 Bed",
    available: "Contact Us",
    address: "Oakridge, Vancouver, BC",

    img: "/Rhodes%20on%2041st/photo-1.jpg",

    description:
      "A five-storey boutique building with 41 one- and two-bedroom suites featuring functional layouts, large balconies, and designer fixtures in the heart of Oakridge.",

    overview:
      "Rhodes On 41st is a boutique rental building in Vancouver's prestigious Oakridge neighbourhood — a tree-lined, walkable community with excellent transit and shopping. The five-storey building offers 41 one- and two-bedroom suites, each featuring open-concept layouts, large private balconies, designer light fixtures, and premium finishes. Situated steps from Oakridge Centre and the Canada Line SkyTrain, Rhodes provides an unbeatable combination of boutique character and urban convenience.",

    features: [
      "41 suites across a boutique five-storey building",
      "1- and 2-bedroom configurations",
      "Open-concept layouts with large private balconies",
      "Designer fixtures and premium finishes",
      "Steps to Canada Line (41st Ave Station)",
      "Walking distance to Oakridge Centre",
      "Top-rated schools nearby",
      "Quiet, tree-lined Oakridge neighbourhood",
    ],

    gallery: [
      "/Rhodes%20on%2041st/photo-1.jpg",
      "/Rhodes%20on%2041st/photo-2.jpg",
      "/Rhodes%20on%2041st/photo-3.jpg",
    ],
  },

  // ── SIGNATURE SQUARE ──────────────────────────────────────────────────────
  {
    id: "signature-square",
    name: "Signature Square",
    location: "New Westminster, BC",
    neighbourhood: "Sapperton",
    suites: "2 Bed",
    available: "Contact Us",
    address: "Sapperton, New Westminster, BC",

    img: "/315%20Ward/photo-1.jpg",

    description:
      "A four-storey boutique building in the historic Sapperton neighbourhood of New Westminster with 26 two-bedroom suites and high-end finishings.",

    overview:
      "Signature Square is a refined boutique rental building nestled in Sapperton — one of New Westminster's most charming and historically rich neighbourhoods. The four-storey building offers 26 generously sized two-bedroom suites finished to a high standard, with quality millwork, stone countertops, and stainless steel appliances. Residents enjoy a quiet, residential setting within walking distance of the Sapperton SkyTrain station, Royal Columbian Hospital, and local shops and restaurants.",

    features: [
      "26 two-bedroom suites",
      "Four-storey boutique building",
      "High-end kitchen and bathroom finishes",
      "Stone countertops and stainless appliances",
      "In-suite laundry",
      "Secure parking",
      "Steps to Sapperton SkyTrain Station",
      "Near Royal Columbian Hospital",
    ],

    gallery: [
      "/315%20Ward/photo-1.jpg",
      "/315%20Ward/photo-2.jpg",
      "/315%20Ward/photo-3.jpg",
    ],
  },

  // ── ELIZABETH MANOR ───────────────────────────────────────────────────────
  {
    id: "elizabeth-manor",
    name: "Elizabeth Manor",
    location: "Surrey, BC",
    neighbourhood: "Surrey",
    suites: "Units Available",
    available: "Contact Us",
    address: "Surrey, BC",

    img: "/Elizabeth%20Manor/photo-1.jpg",

    description:
      "A well-maintained rental building by West Fraser Developments offering quality suites in an established Surrey neighbourhood.",

    overview:
      "Elizabeth Manor is a purpose-built rental community developed by West Fraser Developments, offering comfortable, well-appointed suites in a quiet, established Surrey neighbourhood. Residents benefit from professional property management, secure parking, and convenient access to local amenities, schools, and transit.",

    features: [
      "Quality rental suites",
      "Professional property management",
      "Established Surrey neighbourhood",
      "Secure parking",
      "In-suite laundry",
      "Close to schools and transit",
    ],

    gallery: [
      "/Elizabeth%20Manor/photo-1.jpg",
      "/Elizabeth%20Manor/photo-2.jpg",
    ],
  },

  // ── ASHIRA COURT ──────────────────────────────────────────────────────────
  {
    id: "ashira-court",
    name: "Ashira Court",
    location: "Surrey, BC",
    neighbourhood: "Surrey",
    suites: "Units Available",
    available: "Contact Us",
    address: "Surrey, BC",

    img: "/Ashira%20Court/photo-1.jpg",

    description:
      "A rental community by West Fraser Developments offering quality suites in a convenient Surrey location.",

    overview:
      "Ashira Court is a rental community developed by West Fraser Developments, providing thoughtfully designed suites in a convenient Surrey location. With professional on-site management and easy access to shopping, schools, and public transit, Ashira Court is an ideal home for residents looking for quality rental living in Metro Vancouver.",

    features: [
      "Quality rental suites",
      "Professional property management",
      "Convenient Surrey location",
      "Secure parking",
      "In-suite laundry",
      "Close to shopping and transit",
    ],

    gallery: [
      "/Ashira%20Court/photo-1.jpg",
      "/Ashira%20Court/photo-2.jpg",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // ADD A NEW RENTAL — copy this template and fill it in:
  // ─────────────────────────────────────────────────────────────────────────
  //
  // {
  //   id: "building-name",               ← kebab-case, becomes the URL
  //   name: "Building Name",
  //   location: "City, BC",
  //   neighbourhood: "Neighbourhood",
  //   suites: "1 Bed · 2 Bed",
  //   available: "Now Leasing",          ← "Now Leasing" | "Coming Soon" | "Units Available"
  //   address: "123 Main St, City, BC",
  //
  //   img: "/BuildingName/photo-1.jpg",
  //
  //   description: "1-2 sentence summary shown on the listing card.",
  //
  //   overview: "3-5 sentence paragraph for the detail page.",
  //
  //   features: [
  //     "Feature one",
  //     "Feature two",
  //   ],
  //
  //   gallery: [
  //     "/BuildingName/photo-1.jpg",   ← hero (spans 2 cols)
  //     "/BuildingName/photo-2.jpg",
  //     "/BuildingName/photo-3.jpg",
  //   ],
  // },
  //
  // Save photos to: public/BuildingName/
  // ─────────────────────────────────────────────────────────────────────────
];
