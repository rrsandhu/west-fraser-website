import type { Project } from "@/lib/types";

// ─────────────────────────────────────────────────────────────────────────────
// HOW TO ADD OR EDIT A PROJECT
// ─────────────────────────────────────────────────────────────────────────────
//
// Each project is one object in the array below. Copy the template at the
// bottom of this file and fill in the fields.
//
// PHOTOS
//   • Save photos to:  wesgroup-clone/public/projects/<project-id>/
//     e.g.  public/projects/radley/hero.jpg
//           public/projects/radley/photo-1.jpg
//           public/projects/radley/photo-2.jpg
//
//   • Reference them in code as:  "/projects/radley/hero.jpg"
//
//   • img     → the card thumbnail shown in the listings grid
//   • gallery → array of 3 photos shown on the project detail page
//               (first photo spans 2 columns, so use the best shot first)
//
// FIELDS
//   id           → URL slug  e.g. "radley" → /residential/radley
//   name         → Display name
//   location     → City, Province  e.g. "Surrey, BC"
//   neighbourhood→ District/area name  e.g. "Surrey City Centre"
//   type         → "Condominiums" | "Townhomes" | "Condominiums + Townhomes"
//   units        → Short string  e.g. "193 Suites" | "Residential Tower"
//   year         → Completion year as string  e.g. "2023"
//   priceFrom    → "Register Now" | "Coming Soon" | "Sold Out" | "$499,000+"
//   status       → "NOW SELLING" | "COMING SOON" | "COMPLETE"
//   statusColor  → Tailwind bg class:
//                    NOW SELLING  → "bg-red-600"
//                    COMING SOON  → "bg-blue-700"
//                    COMPLETE     → "bg-green-700"
//   description  → 1-2 sentence summary shown on the listings card
//   overview     → 3-5 sentence paragraph shown on the project detail page
//   features     → Bullet list of highlights (8-10 items)
//   address      → Street address or neighbourhood + city
// ─────────────────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  // ── MUSE ──────────────────────────────────────────────────────────────────
  {
    id: "muse",
    name: "Muse",
    location: "Surrey, BC",
    neighbourhood: "Guildford",
    type: "Condominiums",
    units: "108 Suites",
    year: "Coming Soon",
    priceFrom: "Register Now",
    status: "PRESALE SOON",
    statusColor: "bg-blue-700",
    address: "10277 150 Street, Surrey, BC",
    externalUrl: "https://theportraitcollection.ca/",

    img: "/Muse/photo-1.jpg",

    description:
      "108 condominium suites at 10277 150 Street in Surrey, offering modern living in a well-connected neighbourhood close to transit and amenities.",

    overview:
      "Muse is an upcoming West Fraser Developments presale condominium community at 10277 150 Street in Surrey's Guildford neighbourhood. The building will offer 108 thoughtfully designed suites with contemporary finishes, functional layouts, and convenient access to shopping, schools, transit, and the natural spaces that make Surrey a desirable place to call home.",

    features: [
      "108 condominium suites",
      "Contemporary finishes throughout",
      "Modern kitchen packages",
      "In-suite laundry",
      "Secure underground parking",
      "Close to Guildford Town Centre",
      "Easy access to transit",
      "Established Surrey neighbourhood",
    ],

    gallery: [
      "/Muse/photo-1.jpg",
      "/Muse/photo-2.jpg",
      "/Muse/photo-3.jpg",
    ],
  },

  // ── THE GROVE ─────────────────────────────────────────────────────────────
  {
    id: "the-grove",
    name: "The Grove",
    location: "Surrey, BC",
    neighbourhood: "Guildford",
    type: "Condominiums",
    units: "133 Suites",
    year: "Coming Soon",
    priceFrom: "Contact Us",
    status: "COMING SOON",
    statusColor: "bg-blue-700",
    address: "15622 104 Avenue, Surrey, BC",

    img: "/The%20Grove/photo-1.jpg",

    description:
      "133 condominium suites with 28,000 sq ft of ground-floor commercial space at 15622 104 Avenue in Surrey — a vibrant mixed-use rental community.",

    overview:
      "The Grove is an upcoming mixed-use rental development by West Fraser Developments located at 15622 104 Avenue in Surrey. The building will feature 133 rental suites above 28,000 square feet of ground-floor commercial space, creating a dynamic live-work-shop community in a well-established Surrey neighbourhood. Residents will enjoy modern finishes, thoughtful layouts, and convenient access to transit, parks, and the surrounding amenities of the Guildford area.",

    features: [
      "133 rental suites",
      "28,000 sq ft of ground-floor commercial",
      "Mixed-use live-work-shop community",
      "Modern interior finishes",
      "In-suite laundry",
      "Secure underground parking",
      "Close to transit and shopping",
      "Established Surrey neighbourhood",
    ],

    gallery: [
      "/The%20Grove/photo-1.jpg",
      "/The%20Grove/photo-2.jpg",
      "/The%20Grove/photo-3.jpg",
    ],
  },

  // ── 820 DOGWOOD ───────────────────────────────────────────────────────────
  {
    id: "820-dogwood",
    name: "820 Dogwood",
    location: "Coquitlam, BC",
    neighbourhood: "Burquitlam",
    type: "Condominiums",
    units: "202 Suites",
    year: "Coming Soon",
    priceFrom: "Contact Us",
    status: "UNDER CONSTRUCTION",
    statusColor: "bg-amber-600",
    address: "820 Dogwood Street, Coquitlam, BC",

    img: "/820%20Dogwood/photo-1.png",

    description:
      "A future 202-suite rental building in Coquitlam's Burquitlam neighbourhood — steps from the Burquitlam SkyTrain station.",

    overview:
      "820 Dogwood is an upcoming West Fraser Developments rental community currently under construction in Coquitlam's Burquitlam neighbourhood. The building will offer 202 thoughtfully designed rental suites steps from the Burquitlam SkyTrain station, providing excellent connectivity to downtown Vancouver and the rest of Metro Vancouver. Residents will benefit from modern finishes, functional layouts, and a vibrant, rapidly growing neighbourhood close to parks, shops, and everyday amenities.",

    features: [
      "202 rental suites",
      "Steps from Burquitlam SkyTrain Station",
      "Modern finishes throughout",
      "In-suite laundry",
      "Secure underground parking",
      "Close to shopping and dining",
      "Rapidly growing Burquitlam neighbourhood",
      "Easy access to downtown Vancouver",
    ],

    gallery: [
      "/820%20Dogwood/photo-1.png",
      "/820%20Dogwood/photo-2.png",
    ],
  },

  // ── SURREY CITY CENTRE ────────────────────────────────────────────────────
  {
    id: "surrey-city-centre",
    name: "Surrey City Centre",
    location: "Surrey, BC",
    neighbourhood: "Surrey City Centre",
    type: "Condominiums",
    units: "115 Suites",
    year: "2022",
    priceFrom: "Register Now",
    status: "UNDER CONSTRUCTION",
    statusColor: "bg-amber-600",
    address: "Surrey City Centre, Surrey, BC",

    img: "/Surrey%20City%20Centre/photo-1.jpeg",

    description:
      "An upscale residential development of 115 suites in the heart of Surrey City Centre — featuring two separate buildings, north and south, with over 200,000 sq ft of residential space.",

    overview:
      "Surrey City Centre is an upscale West Fraser Developments residential community currently under construction in the heart of Surrey. The project spans over 200,000 square feet across two separate buildings — north and south — offering 115 suites in one of Metro Vancouver's most dynamic urban centres. Located steps from restaurants, shopping, and entertainment, residents will enjoy the best of Surrey City Centre living with quick access to SkyTrain and the surrounding amenities.",

    features: [
      "115 residential suites",
      "Two buildings — north and south",
      "Over 200,000 sq ft of residential space",
      "Upscale finishes throughout",
      "Heart of Surrey City Centre",
      "Steps to restaurants, shopping, and entertainment",
      "Quick SkyTrain access",
      "Secure underground parking",
    ],

    gallery: [
      "/Surrey%20City%20Centre/photo-1.jpeg",
      "/Surrey%20City%20Centre/photo-2.jpeg",
    ],
  },

  // ── RADLEY ────────────────────────────────────────────────────────────────
  {
    id: "radley",
    name: "Radley",
    location: "Surrey, BC",
    neighbourhood: "Surrey City Centre",
    type: "Condominiums",
    units: "193 Suites",
    year: "2023",
    priceFrom: "Sold Out",
    status: "COMPLETE",
    statusColor: "bg-red-600",
    address: "Surrey City Centre, Surrey, BC",

    // Card thumbnail (shown in listings grid)
    img: "/radley/photo-1.jpeg",

    // Short description (shown on listing card)
    description:
      "193 beautifully designed condominium suites at the heart of Surrey City Centre, surrounded by malls, restaurants, libraries, schools, universities, and transit.",

    // Full description (shown on project detail page)
    overview:
      "Radley is West Fraser Developments' newest condominium community, rising in the heart of Surrey City Centre — one of Metro Vancouver's fastest-growing urban centres. With 193 thoughtfully designed suites ranging from studios to three-bedrooms, Radley offers an unmatched combination of contemporary design, premium finishes, and walkable urban living. Residents enjoy direct access to King George SkyTrain, SFU Surrey, Central City Mall, and an ever-expanding restaurant and retail scene. Whether you're a first-time buyer, downsizer, or investor, Radley represents the next chapter of life in Surrey.",

    // Bullet points (shown on project detail page)
    features: [
      "193 condominium suites",
      "Studio, 1-, 2-, and 3-bedroom layouts",
      "Steps to King George SkyTrain Station",
      "Walking distance to SFU Surrey, restaurants, and retail",
      "Premium appliance packages and quartz countertops",
      "Rooftop amenity deck with views",
      "Secure underground parking",
      "EV charging rough-in",
      "In-suite laundry in all homes",
    ],

    // Gallery photos — 3 images, first one is the hero (spans 2 cols)
    gallery: [
      "/radley/photo-1.jpeg",
      "/radley/photo-2.jpeg",
      "/radley/photo-3.jpeg",
    ],
  },

  // ── EVERETT ───────────────────────────────────────────────────────────────
  {
    id: "everett",
    name: "Everett",
    location: "Surrey, BC",
    neighbourhood: "Whalley",
    type: "Condominiums",
    units: "Residential Tower",
    year: "2023",
    priceFrom: "Contact Us",
    status: "COMPLETE",
    statusColor: "bg-green-700",
    address: "13070 – 115th Avenue, Surrey, BC",

    img: "/Everett/photo-1.jpg",

    description:
      "A striking modern tower in Surrey offering open-concept living with premium finishes. Located at 13070–115th Avenue, Surrey, BC.",

    overview:
      "Everett is a striking modern residential tower in the heart of Surrey's Whalley neighbourhood, delivering open-concept suites with premium finishes across a full high-rise building. Each home features 9-foot ceilings, engineered hardwood flooring, and a designer kitchen package, with layouts thoughtfully configured for both everyday living and entertaining. Located at 13070–115th Avenue, residents are steps from shopping, dining, transit, and green space — everything a connected urban lifestyle demands.",

    features: [
      "Modern high-rise residential tower",
      "Open-concept floor plans",
      "9-foot ceilings throughout",
      "Engineered hardwood floors",
      "Designer kitchen with premium appliances",
      "In-suite laundry",
      "Secure underground parking",
      "Amenity lounge and fitness centre",
      "Steps to public transit and shopping",
    ],

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
    type: "Condominiums",
    units: "5-Storey Residential",
    year: "2025",
    priceFrom: "Contact Us",
    status: "COMPLETE",
    statusColor: "bg-green-700",
    address: "Downtown Mission, Mission, BC",

    img: "/million%20village/photo-1.jpeg",

    description:
      "A 5-storey residential building in the centre of Mission featuring modern yet familiar comfort design — built for the community to enjoy.",

    overview:
      "Mission Village is West Fraser Developments' newest project in the Fraser Valley, bringing modern, community-focused residential living to the heart of downtown Mission. The five-storey building offers a range of suites designed with everyday livability in mind — warm material palettes, functional layouts, and modern comfort throughout. Situated steps from Mission City's vibrant downtown core, residents are close to local shops, restaurants, the West Coast Express, and the natural beauty of the surrounding region.",

    features: [
      "5-storey residential building",
      "Studios, 1-bedroom, and 2-bedroom suites",
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

  // ── AGNES ─────────────────────────────────────────────────────────────────
  {
    id: "agnes",
    name: "Agnes",
    location: "New Westminster, BC",
    neighbourhood: "Downtown New Westminster",
    type: "Condominiums + Townhomes",
    units: "200 Homes",
    year: "2017",
    priceFrom: "Sold Out",
    status: "COMPLETE",
    statusColor: "bg-green-700",
    address: "Downtown New Westminster, BC",

    img: "/Agnes/photo-1.jpg",

    description:
      "Two residential buildings comprising 200 condo suites and townhomes with 1-, 2-, and 3-bedroom configurations, equipped with modern appliances and finishes.",

    overview:
      "Agnes is a landmark two-building residential development in the heart of Downtown New Westminster, comprising 200 condominium suites and townhomes across a range of 1-, 2-, and 3-bedroom configurations. The project set a new standard for urban living in New Westminster, offering premium finishes, expansive views, and direct access to the Columbia SkyTrain station. Ground-floor retail animates the streetscape while residents enjoy a full suite of amenities within the building.",

    features: [
      "Two residential buildings",
      "200 condominiums and townhomes",
      "1-, 2-, and 3-bedroom configurations",
      "Modern appliances and premium finishes",
      "Ground-floor retail",
      "Direct SkyTrain access (Columbia Station)",
      "Rooftop terrace and amenity spaces",
      "Secure underground parking",
    ],

    gallery: [
      "/Agnes/photo-1.jpg",
      "/Agnes/photo-2.jpg",
      "/Agnes/photo-3.jpg",
    ],
  },

  // ── SIGNATURE SQUARE ──────────────────────────────────────────────────────
  {
    id: "signature-square",
    name: "Signature Square",
    location: "New Westminster, BC",
    neighbourhood: "Sapperton",
    type: "Condominiums",
    units: "26 Suites",
    year: "2013",
    priceFrom: "Contact Us",
    status: "COMPLETE",
    statusColor: "bg-green-700",
    address: "Sapperton, New Westminster, BC",

    img: "/315%20Ward/photo-1.jpg",

    description:
      "A four-storey boutique condominium in the historic Sapperton neighbourhood of New Westminster with 26 two-bedroom suites and high-end finishings.",

    overview:
      "Signature Square is a refined boutique condominium nestled in Sapperton — one of New Westminster's most charming and historically rich neighbourhoods. The four-storey building offers 26 generously sized two-bedroom suites finished to a high standard, with quality millwork, stone countertops, and stainless steel appliances. Residents enjoy a quiet, residential setting within walking distance of the Sapperton SkyTrain station, Royal Columbian Hospital, and local shops and restaurants.",

    features: [
      "26 two-bedroom condominium suites",
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

  // ── RHODES ON 41ST ────────────────────────────────────────────────────────
  {
    id: "rhodes",
    name: "Rhodes On 41st",
    location: "Vancouver, BC",
    neighbourhood: "Oakridge",
    type: "Condominiums",
    units: "41 Suites",
    year: "2014",
    priceFrom: "Contact Us",
    status: "COMPLETE",
    statusColor: "bg-green-700",
    address: "Oakridge, Vancouver, BC",

    img: "/Rhodes%20on%2041st/photo-1.jpg",

    description:
      "A five-storey boutique condominium with 41 one- and two-bedroom suites featuring functional layouts, large balconies, and designer fixtures in the heart of Oakridge.",

    overview:
      "Rhodes On 41st is a boutique residential building in Vancouver's prestigious Oakridge neighbourhood — a tree-lined, walkable community undergoing rapid revitalization. The five-storey building offers 41 one- and two-bedroom suites, each featuring open-concept layouts, large balconies, designer light fixtures, and premium finishes. Situated steps from Oakridge Centre, Canada Line SkyTrain, top-rated schools, and some of Vancouver's best restaurants, Rhodes remains one of West Fraser's most coveted completed projects.",

    features: [
      "41 condominium suites",
      "One- and two-bedroom configurations",
      "Functional open-concept layouts",
      "Large private balconies",
      "Designer fixtures and finishes",
      "Five-storey boutique building",
      "Steps to Canada Line (41st Ave Station)",
      "Walking distance to Oakridge Centre",
    ],

    gallery: [
      "/Rhodes%20on%2041st/photo-1.jpg",
      "/Rhodes%20on%2041st/photo-2.jpg",
      "/Rhodes%20on%2041st/photo-3.jpg",
    ],
  },

  // ── ELIZABETH MANOR ───────────────────────────────────────────────────────
  {
    id: "elizabeth-manor",
    name: "Elizabeth Manor",
    location: "Surrey, BC",
    neighbourhood: "Surrey",
    type: "Condominiums",
    units: "Residential",
    year: "2010",
    priceFrom: "Contact Us",
    status: "COMPLETE",
    statusColor: "bg-green-700",
    address: "Surrey, BC",

    img: "/Elizabeth%20Manor/photo-1.jpg",

    description:
      "A residential condominium community by West Fraser Developments offering quality suites in a well-established Surrey neighbourhood.",

    overview:
      "Elizabeth Manor is a residential development by West Fraser Developments, offering well-appointed condominium suites in a quiet, established Surrey neighbourhood. The building reflects West Fraser's commitment to quality construction and community-oriented design.",

    features: [
      "Quality residential suites",
      "West Fraser Developments",
      "Established Surrey neighbourhood",
      "Secure parking",
      "In-suite laundry",
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
    type: "Condominiums",
    units: "Residential",
    year: "2010",
    priceFrom: "Contact Us",
    status: "COMPLETE",
    statusColor: "bg-green-700",
    address: "Surrey, BC",

    img: "/Ashira%20Court/photo-1.jpg",

    description:
      "A residential condominium community by West Fraser Developments offering quality suites in Surrey.",

    overview:
      "Ashira Court is a residential development by West Fraser Developments, providing quality condominium living in Surrey. The building offers thoughtfully designed suites in a convenient location close to schools, shopping, and transit.",

    features: [
      "Quality residential suites",
      "West Fraser Developments",
      "Convenient Surrey location",
      "Secure parking",
      "In-suite laundry",
    ],

    gallery: [
      "/Ashira%20Court/photo-1.jpg",
      "/Ashira%20Court/photo-2.jpg",
    ],
  },

  // ── AURA 3 ────────────────────────────────────────────────────────────────
  {
    id: "aura-3",
    name: "Aura 3",
    location: "Surrey, BC",
    neighbourhood: "Central City",
    type: "Townhomes",
    units: "76 Townhomes",
    year: "2008",
    priceFrom: "Sold Out",
    status: "COMPLETE",
    statusColor: "bg-green-700",
    address: "Central City, Surrey, BC",

    img: "https://westfraserdev.ca/wp-content/uploads/2019/04/aura-3-townhomes.jpg",

    description:
      "76 townhomes in the popular Central City neighbourhood of downtown Surrey. Spacious living with contemporary styling — the perfect balance of luxury and affordability.",

    overview:
      "Aura 3 is the townhome component of West Fraser's acclaimed Aura master-planned community in Surrey's Central City neighbourhood. 76 spacious townhomes were designed with families and upsizers in mind, offering multi-level layouts, private outdoor spaces, and the feel of a detached home with the convenience of a managed community. Located adjacent to Central City Shopping Centre, SFU Surrey, and the King George SkyTrain station, Aura 3 combines suburban space with true urban accessibility.",

    features: [
      "76 townhome residences",
      "Multi-level open-concept layouts",
      "Private patios and yards",
      "Double garages in select homes",
      "Contemporary exterior and interior design",
      "Steps to Central City Shopping Centre",
      "Adjacent to SFU Surrey Campus",
      "Managed community with landscaping",
    ],

    gallery: [
      "https://westfraserdev.ca/wp-content/uploads/2019/04/aura-3-townhomes.jpg",
      "https://westfraserdev.ca/wp-content/uploads/2021/12/surrey_2915-2.jpg",
      "https://westfraserdev.ca/wp-content/uploads/2021/11/Living_dark_001.png",
    ],
  },

  // ── AURA 1 & 2 ────────────────────────────────────────────────────────────
  {
    id: "aura-1-2",
    name: "Aura 1 & 2",
    location: "Surrey, BC",
    neighbourhood: "Central City",
    type: "Condominiums",
    units: "183 Homes",
    year: "2006",
    priceFrom: "Sold Out",
    status: "COMPLETE",
    statusColor: "bg-green-700",
    address: "Central City, Surrey, BC",

    img: "https://westfraserdev.ca/wp-content/uploads/2021/12/surrey_2915-2.jpg",

    description:
      "Two towers of 80 and 103 spectacular condominiums in the Central City area of downtown Surrey, featuring contemporary finishing and gourmet kitchens.",

    overview:
      "Aura 1 & 2 are the twin condominium towers at the heart of West Fraser's Aura master-planned community — a landmark development that helped define Surrey City Centre as one of Metro Vancouver's premier urban destinations. Together the two towers deliver 183 spectacular condominiums with contemporary finishing, gourmet kitchens, and sweeping views across the Fraser Valley. The project set a design benchmark for Surrey upon completion and continues to attract strong demand in the resale market.",

    features: [
      "Two condominium towers (80 + 103 homes)",
      "183 total suites",
      "Gourmet kitchen packages",
      "Contemporary interior finishes",
      "Panoramic views of Surrey and the Fraser Valley",
      "Full amenity package",
      "Secure underground parking",
      "Steps to King George SkyTrain and Central City Mall",
    ],

    gallery: [
      "https://westfraserdev.ca/wp-content/uploads/2021/12/surrey_2915-2.jpg",
      "https://westfraserdev.ca/wp-content/uploads/2019/04/aura-3-townhomes.jpg",
      "https://westfraserdev.ca/wp-content/uploads/2021/11/Living_dark_001.png",
    ],
  },

  // ── CEDAR LANE ────────────────────────────────────────────────────────────
  {
    id: "cedar-lane",
    name: "Cedar Lane",
    location: "Surrey, BC",
    neighbourhood: "North Surrey",
    type: "Townhomes",
    units: "24 Townhomes",
    year: "2007",
    priceFrom: "Sold Out",
    status: "COMPLETE",
    statusColor: "bg-green-700",
    address: "North Surrey, Surrey, BC",

    img: "https://westfraserdev.ca/wp-content/uploads/2019/04/cedar-lane.jpg",

    description:
      "24 spacious townhomes in a quiet, family-oriented community. Three bedrooms, 2.5 baths, in-suite laundry, and contemporary styling throughout.",

    overview:
      "Cedar Lane is a boutique collection of 24 three-bedroom townhomes designed for families seeking space, privacy, and a connected community feel in North Surrey. Each home features a thoughtful three-level layout with 2.5 bathrooms, in-suite laundry, and attached garage. The contemporary design language — clean lines, warm materials, and private outdoor spaces — creates a welcoming streetscape that has stood the test of time.",

    features: [
      "24 three-bedroom townhomes",
      "2.5 bathrooms per home",
      "Three-level open-concept layouts",
      "Attached garages",
      "In-suite laundry",
      "Private fenced yards",
      "Contemporary exterior design",
      "Family-oriented neighbourhood",
    ],

    gallery: [
      "https://westfraserdev.ca/wp-content/uploads/2019/04/cedar-lane.jpg",
      "https://westfraserdev.ca/wp-content/uploads/2019/04/aura-3-townhomes.jpg",
      "https://westfraserdev.ca/wp-content/uploads/2021/11/Living_dark_001.png",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // ADD A NEW PROJECT — copy this template and fill it in:
  // ─────────────────────────────────────────────────────────────────────────
  //
  // {
  //   id: "project-name",               ← kebab-case, becomes the URL
  //   name: "Project Name",
  //   location: "City, BC",
  //   neighbourhood: "Neighbourhood",
  //   type: "Condominiums",             ← or "Townhomes" / "Condominiums + Townhomes"
  //   units: "100 Suites",
  //   year: "2025",
  //   priceFrom: "Register Now",        ← or "Sold Out" / "Coming Soon" / "$499,000+"
  //   status: "NOW SELLING",            ← or "COMPLETE" / "COMING SOON"
  //   statusColor: "bg-red-600",        ← bg-red-600 / bg-green-700 / bg-blue-700
  //   address: "123 Main St, City, BC",
  //
  //   img: "/projects/project-name/hero.jpg",
  //
  //   description: "1-2 sentence summary shown on the listing card.",
  //
  //   overview: "3-5 sentence paragraph shown on the project detail page.",
  //
  //   features: [
  //     "Feature one",
  //     "Feature two",
  //     "Feature three",
  //   ],
  //
  //   gallery: [
  //     "/projects/project-name/photo-1.jpg",   ← hero (spans 2 cols)
  //     "/projects/project-name/photo-2.jpg",
  //     "/projects/project-name/photo-3.jpg",
  //   ],
  // },
  //
  // Then save photos to: public/projects/project-name/
  // ─────────────────────────────────────────────────────────────────────────
];
