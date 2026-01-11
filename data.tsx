import { Linkedin } from "lucide-react";

export const socialNetworks = [
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "#!",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Co-Founder, Chief Executive Officer",
        subtitle: "REALIZA, Sustainability Consulting Firm, Chile",
        description: "Execute sustainability consulting services involving data analysis, strategic planning, project evaluation, and implementation of actions for climate change mitigation and adaptation. Achievement: Over 50 projects executed in various regions of Chile and for international companies.",
        date: "2021 - Present",
    },
    {
        id: 2,
        title: "Head of Processes and Management Control",
        subtitle: "POCK, Plastic Valorization, Chile",
        description: "Optimize organization processes. Achievement: Improved internal sales tracking and systematized information. Certified the company as a B Corporation.",
        date: "2022",
    },
    {
        id: 3,
        title: "New Economies Diagnostic Manager",
        subtitle: "GlocalMinds Foundation, Chile",
        description: "Map various organizations in Ibero-America associated with new economies. Collect, systematize, and visualize information about the registry.",
        date: "2020",
    },
    {
        id: 4,
        title: "Project and Student Engagement Coordinator",
        subtitle: "UC Sustainability Office, Chile",
        description: "Coordinate the design, evaluation, and implementation of sustainability projects ranging from transportation, biodiversity, to waste management. Achievement: Implemented the university's first shared bicycle system as part of the Carbon Neutrality Strategy team.",
        date: "2018 - 2020",
    },
];

export const dataAboutPage_Ed = [
    {
        id: 1,
        title: "Pontificia Universidad Católica de Chile",
        subtitle: "Industrial Civil Engineer",
        description: "Relevant Courses: Programming as a Tool for Engineering - Research, Innovation, and Entrepreneurship - Stochastic Models",
        date: "2013 - 2019",
    },
    {
        id: 2,
        title: "University of California, Santa Bárbara (In progress)",
        subtitle: "Master of Science, Media Arts and Technology",
        description: "A transdisciplinary program that blends art, engineering, and emerging media, preparing professionals to innovate through creative–technical research in multimedia, sound, and visual technologies.",
        date: "2025",
    },
];

export const dataAboutPage_More_OtherBackground = [
    {
        id: 1,
        title: "",
        subtitle: "Regenerativa Foundation, Chile",
        description: "Course in Syntropic Agriculture",
        date: "2022",
    },
    {
        id: 2,
        title: "",
        subtitle: "Permaculture Research Institute, Chile",
        description: "Permaculture Design",
        date: "2020",
    },
    {
        id: 3,
        title: "",
        subtitle: "Glocalminds Foundation, Chile",
        description: "Course in 'Art of Hosting' Experiential and Participatory Learning Methodologies",
        date: "2019",
    },
];

export const dataAboutPage_More_Conferences = [
    {
        id: 1,
        title: "",
        subtitle: "Valparaíso Business Development Center, Chile",
        description: "Seminar on Sustainability and Circular Economy for Entrepreneurs",
        date: "2021",
    },
    {
        id: 2,
        title: "",
        subtitle: "Latin American Young Politicians Meeting, Chile",
        description: "Talk: 'What do we understand by Sustainability?'",
        date: "2021",
    },
];

export const dataAboutPage_More_Volunteering = [
    {
        id: 1,
        title: "",
        subtitle: "Kingdom Fungi Festival",
        description: "Member of Operations Team, Art Direction",
        date: "2024",
    },
    {
        id: 2,
        title: "",
        subtitle: "Cverde NGO",
        description: "Partner, Director of Finance",
        date: "2024",
    },
    {
        id: 3,
        title: "",
        subtitle: "Mapu Kufüll Mushroom Cultivation Cooperative",
        description: "Partner, Workshop Facilitator",
        date: "2022 - Present",
    },
];



export const dataCounter = [
    {
        id: 0,
        endCounter: 8,
        text: "Years of Experience",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 30,
        text: "Supported Organizations",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 60,
        text: "Sustainability Projects Led",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        title: "Strategic Sustainability Plan of the University of Aysén",
        image: "proyecto-aysen1.png",
        href: "/projects-1"
    },
    {
        title: "Renewal of the Inorganic Recycling System",
        image: "/proyecto-reciclaje-2.png",
        href: "/projects-2"
    },
    {
        title: "Carbon Neutrality Strategy",
        image: "/proyecto-carbono4.png",
        href: "/projects-3"
    },
    {
        title: "Art and Science Projects",
        image: "/fungi1.jpg",
        href: "/projects-4"
    },
];

export const dataPortfolio_Engineer = [
    {
        id: 1,
        title: "Data-driven Sustainability Strategy",
        subtitle: "How I led diagnostics, stakeholder engagement and SDG analytics to create the University of Aysén’s sustainability roadmap",
        overviewImages: ["/proyecto-aysen1.png"], 
        challengeImages: ["/proyecto-aysen2.png"], 
        solutionImages: ["/proyecto-aysen3.png"], 
        resultImages: ["/proyecto-aysen4.png"], 
        overview: "In 2023, the University of Aysén hired my consultancy, Realiza, to design a comprehensive sustainability strategy. I led the diagnostic, stakeholder engagement and data analysis process that mapped the university’s academic, operational and research activities against the UN Sustainable Development Goals, and translated that into a concrete management model for decision-makers.",
        challenges: "The university had sustainability scattered across departments, with no shared metrics, no integrated data, and no decision-making framework. Leadership knew sustainability was important, but they didn’t know where they stood, what mattered most, or how to prioritize actions.",
        role:[
            " Coordinate the consulting team",
            " Designing the diagnostic methodology ",
            "Facilitating stakeholder workshops",
            "Building and cleaning the datasets",
            "Analyzing SDG alignment",
            "Producing the visualizations and final strategic model"
        ],
        methodologyTitle: [
            "1. Stakeholder-driven diagnosis",
            "2. Data-driven SDG mapping",
            "3. Strategy & management model"
        ],
        metholodyDescription:[
            "I ran in-person workshops (World Café) with students, faculty and territorial actors to capture how sustainability was understood and practiced across the ecosystem. I processed, analyzed and visualized the results.",
            "I built and cleaned a publications and research database, then classified it using international SDG criteria (Jayabalasingham et al., 2019) with Python, SQL and AI-assisted tagging. The results were turned into visual dashboards using Illustrator and RAWGraphs.",
            "I translated both qualitative and quantitative insights into a sustainability management model that the university could actually operate."
        ],
        results: [
            "50% of publications aligned with at least one SDG, revealing a much stronger research impact than leadership expected.",
            "High engagement from the university community, turning sustainability from an abstract idea into a shared agenda.",
            "A concrete sustainability management model now used as a roadmap for decision-making and reporting.",
            "Clear visualizations that allowed non-technical stakeholders to understand complex sustainability data and its relation with other strategic goals.",
        ]
    },    
    {
        id: 2,
        title: "Optimizing a recycling system",
        subtitle: "How I redesigned waste collection for one of Chile’s largest universities using analytics, AHP and Python.",
        overviewImages: ["/proyecto-reciclaje-1.png"],
        challengeImages: ["/proyecto-reciclaje-2.png"], 
        solutionImages: ["/proyecto-reciclaje-3.png","/proyecto-reciclaje33.png"],
        resultImages: ["/proyecto-reciclaje-4.png"], 
        overview: "While working for the Sustainability Directorate at Pontificia Universidad Católica de Chile, I led the redesign of the inorganic recycling system for the San Joaquín campus. I combined field data, decision-making models and route-optimization algorithms to eliminate overflows, reduce collection inefficiencies and create a scalable recycling infrastructure.",
        challenges: "The recycling system was failing: containers overflowed, collection routes were inefficient, and waste was being mishandled. The university had no data-driven way to decide how many bins were needed, where to place them, or how to collect them efficiently.",
        role: [
            "Collecting and cleaning operational data",
            "Designing the sizing and location model",
            "Running multi-criteria decision analysis (AHP)",
            "Optimizing collection routes in Python",
            "Producing the technical proposal for implementation",
        ],
        methodologyTitle: [
            "1. Field & expert data collection",
            "2. System sizing",
            "3. Location optimization",
            "4. Route optimization"
        ],
        metholodyDescription:[
            "I gathered qualitative and quantitative data through on-site measurements and expert interviews to understand waste generation, container usage and collection constraints.",
            "I applied Zafra-Mejía’s methodology to calculate the required number and capacity of recycling points across campus.",
            "I used the Analytic Hierarchy Process (AHP) to rank and select optimal locations based on accessibility, waste generation, and operational constraints.",
            "I implemented routing algorithms in Python to minimize travel distance and collection time, reducing operational costs and overflow risk."
        ],
        results: [
            "A full technical redesign of the recycling system for the San Joaquín campus",
            "Optimized number, size and placement of recycling points ",
            "Optimized collection routes generated by algorithmic models",
            "The university implemented the proposed system, significantly improving operational efficiency and reducing overflows"         
        ],
    },
    {
        id: 3,
        title: "Designing a path to Carbon Neutrality ",
        subtitle: "How I built emissions forecasts, scenario models and a phased mitigation portfolio under uncertainty",
        overviewImages: ["/proyecto-carbono1.jpg"],
        challengeImages: ["/proyecto-carbono2.png"],
        solutionImages: ["/proyecto-carbono3.png"],
        resultImages: ["/proyecto-carbono4.png"],
        overview: "I led a three-person interdisciplinary team to design a long-term carbon neutrality strategy for an organization that already had three years of emissions data but lacked a decision framework. I built the emissions forecasts, uncertainty analysis and project prioritization model that allowed leadership to decide where to invest, when, and with what climate impact.",
        challenges: "The organization had emissions data, but it was inconsistent, uncertain and not connected to decision-making. Leadership did not know which sources mattered most, which projects would actually reduce emissions, or how to sequence investments over the next 15 year",
        role: [
            "Cleaning and validating emissions data  ",
            "Building the 2039 emissions forecast model  ",
            "Designing the mitigation portfolio logic  ",
            "Prioritizing projects under cost, impact and feasibility constraints  ",
            "Translating technical analysis into an investment roadmap"
        ],
        metodologyTitle: [
            "1. Data grounding & uncertainty control",
            "2. Long-term emissions modeling",
            "3. Mitigation portfolio design"
        ],
        metholodyDescription: [
            "I reviewed three years of emissions data, challenged assumptions, and aligned the datasets with the organization and the consulting team to establish a reliable baseline.",
            "I built a 2039 emissions projection model in Python, incorporating growth, efficiency trends and uncertainty ranges to expose risks and tipping points.",
            "I designed and evaluated 11 mitigation projects across four implementation phases, combining:  ",
        ],
        results: [
            "A validated emissions baseline and 2039 forecast model  ",
            "A ranked portfolio of 11 mitigation projects with cost and impact metrics  ",
            "A four-phase implementation roadmap linking investment to emissions reduction  ",
            "A carbon-neutrality strategy that leadership could actually execute, not just report"
        ],
    },
    {
        id: 4,
        title: "Climate Accounting System for a Multinational",
        subtitle: "How I analyzed SBTi FLAG-aligned data pipelines for AJE Group’s Bio Amayu suppliers.",
        overviewImages: ["/aje-1.jpg", "/aje-2.jpg"],   // FIXED
        challengeImages: [],                            // Added to match interface
        solutionImages: [],                             // Added to match interface
        resultImages: [],                               // Added to match interface
        overview: "I worked with a consulting team to design and execute a climate impact assessment for AJE Group’s agricultural supply chain behind Bio Amayu, a climate-positive beverage brand. I led the data-collection design and standards alignment that allowed the company to quantify, compare and improve the climate performance of its suppliers under SBTi FLAG and GHG Protocol.",
        challenges: "AJE Group needed to prove and improve the climate performance of dozens of agricultural suppliers, but data was fragmented, inconsistent and not aligned with international standards. Without a robust climate accounting system, “climate positive” risked being a marketing claim instead of a defensible metric.",
        role: [
             "Designing the supplier data-collection architecture",
             "Defining variables required by SBTi FLAG and GHG Protocol",
             "Mapping system gaps and governance risks",
             "Translating raw data into climate-strategy insights"
        ],

        metodologyTitle: [
            "1. Supply-chain data architecture",
            "2. Data architecture & diagnostic framework",
            "3. Gap & governance analysis"
        ],
        metholodyDescription: [
            "I designed the data-gathering process for agricultural suppliers, defining land-use, inputs, yields and practices required for SBTi FLAG-compliant accounting.",
            "I designed the supplier-level data model and diagnostic process, defining the variables required to capture production flows, land-use change and regenerative agriculture practices in line with GHG Protocol and SBTi FLAG guidelines.",
            "I mapped missing data, weak controls and system constraints, identifying what prevented the supply chain from being fully auditable and scalable."
        ],
        results: [
            "A SBTi FLAG-aligned carbon footprint diagnostic for Bio Amayu’s agricultural supply chain  ",
            "A quantified view of how regenerative practices affect emissions and removals  ",
            "A map of data gaps and governance risks limiting climate credibility"
        ],
    },
    
];


export const dataPortfolio_Artist = [
    {
    id: 1,
    title: "The First Singing",
    overview:
      "Inspired by my time living in La Araucanía, the work blends birds sounds and psychoacoustics to tell a story.",
    concept:
      "Inspired by my time living in La Araucanía, the work uses six bird species (Chucao, Queltehue, Fiofío, Rayadito, Bandurria, Martín Pescador) and recordings from the Voipir River. A poem by Mapuche poet Elicura Chihuailaf provides the emotional backbone, divided into seven stages corresponding to the healing journey, each mapped to sound features like amplitude, frequency, and brightness.",
    conceptImages: [
      "/images/first_singing/concept1.jpg",
      "/images/first_singing/concept2.jpg",
    ],
    experiments: [
      "Audio tracks composed and processed in Adobe Audition.",
      "Feature extraction (amplitude, dominant frequency, spectral centroid) in Python.",
      "3D real-time visualization of sound layers in Max/MSP.",
      "Mapping sound parameters to emotional stages of the poem."
    ],
    experimentImages: [
      "/images/first_singing/experiment1.jpg",
      "/images/first_singing/experiment2.jpg",
    ],
    exhibition: [
      "Immersive audio-visual presentation highlighting the balance between ecological and human life.",
      "Visualization of soundscapes responding to emotional and psychoacoustic parameters.",
      "Audience engagement through reflection on environmental and emotional health."
    ],
    exhibitionImages: [
      "/images/first_singing/exhibition1.jpg",
      "/images/first_singing/exhibition2.jpg",
    ],
  },
    {
      id: 2,
      title: "Postalk",
      overviewImages: ["/postalk1.jpg"],
      conceptImages: ["/postalk2.jpg"],
      experimentImages: ["/postalk3.jpg"],
      exhibitionImages: ["/postalk4.jpg"],
      overview: "Postalk is a media arts project exploring communication between humans and machines through non-verbal communication",
      concept: "The conceptual approach investigates ephemeral interactions and the narrative potential of transient messages, exploring the potential of non-verbal communication between humans and machines  .",
      experiments: [
        "Developed interactive installations combining printed media and augmented reality.",
        "Experimented with generative text-to-image algorithms to visualize conversation flows.",
        "Created a responsive environment reacting to visitor input in real time.",
      ],
      exhibition: [
        "Displayed in gallery spaces with augmented reality overlays.",
        "Visitors could manipulate physical objects to alter digital outputs.",
        "Documented the evolving interaction between audience and media installation.",
      ],
    },
    {
      id: 3,
      title: "Funga Morpho",
      overviewImages: ["/funga1.jpg"],
      conceptImages: ["/funga2.jpg"],
      experimentImages: ["/funga3.jpg"],
      exhibitionImages: ["/funga4.jpg"],
      overview: "Funga Morpho is an art-tech project exploring the aesthetics of fungi and morphogenesis through digital simulations and interactive media.",
      concept: "The project conceptualizes natural growth patterns and the transformative qualities of fungal forms.",
      experiments: [
        "Simulated fungal growth using generative algorithms.",
        "Created interactive projections reacting to user movement.",
        "Combined microscopy data with visual programming to generate immersive experiences.",
      ],
      exhibition: [
        "Exhibited as immersive installations with projection mapping.",
        "Included interactive components allowing audience participation.",
        "Documented the transformation of natural forms into digital artworks.",
      ],
    },
  ];
  


export const hexagonData = [
    {
    id: 0, //Art Project
    name: "First Singing",
    backgroundImage: "/fungi1.jpg",
    link: "/projects-art-1",
    type: "Art",
    },
   
    {
    id: 1,
    name: "Strategic Plan",
    backgroundImage: "/proyecto-aysen1.png",
    link: "/projects-1",
    type: "Engineering",
    },

    {
    id: 2, //Art Project
    name: "Postalk",
    backgroundImage: "/fungi1.jpg",
    link: "/projects-art-2",
    type: "Art",
    },

    {
      id: 3,
      name: "Logistics Design",
      backgroundImage: "/proyecto-reciclaje-3.png",
      link: "/projects-2",
      type: "Engineering",
    },
    {
    id: 4, //Art Project
    name: "Funga Morpho",
    backgroundImage: "/fungi1.jpg",
    link: "/projects-art-3",
    type: "Art",
      },
    {
      id: 5,
      name: "Carbon Neutrality",
      backgroundImage: "/proyecto-carbono1.jpg",
      link: "/projects-3",
      type: "Engineering",
    },
    {
      id: 6,
      name: "Supply Chain",
      backgroundImage: "/fungi1.jpg",
      link: "/projects-4",
      type: "Engineering",
    },

  ];
