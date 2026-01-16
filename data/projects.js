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
        status: "Upcoming",
        slug: "keystone-51",
        title: "Keystone 51",
        category: "Residential",
        location: "Nr Navrachana University, Bhayli",
        type: "4BHK BUNGALOW",
        carpetArea: "Plot: 1257 Sq.Ft. Onwards",
        price: "1.61 Cr",
        reraId: "PAA15293/020625/311227",
        reraLink: "https://gujrera.gujarat.gov.in/",
        phone: "+91 87916 49164",
        email: "keystone51@vihav.com",
        description: "Only a select few will experience life at Keystone 51, making it one of the most exclusive residential addresses in Vadodara. 1,00,000 sq.ft for just 51 families. Designed with modern families in mind, each home features expansive living areas, high-end finishes, and is four-side open with 2500 sq.ft Built-up Area.",
        vision: "ONE DOWN, 75MTR MAIN ROAD, VASTU - COMPLIANT HOMES",
        heroImage: "/images/project-images/project-tiles/keystone-51.jpg",
        galleryImages: [
            "https://www.vihav.com/wp-content/uploads/Vihav-51-Cam-03-a-scaled.webp",
            "https://www.vihav.com/wp-content/uploads/Vihav-51-Living-room-cam-03-a-scaled.webp",
            "https://www.vihav.com/wp-content/uploads/Vihav-51-Cam-01-a-scaled.webp",
            "https://www.vihav.com/wp-content/uploads/Vihav-51-Cam-09-a-scaled.webp",
            "https://www.vihav.com/wp-content/uploads/2nd-floor-bedroom-cam-02-a-scaled.webp"
        ],
        features: ["1,00,000 Sq.Ft Land", "Only 51 Families", "4-Side Open", "Triplex Layout"],
        highlights: [
            { icon: "Users", title: "Elite Community", label: "51 Families", description: "A low-density sanctuary of just 51 exclusive families on 1,00,000 sq.ft of land." },
            { icon: "Shield", title: "Secure Living", label: "24/7 Security", description: "Gated community with round-the-clock surveillance and security personnel." },
            { icon: "Trees", title: "Green Living", label: "Spacious Gardens", description: "Abundant green spaces and landscaped gardens for a serene lifestyle." }
        ],
        amenitiesList: [
            { icon: "Waves", label: "Swimming Pool" },
            { icon: "Dumbbell", label: "Fitness Center" },
            { icon: "Trees", label: "Green Spaces" },
            { icon: "Shield", label: "24/7 Security" },
            { icon: "Users", label: "Community", note: "Only 51 Families" },
            { icon: "MapPin", label: "Prime Location" }
        ],
        specifications: [
            { category: "Structure", items: ["Triplex Bungalow Design", "4-Side Open Layout"] },
            { category: "Area", items: ["2500 Sq.Ft Built-up Area"] },
            { category: "Finish", items: ["High-end Finishes", "Modern Architecture"] },
            { category: "Connectivity", items: ["Off 75m Ring Road", "Near Navrachana University"] }
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
        slug: "keystone-niwa",
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
        description: "Niwa, meaning garden in Japanese, reflects our belief that a home should feel like nature never left us. At Keystone Niwa, we’ve reimagined luxury to grow not just above ground, but within it. Here, greenery isn’t a view from your window, it’s part of your everyday living. From private garden balconies to lush common spaces, Niwa is where you don’t just come home, you arrive in nature.",
        vision: "1 FLOOR 1 UNIT - GARDEN APARTMENT ( 1500 SQ.FT - DEDICATED SPACE FOR GARDEN)",
        heroImage: "/images/project-images/project-tiles/keystone-niwa.jpg",
        galleryImages: [
            "https://www.vihav.com/wp-content/uploads/Hurun-KEYSTONE-NIWA-Desktop-Slider-2048-×-778-px-01.webp",
            "https://www.vihav.com/wp-content/uploads/home-gray-bordered-extra-width.png",
            "https://www.vihav.com/wp-content/uploads/tree-bird-space.png",
            "https://www.vihav.com/wp-content/uploads/customized-leaf-bg-scaled.png",
            "https://www.vihav.com/wp-content/uploads/line-element-scaled.png",
            "https://www.vihav.com/wp-content/uploads/Hurun-KEYSTONE-NIWA-Mobile-Slider-1080-×-1080-px-01.webp"
        ],
        features: ["5000 sq ft Carpet Area", "One Floor One Unit", "1250 sq ft Garden Balcony", "35% Green Area", "Dual Kitchens"],
        highlights: [
            { icon: "Shield", title: "Absolute Privacy", label: "One Floor One Unit", description: "The rarest luxury of having no neighbors on your floor, ensuring total seclusion." },
            { icon: "Trees", title: "Nurtured Greenery", label: "35% Green Plot", description: "Over one-third of the land is dedicated to lush gardens and verdant views." },
            { icon: "Check", title: "Ultra-Exclusive", label: "26 Families", description: "45,000 sq. ft. of space shared by just 26 exclusive families." }
        ],
        amenitiesList: [
            { icon: "Waves", label: "Private Pool & Gazebo" },
            { icon: "Utensils", label: "Dual Kitchens (Gourmet & Utility)" },
            { icon: "Coffee", label: "Resort-style Leisure Areas" },
            { icon: "Shield", label: "Staycation Lifestyle" },
            { icon: "Trees", label: "1250 sq ft Garden Balconies" },
            { icon: "Building", label: "Signature Penthouse" }
        ],
        specifications: [
            { category: "Space & Layout", items: ["One Residence per Floor", "5000 sq. ft. Carpet Area", "1250 sq. ft. Private Garden Balcony", "Dual Kitchen Concept"] },
            { category: "Green Features", items: ["35% Non-built Area (Nurtured Greens)", "25% of Home Opens to Greens", "Verdant Views from every room"] },
            { category: "Exclusive Living", items: ["Signature Penthouse options", "Private Pool and Gazebo for select units", "Ultra-low Density Living"] }
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
        status: "Newly Launched",
        slug: "keystone-clermont",
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
        description: "Garden Apartments where every floor is a single unit. Privacy and luxury redefined.",
        vision: "1 FLOOR 2 UNIT - EXTRA TERRACE APARTMENT",
        heroImage: "/images/project-images/project-tiles/clermont.jpg",
        galleryImages: ["https://www.vihav.com/wp-content/uploads/vihav-clmnt-new-images-21-scaled-1-e1757592539176.webp"],
        features: ["One Apartment Per Floor", "Garden Balconies"],
        highlights: [
            { icon: "Shield", title: "Ultimate Privacy", label: "One Floor One Unit", description: "The rarest luxury of having no neighbors on your floor." },
            { icon: "Trees", title: "Garden Homes", label: "Green Balconies", description: "Bring nature into your living room with expansive garden decks." },
            { icon: "MapPin", title: "Elite Neighborhood", label: "New Alkapuri", description: "Surrounded by the city's most prestigious residential projects." }
        ],
        amenitiesList: [
            { icon: "Shield", label: "Gated Security" },
            { icon: "Trees", label: "Private Gardens" },
            { icon: "Dumbbell", label: "Fitness Center" },
            { icon: "Video", label: "Video Door Phone" },
            { icon: "Car", label: "Covered Parking" },
            { icon: "ArrowUpFromLine", label: "Personal Lift Access" }
        ],
        specifications: [
            { category: "Flooring", items: ["Italian Marble", "Wooden Flooring in Master Bed"] },
            { category: "Kitchen", items: ["Modular Kitchen Setup", "Quality Fittings"] },
            { category: "Doors", items: ["Veneer Finish Main Door", "Quality Hardware"] },
            { category: "Electrification", items: ["Automation Ready", "Concealed Wiring"] }
        ],
        connectivity: [{ label: "New Alkapuri", time: "0 Mins" }],
        address: "New Alkapuri, Vadodara",
        coordinates: { lat: 22.3150, lng: 73.1580 },
        mapEmbed: "https://maps.google.com/maps?q=Keystone+Clermont+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
        filterData: {
            category: "Residential",
            type: ["4bhk", "5bhk", "penthouse", "Apartments"],
            possession: "Under construction"
        }
    },
    {
        id: "keystone-30",
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
        galleryImages: ["https://www.vihav.com/wp-content/uploads/keystone30.webp"],
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
        status: "Ongoing",
        slug: "keystone-skyvillas-xl",
        title: "Keystone Skyvillas XL",
        category: "Residential",
        location: "30 Mtr. Main Road, Bhayli",
        carpetArea: "4200 Sq. Ft.",
        type: "4B2HK & 5B2HK APPARTMENT",
        price: "3.81 Cr",
        reraId: "PR/GJ/VADODARA/VADODARA/Others/RAA00001/010121",
        reraLink: "https://gujrera.gujarat.gov.in/",
        phone: "+91 84900 77611",
        email: "keystoneskyvillasxl@vihav.com",
        description: "Expansive living spaces designed for those who desire more. XL offers larger layouts and premium finishes.",
        vision: "5 ALLOTED CAR PARKING",
        heroImage: "/images/project-images/project-tiles/skyvillas-xl.jpg",
        galleryImages: ["https://www.vihav.com/wp-content/uploads/ongoing_thum.jpg"],
        features: ["Large Carpets", "Premium Fittings"],
        amenitiesList: [
            { icon: "Shield", label: "24/7 Security" },
            { icon: "Trees", label: "Landscape Garden" },
            { icon: "Dumbbell", label: "Gymnasium" },
            { icon: "Users", label: "Community Hall" },
            { icon: "Gamepad2", label: "Indoor Games" },
            { icon: "Car", label: "Allotted Parking" }
        ],
        specifications: [
            { category: "Flooring", items: ["Large Size Vitrified Tiles", "Anti-skid Tiles in Balcony"] },
            { category: "Kitchen", items: ["Granite Platform", "SS Sink", "Designer Tiles"] },
            { category: "Doors", items: ["Decorative Main Door", "Flush Internal Doors"] },
            { category: "Windows", items: ["Powder Coated Aluminum Section"] }
        ],
        connectivity: [{ label: "Bhayli", time: "0 Mins" }],
        address: "30 Mtr Main Road, Bhayli, Vadodara",
        coordinates: { lat: 22.2860, lng: 73.1300 },
        mapEmbed: "https://maps.google.com/maps?q=Keystone+Skyvillas+XL+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
        filterData: {
            category: "Residential",
            type: ["4bhk", "5bhk", "penthouse", "Apartments"],
            possession: "Ready to Move"
        }
    },
    {
        id: "keystone-48",
        status: "Ongoing",
        slug: "keystone-48",
        title: "Keystone 48",
        category: "RESI-COMM",
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
        mapEmbed: "https://maps.google.com/maps?q=Keystone+48+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed"
    },
    {
        id: "vihav-cbd-res",
        launchYear: "2022",
        brochureLink: "https://drive.google.com/file/d/10dM1tq9y9lGhpbkU2zy3DB5afBs_MQP0/view?usp=drive_link",
        status: "Ongoing",
        progress: 75,
        slug: "vihav-cbd-res",
        title: "Vihav CBD",
        tagline: "4 BHK APARTMENTS AND 5 B2HK PENTHOUSES IN VADODARA",
        category: "Residential",
        location: "Bhayli Cross Road, Vadodara",
        carpetArea: "262 to 4200 Sq.Ft.",
        type: "4BHK & 5B2HK APPARTMENT",
        price: "1.26 Cr",
        phone: "+91 7435 894 894",
        email: "cbd@vihav.com",
        description: "Vihav CBD (Central Business District) stands as an iconic residential and commercial development in the heart of Bhayli, offering an exclusive collection of 4 BHK luxurious flats and 5B2HK Penthouses. Thoughtfully designed for those who seek elegance, space, and a premium lifestyle.",
        vision: "HEART OF BHAYLI",
        heroImage: "/images/project-images/project-tiles/vihav-cbd.jpg",
        galleryImages: [
            "https://www.vihav.com/wp-content/uploads/vihav-cbd-gallery-image-7.webp",
            "https://www.vihav.com/wp-content/uploads/vihav-cbd-gallery-image-4.webp",
            "https://www.vihav.com/wp-content/uploads/DSC_6886-scaled.jpg",
            "https://www.vihav.com/wp-content/uploads/DSC_6906-scaled.jpg",
            "https://www.vihav.com/wp-content/uploads/SSP_1376-1-scaled.jpg"
        ],
        realImages: [
            "https://www.vihav.com/wp-content/uploads/vihav-cbd-gallery-image-7.webp", // Placeholder
            "https://www.vihav.com/wp-content/uploads/vihav-cbd-gallery-image-4.webp", // Placeholder
            "https://www.vihav.com/wp-content/uploads/DSC_6886-scaled.jpg" // Placeholder
        ],
        amenitiesImages: [
            "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000", // Gym Placeholder
            "https://images.unsplash.com/photo-1590486803833-1c5dc8ce84ac?q=80&w=1000", // Pool Placeholder
            "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000" // Garden Placeholder
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
        status: "Ongoing",
        slug: "vihav-spring-woods",
        title: "Vihav Spring Woods",
        category: "Residential",
        location: "Tarsali, Vadodara",
        carpetArea: "Plot: 832 - 1500 Sq.Ft.",
        type: "3BHK BUNGALOW",
        price: "75 Lacs",
        reraId: "PR/GJ/VADODARA/VADODARA/Others/RAA00003/010121",
        reraLink: "https://gujrera.gujarat.gov.in/",
        phone: "+91 81402 03377",
        email: "springwoods@vihav.com",
        description: "Premium duplexes and flats offering a blend of space and community.",
        vision: "ONLY 36 PREMIUM BUNGALOWS",
        heroImage: "/images/project-images/project-tiles/springwoods.jpg",
        galleryImages: ["https://www.vihav.com/wp-content/uploads/spring_woods_thum.webp"],
        features: ["Duplex Layouts", "Clubhouse"],
        amenitiesList: [
            { icon: "Shield", label: "Security" },
            { icon: "Coffee", label: "Clubhouse" },
            { icon: "Dumbbell", label: "Gym" },
            { icon: "Trees", label: "Garden" },
            { icon: "Car", label: "Parking" },
            { icon: "Video", label: "CCTV" }
        ],
        specifications: [
            { category: "Flooring", items: ["Premium Vitrified"] },
            { category: "Kitchen", items: ["Granite Platform"] },
            { category: "Doors", items: ["Decorative Main Door"] },
            { category: "Windows", items: ["Aluminum Section"] }
        ],
        connectivity: [{ label: "Bhayli", time: "0 Mins" }],
        address: "Bhayli Cross Road, Vadodara",
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
        status: "Ongoing",
        slug: "vihav-elinor",
        title: "Vihav Elinor",
        category: "Residential",
        location: "New Alkapuri, Gotri",
        carpetArea: "2134 - 2898 Sq.Ft.",
        type: "3BHK & 4BHK APPARTMENT",
        price: "82.51 Lacs",
        reraId: "PR/GJ/VADODARA/VADODARA/Others/RAA00002/010121",
        reraLink: "https://gujrera.gujarat.gov.in/",
        phone: "+91 95046 36636",
        email: "elinor@vihav.com",
        description: "Contemporary homes on the main road, offering connectivity and style.",
        vision: "BETWEEN 2 TOWERS 100FT DISTANCE",
        heroImage: "/images/project-images/project-tiles/vihav-elinor.jpg",
        galleryImages: ["https://www.vihav.com/wp-content/uploads/vihav_elinor_thum.webp"],
        features: ["Main Road Access", "Premium Amenities"],
        amenitiesList: [
            { icon: "Shield", label: "Security" },
            { icon: "Trees", label: "Garden" },
            { icon: "Dumbbell", label: "Gym" },
            { icon: "Users", label: "Hall" },
            { icon: "Gamepad2", label: "Games" },
            { icon: "Car", label: "Parking" }
        ],
        specifications: [
            { category: "Flooring", items: ["Vitrified Tiles"] },
            { category: "Kitchen", items: ["Granite Platform"] },
            { category: "Doors", items: ["Standard Flush Doors"] },
            { category: "Windows", items: ["Aluminum Sliding"] }
        ],
        connectivity: [{ label: "Bhayli", time: "0 Mins" }],
        address: "75 Mtr Main Road, Bhayli, Vadodara",
        coordinates: { lat: 22.3000, lng: 73.1340 },
        mapEmbed: "https://maps.google.com/maps?q=Vihav+Elinor+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
        filterData: {
            category: "Residential",
            type: ["4bhk", "5bhk", "penthouse", "Apartments"],
            possession: "Newly Launched"
        }
    },
    {
        id: "vihav-parvarish",
        status: "Ongoing",
        slug: "vihav-parvarish",
        title: "Vihav Parvarish",
        category: "Residential",
        location: "Nr Priya Cinema, Sevasi, Bhayli",
        carpetArea: "1575 - 1750 Sq.Ft.",
        type: "3BHK APPARTMENT",
        price: "49 Lacs",
        reraId: "PR/GJ/VADODARA/VADODARA/Others/RAA00001/010121",
        reraLink: "https://gujrera.gujarat.gov.in/",
        phone: "+91 95046 35635",
        email: "parvarish@vihav.com",
        description: "Family-centric homes designed for holistic living.",
        vision: "FAMILY-CENTRIC HOME",
        heroImage: "/images/project-images/project-tiles/vihav-parvarish.jpg",
        galleryImages: ["https://www.vihav.com/wp-content/uploads/vihav_parvarish_thum.webp"],
        features: ["Community Hall", "Garden"],
        amenitiesList: [
            { icon: "Shield", label: "Security" },
            { icon: "Trees", label: "Large Garden" },
            { icon: "Users", label: "Senior Citizen Sitout" },
            { icon: "Gamepad2", label: "Kids Play Area" },
            { icon: "Car", label: "Parking" },
            { icon: "Dumbbell", label: "Yoga Deck" }
        ],
        specifications: [
            { category: "Structure", items: ["Earthquake Resistant"] },
            { category: "Flooring", items: ["Vitrified Tiles"] },
            { category: "Kitchen", items: ["Granite Platform"] },
            { category: "Electric", items: ["Standard Brand Fittings"] }
        ],
        connectivity: [{ label: "Gotri", time: "0 Mins" }],
        address: "New Alkapuri, Gotri, Vadodara",
        coordinates: { lat: 22.3250, lng: 73.1480 },
        mapEmbed: "https://maps.google.com/maps?q=Vihav+Parvarish+Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed",
        filterData: {
            category: "Residential",
            type: ["3bhk", "4bhk", "penthouse", "Apartments"],
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
        }
    },
    {
        id: "skyone",
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
        heroImage: "https://www.vihav.com/wp-content/uploads/1_skyone_thum.webp",
        galleryImages: ["https://www.vihav.com/wp-content/uploads/1_skyone_thum.webp"],
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
            category: "Commercial",
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
        heroImage: "https://www.vihav.com/wp-content/uploads/vs-monolith-thumb.webp",
        galleryImages: ["https://www.vihav.com/wp-content/uploads/vs-monolith-thumb.webp"],
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
        status: "Newly Launched",
        slug: "supremus-iii",
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
        heroImage: "https://www.vihav.com/wp-content/uploads/supremus3-new-banner-for-homepage-1.webp",
        galleryImages: ["https://www.vihav.com/wp-content/uploads/supremus3-new-banner-for-homepage-1.webp"],
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
        launchYear: "2022",
        brochureLink: "https://drive.google.com/file/d/1YEC52psDRHd111wP970Qvd-YGFFyjUPm/view?usp=drive_link",
        status: "Ongoing",
        slug: "vihav-cbd",
        title: "Vihav CBD",
        category: "Commercial",
        location: "Bhayli Cross Road, Vadodara",
        carpetArea: "262 to 4200 Sq.Ft.",
        type: "SHOWROOMS, SHOPS & OFFICES",
        price: "22 Lacs",
        phone: "+91 7435 894 894",
        email: "cbd@vihav.com",
        description: "Central Business District of Bhayli. A landmark mixed-use development.",
        vision: "HEART OF BHAYLI",
        heroImage: "/images/project-images/project-tiles/vihav-cbd.jpg", // Placeholder
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
        status: "Ongoing",
        slug: "vihav-supremus-2",
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
        heroImage: "https://www.vihav.com/wp-content/uploads/vhv_supremus2.webp",
        galleryImages: ["https://www.vihav.com/wp-content/uploads/vhv_supremus2.webp"],
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
        heroImage: "https://www.vihav.com/wp-content/uploads/4_wealth_square_thum.webp",
        galleryImages: ["https://www.vihav.com/wp-content/uploads/4_wealth_square_thum.webp"],
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
        heroImage: "https://www.vihav.com/wp-content/uploads/5_vtc_thum.webp",
        galleryImages: ["https://www.vihav.com/wp-content/uploads/5_vtc_thum.webp"],
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
        heroImage: "https://www.vihav.com/wp-content/uploads/6_vbs_thum.webp",
        galleryImages: ["https://www.vihav.com/wp-content/uploads/6_vbs_thum.webp"],
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
        heroImage: "https://www.vihav.com/wp-content/uploads/3_supremus_thum.webp",
        galleryImages: ["https://www.vihav.com/wp-content/uploads/3_supremus_thum.webp"],
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
        heroImage: "https://www.vihav.com/wp-content/uploads/9_elite_square_thum.webp",
        galleryImages: ["https://www.vihav.com/wp-content/uploads/9_elite_square_thum.webp"],
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
