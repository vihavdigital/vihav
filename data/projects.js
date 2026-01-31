/**
 * HOW TO UPDATE PROJECT LOCATIONS (COORDINATES):
 *
 * 1. Open Google Maps (maps.google.com).
 * 2. Search for the exact location of the project.
 * 3. Right-click on the red pin or the exact spot.
 * 4. Click on the coordinates (first item in the menu, e.g., "22.3072, 73.1812").
 *    This copies them to your clipboard.
 * 5. Locate the project in this file (search by 'id' or 'title').
 * 6. Update the `coordinates` field:
 *    coordinates: { lat: 22.XXXX, lng: 73.XXXX },
 * 7. Save this file. The map will update automatically.
 */
export const PROJECTS = [
  {
    id: "keystone-select",
    srd: "6948f166e114873dbd357523", // KEYSTONE SELECT
    link: "/projects/keystone-select",
    slug: "keystone-select",
    title: "Keystone Select",
    tagline: "A Signature Address. A Select Lifestyle",
    logo: "/images/project-images/project-logos/keystone-select.png",
    category: "Residential",
    location: "Nr Navrachana University, Bhayli",
    carpetArea: "SBA : 5772 Sq.Ft Onwards",
    type: "4B2HK Apartments & 5B2HK Penthouses",
    price: "2.15 Cr",
    status: "Upcoming",
    progress: 75,
    reraId: "PR/GJ/VADODARA/VADODARA/Others/RAA00001/010121",
    reraLink: "https://gujrera.gujarat.gov.in/",
    phone: "+91 7201 855 855",
    email: "keystoneselect@vihav.com",
    description:
      "A signature address that balances comfort, connectivity, and prestige. Every home is thoughtfully planned to offer generous proportions (3120 - 5046 sq. ft.), seamless layouts, and abundant natural light. Contemporary architecture with timeless appeal.",
    vision: "For the 'Selected Few'",
    showcaseVideo: "/videos/niwa.mp4",
    heroImage: "/images/project-images/project-tiles/Select.jpg",
    desktopHeroImage:
      "/images/project-images/hero-banner/desktop-banner/keystone-select.webp",
    mobileHeroImage:
      "/images/project-images/hero-banner/mobile-banner/keystone-select.webp",
    galleryImages: [
      "https://www.vihav.com/wp-content/uploads/Card-Select.webp",
    ],
    features: [
      "Carpet: 3120-5046 sq.ft",
      "Near 75m Ring Road",
      "Abundant Natural Light",
      "Exclusive Penthouses",
    ],
    floorPlans: [
      {
        id: "fp-1",
        title: "Typical Floor Plan - 4B2HK",
        type: "4BHK",
        image:
          "/images/project-images/projects/cbd-res/gallery/vihav-cbd-gallery (3).webp", // Placeholder
        dimensions: "3120 Sq. Ft.",
      },
      {
        id: "fp-2",
        title: "Penthouse Lower Level",
        type: "Penthouse",
        image:
          "/images/project-images/projects/cbd-res/gallery/vihav-cbd-gallery (3).webp", // Placeholder
        dimensions: "5046 Sq. Ft.",
      },
      {
        id: "fp-3",
        title: "Penthouse Upper Level",
        type: "Penthouse",
        image:
          "/images/project-images/projects/cbd-res/gallery/vihav-cbd-gallery (3).webp", // Placeholder
        dimensions: "5046 Sq. Ft.",
      },
    ],
    highlights: [
      {
        icon: "FileText",
        title: "Exclusivity",
        label: "22 Storey",
        description:
          " Single-tower development with 22 storey ensuring exclusivity and low-density living.",
      },
      {
        icon: "Check",
        title: "Premium Community",
        label: "Only two Residences per floor",
        description:
          "Offering enhanced privacy and quiet living with Personal foyer and Private lift access for each residence",
      },
      {
        icon: "MapPin",
        title: "Strategic Location",
        label: "75m Ring Road",
        description:
          "Iconic view providing superior connectivity and visibility.",
      },
      {
        icon: "MapPin",
        title: "Lifestyle",
        label: "Amenities for All",
        description:
          "Carefully curated lifestyle amenities catering to all age groups.",
      },
    ],
    amenitiesList: [
      { icon: "Shield", label: "24/7 Security" },
      { icon: "Trees", label: "Landscape Garden" },
      { icon: "Dumbbell", label: "Gymnasium" },
      { icon: "Users", label: "Community Hall" },
      { icon: "Gamepad2", label: "Indoor Games" },
      { icon: "Car", label: "Allotted Parking" },
    ],
    specifications: [
      {
        category: "Flooring",
        items: [
          "Italian Marble in Living/Dining",
          "Wooden Flooring in Master Bedroom",
          "Vitrified Tiles in other rooms",
        ],
      },
      {
        category: "Kitchen",
        items: [
          "Granite Platform",
          "Stainless Steel Sink",
          "Glazed Tiles dado up to lintel level",
        ],
      },
      {
        category: "Doors & Windows",
        items: ["Decorative Main Door", "Anodized Aluminum Sliding Windows"],
      },
      {
        category: "Electrification",
        items: [
          "Concealed Copper Wiring",
          "Modular Switches",
          "AC Points in all bedrooms",
        ],
      },
    ],
    connectivity: [
      { label: "Navrachana Uni", time: "2 Mins" },
      { label: "Airport", time: "25 Mins" },
      { label: "School", time: "5 Mins" },
      { label: "Hospital", time: "5 Mins" },
      { label: "Railway Station", time: "20 Mins" },
      { label: "Expressway", time: "10 Mins" },
      { label: "Mall", time: "12 Mins" },
    ],
    address: "75 MTR. MAIN ROAD , BHAYLI",
    coordinates: { lat: 22.2944078, lng: 73.1137781 },
    googleMapsLink: "https://maps.app.goo.gl/t8Q5fmD4QnpWh8PX9",
    mapEmbed:
      "https://maps.google.com/maps?q=Keystone+Select+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
    constructionImages: [
      "/images/project-images/projects/cbd-res/gallery/vihav-cbd-gallery (3).webp",
      "/images/project-images/projects/cbd-res/gallery/vihav-cbd-gallery (3).webp",
      "/images/project-images/projects/cbd-res/gallery/vihav-cbd-gallery (3).webp",
      "/images/project-images/projects/cbd-res/gallery/vihav-cbd-gallery (3).webp",
    ],
    filterData: {
      category: "Residential",
      type: ["4bhk", "5bhk", "penthouse", "Apartments"],
      possession: "Upcoming",
    },
  },
  {
    id: "keystone-51",
    srd: "68e60c75a3d855d95ca44d88", // KEYSTONE 51
    link: "/projects/keystone-51",
    status: "Newly Launched",
    slug: "keystone-51",
    title: "Keystone 51",
    logo: "/images/project-images/project-logos/keystone-51.svg",
    category: "Residential",
    location: "Nr Navrachana University, Bhayli",
    type: "4BHK Perfectly Crafted Villas",
    carpetArea:
      "PLOT AREA - 1257 Sq.Ft. Onwards | BUILT UP AREA - 2485 Sq.Ft. Onwards",
    price: "1.71 Cr",
    reraId: "PAA15293/020625/311227",
    reraLink: "https://gujrera.gujarat.gov.in/",
    phone: "+91 87916 49164",
    email: "keystone51@vihav.com",
    tagline: "4BHK PERFECTLY CRAFTED VILLAS",
    description:
      "Only a select few will experience life at Keystone 51, making it one of the most exclusive residential addresses in Vadodara. 1,00,000 sq.ft for just 51 families. Designed with modern families in mind, each home features expansive living areas, high-end finishes, and is four-side open with 2500 sq.ft Built-up Area.",
    vision: "Elite Community - Selected 51 Families",
    showcaseVideo: "/videos/niwa.mp4",
    heroImage: "/images/project-images/project-tiles/keystone-51.jpg",
    desktopHeroImage:
      "/images/project-images/hero-banner/desktop-banner/keystone-51.webp",
    mobileHeroImage:
      "/images/project-images/hero-banner/mobile-banner/keystone-51.webp",
    galleryImages: [
      "/images/project-images/projects/ks51-project-images/gallery/keystone-51-gallery-images (1).webp",
      "/images/project-images/projects/ks51-project-images/gallery/keystone-51-gallery-images (2).webp",
      "/images/project-images/projects/ks51-project-images/gallery/keystone-51-gallery-images (3).webp",
      "/images/project-images/projects/ks51-project-images/gallery/keystone-51-gallery-images (4).webp",
      "/images/project-images/projects/ks51-project-images/gallery/keystone-51-gallery-images (5).webp",
      "/images/project-images/projects/ks51-project-images/gallery/keystone-51-gallery-images (6).webp",
      "/images/project-images/projects/ks51-project-images/gallery/keystone-51-gallery-images (7).webp",
      "/images/project-images/projects/ks51-project-images/gallery/keystone-51-gallery-images (8).webp",
      "/images/project-images/projects/ks51-project-images/gallery/keystone-51-gallery-images (9).webp",
      "/images/project-images/projects/ks51-project-images/gallery/keystone-51-gallery-images (10).webp",
      "/images/project-images/projects/ks51-project-images/gallery/keystone-51-gallery-images (11).webp",
      "/images/project-images/projects/ks51-project-images/gallery/keystone-51-gallery-images (12).webp",
      "/images/project-images/projects/ks51-project-images/gallery/keystone-51-gallery-images (13).webp",
      "/images/project-images/projects/ks51-project-images/gallery/keystone-51-gallery-images (14).webp",
      "/images/project-images/projects/ks51-project-images/gallery/keystone-51-gallery-images (15).webp",
      "/images/project-images/projects/ks51-project-images/gallery/keystone-51-gallery-images (16).webp",
    ],
    floorPlans: [
      {
        id: "fp-layout",
        title: "Project Layout",
        image:
          "/images/project-images/projects/ks51-project-images/floor-plans/1-51-scaled.webp",
        type: "Plan",
      },
      {
        id: "fp-type-1",
        title: "Type 1 Plan",
        image:
          "/images/project-images/projects/ks51-project-images/floor-plans/2-51-scaled.webp",
        type: "4BHK",
      },

      {
        id: "fp-type-3",
        title: "Type 3 Plan",
        image:
          "/images/project-images/projects/ks51-project-images/floor-plans/4-51-scaled.webp",
        type: "4BHK",
      },
      {
        id: "fp-type-4",
        title: "Type 4 Plan",
        image:
          "/images/project-images/projects/ks51-project-images/floor-plans/5-51-scaled.webp",
        type: "4BHK",
      },
      {
        id: "fp-type-5",
        title: "Type 5 Plan",
        image:
          "/images/project-images/projects/ks51-project-images/floor-plans/6-51-scaled.webp",
        type: "4BHK",
      },
      {
        id: "fp-type-6",
        title: "Type 6 Plan",
        image:
          "/images/project-images/projects/ks51-project-images/floor-plans/7-51-scaled.webp",
        type: "4BHK",
      },


    ],
    features: [
      "1,00,000 Sq.Ft Land",
      "Only 51 Families",
      "4-Side Open",
      "2500 Sq.Ft Built-up Area",
    ],
    highlights: [
      {
        icon: "Users",
        title: "Premium Community",
        label: "51 Families",
        description:
          "Limited edition homes with Blend of Privacy + Community living",
      },
      {
        icon: "MapPin",
        title: "Prime Location",
        label: "Off 75 Mt Ring Road ",
        description:
          "Thoughtfully designed Vastu Compliant residences ",
      },
      {
        icon: "Shield",
        title: "Spacious Homes",
        label: "Four side open",
        description:
          " Exclusively design four side open homes for maximum light and ventilation",
      },
      {
        icon: "Maximize",
        title: "Lifestyle",
        label: "Amenities for all",
        description:
          "Designed with recreational and wellness facilities to support family-centric living",
      },
    ],
    amenitiesList: [
      { icon: "Dumbbell", label: "Fully Equipped Gym" },
      { icon: "Waves", label: "Swimming Pool" },
      { icon: "Trees", label: "Green Spaces" },
      { icon: "Shield", label: "24/7 Security" },
    ],
    specifications: [
      {
        category: "Community",
        items: ["Elite Community of 51 Families", "1,00,000 Sq.Ft Land Area"],
      },
      {
        category: "Residence",
        items: [
          "Spacious 4BHK Residences",
          "2500 Sq.Ft Built-up Area",
          "4-Side Open Layout",
        ],
      },
      {
        category: "Location",
        items: ["Near Navrachana University", "Off 75 Mtr Ring Road"],
      },
    ],
    connectivity: [
      { label: "Navrachana Uni", time: "2 Mins" },
      { label: "Airport", time: "25 Mins" },
      { label: "School", time: "5 Mins" },
      { label: "Hospital", time: "5 Mins" },
      { label: "Railway Station", time: "20 Mins" },
      { label: "Expressway", time: "10 Mins" },
      { label: "Mall", time: "12 Mins" },
    ],
    address:
      "Near Navrachana University, Off. 75 Mtr. Ring Road, Bhayli – Vadodara",
    coordinates: { lat: 22.294167, lng: 73.1106304 },
    googleMapsLink: "https://maps.app.goo.gl/sD4r5HMVSKKNc9Bf7",
    // coordinates: { lat: 22.2960, lng: 73.1420 },
    mapEmbed:
      "https://maps.google.com/maps?q=Keystone+51+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
    filterData: {
      category: "Residential",
      type: ["4bhk", "Bunglow", "Bunglow"],
      possession: "Newly Launched",
    },
  },
  {
    id: "keystone-niwa",
    srd: "68637205a3d855f6a487f8f5", // KEYSTONE NIWA
    link: "/projects/keystone-niwa-4b2hk-apartments-in-vadodara/",
    slug: "keystone-niwa-4b2hk-apartments-in-vadodara",
    title: "Keystone Niwa",
    logo: "/images/project-images/project-logos/keystone-niwa-logo.svg",
    category: "Residential",
    location: "Opp. Skyvillas, New Alkapuri",
    carpetArea: "CARPET - 5000 Sq.Ft.",
    type: "4BR 2H 2K Garden Apartments One Floor - one unit",
    price: "Price on Request",
    status: "Newly Launched",
    progress: 40,
    reraId: "RAA16029/181025/311230",
    reraLink: "https://gujrera.gujarat.gov.in/",
    phone: "+91 7201 950 950",
    email: "keystoneniwa@vihav.com",
    tagline: "4BR2H2K Garden Apartments | One Floor - One Unit",
    description:
      "Niwa, meaning garden in Japanese, reflects our belief that a home should feel like nature never left us. At Keystone Niwa, we’ve reimagined luxury to grow not just above ground, but within it. Here, greenery isn’t a view from your window, it’s part of your everyday living. From private garden balconies to lush common spaces, Niwa is where you don’t just come home, you arrive in nature.",
    vision: "A unique biophilic design",
    heroImage: "/images/project-images/project-tiles/keystone-niwa.jpg",
    desktopHeroImage:
      "/images/project-images/hero-banner/desktop-banner/niwa.webp",
    mobileHeroImage:
      "/images/project-images/hero-banner/mobile-banner/keystone-niwa.webp",
    showcaseVideo: "/videos/niwa.mp4",
    galleryImages: [
      "https://www.vihav.com/wp-content/uploads/Hurun-KEYSTONE-NIWA-Desktop-Slider-2048-×-778-px-01.webp",
      "https://www.vihav.com/wp-content/uploads/home-gray-bordered-extra-width.png",
      "https://www.vihav.com/wp-content/uploads/tree-bird-space.png",
      "https://www.vihav.com/wp-content/uploads/customized-leaf-bg-scaled.png",
      "https://www.vihav.com/wp-content/uploads/line-element-scaled.png",
      "https://www.vihav.com/wp-content/uploads/Hurun-KEYSTONE-NIWA-Mobile-Slider-1080-×-1080-px-01.webp",
    ],
    features: [
      "Ultra-exclusive: 45,000 sq. ft. for just 26 families",
      "Absolute privacy: One floor, one residence",
      "Super luxurious 5,000 sq ft carpet area",
      "Dual Kitchens: Gourmet and Utility",
    ],
    highlights: [
      {
        icon: "Trees",
        title: "Exclusivity",
        label: "For 26 Families only",
        description: "With 2 tower - One Floor One Unit",
      },
      {
        icon: "Trees",
        title: "Unmatched Luxury",
        label: "5000 Sq.Ft. carpet area",
        description: "Vadodara's First Garden Apartment with 5000 Sq.Ft. Carpet ",
      },
      {
        icon: "Maximize",
        title: "Nurtured Design",
        label: "1250 Sq.Ft. Carpet",
        description: "South facing private garden in every unit",
      },
      {
        icon: "Trees",
        title: "Spacious Dual Kitchens ",
        label: "Gourmet and Utility",
        description: "Thoughtfully designed Dual Kitchen concept for modern living",
      },
    ],
    amenitiesList: [
      { icon: "Waves", label: "Pool & Gazebo", note: "Signature Penthouse" },
      { icon: "Utensils", label: "Dual Kitchens" },
      { icon: "Coffee", label: "Resort-style Leisure" },
      { icon: "Shield", label: "Staycation Amenities" },
      { icon: "Trees", label: "Private Garden Balconies" },
      { icon: "Users", label: "Ultra-exclusive Community" },
    ],
    specifications: [
      {
        category: "Exclusivity",
        items: ["One Floor One Apartment", "Just 26 Families"],
      },
      {
        category: "Space",
        items: ["5000 Sq. Ft. Carpet Area", "45,000 Sq. Ft. Total Area"],
      },
      {
        category: "Luxury",
        items: [
          "Dual Kitchens (Gourmet & Utility)",
          "Private Pool (Penthouse)",
        ],
      },
    ],
    connectivity: [
      { label: "Navrachana Uni", time: "2 Mins" },
      { label: "Airport", time: "25 Mins" },
      { label: "School", time: "5 Mins" },
      { label: "Hospital", time: "5 Mins" },
      { label: "Railway Station", time: "20 Mins" },
      { label: "Expressway", time: "10 Mins" },
      { label: "Mall", time: "12 Mins" },
    ],
    address: "Keystone Niwa, Opp. Keystone Skyvillas, New Alkapuri, Vadodara",
    coordinates: { lat: 22.3259887, lng: 73.12589 },
    googleMapsLink: "https://maps.app.goo.gl/q7Qe3jmrayCdRUB97",
    mapEmbed:
      "https://maps.google.com/maps?q=Keystone+Niwa+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
    filterData: {
      category: "Residential",
      type: ["4bhk", "penthouse", "Apartments"],
      possession: "Newly Launched",
    },
  },
  {
    id: "keystone-clermont",
    srd: "67695709735daf277a539171", // KEYSTONE CLERMONT
    link: "/projects/keystone-clermont-4b2hk-apartments-in-vadodara/",
    status: "Under Construction",
    slug: "keystone-clermont-4b2hk-apartments-in-vadodara",
    title: "Keystone Clermont",
    logo: "/images/project-images/project-logos/Clermont-logo.png",
    category: "Residential",
    location: "75 Mtr Main Road, Bhayli",
    carpetArea: "CARPET - 3818 & 5583 Sq.Ft.",
    type: "4B2HK Apartments & 5B2HK Penthouses",
    price: "Price on Request",
    reraId: "PR/GJ/VADODARA/VADODARA/Others/RAA00869/160321",
    reraLink: "https://gujrera.gujarat.gov.in/",
    phone: "+91 7434 840 840",
    email: "clermont@vihav.com",
    tagline: "A Luxury beyond Imagination",
    description:
      "Explore the future of luxury living with Keystone Clermont, an upcoming real estate project by Vihav Group, offering stunning 4B2HK Apartments and 5B2HK Penthouses at the prime location of Vadodara. Whether you’re looking for an investment opportunity or a place to call home, Keystone Clermont combines modern design, world-class amenities, and unparalleled convenience.",
    vision: "100% Residential community which is Situated on 75m Ring Road touch",
    showcaseVideo: "/videos/niwa.mp4",
    heroImage: "/images/project-images/project-tiles/clermont.jpg",
    desktopHeroImage:
      "/images/project-images/hero-banner/desktop-banner/clermont.webp",
    mobileHeroImage:
      "/images/project-images/hero-banner/mobile-banner/clermont.webp",
    galleryImages: [
      "/images/project-images/projects/clermont-project-images/gallery/keystone-clermont-gallery (1).webp",
      "/images/project-images/projects/clermont-project-images/gallery/keystone-clermont-gallery (2).webp",
      "/images/project-images/projects/clermont-project-images/gallery/keystone-clermont-gallery (3).webp",
      "/images/project-images/projects/clermont-project-images/gallery/keystone-clermont-gallery (4).webp",
      "/images/project-images/projects/clermont-project-images/gallery/keystone-clermont-gallery (1).jpg",
      "/images/project-images/projects/clermont-project-images/gallery/keystone-clermont-gallery (2).jpg",
      "/images/project-images/projects/clermont-project-images/gallery/keystone-clermont-gallery (3).jpg",
      "/images/project-images/projects/clermont-project-images/gallery/keystone-clermont-gallery (4).jpg",
      "/images/project-images/projects/clermont-project-images/gallery/keystone-clermont-gallery (5).jpg",
      "/images/project-images/projects/clermont-project-images/gallery/keystone-clermont-gallery (6).jpg",
      "/images/project-images/projects/clermont-project-images/gallery/keystone-clermont-gallery (7).jpg",
      "/images/project-images/projects/clermont-project-images/gallery/keystone-clermont-gallery (8).jpg",
      "/images/project-images/projects/clermont-project-images/gallery/keystone-clermont-gallery (9).jpg",
      "/images/project-images/projects/clermont-project-images/gallery/keystone-clermont-gallery (10).jpg",
      "/images/project-images/projects/clermont-project-images/gallery/keystone-clermont-gallery (11).jpg",
      "/images/project-images/projects/clermont-project-images/gallery/keystone-clermont-gallery (12).jpg",
    ],
    features: [
      "Double Height Badminton Court",
      "Covered Swimming Pool",
      "Skating Rink",
      "Gazebo Seating",
    ],
    highlights: [
      {
        icon: "Shield",
        title: "Exclusivity",
        label: "19 Storey on 75 Mtr. Ring Road touch",
        description:
          "Only 2 towers in the entire project Low-Density Living",
      },
      {
        icon: "Trees",
        title: "Spacious",
        label: "180 Ft. distance",
        description:
          "Enhanced Privacy , Unobstructed Views feels like Stand Alone",
      },
      {
        icon: "MapPin",
        title: "Premium Floor Height",
        label: "11.6 Ft. Floor to Floor",
        description: "First project with generous height for premium living",
      },
      {
        icon: "MapPin",
        title: "Premium Community",
        label: "2 Flats per Floor",
        description: "Ensures maximum privacy & space",
      },
    ],
    amenitiesList: [
      { icon: "Dumbbell", label: "Double Height Badminton Court" },
      { icon: "Gamepad2", label: "Indoor Games Area (Pool/TT/Cards)" },
      { icon: "Waves", label: "Covered Swimming Pool with Deck" },
      { icon: "Video", label: "TV Lounge" },
      { icon: "Users", label: "Banquet Hall with Pantry" },
      { icon: "Trees", label: "Landscaped Garden" },
      { icon: "Coffee", label: "Gazebo Seating Area" },
      { icon: "Dumbbell", label: "Well Equipped Gymnasium" },
      { icon: "Play", label: "Skating Rink" },
      { icon: "Trees", label: "Toddlers Room" },
    ],
    specifications: [
      {
        category: "Structure",
        items: ["Earthquake Resistant RCC Frame", "High Quality block masonry"],
      },
      {
        category: "Flooring",
        items: [
          "Italian floor in Living/Kitchen/Dining",
          "Wooden Floor in Master Bedroom",
          "Full Body Vitrified Tiles elsewhere",
        ],
      },
      {
        category: "Kitchen",
        items: [
          "Premium Stone Platform with Quartz Sink",
          "Designer Ceramic Tiles Dado",
          "Wash Area with Natural Stone Floor",
        ],
      },
      {
        category: "Bathrooms",
        items: [
          "Designer Ceramic Tiles to Lintel Level",
          "Premium Counter for Basins",
          "HANSGROHE/TOTO/KOHLER Fittings",
        ],
      },
      {
        category: "Doors & Windows",
        items: [
          "Veneer Paneling on Main Door",
          "Veneered Flush Internal Doors",
          "High Quality Powder Coated Aluminum/UPVC Sliders",
        ],
      },
      {
        category: "Finishing",
        items: [
          "Internal Mala Plaster with Putty/Primer",
          "Exterior Texture Finish Paints",
        ],
      },
    ],
    connectivity: [
      { label: "Navrachana Uni", time: "Nearby" },
      { label: "75m Ring Road", time: "0 Mins" },
    ],
    address:
      "Near Navrachana University, 75mtr Ring Road, Bhayli, Vadodara, Gujarat, India.",
    coordinates: { lat: 22.2906636, lng: 73.1116671 },
    googleMapsLink: "https://maps.app.goo.gl/mz3qF5vJmggUhcLh6",
    mapEmbed:
      "https://maps.google.com/maps?q=Keystone+Clermont+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
    constructionImages: [
      "https://www.vihav.com/wp-content/uploads/compressed_clermont-site-update-7.webp",
      "https://www.vihav.com/wp-content/uploads/compressed_clermont-site-update-9.webp",
    ],
    filterData: {
      category: "Residential",
      type: ["4bhk", "5bhk", "penthouse", "Apartments"],
      possession: "Under construction",
    },
  },
  {
    id: "keystone-30",

    link: "https://keystone30.in/",
    status: "Under Construction",
    slug: "keystone-30",
    title: "Keystone 30",
    category: "Residential",
    location: "New Vastral, Ahmedabad",
    carpetArea: "PLOT AREA - 1592 to 2927 Sq.Ft.",
    type: "4 BHK SEAMLESS BUNGALOWS",
    price: "Price on Request",
    reraId: "PR/GJ/VADODARA/VADODARA/Others/RAA00001/010121",
    reraLink: "https://gujrera.gujarat.gov.in/",
    phone: "+91 88663 41272",
    email: "sales@vihav.com",
    description: "Ultra-luxurious 5 & 6 BHK residences for the elite.",
    vision: "BE-SPOKE BUNGALOWS, NR. SP RING ROAD.",
    heroImage: "/images/project-images/project-tiles/keystone-30.jpg",
    showcaseVideo: "/videos/niwa.mp4",
    galleryImages: ["/images/project-images/project-tiles/keystone-30.jpg"],
    features: ["Large Floor Plates", "Luxury Specs"],
    amenitiesList: [
      { icon: "Shield", label: "Security" },
      { icon: "Coffee", label: "Lounge" },
      { icon: "Dumbbell", label: "Gym" },
      { icon: "ArrowUpFromLine", label: "Private Lift" },
      { icon: "Car", label: "Ample Parking" },
      { icon: "Video", label: "CCTV" },
    ],
    specifications: [
      { category: "Flooring", items: ["Premium Marble", "Wooden Flooring"] },
      { category: "Kitchen", items: ["Modular Layout"] },
      { category: "Walls", items: ["POP Finish", "Premium Paint"] },
      { category: "Electric", items: ["Automation Ready"] },
    ],
    connectivity: [{ label: "New Alkapuri", time: "0 Mins" }],
    address: "New Alkapuri, Vadodara",
    coordinates: { lat: 22.318, lng: 73.15 },
    mapEmbed:
      "https://maps.google.com/maps?q=Keystone+30+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
    filterData: {
      category: "Residential",
      type: ["5bhk", "penthouse", "Apartments", "Bunglow"],
      possession: "Under construction",
    },
  },
  {
    id: "keystone-skyvillas-xl",
    srd: "6427e762ed23e951fbe0f9f4", // KEYSTONE SKYVILLAS XL
    link: "/projects/keystone-skyvillas-xl",
    status: "Under Construction",
    slug: "keystone-skyvillas-xl",
    title: "Keystone Skyvillas XL",
    logo: "/images/project-images/project-logos/keystone-skyvillas-xl-logo.webp",
    category: "Residential",
    location: "New Alkapuri, Gotri",
    carpetArea: "CARPET - 4200 Sq.Ft.",
    type: "5B2HK FLATS & 6B2HK PENTHOUSES",
    price: "Price on Request",
    reraId: "PR/GJ/VADODARA/VADODARA/Others/RAA00004/010121",
    reraLink: "https://gujrera.gujarat.gov.in/",
    phone: "+91 84900 77611",
    email: "keystoneskyvillasxl@vihav.com",
    tagline: "5B2HK Affluent Apartments | One Floor - Two units",
    description:
      "Keystone Skyvillas XL, where opulence meets architectural brilliance. Nestled in the heart of New Alkapuri, Vadodara’s most sought-after residential locale, this iconic address offers an exclusive collection of 5 BHK luxurious apartments, 6B2HK premium penthouses, and 5 BHK premium flats crafted for discerning homeowners.",
    vision: "Located in Posh neighbourhood, New Alkapuri",
    showcaseVideo: "/videos/niwa.mp4",
    heroImage: "/images/project-images/project-tiles/skyvillas-xl.jpg",
    desktopHeroImage:
      "/images/project-images/hero-banner/desktop-banner/skyvillas-xl.webp",
    mobileHeroImage:
      "/images/project-images/hero-banner/mobile-banner/skyvillas-xl.webp",
    galleryImages: [
      "/images/project-images/projects/xl-project-images/gallery/keystone-skyvillas-xl-gallery-image-1.webp",
      "/images/project-images/projects/xl-project-images/gallery/keystone-skyvillas-xl-gallery-image-2.webp",
      "/images/project-images/projects/xl-project-images/gallery/keystone-skyvillas-xl-gallery-image-3.webp",
      "/images/project-images/projects/xl-project-images/gallery/keystone-skyvillas-xl-gallery-image-4.webp",
      "/images/project-images/projects/xl-project-images/gallery/keystone-skyvillas-xl-gallery-image-5.webp",
      "/images/project-images/projects/xl-project-images/gallery/keystone-skyvillas-xl-gallery-image-6.webp",
      "/images/project-images/projects/xl-project-images/gallery/keystone-skyvillas-xl-gallery-image-7.webp",
      "/images/project-images/projects/xl-project-images/gallery/keystone-skyvillas-xl-gallery-image-8.webp",
      "/images/project-images/projects/xl-project-images/gallery/keystone-skyvillas-xl-gallery-image-9.webp",
      "/images/project-images/projects/xl-project-images/gallery/keystone-skyvillas-xl-gallery-image-10.webp",
      "/images/project-images/projects/xl-project-images/gallery/keystone-skyvillas-xl-gallery-image-11.webp",
      "/images/project-images/projects/xl-project-images/gallery/keystone-skyvillas-xl-gallery-image-13.webp",
      "/images/project-images/projects/xl-project-images/gallery/keystone-skyvillas-xl-gallery-image-14.webp",
      "/images/project-images/projects/xl-project-images/gallery/keystone-skyvillas-xl-gallery-image-15.webp",
      "/images/project-images/projects/xl-project-images/gallery/keystone-skyvillas-xl-gallery-image-16.webp",
      "/images/project-images/projects/xl-project-images/gallery/keystone-skyvillas-xl-gallery-image-17.webp",
      "/images/project-images/projects/xl-project-images/gallery/keystone-skyvillas-xl-gallery-image-18.webp",
      "/images/project-images/projects/xl-project-images/gallery/keystone-skyvillas-xl-gallery-image-19.webp",
      "/images/project-images/projects/xl-project-images/gallery/keystone-skyvillas-xl-gallery-image-20.webp",
      "/images/project-images/projects/xl-project-images/gallery/keystone-skyvillas-xl-gallery-image-21.webp",
      "/images/project-images/projects/xl-project-images/gallery/keystone-skyvillas-xl-gallery-image-22.webp",
      "/images/project-images/projects/xl-project-images/gallery/keystone-skyvillas-xl-gallery-image-23.webp",
      "/images/project-images/projects/xl-project-images/gallery/keystone-skyvillas-xl-gallery-image-24.webp",
    ],
    realPictureImages: [
      "/images/project-images/projects/xl-project-images/show-house/keystone-skyvillas-xl-real-pics-1.webp",
      "/images/project-images/projects/xl-project-images/show-house/keystone-skyvillas-xl-real-pics-2.webp",
      "/images/project-images/projects/xl-project-images/show-house/keystone-skyvillas-xl-real-pics-3.webp",
      "/images/project-images/projects/xl-project-images/show-house/keystone-skyvillas-xl-real-pics-4.webp",
      "/images/project-images/projects/xl-project-images/show-house/keystone-skyvillas-xl-real-pics-5.webp",
      "/images/project-images/projects/xl-project-images/show-house/keystone-skyvillas-xl-real-pics-6.webp",
      "/images/project-images/projects/xl-project-images/show-house/keystone-skyvillas-xl-real-pics-7.webp",
      "/images/project-images/projects/xl-project-images/show-house/keystone-skyvillas-xl-real-pics-8.webp",
      "/images/project-images/projects/xl-project-images/show-house/keystone-skyvillas-xl-real-pics-9.webp",
      "/images/project-images/projects/xl-project-images/show-house/keystone-skyvillas-xl-real-pics-10.webp",
      "/images/project-images/projects/xl-project-images/show-house/keystone-skyvillas-xl-real-pics-11.webp",
      "/images/project-images/projects/xl-project-images/show-house/keystone-skyvillas-xl-real-pics-12.webp",
      "/images/project-images/projects/xl-project-images/show-house/keystone-skyvillas-xl-real-pics-13.webp",
      "/images/project-images/projects/xl-project-images/show-house/keystone-skyvillas-xl-real-pics-1400.jpg",
    ],
    amenitiesImages: [
      "/images/project-images/projects/xl-project-images/amenities/Skyvillas-XL-Amenities-1.webp",
      "/images/project-images/projects/xl-project-images/amenities/Skyvillas-XL-Amenities-2.webp",
      "/images/project-images/projects/xl-project-images/amenities/Skyvillas-XL-Amenities-3.webp",
      "/images/project-images/projects/xl-project-images/amenities/Skyvillas-XL-Amenities-4.webp",
      "/images/project-images/projects/xl-project-images/amenities/Skyvillas-XL-Amenities-5.webp",
      "/images/project-images/projects/xl-project-images/amenities/Skyvillas-XL-Amenities-6.webp",
      "/images/project-images/projects/xl-project-images/amenities/Skyvillas-XL-Amenities-7.webp",
      "/images/project-images/projects/xl-project-images/amenities/Skyvillas-XL-Amenities-8.webp",
      "/images/project-images/projects/xl-project-images/amenities/Skyvillas-XL-Amenities-9.webp",
      "/images/project-images/projects/xl-project-images/amenities/Skyvillas-XL-Amenities-10.webp",
      "/images/project-images/projects/xl-project-images/amenities/Skyvillas-XL-Amenities-11.webp",
      "/images/project-images/projects/xl-project-images/amenities/Skyvillas-XL-Amenities-12.webp",
      "/images/project-images/projects/xl-project-images/amenities/Skyvillas-XL-Amenities-13.webp",
    ],
    features: [
      "30,000 Sq.Ft Amenities",
      "Only 2 Flats Per Floor",
      "Infinity Pool",
      "Personalized Lift",
    ],
    highlights: [
      {
        icon: "Maximize",
        title: "Exclusivity",
        label: "Exclusive Configuration & Privacy",
        description: "80000 sqft dedicated for only 48 families",
      },
      {
        icon: "Users",
        title: "Unmatched Luxury",
        label: "30000 Sq.Ft. area",
        description: "Common podium area for premium amenities ",
      },
      {
        icon: "ArrowUpFromLine",
        title: "Lifestyle",
        label: "5 Allotted Car Parking",
        description: "Ensuring convenience and excusivity",
      },
      {
        icon: "Trees",
        title: "Spacious Homes",
        label: "Vastu Compliant",
        description: "Vadodara's Largest Carpet Apartment with vastu compliance",
      },
    ],
    amenitiesList: [
      { icon: "Waves", label: "Infinity Swimming Pool" },
      { icon: "Waves", label: "Splash Pool" },
      { icon: "Dumbbell", label: "Double Height AC Badminton Court" },
      { icon: "Activity", label: "Double Height Squash Court" },
      { icon: "Video", label: "Home Theatre Room" },
      { icon: "BookOpen", label: "Library Room" },
      { icon: "Users", label: "Multipurpose Hall with Kitchen" },
      { icon: "Layout", label: "Conference Room" },
      { icon: "Coffee", label: "Deck Area" },
      { icon: "Trees", label: "Grass Paver Pathway" },
    ],
    specifications: [
      { category: "Structure", items: ["Earthquake Resistant RCC Frame"] },
      {
        category: "Flooring",
        items: [
          "Italian Flooring in Living/Dining/Kitchen",
          "Double Charged Vitrified in Rooms",
        ],
      },
      {
        category: "Kitchen",
        items: [
          "Premium Stone Platform with Quartz Sink",
          "Wash Area with Natural Stone",
        ],
      },
      {
        category: "Bathrooms",
        items: [
          "Designer Ceramic Tiles to Lintel Level",
          "Premium Stone Counters",
        ],
      },
      {
        category: "Doors",
        items: [
          "Main Door: Veneer Paneling",
          "Internal: Wooden Frame with Flush Doors",
        ],
      },
      {
        category: "Windows",
        items: ["High Quality Powder Coated Heavy Aluminum with Deu Glass"],
      },
    ],
    connectivity: [
      { label: "Navrachana Uni", time: "2 Mins" },
      { label: "Airport", time: "25 Mins" },
      { label: "School", time: "5 Mins" },
      { label: "Hospital", time: "5 Mins" },
      { label: "Railway Station", time: "20 Mins" },
      { label: "Expressway", time: "10 Mins" },
      { label: "Mall", time: "12 Mins" },
    ],
    address:
      "Opp Greenwoods Bungalows, Near Zydex, Gotri, New Alkapuri, Vadodara, Gujarat, India.",
    coordinates: { lat: 22.3262929, lng: 73.1216785 },
    googleMapsLink: "https://maps.app.goo.gl/1oYuPeMCJmP46XMCA",
    mapEmbed:
      "https://maps.google.com/maps?q=Keystone+Skyvillas+XL+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
    filterData: {
      category: "Residential",
      type: ["5bhk", "6bhk", "penthouse", "Apartments"],
      possession: "Under construction",
    },
  },
  {
    id: "keystone-48",
    srd: "62a6fd72ed23e916764150f6", // KEYSTONE 48
    status: "Under Construction",
    slug: "keystone-48",
    title: "Keystone 48",
    logo: "/images/project-images/project-logos/keystone-48-logo.svg",
    category: "RESI-COMM",
    customBadge: "Only 1 Unit Left",
    location: "Sevasi, Vadodara",
    carpetArea: "CARPET - 2700 TO 3140 Sq.Ft.",
    type: "4B2HK FLATS & 5B2HK PENTHOUSES",
    price: "Price on Request",
    phone: "+91 74349 62962",
    email: "keystone48@vihav.com",
    description: "Seamless bungalows for a grounded lifestyle.",
    vision: "ONLY 36 A-CLASS APARTMENT",
    heroImage: "/images/project-images/project-tiles/keystone-48.jpg",
    desktopHeroImage:
      "/images/project-images/hero-banner/desktop-banner/keystone-48.webp",
    mobileHeroImage:
      "/images/project-images/hero-banner/mobile-banner/keystone-48.webp",
    galleryImages: [
      "/images/project-images/projects/ks48-project-images/gallery/keystone-48-images (1).webp",
      "/images/project-images/projects/ks48-project-images/gallery/keystone-48-images (2).webp",
      "/images/project-images/projects/ks48-project-images/gallery/keystone-48-images (3).webp",
      "/images/project-images/projects/ks48-project-images/gallery/keystone-48-images (4).webp",
      "/images/project-images/projects/ks48-project-images/gallery/keystone-48-images (5).webp",
      "/images/project-images/projects/ks48-project-images/gallery/keystone-48-images (6).webp",
      "/images/project-images/projects/ks48-project-images/gallery/keystone-48-images (7).webp",
      "/images/project-images/projects/ks48-project-images/gallery/keystone-48-images (8).webp",
      "/images/project-images/projects/ks48-project-images/gallery/keystone-48-images (9).webp",
      "/images/project-images/projects/ks48-project-images/gallery/keystone-48-images (10).webp",
      "/images/project-images/projects/ks48-project-images/gallery/keystone-48-images (11).webp",
      "/images/project-images/projects/ks48-project-images/gallery/keystone-48-images (12).webp",
      "/images/project-images/projects/ks48-project-images/gallery/keystone-48-images (13).webp",
      "/images/project-images/projects/ks48-project-images/gallery/keystone-48-images (14).webp",
    ],
    realPictureImages: [
      "/images/project-images/projects/ks48-project-images/show-house/show-house-images (1).webp",
      "/images/project-images/projects/ks48-project-images/show-house/show-house-images (2).webp",
      "/images/project-images/projects/ks48-project-images/show-house/show-house-images (3).webp",
      "/images/project-images/projects/ks48-project-images/show-house/show-house-images (4).webp",
      "/images/project-images/projects/ks48-project-images/show-house/show-house-images (5).webp",
      "/images/project-images/projects/ks48-project-images/show-house/show-house-images (6).webp",
      "/images/project-images/projects/ks48-project-images/show-house/show-house-images (7).webp",
      "/images/project-images/projects/ks48-project-images/show-house/show-house-images (8).webp",
      "/images/project-images/projects/ks48-project-images/show-house/show-house-images (9).webp",
      "/images/project-images/projects/ks48-project-images/show-house/show-house-images (10).webp",
      "/images/project-images/projects/ks48-project-images/show-house/show-house-images (11).webp",
      "/images/project-images/projects/ks48-project-images/show-house/show-house-images (12).webp",
      "/images/project-images/projects/ks48-project-images/show-house/show-house-images (13).webp",
      "/images/project-images/projects/ks48-project-images/show-house/show-house-images (14).webp",
      "/images/project-images/projects/ks48-project-images/show-house/show-house-images (15).webp",
      "/images/project-images/projects/ks48-project-images/show-house/show-house-images (16).webp",
      "/images/project-images/projects/ks48-project-images/show-house/show-house-images (17).webp",
      "/images/project-images/projects/ks48-project-images/show-house/show-house-images (18).webp",
    ],
    features: ["Own Land", "Gated Security"],
    amenitiesList: [
      { icon: "Shield", label: "Security" },
      { icon: "Trees", label: "Common Plot" },
    ],
    specifications: [{ category: "Flooring", items: ["Vitrified Tiles"] }],
    connectivity: [{ label: "Sevasi", time: "2 Mins" }],
    address: "Sevasi, Vadodara",
    coordinates: { lat: 22.2925224, lng: 73.1280089 },
    googleMapsLink: "https://maps.app.goo.gl/kA3gQCxFgQA83ysHA",
    mapEmbed:
      "https://maps.google.com/maps?q=Keystone+48+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
    filterData: {
      category: ["Residential", "Commercial"],
      type: ["4bhk", "5bhk", "Apartments", "showrooms"],
      possession: "Under construction",
    },
  },
  {
    id: "vihav-cbd-res",
    srd: "631702f38eb6d855f3ef3505", // VIHAV CBD
    link: "/projects/cbd",
    launchYear: "2022",
    brochureLink:
      "https://drive.google.com/file/d/10dM1tq9y9lGhpbkU2zy3DB5afBs_MQP0/view?usp=drive_link",
    status: "Under Construction",
    progress: 75,
    slug: "cbd",
    title: "CBD Residential",
    logo: "/images/project-images/project-logos/cbd-logo.svg",
    tagline: "ALL IN ONE - LOCATION, LIFESTYLE & LUXURY",
    category: "Residential",
    location: "Bhayli Cross Road, Vadodara",
    carpetArea: "CARPET - 1830 TO 2934 Sq.Ft.",
    type: "4BHK FLATS & 5B2HK PENTHOUSES",
    price: "1.31 Cr",
    phone: "+91 7435 894 894",
    email: "cbd@vihav.com",
    description:
      "Vihav CBD (Central Business District) stands as an iconic residential and commercial development in the heart of Bhayli, offering an exclusive collection of 4 BHK luxurious flats and 5B2HK Penthouses. Thoughtfully designed for those who seek elegance, space, and a premium lifestyle.",
    vision: "HEART OF BHAYLI",
    heroImage: "/images/project-images/project-tiles/vihav-cbd.jpg",
    desktopHeroImage:
      "/images/project-images/hero-banner/desktop-banner/cbd-banner.webp",
    mobileHeroImage:
      "/images/project-images/hero-banner/mobile-banner/cbd-residential.webp",
    galleryImages: [
      "/images/project-images/projects/cbd-res/gallery/vihav-cbd-gallery (1).webp",
      "/images/project-images/projects/cbd-res/gallery/vihav-cbd-gallery (2).webp",
      "/images/project-images/projects/cbd-res/gallery/vihav-cbd-gallery (3).webp",
      "/images/project-images/projects/cbd-res/gallery/vihav-cbd-gallery (4).webp",
      "/images/project-images/projects/cbd-res/gallery/vihav-cbd-gallery (5).webp",
      "/images/project-images/projects/cbd-res/gallery/vihav-cbd-gallery (6).webp",
      "/images/project-images/projects/cbd-res/gallery/vihav-cbd-gallery (7).webp",
      "/images/project-images/projects/cbd-res/gallery/vihav-cbd-gallery (8).webp",
      "/images/project-images/projects/cbd-res/gallery/vihav-cbd-gallery (9).webp",
      "/images/project-images/projects/cbd-res/gallery/vihav-cbd-gallery (10).webp",
      "/images/project-images/projects/cbd-res/gallery/vihav-cbd-gallery (11).webp",
    ],
    realPictureImages: [
      "/images/project-images/projects/cbd-res/real-pictures/vihav-cbd-real-pictures (1).jpg",
      "/images/project-images/projects/cbd-res/real-pictures/vihav-cbd-real-pictures (2).jpg",
      "/images/project-images/projects/cbd-res/real-pictures/vihav-cbd-real-pictures (3).jpg",
      "/images/project-images/projects/cbd-res/real-pictures/vihav-cbd-real-pictures (4).jpg",
      "/images/project-images/projects/cbd-res/real-pictures/vihav-cbd-real-pictures (5).jpg",
      "/images/project-images/projects/cbd-res/real-pictures/vihav-cbd-real-pictures (6).jpg",
      "/images/project-images/projects/cbd-res/real-pictures/vihav-cbd-real-pictures (7).jpg",
      "/images/project-images/projects/cbd-res/real-pictures/vihav-cbd-real-pictures (8).jpg",
      "/images/project-images/projects/cbd-res/real-pictures/vihav-cbd-real-pictures (1).jpg",
      "/images/project-images/projects/cbd-res/real-pictures/vihav-cbd-real-pictures (2).jpg",
      "/images/project-images/projects/cbd-res/real-pictures/vihav-cbd-real-pictures (3).jpg",
    ],
    amenitiesImages: [
      "/images/project-images/projects/cbd-res/amenities/cbd-amenities-dance-club-3.webp",
      "/images/project-images/projects/cbd-res/amenities/cbd-amenities-dance-club.webp",
      "/images/project-images/projects/cbd-res/amenities/cbd-amenities-dance-club2.webp",
      "/images/project-images/projects/cbd-res/amenities/cbd-amenities-game-zone-2.webp",
      "/images/project-images/projects/cbd-res/amenities/cbd-amenities-game-zone-3.webp",
      "/images/project-images/projects/cbd-res/amenities/cbd-amenities-game-zone.webp",
      "/images/project-images/projects/cbd-res/amenities/cbd-amenities-gym-2.webp",
      "/images/project-images/projects/cbd-res/amenities/cbd-amenities-gym-3.webp",
      "/images/project-images/projects/cbd-res/amenities/cbd-amenities-gym-4.webp",
      "/images/project-images/projects/cbd-res/amenities/cbd-amenities-gym.webp",
      "/images/project-images/projects/cbd-res/amenities/cbd-amenities-pool-table.webp",
      "/images/project-images/projects/cbd-res/amenities/cbd-amenities-theatre.webp",
      "/images/project-images/projects/cbd-res/amenities/cbd-amenities-theatre2.webp",
      "/images/project-images/projects/cbd-res/amenities/cbd-amenities.webp",
      "/images/project-images/projects/cbd-res/amenities/cbd-amenities2.webp",
    ],
    constructionImages: [
      "https://www.vihav.com/wp-content/uploads/cbd-project-status-update-images-1.webp",
      "https://www.vihav.com/wp-content/uploads/cbd-project-status-update-images-2.webp",
      "https://www.vihav.com/wp-content/uploads/cbd-project-status-update-images-4.webp",
      "https://www.vihav.com/wp-content/uploads/cbd-project-status-update-images-3.webp",
    ],
    floorPlans: [
      {
        id: "fp-1",
        title: "Ground Floor Plan",
        image:
          "https://www.vihav.com/wp-content/uploads/Vihav_CBD_Residential_Ground_Floor_Plan-scaled.webp",
        type: "Plan",
      },
      {
        id: "fp-2",
        title: "Typical Unit Plan",
        image:
          "https://www.vihav.com/wp-content/uploads/Vihav_CBD_Residential_Typical_Unit_Plan-scaled.webp",
        type: "Plan",
      },
      {
        id: "fp-3",
        title: "First Floor Plan",
        image:
          "https://www.vihav.com/wp-content/uploads/Vihav_CBD_Residential_First_Floor_Plan-scaled.webp",
        type: "Plan",
      },
      {
        id: "fp-4",
        title: "4BHK Typical Unit",
        image:
          "https://www.vihav.com/wp-content/uploads/Vihav_CBD_4BHK_Typical_Unit_Plan-scaled.webp",
        type: "4BHK",
      },
      {
        id: "fp-5",
        title: "5BHK Penthouse Plan",
        image:
          "https://www.vihav.com/wp-content/uploads/Vihav_CBD_5BHK_Penthouse-Upper-Lower-Plan-scaled.webp",
        type: "Penthouse",
      },
    ],
    features: [
      "Prime Junction",
      "Mixed Use",
      "Extensive Amenities",
      "Iconic Landmark",
    ],
    highlights: [
      {
        icon: "MapPin",
        title: "Prime Location",
        label: "Bhayli 30 Mtr & 24 Mtr Cross Road",
        description:
          "Located at the hearty of bhayli with seamless connectivity",
      },
      {
        icon: "Building",
        title: "Premium Community",
        label: "All 4BHK Apartments",
        description:
          "Two Towers with only 88 Units ",
      },
      {
        icon: "Trees",
        title: "All Side Open",
        label: "No Future Obstruction",
        description: "Enhanced Privacy, Unobstructed Views feels like Stand Alone",
      },
      {
        icon: "Trees",
        title: "Class Amenities",
        label: "More than 15+ Premium Amenities",
        description: "Carefully curated lifestyle amenities catering to all age groups.",
      },
    ],
    amenitiesList: [
      { icon: "Trees", label: "Lush Green Lawns" },
      { icon: "Users", label: "Elegant Banquet Hall" },
      { icon: "Gamepad2", label: "Indoor Games Room" },
      { icon: "Dumbbell", label: "State-of-the-art Gym" },
      { icon: "Coffee", label: "Premium Lounge" },
      { icon: "Waves", label: "Large Swimming Pool" },
      { icon: "Gamepad2", label: "Kids Play Area" },
    ],
    specifications: [
      {
        category: "Structure",
        items: [
          "Earthquake Resistant RCC Frame",
          "Designed by Approved Structural Engineer",
        ],
      },
      {
        category: "Kitchen",
        items: [
          "Premium Stone Platform",
          "Quartz Sink",
          "Designer Tiles to 2ft",
        ],
      },
      {
        category: "Flooring",
        items: ["800x800 Vitrified Tiles", "Anti-skid in Balcony/Wash"],
      },
      {
        category: "Doors & Windows",
        items: [
          "Veneer Finish Main Door",
          "Laminated Flush Internal Doors",
          "Aluminum Sliding Windows",
        ],
      },
      {
        category: "Finishes",
        items: [
          "2 Coat Putty Interior",
          "Texture + Weather Resistant Paint Exterior",
        ],
      },
      {
        category: "Electrical",
        items: ["Concealed Copper Wiring", "Modular Switches"],
      },
    ],
    connectivity: [
      { label: "Navrachana Uni", time: "2 Mins" },
      { label: "Airport", time: "25 Mins" },
      { label: "School", time: "5 Mins" },
      { label: "Hospital", time: "5 Mins" },
      { label: "Railway Station", time: "20 Mins" },
      { label: "Expressway", time: "10 Mins" },
      { label: "Mall", time: "12 Mins" },
    ],
    address:
      "Beside Rajpath, Nr Bright Day School, Vasna Bhayli Road, Vadodara",
    coordinates: { lat: 22.2902491, lng: 73.131856 },
    googleMapsLink: "https://maps.app.goo.gl/m1dFRwuheiMF1xDG6",
    mapTitle: "Vihav CBD",
    mapButtonText: "CBD",
    filterData: {
      category: "Residential",
      transactionType: ["Buy", "Lease", "Rent"],
      type: ["Invest", "End Use", "Pre-lease"],
      possession: "Under construction",
    },
  },
  {
    id: "vihav-spring-woods",
    srd: "633d351f4443ae66d638fd87", // VIHAV SPRINGWOODS
    link: "/projects/spring-woods/",
    status: "Ready to Move",
    slug: "spring-woods",
    title: "Vihav Spring Woods",
    logo: "/images/project-images/project-logos/vihav-spring_woods-logo.svg",
    category: "Residential",
    location: "Tarsali, Vadodara",
    carpetArea: "PLOT AREA - 770 to 1500 Sq.Ft.",
    type: "3 & 4 BHK PREMIUM DUPLEX",
    price: "Price on Request",
    reraId: "PR/GJ/VADODARA/VADODARA/Others/RAA00003/010121",
    reraLink: "https://gujrera.gujarat.gov.in/",
    phone: "+91 81402 03377",
    email: "springwoods@vihav.com",
    tagline: "Premium 3 & 4 BHK Duplex Villas",
    description:
      "Welcome to Vihav Spring Woods, a thoughtfully planned residential project offering spacious 3 BHK duplex homes in Tarsali, one of the most connected and fast-developing localities in Vadodara. Located close to Makarpura, Manjalpur, Danteshwar, Ghanghretia, and Chikhodara, this gated community provides the ideal setting for families who desire space, comfort, and convenience all in one place.",
    vision: "ONLY 36 PREMIUM BUNGALOWS",
    heroImage: "/images/project-images/project-tiles/springwoods.jpg",
    desktopHeroImage:
      "/images/project-images/hero-banner/desktop-banner/springwoods.webp",
    mobileHeroImage:
      "/images/project-images/hero-banner/mobile-banner/springwoods.webp",
    galleryImages: [
      "/images/project-images/projects/springwoods-project-images/gallery/vihav-spring-soods-gallery-image-1.webp",
      "/images/project-images/projects/springwoods-project-images/gallery/vihav-spring-soods-gallery-image-2.webp",
      "/images/project-images/projects/springwoods-project-images/gallery/vihav-spring-soods-gallery-image-3.webp",
      "/images/project-images/projects/springwoods-project-images/gallery/vihav-spring-soods-gallery-image-4.webp",
      "/images/project-images/projects/springwoods-project-images/gallery/vihav-spring-soods-gallery-image-5.webp",
      "/images/project-images/projects/springwoods-project-images/gallery/vihav-spring-soods-gallery-image-6.webp",
    ],
    constructionImages: [
      "/images/project-images/projects/springwoods-project-images/status-images/SpringWoods-Status-Image-18-11-24-011-1024x768.webp",
      "/images/project-images/projects/springwoods-project-images/status-images/SpringWoods-Status-Image-18-11-24-012-1024x768.webp",
      "/images/project-images/projects/springwoods-project-images/status-images/SpringWoods-Status-Image-18-11-24-013.webp",
      "/images/project-images/projects/springwoods-project-images/status-images/SpringWoods-Status-Image-18-11-24-016-1024x768.webp",
      "/images/project-images/projects/springwoods-project-images/status-images/SpringWoods-Status-Image-18-11-24-017-1024x768.webp",
      "/images/project-images/projects/springwoods-project-images/status-images/SpringWoods-Status-Image-18-11-24-020-1024x768.webp",
      "/images/project-images/projects/springwoods-project-images/status-images/SpringWoods-Status-Image-18-11-24-022-1024x768.webp",
      "/images/project-images/projects/springwoods-project-images/status-images/SpringWoods-Status-Image-18-11-24-023-1024x768.webp",
      "/images/project-images/projects/springwoods-project-images/status-images/SpringWoods-Status-Image-18-11-24-024-1024x768.webp",
    ],
    realPictureImages: [
      "/images/project-images/projects/springwoods-project-images/show-house/vihav-spring-soods-real-image-1.webp",
      "/images/project-images/projects/springwoods-project-images/show-house/vihav-spring-soods-real-image-2.webp",
      "/images/project-images/projects/springwoods-project-images/show-house/vihav-spring-soods-real-image-3.webp",
      "/images/project-images/projects/springwoods-project-images/show-house/vihav-spring-soods-real-image-4.webp",
      "/images/project-images/projects/springwoods-project-images/show-house/vihav-spring-soods-real-image-5.webp",
      "/images/project-images/projects/springwoods-project-images/show-house/vihav-spring-soods-real-image-6.webp",
      "/images/project-images/projects/springwoods-project-images/show-house/vihav-spring-soods-real-image-7.webp",
      "/images/project-images/projects/springwoods-project-images/show-house/vihav-spring-soods-real-image-8.webp",
      "/images/project-images/projects/springwoods-project-images/show-house/vihav-spring-soods-real-image-9.webp",
      "/images/project-images/projects/springwoods-project-images/show-house/vihav-spring-soods-real-image-10.webp",
      "/images/project-images/projects/springwoods-project-images/show-house/vihav-spring-soods-real-image-11.webp",
      "/images/project-images/projects/springwoods-project-images/show-house/vihav-spring-soods-real-image-12.webp",
      "/images/project-images/projects/springwoods-project-images/show-house/vihav-spring-soods-real-image-13.webp",
    ],
    floorPlans: [
      {
        id: "fp-layout",
        title: "Project Layout",
        image:
          "/images/project-images/projects/springwoods-project-images/floor-plans/vihav-spring-soods-layout.webp",
        type: "Plan",
      },
      {
        id: "fp-club",
        title: "Club House Layout",
        image:
          "/images/project-images/projects/springwoods-project-images/floor-plans/vihav-spring-soods-club-house-layout.webp",
        type: "Plan",
      },
      {
        id: "fp-type-a",
        title: "Type A Unit Plan",
        image:
          "/images/project-images/projects/springwoods-project-images/floor-plans/vihav-spring-soods-layout-type_a.webp",
        type: "Plan",
      },
      {
        id: "fp-type-b",
        title: "Type B Unit Plan",
        image:
          "/images/project-images/projects/springwoods-project-images/floor-plans/vihav-spring-soods-layout-type_b.webp",
        type: "Plan",
      },
      {
        id: "fp-type-c",
        title: "Type C Unit Plan",
        image:
          "/images/project-images/projects/springwoods-project-images/floor-plans/vihav-spring-soods-layout-type_c.webp",
        type: "Plan",
      },
      {
        id: "fp-type-d",
        title: "Type D Unit Plan",
        image:
          "/images/project-images/projects/springwoods-project-images/floor-plans/vihav-spring-soods-layout-type_d.webp",
        type: "Plan",
      },
      {
        id: "fp-type-e",
        title: "Type E Unit Plan",
        image:
          "/images/project-images/projects/springwoods-project-images/floor-plans/vihav-spring-soods-layout-type_e.webp",
        type: "Plan",
      },
      {
        id: "fp-type-f",
        title: "Type F Unit Plan",
        image:
          "/images/project-images/projects/springwoods-project-images/floor-plans/vihav-spring-soods-layout-type_f.webp",
        type: "Plan",
      },
    ],
    features: ["Duplex Layouts", "Clubhouse", "Stem Room", "Swimming Pool"],
    highlights: [
      {
        icon: "MapPin",
        title: "Growing Hub",
        label: "Tarsali",
        description:
          "One of the most promising areas with excellent infrastructure.",
      },
      {
        icon: "TrendingUp",
        title: "Smart Investment",
        label: "Long-term Value",
        description:
          "Built to add long-term value in a fast-developing locality.",
      },
      {
        icon: "Navigation",
        title: "Connected Living",
        label: "Strategic Spot",
        description: "Close to Makarpura, Manjalpur, and Danteshwar.",
      },
    ],
    amenitiesList: [
      { icon: "Coffee", label: "Club House With Hall" },
      { icon: "Waves", label: "Swimming Pool With Deck" },
      { icon: "Dumbbell", label: "Air Conditioned Gymnasium" },
      { icon: "Gamepad2", label: "Indoor Games" },
      { icon: "Dumbbell", label: "Yoga Zone" },
      { icon: "Coffee", label: "Outdoor Sitting Area" },
      { icon: "CloudRain", label: "Steam Room" },
      { icon: "Shield", label: "Security Cabin & CCTV" },
    ],
    specifications: [
      { category: "Structure", items: ["As per Architect Design"] },
      {
        category: "Wall Finish",
        items: [
          "Inside Smooth Plaster with Putty",
          "Exterior Weather Shield Paint",
        ],
      },
      { category: "Flooring", items: ["Vitrified Flooring in all rooms"] },
      {
        category: "Kitchen",
        items: ["Granite platform with SS Sink", "Ceramic tiles up to 4ft"],
      },
      {
        category: "Toilets",
        items: [
          "Designer wall tiles up to 7ft",
          "Anti-skid flooring",
          "Hot water line",
        ],
      },
      {
        category: "Electrical",
        items: ["Modular switches", "AC Points in bedrooms"],
      },
      {
        category: "Doors & Windows",
        items: ["Decorative Main Door", "Aluminum Section Windows"],
      },
    ],
    connectivity: [{ label: "Manjalpur", time: "Nearby" }],
    address:
      "Besides Pratham Paradise, Near Kamdhenu Residency, Tarsali, Vadodara, Gujarat, India.",
    coordinates: { lat: 22.2926016, lng: 73.0893831 },
    googleMapsLink: "https://maps.app.goo.gl/btNtHsGiJ6xD9dSi9",
    mapEmbed:
      "https://maps.google.com/maps?q=Vihav+Spring+Woods+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
    filterData: {
      category: "Residential",
      type: ["4bhk", "5bhk", "penthouse", "Apartments", "Bunglow"],
      possession: "Ready to Move",
    },
  },
  {
    id: "vihav-elinor",
    srd: "62a42c758eb6d85bf4fb8729", // VIHAV ELINOR
    link: "/projects/elinor",
    status: "Ready to Move",
    slug: "elinor",
    title: "Vihav Elinor",
    logo: "/images/project-images/project-logos/vihav-elinor-logo.png",
    category: "Residential",
    location: "New Alkapuri, Gotri",
    carpetArea: "SBA : 2134 TO 2898 Sq.Ft",
    type: "3 & 4BHK Luxurious Flats\n4 & 5BHK Penthouses",
    price: "82.51 Lacs",
    reraId: "PR/GJ/VADODARA/VADODARA/Others/RAA00002/010121",
    reraLink: "https://gujrera.gujarat.gov.in/",
    phone: "+91 95046 36636",
    email: "elinor@vihav.com",
    tagline: "Luxurious 3, 4 BHK Flats & 5 BHK Penthouses",
    description:
      "Vihav Elinor is an exclusive residential project offering spacious 3 BHK and 4 BHK flats and 5 BHK penthouses in New Alkapuri, Gotri, Vadodara. Nestled in one of the city’s most prestigious and peaceful neighborhoods, Vihav Elinor is designed for those who seek refined living with space, elegance, and comfort at its core.",
    vision: "BETWEEN 2 TOWERS 100FT DISTANCE",
    heroImage: "/images/project-images/project-tiles/vihav-elinor.jpg",
    desktopHeroImage:
      "/images/project-images/hero-banner/desktop-banner/elinor.webp",
    mobileHeroImage:
      "/images/project-images/hero-banner/mobile-banner/elinor.webp",
    galleryImages: [
      "/images/project-images/projects/elinor-project-images/gallery/vihav-elinor-gallery-image-1.webp",
      "/images/project-images/projects/elinor-project-images/gallery/vihav-elinor-gallery-image-2.webp",
      "/images/project-images/projects/elinor-project-images/gallery/vihav-elinor-gallery-image-3.webp",
      "/images/project-images/projects/elinor-project-images/gallery/vihav-elinor-gallery-image-4.webp",
      "/images/project-images/projects/elinor-project-images/gallery/vihav-elinor-gallery-image-5.webp",
      "/images/project-images/projects/elinor-project-images/gallery/vihav-elinor-gallery-image-6.webp",
      "/images/project-images/projects/elinor-project-images/gallery/vihav-elinor-gallery-image-8.webp",
      "/images/project-images/projects/elinor-project-images/gallery/vihav-elinor-gallery-image-9.webp",
    ],
    showHouse: {
      "3BHK": [
        "/images/project-images/projects/elinor-project-images/show-house/3bhk/3bhk-sample-house-image-1.webp",
        "/images/project-images/projects/elinor-project-images/show-house/3bhk/3bhk-sample-house-image-2.webp",
        "/images/project-images/projects/elinor-project-images/show-house/3bhk/3bhk-sample-house-image-3.webp",
        "/images/project-images/projects/elinor-project-images/show-house/3bhk/3bhk-sample-house-image-4.webp",
        "/images/project-images/projects/elinor-project-images/show-house/3bhk/3bhk-sample-house-image-5.webp",
        "/images/project-images/projects/elinor-project-images/show-house/3bhk/3bhk-sample-house-image-6.webp",
        "/images/project-images/projects/elinor-project-images/show-house/3bhk/3bhk-sample-house-image-7.webp",
        "/images/project-images/projects/elinor-project-images/show-house/3bhk/3bhk-sample-house-image-8.webp",
        "/images/project-images/projects/elinor-project-images/show-house/3bhk/3bhk-sample-house-image-9.webp",
      ],
      "4BHK": [
        "/images/project-images/projects/elinor-project-images/show-house/4bhk/elinor-real-4bhk-real-1.webp",
        "/images/project-images/projects/elinor-project-images/show-house/4bhk/elinor-real-4bhk-real-2.webp",
        "/images/project-images/projects/elinor-project-images/show-house/4bhk/elinor-real-4bhk-real-3.webp",
        "/images/project-images/projects/elinor-project-images/show-house/4bhk/elinor-real-4bhk-real-4.webp",
        "/images/project-images/projects/elinor-project-images/show-house/4bhk/elinor-real-4bhk-real-5.webp",
        "/images/project-images/projects/elinor-project-images/show-house/4bhk/elinor-real-4bhk-real-6.webp",
        "/images/project-images/projects/elinor-project-images/show-house/4bhk/elinor-real-4bhk-real-7.webp",
        "/images/project-images/projects/elinor-project-images/show-house/4bhk/elinor-real-4bhk-real-8.webp",
        "/images/project-images/projects/elinor-project-images/show-house/4bhk/elinor-real-4bhk-real-9.webp",
        "/images/project-images/projects/elinor-project-images/show-house/4bhk/elinor-real-4bhk-real-10.webp",
        "/images/project-images/projects/elinor-project-images/show-house/4bhk/elinor-real-4bhk-real-11.webp",
      ],
    },
    floorPlans: [
      {
        id: "fp-typical",
        title: "Typical Floor Plan",
        image:
          "/images/project-images/projects/elinor-project-images/floor-plans/vihav-elinor-typical_floor_plan-scaled.webp",
        type: "Plan",
      },
      {
        id: "fp-ground",
        title: "Ground Floor Plan",
        image:
          "/images/project-images/projects/elinor-project-images/floor-plans/vihav-elinor-ground_floor_plan-scaled.webp",
        type: "Plan",
      },
      {
        id: "fp-first",
        title: "First Floor Plan",
        image:
          "/images/project-images/projects/elinor-project-images/floor-plans/vihav-elinor-first_floor_plan-scaled.webp",
        type: "Plan",
      },
      {
        id: "fp-34bhk",
        title: "3 & 4 BHK Unit Plan",
        image:
          "/images/project-images/projects/elinor-project-images/floor-plans/vihav-elinor-3_4bhk_floor_plan-scaled.webp",
        type: "Plan",
      },
      {
        id: "fp-5bhk",
        title: "5BHK Penthouse Plan",
        image:
          "/images/project-images/projects/elinor-project-images/floor-plans/vihav-elinor-5bhk_penthouse_plans-scaled.webp",
        type: "Penthouse",
      },
      {
        id: "fp-4bhk-ph",
        title: "4BHK Penthouse Plan",
        image:
          "/images/project-images/projects/elinor-project-images/floor-plans/vihav-elinor-4bhk_penthouse_plans-scaled.webp",
        type: "Penthouse",
      },
    ],
    features: ["100ft Distance Between Towers", "Squash Room", "Swimming Pool"],
    highlights: [
      {
        icon: "Shield",
        title: "Refined Living",
        label: "Elegance & Comfort",
        description:
          "Designed for those who seek refined living with space and elegance.",
      },
      {
        icon: "Maximize",
        title: "Spacious Layouts",
        label: "Large Balconies",
        description:
          "Thoughtfully laid out to maximize space with large balconies.",
      },
      {
        icon: "MapPin",
        title: "Prime Neighborhood",
        label: "New Alkapuri",
        description:
          "Nestled in one of the city’s most prestigious neighborhoods.",
      },
    ],
    amenitiesList: [
      { icon: "Dumbbell", label: "Gymnasium" },
      { icon: "Dumbbell", label: "Yoga Room" },
      { icon: "Activity", label: "Squash Room" },
      { icon: "Waves", label: "Swimming Pool with Gazebo" },
      { icon: "Coffee", label: "Sitting Deck with Water Body" },
      { icon: "Check", label: "Huge Landscaped Garden" },
      { icon: "Video", label: "TV Lounge / Theatre" },
      { icon: "Gamepad2", label: "Indoor Games" },
    ],
    valueAdditions: [
      "Prime Location of New Alkapuri with Premium Residential Surrounding",
      "Huge Wide Space between Two Towers for Unmatched Premium Living Experience",
      "2 Allotted Car Park Per Flat & 3 Allotted Car Park Per Penthouse",
      "Common Water Softening Plant",
      "Power Backup for Common Area",
      "Adequate Fire Safety System as per Government Norms",
      "Rain Water Harvesting",
    ],
    specifications: [
      { category: "Structure", items: ["Earthquake Resistance Structure"] },
      {
        category: "Kitchen",
        items: [
          "Premium Stone Platform with Quartz Sink",
          "Wash Area with Natural Stone Floor",
        ],
      },
      {
        category: "Electrical",
        items: ["Concealed Copper ISI Wire", "Modular Switches"],
      },
      {
        category: "Bath",
        items: ["Designer Bathrooms", "Kohler or equivalent Fittings"],
      },
      {
        category: "Flooring",
        items: ["800x800 Vitrified flooring", "Anti-skid in Balcony"],
      },
      {
        category: "Wall Finish",
        items: ["Interior: 2 Coat Putty", "Exterior: Texture Paint"],
      },
      {
        category: "Doors",
        items: [
          "Main Door: Veneer Paneling",
          "Internal: Laminated Flush Doors",
        ],
      },
      {
        category: "Windows",
        items: ["Aluminum Sliding Windows with Mosquito Net"],
      },
    ],
    connectivity: [{ label: "Bhayli", time: "0 Mins" }],
    address:
      "Behind Narayan Garden, Opp. Keystone Skyvillas, New Alkapuri, Gotri, Vadodara, Gujarat, India.",
    coordinates: { lat: 22.3311226, lng: 73.1270219 },
    googleMapsLink: "https://maps.app.goo.gl/13KVSfMHAUrVxKQe6",
    mapEmbed:
      "https://maps.google.com/maps?q=Vihav+Elinor+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
    filterData: {
      category: "Residential",
      type: ["4bhk", "5bhk", "penthouse", "Apartments"],
      possession: "Ready to Move",
    },
  },
  {
    id: "vihav-parvarish-res",
    srd: "62a6fd0fed23e93e761c8048", // VIHAV PARVARISH
    status: "Ready to Move",
    rentalPrice: "₹45,000 / month",
    slug: "parvarish",
    title: "Vihav Parvarish",
    link: "/projects/parvarish",
    logo: "/images/project-images/project-logos/vihav-parvarish-logo.webp",
    category: "Residential",
    location: "Nr Priya Cinema, Sevasi, Bhayli",
    carpetArea: "SBA : 1575 - 1750 Sq.Ft",
    type: "3BHK Family – Centric Homes",
    price: "49 Lacs",
    reraId: "PR/GJ/VADODARA/VADODARA/Others/RAA00001/010121",
    reraLink: "https://gujrera.gujarat.gov.in/",
    phone: "+91 9504 638 638",
    email: "parvarish@vihav.com",
    tagline: "3BHK Family Centric Homes",
    description:
      "Looking for a home that’s ready when you are? Vihav Parvarish offers beautifully crafted ready possession flats that combine thoughtful design, modern amenities, and a prime location in Bhayli, Vadodara. Say goodbye to construction delays and hello to immediate comfort and convenience.",
    vision: "Crafted with Quality in mind",
    heroImage: "/images/project-images/project-tiles/vihav-parvarish.jpg",
    desktopHeroImage:
      "/images/project-images/hero-banner/desktop-banner/parvarish-residential.webp",
    mobileHeroImage:
      "/images/project-images/hero-banner/mobile-banner/parvarish-residential.webp",
    galleryImages: [
      "/images/project-images/projects/parvarish-residential-project-images/gallery/parvarish-gallery-image-1.webp",
      "/images/project-images/projects/parvarish-residential-project-images/gallery/parvarish-gallery-image-2.webp",
      "/images/project-images/projects/parvarish-residential-project-images/gallery/parvarish-gallery-image-3.webp",
      "/images/project-images/projects/parvarish-residential-project-images/gallery/parvarish-gallery-image-4.webp",
      "/images/project-images/projects/parvarish-residential-project-images/gallery/parvarish-gallery-image-5.webp",
      "/images/project-images/projects/parvarish-residential-project-images/gallery/parvarish-gallery-image-6.webp",
      "/images/project-images/projects/parvarish-residential-project-images/gallery/parvarish_image-001.webp",
    ],
    realPictureImages: [
      "/images/project-images/projects/parvarish-residential-project-images/show-house/parvarish-real-image-6.webp",
      "/images/project-images/projects/parvarish-residential-project-images/show-house/parvarish-amenities-gallary-image-1.webp",
      "/images/project-images/projects/parvarish-residential-project-images/show-house/parvarish-amenities-gallary-image-2.webp",
      "/images/project-images/projects/parvarish-residential-project-images/show-house/parvarish-amenities-gallary-image-3.webp",
      "/images/project-images/projects/parvarish-residential-project-images/show-house/parvarish-amenities-gallary-image-4.webp",
      "/images/project-images/projects/parvarish-residential-project-images/show-house/parvarish-amenities-gallary-image-5.webp",
      "/images/project-images/projects/parvarish-residential-project-images/show-house/parvarish-amenities-gallary-image-11.webp",
      "/images/project-images/projects/parvarish-residential-project-images/show-house/parvarish-amenities-gallary-image-12.webp",
      "/images/project-images/projects/parvarish-residential-project-images/show-house/parvarish-amenities-gallary-image-16.webp",
    ],
    amenitiesImages: [
      "/images/project-images/projects/parvarish-residential-project-images/amenities/parvarish-amenities-gallary-image-6.webp",
      "/images/project-images/projects/parvarish-residential-project-images/amenities/parvarish-amenities-gallary-image-17.webp",
      "/images/project-images/projects/parvarish-residential-project-images/amenities/parvarish-amenities-gallary-image-18.webp",
      "/images/project-images/projects/parvarish-residential-project-images/amenities/parvarish-amenities-gallary-image-19.webp",
      "/images/project-images/projects/parvarish-residential-project-images/amenities/parvarish-amenities-gallary-image-20.webp",
      "/images/project-images/projects/parvarish-residential-project-images/amenities/parvarish-amenities-gallary-image-21.webp",
      "/images/project-images/projects/parvarish-residential-project-images/amenities/parvarish-amenities-gallary-image-22.webp",
      "/images/project-images/projects/parvarish-residential-project-images/amenities/parvarish-amenities-gallary-image-23.webp",
      "/images/project-images/projects/parvarish-residential-project-images/amenities/parvarish-amenities-gallary-image-24.webp",
      "/images/project-images/projects/parvarish-residential-project-images/amenities/parvarish-amenities-gallary-image-25.webp",
      "/images/project-images/projects/parvarish-residential-project-images/amenities/parvarish-amenities-gallary-image-26.webp",
      "/images/project-images/projects/parvarish-residential-project-images/amenities/parvarish-amenities-gallary-image-27.webp",
      "/images/project-images/projects/parvarish-residential-project-images/amenities/parvarish-amenities-gallary-image-28.webp",
      "/images/project-images/projects/parvarish-residential-project-images/amenities/parvarish-amenities-gallary-image-29.webp",
      "/images/project-images/projects/parvarish-residential-project-images/amenities/parvarish-amenities-gallary-image-30.webp",
    ],
    floorPlans: [
      {
        id: "fp-typical",
        title: "Typical Floor Layout",
        image:
          "/images/project-images/projects/parvarish-residential-project-images/floor-plans/Typical-Floor-Layout-scaled.webp",
        type: "Plan",
      },
      {
        id: "fp-ground",
        title: "Ground Floor Layout",
        image:
          "/images/project-images/projects/parvarish-residential-project-images/floor-plans/Ground-Floor-Layout-scaled.webp",
        type: "Plan",
      },
      {
        id: "fp-first",
        title: "First Floor Layout",
        image:
          "/images/project-images/projects/parvarish-residential-project-images/floor-plans/First-Floor-Layout-scaled.webp",
        type: "Plan",
      },
      {
        id: "fp-tower",
        title: "Tower A/B/C Layout",
        image:
          "/images/project-images/projects/parvarish-residential-project-images/floor-plans/Tower-A-B-C-Typical-Floor-Plan-scaled.webp",
        type: "Plan",
      },
    ],
    features: ["Ready Possession", "Prime Location", "Huge Open Spaces"],
    highlights: [
      {
        icon: "Check",
        title: "Ready Possession",
        label: "Move In Now",
        description:
          "Say goodbye to construction delays and hello to immediate comfort.",
      },
      {
        icon: "MapPin",
        title: "Prime suburb location",
        label: "Bhayli-Sevasi",
        description: "One of the city’s fastest-growing residential zones for minimum daily commute and maximize lifestyle convenience.",
      },
      {
        icon: "Shield",
        title: "Premium Living",
        label: "Wide Spaces",
        description:
          "Towers designed to ensure ventilation, light, and community interaction.",
      },
      {
        icon: "Car",
        title: "Lifestyle",
        label: "Full of Lifestyle Amenities",
        description: "To ensure relaxation,recreation promoting health and wellness to all age groups.",
      },
    ],
    amenitiesList: [
      { icon: "Music", label: "Advanced Music Room" },
      { icon: "Palette", label: "Art Room" },
      { icon: "Activity", label: "Indoor Badminton" },
      { icon: "Waves", label: "Kids/Adult Swimming Pool" },
      { icon: "Play", label: "Skating Rink" },
      { icon: "Telescope", label: "Sky Observatory" },
      { icon: "BookOpen", label: "Library" },
      { icon: "Dumbbell", label: "Gym/Yoga" },
      { icon: "Gamepad2", label: "Lego Lounge" },
    ],
    specifications: [
      { category: "Structure", items: ["Earthquake Resistance Structure"] },
      {
        category: "Flooring",
        items: ["600x600 Vitrified Flooring", "Antiskid in Balcony/Wash"],
      },
      {
        category: "Wall Finish",
        items: [
          "Interior: 2 Coat Putty",
          "Exterior: Texture with Weather Resistant Paint",
        ],
      },
      {
        category: "Electrical",
        items: ["Concealed Copper ISI Wire", "Modular Switches"],
      },
      {
        category: "Bath",
        items: [
          "Designer Bathrooms",
          "Premium Quality Fittings",
          "Glazed Tile Dado",
        ],
      },
      {
        category: "Doors",
        items: [
          "Main Door: Veneer Paneling",
          "Internal: Laminated Flush Doors",
        ],
      },
      {
        category: "Windows",
        items: ["Aluminum Sliding Windows with Mosquito Net"],
      },
    ],
    connectivity: [{ label: "Gotri", time: "0 Mins" }],
    address:
      "Behind Akshar Public School, Near Priya Cinemas, Sevasi-Bhayli, Vadodara, Gujarat, India.",
    coordinates: { lat: 22.3014023, lng: 73.1192671 },
    googleMapsLink: "https://maps.app.goo.gl/cjM8euVkXBJsRiGP8",
    mapEmbed:
      "https://maps.google.com/maps?q=Vihav+Parvarish+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
    filterData: {
      category: "Residential",
      type: ["3bhk", "4bhk", "penthouse", "Apartments"],
      possession: "Ready to Move",
    },
  },
  {
    id: "vihav-parvarish-comm",
    srd: "6530c9aea3d85503b2d3ecd6", // VIHAV PARVARISH COMMERCIAL
    slug: "parvarish-commercial",
    title: "Vihav Parvarish Commercial",
    status: "Ready to Move",
    link: "/projects/parvarish-commercial/",
    logo: "/images/project-images/project-logos/vihav-parvarish-logo.webp",
    category: "Commercial",
    location: "Gotri",
    carpetArea: "1485 to 2600 Sq.Ft.", // Verify if different for comm
    type: "SHOPS & SHOWROOMS",
    price: "Price on Request",
    phone: "+91 999 895 2299",
    email: "parvarish@vihav.com",
    tagline: "Ground Floor Shops in Vadodara",
    description:
      "Vihav Parvarish Commercial: A premier commercial property located in Sevasi-Bhayli, Vadodara. Designed to meet modern business needs, these ground floor shops offer excellent visibility and accessibility.",
    vision: "Commercial Excellence",
    heroImage: "/images/project-images/project-tiles/parvarish-commercial.webp",
    desktopHeroImage:
      "/images/project-images/hero-banner/desktop-banner/parvarish-commercial.webp",
    mobileHeroImage:
      "/images/project-images/hero-banner/mobile-banner/parvarish-commercial.webp",
    galleryImages: [
      "/images/project-images/projects/parvarish commercial-project-images/gallery/parvarish-gallery-image-1.webp",
      "/images/project-images/projects/parvarish commercial-project-images/gallery/parvarish-gallery-image-2.webp",
      "/images/project-images/projects/parvarish commercial-project-images/gallery/parvarish-gallery-image-3.webp",
      "/images/project-images/projects/parvarish commercial-project-images/gallery/parvarish-gallery-image-8.webp",
    ],
    floorPlans: [
      {
        id: "fp-ground",
        title: "Ground Floor Layout",
        image:
          "/images/project-images/projects/parvarish commercial-project-images/floor-plans/Ground-Floor-Layout-scaled.webp",
        type: "Plan",
      },
      {
        id: "fp-first",
        title: "First Floor Layout",
        image:
          "/images/project-images/projects/parvarish commercial-project-images/floor-plans/First-Floor-Layout-scaled.webp",
        type: "Plan",
      },
      {
        id: "fp-typical",
        title: "Typical Floor Layout",
        image:
          "/images/project-images/projects/parvarish commercial-project-images/floor-plans/Typical-Floor-Layout-scaled.webp",
        type: "Plan",
      },
      {
        id: "fp-tower",
        title: "Tower A/B/C Layout",
        image:
          "/images/project-images/projects/parvarish commercial-project-images/floor-plans/Tower-A-B-C-Typical-Floor-Plan-scaled.webp",
        type: "Plan",
      },
    ],
    features: ["Ground Floor Shops", "Main Road Access", "High Visibility"],
    highlights: [
      {
        icon: "MapPin",
        title: "Prime Location",
        label: "Sevasi-Bhayli",
        description: "Located in a high-growth residential area.",
      },
      {
        icon: "Eye",
        title: "High Visibility",
        label: "Ground Floor",
        description: "Direct access and visibility for your business.",
      },
    ],
    amenitiesList: [
      { icon: "Shield", label: "Security" },
      { icon: "Car", label: "Visitor Parking" },
      { icon: "Video", label: "CCTV Surveillance" },
    ],
    specifications: [
      { category: "Flooring", items: ["Vitrified Tiles"] },
      { category: "Structure", items: ["RCC Frame Structure"] },
    ],
    connectivity: [
      { label: "Navrachana Uni", time: "2 Mins" },
      { label: "Airport", time: "25 Mins" },
      { label: "School", time: "5 Mins" },
      { label: "Hospital", time: "5 Mins" },
      { label: "Railway Station", time: "20 Mins" },
      { label: "Expressway", time: "10 Mins" },
      { label: "Mall", time: "12 Mins" },
    ],
    address:
      "Behind Akshar Public School, Near Priya Cinemas, Sevasi-Bhayli, Vadodara, Gujarat, India.",
    coordinates: { lat: 22.3014023, lng: 73.1192671 },
    googleMapsLink: "https://maps.app.goo.gl/cjM8euVkXBJsRiGP8",
    mapEmbed:
      "https://maps.google.com/maps?q=Vihav+Parvarish+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
    filterData: {
      category: "Commercial",
      transactionType: ["Buy", "Lease", "Rent"],
      type: ["shops", "showrooms"],
      possession: "Ready to Move",
    },
  },
  {
    id: "vihav-skymont",

    status: "Completed",
    slug: "vihav-skymont",
    title: "Keystone Skymont",
    logo: "/images/project-images/project-logos/keystone-skymont-logo.png",
    category: "Residential",
    location: "New Alkapuri, Vadodara",
    carpetArea: "CARPET - 3700 Sq.Ft.",
    type: "4B2HK Luxurious Apartments",
    price: "Price on Request",
    phone: "+91 91206 45645",
    email: "skymont@vihav.com",
    description: "Touching the sky with elegance.",
    vision: "1 FLOOR 2 UNIT - EXTRA TERRACE APARTMENT",
    heroImage:
      "/images/project-images/projects/cbd-res/gallery/vihav-cbd-gallery (3).webp", // Highrise Placeholder
    features: ["View from Top", "Modern Facade"],
    amenitiesList: [
      { icon: "Shield", label: "Security" },
      { icon: "ArrowUpFromLine", label: "High Speed Lifts" },
      { icon: "Dumbbell", label: "Gym" },
    ],
    specifications: [{ category: "Flooring", items: ["Vitrified Tiles"] }],
    connectivity: [{ label: "New Alkapuri", time: "0 Mins" }],
    address: "New Alkapuri, Vadodara",
    coordinates: { lat: 22.3240881, lng: 73.1267667 },
    googleMapsLink: "https://maps.app.goo.gl/VchgubLxxsxWh5SA9",
    mapEmbed:
      "https://maps.google.com/maps?q=Vihav+Skymont+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
    filterData: {
      category: "Residential",
      possession: "Completed",
    },
  },
  {
    id: "keystone-72",
    status: "Completed",
    slug: "keystone-72",
    title: "Keystone 72",
    logo: "/images/project-images/project-logos/keystone-72-logo.webp",
    category: "Residential",
    location: "New Alkapuri, Vadodara",
    carpetArea: "CARPET - 2100 Sq.Ft.",
    type: "4B2HK Premium Flats and 5B2HK Penthouses",
    price: "Price on Request",
    phone: "+91 74348 40840",
    email: "keystone72@vihav.com",
    description: "A community of 72 exclusive families.",
    vision: "4B2HK ULTRA LUXURIOUS AMENITIES",
    heroImage:
      "/images/project-images/projects/cbd-res/gallery/vihav-cbd-gallery (3).webp", // Apartment Placeholder
    features: ["3 Units Per Floor", "Premium Finish"],
    amenitiesList: [
      { icon: "Shield", label: "Security" },
      { icon: "Dumbbell", label: "Gym" },
      { icon: "Trees", label: "Garden" },
    ],
    specifications: [{ category: "Flooring", items: ["Vitrified Tiles"] }],
    connectivity: [{ label: "New Alkapuri", time: "0 Mins" }],
    address: "New Alkapuri, Vadodara",
    coordinates: { lat: 22.3265949, lng: 73.1170402 },
    googleMapsLink: "https://maps.app.goo.gl/33d2kZFSwYKMpFWW9",
    mapEmbed:
      "https://maps.google.com/maps?q=Keystone+72+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
    filterData: {
      category: "Residential",
      type: ["4bhk", "5bhk", "penthouse", "Apartments"],
      possession: "Completed",
    },
  },
  {
    id: "keystone-skyvillas",
    slug: "keystone-skyvillas",
    title: "Keystone Skyvillas",
    logo: "/images/project-images/project-logos/keystone-skyvillas-logo.svg",
    category: "Residential",
    location: "New Alkapuri, Vadodara",
    carpetArea: "CARPET - 2900 Sq.Ft.",
    type: "4B2HK Skyrise Villas",
    price: "Price on Request",
    status: "Completed",
    progress: 100,
    reraId: "PR/GJ/VADODARA/VADODARA/Others/RAA00001/010121",
    reraLink: "https://gujrera.gujarat.gov.in/",
    phone: "+91 72019 50950",
    email: "skyvillas@vihav.com",
    description:
      "An exquisite collection of sky-rise villas defined by vertical luxury. Keystone Skyvillas brings the grandeur of independent living to the skies, offering panoramic views and unmatched privacy.",
    vision: "LUXURIOUS 4B2KK APARTMENT",
    heroImage: "https://www.vihav.com/wp-content/uploads/ongoing_thum.jpg",
    galleryImages: [
      "/images/project-images/projects/cbd-res/gallery/vihav-cbd-gallery (3).webp", // Living Room
      "/images/project-images/projects/cbd-res/gallery/vihav-cbd-gallery (3).webp", // Kitchen
      "/images/project-images/projects/cbd-res/gallery/vihav-cbd-gallery (3).webp", // Bedroom
      "/images/project-images/projects/cbd-res/gallery/vihav-cbd-gallery (3).webp", // Bathroom
    ],
    constructionImages: [
      "/images/project-images/projects/cbd-res/gallery/vihav-cbd-gallery (3).webp",
      "/images/project-images/projects/cbd-res/gallery/vihav-cbd-gallery (3).webp",
      "/images/project-images/projects/cbd-res/gallery/vihav-cbd-gallery (3).webp",
      "/images/project-images/projects/cbd-res/gallery/vihav-cbd-gallery (3).webp",
    ],
    features: ["Sky Decks", "Private Elevators", "Club House"],
    amenitiesList: [
      { icon: "Waves", label: "Swimming Pool" },
      { icon: "Coffee", label: "Clubhouse" },
      { icon: "ArrowUpFromLine", label: "High Speed Elevators" },
      { icon: "Video", label: "CCTV Surveillance" },
      { icon: "Dumbbell", label: "Gymnasium" },
      { icon: "Trees", label: "Landscape Garden" },
    ],
    specifications: [
      {
        category: "Structure",
        items: ["RCC Frame Structure", "Earthquake Resistant"],
      },
      {
        category: "Finishes",
        items: ["Premium Emulsion Paint", "Texture Finish on Exterior"],
      },
      {
        category: "Flooring",
        items: ["Italian Marble in Living", "Wooden Flooring in Master Bed"],
      },
      {
        category: "Electrification",
        items: ["Concealed Copper Wiring", "Modular Switches"],
      },
    ],
    connectivity: [{ label: "Alkapuri", time: "10 Mins" }],
    address: "New Alkapuri, Vadodara",
    coordinates: { lat: 22.3268981, lng: 73.1241725 },
    googleMapsLink: "https://maps.app.goo.gl/Yafkpt8nesB8xYAs5",
    mapEmbed:
      "https://maps.google.com/maps?q=Keystone+Skyvillas+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
    filterData: {
      category: "Residential",
      type: ["4bhk", "penthouse", "Apartments"],
      possession: "Completed",
    },
    link: "/projects/skyvillas",
  },
  {
    id: "skyone",
    srd: "62a6fd8aed23e93e761c80b0", // VIHAV SKYONE
    status: "Completed",
    link: "/projects/skyone/",
    slug: "skyone",
    title: "Skyone",
    logo: "/images/project-images/project-logos/vihav-skyone-logo.svg",
    category: "RESI-COMM",
    location: "30 Mtr. Main Road, Bhayli",
    carpetArea: "CARPET - 245 TO 540 Sq.Ft.",
    type: "SHOPS",
    rentalPrice: "₹25,000 / month",
    unitNumber: "Shop G-12",
    price: "Price on Request",
    reraId: "PR/GJ/VADODARA/VADODARA/Others/CAA00001/010121",
    reraLink: "https://gujrera.gujarat.gov.in/",
    phone: "+91 72018 54854",
    email: "skyone@vihav.com",
    tagline: "Commercial Shops at Vasna Bhayli",
    description:
      "Vihav Skyone offers the best commercial and residential properties built by the best real estate developer in Vadodara, Vihav Group. Strategic commercial shops on the bustling 30 Mtr Main Road in Bhayli.",
    vision: "Sky High Commerce.",
    heroImage: "/images/project-images/project-tiles/Skyone.webp",
    desktopHeroImage:
      "/images/project-images/hero-banner/desktop-banner/skyone.webp",
    mobileHeroImage:
      "/images/project-images/hero-banner/mobile-banner/vihav-skyone.webp",
    galleryImages: [
      "/images/project-images/projects/skyone-project-images/gallery/vihav-skyone-gallery-image-1.webp",
      "/images/project-images/projects/skyone-project-images/gallery/vihav-skyone-gallery-image-2.webp",
      "/images/project-images/projects/skyone-project-images/gallery/vihav-skyone-gallery-image-7.webp",
      "/images/project-images/projects/skyone-project-images/gallery/vihav-skyone-gallery-image-8.webp",
      "/images/project-images/projects/skyone-project-images/gallery/vihav-skyone-gallery-image-9.webp",
      "/images/project-images/projects/skyone-project-images/gallery/vihav-skyone-gallery-image-10.webp",
    ],
    floorPlans: [
      {
        id: "fp-ground",
        title: "Ground Floor Plan",
        image:
          "/images/project-images/projects/skyone-project-images/floor-plans/skyone-ground-floor-layout-scaled.webp",
        type: "Plan",
      },
      {
        id: "fp-first",
        title: "First Floor Plan",
        image:
          "/images/project-images/projects/skyone-project-images/floor-plans/Skyone-First-Floor-PLan.jpg",
        type: "Plan",
      },
      {
        id: "fp-second",
        title: "Second Floor Plan",
        image:
          "/images/project-images/projects/skyone-project-images/floor-plans/Skyone-Second-Floor-Plan.jpg",
        type: "Plan",
      },
    ],
    features: ["Main Road Facing", "High Visibility", "Mixed Use"],
    amenitiesList: [
      { icon: "Shield", label: "Security Cabin" },
      { icon: "Video", label: "CCTV Cameras" },
      { icon: "ArrowUpFromLine", label: "Standard Passenger Elevator" },
      { icon: "Dumbbell", label: "Gymnasium / Yoga" },
      { icon: "Waves", label: "Swimming Pool Deck" },
      { icon: "Gamepad2", label: "Indoor Games" },
      { icon: "Users", label: "Multipurpose Room" },
      { icon: "Car", label: "Allotted Parking" },
      { icon: "Zap", label: "Power Backup (Common)" },
    ],
    specifications: [
      { category: "Structure", items: ["Earthquake Resistant RCC Frame"] },
      {
        category: "Electrification",
        items: ["Concealed Premium Wiring", "Modular Switches"],
      },
      { category: "Water", items: ["24h Ground Water Supply"] },
      {
        category: "Doors & Windows",
        items: [
          "Flush Doors",
          "Rolling Shutter for Shops",
          "Aluminum Sliding Windows",
        ],
      },
      {
        category: "Flooring",
        items: [
          "Premium Vitrified Tiles",
          "Granite/Decorative Wall Cladding in Lifts",
        ],
      },
    ],
    connectivity: [{ label: "Bhayli", time: "0 Mins" }],
    address:
      "Nr. Trade Center, Nr. Waves Club, Opp. Nayara Petrol Pump, 30 mtr. Canal Ring Road, Bhayli, Vadodara, Gujarat, India.",
    coordinates: { lat: 22.273408, lng: 73.1331885 },
    googleMapsLink: "https://maps.app.goo.gl/uSz1uRwreZayf9ED9",
    mapEmbed:
      "https://maps.google.com/maps?q=Vihav+Skyone+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
    filterData: {
      category: ["Residential", "Commercial"],
      transactionType: ["Buy", "Lease", "Rent"],
      type: ["shops"],
      possession: "Completed",
    },
  },
  {
    id: "keystone-mansion",
    slug: "keystone-mansion",
    title: "Keystone Mansion",
    status: "Completed",
    category: "Residential",
    location: "Khanpur, Sevasi",
    type: "5B2HK LUXURIOUS VILLAS",
    price: "Price on Request",
    phone: "+91 87916 49164",
    email: "ksm3@vihav.com",
    description:
      "Expansive villas designed for royalty. The ultimate status symbol in Sevasi.",
    vision: "Royal Living.",
    heroImage:
      "/images/project-images/projects/cbd-res/gallery/vihav-cbd-gallery (3).webp", // Villa Placeholder
    features: ["Private Pool", "Gated Community"],
    amenitiesList: [
      { icon: "Shield", label: "Security" },
      { icon: "Trees", label: "Private Garden" },
      { icon: "Waves", label: "Private Pool" },
    ],
    specifications: [{ category: "Flooring", items: ["Italian Marble"] }],
    connectivity: [{ label: "Sevasi", time: "5 Mins" }],
    address: "Khanpur, Sevasi, Vadodara",
    coordinates: { lat: 22.3285522, lng: 73.104771 },
    googleMapsLink: "https://maps.app.goo.gl/WED1irf4qafEZ2rM6",
    mapEmbed:
      "https://maps.google.com/maps?q=Keystone+Mansions+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
    filterData: {
      category: "Residential",
      type: ["5bhk", "Bunglows"],
      possession: "Completed",
    },
  },
  {
    id: "keystone-mansion-2",
    slug: "keystone-mansion-2",
    title: "Keystone Mansion 2",
    status: "Completed",
    category: "Residential",
    location: "Khanpur, Sevasi",
    type: "4B2HK LUXURIOUS VILLAS",
    price: "Price on Request",
    phone: "+91 87916 49164",
    email: "ksm3@vihav.com",
    description:
      "Expansive villas designed for royalty. The ultimate status symbol in Sevasi.",
    vision: "Royal Living.",
    heroImage:
      "/images/project-images/projects/cbd-res/gallery/vihav-cbd-gallery (3).webp", // Villa Placeholder
    features: ["Private Pool", "Gated Community"],
    amenitiesList: [
      { icon: "Shield", label: "Security" },
      { icon: "Trees", label: "Private Garden" },
      { icon: "Waves", label: "Private Pool" },
    ],
    specifications: [{ category: "Flooring", items: ["Italian Marble"] }],
    connectivity: [{ label: "Sevasi", time: "5 Mins" }],
    address: "Khanpur, Sevasi, Vadodara",
    coordinates: { lat: 22.3281718, lng: 73.1035289 },
    googleMapsLink: "https://maps.app.goo.gl/vNPjQngkB8L41rYA7",
    mapEmbed:
      "https://maps.google.com/maps?q=Keystone+Mansions+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
    filterData: {
      category: "Residential",
      type: ["5bhk", "Bunglows"],
      possession: "Completed",
    },
  },
  {
    id: "vs-monolith",
    srd: "67f38f395d8def8bcfa0d1f5", // VS MONOLITH
    link: "/projects/vs-monolith/",
    status: "Under Construction",
    slug: "vs-monolith",
    title: "VS Monolith",
    logo: "/images/project-images/project-logos/vs-monolith-logo.svg",
    category: "Commercial",
    location: "Atladra Padra 40mtr Main Road",
    carpetArea: "CARPET - 268 TO 3057 Sq.Ft.",
    type: "Shops, Showrooms & Offices",
    price: "21.51 Lacs",
    reraId: "PR/GJ/VADODARA/VADODARA/Others/CAA00002/010121",
    reraLink: "https://gujrera.gujarat.gov.in/",
    phone: "+91 91206 45645",
    email: "sales@vihav.com",
    tagline: "A Commercial Hub In Vadodara",
    description:
      "A bold new commercial destination located at the heart of the rapidly developing Atladra-Padra Road corridor in Vadodara. Designed for ambitious businesses and visionary investors, VS Monolith offers premium showrooms, shops, and offices for sale in Atladra, set within a contemporary, high-visibility commercial complex.",
    vision: "Main ATLADRA -PADRA 40.MTR Road",
    heroImage: "/images/project-images/project-tiles/vs-monolith.webp",
    desktopHeroImage:
      "/images/project-images/hero-banner/desktop-banner/vs-monolith.webp",
    mobileHeroImage:
      "/images/project-images/hero-banner/mobile-banner/vs-monolith.webp",
    galleryImages: [
      "/images/project-images/projects/monolith-project-images/gallery/vihav-monolith-commercial-corner-cam-1-a-scaled.webp",
      "/images/project-images/projects/monolith-project-images/gallery/vihav-monolith-commercial-front-cam5-a-scaled.webp",
      "/images/project-images/projects/monolith-project-images/gallery/vihav-monolith-commercial-garden-cam9-a-scaled.webp",
      "/images/project-images/projects/monolith-project-images/gallery/vihav-monolith-commercial-garden-long-cam16-a-scaled.webp",
      "/images/project-images/projects/monolith-project-images/gallery/vihav-monolith-commercial-garden-top-cam26-a-scaled.webp",
      "/images/project-images/projects/monolith-project-images/gallery/vihav-monolith-commercial-right-front-cam4-a-scaled.webp",
      "/images/project-images/projects/monolith-project-images/gallery/vihav-monolith-commercial-tarrace-cam21-a-scaled.webp",
      "/images/project-images/projects/monolith-project-images/gallery/vihav-monolith-commercial-top-cam8-a-scaled.webp",
    ],
    floorPlans: [
      {
        id: "fp-ground",
        title: "Ground Floor Plan",
        image:
          "/images/project-images/projects/monolith-project-images/floor-plans/VS-MONOLITH-GF-PLAN-scaled.webp",
        type: "Plan",
      },
      {
        id: "fp-first",
        title: "First Floor Plan",
        image:
          "/images/project-images/projects/monolith-project-images/floor-plans/VS-MONOLITH-FF-PLAN-scaled.webp",
        type: "Plan",
      },
      {
        id: "fp-second",
        title: "Second Floor Plan",
        image:
          "/images/project-images/projects/monolith-project-images/floor-plans/VS-MONOLITH-SF-PLAN-scaled.webp",
        type: "Plan",
      },
      {
        id: "fp-third",
        title: "Third Floor Plan",
        image:
          "/images/project-images/projects/monolith-project-images/floor-plans/VS-MONOLITH-TF-PLAN-scaled.webp",
        type: "Plan",
      },
      {
        id: "fp-fourth",
        title: "Fourth Floor Plan",
        image:
          "/images/project-images/projects/monolith-project-images/floor-plans/VS-MONOLITH-4F-PLAN-scaled.webp",
        type: "Plan",
      },
      {
        id: "fp-fifth-sixth",
        title: "5th & 6th Floor Plan",
        image:
          "/images/project-images/projects/monolith-project-images/floor-plans/VS-MONOLITH-5TH-6TH-F-PLAN-scaled.webp",
        type: "Plan",
      },
    ],
    features: [
      "Iconic Design",
      "Strategic Junction",
      "High Visibility",
      "Modern Infrastructure",
    ],
    highlights: [
      {
        icon: "MapPin",
        title: "Strategic Location",
        label: "Atladra-Padra Road",
        description: "Located on a fast-developing corridor in Vadodara.",
      },
      {
        icon: "Eye",
        title: "Excellent Visibility",
        label: "Main Road",
        description: "High daily traffic ensuring great exposure.",
      },
      {
        icon: "TrendingUp",
        title: "High Growth",
        label: "Steady Footfall",
        description: "Close proximity to residential communities and schools.",
      },
      {
        icon: "Building",
        title: "Modern Infra",
        label: "State-of-the-art",
        description: "Ample parking, elevators, and secure premises.",
      },
    ],
    amenitiesList: [
      { icon: "Layout", label: "Conference Room" },
      { icon: "Dumbbell", label: "Gymnasium" },
      { icon: "Coffee", label: "Cafeteria" },
      { icon: "Umbrella", label: "Terrace Seating" },
      { icon: "Armchair", label: "Waiting Area" },
      { icon: "Droplets", label: "Fountain Foyer" },
      { icon: "Trees", label: "Garden" },
      { icon: "Shield", label: "Security & CCTV" },
      { icon: "Car", label: "Parking" },
    ],
    specifications: [
      {
        category: "Structure",
        items: ["RCC Frame Structure", "Iconic Glass Facade"],
      },
      { category: "Flooring", items: ["Premium Vitrified Flooring"] },
      {
        category: "Infrastructure",
        items: ["Ample Parking", "High Speed Elevators"],
      },
      { category: "Security", items: ["24/7 Security", "CCTV Surveillance"] },
    ],
    connectivity: [{ label: "Bhayli", time: "0 Mins" }],
    address: "Atladra Padra Road, Vadodara",
    coordinates: { lat: 22.2718758, lng: 73.1448367 },
    googleMapsLink: "https://maps.app.goo.gl/YiMpLGx79fqJoZ64A",
    mapEmbed:
      "https://maps.google.com/maps?q=VS+Monolith+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
    filterData: {
      category: "Commercial",
      transactionType: ["Buy", "Lease", "Rent"],
      type: ["offices", "shops", "showrooms"],
      possession: "Under construction",
    },
  },
  {
    id: "supremus-iii",
    srd: "670ca3c858f1e7baa1e47604", // VIHAV SUPREMUS 3
    link: "/projects/supremus-3/",
    status: "Under Construction",
    slug: "supremus-3",
    title: "Supremus 3",
    logo: "/images/project-images/project-logos/supremus-3-logo.svg",
    category: "Commercial",
    location: "Nr. DMart, Vasna Bhayli Main Rd",
    carpetArea: "CARPET - 295 Sq.Ft. Onwards",
    type: "Offices & Showrooms",
    price: "30 Lacs",
    reraId: "PR/GJ/VADODARA/VADODARA/Others/CAA00003/010121",
    reraLink: "https://gujrera.gujarat.gov.in/",
    phone: "+91 879 174 9174",
    email: "supremus3@vihav.com",
    tagline: "A Supreme Legacy of Corporate Businesses",
    description:
      "A landmark commercial development in Vasna, strategically located near Manisha Circle, Vadodara. Whether you’re a retailer, a growing brand, or a professional looking for a premium workspace, Supremus 3 offers thoughtfully designed shops, showrooms, and offices that cater to every business need.",
    vision: "Prime business location",
    heroImage: "/images/project-images/project-tiles/supremus-3.webp",


    desktopHeroImage:
      "/images/project-images/hero-banner/desktop-banner/supremus3.webp",
    mobileHeroImage:
      "/images/project-images/hero-banner/mobile-banner/supremus3.webp",
    galleryImages: [
      "/images/project-images/projects/supremus3-project-images/gallery/vihav-supremus3-rendered-01-scaled.webp",
      "/images/project-images/projects/supremus3-project-images/gallery/vihav-supremus3-rendered-02-scaled.webp",
      "/images/project-images/projects/supremus3-project-images/gallery/vihav-supremus3-rendered-03-scaled.webp",
      "/images/project-images/projects/supremus3-project-images/gallery/vihav-supremus3-rendered-04-scaled.webp",
      "/images/project-images/projects/supremus3-project-images/gallery/vihav-supremus3-rendered-05-scaled.webp",
      "/images/project-images/projects/supremus3-project-images/gallery/vihav-supremus3-rendered-06-scaled.webp",
      "/images/project-images/projects/supremus3-project-images/gallery/vihav-supremus3-rendered-07-scaled.webp",
      "/images/project-images/projects/supremus3-project-images/gallery/vihav-supremus3-rendered-08-scaled.webp",
      "/images/project-images/projects/supremus3-project-images/gallery/vihav-supremus3-rendered-09-scaled.webp",
      "/images/project-images/projects/supremus3-project-images/gallery/vihav-supremus3-rendered-10-scaled.webp",
      "/images/project-images/projects/supremus3-project-images/gallery/vihav-supremus3-rendered-11-scaled.webp",
    ],
    floorPlans: [
      {
        id: "fp-ground",
        title: "Ground Floor Plan",
        image:
          "/images/project-images/projects/supremus3-project-images/floor-plans/supremus-3-ground-floor-plan-scaled.webp",
        type: "Plan",
      },
      {
        id: "fp-first",
        title: "First Floor Plan",
        image:
          "/images/project-images/projects/supremus3-project-images/floor-plans/supremus-3-first-floor-plan-scaled.webp",
        type: "Plan",
      },
      {
        id: "fp-second",
        title: "Second Floor Plan",
        image:
          "/images/project-images/projects/supremus3-project-images/floor-plans/supremus-3-second-floor.jpg",
        type: "Plan",
      },
      {
        id: "fp-third",
        title: "Third Floor Plan",
        image:
          "/images/project-images/projects/supremus3-project-images/floor-plans/supremus-3-third-floor-plan-scaled.webp",
        type: "Plan",
      },
      {
        id: "fp-fourth",
        title: "Fourth Floor Plan",
        image:
          "/images/project-images/projects/supremus3-project-images/floor-plans/supremus-3-fourth-floor-plan-scaled.webp",
        type: "Plan",
      },
      {
        id: "fp-fifth",
        title: "Fifth Floor Plan",
        image:
          "/images/project-images/projects/supremus3-project-images/floor-plans/supremus-3-fifth-floor-plan-scaled.webp",
        type: "Plan",
      },
      {
        id: "fp-sixth",
        title: "Sixth Floor Plan",
        image:
          "/images/project-images/projects/supremus3-project-images/floor-plans/supremus-3-sixth-floor-plan-scaled.webp",
        type: "Plan",
      },
      {
        id: "fp-typical",
        title: "Typical Floor Plan",
        image:
          "/images/project-images/projects/supremus3-project-images/floor-plans/supremus-3-typical-floor-plan-scaled.webp",
        type: "Plan",
      },
      {
        id: "fp-14th",
        title: "14th Floor Plan",
        image:
          "/images/project-images/projects/supremus3-project-images/floor-plans/supremus-3-14th-floor-plan-scaled.webp",
        type: "Plan",
      },
    ],
    features: ["Main Road Frontage", "Corporate Look", "Near D-Mart"],
    highlights: [
      {
        icon: "MapPin",
        title: "Strategic Location",
        label: "Near Manisha cross road",
        description: "Unmatched connectivity and location for businesses",
      },
      {
        icon: "Building",
        title: "Corporate Amenities",
        label: "Premium Amenities",
        description: "Which includes High speed Elevators, Gymnasium , Double Height Entry foyer, Waiting Lounge ,Escalators",
      },
      {
        icon: "ArrowUpFromLine",
        title: "Premium spaces",
        label: "Corporate Tower",
        description: "Thoughtfully designed shops , showrooms and offices",
      },
      {
        icon: "Building",
        title: "High Growth",
        label: "Steady Footfall",
        description: "City's Business center",
      },
    ],
    amenitiesList: [
      { icon: "Car", label: "Ample Parking (Ground + Basement)" },
      { icon: "ArrowUpFromLine", label: "4 High Speed Elevators" },
      { icon: "Armchair", label: "Double Height Entrance Foyer" },
      { icon: "Armchair", label: "Waiting Lounge" },
      { icon: "Zap", label: "DG Power Backup (Common)" },
      { icon: "Video", label: "CCTV Surveillance" },
      { icon: "Layout", label: "Triple Height Lounge" },
      { icon: "Users", label: "Conference Room" },
      { icon: "Utensils", label: "Cafeteria" },
      { icon: "Sun", label: "Terrace Seating" },
    ],
    specifications: [
      {
        category: "Structure",
        items: [
          "Earthquake Resistant RCC Structure",
          "Minimum Columns & Beams for Flexibility",
        ],
      },
      { category: "Flooring", items: ["Vitrified flooring in Each Unit"] },
      {
        category: "Electrification",
        items: ["Concealed Copper Wiring", "Branded Modular Switches"],
      },
      {
        category: "Plumbing",
        items: ["Provision of Pantry & Toilet in each unit"],
      },
      {
        category: "Finishing",
        items: [
          "Inside: Smooth plaster with Putty/Primer",
          "Outside: Plaster with Exterior Paints",
        ],
      },
      {
        category: "Other",
        items: ["Water proofing treatment on terrace", "Ample water supply"],
      },
    ],
    connectivity: [
      { label: "Navrachana Uni", time: "2 Mins" },
      { label: "Airport", time: "25 Mins" },
      { label: "School", time: "5 Mins" },
      { label: "Hospital", time: "5 Mins" },
      { label: "Railway Station", time: "20 Mins" },
      { label: "Expressway", time: "10 Mins" },
      { label: "Mall", time: "12 Mins" },
    ],
    address:
      "Beside Indian Oil Petrol Pump, Opp. Taksh Complex, Near D-Mart, Vasna, Vadodara, Gujarat 390015",
    coordinates: { lat: 22.2947902, lng: 73.1542653 },
    googleMapsLink: "https://maps.app.goo.gl/9BZyWiigVg18ZAuAA",
    mapEmbed:
      "https://maps.google.com/maps?q=Supremus+3+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
    filterData: {
      category: "Commercial",
      transactionType: ["Buy", "Lease", "Rent"],
      type: ["offices", "showrooms"],
      possession: "Under construction",
    },
  },
  {
    id: "vihav-cbd",
    srd: "63d78214c8256117c4e8e7d1", // VIHAV CBD Commercial
    link: "/projects/cbd-commercial/",
    launchYear: "2022",
    brochureLink:
      "https://drive.google.com/file/d/1YEC52psDRHd111wP970Qvd-YGFFyjUPm/view?usp=drive_link",
    status: "Under Construction",
    slug: "cbd-commercial",
    title: "Vihav CBD",
    logo: "/images/project-images/project-logos/cbd-logo.svg",
    category: "Commercial",
    location: "Bhayli Cross Road, Vadodara",
    carpetArea: "CARPET - 262 TO 4200 Sq.Ft.",
    type: "OFFICES • SHOPS • SHOWROOMS",
    price: "23.36 Lacs",
    phone: "+91 7435 894 894",
    email: "cbd@vihav.com",
    tagline: "Premium Commercial Hub in City",
    description:
      "A premium development offering versatile commercial properties for sale in Bhayli. Whether you’re looking for a showroom, a shop, or an office, Vihav CBD has the perfect space for you. With its strategic location on the bustling Vasna-Bhayli Road, this is an opportunity you won’t want to miss!",
    vision: "HEART OF BHAYLI",
    heroImage: "/images/project-images/project-tiles/cbd-commercial.webp",
    desktopHeroImage:
      "/images/project-images/hero-banner/desktop-banner/cbd-commercial.webp",
    mobileHeroImage:
      "/images/project-images/hero-banner/mobile-banner/cbd-commercial.webp",
    features: [
      "Prime Junction",
      "Mixed Use",
      "Self-Contained Offices",
      "Terrace Garden",
    ],
    galleryImages: [
      "/images/project-images/projects/cbd-commercial-project-images/gallery/vihav-cbd-gallery-image-2.webp",
      "/images/project-images/projects/cbd-commercial-project-images/gallery/vihav-cbd-gallery-image-3.webp",
      "/images/project-images/projects/cbd-commercial-project-images/gallery/vihav-cbd-gallery-image-4.webp",
      "/images/project-images/projects/cbd-commercial-project-images/gallery/vihav-cbd-gallery-image-5.webp",
      "/images/project-images/projects/cbd-commercial-project-images/gallery/vihav-cbd-gallery-image-7.webp",
    ],
    floorPlans: [
      {
        id: "fp-ground",
        title: "Ground Floor Plan",
        image:
          "/images/project-images/projects/cbd-commercial-project-images/floor-plans/vihav-cbd-commercial_ground_floor-plan-scaled.webp",
        type: "Plan",
      },
      {
        id: "fp-first",
        title: "First Floor Plan",
        image:
          "/images/project-images/projects/cbd-commercial-project-images/floor-plans/vihav-cbd-commercial_first_floor-plan-scaled.webp",
        type: "Plan",
      },
      {
        id: "fp-second",
        title: "Second Floor Plan",
        image:
          "/images/project-images/projects/cbd-commercial-project-images/floor-plans/vihav-cbd-commercial_secoond_floor_plan-scaled.webp",
        type: "Plan",
      },
      {
        id: "fp-typical",
        title: "Typical Floor Plan",
        image:
          "/images/project-images/projects/cbd-commercial-project-images/floor-plans/Typical-Floor-Plan.jpeg",
        type: "Plan",
      },
    ],
    highlights: [
      {
        icon: "MapPin",
        title: "Prime Location",
        label: "Bhayli 30 Mtr & 24 Mtr Cross Road",
        description:
          "Located at the hearty of bhayli with seamless connectivity",
      },
      {
        icon: "Building",
        title: "Premium Community",
        label: "All 4BHK Apartments",
        description:
          "Two Towers with only 88 Units ",
      },
      {
        icon: "Trees",
        title: "All Side Open",
        label: "No Future Obstruction",
        description: "Enhanced Privacy, Unobstructed Views feels like Stand Alone",
      },
      {
        icon: "Trees",
        title: "Class Amenities",
        label: "More than 15+ Premium Amenities",
        description: "Carefully curated lifestyle amenities catering to all age groups.",
      },
    ],
    amenitiesList: [
      { icon: "Shield", label: "Hi-Tech Security" },
      { icon: "Car", label: "Ample Parking Space" },
      { icon: "Dumbbell", label: "Gym at Terrace Level" },
      { icon: "Layout", label: "Conference Room at Terrace" },
      { icon: "Trees", label: "Terrace Garden" },
      { icon: "DoorOpen", label: "Private Terrace Offices" },
      { icon: "Building", label: "Decorative Facade" },
      { icon: "Coffee", label: "Pantry in Units" },
      { icon: "Droplets", label: "Washroom in Units" },
    ],
    specifications: [
      {
        category: "Unit Features",
        items: [
          "Built-in Washroom & Pantry in each unit",
          "Self-Contained Offices",
          "Expansive floor-to-floor height",
        ],
      },
      { category: "Flooring", items: ["Vitrified Tiles"] },
      {
        category: "Facilities",
        items: ["Gym & Conference room", "Ample Parking", "Hi-Tech Security"],
      },
      { category: "External", items: ["Decorative Facade", "Terrace Garden"] },
    ],
    connectivity: [
      { label: "Navrachana Uni", time: "2 Mins" },
      { label: "Airport", time: "25 Mins" },
      { label: "School", time: "5 Mins" },
      { label: "Hospital", time: "5 Mins" },
      { label: "Railway Station", time: "20 Mins" },
      { label: "Expressway", time: "10 Mins" },
      { label: "Mall", time: "12 Mins" },
    ],
    address: "NEAR FOOD CASTLE, BHAYLI, VADODARA, GUJARAT 391410",
    coordinates: { lat: 22.2902491, lng: 73.131856 },
    googleMapsLink: "https://maps.app.goo.gl/m1dFRwuheiMF1xDG6",
    hideOnMap: true,
    mapEmbed:
      "https://maps.google.com/maps?q=Vihav+CBD+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
    filterData: {
      category: "Commercial",
      transactionType: ["Buy", "Lease", "Rent"],
      type: ["Invest", "End Use", "Pre-lease"],
      possession: "Under construction",
    },
  },
  {
    id: "vihav-supremus-2",
    srd: "62a6fdcbed23e93e761c80d4", // VIHAV SUPREMUS 2
    link: "/projects/supremus2/",
    status: "Ready to Move",
    slug: "supremus2",
    title: "Vihav Supremus 2",
    logo: "/images/project-images/project-logos/supremus2-logo.svg",
    category: "Commercial",
    location: "Atladra Padra 40mtr Main Road",
    carpetArea: "CARPET - 225 Sq.Ft. Onwards",
    type: "SHOWROOMS & OFFICES",
    price: "27 Lacs",
    reraId: "PR/GJ/VADODARA/VADODARA/Others/CAA00001/010121",
    reraLink: "https://gujrera.gujarat.gov.in/",
    phone: "+91 72019 85985",
    email: "supremus2@vihav.com",
    tagline: "Superior Commercial Property in Vadodara",
    description:
      "Enquire now for a superior commercial property in Vadodara Vihav Supremus 2. High-quality shops, showrooms & offices at Vasna 30mt main road.",
    vision: "A-COMMERCIAL MARVEL",
    heroImage: "/images/project-images/project-tiles/supremus-2.webp",

    desktopHeroImage:
      "/images/project-images/hero-banner/desktop-banner/supremus2.webp",
    mobileHeroImage:
      "/images/project-images/hero-banner/mobile-banner/supremus2.webp",
    galleryImages: [
      "/images/project-images/projects/supremus2-project-images/gallery/Avihav-Supremus-II.webp",
      "/images/project-images/projects/supremus2-project-images/gallery/Bihav-Supremus-II.webp",
      "/images/project-images/projects/supremus2-project-images/gallery/Cihav-Supremus-II.webp",
      "/images/project-images/projects/supremus2-project-images/gallery/Dihav-Supremus-II.webp",
      "/images/project-images/projects/supremus2-project-images/gallery/Eihav-Supremus-II.webp",
    ],
    floorPlans: [
      {
        id: "fp-1",
        title: "Layout 1",
        image:
          "/images/project-images/projects/supremus2-project-images/floor-plans/Supremus-II-Layout-1-scaled.webp",
        type: "Plan",
      },
      {
        id: "fp-2",
        title: "Layout 2",
        image:
          "/images/project-images/projects/supremus2-project-images/floor-plans/Supremus-II-Layout-2-scaled.webp",
        type: "Plan",
      },
      {
        id: "fp-3",
        title: "Layout 3",
        image:
          "/images/project-images/projects/supremus2-project-images/floor-plans/Supremus-II-Layout-3-scaled.webp",
        type: "Plan",
      },
      {
        id: "fp-4",
        title: "Layout 4",
        image:
          "/images/project-images/projects/supremus2-project-images/floor-plans/Supremus-II-Layout-4-scaled.webp",
        type: "Plan",
      },
      {
        id: "fp-5",
        title: "Layout 5",
        image:
          "/images/project-images/projects/supremus2-project-images/floor-plans/Supremus-II-Layout-5-scaled.webp",
        type: "Plan",
      },
      {
        id: "fp-6",
        title: "Layout 6",
        image:
          "/images/project-images/projects/supremus2-project-images/floor-plans/Supremus-II-Layout-6-scaled.webp",
        type: "Plan",
      },
      {
        id: "fp-7",
        title: "Layout 7",
        image:
          "/images/project-images/projects/supremus2-project-images/floor-plans/Supremus-II-Layout-7-scaled.webp",
        type: "Plan",
      },
      {
        id: "fp-8",
        title: "Layout 8",
        image:
          "/images/project-images/projects/supremus2-project-images/floor-plans/Supremus-II-Layout-8-scaled.webp",
        type: "Plan",
      },
    ],
    realPictureImages: [
      "/images/project-images/projects/supremus2-project-images/sample/DSC_5585.webp",
      "/images/project-images/projects/supremus2-project-images/sample/DSC_5590.webp",
      "/images/project-images/projects/supremus2-project-images/sample/DSC_5596.webp",
      "/images/project-images/projects/supremus2-project-images/sample/DSC_5602.webp",
      "/images/project-images/projects/supremus2-project-images/sample/DSC_5614.webp",
      "/images/project-images/projects/supremus2-project-images/sample/DSC_5623.webp",
      "/images/project-images/projects/supremus2-project-images/sample/DSC_5640.webp",
      "/images/project-images/projects/supremus2-project-images/sample/DSC_5645.webp",
      "/images/project-images/projects/supremus2-project-images/sample/DSC_5651.webp",
    ],
    features: ["Main Road", "Growth Area", "Premium Spaces"],
    amenitiesList: [
      { icon: "Shield", label: "Security" },
      { icon: "Car", label: "Parking" },
      { icon: "ArrowUpFromLine", label: "Lifts" },
      { icon: "Video", label: "CCTV" },
      { icon: "CircleCheck", label: "Fire Safety" },
      { icon: "Building", label: "Premium Elevation" },
    ],
    specifications: [
      { category: "Structure", items: ["RCC Frame"] },
      { category: "Flooring", items: ["Vitrified Tiles"] },
      { category: "Finish", items: ["Glass Facade"] },
    ],
    connectivity: [{ label: "Atladra", time: "0 Mins" }],
    address:
      "Nr. New Court Beside RK Plaza Near Ward 11 Office, Vasna, 30, Mt Main Road, Diwalipura, Vadodara, Gujarat, India.",
    coordinates: { lat: 22.3036872, lng: 73.1516042 },
    googleMapsLink: "https://maps.app.goo.gl/gkhaX4AYTM1Magzr8",
    mapEmbed:
      "https://maps.google.com/maps?q=Vihav+Supremus+II+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
    filterData: {
      category: "Commercial",
      transactionType: ["Buy", "Lease", "Rent"],
      type: ["shops", "showrooms", "offices"],
      possession: "Ready to Move",
    },
  },

  {
    id: "wealth-square",
    srd: "62a6fdb0ed23e924ca5e5c01", // VIHAV WEALTH SQUARE
    status: "Completed",
    link: "/projects/wealth-square/",
    slug: "wealth-square",
    title: "Wealth Square",
    logo: "/images/project-images/project-logos/wealth-square-logo-dark.svg",
    category: "Commercial",
    location: "Gotri",
    carpetArea: "CARPET - 139 TO 699 Sq.Ft.",
    type: "SHOWROOMS • SHOPS • OFFICES",
    rentalPrice: "₹45,000 / month",
    unitNumber: "Office 304",
    price: "Price on Request",
    reraId: "PR/GJ/VADODARA/VADODARA/Others/CAA00001/010121",
    reraLink: "https://gujrera.gujarat.gov.in/",
    phone: "+91 63567 77877",
    email: "wealthsquare@vihav.com",
    tagline: "Commercial Office Spaces In Gotri",
    description:
      "Premium commercial office spaces in Gotri, Vadodara, perfectly tailored to accommodate your business needs. Wealth Square offers a prime location at Yash Complex Junction.",
    vision: "Retail Excellence.",
    heroImage: "/images/project-images/project-tiles/wealth-square.webp",
    desktopHeroImage:
      "/images/project-images/hero-banner/desktop-banner/wealth-square.webp",
    mobileHeroImage:
      "/images/project-images/hero-banner/mobile-banner/wealth-square.webp",
    galleryImages: [
      "/images/project-images/projects/wealth-square-project-images/gallery/ws-gallery-image-1.webp",
      "/images/project-images/projects/wealth-square-project-images/gallery/ws-gallery-image-2.webp",
      "/images/project-images/projects/wealth-square-project-images/gallery/ws-gallery-image-3.webp",
      "/images/project-images/projects/wealth-square-project-images/gallery/ws-gallery-image-4.webp",
      "/images/project-images/projects/wealth-square-project-images/gallery/ws-gallery-image-6.webp",
    ],
    floorPlans: [
      {
        id: "fp-ground",
        title: "Ground Floor Plan",
        image:
          "/images/project-images/projects/wealth-square-project-images/floor-plans/Wealth-Square-Ground-Floor-Plan.webp",
        type: "Plan",
      },
      {
        id: "fp-first",
        title: "First Floor Plan",
        image:
          "/images/project-images/projects/wealth-square-project-images/floor-plans/Wealth-Square-First-Floor-Plan.webp",
        type: "Plan",
      },
      {
        id: "fp-second",
        title: "Second Floor Plan",
        image:
          "/images/project-images/projects/wealth-square-project-images/floor-plans/Wealth-Square-Second-Floor-Plan.webp",
        type: "Plan",
      },
      {
        id: "fp-sixth",
        title: "Sixth Floor Plan",
        image:
          "/images/project-images/projects/wealth-square-project-images/floor-plans/Wealth-Square-Sixth-Floor-Plan.webp",
        type: "Plan",
      },
    ],
    features: [
      "Facade Display",
      "Wide Frontage",
      "Mechanical Parking",
      "High Speed Elevator",
    ],
    amenitiesList: [
      { icon: "Car", label: "Ample Parking (Mechanical at Basement)" },
      { icon: "ArrowUpFromLine", label: "2 Highspeed Elevators" },
      { icon: "Shield", label: "Security & CCTV" },
      { icon: "Zap", label: "DG Power Backup (Common)" },
      { icon: "Droplets", label: "Washrooms in Each Unit" },
      { icon: "Fan", label: "Outdoor AC Provision" },
    ],
    specifications: [
      { category: "Structure", items: ["RCC Frame"] },
      { category: "Frontage", items: ["Wide Display Area"] },
      { category: "Flooring", items: ["Vitrified Tiles"] },
    ],
    connectivity: [{ label: "Gotri", time: "0 Mins" }],
    address:
      "At Yash Complex Junction, Opp. Axis Bank, Gotri main road, Vadodara, Gujarat, India.",
    coordinates: { lat: 22.3157889, lng: 73.1371872 },
    googleMapsLink: "https://maps.app.goo.gl/pzqifFZQ5hDbAViw8",
    mapEmbed:
      "https://maps.google.com/maps?q=Wealth+Square+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
    filterData: {
      category: "Commercial",
      transactionType: ["Buy", "Lease", "Rent"],
      type: ["showrooms"],
      possession: "Completed",
    },
  },
  {
    id: "vtc",
    srd: "62a6fda4ed23e90a9094fb7f", // VIHAV TRADE CENTER
    status: "Completed",
    link: "/projects/vtc/",
    slug: "vtc",
    title: "VTC",
    logo: "/images/project-images/project-logos/vtc-logo-dark.svg",
    category: "Commercial",
    location: "Near Priya Cinema, Sevasi Bhayli",
    carpetArea: "CARPET - 153 TO 1265 Sq.Ft.",
    type: "SHOWROOMS, SHOPS & OFFICES",
    rentalPrice: "₹35,000 / month",
    unitNumber: "Showroom 101",
    price: "Price on Request",
    reraId: "PR/GJ/VADODARA/VADODARA/Others/CAA00001/010121",
    reraLink: "https://gujrera.gujarat.gov.in/",
    phone: "+91 72018 54854",
    email: "vtc@vihav.com",
    tagline: "A Commercial Hub In Vasna-Bhayli",
    description:
      "Vihav Trade Center is a premier commercial property on Vasna-Bhayli Road, Vadodara, offering offices & shops for businesses at prime location. The facilities are designed to enhance the business environment with great attention to detail.",
    vision: "Trade Hub.",
    heroImage: "/images/project-images/project-tiles/vtc.webp",
    desktopHeroImage:
      "/images/project-images/hero-banner/desktop-banner/vtc.webp",
    mobileHeroImage:
      "/images/project-images/hero-banner/mobile-banner/vtc.webp",
    galleryImages: [
      "/images/project-images/projects/vtc-project-images/gallery/vtc-gallery-image-1.webp",
      "/images/project-images/projects/vtc-project-images/gallery/vtc-gallery-image-2.webp",
      "/images/project-images/projects/vtc-project-images/gallery/vtc-gallery-image-3.webp",
      "/images/project-images/projects/vtc-project-images/gallery/vtc-gallery-image-4.webp",
      "/images/project-images/projects/vtc-project-images/gallery/vtc-gallery-image-5.webp",
      "/images/project-images/projects/vtc-project-images/gallery/vtc-gallery-image-6.webp",
      "/images/project-images/projects/vtc-project-images/gallery/vtc-gallery-image-7.webp",
      "/images/project-images/projects/vtc-project-images/gallery/vtc-gallery-image-8.webp",
    ],
    floorPlans: [
      {
        id: "fp-basement",
        title: "Basement Layout",
        image:
          "/images/project-images/projects/vtc-project-images/floor-plans/01-basement-layout-VTC.jpg-scaled.jpeg",
        type: "Plan",
      },
      {
        id: "fp-ground",
        title: "Ground Floor Layout",
        image:
          "/images/project-images/projects/vtc-project-images/floor-plans/GF-layout-VTC.jpg-scaled.jpeg",
        type: "Plan",
      },
      {
        id: "fp-first",
        title: "First Floor Plan",
        image:
          "/images/project-images/projects/vtc-project-images/floor-plans/VTC-First-Floor.jpg",
        type: "Plan",
      },
      {
        id: "fp-second",
        title: "Second Floor Plan",
        image:
          "/images/project-images/projects/vtc-project-images/floor-plans/VTC-Second-Floor.jpg",
        type: "Plan",
      },
    ],
    constructionImages: [
      "/images/project-images/projects/vtc-project-images/status-images/vtc_3.webp",
      "/images/project-images/projects/vtc-project-images/status-images/vtc_4.webp",
      "/images/project-images/projects/vtc-project-images/status-images/vtc_5.webp",
      "/images/project-images/projects/vtc-project-images/status-images/vtc_6.webp",
    ],
    features: ["Entertainment Vicinity", "Retail Focused", "High-Tech Glazing"],
    highlights: [
      {
        icon: "MapPin",
        title: "Prime Location",
        label: "Vasna-Bhayli",
        description: "Near Waves Club and Essar Petrol Pump.",
      },
      {
        icon: "Building",
        title: "Modern Design",
        label: "Separate Entrances",
        description: "Separate entrances for office and retail sections.",
      },
      {
        icon: "Zap",
        title: "Power Backup",
        label: "100% Backup",
        description: "100% power back-up for uninterrupted operations.",
      },
    ],
    amenitiesList: [
      { icon: "Video", label: "CCTV Surveillance" },
      { icon: "ArrowUpFromLine", label: "Standard Elevators" },
      { icon: "Car", label: "Basement & Ground Parking" },
      { icon: "Zap", label: "DG Backup (Common)" },
      { icon: "Droplets", label: "Water Proofing" },
      { icon: "GlassWater", label: "Separate Toilets" },
      { icon: "Wifi", label: "Internet Points" },
    ],
    specifications: [
      {
        category: "Structure",
        items: ["RCC Frame Structure", "Earthquake Resistance"],
      },
      {
        category: "Electrification",
        items: [
          "Concealed Copper Wiring",
          "Modular Switches",
          "Provision for 3 Phase Meter",
        ],
      },
      { category: "Flooring", items: ["Vitrified Tile Flooring"] },
      {
        category: "Finishing",
        items: ["Inside: Putty/Primer", "Outside: Exterior Paints"],
      },
      {
        category: "Exterior",
        items: ["Hi-Tech glazing System with low heat transmission glass"],
      },
    ],
    connectivity: [{ label: "Priya Cinema", time: "0 Mins" }],
    address:
      "Nr. Waves Club. Nr. Essar Petrol Pump, 30 Mtr. Canal Ring Road, Vasna-Bhayli Road, Vadodara, Gujarat, India.",
    coordinates: { lat: 22.2848779, lng: 73.1297579 },
    googleMapsLink: "https://maps.app.goo.gl/N1kvb4f7jpkLrbYj7",
    mapEmbed:
      "https://maps.google.com/maps?q=Vihav+Trade+Centre+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
    filterData: {
      category: "Commercial",
      transactionType: ["Buy", "Lease", "Rent"],
      type: ["shops", "offices"],
      possession: "Completed",
    },
  },
  {
    id: "vbs",
    srd: "62a6fd97ed23e90877420a0d", // VIHAV BUSINESS SQUARE
    status: "Completed",
    link: "/projects/vbs/",
    slug: "vbs",
    title: "VBS",
    logo: "/images/project-images/project-logos/vbs-logo.svg",
    category: "Commercial",
    location: "Gotri Main Road",
    carpetArea: "CARPET - 937 TO 1164 Sq.Ft.",
    type: "SHOWROOMS",
    price: "Price on Request",
    reraId: "PR/GJ/VADODARA/VADODARA/Others/CAA00001/010121",
    reraLink: "https://gujrera.gujarat.gov.in/",
    phone: "+91 72018 54854",
    email: "vbs@vihav.com",
    tagline: "Your Business Landmark on Sunpharma Road",
    description:
      "Vihav Business Square is a state-of-the-art commercial development located on the highly sought-after Sunpharma Road in Atladara, Vadodara. Designed for growing businesses, smart investors, and professionals alike, VBS offers premium showrooms, shops, and offices for sale.",
    vision: "Business for Everyone.",
    heroImage: "/images/project-images/project-tiles/vbs.webp",
    desktopHeroImage:
      "/images/project-images/hero-banner/desktop-banner/vbs.webp",
    mobileHeroImage:
      "/images/project-images/hero-banner/mobile-banner/vbs.webp",
    galleryImages: [
      "/images/project-images/projects/vbs-project-images/gallery/vbs-gallery-image-1.webp",
      "/images/project-images/projects/vbs-project-images/gallery/vbs-gallery-image-2.webp",
      "/images/project-images/projects/vbs-project-images/gallery/vbs-gallery-image-3.webp",
      "/images/project-images/projects/vbs-project-images/gallery/vbs-gallery-image-4.webp",
      "/images/project-images/projects/vbs-project-images/gallery/vbs-gallery-image-5.webp",
      "/images/project-images/projects/vbs-project-images/gallery/vbs-gallery-image-6.webp",
      "/images/project-images/projects/vbs-project-images/gallery/vbs-gallery-image-7.webp",
    ],
    floorPlans: [
      {
        id: "fp-ground",
        title: "Ground & First Floor Plan",
        image:
          "/images/project-images/projects/vbs-project-images/floor-plans/VBS-Ground-AND-First-Floor.jpg",
        type: "Plan",
      },
      {
        id: "fp-second",
        title: "Second Floor Plan",
        image:
          "/images/project-images/projects/vbs-project-images/floor-plans/vbs-second-floor-plan.webp",
        type: "Plan",
      },
      {
        id: "fp-third",
        title: "Third Floor Plan",
        image:
          "/images/project-images/projects/vbs-project-images/floor-plans/vbs-third-floor-plan.webp",
        type: "Plan",
      },
      {
        id: "fp-fourth",
        title: "Fourth Floor Plan",
        image:
          "/images/project-images/projects/vbs-project-images/floor-plans/vbs-fourth-floor-plan.webp",
        type: "Plan",
      },
      {
        id: "fp-fifth",
        title: "5th-7th Floor Plan",
        image:
          "/images/project-images/projects/vbs-project-images/floor-plans/5th-6th-7th-Floor-Plan-VBS.jpg",
        type: "Plan",
      },
    ],
    constructionImages: [
      "/images/project-images/projects/vbs-project-images/status-images/vbs_1.webp",
      "/images/project-images/projects/vbs-project-images/status-images/vbs_2.webp",
      "/images/project-images/projects/vbs-project-images/status-images/vbs_3.webp",
      "/images/project-images/projects/vbs-project-images/status-images/vbs_4.webp",
      "/images/project-images/projects/vbs-project-images/status-images/vbs_5.webp",
    ],
    features: ["Prime Location", "Excellent ROI", "Terrace Amenities"],
    highlights: [
      {
        icon: "MapPin",
        title: "Prime Location",
        label: "Sunpharma Road",
        description: "Located in Atladara, Vadodara.",
      },
      {
        icon: "TrendingUp",
        title: "Investment",
        label: "Excellent ROI",
        description:
          "Excellent ROI potential and long-term capital appreciation.",
      },
    ],
    amenitiesList: [
      { icon: "Car", label: "Ample Parking (Ground + Basement)" },
      { icon: "ArrowUpFromLine", label: "Highspeed Elevators" },
      { icon: "Zap", label: "DG Power Backup" },
      { icon: "Video", label: "CCTV Surveillance" },
      { icon: "Armchair", label: "Double Height Entrance Foyer" },
      { icon: "Layout", label: "Conference, Pantry & Rec Area at Terrace" },
    ],
    specifications: [
      { category: "Flooring", items: ["Vitrified Tiles"] },
      { category: "Shutters", items: ["Rolling Shutters"] },
      { category: "Electric", items: ["Standard Points"] },
    ],
    connectivity: [{ label: "Gotri", time: "0 Mins" }],
    address:
      "Nr. HCG Cancer Hospital, Sunpharma Road, Atladara, Vadodara – 390020, Gujarat, India.",
    coordinates: { lat: 22.2809233, lng: 73.1556694 },
    googleMapsLink: "https://maps.app.goo.gl/twr3V6bTg8sAZH4u9",
    mapEmbed:
      "https://maps.google.com/maps?q=Vihav+Business+Square+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
    filterData: {
      category: "Commercial",
      transactionType: ["Buy", "Lease", "Rent"],
      type: ["showrooms", "shops", "offices"],
      possession: "Completed",
    },
  },
  {
    id: "supremus",
    srd: "62a6fdbded23e915bf4153e6", // VIHAV SUPREMUS 1
    status: "Completed",
    link: "/projects/supremus/",
    slug: "supremus",
    title: "Supremus",
    logo: "/images/project-images/project-logos/supremus1-logo-dark.svg",
    category: "Commercial",
    location: "New Alkapuri, Gotri",
    carpetArea: "CARPET - 1219 TO 1720 Sq.Ft.",
    type: "SHOWROOMS",
    price: "Price on Request",
    reraId: "PR/GJ/VADODARA/VADODARA/Others/CAA00001/010121",
    reraLink: "https://gujrera.gujarat.gov.in/",
    phone: "+91 72018 51851",
    email: "supremus@vihav.com",
    tagline: "Premium Commercial Spaces on Gotri Road",
    description:
      "Vihav Supremus redefines business presence in Vadodara with its strategic location on Gotri Road. Designed to elevate the way you work, Vihav Supremus offers well-planned shops and offices for sale in Gotri – ideal for forward-thinking entrepreneurs, investors, and professionals.",
    vision: "Corporate Legacy.",
    heroImage: "/images/project-images/project-tiles/supremus-1.webp",

    desktopHeroImage:
      "/images/project-images/hero-banner/desktop-banner/supremus1.webp",
    mobileHeroImage:
      "/images/project-images/hero-banner/mobile-banner/supremus1.webp",
    galleryImages: [
      "/images/project-images/projects/supremus-project-images/gallery/supremus-gallery-image-1.webp",
      "/images/project-images/projects/supremus-project-images/gallery/supremus-gallery-image-2.webp",
      "/images/project-images/projects/supremus-project-images/gallery/supremus-gallery-image-3.webp",
      "/images/project-images/projects/supremus-project-images/gallery/supremus-gallery-image-4.webp",
      "/images/project-images/projects/supremus-project-images/gallery/supremus-gallery-image-5.webp",
    ],
    floorPlans: [
      {
        id: "fp-1",
        title: "Supremus SOLD OUT",
        image:
          "/images/project-images/projects/supremus-project-images/floor-plans/supremus-1-soldout.webp",
        type: "Plan",
      },
    ],
    constructionImages: [
      "/images/project-images/projects/supremus-project-images/status-images/supremus_3.webp",
      "/images/project-images/projects/supremus-project-images/status-images/supremus_2.webp",
      "/images/project-images/projects/supremus-project-images/status-images/supremus-4.webp",
      "/images/project-images/projects/supremus-project-images/status-images/supremus_1.webp",
    ],
    features: [
      "Established Hub",
      "Modern Amenities",
      "Double Height Lobby",
      "OTS Ducts",
    ],
    highlights: [
      {
        icon: "MapPin",
        title: "Prime Frontage",
        label: "Gotri Road",
        description:
          "Prime frontage on Gotri Road, Vadodara’s growth corridor.",
      },
      {
        icon: "TrendingUp",
        title: "Investment",
        label: "Capital Appreciation",
        description:
          "Excellent potential for rental income and long-term appreciation.",
      },
    ],
    amenitiesList: [
      { icon: "Video", label: "CCTV Surveillance" },
      { icon: "ArrowUpFromLine", label: "2 Highspeed Elevators" },
      { icon: "ArrowUpFromLine", label: "Goods/Service Elevator" },
      { icon: "Armchair", label: "Double Height AC Lobby" },
      { icon: "Car", label: "Ample Parking (Ground + 2 Basements)" },
      { icon: "Dumbbell", label: "Gym at 14th Level" },
      { icon: "Layout", label: "Conference Room at 14th Level" },
      { icon: "Coffee", label: "Built-in Pantry in Units" },
      { icon: "Zap", label: "DG Power Backup" },
    ],
    specifications: [
      { category: "Structure", items: ["RCC Frame"] },
      { category: "Flooring", items: ["Vitrified Tiles"] },
      { category: "Finishing", items: ["Internal Plaster"] },
      { category: "Innovation", items: ["Well planned OTS ducts for AC"] },
    ],
    connectivity: [{ label: "Gotri", time: "0 Mins" }],
    address: "Near Iscon Heights, Gotri, Vadodara, Gujarat 390021, India",
    coordinates: { lat: 22.3152431, lng: 73.1417008 },
    googleMapsLink: "https://maps.app.goo.gl/vfongeqjRR5zFJteA",
    mapEmbed:
      "https://maps.google.com/maps?q=Vihav+Supremus+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
    filterData: {
      category: "Commercial",
      transactionType: ["Buy", "Lease", "Rent"],
      type: ["showrooms", "shops", "offices"],
      possession: "Completed",
    },
  },
  {
    id: "elite-square",
    srd: "62a6fdd7ed23e91a321dac81", // VIHAV ELITE SQUARE
    link: "/projects/elite-square/",
    slug: "elite-square",
    title: "Elite Square",
    status: "Completed",
    category: "Commercial",
    location: "Sun Pharma 30 Mtr. Main Road",
    carpetArea: "CARPET - 296 TO 3200 Sq.Ft.",
    type: "SHOPS & Showrooms",
    price: "Price on Request",
    reraId: "PR/GJ/VADODARA/VADODARA/Others/CAA00001/010121",
    reraLink: "https://gujrera.gujarat.gov.in/",
    phone: "+91 88663 41272",
    email: "sales@vihav.com",
    tagline: "Premium Business Center in Vadodara",
    description:
      "At Sun Pharma Road-Vadodara, Vihav Elite Square offers exceptional shops and office spaces with reasonable and flexible lease terms. A premium business center designed for success.",
    vision: "Elite Business Address.",
    heroImage: "/images/project-images/project-tiles/elite-square.webp",
    desktopHeroImage:
      "/images/project-images/hero-banner/desktop-banner/elite-square.webp",
    mobileHeroImage:
      "/images/project-images/hero-banner/mobile-banner/elite-square.webp",
    galleryImages: [
      "/images/project-images/projects/elite-square-project-images/sample/elite_square_1.webp",
      "/images/project-images/projects/elite-square-project-images/sample/elite_square_2.webp",
      "/images/project-images/projects/elite-square-project-images/sample/elite_square_3.webp",
      "/images/project-images/projects/elite-square-project-images/sample/elite_square_4.webp",
      "/images/project-images/projects/elite-square-project-images/sample/elite_square_5.webp",
    ],
    floorPlans: [
      {
        id: "fp-ground",
        title: "Ground Floor Plan",
        image:
          "/images/project-images/projects/elite-square-project-images/floor-plans/elite-square-ground-floor-plan.webp",
        type: "Plan",
      },
      {
        id: "fp-first",
        title: "First Floor Plan",
        image:
          "/images/project-images/projects/elite-square-project-images/floor-plans/elite-square-first-floor-plan.webp",
        type: "Plan",
      },
      {
        id: "fp-second",
        title: "Second & Third Floor Plan",
        image:
          "/images/project-images/projects/elite-square-project-images/floor-plans/elite-square-second-third-floor-plan.webp",
        type: "Plan",
      },
      {
        id: "fp-fourth",
        title: "Fourth Floor Plan",
        image:
          "/images/project-images/projects/elite-square-project-images/floor-plans/elite-square-fourth-floor-plan.webp",
        type: "Plan",
      },
    ],
    features: ["Prime Location", "Premium Facade", "Flexible Terms"],
    amenitiesList: [
      { icon: "Video", label: "CCTV Surveillance" },
      { icon: "ArrowUpFromLine", label: "Standard Elevators" },
      { icon: "Car", label: "Ample Parking (Basement & Ground)" },
      { icon: "Droplets", label: "Water Proofing on Terrace" },
      { icon: "Zap", label: "DG Backup (Common)" },
      { icon: "Droplets", label: "Ample Water Supply" },
      { icon: "GlassWater", label: "Toilet in Every Unit" },
    ],
    specifications: [
      {
        category: "Structure",
        items: ["RCC Frame Structure", "Earthquake resistant"],
      },
      { category: "Flooring", items: ["Vitrified Tile Flooring"] },
      { category: "Facade", items: ["Hi-Tech Glazing System"] },
      {
        category: "Electrification",
        items: ["Concealed Copper Wiring", "Modular Switches"],
      },
      {
        category: "Finishing",
        items: ["Input: Putty/Primer", "Output: Exterior Paints"],
      },
    ],
    connectivity: [{ label: "Sun Pharma Rd", time: "0 Mins" }],
    address: "SunPharma Road, Vadodara, Gujarat, India.",
    coordinates: { lat: 22.2797489, lng: 73.1407281 },
    googleMapsLink: "https://maps.app.goo.gl/toBT1sk6DoXa5jtG6",
    mapEmbed:
      "https://maps.google.com/maps?q=Elite+Square+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
    filterData: {
      category: "Commercial",
      transactionType: ["Buy", "Lease", "Rent"],
      type: ["shops", "showrooms"],
      possession: "Completed",
    },
  },
  {
    id: "ensign",
    slug: "ensign",
    title: "Ensign",
    status: "Completed",
    category: "Commercial",
    location: "Gotri",
    type: "Commercial Shops, Showrooms & Offices",
    price: "Price on Request",
    phone: "+91 88663 41272",
    email: "sales@vihav.com",
    description: "A sign of success. Premium offices in Gotri.",
    vision: "Ensign of Success.",
    heroImage:
      "/images/project-images/projects/cbd-res/gallery/vihav-cbd-gallery (3).webp", // Office Placeholder
    features: ["Corporate Ambience", "Strategic Location"],
    amenitiesList: [
      { icon: "Shield", label: "Security" },
      { icon: "Car", label: "Parking" },
      { icon: "ArrowUpFromLine", label: "Lifts" },
    ],
    specifications: [{ category: "Flooring", items: ["Vitrified Tiles"] }],
    connectivity: [{ label: "Gotri", time: "0 Mins" }],
    address: "Gotri, Vadodara",
    coordinates: { lat: 22.3072663, lng: 73.1353404 },
    googleMapsLink: "https://maps.app.goo.gl/7wFvVWPpZvjXgyUw6",
    mapEmbed:
      "https://maps.google.com/maps?q=Vihav+Ensign+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
    filterData: {
      category: "Commercial",
      possession: "Completed",
    },
  },
  {
    id: "excellus",
    slug: "excellus",
    title: "Excellus",
    status: "Completed",
    category: "Commercial",
    location: "Vasna Bhayli Road",
    type: "Commercial Shops, Offices, & Showrooms",
    price: "Price on Request",
    phone: "+91 88663 41272",
    email: "sales@vihav.com",
    description: "Excellent business spaces for growing enterprises.",
    vision: "Business Excellence.",
    heroImage:
      "/images/project-images/projects/cbd-res/gallery/vihav-cbd-gallery (3).webp", // Office Placeholder
    features: ["Road Frontage", "Glass Facade"],
    amenitiesList: [
      { icon: "Shield", label: "Security" },
      { icon: "Car", label: "Parking" },
      { icon: "ArrowUpFromLine", label: "Lifts" },
    ],
    specifications: [{ category: "Flooring", items: ["Vitrified Tiles"] }],
    connectivity: [{ label: "Vasna Bhayli", time: "0 Mins" }],
    address: "Vasna Bhayli Road, Vadodara",
    coordinates: { lat: 22.2915973, lng: 73.1327147 },
    googleMapsLink: "https://maps.app.goo.gl/5ipyfQkJ28qvHjEN7",
    mapEmbed:
      "https://maps.google.com/maps?q=Vihav+Excelus+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
    filterData: {
      category: "Commercial",
      possession: "Completed",
    },
  },
];

export const getProjectBySlug = (slug) => PROJECTS.find((p) => p.slug === slug);
export const getProjectsByCategory = (category) =>
  PROJECTS.filter((p) => p.category === category);
export const getAllProjects = () => PROJECTS;
