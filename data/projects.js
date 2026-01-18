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
        link: "/projects/keystone-select",
        slug: "keystone-select",
        title: "Keystone Select",
        category: "Residential",
        location: "Nr Navrachana University, Bhayli",
        carpetArea: "5772 Sq.Ft. Onwards",
        type: "4B2HK & 5B2HK APPARTMENT",
        price: "2.05 Cr",
        status: "Upcoming",
        progress: 75,
        reraId: "PR/GJ/VADODARA/VADODARA/Others/RAA00001/010121",
        reraLink: "https://gujrera.gujarat.gov.in/",
        phone: "+91 7201 855 855",
        email: "keystoneselect@vihav.com",
        description: "A signature address that balances comfort, connectivity, and prestige. Every home is thoughtfully planned to offer generous proportions (3120 - 5046 sq. ft.), seamless layouts, and abundant natural light. Contemporary architecture with timeless appeal.",
        vision: "75MTR MAIN ROAD.",
        heroImage: "/images/project-images/project-tiles/Select.jpg",
        galleryImages: ["https://www.vihav.com/wp-content/uploads/Card-Select.webp"],
        features: ["Carpet: 3120-5046 sq.ft", "Near 75m Ring Road", "Abundant Natural Light", "Exclusive Penthouses"],
        floorPlans: [
            {
                id: "fp-1",
                title: "Typical Floor Plan - 4B2HK",
                type: "4BHK",
                image: "https://images.unsplash.com/photo-1590486803833-1c5dc8ce84ac?q=80&w=1000&auto=format&fit=crop", // Placeholder
                dimensions: "3120 Sq. Ft."
            },
            {
                id: "fp-2",
                title: "Penthouse Lower Level",
                type: "Penthouse",
                image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop", // Placeholder
                dimensions: "5046 Sq. Ft."
            },
            {
                id: "fp-3",
                title: "Penthouse Upper Level",
                type: "Penthouse",
                image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop", // Placeholder
                dimensions: "5046 Sq. Ft."
            }
        ],
        highlights: [
            { icon: "FileText", title: "Grand Dimensions", label: "3120 - 5046 Sq. Ft.", description: "Expansive 4B2HK Flats & 5B2HK Penthouses designed for grandeur." },
            { icon: "Check", title: "Prime Privacy", label: "Select Community", description: "A low-density development ensuring peace and exclusivity." },
            { icon: "MapPin", title: "Strategic Hub", label: "75m Ring Road", description: "Seamless connectivity to business and leisure destinations." }
        ],
        amenitiesList: [
            { icon: "Shield", label: "24/7 Security" },
            { icon: "Trees", label: "Landscape Garden" },
            { icon: "Dumbbell", label: "Gymnasium" },
            { icon: "Users", label: "Community Hall" },
            { icon: "Gamepad2", label: "Indoor Games" },
            { icon: "Car", label: "Allotted Parking" }
        ],
        specifications: [
            { category: "Flooring", items: ["Italian Marble in Living/Dining", "Wooden Flooring in Master Bedroom", "Vitrified Tiles in other rooms"] },
            { category: "Kitchen", items: ["Granite Platform", "Stainless Steel Sink", "Glazed Tiles dado up to lintel level"] },
            { category: "Doors & Windows", items: ["Decorative Main Door", "Anodized Aluminum Sliding Windows"] },
            { category: "Electrification", items: ["Concealed Copper Wiring", "Modular Switches", "AC Points in all bedrooms"] }
        ],
        connectivity: [{ label: "Navrachana Uni", time: "2 Mins" }, { label: "75m Ring Road", time: "0 Mins" }],
        address: "75 MTR. MAIN ROAD , BHAYLI",
        coordinates: { lat: 22.2912, lng: 73.1360 },
        mapEmbed: "https://maps.google.com/maps?q=Keystone+Select+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
        constructionImages: [
            "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1590486803833-1c5dc8ce84ac?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop"
        ],
        filterData: {
            category: "Residential",
            type: ["4bhk", "5bhk", "penthouse", "Apartments"],
            possession: "Newly Launched"
        }
    },
    {
        id: "keystone-51",
        link: "/projects/keystone-51",
        status: "Upcoming",
        slug: "keystone-51",
        title: "Keystone 51",
        category: "Residential",
        location: "Nr Navrachana University, Bhayli",
        type: "4BHK VILLA",
        carpetArea: "Plot: 1257 Sq.Ft. Onwards",
        price: "1.61 Cr",
        reraId: "PAA15293/020625/311227",
        reraLink: "https://gujrera.gujarat.gov.in/",
        phone: "+91 87916 49164",
        email: "keystone51@vihav.com",
        tagline: "Exclusive 4BHK Residences",
        description: "Only a select few will experience life at Keystone 51, making it one of the most exclusive residential addresses in Vadodara. 1,00,000 sq.ft for just 51 families. Designed with modern families in mind, each home features expansive living areas, high-end finishes, and is four-side open with 2500 sq.ft Built-up Area.",
        vision: "1,00,000 SQ.FT FOR JUST 51 FAMILIES.",
        heroImage: "/images/project-images/project-tiles/keystone-51.jpg",
        galleryImages: [
            "/images/project-images/project-tiles/keystone-51.jpg",
            "https://www.vihav.com/wp-content/uploads/Vihav-51-Living-room-cam-03-a-scaled.webp",
            "https://www.vihav.com/wp-content/uploads/Vihav-51-Cam-01-a-scaled.webp",
            "https://www.vihav.com/wp-content/uploads/Vihav-51-Cam-09-a-scaled.webp",
            "https://www.vihav.com/wp-content/uploads/2nd-floor-bedroom-cam-02-a-scaled.webp"
        ],
        features: ["1,00,000 Sq.Ft Land", "Only 51 Families", "4-Side Open", "2500 Sq.Ft Built-up Area"],
        highlights: [
            { icon: "Users", title: "Elite Community", label: "51 Families", description: "Only a select few will experience life at Keystone 51, making it one of the most exclusive residential addresses." },
            { icon: "MapPin", title: "Prime Location", label: "Bhayli", description: "Convenient access to major business districts, top schools, universities, and healthcare facilities." },
            { icon: "Shield", title: "Unmatched Luxury", label: "Premium Life", description: "A lifestyle that includes premium amenities such as fitness center, pool, and green spaces." },
            { icon: "Maximize", title: "Spacious Homes", label: "4 Side Open", description: "Four side open with 2500 sq.ft Built-up Area designed for modern families." }
        ],
        amenitiesList: [
            { icon: "Dumbbell", label: "Fully Equipped Gym" },
            { icon: "Waves", label: "Swimming Pool" },
            { icon: "Trees", label: "Green Spaces" },
            { icon: "Shield", label: "24/7 Security" }
        ],
        specifications: [
            { category: "Community", items: ["Elite Community of 51 Families", "1,00,000 Sq.Ft Land Area"] },
            { category: "Residence", items: ["Spacious 4BHK Residences", "2500 Sq.Ft Built-up Area", "4-Side Open Layout"] },
            { category: "Location", items: ["Near Navrachana University", "Off 75 Mtr Ring Road"] }
        ],
        connectivity: [{ label: "Navrachana Uni", time: "2 Mins" }, { label: "75m Ring Road", time: "0 Mins" }],
        address: "Near Navrachana University, Off. 75 Mtr. Ring Road, Bhayli – Vadodara",
        coordinates: { lat: 22.2960, lng: 73.1420 },
        mapEmbed: "https://maps.google.com/maps?q=Keystone+51+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
        filterData: {
            category: "Residential",
            type: ["4bhk", "Bunglow", "Bunglow"],
            possession: "Under construction"
        }
    },
    {
        id: "keystone-niwa",
        link: "/projects/keystone-niwa-4b2hk-apartments-in-vadodara/",
        slug: "keystone-niwa-4b2hk-apartments-in-vadodara",
        title: "Keystone Niwa",
        logo: "/images/project-images/project-logos/keystone-niwa-logo.svg",
        category: "Residential",
        location: "Opp. Skyvillas, New Alkapuri",
        carpetArea: "5000 Sq. Ft.",
        type: "4B2HK & 5B2HK APPARTMENT",
        price: "4.21 Cr",
        status: "Upcoming",
        progress: 40,
        reraId: "RAA16029/181025/311230",
        reraLink: "https://gujrera.gujarat.gov.in/",
        phone: "+91 7201 950 950",
        email: "keystoneniwa@vihav.com",
        tagline: "Luxurious 4BR 2H 2K Garden Apartments and Penthouses",
        description: "Niwa, meaning garden in Japanese, reflects our belief that a home should feel like nature never left us. At Keystone Niwa, we’ve reimagined luxury to grow not just above ground, but within it. Here, greenery isn’t a view from your window, it’s part of your everyday living. From private garden balconies to lush common spaces, Niwa is where you don’t just come home, you arrive in nature.",
        vision: "ONE FLOOR. ONE APARTMENT.",
        heroImage: "/images/project-images/project-tiles/keystone-niwa.jpg",
        heroVideo: "/videos/niwa.mp4",
        galleryImages: [
            "https://www.vihav.com/wp-content/uploads/Hurun-KEYSTONE-NIWA-Desktop-Slider-2048-×-778-px-01.webp",
            "https://www.vihav.com/wp-content/uploads/home-gray-bordered-extra-width.png",
            "https://www.vihav.com/wp-content/uploads/tree-bird-space.png",
            "https://www.vihav.com/wp-content/uploads/customized-leaf-bg-scaled.png",
            "https://www.vihav.com/wp-content/uploads/line-element-scaled.png",
            "https://www.vihav.com/wp-content/uploads/Hurun-KEYSTONE-NIWA-Mobile-Slider-1080-×-1080-px-01.webp"
        ],
        features: [
            "Ultra-exclusive: 45,000 sq. ft. for just 26 families",
            "Absolute privacy: One floor, one residence",
            "Super luxurious 5,000 sq ft carpet area",
            "Dual Kitchens: Gourmet and Utility"
        ],
        highlights: [
            { icon: "Trees", title: "Nurtured Nature", label: "35% Not Built", description: "Over 35% of the plot isn’t built. It’s nurtured." },
            { icon: "Trees", title: "Garden Lands", label: "1/3rd Dedicated", description: "Over one-third of the land is dedicated to gardens." },
            { icon: "Maximize", title: "Open to Greens", label: "25% Open", description: "25% of your home opens to greens." },
            { icon: "Trees", title: "Verdant Views", label: "Garden Balconies", description: "Garden balconies. Verdant views." }
        ],
        amenitiesList: [
            { icon: "Waves", label: "Pool & Gazebo", note: "Signature Penthouse" },
            { icon: "Utensils", label: "Dual Kitchens" },
            { icon: "Coffee", label: "Resort-style Leisure" },
            { icon: "Shield", label: "Staycation Amenities" },
            { icon: "Trees", label: "Private Garden Balconies" },
            { icon: "Users", label: "Ultra-exclusive Community" }
        ],
        specifications: [
            { category: "Exclusivity", items: ["One Floor One Apartment", "Just 26 Families"] },
            { category: "Space", items: ["5000 Sq. Ft. Carpet Area", "45,000 Sq. Ft. Total Area"] },
            { category: "Luxury", items: ["Dual Kitchens (Gourmet & Utility)", "Private Pool (Penthouse)"] }
        ],
        connectivity: [{ label: "New Alkapuri", time: "0 Mins" }, { label: "Skyvillas", time: "Opposite" }],
        address: "Keystone Niwa, Opp. Keystone Skyvillas, New Alkapuri, Vadodara",
        coordinates: { lat: 22.3065, lng: 73.1485 },
        mapEmbed: "https://maps.google.com/maps?q=Keystone+Niwa+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
        filterData: {
            category: "Residential",
            type: ["4bhk", "penthouse", "Apartments"],
            possession: "Under construction"
        }
    },
    {
        id: "keystone-clermont",
        link: "/projects/keystone-clermont-4b2hk-apartments-in-vadodara/",
        status: "Newly Launched",
        slug: "keystone-clermont-4b2hk-apartments-in-vadodara",
        title: "Keystone Clermont",
        category: "Residential",
        location: "75 Mtr Main Road, Bhayli",
        carpetArea: "3818 & 5583 Sq.Ft.",
        type: "4B2HK & 5B2HK APPARTMENT",
        price: "2.8 Cr",
        reraId: "PR/GJ/VADODARA/VADODARA/Others/RAA00869/160321",
        reraLink: "https://gujrera.gujarat.gov.in/",
        phone: "+91 7434 840 840",
        email: "clermont@vihav.com",
        tagline: "4B2HK Apartments & 5B2HK Penthouses",
        description: "Explore the future of luxury living with Keystone Clermont, an upcoming real estate project by Vihav Group, offering stunning 4B2HK Apartments and 5B2HK Penthouses at the prime location of Vadodara. Whether you’re looking for an investment opportunity or a place to call home, Keystone Clermont combines modern design, world-class amenities, and unparalleled convenience.",
        vision: "1 FLOOR 2 UNIT - EXTRA TERRACE APARTMENT",
        heroImage: "/images/project-images/project-tiles/clermont.jpg",
        galleryImages: ["https://www.vihav.com/wp-content/uploads/vihav-clmnt-new-images-21-scaled-1-e1757592539176.webp"],
        features: ["Double Height Badminton Court", "Covered Swimming Pool", "Skating Rink", "Gazebo Seating"],
        highlights: [
            { icon: "Shield", title: "Luxury Living", label: "Future Ready", description: "Keystone Clermont combines modern design, world-class amenities, and unparalleled convenience." },
            { icon: "Trees", title: "Grandeur Flooring", label: "Italian Marble", description: "Italian floor in living, kitchen and dining area for a touch of elegance." },
            { icon: "MapPin", title: "Prime Location", label: "Bhayli", description: "Located near Navrachana University on 75mtr Ring Road." }
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
            { icon: "Trees", label: "Toddlers Room" }
        ],
        specifications: [
            { category: "Structure", items: ["Earthquake Resistant RCC Frame", "High Quality block masonry"] },
            { category: "Flooring", items: ["Italian floor in Living/Kitchen/Dining", "Wooden Floor in Master Bedroom", "Full Body Vitrified Tiles elsewhere"] },
            { category: "Kitchen", items: ["Premium Stone Platform with Quartz Sink", "Designer Ceramic Tiles Dado", "Wash Area with Natural Stone Floor"] },
            { category: "Bathrooms", items: ["Designer Ceramic Tiles to Lintel Level", "Premium Counter for Basins", "HANSGROHE/TOTO/KOHLER Fittings"] },
            { category: "Doors & Windows", items: ["Veneer Paneling on Main Door", "Veneered Flush Internal Doors", "High Quality Powder Coated Aluminum/UPVC Sliders"] },
            { category: "Finishing", items: ["Internal Mala Plaster with Putty/Primer", "Exterior Texture Finish Paints"] }
        ],
        connectivity: [{ label: "Navrachana Uni", time: "Nearby" }, { label: "75m Ring Road", time: "0 Mins" }],
        address: "Near Navrachana University, 75mtr Ring Road, Bhayli, Vadodara, Gujarat, India.",
        coordinates: { lat: 22.3150, lng: 73.1580 },
        mapEmbed: "https://maps.google.com/maps?q=Keystone+Clermont+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
        constructionImages: [
            "https://www.vihav.com/wp-content/uploads/compressed_clermont-site-update-7.webp",
            "https://www.vihav.com/wp-content/uploads/compressed_clermont-site-update-9.webp"
        ],
        filterData: {
            category: "Residential",
            type: ["4bhk", "5bhk", "penthouse", "Apartments"],
            possession: "Under construction"
        }
    },
    {
        id: "keystone-30",
        link: "https://keystone30.in/",
        status: "Ongoing",
        slug: "keystone-30",
        title: "Keystone 30",
        category: "Residential",
        location: "New Vastral, Ahmedabad",
        carpetArea: "Plot: 1592 - 2927 Sq.Ft.",
        type: "4BHK BUNGALOW",
        price: "2.3 Cr",
        reraId: "PR/GJ/VADODARA/VADODARA/Others/RAA00001/010121",
        reraLink: "https://gujrera.gujarat.gov.in/",
        phone: "+91 88663 41272",
        email: "sales@vihav.com",
        description: "Ultra-luxurious 5 & 6 BHK residences for the elite.",
        vision: "BE-SPOKE BUNGALOWS, NR. SP RING ROAD.",
        heroImage: "/images/project-images/project-tiles/keystone-30.jpg",
        galleryImages: ["/images/project-images/project-tiles/keystone-30.jpg"],
        features: ["Large Floor Plates", "Luxury Specs"],
        amenitiesList: [
            { icon: "Shield", label: "Security" },
            { icon: "Coffee", label: "Lounge" },
            { icon: "Dumbbell", label: "Gym" },
            { icon: "ArrowUpFromLine", label: "Private Lift" },
            { icon: "Car", label: "Ample Parking" },
            { icon: "Video", label: "CCTV" }
        ],
        specifications: [
            { category: "Flooring", items: ["Premium Marble", "Wooden Flooring"] },
            { category: "Kitchen", items: ["Modular Layout"] },
            { category: "Walls", items: ["POP Finish", "Premium Paint"] },
            { category: "Electric", items: ["Automation Ready"] }
        ],
        connectivity: [{ label: "New Alkapuri", time: "0 Mins" }],
        address: "New Alkapuri, Vadodara",
        coordinates: { lat: 22.3180, lng: 73.1500 },
        mapEmbed: "https://maps.google.com/maps?q=Keystone+30+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
        filterData: {
            category: "Residential",
            type: ["5bhk", "penthouse", "Apartments", "Bunglow"],
            possession: "Under construction"
        }
    },
    {
        id: "keystone-skyvillas-xl",
        link: "/projects/keystone-skyvillas-xl",
        status: "Ongoing",
        slug: "skyvillas-xl",
        title: "Keystone Skyvillas XL",
        category: "Residential",
        location: "New Alkapuri, Gotri",
        carpetArea: "3737 - 4710 Sq.Ft.",
        type: "5B2HK APARTMENTS & 6B2HK PENTHOUSES",
        price: "2.55 Cr",
        reraId: "PR/GJ/VADODARA/VADODARA/Others/RAA00004/010121",
        reraLink: "https://gujrera.gujarat.gov.in/",
        phone: "+91 84900 77611",
        email: "keystoneskyvillasxl@vihav.com",
        tagline: "Redefining Luxury Living",
        description: "Keystone Skyvillas XL, where opulence meets architectural brilliance. Nestled in the heart of New Alkapuri, Vadodara’s most sought-after residential locale, this iconic address offers an exclusive collection of 5 BHK luxurious apartments, 6B2HK premium penthouses, and 5 BHK premium flats crafted for discerning homeowners.",
        vision: "THE LARGEST CARPET AREA PROPERTIES IN VADODARA",
        heroImage: "/images/project-images/project-tiles/skyvillas-xl.jpg",
        galleryImages: ["/images/project-images/project-tiles/skyvillas-xl.jpg"],
        features: ["30,000 Sq.Ft Amenities", "Only 2 Flats Per Floor", "Infinity Pool", "Personalized Lift"],
        highlights: [
            { icon: "Maximize", title: "Massive Scale", label: "30k Sq.Ft Amenities", description: "Upto 30,000 Sq. Ft. Area Dedicated For Amenities." },
            { icon: "Users", title: "Exclusive", label: "2 Flats/Floor", description: "Only 2 Flats Per Floor for ultimate privacy." },
            { icon: "ArrowUpFromLine", title: "Private Access", label: "Personal Lift", description: "Personalized Lift For Each Flat." },
            { icon: "Trees", title: "Grandeur", label: "160 Ft. Distance", description: "Approx 160 Ft. Distance Between Two Towers." },
            { icon: "MapPin", title: "Prime Spot", label: "New Alkapuri", description: "Big Campus in the most premium area." }
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
            { icon: "Trees", label: "Grass Paver Pathway" }
        ],
        specifications: [
            { category: "Structure", items: ["Earthquake Resistant RCC Frame"] },
            { category: "Flooring", items: ["Italian Flooring in Living/Dining/Kitchen", "Double Charged Vitrified in Rooms"] },
            { category: "Kitchen", items: ["Premium Stone Platform with Quartz Sink", "Wash Area with Natural Stone"] },
            { category: "Bathrooms", items: ["Designer Ceramic Tiles to Lintel Level", "Premium Stone Counters"] },
            { category: "Doors", items: ["Main Door: Veneer Paneling", "Internal: Wooden Frame with Flush Doors"] },
            { category: "Windows", items: ["High Quality Powder Coated Heavy Aluminum with Deu Glass"] }
        ],
        connectivity: [{ label: "Zydex", time: "Nearby" }],
        address: "Opp Greenwoods Bungalows, Near Zydex, Gotri, New Alkapuri, Vadodara, Gujarat, India.",
        coordinates: { lat: 22.3100, lng: 73.1400 },
        mapEmbed: "https://maps.google.com/maps?q=Keystone+Skyvillas+XL+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
        filterData: {
            category: "Residential",
            type: ["5bhk", "6bhk", "penthouse", "Apartments"],
            possession: "Ongoing"
        }
    },
    {
        id: "keystone-48",
        status: "Ongoing",
        slug: "keystone-48",
        title: "Keystone 48",
        category: "RESI-COMM",
        customBadge: "Only 1 Unit Left",
        location: "Sevasi, Vadodara",
        carpetArea: "2700 to 3140 Sq.Ft.",
        type: "4B2HK & 5B2HK APARTMENT & SHOWROOMS",
        price: "2.41 Cr",
        phone: "+91 74349 62962",
        email: "keystone48@vihav.com",
        description: "Seamless bungalows for a grounded lifestyle.",
        vision: "ONLY 36 A-CLASS APARTMENT",
        heroImage: "/images/project-images/project-tiles/keystone-48.jpg", // Bungalow Placeholder
        features: ["Own Land", "Gated Security"],
        amenitiesList: [
            { icon: "Shield", label: "Security" },
            { icon: "Trees", label: "Common Plot" }
        ],
        specifications: [{ category: "Flooring", items: ["Vitrified Tiles"] }],
        connectivity: [{ label: "Sevasi", time: "2 Mins" }],
        address: "Sevasi, Vadodara",
        coordinates: { lat: 22.3180, lng: 73.1100 },
        mapEmbed: "https://maps.google.com/maps?q=Keystone+48+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
        filterData: {
            category: ["Residential", "Commercial"],
            type: ["4bhk", "5bhk", "Apartments", "showrooms"],
            possession: "Under construction"
        }
    },
    {
        id: "vihav-cbd-res",
        link: "/projects/cbd",
        launchYear: "2022",
        brochureLink: "https://drive.google.com/file/d/10dM1tq9y9lGhpbkU2zy3DB5afBs_MQP0/view?usp=drive_link",
        status: "Ongoing",
        progress: 75,
        slug: "cbd",
        title: "CBD Residential",
        logo: "/images/project-images/project-logos/cbd-logo.svg",
        tagline: "4 BHK APARTMENTS AND 5 B2HK PENTHOUSES IN VADODARA",
        category: "Residential",
        location: "Bhayli Cross Road, Vadodara",
        carpetArea: "1830 to 2934 SQ.FT.",
        type: "4BHK & 5B2HK APPARTMENT",
        price: "1.26 Cr",
        phone: "+91 7435 894 894",
        email: "cbd@vihav.com",
        description: "Vihav CBD (Central Business District) stands as an iconic residential and commercial development in the heart of Bhayli, offering an exclusive collection of 4 BHK luxurious flats and 5B2HK Penthouses. Thoughtfully designed for those who seek elegance, space, and a premium lifestyle.",
        vision: "HEART OF BHAYLI",
        heroImage: "/images/project-images/project-tiles/vihav-cbd.jpg",
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
            "/images/project-images/projects/cbd-res/gallery/vihav-cbd-gallery (11).webp"
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
            "/images/project-images/projects/cbd-res/real-pictures/vihav-cbd-real-pictures (3).jpg"
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
            "/images/project-images/projects/cbd-res/amenities/cbd-amenities2.webp"
        ],
        constructionImages: [
            "https://www.vihav.com/wp-content/uploads/cbd-project-status-update-images-1.webp",
            "https://www.vihav.com/wp-content/uploads/cbd-project-status-update-images-2.webp",
            "https://www.vihav.com/wp-content/uploads/cbd-project-status-update-images-4.webp",
            "https://www.vihav.com/wp-content/uploads/cbd-project-status-update-images-3.webp"
        ],
        floorPlans: [
            { id: "fp-1", title: "Ground Floor Plan", image: "https://www.vihav.com/wp-content/uploads/Vihav_CBD_Residential_Ground_Floor_Plan-scaled.webp", type: "Plan" },
            { id: "fp-2", title: "Typical Unit Plan", image: "https://www.vihav.com/wp-content/uploads/Vihav_CBD_Residential_Typical_Unit_Plan-scaled.webp", type: "Plan" },
            { id: "fp-3", title: "First Floor Plan", image: "https://www.vihav.com/wp-content/uploads/Vihav_CBD_Residential_First_Floor_Plan-scaled.webp", type: "Plan" },
            { id: "fp-4", title: "4BHK Typical Unit", image: "https://www.vihav.com/wp-content/uploads/Vihav_CBD_4BHK_Typical_Unit_Plan-scaled.webp", type: "4BHK" },
            { id: "fp-5", title: "5BHK Penthouse Plan", image: "https://www.vihav.com/wp-content/uploads/Vihav_CBD_5BHK_Penthouse-Upper-Lower-Plan-scaled.webp", type: "Penthouse" }
        ],
        features: ["Prime Junction", "Mixed Use", "Extensive Amenities", "Iconic Landmark"],
        highlights: [
            { icon: "MapPin", title: "Prime Location", label: "Bhayli Cross Road", description: "Located at the heart of Bhayli with seamless connectivity." },
            { icon: "Building", title: "Mixed Use", label: "Residential & Commercial", description: "A perfect blend of luxury living and business convenience." },
            { icon: "Trees", title: "Green Living", label: "Lush Lawns", description: "Dedicated green spaces for relaxation and community." }
        ],
        amenitiesList: [
            { icon: "Trees", label: "Lush Green Lawns" },
            { icon: "Users", label: "Elegant Banquet Hall" },
            { icon: "Gamepad2", label: "Indoor Games Room" },
            { icon: "Dumbbell", label: "State-of-the-art Gym" },
            { icon: "Coffee", label: "Premium Lounge" },
            { icon: "Waves", label: "Large Swimming Pool" },
            { icon: "Gamepad2", label: "Kids Play Area" }
        ],
        specifications: [
            { category: "Structure", items: ["Earthquake Resistant RCC Frame", "Designed by Approved Structural Engineer"] },
            { category: "Kitchen", items: ["Premium Stone Platform", "Quartz Sink", "Designer Tiles to 2ft"] },
            { category: "Flooring", items: ["800x800 Vitrified Tiles", "Anti-skid in Balcony/Wash"] },
            { category: "Doors & Windows", items: ["Veneer Finish Main Door", "Laminated Flush Internal Doors", "Aluminum Sliding Windows"] },
            { category: "Finishes", items: ["2 Coat Putty Interior", "Texture + Weather Resistant Paint Exterior"] },
            { category: "Electrical", items: ["Concealed Copper Wiring", "Modular Switches"] }
        ],
        connectivity: [{ label: "Bhayli", time: "0 Mins" }, { label: "Bright Day School", time: "Nearby" }],
        address: "Beside Rajpath, Nr Bright Day School, Vasna Bhayli Road, Vadodara",
        coordinates: { lat: 22.290250, lng: 73.131861 },
        mapEmbed: "https://maps.google.com/maps?q=Vihav+CBD+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
        filterData: {
            category: "Residential",
            transactionType: ["Buy", "Lease", "Rent"],
            type: ["Invest", "End Use", "Pre-lease"],
            possession: "Newly Launched"
        }
    },
    {
        id: "vihav-spring-woods",
        link: "/projects/spring-woods/",
        status: "Ongoing",
        slug: "spring-woods",
        title: "Vihav Spring Woods",
        category: "Residential",
        location: "Tarsali, Vadodara",
        carpetArea: "Plot: 832 - 1500 Sq.Ft.",
        type: "3 & 4 BHK DUPLEX VILLA",
        price: "75 Lacs",
        reraId: "PR/GJ/VADODARA/VADODARA/Others/RAA00003/010121",
        reraLink: "https://gujrera.gujarat.gov.in/",
        phone: "+91 81402 03377",
        email: "springwoods@vihav.com",
        tagline: "Premium 3 & 4 BHK Duplex Villas",
        description: "Welcome to Vihav Spring Woods, a thoughtfully planned residential project offering spacious 3 BHK duplex homes in Tarsali, one of the most connected and fast-developing localities in Vadodara. Located close to Makarpura, Manjalpur, Danteshwar, Ghanghretia, and Chikhodara, this gated community provides the ideal setting for families who desire space, comfort, and convenience all in one place.",
        vision: "ONLY 36 PREMIUM BUNGALOWS",
        heroImage: "/images/project-images/project-tiles/springwoods.jpg",
        galleryImages: ["/images/project-images/project-tiles/springwoods.jpg"],
        features: ["Duplex Layouts", "Clubhouse", "Stem Room", "Swimming Pool"],
        highlights: [
            { icon: "MapPin", title: "Growing Hub", label: "Tarsali", description: "One of the most promising areas with excellent infrastructure." },
            { icon: "TrendingUp", title: "Smart Investment", label: "Long-term Value", description: "Built to add long-term value in a fast-developing locality." },
            { icon: "Navigation", title: "Connected Living", label: "Strategic Spot", description: "Close to Makarpura, Manjalpur, and Danteshwar." }
        ],
        amenitiesList: [
            { icon: "Coffee", label: "Club House With Hall" },
            { icon: "Waves", label: "Swimming Pool With Deck" },
            { icon: "Dumbbell", label: "Air Conditioned Gymnasium" },
            { icon: "Gamepad2", label: "Indoor Games" },
            { icon: "Dumbbell", label: "Yoga Zone" },
            { icon: "Coffee", label: "Outdoor Sitting Area" },
            { icon: "CloudRain", label: "Steam Room" },
            { icon: "Shield", label: "Security Cabin & CCTV" }
        ],
        specifications: [
            { category: "Structure", items: ["As per Architect Design"] },
            { category: "Wall Finish", items: ["Inside Smooth Plaster with Putty", "Exterior Weather Shield Paint"] },
            { category: "Flooring", items: ["Vitrified Flooring in all rooms"] },
            { category: "Kitchen", items: ["Granite platform with SS Sink", "Ceramic tiles up to 4ft"] },
            { category: "Toilets", items: ["Designer wall tiles up to 7ft", "Anti-skid flooring", "Hot water line"] },
            { category: "Electrical", items: ["Modular switches", "AC Points in bedrooms"] },
            { category: "Doors & Windows", items: ["Decorative Main Door", "Aluminum Section Windows"] }
        ],
        connectivity: [{ label: "Manjalpur", time: "Nearby" }],
        address: "Besides Pratham Paradise, Near Kamdhenu Residency, Tarsali, Vadodara, Gujarat, India.",
        coordinates: { lat: 22.2900, lng: 73.1200 },
        mapEmbed: "https://maps.google.com/maps?q=Vihav+Spring+Woods+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
        filterData: {
            category: "Residential",
            type: ["4bhk", "5bhk", "penthouse", "Apartments", "Bunglow"],
            possession: "Ready to Move"
        }
    },
    {
        id: "vihav-elinor",
        link: "/projects/elinor",
        status: "Ongoing",
        slug: "elinor",
        title: "Vihav Elinor",
        category: "Residential",
        location: "New Alkapuri, Gotri",
        carpetArea: "2134 - 2898 Sq.Ft.",
        type: "3, 4 BHK APARTMENTS & 5 BHK PENTHOUSES",
        price: "82.51 Lacs",
        reraId: "PR/GJ/VADODARA/VADODARA/Others/RAA00002/010121",
        reraLink: "https://gujrera.gujarat.gov.in/",
        phone: "+91 95046 36636",
        email: "elinor@vihav.com",
        tagline: "Luxurious 3, 4 BHK Flats & 5 BHK Penthouses",
        description: "Vihav Elinor is an exclusive residential project offering spacious 3 BHK and 4 BHK flats and 5 BHK penthouses in New Alkapuri, Gotri, Vadodara. Nestled in one of the city’s most prestigious and peaceful neighborhoods, Vihav Elinor is designed for those who seek refined living with space, elegance, and comfort at its core.",
        vision: "BETWEEN 2 TOWERS 100FT DISTANCE",
        heroImage: "/images/project-images/project-tiles/vihav-elinor.jpg",
        galleryImages: ["/images/project-images/project-tiles/vihav-elinor.jpg"],
        features: ["100ft Distance Between Towers", "Squash Room", "Swimming Pool"],
        highlights: [
            { icon: "Shield", title: "Refined Living", label: "Elegance & Comfort", description: "Designed for those who seek refined living with space and elegance." },
            { icon: "Maximize", title: "Spacious Layouts", label: "Large Balconies", description: "Thoughtfully laid out to maximize space with large balconies." },
            { icon: "MapPin", title: "Prime Neighborhood", label: "New Alkapuri", description: "Nestled in one of the city’s most prestigious neighborhoods." }
        ],
        amenitiesList: [
            { icon: "Dumbbell", label: "Gymnasium" },
            { icon: "Dumbbell", label: "Yoga Room" },
            { icon: "Activity", label: "Squash Room" },
            { icon: "Waves", label: "Swimming Pool with Gazebo" },
            { icon: "Coffee", label: "Sitting Deck with Water Body" },
            { icon: "Check", label: "Huge Landscaped Garden" },
            { icon: "Video", label: "TV Lounge / Theatre" },
            { icon: "Gamepad2", label: "Indoor Games" }
        ],
        valueAdditions: [
            "Prime Location of New Alkapuri with Premium Residential Surrounding",
            "Huge Wide Space between Two Towers for Unmatched Premium Living Experience",
            "2 Allotted Car Park Per Flat & 3 Allotted Car Park Per Penthouse",
            "Common Water Softening Plant",
            "Power Backup for Common Area",
            "Adequate Fire Safety System as per Government Norms",
            "Rain Water Harvesting"
        ],
        specifications: [
            { category: "Structure", items: ["Earthquake Resistance Structure"] },
            { category: "Kitchen", items: ["Premium Stone Platform with Quartz Sink", "Wash Area with Natural Stone Floor"] },
            { category: "Electrical", items: ["Concealed Copper ISI Wire", "Modular Switches"] },
            { category: "Bath", items: ["Designer Bathrooms", "Kohler or equivalent Fittings"] },
            { category: "Flooring", items: ["800x800 Vitrified flooring", "Anti-skid in Balcony"] },
            { category: "Wall Finish", items: ["Interior: 2 Coat Putty", "Exterior: Texture Paint"] },
            { category: "Doors", items: ["Main Door: Veneer Paneling", "Internal: Laminated Flush Doors"] },
            { category: "Windows", items: ["Aluminum Sliding Windows with Mosquito Net"] }
        ],
        connectivity: [{ label: "Bhayli", time: "0 Mins" }],
        address: "Behind Narayan Garden, Opp. Keystone Skyvillas, New Alkapuri, Gotri, Vadodara, Gujarat, India.",
        coordinates: { lat: 22.3000, lng: 73.1340 },
        mapEmbed: "https://maps.google.com/maps?q=Vihav+Elinor+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
        filterData: {
            category: "Residential",
            type: ["4bhk", "5bhk", "penthouse", "Apartments"],
            possession: "Newly Launched"
        }
    },
    {
        id: "vihav-parvarish-res",
        status: "Ready to Move",
        slug: "parvarish",
        title: "Vihav Parvarish",
        link: "/projects/parvarish",
        category: "Residential",
        location: "Nr Priya Cinema, Sevasi, Bhayli",
        carpetArea: "1575 - 1750 Sq.Ft.",
        type: "3BHK APPARTMENT",
        price: "49 Lacs",
        reraId: "PR/GJ/VADODARA/VADODARA/Others/RAA00001/010121",
        reraLink: "https://gujrera.gujarat.gov.in/",
        phone: "+91 9504 638 638",
        email: "parvarish@vihav.com",
        tagline: "Ready Possession Flats in the Heart of Bhayli",
        description: "Looking for a home that’s ready when you are? Vihav Parvarish offers beautifully crafted ready possession flats that combine thoughtful design, modern amenities, and a prime location in Bhayli, Vadodara. Say goodbye to construction delays and hello to immediate comfort and convenience.",
        vision: "FAMILY-CENTRIC HOME",
        heroImage: "/images/project-images/project-tiles/vihav-parvarish.jpg",
        galleryImages: ["https://www.vihav.com/wp-content/uploads/vihav_parvarish_thum.webp"],
        realPictureImages: [
            "https://www.vihav.com/wp-content/uploads/parvarish-amenities-gallary-image-5.webp",
            "https://www.vihav.com/wp-content/uploads/parvarish-amenities-gallary-image-4.webp",
            "https://www.vihav.com/wp-content/uploads/parvarish-amenities-gallary-image-3.webp",
            "https://www.vihav.com/wp-content/uploads/parvarish-amenities-gallary-image-2.webp",
            "https://www.vihav.com/wp-content/uploads/parvarish-real-image-6.webp"
        ],
        features: ["Ready Possession", "Prime Location", "Huge Open Spaces"],
        highlights: [
            { icon: "Check", title: "Ready Possession", label: "Move In Now", description: "Say goodbye to construction delays and hello to immediate comfort." },
            { icon: "MapPin", title: "Prime Location", label: "Sevasi-Bhayli", description: "Located behind Akshar Public School, near Priya Cinemas." },
            { icon: "Shield", title: "Premium Living", label: "Wide Spaces", description: "Huge wide space between all Towers for unmatched Premium Living Experience." },
            { icon: "Car", title: "Convenience", label: "Allotted Parking", description: "One allotted Car park per flat." }
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
            { icon: "Gamepad2", label: "Lego Lounge" }
        ],
        specifications: [
            { category: "Structure", items: ["Earthquake Resistance Structure"] },
            { category: "Flooring", items: ["600x600 Vitrified Flooring", "Antiskid in Balcony/Wash"] },
            { category: "Wall Finish", items: ["Interior: 2 Coat Putty", "Exterior: Texture with Weather Resistant Paint"] },
            { category: "Electrical", items: ["Concealed Copper ISI Wire", "Modular Switches"] },
            { category: "Bath", items: ["Designer Bathrooms", "Premium Quality Fittings", "Glazed Tile Dado"] },
            { category: "Doors", items: ["Main Door: Veneer Paneling", "Internal: Laminated Flush Doors"] },
            { category: "Windows", items: ["Aluminum Sliding Windows with Mosquito Net"] }
        ],
        connectivity: [{ label: "Gotri", time: "0 Mins" }],
        address: "Behind Akshar Public School, Near Priya Cinemas, Sevasi-Bhayli, Vadodara, Gujarat, India.",
        coordinates: { lat: 22.3250, lng: 73.1480 },
        mapEmbed: "https://maps.google.com/maps?q=Vihav+Parvarish+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
        filterData: {
            category: "Residential",
            type: ["3bhk", "4bhk", "penthouse", "Apartments"],
            possession: "Ready to Move"
        }
    },
    {
        id: "vihav-parvarish-comm",
        slug: "parvarish-commercial",
        title: "Vihav Parvarish Commercial",
        link: "/projects/parvarish-commercial/",
        category: "Commercial",
        location: "Gotri",
        carpetArea: "1485 to 2600 Sq.Ft.", // Verify if different for comm
        type: "SHOPS & SHOWROOMS",
        price: "Price on Request",
        phone: "+91 999 895 2299",
        email: "parvarish@vihav.com",
        description: "Premium commercial spaces at Vihav Parvarish.",
        vision: "Commercial Excellence",
        heroImage: "/images/project-images/project-tiles/parvarish-commercial.webp",
        galleryImages: ["/images/project-images/project-tiles/parvarish-commercial.webp"],
        features: ["Main Road Access", "High Visibility"],
        amenitiesList: [
            { icon: "Shield", label: "Security" },
            { icon: "Car", label: "Visitor Parking" }
        ],
        specifications: [
            { category: "Flooring", items: ["Vitrified Tiles"] }
        ],
        connectivity: [{ label: "Gotri Road", time: "2 Mins" }],
        address: "Gotri, Vadodara",
        coordinates: { lat: 22.3250, lng: 73.1480 },
        mapEmbed: "https://maps.google.com/maps?q=Vihav+Parvarish+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
        filterData: {
            category: "Commercial",
            transactionType: ["Buy", "Lease", "Rent"],
            type: ["shops", "showrooms"],
            possession: "Ready to Move"
        }
    },
    {
        id: "vihav-skymont",
        status: "Completed",
        slug: "vihav-skymont",
        title: "Keystone Skymont",
        category: "Residential",
        location: "New Alkapuri, Vadodara",
        type: "4B2HK & 5B2HK APPARTMENT",
        price: "3.01 Cr",
        phone: "+91 91206 45645",
        email: "skymont@vihav.com",
        description: "Touching the sky with elegance.",
        vision: "1 FLOOR 2 UNIT - EXTRA TERRACE APARTMENT",
        heroImage: "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1000&auto=format&fit=crop", // Highrise Placeholder
        features: ["View from Top", "Modern Facade"],
        amenitiesList: [
            { icon: "Shield", label: "Security" },
            { icon: "ArrowUpFromLine", label: "High Speed Lifts" },
            { icon: "Dumbbell", label: "Gym" }
        ],
        specifications: [{ category: "Flooring", items: ["Vitrified Tiles"] }],
        connectivity: [{ label: "New Alkapuri", time: "0 Mins" }],
        address: "New Alkapuri, Vadodara",
        coordinates: { lat: 22.3120, lng: 73.1500 },
        mapEmbed: "https://maps.google.com/maps?q=Vihav+Skymont+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed"
    },
    {
        id: "keystone-72",
        status: "Completed",
        slug: "keystone-72",
        title: "Keystone 72",
        category: "Residential",
        location: "New Alkapuri, Vadodara",
        type: "4B2HK & 5B2HK APPARTMENT",
        price: "1.61 Cr",
        phone: "+91 74348 40840",
        email: "keystone72@vihav.com",
        description: "A community of 72 exclusive families.",
        vision: "4B2HK ULTRA LUXURIOUS AMENITIES",
        heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop", // Apartment Placeholder
        features: ["3 Units Per Floor", "Premium Finish"],
        amenitiesList: [
            { icon: "Shield", label: "Security" },
            { icon: "Dumbbell", label: "Gym" },
            { icon: "Trees", label: "Garden" }
        ],
        specifications: [{ category: "Flooring", items: ["Vitrified Tiles"] }],
        connectivity: [{ label: "New Alkapuri", time: "0 Mins" }],
        address: "New Alkapuri, Vadodara",
        coordinates: { lat: 22.3050, lng: 73.1550 },
        mapEmbed: "https://maps.google.com/maps?q=Keystone+72+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
        filterData: {
            category: "Residential",
            type: ["4bhk", "5bhk", "penthouse", "Apartments"],
            possession: "Under construction"
        }
    },
    {
        id: "keystone-skyvillas",
        slug: "keystone-skyvillas",
        title: "Keystone Skyvillas",
        category: "Residential",
        location: "New Alkapuri, Vadodara",
        carpetArea: "4500 Sq. Ft.",
        type: "4B2HK & 5B2HK APPARTMENT",
        price: "2.61 Cr",
        status: "Completed",
        progress: 100,
        reraId: "PR/GJ/VADODARA/VADODARA/Others/RAA00001/010121",
        reraLink: "https://gujrera.gujarat.gov.in/",
        phone: "+91 72019 50950",
        email: "skyvillas@vihav.com",
        description: "An exquisite collection of sky-rise villas defined by vertical luxury. Keystone Skyvillas brings the grandeur of independent living to the skies, offering panoramic views and unmatched privacy.",
        vision: "LUXURIOUS 4B2KK APARTMENT",
        heroImage: "https://www.vihav.com/wp-content/uploads/ongoing_thum.jpg",
        galleryImages: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c", // Living Room
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3", // Kitchen
            "https://images.unsplash.com/photo-1600210492493-0946911123ea", // Bedroom
            "https://images.unsplash.com/photo-1600607687644-c7171b42498f"  // Bathroom
        ],
        constructionImages: [
            "https://images.unsplash.com/photo-1590486803833-1c5dc8ce84ac?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop"
        ],
        features: ["Sky Decks", "Private Elevators", "Club House"],
        amenitiesList: [
            { icon: "Waves", label: "Swimming Pool" },
            { icon: "Coffee", label: "Clubhouse" },
            { icon: "ArrowUpFromLine", label: "High Speed Elevators" },
            { icon: "Video", label: "CCTV Surveillance" },
            { icon: "Dumbbell", label: "Gymnasium" },
            { icon: "Trees", label: "Landscape Garden" }
        ],
        specifications: [
            { category: "Structure", items: ["RCC Frame Structure", "Earthquake Resistant"] },
            { category: "Finishes", items: ["Premium Emulsion Paint", "Texture Finish on Exterior"] },
            { category: "Flooring", items: ["Italian Marble in Living", "Wooden Flooring in Master Bed"] },
            { category: "Electrification", items: ["Concealed Copper Wiring", "Modular Switches"] }
        ],
        connectivity: [{ label: "Alkapuri", time: "10 Mins" }],
        address: "New Alkapuri, Vadodara",
        coordinates: { lat: 22.3165, lng: 73.1535 },
        mapEmbed: "https://maps.google.com/maps?q=Keystone+Skyvillas+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
        filterData: {
            category: "Residential",
            type: ["4bhk", "penthouse", "Apartments"],
            possession: "Ready to Move"
        },
        link: "/projects/skyvillas"
    },
    {
        id: "skyone",
        link: "/projects/skyone/",
        slug: "skyone",
        title: "Skyone",
        category: "RESI-COMM",
        location: "30 Mtr. Main Road, Bhayli",
        carpetArea: "245 to 540 Sq.Ft.",
        type: "3BHK APARTMENT & SHOPS",
        price: "Price on Request",
        reraId: "PR/GJ/VADODARA/VADODARA/Others/CAA00001/010121",
        reraLink: "https://gujrera.gujarat.gov.in/",
        phone: "+91 72018 54854",
        email: "skyone@vihav.com",
        description: "Strategic commercial shops on the bustling 30 Mtr Main Road in Bhayli.",
        vision: "Sky High Commerce.",
        heroImage: "/images/project-images/project-tiles/Skyone.webp",
        galleryImages: ["/images/project-images/project-tiles/Skyone.webp"],
        features: ["Main Road Facing", "High Visibility"],
        amenitiesList: [
            { icon: "Shield", label: "Security" },
            { icon: "Car", label: "Parking" },
            { icon: "Video", label: "CCTV" }
        ],
        specifications: [
            { category: "Structure", items: ["RCC Frame"] },
            { category: "Flooring", items: ["Vitrified Tiles"] }
        ],
        connectivity: [{ label: "Bhayli", time: "0 Mins" }],
        address: "30 Mtr Main Road, Bhayli, Vadodara",
        coordinates: { lat: 22.2861, lng: 73.1319 },
        mapEmbed: "https://maps.google.com/maps?q=Vihav+Skyone+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
        filterData: {
            category: ["Residential", "Commercial"],
            transactionType: ["Buy", "Lease", "Rent"],
            type: ["shops"],
            possession: "Ready to Move"
        }
    },
    {
        id: "keystone-mansion",
        slug: "keystone-mansion",
        title: "Keystone Mansion",
        status: "Completed",
        category: "Residential",
        location: "Khanpur, Sevasi",
        type: "4B2HK BUNGALOW",
        price: "Price on Request",
        phone: "+91 87916 49164",
        email: "ksm3@vihav.com",
        description: "Expansive villas designed for royalty. The ultimate status symbol in Sevasi.",
        vision: "Royal Living.",
        heroImage: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1000&auto=format&fit=crop", // Villa Placeholder
        features: ["Private Pool", "Gated Community"],
        amenitiesList: [
            { icon: "Shield", label: "Security" },
            { icon: "Trees", label: "Private Garden" },
            { icon: "Waves", label: "Private Pool" }
        ],
        specifications: [{ category: "Flooring", items: ["Italian Marble"] }],
        connectivity: [{ label: "Sevasi", time: "5 Mins" }],
        address: "Khanpur, Sevasi, Vadodara",
        coordinates: { lat: 22.3150, lng: 73.1050 },
        mapEmbed: "https://maps.google.com/maps?q=Keystone+Mansions+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
        filterData: {
            category: "Residential",
            type: ["5bhk", "Bunglows"],
            possession: "Ready to Move"
        }
    },
    {
        id: "keystone-mansion-2",
        slug: "keystone-mansion-2",
        title: "Keystone Mansion 2",
        status: "Completed",
        category: "Residential",
        location: "Khanpur, Sevasi",
        type: "4B2HK BUNGALOW",
        price: "Price on Request",
        phone: "+91 87916 49164",
        email: "ksm3@vihav.com",
        description: "Expansive villas designed for royalty. The ultimate status symbol in Sevasi.",
        vision: "Royal Living.",
        heroImage: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1000&auto=format&fit=crop", // Villa Placeholder
        features: ["Private Pool", "Gated Community"],
        amenitiesList: [
            { icon: "Shield", label: "Security" },
            { icon: "Trees", label: "Private Garden" },
            { icon: "Waves", label: "Private Pool" }
        ],
        specifications: [{ category: "Flooring", items: ["Italian Marble"] }],
        connectivity: [{ label: "Sevasi", time: "5 Mins" }],
        address: "Khanpur, Sevasi, Vadodara",
        coordinates: { lat: 22.3150, lng: 73.1050 },
        mapEmbed: "https://maps.google.com/maps?q=Keystone+Mansions+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
        filterData: {
            category: "Residential",
            type: ["5bhk", "Bunglows"],
            possession: "Ready to Move"
        }
    },
    {
        id: "vs-monolith",
        link: "/projects/vs-monolith/",
        status: "Newly Launched",
        slug: "vs-monolith",
        title: "VS Monolith",
        category: "Commercial",
        location: "Atladra Padra 40mtr Main Road",
        carpetArea: "268 - 3057 Sq.Ft.",
        type: "SHOWROOMS, SHOPS & OFFICES",
        price: "21.51 Lacs",
        reraId: "PR/GJ/VADODARA/VADODARA/Others/CAA00002/010121",
        reraLink: "https://gujrera.gujarat.gov.in/",
        phone: "+91 91206 45645",
        email: "sales@vihav.com",
        description: "A monolithic structure dominance in the Bhayli skyline.",
        vision: "Main ATLADRA -PADRA 40.MTR Road",
        heroImage: "/images/project-images/project-tiles/vs-monolith.webp",
        galleryImages: ["/images/project-images/project-tiles/vs-monolith.webp"],
        features: ["Iconic Design", "Strategic Junction"],
        amenitiesList: [
            { icon: "Shield", label: "Security" },
            { icon: "ArrowUpFromLine", label: "Premium Elevators" },
            { icon: "Car", label: "Multi-level Parking" },
            { icon: "Video", label: "Advanced CCTV" },
            { icon: "Coffee", label: "Cafeteria Space" }
        ],
        specifications: [
            { category: "Structure", items: ["Iconic Glass Facade"] },
            { category: "Flooring", items: ["Premium Vitrified"] },
            { category: "Connectivity", items: ["Fiber Ready"] }
        ],
        connectivity: [{ label: "Bhayli", time: "0 Mins" }],
        address: "Bhayli Cross Road, Vadodara",
        coordinates: { lat: 22.2970, lng: 73.1320 },
        mapEmbed: "https://maps.google.com/maps?q=VS+Monolith+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
        filterData: {
            category: "Commercial",
            transactionType: ["Buy", "Lease", "Rent"],
            type: ["offices", "shops", "showrooms"],
            possession: "Newly Launched"
        }
    },
    {
        id: "supremus-iii",
        link: "/projects/supremus-3/",
        status: "Newly Launched",
        slug: "supremus-3",
        title: "Supremus III",
        category: "Commercial",
        location: "Nr. DMart, Vasna Bhayli Main Rd",
        carpetArea: "295 Sq.Ft. Onwards",
        type: "SHOWROOMS, SHOPS & OFFICES",
        price: "30 Lacs",
        reraId: "PR/GJ/VADODARA/VADODARA/Others/CAA00003/010121",
        reraLink: "https://gujrera.gujarat.gov.in/",
        phone: "+91 879 174 9174",
        email: "supremus3@vihav.com",
        description: "Premium commercial spaces near D-Mart.",
        vision: "A ELEGANT CO-ORPORATE PARK",
        heroImage: "/images/project-images/project-tiles/supremus-3.webp",
        galleryImages: ["/images/project-images/project-tiles/supremus-3.webp"],
        features: ["Main Road Frontage", "Corporate Look"],
        amenitiesList: [
            { icon: "Shield", label: "24/7 Security" },
            { icon: "Video", label: "CCTV" },
            { icon: "Car", label: "Parking" },
            { icon: "ArrowUpFromLine", label: "Elevators" },
            { icon: "CircleCheck", label: "Fire Safety" },
            { icon: "Users", label: "Common Reception" }
        ],
        specifications: [
            { category: "Structure", items: ["RCC Frame"] },
            { category: "Flooring", items: ["Vitrified Tiles"] },
            { category: "Electrification", items: ["Concealed Wiring"] },
            { category: "Facade", items: ["Glass Facade"] }
        ],
        connectivity: [{ label: "D-Mart", time: "1 Min" }],
        address: "Vasna Bhayli Road, Vadodara",
        coordinates: { lat: 22.2920, lng: 73.1380 },
        mapEmbed: "https://maps.google.com/maps?q=Supremus+III+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
        filterData: {
            category: "Commercial",
            transactionType: ["Buy", "Lease", "Rent"],
            type: ["offices", "showrooms"],
            possession: "Newly Launched"
        }
    },
    {
        id: "vihav-cbd",
        link: "/projects/cbd-commercial/",
        launchYear: "2022",
        brochureLink: "https://drive.google.com/file/d/1YEC52psDRHd111wP970Qvd-YGFFyjUPm/view?usp=drive_link",
        status: "Ongoing",
        slug: "cbd-commercial",
        title: "Vihav CBD",
        category: "Commercial",
        location: "Bhayli Cross Road, Vadodara",
        carpetArea: "262 to 4200 SQ.FT.",
        type: "SHOWROOMS, SHOPS & OFFICES",
        price: "22 Lacs",
        phone: "+91 7435 894 894",
        email: "cbd@vihav.com",
        description: "Central Business District of Bhayli. A landmark mixed-use development.",
        vision: "HEART OF BHAYLI",
        heroImage: "/images/project-images/project-tiles/cbd-commercial.webp", // Updated to commercial specific
        features: ["Prime Junction", "Mixed Use"],
        amenitiesList: [
            { icon: "Shield", label: "Security" },
            { icon: "Car", label: "Parking" },
            { icon: "ArrowUpFromLine", label: "High Speed Lifts" }
        ],
        specifications: [{ category: "Flooring", items: ["Vitrified Tiles"] }],
        connectivity: [{ label: "Bhayli", time: "0 Mins" }],
        address: "NEAR FOOD CASTLE, BHAYLI, VADODARA, GUJARAT 391410",

        coordinates: { lat: 22.290250, lng: 73.131861 },
        mapEmbed: "https://maps.google.com/maps?q=Vihav+CBD+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
        filterData: {
            category: "Commercial",
            transactionType: ["Buy", "Lease", "Rent"],
            type: ["Invest", "End Use", "Pre-lease"],
            possession: "Newly Launched"
        }
    },
    {
        id: "vihav-supremus-2",
        link: "/projects/supremus2/",
        status: "Ongoing",
        slug: "supremus2",
        title: "Vihav Supremus II",
        category: "Commercial",
        location: "Atladra Padra 40mtr Main Road",
        carpetArea: "225 Sq.Ft. Onwards",
        type: "SHOWROOMS, SHOPS & OFFICES",
        price: "27 Lacs",
        reraId: "PR/GJ/VADODARA/VADODARA/Others/CAA00001/010121",
        reraLink: "https://gujrera.gujarat.gov.in/",
        phone: "+91 72019 85985",
        email: "supremus2@vihav.com",
        description: "Continuing the success of Supremus on the Atladra-Padra growth corridor.",
        vision: "A-COMMERCIAL MARVEL",
        heroImage: "/images/project-images/project-tiles/supremus-2.webp",
        galleryImages: ["/images/project-images/project-tiles/supremus-2.webp"],
        features: ["Main Road", "Growth Area"],
        amenitiesList: [
            { icon: "Shield", label: "Security" },
            { icon: "Car", label: "Parking" },
            { icon: "ArrowUpFromLine", label: "Lifts" },
            { icon: "Video", label: "CCTV" }
        ],
        specifications: [
            { category: "Structure", items: ["RCC Frame"] },
            { category: "Flooring", items: ["Vitrified Tiles"] }
        ],
        connectivity: [{ label: "Atladra", time: "0 Mins" }],
        address: "Atladra Padra Road, Vadodara",
        coordinates: { lat: 22.2850, lng: 73.1650 },
        mapEmbed: "https://maps.google.com/maps?q=Vihav+Supremus+II+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
        filterData: {
            category: "Commercial",
            transactionType: ["Buy", "Lease", "Rent"],
            type: ["shops", "showrooms", "offices"],
            possession: "Under construction"
        }
    },

    {
        id: "wealth-square",
        link: "/projects/wealth-square/",
        slug: "wealth-square",
        title: "Wealth Square",
        category: "Commercial",
        location: "Gotri",
        carpetArea: "139 to 699 Sq.Ft.",
        type: "SHOWROOMS, SHOPS & OFFICES",
        price: "Price on Request",
        reraId: "PR/GJ/VADODARA/VADODARA/Others/CAA00001/010121",
        reraLink: "https://gujrera.gujarat.gov.in/",
        phone: "+91 63567 77877",
        email: "wealthsquare@vihav.com",
        description: "Dedicated showroom spaces for retail brands.",
        vision: "Retail Excellence.",
        heroImage: "/images/project-images/project-tiles/wealth-square.webp",
        galleryImages: ["/images/project-images/project-tiles/wealth-square.webp"],
        features: ["Facade Display", "Wide Frontage"],
        amenitiesList: [
            { icon: "Shield", label: "Security" },
            { icon: "Car", label: "Front Parking" },
            { icon: "Video", label: "CCTV" },
            { icon: "CircleCheck", label: "Fire Safety" }
        ],
        specifications: [
            { category: "Structure", items: ["RCC Frame"] },
            { category: "Frontage", items: ["Wide Display Area"] },
            { category: "Flooring", items: ["Vitrified Tiles"] }
        ],
        connectivity: [{ label: "Gotri", time: "0 Mins" }],
        address: "Gotri, Vadodara",
        coordinates: { lat: 22.3205, lng: 73.1470 },
        mapEmbed: "https://maps.google.com/maps?q=Wealth+Square+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
        filterData: {
            category: "Commercial",
            transactionType: ["Buy", "Lease", "Rent"],
            type: ["showrooms"],
            type: ["showrooms"],
            possession: "Ready to Move"
        }
    },
    {
        id: "vtc",
        link: "/projects/vtc/",
        slug: "vtc",
        title: "VTC",
        category: "Commercial",
        location: "Near Priya Cinema, Sevasi Bhayli",
        carpetArea: "153 to 1255 Sq.Ft.",
        type: "SHOWROOMS, SHOPS & OFFICES",
        price: "Price on Request",
        reraId: "PR/GJ/VADODARA/VADODARA/Others/CAA00001/010121",
        reraLink: "https://gujrera.gujarat.gov.in/",
        phone: "+91 72018 54854",
        email: "vtc@vihav.com",
        description: "Hub for trade and retail near Priya Cinema.",
        vision: "Trade Hub.",
        heroImage: "/images/project-images/project-tiles/vtc.webp",
        galleryImages: ["/images/project-images/project-tiles/vtc.webp"],
        features: ["Entertainment Vicinity", "Retail Focused"],
        amenitiesList: [
            { icon: "Shield", label: "Security" },
            { icon: "Car", label: "Parking" },
            { icon: "CircleCheck", label: "Fire Safety" }
        ],
        specifications: [
            { category: "Flooring", items: ["Vitrified Tiles"] },
            { category: "Shutters", items: ["Rolling Shutters"] }
        ],
        connectivity: [{ label: "Priya Cinema", time: "0 Mins" }],
        address: "Near Priya Cinema, Sevasi, Vadodara",
        coordinates: { lat: 22.3150, lng: 73.1200 },
        mapEmbed: "https://maps.google.com/maps?q=Vihav+Trade+Centre+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
        filterData: {
            category: "Commercial",
            transactionType: ["Buy", "Lease", "Rent"],
            type: ["shops"],
            possession: "Ready to Move"
        }
    },
    {
        id: "vbs",
        link: "/projects/vbs/",
        slug: "vbs",
        title: "VBS",
        category: "Commercial",
        location: "Gotri Main Road",
        carpetArea: "937 to 1164 Sq.Ft.",
        type: "SHOWROOMS, SHOPS & OFFICES",
        price: "Price on Request",
        reraId: "PR/GJ/VADODARA/VADODARA/Others/CAA00001/010121",
        reraLink: "https://gujrera.gujarat.gov.in/",
        phone: "+91 72018 54854",
        email: "vbs@vihav.com",
        description: "Budget-friendly to premium commercial spaces in Gotri.",
        vision: "Business for Everyone.",
        heroImage: "/images/project-images/project-tiles/vbs.webp",
        galleryImages: ["/images/project-images/project-tiles/vbs.webp"],
        features: ["High Footfall", "Mix of Sizes"],
        amenitiesList: [
            { icon: "Shield", label: "Security" },
            { icon: "Car", label: "Basement Parking" },
            { icon: "ArrowUpFromLine", label: "Elevator" },
            { icon: "Video", label: "CCTV" },
            { icon: "CircleCheck", label: "Power Backup (Common)" },
            { icon: "Users", label: "Wide Corridors" }
        ],
        specifications: [
            { category: "Flooring", items: ["Vitrified Tiles"] },
            { category: "Shutters", items: ["Rolling Shutters"] },
            { category: "Electric", items: ["Standard Points"] }
        ],
        connectivity: [{ label: "Gotri", time: "0 Mins" }],
        address: "Gotri Main Road, Vadodara",
        coordinates: { lat: 22.3230, lng: 73.1450 },
        mapEmbed: "https://maps.google.com/maps?q=Vihav+Business+Square+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
        filterData: {
            category: "Commercial",
            transactionType: ["Buy", "Lease", "Rent"],
            type: ["showrooms", "shops", "offices"],
            possession: "Ready to Move"
        }
    },
    {
        id: "supremus",
        link: "/projects/supremus/",
        slug: "supremus",
        title: "Supremus",
        category: "Commercial",
        location: "New Alkapuri, Gotri",
        carpetArea: "1219 to 1720 Sq.Ft.",
        type: "SHOWROOMS, SHOPS & OFFICES",
        price: "Price on Request",
        reraId: "PR/GJ/VADODARA/VADODARA/Others/CAA00001/010121",
        reraLink: "https://gujrera.gujarat.gov.in/",
        phone: "+91 72018 51851",
        email: "supremus@vihav.com",
        description: "The first of the Supremus series, establishing a legacy of corporate excellence.",
        vision: "Corporate Legacy.",
        heroImage: "/images/project-images/project-tiles/supremus-1.webp",
        galleryImages: ["/images/project-images/project-tiles/supremus-1.webp"],
        features: ["Established Hub", "Modern Amenities"],
        amenitiesList: [
            { icon: "Shield", label: "24/7 Security" },
            { icon: "ArrowUpFromLine", label: "High Speed Lifts" },
            { icon: "Car", label: "Parking" },
            { icon: "Video", label: "CCTV" },
            { icon: "CircleCheck", label: "Power Backup" }
        ],
        specifications: [
            { category: "Structure", items: ["RCC Frame"] },
            { category: "Flooring", items: ["Vitrified Tiles"] },
            { category: "Finishing", items: ["Internal Plaster"] }
        ],
        connectivity: [{ label: "Gotri", time: "0 Mins" }],
        address: "Gotri, Vadodara",
        coordinates: { lat: 22.3144, lng: 73.1379 },
        mapEmbed: "https://maps.google.com/maps?q=Vihav+Supremus+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
        filterData: {
            category: "Commercial",
            transactionType: ["Buy", "Lease", "Rent"],
            type: ["showrooms", "shops", "offices"],
            possession: "Ready to Move"
        }
    },
    {
        id: "elite-square",
        link: "/projects/elite-square/",
        slug: "elite-square",
        title: "Elite Square",
        status: "Completed",
        category: "Commercial",
        location: "Sun Pharma 30 Mtr. Main Road",
        carpetArea: "296 to 3200 Sq.Ft.",
        type: "SHOWROOMS, SHOPS & OFFICES",
        price: "Price on Request",
        reraId: "PR/GJ/VADODARA/VADODARA/Others/CAA00001/010121",
        reraLink: "https://gujrera.gujarat.gov.in/",
        phone: "+91 88663 41272",
        email: "sales@vihav.com",
        description: "Premium shops and showrooms located on the prime Sun Pharma road.",
        vision: "Elite Business Address.",
        heroImage: "/images/project-images/project-tiles/elite-square.webp",
        galleryImages: ["/images/project-images/project-tiles/elite-square.webp"],
        features: ["Prime Location", "Premium Facade"],
        amenitiesList: [
            { icon: "Shield", label: "Security" },
            { icon: "Car", label: "Parking" },
            { icon: "ArrowUpFromLine", label: "Elevators" },
            { icon: "Video", label: "CCTV" }
        ],
        specifications: [
            { category: "Facade", items: ["Modern Elevation"] },
            { category: "Flooring", items: ["Vitrified Tiles"] }
        ],
        connectivity: [{ label: "Sun Pharma Rd", time: "0 Mins" }],
        address: "Sun Pharma Road, Vadodara",
        mapEmbed: "https://maps.google.com/maps?q=Elite+Square+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
        filterData: {
            category: "Commercial",
            transactionType: ["Buy", "Lease", "Rent"],
            type: ["shops", "showrooms"],
            possession: "Ready to Move"
        }
    },
    {
        id: "ensign",
        slug: "ensign",
        title: "Ensign",
        status: "Completed",
        category: "Commercial",
        location: "Gotri",
        type: "SHOWROOMS, SHOPS & OFFICES",
        price: "Price on Request",
        phone: "+91 88663 41272",
        email: "sales@vihav.com",
        description: "A sign of success. Premium offices in Gotri.",
        vision: "Ensign of Success.",
        heroImage: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop", // Office Placeholder
        features: ["Corporate Ambience", "Strategic Location"],
        amenitiesList: [
            { icon: "Shield", label: "Security" },
            { icon: "Car", label: "Parking" },
            { icon: "ArrowUpFromLine", label: "Lifts" }
        ],
        specifications: [{ category: "Flooring", items: ["Vitrified Tiles"] }],
        connectivity: [{ label: "Gotri", time: "0 Mins" }],
        address: "Gotri, Vadodara",
        coordinates: { lat: 22.3300, lng: 73.1600 },
        mapEmbed: "https://maps.google.com/maps?q=Vihav+Ensign+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed"
    },
    {
        id: "excellus",
        slug: "excellus",
        title: "Excellus",
        status: "Completed",
        category: "Commercial",
        location: "Vasna Bhayli Road",
        type: "SHOWROOMS, SHOPS & OFFICES",
        price: "Price on Request",
        phone: "+91 88663 41272",
        email: "sales@vihav.com",
        description: "Excellent business spaces for growing enterprises.",
        vision: "Business Excellence.",
        heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop", // Office Placeholder
        features: ["Road Frontage", "Glass Facade"],
        amenitiesList: [
            { icon: "Shield", label: "Security" },
            { icon: "Car", label: "Parking" },
            { icon: "ArrowUpFromLine", label: "Lifts" }
        ],
        specifications: [{ category: "Flooring", items: ["Vitrified Tiles"] }],
        connectivity: [{ label: "Vasna Bhayli", time: "0 Mins" }],
        address: "Vasna Bhayli Road, Vadodara",
        coordinates: { lat: 22.3020, lng: 73.1390 },
        mapEmbed: "https://maps.google.com/maps?q=Vihav+Excelus+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed"
    },
];

export const getProjectBySlug = (slug) => PROJECTS.find(p => p.slug === slug);
export const getProjectsByCategory = (category) => PROJECTS.filter(p => p.category === category);
export const getAllProjects = () => PROJECTS;
