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
        title: "Pontificia Universidad Católica de Chiler",
        subtitle: "Industrial Civil Engineer",
        description: "Relevant Courses: Programming as a Tool for Engineering - Research, Innovation, and Entrepreneurship - Stochastic Models",
        date: "2013 - 2019",
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
        image: "/proyecto-aysen2.png",
        href: "/projects-2"
    },
    {
        title: "Scope 3 Carbon Neutrality Strategy",
        image: "/proyecto-aysen3.png",
        href: "/projects-3"
    },
    {
        title: "Waste Management Diagnosis and Plan",
        image: "/proyecto-aysen4.png",
        href: "/projects-4"
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Strategic Sustainability Plan of the University of Aysén",
        overviewImages: ["/proyecto-aysen1.png","/proyecto-aysen2.png"], 
        challengeImages: ["/proyecto-aysen3.png", "/proyecto-aysen4.png"], 
        solutionImages: ["/proyecto-aysen5.png", "/proyecto-aysen6.png"], 
        resultImages: ["/projects images/proyecto-aysen7.png"], 
        overview: "The University of Aysén, a regional institution committed to sustainable development, sought in 2023 to enhance its approach to sustainability. For this purpose, Realiza, a sustainability consulting firm, was contracted to provide guidance in the university's transition towards more sustainable practices. The project included the implementation of several initiatives supporting the university's strategic sustainability plan.",
        challenges: "The University of Aysén faced the challenge of integrating sustainability into all its operational, academic, and research areas. They needed a clear diagnosis of their current situation and a roadmap to advance towards their sustainability goals. This process involved gathering and analyzing data from various sources, collaborating with multiple stakeholders, and applying appropriate methodologies to assess their impact.",
        solutions: `
        I spearheaded the development of three key products to tackle these challenges:
                1. Internal and Territorial Diagnosis: I facilitated in-person workshops with the internal and external university community to evaluate the state of sustainability at the university. We used facilitation tools like World Café to dynamically gather information, which I then analyzed using discourse analysis techniques and visualized with digital tools like Google Sheets and RAWGraphs.
                2. Sustainability Diagnosis in Academia and Research: I analyzed the university's contributions to publications and research projects. This involved collecting databases, applying international standards, and utilizing tools like Python, SQL, and ChatGPT to process and visualize the data. I worked with criteria from Jayabalasingham et al. (2019) to assess the research contributions aligned with the UN's Sustainable Development Goals (SDGs).
                3. Institutional Sustainability Management Model: I designed a model to guide the university's sustainability management, aligning their practices with the SDGs.
        `,
        results: `
        The project yielded several significant outcomes:
                1. Active Community Participation: The in-person workshops I facilitated engaged the university community in diagnosing sustainability, fostering a sense of ownership and commitment.
                2. Detailed Analysis of Publications and Research: My analysis revealed that almost 50% of the university's publications contribute to one or more SDGs, highlighting the positive impact of their research on global sustainability.
                3. Data Visualization: The information I gathered and analyzed was effectively visualized, aiding decision-making and communicating results to all stakeholders.
                4. Sustainable Management Model: The management model I proposed provided a clear guide for the university to continue advancing on its sustainability path.",
        `
    },
    {
        id: 2,
        title: "Renewal of the Inorganic Recycling System",
        overviewImages: ["/image-overview-2.jpg"],
        challengeImages: ["/image-challenge-3.jpg"], 
        solutionImages: ["/image-solution-3.jpg"],
        resultImages: ["/image-result-3.jpg"], 
        overview: "As one of my earliest professional projects, I led the renewal of the inorganic recycling system at the Pontificia Universidad Católica de Chile while working for the Sustainability Directorate. The project aimed to address and revamp the university's existing recycling system, which was experiencing significant operational issues.",
        challenges: "The initial challenge was dealing with a recycling system plagued by issues such as overflows at collection points, inefficient collection schemes, and operational inconsistencies in waste removal. My task was to determine the appropriate size for new recycling points, their optimal locations, and the most efficient collection routes.",
        solutions: "I tackled these challenges by gathering both qualitative and quantitative data through expert interviews and on-site data collection. Utilizing three distinct methodological frameworks, I assessed the current system using Zafra-Mejía’s approach to evaluate the number and size of recycling points needed, applied the Analytic Hierarchy Process to decide locations, and used optimal route algorithms to streamline collection routes. Tools like Google Sheets and Python, alongside specific routing libraries, were integral to this process.",
        results: "The outcome was a comprehensive proposal for a new recycling system for the San Joaquín Campus, complete with detailed recommendations on the number, size, location, and collection routes of recycling points. The university successfully implemented the new system based on my technical suggestions, significantly improving its operational efficiency.",
    },
    {
        id: 3,
        title: "Scope 3 Carbon Neutrality Strategy",
        overviewImages: ["/proyecto-carbononeutralidad1.png"],
        challengeImages: ["/proyecto-carbononeutralidad2.png"],
        solutionImages: ["/proyecto-carbononeutralidad3.png"],
        resultImages: ["/proyecto-carbononeutralidad4.png"],
        overview: "I was appointed as the project lead for an organization aiming to execute a Scope 3 carbon neutrality plan, working alongside a team of three interdisciplinary consultants. The organization had already made significant strides in sustainability, particularly with a clear path for reducing emissions in Scopes 1 and 2.",
        challenges: "The main challenge was the high level of uncertainty in the organization’s existing data and assumptions regarding Scope 3 emissions. They needed a concrete strategy to effectively reduce these emissions, focusing on the most significant and controllable sources.",
        solutions: "My approach involved analyzing and grounding the current information on Scope 3 emission sources. I coordinated the consulting team and acted as the liaison with the organization while handling two critical tasks myself: projecting Scope 3 greenhouse gas emissions to 2038 using Google Sheets and Python, and prioritizing mitigation initiatives through multivariable analysis and the Analytic Hierarchy Process. These methodologies allowed me to balance qualitative factors, such as political feasibility, with quantitative metrics like cost-efficiency.",
        results: "The result was a comprehensive carbon neutrality strategy that included a detailed analysis of the organization’s initial data, greenhouse gas emission projections through 2038, and a phased implementation plan for prioritized mitigation initiatives. This strategy provided the organization with a clear roadmap to achieve carbon neutrality for Scope 3 emissions.",
    },
    {
        id: 4,
        title: "Just for fun",
        overviewImages: ["/image-overview-4.jpg"],
        challengeImages: ["/image-challenge-5.jpg"],
        solutionImages: ["/image-solution-5.jpg"],
        resultImages: ["/image-result-5.jpg"],
        overview: "Despite my strong background in engineering, sustainability, and project design, the arts and education have always deeply moved me. Here are a few spaces where I have had the opportunity to explore these areas.",
        challenges: "Balancing my expertise in engineering and sustainability with the demands and creativity of the arts and education sectors was both challenging and rewarding.",
        solutions: "In the Reino Fungi Festival, I collaborated with artists and designers to set up the art rooms for the 3rd edition of the festival in Pucón. Additionally, with the Mapu Küfull cooperative, I worked in educational spaces to support the diversification of rural producers' offerings, blending interdisciplinary learning with community-focused initiatives.",
        results: "These experiences provided me with a deeper understanding of the artistic world and interdisciplinary collaboration. They also allowed me to contribute meaningfully to both artistic and educational projects, enriching my professional journey beyond traditional engineering and sustainability roles.",
    },
];
