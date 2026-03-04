import type { CommercialProperty } from "@/lib/types";

// ─────────────────────────────────────────────────────────────────────────────
// HOW TO ADD OR EDIT A COMMERCIAL PROPERTY
// ─────────────────────────────────────────────────────────────────────────────
//
// Each property is one object in the array below. Copy the template at the
// bottom of this file and fill in the fields.
//
// PHOTOS
//   • Save photos to:  wesgroup-clone/public/projects/commercial/<property-id>/
//     e.g.  public/projects/commercial/evergreen-mall/hero.jpg
//           public/projects/commercial/evergreen-mall/photo-1.jpg
//
//   • Reference them in code as:  "/projects/commercial/evergreen-mall/hero.jpg"
//
//   • img     → the card thumbnail shown in the listings grid
//   • gallery → array of 3 photos (first spans 2 columns — use the best shot first)
//
// FIELDS
//   id           → URL slug (kebab-case)
//   name         → Display name
//   location     → City, Province  e.g. "Surrey, BC"
//   type         → "Retail Shopping Centre" | "Mixed-Use Development" |
//                  "Industrial / Warehouse" | "Commercial / Industrial"
//   size         → Short size descriptor  e.g. "Neighbourhood Centre" | "85,000 sq ft"
//   year         → Year built / opened as string
//   status       → "OPEN" | "COMING SOON" | "LEASING"
//   statusColor  → "bg-green-700" (open) | "bg-blue-700" (coming soon) |
//                  "bg-amber-600" (leasing)
//   anchor       → Tag line shown on card  e.g. "Neighbourhood Retail · Established Tenants"
//   description  → 1-2 sentence summary shown on the listing card
//   overview     → 3-5 sentence paragraph for a future detail page
//   features     → Bullet list of highlights
//   address      → Full street address
//   leaseContact → Optional leasing contact email or phone
// ─────────────────────────────────────────────────────────────────────────────

export const commercialProperties: CommercialProperty[] = [
  // ── 85 SCHOONER ───────────────────────────────────────────────────────────
  {
    id: "85-schooner",
    name: "85 Schooner",
    location: "Delta, BC",
    type: "Industrial / Warehouse",
    size: "Commercial Facility",
    year: "2010",
    status: "OPEN",
    statusColor: "bg-green-700",
    address: "85 Schooner St, Delta, BC",
    anchor: "Industrial · Commercial",

    // Card thumbnail
    img: "/85%20Schooner/photo-1.jpg",

    // Short description (listing card)
    description:
      "Commercial and industrial facility at 85 Schooner Street, offering flexible space for business operations.",

    // Full description (detail page)
    overview:
      "85 Schooner is a commercial and industrial property developed by West Fraser Developments. The facility offers flexible space suitable for a range of commercial and industrial uses, with convenient access to major transportation routes.",

    features: [
      "Commercial and industrial space",
      "Flexible layout configurations",
      "Convenient highway access",
    ],

    // Gallery photos — first image is the hero (spans 2 cols)
    gallery: [
      "/85%20Schooner/photo-1.jpg",
      "/85%20Schooner/photo-2.jpg",
      "/85%20Schooner/photo-3.jpg",
    ],
  },

  // ── 13070 115 AVE ─────────────────────────────────────────────────────────
  {
    id: "13070-115-ave",
    name: "13070 115 Ave",
    location: "Surrey, BC",
    type: "Commercial / Industrial",
    size: "Commercial Facility",
    year: "2010",
    status: "OPEN",
    statusColor: "bg-green-700",
    address: "13070 115 Ave, Surrey, BC",
    anchor: "Commercial · Industrial",

    // Card thumbnail
    // To use a local photo: "/projects/commercial/13070-115-ave/hero.jpg"
    img: "https://westfraserdev.ca/wp-content/uploads/2021/12/tr4.jpg",

    // Short description (listing card)
    description:
      "Commercial facility at 13070 115 Ave in Surrey, BC, offering purpose-built space for commercial and industrial operations.",

    // Full description (detail page)
    overview:
      "13070 115 Ave is a commercial and industrial property developed by West Fraser Developments in Surrey, BC. The facility is purpose-built to support commercial and industrial operations, with flexible configurations and strong access to the surrounding road network.",

    features: [
      "Purpose-built commercial and industrial facility",
      "Flexible space configurations",
      "Surrey location with highway access",
    ],

    // Gallery photos — first image is the hero (spans 2 cols)
    // To use local photos: "/projects/commercial/13070-115-ave/photo-1.jpg"
    gallery: [
      "https://westfraserdev.ca/wp-content/uploads/2021/12/tr4.jpg",
      "https://westfraserdev.ca/wp-content/uploads/2021/11/Warehouse_High_res_002.jpg",
      "https://westfraserdev.ca/wp-content/uploads/2021/11/evergreen-mall-5.png",
    ],
  },

  // ── EVERGREEN MALL ────────────────────────────────────────────────────────
  {
    id: "evergreen-mall",
    name: "Evergreen Mall",
    location: "Surrey, BC",
    type: "Retail Shopping Centre",
    size: "Neighbourhood Centre",
    year: "1993",
    status: "OPEN",
    statusColor: "bg-green-700",
    address: "Surrey, BC",
    anchor: "Neighbourhood Retail · Established Tenants",

    img: "/Evergreen%20Mall/photo-1.jpg",

    description:
      "A well-established neighbourhood shopping centre serving the Surrey community since 1993. Anchored by essential retailers with strong foot traffic and long-term tenancies.",

    overview:
      "Evergreen Mall is a well-established neighbourhood shopping centre that has served the Surrey community for over 30 years. Anchored by essential service retailers, the centre benefits from consistent foot traffic, a loyal local customer base, and long-term tenancies that provide stable returns. The property has undergone continuous reinvestment to maintain its position as the go-to destination for everyday shopping in the surrounding community.",

    features: [
      "Established neighbourhood retail centre (est. 1993)",
      "Consistent foot traffic and loyal customer base",
      "Long-term tenancies with essential service retailers",
      "Ample surface parking",
      "Easy access from major roads",
      "Proven retail location with 30+ years of operation",
    ],

    gallery: [
      "/Evergreen%20Mall/photo-1.jpg",
      "/Evergreen%20Mall/photo-2.jpg",
      "/Evergreen%20Mall/photo-3.jpg",
    ],
  },

  // ── WEST FRASER BUSINESS CENTRE ───────────────────────────────────────────
  {
    id: "west-fraser-business-centre",
    name: "West Fraser Business Centre",
    location: "Surrey, BC",
    type: "Industrial / Warehouse",
    size: "Commercial Park",
    year: "2021",
    status: "OPEN",
    statusColor: "bg-green-700",
    address: "Surrey, BC",
    anchor: "Industrial · Warehouse · Flex Space",

    description:
      "A modern industrial and warehouse business centre providing flexible commercial space for growing businesses. Strategically located in Surrey with excellent highway and transit access.",

    overview:
      "West Fraser Business Centre is a modern industrial and warehouse development providing flexible commercial space designed for today's growing businesses. The park offers a range of unit configurations — from smaller flex units to large-format warehouse bays — all featuring high ceilings, grade and dock loading, and ample yard space. Strategically located in Surrey with direct access to major highways, the centre is ideal for distribution, light manufacturing, and commercial operations.",

    features: [
      "Modern industrial and warehouse units",
      "Flexible unit configurations available",
      "High clear ceilings",
      "Grade and dock loading doors",
      "Ample truck court and yard space",
      "Excellent highway and transit access",
      "Surrey location — central to Metro Vancouver",
    ],
  },

  // ── 7599 KING GEORGE ──────────────────────────────────────────────────────
  {
    id: "7599-king-george",
    name: "7599 King George",
    location: "Surrey, BC",
    type: "Commercial / Industrial",
    size: "Commercial Facility",
    year: "2010",
    status: "OPEN",
    statusColor: "bg-green-700",
    address: "7599 King George Blvd, Surrey, BC",
    anchor: "Commercial · Industrial",

    img: "/7599%20King%20George/photo-1.jpg",

    description:
      "Commercial and industrial facility at 7599 King George Boulevard in Surrey, BC, offering flexible space for business operations with excellent access to major routes.",

    overview:
      "7599 King George is a commercial and industrial property developed by West Fraser Developments, located on King George Boulevard in Surrey. The facility offers flexible space for a range of commercial and industrial uses, with convenient access to major transportation corridors throughout Metro Vancouver.",

    features: [
      "Commercial and industrial space",
      "Flexible layout configurations",
      "King George Boulevard frontage",
      "Convenient highway access",
    ],

    gallery: [
      "/7599%20King%20George/photo-1.jpg",
      "/7599%20King%20George/photo-2.jpg",
      "/7599%20King%20George/photo-3.jpg",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // ADD A NEW COMMERCIAL PROPERTY — copy this template and fill it in:
  // ─────────────────────────────────────────────────────────────────────────
  //
  // {
  //   id: "property-name",               ← kebab-case
  //   name: "Property Name",
  //   location: "City, BC",
  //   type: "Retail Shopping Centre",    ← see type options above
  //   size: "Neighbourhood Centre",
  //   year: "2024",
  //   status: "OPEN",                    ← "OPEN" | "COMING SOON" | "LEASING"
  //   statusColor: "bg-green-700",
  //   address: "123 Main St, City, BC",
  //   anchor: "Retail · Commercial",
  //   leaseContact: "info@wfdev.ca",     ← optional
  //
  //   img: "/projects/commercial/property-name/hero.jpg",
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
  //     "/projects/commercial/property-name/photo-1.jpg",   ← hero
  //     "/projects/commercial/property-name/photo-2.jpg",
  //     "/projects/commercial/property-name/photo-3.jpg",
  //   ],
  // },
  //
  // Save photos to: public/projects/commercial/property-name/
  // ─────────────────────────────────────────────────────────────────────────
];
