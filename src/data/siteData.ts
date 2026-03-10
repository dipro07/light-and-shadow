export const siteData = {
    company: {
        name: "Light & Shadow",
        tagline: "arch. studio",
        description: "Fulfill clients dreams Through innovative design is our goal. We provide quality interior, exterior, landscape, construction & consultancy.",
        mission: "We have a mission to provide luxury home staging and interior design services to clients across a range of price.",
        socials: {
            facebook: "#",
            instagram: "#",
            linkedin: "#",
            youtube: "#",
        },
        contact: {
            address: "Chowrangi Market, 95 Senpara Parbata, Mirpur-10, Dhaka, Bangladesh",
            phones: ["01751-086142", "01765-992228", "01727-153879"],
            email: "lightshadow.architect@gmail.com",
            workingHours: {
                weekdays: "Saturday – Thursday: 9 AM – 7 PM",
                friday: "Friday: By Appointment",
            }
        }
    },
    navigation: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Why Us", href: "/why-us" },
        { label: "Projects", href: "/projects" },
        { label: "Contact", href: "/contact" },
    ],
    hero: {
        tagline: "Dhaka, Bangladesh",
        title: {
            main: "Where Light Meets",
            accent: "Architecture"
        },
        subtitle: "Crafting timeless spaces where design philosophy, structural artistry, and human experience converge into something extraordinary.",
        slides: [
            { image: "/img/img1.jpg", alt: "Modern architecture exterior" },
            { image: "/img/img2.jpg", alt: "Luxury interior design" },
            { image: "/img/img3.jpg", alt: "Contemporary design space" },
        ]
    },
    services: [
        {
            id: "interior-design",
            icon: "couch",
            title: "Interior Design",
            description: "Curating bespoke interiors that balance aesthetics and functionality. We transform raw spaces into refined, livable art."
        },
        {
            id: "architecture",
            icon: "building-columns",
            title: "Architecture",
            description: "Designing structures that stand as testaments to innovation, responsive to context, culture, and climate."
        },
        {
            id: "3d-visualization",
            icon: "cube",
            title: "3D Visualization",
            description: "Photorealistic renders and immersive walkthroughs that bring your vision to life before a single brick is laid."
        },
        {
            id: "renovation",
            icon: "hammer",
            title: "Renovation",
            description: "Breathing new life into existing structures, acknowledging a space's hidden potential without losing its soul."
        },
        {
            id: "consultation",
            icon: "comments",
            title: "Consultation",
            description: "Expert guidance on design direction, space planning, and budget strategy for those not yet ready for full projects."
        },
        {
            id: "project-management",
            icon: "chart-gantt",
            title: "Project Management",
            description: "Overseeing every phase of construction and fit-out with rigorous scheduling and quality control."
        }
    ],
    stats: [
        { label: "Projects Completed", value: 150, suffix: "+" },
        { label: "Years of Experience", value: 10, suffix: "+" },
        { label: "Happy Clients", value: 200, suffix: "+" },
        { label: "Design Awards", value: 15, suffix: "+" },
    ],
    projects: [
        {
            id: "akber-residence",
            slug: "akber-residence",
            name: "Akber Residence",
            location: "Kishoreganj, Bangladesh",
            category: "Residential",
            image: "/img/projects/akber.jpg",
            bannerImage: "/img/projects/akber.jpg",
            tags: ["Residential", "Exterior Design", "3D Visualisation"],
            overview: [
                "The Akber Residence is a prestigious private home commissioned by MD. Akber, situated in Kishoreganj, a historically significant city in central Bangladesh. The design reflects the aspirations of a family deeply rooted in their region, yet seeking a home that embodies a contemporary architectural sensibility and a strong sense of presence within its context.",
                "The project demanded a built form that would stand as a landmark within its neighbourhood without resorting to ostentation. The resulting design is characterised by strong, clean geometries, a carefully composed façade of contrasting materials, and a spatial organisation that ensures comfortable, functional living across multiple generations.",
                "The exterior treatment balances the warmth of tonal brickwork with the crispness of rendered volumes and large-format glazing, a material language that is both contemporary and sympathetic to the vernacular building culture of the region. The fenestration is designed to capture prevailing breezes and optimise natural ventilation through the building's principal living spaces.",
                "The ground floor opens generously to the garden through a covered veranda, a fundamental element of the Bangladeshi domestic tradition, reinterpreted here in a crisp, modern architectural language. The upper floors are more private, containing the family's bedrooms and study spaces, designed with an understanding of how the household lives and moves through the day."
            ],
            designCredits: "The scheme was designed under the direction of principal architect Biswas M Ripon, whose vision was to create a home that offers genuine architectural quality to a region where such commissions remain rare. The exterior visualisation, which formed the client's primary reference throughout the design process, was produced by M.A. Rumman Ali, whose photorealistic 3D rendering allowed the client to engage intimately with the design before construction commenced.",
            details: [
                { label: "Client", value: "MD. Akber" },
                { label: "Location", value: "Kishoreganj, Bangladesh" },
                { label: "Category", value: "Residential" },
                { label: "Architect", value: "Biswas M Ripon" },
                { label: "3D Visualisation", value: "M.A. Rumman Ali" },
                { label: "Status", value: "Completed" }
            ],
            services: ["Architecture", "Exterior Design", "3D Visualisation", "Construction Drawing"],
            credits: [
                { label: "Architect", value: "Biswas M Ripon" },
                { label: "Exterior & 3D Viz", value: "M.A. Rumman Ali" }
            ],
            gallery: [
                { image: "/img/projects/akber.jpg", alt: "Akber Residence, exterior view", full: true },
                { image: "/img/img1.jpg", alt: "Interior living space" },
                { image: "/img/img1.jpg", alt: "Façade detail" },
                { image: "/img/img1.jpg", alt: "Veranda and garden" },
                { image: "/img/img1.jpg", alt: "Upper floor plan view" }
            ],
            relatedIds: ["dewan-school"]
        },
        {
            id: "dewan-school",
            slug: "dewan-school",
            name: "Proposed Dewan Memorial High School",
            location: "Chandara, Kaliakair, Gazipur",
            category: "Institutional",
            image: "/img/projects/dewan1.jpg",
            bannerImage: "/img/projects/dewan1.jpg",
            tags: ["Institutional", "Architecture", "3D Visualisation", "Proposed"],
            overview: [
                "The Proposed Dewan Memorial High School is a significant institutional architecture project located in Chandara, Kaliakair, Gazipur, a rapidly developing industrial and residential zone to the northwest of Dhaka. The project represents a meaningful contribution to educational infrastructure in a community that is experiencing profound social and economic transformation.",
                "The school is conceived as more than simply a functional building, it is intended to become a landmark of civic pride for the Kaliakair community. Its architecture draws from a vocabulary of rational, disciplined institutional design filtered through the warmth and texture appropriate to a school environment where children aged 6 to 17 will spend the most formative years of their lives.",
                "The massing of the building is articulated across a series of interconnected blocks of differing heights, each housing a distinct programme, connected by a central covered courtyard that serves as the school's principal social and gathering space. This courtyard orientation is a deliberate response to the Bangladeshi climate: creating shade, channelling prevailing winds, and providing a meaningful outdoor space for students at every grade level.",
                "The primary façade treatment employs a repeating rhythm of brickwork pilasters and recessed window bays that mediates the building's scale, ensuring that, despite its total floor area, the school retains a human proportion and does not overwhelm the surrounding context. At the main entrance, a cantilevered canopy of expressed concrete marks the arrival point and serves as a focal landmark visible from the main road approach."
            ],
            designCredits: "The school is designed to accommodate approximately 1,200 students across two sessions. The programme includes 36 standard classrooms, 6 specialist subject rooms (science laboratory, ICT lab, arts studio, library, music room, and geography room), an assembly hall for 400 occupants, a sports hall, administration offices, staff rooms, and separate sanitation blocks for male and female students and staff.",
            details: [
                { label: "Project", value: "Proposed Dewan Memorial High School" },
                { label: "Location", value: "Chandara, Kaliakair, Gazipur" },
                { label: "Category", value: "Institutional / Educational" },
                { label: "Capacity", value: "~1,200 Students" },
                { label: "Classrooms", value: "36 + 6 Specialist" },
                { label: "Status", value: "Proposed" }
            ],
            services: ["Architecture", "Structural Scheme", "3D Visualisation", "Construction Drawing"],
            locationInfo: {
                address: "Chandara, Kaliakair, Gazipur, Bangladesh",
                note: "Approx. 40km northwest of Dhaka"
            },
            gallery: [
                { image: "/img/projects/dewan1.jpg", alt: "Dewan Memorial School, main façade", span2: true },
                { image: "/img/projects/dewan2.jpg", alt: "Dewan Memorial School, entrance" },
                { image: "/img/projects/dewa3.jpg", alt: "Dewan Memorial School, side elevation" },
                { image: "/img/projects/dewa4.jpg", alt: "Dewan Memorial School, aerial view" },
                { image: "/img/projects/dewan5.jpg", alt: "Dewan Memorial School, courtyard" },
                { image: "/img/projects/dewan6.jpg", alt: "Dewan Memorial School, corridor view" },
                { image: "/img/projects/dewan7.jpg", alt: "Dewan Memorial School, evening render", span2: true },
                { image: "/img/projects/dewan8.jpg", alt: "Dewan Memorial School, landscape view" }
            ],
            relatedIds: ["akber-residence"]
        }
    ],
    testimonials: [
        {
            quote: "Light & Shadow transformed our home beyond our imagination. Every detail was executed with precision, taste, and a deep sense of space. We couldn't be happier with the outcome.",
            author: "Rahul Chowdhury",
            role: "Residential Client, Gulshan",
            avatar: "/img/img1.jpg"
        },
        {
            quote: "The team brought an unparalleled level of creativity and professionalism to our corporate headquarters project. The finished space has truly elevated our brand identity.",
            author: "Nadia Islam",
            role: "CEO, TechBridge BD",
            avatar: "/img/img1.jpg"
        },
        {
            quote: "From the initial concept to the final handover, working with Light & Shadow was an exceptional experience. Their attention to detail and clear communication made everything seamless.",
            author: "Karim Hossain",
            role: "Commercial Client, Motijheel",
            avatar: "/img/img1.jpg"
        }
    ],
    clients: [
        "Basundhara Group", "BRAC", "Walton Hi-Tech", "Square Group",
        "Meghna Group", "Rangs Properties", "Navana Real Estate", "DBL Group",
        "ACI Limited", "Apex Holdings", "Concord Group", "Eastern Housing"
    ],
    faqs: [
        {
            question: "How does the first consultation work?",
            answer: "Our initial consultation is a relaxed 45-60 minute conversation where we discuss your project, goals, and budget. It can be held at our studio or virtually. We provide an honest assessment and a preliminary design direction at no cost."
        },
        {
            question: "What is your minimum project budget?",
            answer: "We work across a range of budgets and scales, from compact consultations to large-scale architectural commissions. During our first call we'll ensure our engagement structure is the right fit for your investment level."
        },
        {
            question: "How long does a typical project take?",
            answer: "Project timelines vary by scope. An interior design project typically takes 8-16 weeks from concept to installation. Full architectural commissions range from 6 months to 2 years depending on complexity and permitting."
        },
        {
            question: "Do you work outside Dhaka?",
            answer: "Absolutely. While our studio is based in Mirpur, Dhaka, we regularly deliver projects across Chittagong, Sylhet, Rajshahi, and have also worked with diaspora clients on projects internationally."
        }
    ]
};
