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
    ],
    theme: {
        colors: {
            orange: "#FF8C00",
            orangeDark: "#cc7000",
            orangeSoft: "rgba(255, 140, 0, 0.12)",
            black: "#0a0a0a",
            dark: "#1a1a1a",
            dark2: "#242424",
            dark3: "#2e2e2e",
            gray: "#888",
            grayLight: "#aaa",
            white: "#ffffff",
            whiteSoft: "rgba(255, 255, 255, 0.08)",
        },
        typography: {
            fontHead: "'Playfair Display', Georgia, serif",
            fontBody: "'DM Sans', sans-serif"
        }
    },
    homePage: {
        servicesPreview: {
            tagline: "What We Do",
            titleMain: "Our Core ",
            titleAccent: "Services",
            description: "From concept to completion, we deliver precision, beauty, and unmatched craftsmanship across every discipline.",
            buttonText: "Learn More",
            buttonAllText: "View All Services",
            buttonAllLink: "/services"
        },
        featuredProjects: {
            tagline: "Portfolio",
            titleMain: "Featured ",
            titleAccent: "Projects",
            buttonAllText: "View All Projects",
            buttonAllLink: "/projects",
            buttonText: "View Project"
        },
        testimonials: {
            tagline: "What Clients Say",
            titleMain: "Client ",
            titleAccent: "Testimonials"
        },
        aboutSnippet: {
            badgeNum: "10+",
            badgeLabel: "Years of Excellence",
            image: "/img/img6.jpg",
            tagline: "Our Story",
            titleMain: "Design Is Not Just What It ",
            titleAccent: "Looks Like",
            paragraphs: [
                "At Light & Shadow Arch. Studio, we believe that great architecture is a conversation between structure and sensation. Founded with a vision to redefine the built environment in Bangladesh, our studio has grown into a trusted name for discerning clients seeking design that is both breathtaking and functional.",
                "Every project we take on is a deep study in light, proportion, material, and culture, resulting in spaces that feel not just designed, but discovered. We balance rigorous technical expertise with a deeply humanistic design philosophy."
            ],
            features: [
                "Award-winning designs",
                "BIM-enabled workflow",
                "Sustainable approach",
                "On-time delivery"
            ],
            buttonText: "Discover Our Story",
            buttonLink: "/about"
        },
        ctaBanner: {
            tagline: "Start Your Journey",
            titleMain: "Ready to Transform ",
            titleAccent: "Your Space?",
            description: "Whether it's a dream home, a landmark office, or a hospitality haven, we're ready to make it extraordinary.",
            buttonText: "Get a Free Consultation",
            buttonLink: "/contact"
        }
    },
    aboutPage: {
        hero: {
            title: "About Our Studio",
            subtitle: "A decade of translating vision into enduring space.",
            image: "/img/img1.jpg",
            label: "Get to Know Us"
        },
        story: {
            tagline: "Our Story",
            titleMain: "Built on Passion, ",
            titleAccent: "Driven by Purpose",
            paragraphs: [
                "Light & Shadow Arch. Studio was born from a singular conviction: that architecture should do more than shelter — it should elevate. Founded in Dhaka over a decade ago, we set out to challenge the conventional and champion the extraordinary in every project we undertake.",
                "From our first residential commission to landmark commercial buildings, we have grown steadily while keeping our founding philosophy intact: rigorous design thinking, honest material use, and an unwavering commitment to the client's vision.",
                "Today, our studio brings together architects, interior designers, 3D artists, and project managers in a collaborative environment that produces work of genuine distinction — responsive to Bangladesh's unique cultural and climatic context, yet firmly global in its ambition."
            ],
            image: "/img/img6.jpg",
            badgeNum: "150+",
            badgeLabel: "Projects Done",
            buttonText: "Work With Us",
            buttonLink: "/contact"
        },
        team: {
            tagline: "The People",
            titleMain: "Meet Our ",
            titleAccent: "Expert Team",
            description: "A diverse collective of creative minds united by one purpose — exceptional design.",
            members: [
                { name: "Arman Hossain", role: "Principal Architect", img: "/img/img1.jpg" },
                { name: "Sabrina Rahman", role: "Lead Interior Designer", img: "/img/img1.jpg" },
                { name: "Tanvir Ahmed", role: "Senior Project Manager", img: "/img/img1.jpg" }
            ]
        },
        missionVision: {
            tagline: "What We Stand For",
            titleMain: "Our Mission ",
            titleAccent: "& Vision",
            items: [
                {
                    icon: "bullseye",
                    title: "Our Mission",
                    description: "To design environments that inspire the human spirit — spaces where light, material, and form are choreographed with intention. We deliver bespoke architectural and interior solutions that reflect our clients' unique identities while contributing positively to the urban fabric of Bangladesh."
                },
                {
                    icon: "eye",
                    title: "Our Vision",
                    description: "To be the most respected design studio in South Asia, recognised for producing work of timeless quality that bridges the gap between artistry and engineering — shaping cities and lives for generations to come."
                },
                {
                    icon: "leaf",
                    title: "Sustainability",
                    description: "Every project we design is underpinned by a commitment to environmental responsibility. We integrate passive design strategies, locally-sourced materials, and energy-efficient systems as standard practice."
                },
                {
                    icon: "users",
                    title: "Client Partnership",
                    description: "We treat every client as a collaborator. Through open communication, transparent processes, and genuine listening, we ensure the final design always exceeds expectation while remaining true to budget and timeline."
                }
            ]
        },
        ctaBanner: {
            tagline: "Let's Create Together",
            titleMain: "Have a Project in Mind?",
            titleAccent: "",
            description: "Tell us about your vision and we'll craft a design strategy tailored just for you.",
            buttonText: "Start a Conversation",
            buttonLink: "/contact"
        }
    },
    servicesPage: {
        hero: {
            title: "Our Services",
            subtitle: "Comprehensive design solutions from concept to completion.",
            image: "/img/img1.jpg",
            label: "What We Offer"
        },
        expertise: {
            tagline: "Expertise",
            titleMain: "Design Services ",
            titleAccent: "Tailored for You",
            description: "Every service we provide is underpinned by meticulous attention to detail, creative innovation, and a deep respect for our clients' goals and timelines."
        },
        process: {
            tagline: "How We Work",
            titleMain: "Our Design ",
            titleAccent: "Process",
            steps: [
                { step: "01", title: "Discovery", icon: "magnifying-glass", desc: "We listen deeply to understand your vision, lifestyle, budget, and the story you want your space to tell." },
                { step: "02", title: "Concept Design", icon: "pencil-ruler", desc: "We prepare concept drawings, mood boards, and 3D explorations to establish the design direction collaboratively." },
                { step: "03", title: "Development", icon: "drafting-compass", desc: "Detailed drawings, specifications, and material selections are finalised. Every decision is documented for precise execution." },
                { step: "04", title: "Delivery", icon: "flag-checkered", desc: "We supervise construction, manage contractors, and oversee every detail until your space is handed over flawlessly." }
            ]
        },
        ctaBanner: {
            tagline: "Start the Conversation",
            titleMain: "Ready to Begin Your ",
            titleAccent: "Design Journey?",
            description: "Reach out today to discuss your project and receive a customised proposal from our team.",
            buttonText: "Request a Quote",
            buttonLink: "/contact"
        }
    },
    projectsPage: {
        hero: {
            title: "Our Projects",
            subtitle: "A curated selection of our distinguished completed and proposed works.",
            image: "/img/projects/dewan8.jpg",
            label: "Portfolio"
        },
        portfolio: {
            tagline: "Selected Works",
            titleMain: "Explore Our ",
            titleAccent: "Portfolio"
        },
        ctaBanner: {
            tagline: "Commission Your Project",
            titleMain: "Have a Space That Needs to ",
            titleAccent: "Come Alive?",
            description: "We'd love to hear about your project. Let's start with a conversation.",
            buttonText: "Start a Project",
            buttonLink: "/contact"
        }
    },
    contactPage: {
        hero: {
            title: "Contact Us",
            subtitle: "Let's start a conversation about your next great space.",
            image: "/img/img1.jpg",
            label: "Reach Out to Us"
        },
        form: {
            tagline: "Send a Message",
            titleMain: "Tell Us About Your ",
            titleAccent: "Project",
            description: "Fill in the form below and our team will get back to you within 24 hours.",
            buttonText: "Send Message",
            services: [
                "Interior Design",
                "Architecture",
                "Renovation",
                "3D Visualization",
                "Consultation",
                "Project Management",
                "Other"
            ]
        },
        info: {
            googleMapsUrl: "https://maps.google.com/maps?q=Senpara+Parbata,+Mirpur-10,+Dhaka,+Bangladesh&output=embed&z=15",
            socialTitle: "Follow Our Work"
        },
        faq: {
            tagline: "Common Questions",
            titleMain: "Frequently ",
            titleAccent: "Asked Questions"
        }
    },
    clientsPage: {
        hero: {
            title: "Our Clients",
            subtitle: "Trusted by businesses, loved by homeowners across Bangladesh.",
            image: "/img/img1.jpg",
            label: "Our Valued Clients"
        },
        clientLogos: {
            tagline: "Who We've Worked With",
            titleMain: "Trusted by ",
            titleAccent: "Happy Clients",
            description: "From growing businesses to private homeowners, our clients span restaurants, offices, commercial spaces and residences across Bangladesh."
        },
        testimonials: {
            tagline: "Client Voices",
            titleMain: "What Our Clients ",
            titleAccent: "Say About Us",
            list: [
                {
                    name: "Mughal Darbar Owner",
                    role: "Restaurant Client, Syedpur",
                    quote: "3D Studio designed our restaurant interior beautifully. They showed us the full 3D model before starting and the final result was exactly what we wanted — delivered within our budget.",
                    avatar: "/img/img1.jpg"
                },
                {
                    name: "Darbar Property",
                    role: "Office Client, Rangpur",
                    quote: "Our office looks completely transformed. The team was professional, on time and the quality of craftsmanship was outstanding. We would recommend 3D Studio to any business looking for a modern workspace.",
                    avatar: "/img/img1.jpg"
                },
                {
                    name: "Residential Client",
                    role: "Home Interior Client, Dhaka",
                    quote: "They listened to everything we wanted, showed us the design in 3D first, and delivered a stunning home interior within our budget. The free consultation made the whole process so easy and stress-free.",
                    avatar: "/img/img1.jpg"
                }
            ]
        },
        ctaBanner: {
            tagline: "Join Our Client Family",
            titleMain: "Ready to Become Our Next ",
            titleAccent: "Success Story?",
            description: "Call us today for a free consultation and let's create your perfect space together.",
            buttonText: "Call: 01746-957037",
            buttonLink: "/contact"
        }
    },
    whyUsPage: {
        hero: {
            title: "Why Choose Us",
            subtitle: "What makes 3D Studio different — and why it matters for your project.",
            image: "/img/img1.jpg",
            label: "The 3D Studio Difference"
        },
        differentiators: {
            tagline: "Our Differentiators",
            titleMain: "Quality Design, ",
            titleAccent: "Honest Service",
            description: "Choosing the right interior design partner is a big decision. Here's why clients across Bangladesh consistently choose 3D Studio Architect."
        },
        features: [
            {
                num: "01",
                label: "3D First Approach",
                title: "See Your Space Before Work Begins",
                desc: "Before a single wall is touched, we build a complete 3D model of your space so you can see exactly how it will look. You can review, adjust and approve every detail before execution — no surprises, no regrets.",
                list: ["Full 3D model before any work starts", "Photorealistic renders for every project", "Customise design freely before finalising", "Clear visual communication at every stage"],
                img: "/img/img3.jpg",
                reverse: false
            },
            {
                num: "02",
                label: "Craftsmanship",
                title: "Skilled Team, Quality Results",
                desc: "Our experienced team of designers and craftsmen ensures every project is executed to the highest standard. We use quality materials, precise execution and thorough supervision from start to handover.",
                list: ["Experienced interior design team", "Skilled and vetted craftsmen", "Quality materials within your budget", "Strict on-site supervision throughout"],
                img: "/img/img4.jpg",
                reverse: true
            },
            {
                num: "03",
                label: "Budget Friendly",
                title: "Best Service Within Your Budget",
                desc: "We believe great design should be accessible. We work within your budget without compromising on style or quality — offering flexible packages for homes, offices and restaurants of all sizes.",
                list: ["Transparent and honest pricing", "Flexible packages for all budgets", "No hidden costs after agreement", "Free consultation before any commitment"],
                img: "/img/img5.jpg",
                reverse: false
            },
            {
                num: "04",
                label: "Client First",
                title: "Your Vision is Our Priority",
                desc: "We don't push a fixed style — we listen. Your taste, lifestyle and budget guide every decision we make. We offer free consultation, regular updates and after-handover support because your satisfaction is our goal.",
                list: ["Free initial consultation for all clients", "Design tailored to your taste and needs", "Regular updates throughout the project", "After-handover support and advice included"],
                img: "/img/img2.jpg",
                reverse: true
            }
        ],
        ctaBanner: {
            tagline: "Your Dream Space Awaits",
            titleMain: "Let's Build Something ",
            titleAccent: "You'll Love",
            description: "Call us today for a free consultation. We serve Dhaka, Rangpur, Lalmonirhat and all across Bangladesh.",
            buttonText: "Call: 01746-957037",
            buttonLink: "/contact"
        }
    }
};
