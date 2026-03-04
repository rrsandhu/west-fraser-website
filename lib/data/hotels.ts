import type { Hotel } from "@/lib/types";

// ─────────────────────────────────────────────────────────────────────────────
// HOW TO ADD OR EDIT A HOTEL
// ─────────────────────────────────────────────────────────────────────────────
//
// Each hotel is one object in the array below. Copy the template at the
// bottom of this file and fill in the fields.
//
// PHOTOS
//   • Save photos to:  wesgroup-clone/public/projects/hotels/<hotel-id>/
//     e.g.  public/projects/hotels/hyatt-place-kelowna/hero.jpg
//           public/projects/hotels/hyatt-place-kelowna/photo-1.jpg
//
//   • Reference them in code as:  "/projects/hotels/hyatt-place-kelowna/hero.jpg"
//
//   • img     → the card thumbnail shown in the listings grid
//   • gallery → array of 3 photos (first spans 2 columns — use the best shot first)
//
// FIELDS
//   id          → URL slug (kebab-case)
//   name        → Display name  e.g. "Hyatt Place Kelowna"
//   location    → City, Province  e.g. "Kelowna, BC"
//   brand       → Brand name  e.g. "Hyatt Place" | "Best Western Plus" | "Sigma Inn"
//   rooms       → Short descriptor  e.g. "161 Rooms" | "Full-Service Hotel" | "Dual Brand"
//   year        → Year opened as string
//   bookingUrl  → Direct booking URL for the hotel
//   description → 1-2 sentence summary shown on the listing card
//   overview    → 3-5 sentence paragraph for a future detail page
//   features    → Bullet list of highlights
//   address     → Street address or location descriptor
// ─────────────────────────────────────────────────────────────────────────────

export const hotels: Hotel[] = [
  // ── HYATT PLACE KELOWNA ───────────────────────────────────────────────────
  {
    id: "hyatt-place-kelowna",
    name: "Hyatt Place Kelowna",
    location: "Kelowna, BC",
    brand: "Hyatt Place",
    rooms: "161 Rooms",
    year: "2021",
    address: "Kelowna, BC",
    bookingUrl: "https://www.hyatt.com/hyatt-place/en-US/ylwzk-hyatt-place-kelowna",

    // Card thumbnail
    img: "https://westfraserdev.ca/wp-content/uploads/2021/11/GT0Ub6ec.jpeg",

    // Short description (listing card)
    description:
      "161-room Hyatt Place Hotel in the heart of Kelowna, BC, minutes from downtown, shops, and restaurants. Part of the Beverly mixed-use development.",

    // Full description (detail page)
    overview:
      "Hyatt Place Kelowna is a 161-room full-service hotel developed by West Fraser Developments as part of the Beverly mixed-use project in downtown Kelowna. The property brings Hyatt's internationally recognized brand standards to BC's Okanagan — offering modern rooms, flexible meeting space, and a full F&B program. Situated minutes from Kelowna's waterfront, downtown dining, and Kelowna International Airport, the hotel serves both leisure and business travellers visiting one of Canada's fastest-growing regions.",

    features: [
      "161 modern guest rooms",
      "Full-service Hyatt Place brand",
      "Part of the Beverly mixed-use development",
      "Minutes from downtown Kelowna and the waterfront",
      "Flexible meeting and event space",
      "On-site dining and bar",
      "Fitness centre",
      "Close to Kelowna International Airport",
    ],

    // Gallery photos — first image is the hero (spans 2 cols)
    // To use local photos: "/projects/hotels/hyatt-place-kelowna/photo-1.jpg"
    gallery: [
      "https://westfraserdev.ca/wp-content/uploads/2021/11/GT0Ub6ec.jpeg",
      "https://westfraserdev.ca/wp-content/uploads/2021/11/Lobby_001.jpg",
      "https://westfraserdev.ca/wp-content/uploads/2019/07/kelownacrop-daytime.png",
    ],
  },

  // ── HYATT PLACE / HYATT HOUSE TORONTO ─────────────────────────────────────
  {
    id: "hyatt-toronto",
    name: "Hyatt Place / Hyatt House Toronto",
    location: "Mississauga, ON",
    brand: "Hyatt Place + Hyatt House",
    rooms: "Dual Brand",
    year: "2021",
    address: "Mississauga, ON",
    bookingUrl: "https://www.hyatt.com/hyatt-place/en-US/yyzza-hyatt-place-mississauga-airport-corporate-centre",

    img: "https://westfraserdev.ca/wp-content/uploads/2021/11/final-hyatt-toronto.jpg",

    description:
      "Dual-brand Hyatt property near the intersection of Highway 401 and 427, and Highway 409 — well situated in Mississauga's Airport Corporate Centre.",

    overview:
      "This dual-brand Hyatt development in Mississauga's Airport Corporate Centre combines Hyatt Place and Hyatt House under one roof — a unique structure that serves both transient business travellers and extended-stay guests. Located near the intersection of Highways 401, 427, and 409, the property provides exceptional access to Toronto Pearson International Airport, Mississauga's corporate corridor, and the broader Greater Toronto Area. The project represents West Fraser's expansion into Ontario's highly competitive hospitality market.",

    features: [
      "Dual-brand Hyatt Place + Hyatt House",
      "Ideal for business and extended-stay guests",
      "Steps from Toronto Pearson International Airport",
      "Mississauga Airport Corporate Centre location",
      "Full-service dining and bar",
      "Meeting and event facilities",
      "Fitness centre and pool",
      "Shuttle access to airport",
    ],

    gallery: [
      "https://westfraserdev.ca/wp-content/uploads/2021/11/final-hyatt-toronto.jpg",
      "https://westfraserdev.ca/wp-content/uploads/2021/11/Lobby_001.jpg",
      "https://westfraserdev.ca/wp-content/uploads/2021/11/GT0Ub6ec.jpeg",
    ],
  },

  // ── RAMADA INN COLD LAKE ──────────────────────────────────────────────────
  {
    id: "ramada-cold-lake",
    name: "Ramada Inn Cold Lake",
    location: "Cold Lake, AB",
    brand: "Ramada by Wyndham",
    rooms: "Full-Service Hotel",
    year: "2009",
    address: "Cold Lake, AB",
    bookingUrl: "https://www.wyndhamhotels.com/ramada/cold-lake-alberta/ramada-cold-lake/overview",

    img: "https://westfraserdev.ca/wp-content/uploads/2019/05/ramada-cover.jpg",

    description:
      "Conveniently situated off Highway 28, close to all major attractions and sports venues. Cold Lake's premier accommodation.",

    overview:
      "The Ramada Inn Cold Lake is a full-service hotel operating under the internationally recognized Ramada by Wyndham brand, serving Cold Lake — a city driven by CFB Cold Lake, one of Canada's busiest military airbases, and Alberta's energy sector. Situated off Highway 28 and close to major local attractions, the hotel offers comfortable accommodations, meeting facilities, and an on-site restaurant, making it Cold Lake's premier destination for both business and leisure travellers.",

    features: [
      "Full-service Ramada by Wyndham brand",
      "Located off Highway 28",
      "Close to CFB Cold Lake and local attractions",
      "On-site restaurant and lounge",
      "Meeting and conference facilities",
      "Fitness centre and indoor pool",
      "Serves military, energy sector, and leisure guests",
    ],

    gallery: [
      "https://westfraserdev.ca/wp-content/uploads/2019/05/ramada-cover.jpg",
      "https://westfraserdev.ca/wp-content/uploads/2021/11/Lobby_001.jpg",
      "https://westfraserdev.ca/wp-content/uploads/2021/11/GT0Ub6ec.jpeg",
    ],
  },

  // ── BEST WESTERN PLUS MOOSOMIN ────────────────────────────────────────────
  {
    id: "best-western-moosomin",
    name: "Best Western Plus Moosomin",
    location: "Moosomin, SK",
    brand: "Best Western Plus",
    rooms: "79 Rooms",
    year: "2015",
    address: "Moosomin, SK",
    bookingUrl: "https://www.bestwestern.com/en_US/book/hotels-in-moosomin/best-western-plus-moosomin-hotel/propertyCode.68031.html",

    img: "https://westfraserdev.ca/wp-content/uploads/2019/04/best-western-moosomin.jpg",

    description:
      "Three-level hotel featuring 79 thoughtfully designed guest rooms with ten different room types to accommodate all traveller needs.",

    overview:
      "Best Western Plus Moosomin is a 79-room hotel that brings premium Best Western Plus standards to one of Saskatchewan's most strategically located communities. The three-level property features ten distinct room types designed to accommodate solo travellers, couples, families, and extended-stay guests. Located along the Trans-Canada Highway, Moosomin serves as a key stopover point for travellers crossing Canada, while also supporting the region's agricultural and business communities.",

    features: [
      "79 guest rooms across three levels",
      "10 different room types",
      "Best Western Plus brand standards",
      "Trans-Canada Highway location",
      "Indoor pool and fitness centre",
      "Complimentary hot breakfast",
      "Meeting space available",
      "Pet-friendly rooms available",
    ],

    gallery: [
      "https://westfraserdev.ca/wp-content/uploads/2019/04/best-western-moosomin.jpg",
      "https://westfraserdev.ca/wp-content/uploads/2021/11/Lobby_001.jpg",
      "https://westfraserdev.ca/wp-content/uploads/2019/04/best-western-kindersley.jpg",
    ],
  },

  // ── BEST WESTERN PLUS KINDERSLEY ──────────────────────────────────────────
  {
    id: "best-western-kindersley",
    name: "Best Western Plus Kindersley",
    location: "Kindersley, SK",
    brand: "Best Western Plus",
    rooms: "Full-Service Hotel",
    year: "2016",
    address: "Kindersley, SK",
    bookingUrl: "https://www.bestwestern.com/en_US/book/hotels-in-kindersley/best-western-plus-kindersley-hotel/propertyCode.68032.html",

    img: "https://westfraserdev.ca/wp-content/uploads/2019/04/best-western-kindersley.jpg",

    description:
      "The newest hotel in Kindersley, Saskatchewan, located along Highway 7 — the perfect stay-over for travellers.",

    overview:
      "Best Western Plus Kindersley is the newest full-service hotel in Kindersley, Saskatchewan — a hub for the province's oil and gas industry and agricultural sector. Located along Highway 7, the property provides premium Best Western Plus amenities including modern rooms, a fitness centre, and complimentary breakfast, making it the top choice for business travellers, industry workers, and highway travellers passing through west-central Saskatchewan.",

    features: [
      "Newest full-service hotel in Kindersley",
      "Best Western Plus brand standards",
      "Highway 7 location",
      "Modern rooms with premium amenities",
      "Indoor pool and fitness centre",
      "Complimentary hot breakfast",
      "Serves oil, gas, and agricultural sectors",
    ],

    gallery: [
      "https://westfraserdev.ca/wp-content/uploads/2019/04/best-western-kindersley.jpg",
      "https://westfraserdev.ca/wp-content/uploads/2021/11/Lobby_001.jpg",
      "https://westfraserdev.ca/wp-content/uploads/2019/04/best-western-moosomin.jpg",
    ],
  },

  // ── BEST WESTERN PLUS ESTEVAN ─────────────────────────────────────────────
  {
    id: "best-western-estevan",
    name: "Best Western Plus Estevan",
    location: "Estevan, SK",
    brand: "Best Western Plus",
    rooms: "Full-Service Hotel",
    year: "2018",
    address: "Estevan, SK",
    bookingUrl: "https://www.bestwestern.com/en_US/book/hotels-in-estevan/best-western-plus-estevan-inn-suites/propertyCode.68026.html",

    img: "https://westfraserdev.ca/wp-content/uploads/2019/04/best-western-estevan.jpg",

    description:
      "Guest satisfaction first — reflected in amenities, beautifully decorated facilities, and reasonable rates in Estevan, Saskatchewan.",

    overview:
      "Best Western Plus Estevan Inn & Suites is a premium full-service hotel serving one of Saskatchewan's most economically active cities — home to significant oil and gas, mining, and agricultural industries. The property prioritizes guest satisfaction with beautifully appointed rooms, modern amenities, and competitive rates that appeal to both business and leisure travellers. Its thoughtful design and attentive service have made it the preferred accommodation choice in Estevan.",

    features: [
      "Full-service Best Western Plus hotel",
      "Beautifully appointed rooms and suites",
      "Indoor pool and waterslide",
      "Fitness centre",
      "On-site restaurant and lounge",
      "Meeting and event facilities",
      "Serves energy, mining, and agricultural sectors",
      "Competitive rates with premium amenities",
    ],

    gallery: [
      "https://westfraserdev.ca/wp-content/uploads/2019/04/best-western-estevan.jpg",
      "https://westfraserdev.ca/wp-content/uploads/2021/11/Lobby_001.jpg",
      "https://westfraserdev.ca/wp-content/uploads/2019/04/best-western-moosomin.jpg",
    ],
  },

  // ── SIGMA INN MELVILLE ────────────────────────────────────────────────────
  {
    id: "sigma-inn-melville",
    name: "Sigma Inn & Suites Melville",
    location: "Melville, SK",
    brand: "Sigma Inn",
    rooms: "Full-Service Hotel",
    year: "2014",
    address: "Melville, SK",
    bookingUrl: "https://sigma-inn-suites-hotel-melville.h-rez.com/",

    img: "https://westfraserdev.ca/wp-content/uploads/2019/04/sigma-inn-melville.jpg",

    description:
      "Situated right off Highway 10 in Melville, Saskatchewan, offering the convenience of a top-quality stay in the heart of the prairies.",

    overview:
      "Sigma Inn & Suites Melville is West Fraser's own proprietary hotel brand, delivering a full-service experience to the community of Melville, Saskatchewan. Situated right off Highway 10, the property provides comfortable, modern accommodations for travellers passing through east-central Saskatchewan, as well as workers serving the region's railway, agriculture, and industrial sectors. The Sigma Inn brand reflects West Fraser's commitment to quality and value in underserved markets.",

    features: [
      "West Fraser's proprietary Sigma Inn brand",
      "Full-service hotel off Highway 10",
      "Modern rooms and suites",
      "Indoor pool and fitness centre",
      "On-site dining",
      "Serves rail, agriculture, and industrial sectors",
      "Melville — east-central Saskatchewan hub",
    ],

    gallery: [
      "https://westfraserdev.ca/wp-content/uploads/2019/04/sigma-inn-melville.jpg",
      "https://westfraserdev.ca/wp-content/uploads/2021/11/Lobby_001.jpg",
      "https://westfraserdev.ca/wp-content/uploads/2019/04/sigma-inn-hope.jpg",
    ],
  },

  // ── SIGMA INN HUDSON'S HOPE ───────────────────────────────────────────────
  {
    id: "sigma-inn-hudson-hope",
    name: "Sigma Inn & Suites Hudson's Hope",
    location: "Hudson's Hope, BC",
    brand: "Sigma Inn",
    rooms: "Boutique Hotel",
    year: "2009",
    address: "Hudson's Hope, BC",
    bookingUrl: "https://www.sigmainnsuiteshudsonhope.net/",

    img: "https://westfraserdev.ca/wp-content/uploads/2019/04/sigma-inn-hope.jpg",

    description:
      "The newest hotel in Hudson's Hope, BC — ideal for business travellers and leisure guests seeking a relaxing northern BC getaway.",

    overview:
      "Sigma Inn & Suites Hudson's Hope is a boutique hotel nestled in the scenic Peace River region of northern British Columbia. As the newest hotel in Hudson's Hope, the property serves both business travellers working on regional energy and infrastructure projects, and leisure guests drawn to the area's spectacular natural beauty — including the Peace Canyon Dam, Dinosaur Lake, and access to vast wilderness. The Sigma Inn brand ensures a consistent, high-quality experience in one of BC's most remote communities.",

    features: [
      "West Fraser's proprietary Sigma Inn brand",
      "Boutique hotel — newest in Hudson's Hope",
      "Serves energy and infrastructure workforce",
      "Near Peace Canyon Dam and Dinosaur Lake",
      "Access to northern BC wilderness and outdoor recreation",
      "Modern rooms with full amenities",
      "Warm and welcoming community atmosphere",
    ],

    gallery: [
      "https://westfraserdev.ca/wp-content/uploads/2019/04/sigma-inn-hope.jpg",
      "https://westfraserdev.ca/wp-content/uploads/2021/11/Lobby_001.jpg",
      "https://westfraserdev.ca/wp-content/uploads/2019/04/sigma-inn-melville.jpg",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // ADD A NEW HOTEL — copy this template and fill it in:
  // ─────────────────────────────────────────────────────────────────────────
  //
  // {
  //   id: "hotel-name",                  ← kebab-case
  //   name: "Hotel Display Name",
  //   location: "City, Province",
  //   brand: "Brand Name",               ← e.g. "Hyatt Place" | "Sigma Inn"
  //   rooms: "100 Rooms",                ← or "Full-Service Hotel" | "Boutique Hotel"
  //   year: "2024",
  //   address: "123 Main St, City, BC",
  //   bookingUrl: "https://...",
  //
  //   img: "/projects/hotels/hotel-name/hero.jpg",
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
  //     "/projects/hotels/hotel-name/photo-1.jpg",   ← hero
  //     "/projects/hotels/hotel-name/photo-2.jpg",
  //     "/projects/hotels/hotel-name/photo-3.jpg",
  //   ],
  // },
  //
  // Save photos to: public/projects/hotels/hotel-name/
  // ─────────────────────────────────────────────────────────────────────────
];
