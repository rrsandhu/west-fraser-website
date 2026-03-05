export type ConstructionProject = {
  id: string;
  name: string;
  location: string;
  category: "Commercial" | "Industrial" | "Residential" | "Tenant Improvement";
  scope: string;
  status: "Complete" | "Under Construction" | "Pre-Construction";
  statusColor: string;
  img: string;
  year: string;
  sqft: string;
  description: string;
};

export const constructionProjects: ConstructionProject[] = [
  {
    id: "evergreen-mall",
    name: "Evergreen Retail Centre",
    location: "Surrey, BC",
    category: "Commercial",
    scope: "New construction — 60,000 sq ft community retail centre with anchor tenant and inline units",
    status: "Complete",
    statusColor: "bg-green-700",
    img: "/Evergreen%20Mall/photo-1.jpg",
    year: "2022",
    sqft: "60,000 sq ft",
    description:
      "Full design-build delivery of a community retail centre anchored by a national grocery tenant. Includes surface parking, loading infrastructure, and full mechanical/electrical fit-out.",
  },
  {
    id: "surrey-city-centre-tower",
    name: "Surrey City Centre Tower",
    location: "Surrey, BC",
    category: "Residential",
    scope: "General contracting — dual high-rise residential towers, 200,000+ sq ft, two buildings",
    status: "Under Construction",
    statusColor: "bg-amber-600",
    img: "/Surrey%20City%20Centre/photo-1.jpeg",
    year: "2025",
    sqft: "200,000+ sq ft",
    description:
      "GC services for a landmark dual-tower residential development in Surrey City Centre. Scope includes structural, envelope, mechanical, electrical, and suite fit-out across both towers.",
  },
  {
    id: "820-dogwood",
    name: "820 Dogwood Residential",
    location: "Coquitlam, BC",
    category: "Residential",
    scope: "Design-build — 202-suite rental tower, Burquitlam neighbourhood",
    status: "Under Construction",
    statusColor: "bg-amber-600",
    img: "/820%20Dogwood/photo-1.png",
    year: "2025",
    sqft: "180,000 sq ft",
    description:
      "Design-build contract for a 202-suite purpose-built rental tower steps from Burquitlam SkyTrain. West Fraser Construction managing full project delivery from permits to handover.",
  },
  {
    id: "everett-tower",
    name: "Everett Residential Tower",
    location: "Surrey, BC",
    category: "Residential",
    scope: "General contracting — high-rise residential tower, open-concept suites with premium finishes",
    status: "Complete",
    statusColor: "bg-green-700",
    img: "/Everett/photo-1.jpg",
    year: "2023",
    sqft: "150,000 sq ft",
    description:
      "Complete GC delivery of a modern high-rise residential building in Surrey's Whalley neighbourhood. Engineered hardwood, 9-ft ceilings, designer kitchens, amenity lounge, and fitness centre.",
  },
  {
    id: "the-grove-mixed-use",
    name: "The Grove Mixed-Use",
    location: "Surrey, BC",
    category: "Commercial",
    scope: "Design-build — 133 rental suites over 28,000 sq ft ground-floor commercial",
    status: "Under Construction",
    statusColor: "bg-amber-600",
    img: "/The%20Grove/photo-1.jpg",
    year: "2025",
    sqft: "95,000 sq ft",
    description:
      "Mixed-use design-build project comprising 133 rental suites above 28,000 sq ft of street-level commercial space. West Fraser Construction leading design coordination through to construction.",
  },
  {
    id: "agnes-new-west",
    name: "Agnes Mixed-Use",
    location: "New Westminster, BC",
    category: "Residential",
    scope: "General contracting — two residential buildings, 200 condominiums and townhomes",
    status: "Complete",
    statusColor: "bg-green-700",
    img: "/Agnes/photo-1.jpg",
    year: "2020",
    sqft: "210,000 sq ft",
    description:
      "Two-building residential and mixed-use development anchored by a retail ground floor. West Fraser Construction delivered full structural, architectural, and fit-out scope.",
  },
  {
    id: "king-george-commercial",
    name: "King George Commercial",
    location: "Surrey, BC",
    category: "Commercial",
    scope: "Tenant improvement — full base building and multi-tenant commercial fit-out",
    status: "Complete",
    statusColor: "bg-green-700",
    img: "/7599%20King%20George/photo-1.jpg",
    year: "2021",
    sqft: "22,000 sq ft",
    description:
      "Base building and multi-tenant commercial improvement project at a high-traffic Surrey corridor. Includes new mechanical systems, storefront glazing, and individual unit demising.",
  },
  {
    id: "schooner-industrial",
    name: "85 Schooner Industrial",
    location: "Vancouver, BC",
    category: "Industrial",
    scope: "Design-build — industrial warehouse with office mezzanine and grade/dock loading",
    status: "Complete",
    statusColor: "bg-green-700",
    img: "/85%20Schooner/photo-1.jpg",
    year: "2022",
    sqft: "35,000 sq ft",
    description:
      "Design-build industrial facility with warehouse floor, office mezzanine, grade-level and dock loading doors, sprinkler system, and heavy electrical service.",
  },
  {
    id: "radley-condominiums",
    name: "Radley Condominiums",
    location: "Surrey, BC",
    category: "Residential",
    scope: "General contracting — 193-suite condominium tower with rooftop amenity deck",
    status: "Complete",
    statusColor: "bg-green-700",
    img: "/radley/photo-1.jpeg",
    year: "2023",
    sqft: "190,000 sq ft",
    description:
      "Premier condominium tower in Surrey City Centre. GC scope included full structural and architectural package, suite fit-outs with quartz countertops and premium appliances, and a rooftop amenity deck.",
  },
  {
    id: "mission-village-residential",
    name: "Mission Village",
    location: "Mission, BC",
    category: "Residential",
    scope: "Design-build — 5-storey residential building, community-focused design",
    status: "Complete",
    statusColor: "bg-green-700",
    img: "/million%20village/photo-1.jpeg",
    year: "2025",
    sqft: "48,000 sq ft",
    description:
      "Community-scale residential building delivered under a design-build contract in downtown Mission. Warm material palette, functional suite layouts, secure entry, and resident parking.",
  },
  {
    id: "13070-115-avenue",
    name: "115th Avenue Tower",
    location: "Surrey, BC",
    category: "Residential",
    scope: "General contracting — mid-rise residential, unit renovations and common area upgrade",
    status: "Complete",
    statusColor: "bg-green-700",
    img: "/13070%20115/photo-1.jpg",
    year: "2021",
    sqft: "95,000 sq ft",
    description:
      "GC scope covering full residential tower renovation: suite refreshes, corridor and lobby upgrades, new mechanical equipment, and improved building envelope performance.",
  },
  {
    id: "315-ward-ti",
    name: "315 Ward Street — Tenant Improvement",
    location: "New Westminster, BC",
    category: "Tenant Improvement",
    scope: "Tenant improvement — boutique residential building suite fit-out, 26 units",
    status: "Complete",
    statusColor: "bg-green-700",
    img: "/315%20Ward/photo-1.jpg",
    year: "2020",
    sqft: "28,000 sq ft",
    description:
      "Tenant improvement and fit-out of 26 boutique condominium suites in Sapperton, New Westminster. Stone countertops, millwork, stainless appliances, and in-suite laundry in all units.",
  },
];
