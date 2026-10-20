/* ============================================================
   PORTFOLIO CONTENT — edit everything here, no HTML/JS needed
   ============================================================ */

const PORTFOLIO_DATA = {

  // Single source of truth for contact/social links — used in the
  // hero, contact section, and footer.
  profile: {
    email: "ritikasingh9125@gmail.com",
    phone: "+91 7991660154",
    location: "Bhopal, India",
    github: "https://github.com/RitikaSingh91",
    linkedin: "https://www.linkedin.com/in/ritikasingh9125/",
    leetcode: "https://leetcode.com/u/RitikaSingh91/",
    instagram: "https://www.instagram.com/ritikasingh_er/",
    youtubeVlogs: "https://www.youtube.com/@ritikasinghvlogs-30",
    youtubeEnglish: "https://www.youtube.com/@EnglishwithRitika03",
    resume: "assets/Ritika_Singh_Resume.pdf",
  },

  heroRoles: [
    "Computer Science Student",
    "Aspiring Software Developer",
    "DSA & Problem Solving",
    "AI & Cybersecurity Enthusiast",
  ],

  // Pulled into the hero paragraph by script.js so the numbers only
  // ever need to be edited in one place.
  // NOTE: your resume says "130+ DSA problems" and the hero text used to
  // say "150+" while the DSA stats card below says "176" — pick the
  // number that's actually current and this will stay in sync everywhere.
  heroStats: {
    dsaProblems: "250+",
    hackathons: "5+",
  },

  skills: [
    {
      category: "Programming",
      items: [
        { name: "Java" },
        { name: "JavaScript" },
        { name: "SQL" },
        { name: "HTML" },
        { name: "CSS" },
      ],
    },
    {
      category: "Development",
      items: [
        { name: "React.js" },
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "MongoDB" },
        { name: "REST APIs" },
        { name: "Tailwind CSS" },
        { name: "Bootstrap" },
      ],
    },
    {
      category: "Security",
      items: [
        { name: "JWT Authentication" },
        { name: "Role-Based Access Control" },
        { name: "Input Validation" },
        { name: "CORS & Helmet" },
        { name: "Rate Limiting" },
      ],
    },
    {
      category: "Computer Science",
      items: [
        { name: "Data Structures & Algorithms" },
        { name: "Object-Oriented Programming" },
        { name: "DBMS" },
        { name: "Operating Systems" },
        { name: "Computer Networks" },
        { name: "Software Engineering" },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "VS Code" },
        { name: "Postman" },
        { name: "MongoDB Atlas" },
        { name: "Vercel" },
        { name: "Render" },
      ],
    },
  ],

  projects: [
    {
      name: "AI Cyber Trust Shield",
      featured: true,
      category: ["web", "mern", "other"],

      description:
        "A full-stack MERN cybersecurity platform that flags fake job offers, phishing emails, fraudulent websites, and scam PDFs using rule-based content and pattern analysis.",

      problem:
        "Fake job and internship scams make it difficult for students and job seekers to distinguish legitimate opportunities from suspicious ones.",

      tech: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "OCR",
        "PDF Parser",
      ],

      features: [
        "JWT authentication and Role-Based Access Control securing access across user roles",
        "OCR and PDF parsing to extract and verify text from scanned documents and reports",
        "REST APIs for scam detection, report generation, and management",
        "Backend hardened with Helmet, rate limiting, input validation, and CORS",
      ],

      github: "https://github.com/RitikaSingh91/AI-Cyber-Trust-Shieldd",
      demo: "https://ai-cyber-trust-shieldd.vercel.app/",
      image: "assets/GITHUB .png",
    },
    {
  name: "Brew & Bean Café",
  featured: false,
  category: ["web", "other"],

  description:
    "A modern, responsive café website concept designed for a small business, featuring an attractive landing page, menu, gallery, customer reviews, special offers, contact information, and WhatsApp ordering.",

  problem:
    "Small cafés often rely only on social media and may not have a dedicated website where customers can easily explore their menu, location, contact details, and services.",

  tech: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Responsive Web Design",
    "Vercel",
  ],

  features: [
    "Responsive design optimized for desktop, tablet, and mobile devices",
    "Interactive menu filtering for different food and beverage categories",
    "WhatsApp ordering button for quick customer communication",
    "Café gallery with interactive hover effects",
    "Customer reviews and special offer sections",
    "Contact form with business information, location, and opening hours",
    "Smooth scrolling, animations, and interactive navigation",
  ],

  github: "https://github.com/RitikaSingh91/-brew-bean-cafe",
  demo: "https://brew-bean-cafe-flax.vercel.app/",
  image: "assets/projects/cafe.png",
},
{
  name: "Store Rating System",
  featured: true,
  category: ["web", "fullstack", "react"],

  description:
    "A full-stack store rating platform that allows users to discover stores, submit 1–5 star ratings, and manage store information through role-based dashboards.",

  problem:
    "Managing store ratings and user access can become difficult without a centralized platform that separates responsibilities for administrators, store owners, and normal users.",

  tech: [
    "React",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Prisma",
    "JWT",
    "REST API",
  ],

  features: [
    "Role-Based Access Control for System Administrators, Store Owners, and Normal Users",
    "Admin dashboard for managing users, stores, and ratings",
    "Users can browse stores and submit or update 1–5 star ratings",
    "Store owners can view ratings and average ratings for their stores",
    "JWT-based authentication with protected routes",
    "Input validation, password hashing, and API error handling",
  ],

  github: "https://github.com/RitikaSingh91/store-rating-system",
  demo: "https://frontend-delta-lilac-56.vercel.app/",
  image: "assets/store-rating-system.png",
},

    {
      name: "Password Security Analyzer",
      featured: false,
      category: ["web", "mern"],

      description:
        "A full-stack MERN platform for real-time password strength evaluation using entropy calculation, pattern detection, and dictionary-based checks.",

      problem:
        "Many users rely on weak or reused passwords because they have no immediate, meaningful feedback on how secure a password actually is.",

      tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "REST API"],

      features: [
        "Real-time password strength evaluation with entropy calculation and dictionary-based checks",
        "JWT authentication with secure password hashing",
        "Analysis history stored per user in MongoDB",
        "Backend secured with rate limiting, Helmet, CORS, and input validation",
      ],

      // TODO: add the real GitHub repo link for this project.
      github: "https://github.com/RitikaSingh91/passwordguard-fullstack",
      demo: "passwordguard-fullstack.vercel.app",
      image:"asserts/projects/passwords.png" ,
    },
  ],
  

  education: [
    {
      degree: "B.Tech, Computer Science & Engineering (Cyber Security)",
      school: "IES College of Technology, Bhopal (RGPV University)",
      year: "2023 — 2027",
      grade: "CGPA: 8.63 / 10.0",
      note: "Relevant coursework: DSA, DBMS, OS, Computer Networks, OOP",
    },
    {
      degree: "Higher Secondary (X)",
      school: "Manas Convent School",
      year: "2023",
      grade: "83%",
      note: "Built my foundation in Mathematics, Science and Computer Fundamentals(Basic python)"
    },
  ],

  // Real internship/work experience — separate from the future
  // "Career Highlights / Offers" section below, which is intentionally
  // left as placeholders until you have offers to add.
  
    experience: [
    {
      role: "Android Developer — Virtual Internship, EduSkills",
      organization:
        "National Internship Portal, in association with Google for Developers' India EDU Program",
      year: "Jan — Mar 2025",
      points: [
        "Built and debugged Android application modules, applying core mobile development concepts including app structure, UI development, and component-based design.",
        "Applied software development practices and object-oriented design patterns throughout the build and improvement of Android-based applications.",
        "Worked independently in a remote setting, managing the full development-to-debugging workflow for assigned modules.",
      ],
    },
  ],

  // Only real numbers should replace the placeholders below.
  dsaStats: [
    { label: "Problems Solved", value: "260", note: "LeetCode problems solved" },
    { label: "Active Days", value: "250", note: "Consistent problem-solving practice" },
    { label: "Max Streak", value: "89 days", note: "Longest continuous streak" },
    {
      label: "Current Focus",
      value: "Trees & Graphs",
      note: "Currently practicing",
      image: "assets/leetcode.png",
    },
  ],

  // Real offers, shortlists, and event results — replace or add more
  // entries here the same way as new results come in.
  careerHighlights: [
    {
  type: "Offer",
  title: "Software Development Intern — Internship",
  organization: "Ank Square Private Limited",
  year: "Oct 2026",
  description:
    "Received an internship offer letter for a 3-month internship as a Software Development Intern, commencing on 15 October 2026, to gain practical industry experience in software development.",
  image: "assets/career/anksquare.png",
},
    {
      type: "Offer",
      title: "Business Growth Specialist — Internship",
      organization: "SmartED Innovations (Learnspace Edtech Pvt Ltd)",
      year: "Sep 2026",
      description:
        "Received an appointment letter for a 6-month internship (OJT: 9–18 Sep 2026), with a monthly stipend and performance-based incentives, plus a CTC offer of ₹4–8 LPA post-internship based on performance.",
      image: "assets/career/smarted-offer-letter.png",
    },
    {
      type: "Shortlisted",
      title: "GRiD 8.0 — Next Round",
      organization: "Flipkart Early Careers",
      year: "2026",
      description:
        "Shortlisted for the next round of evaluation in Flipkart's GRiD 8.0 program after the first round.",
      image: "assets/career/flipkart-grid-8.png",
    },
    {
      type: "Hackathon",
      title: "Exceller AgentifAI Buildathon — Pre-Qualifier",
      organization: "Capgemini",
      year: "2026",
      description:
        "Participated in the Capgemini Exceller AgentifAI Buildathon; invited back for a reopened pre-qualifier round after facing technical issues in the first attempt.",
      image: "assets/career/capgemini-agentifai-buildathon.png",
    },
  ],

  certificates: [
    {
  title: "The Complete Full-Stack Web Development Bootcamp",
  image: "assets/Certificates/Udemy.jpeg",
  organization: "Udemy",
  date: "2026",
  type: "Online Course",
  description:
    "Successfully completed The Complete Full-Stack Web Development Bootcamp instructed by Dr. Angela Yu, completing 62 total hours of structured learning and hands-on web development coursework.",
},
    {
      title: "National Level Ideathon 2K26",
      image: "assets/Certificates/AICTE.jpeg",
      organization: "Prestige Institute of Management and Research, Bhopal",
      date: "21 May 2026",
      type: "Ideathon",
      description:
        "Certificate of Appreciation for valuable contribution as a participant in National Level Ideathon 2K26.",
    },
    {
  title: "CII-Yi Bhopal Future 5.0 – Climate Change",
  image: "assets/Certificates/Cii-future.jpeg",
  organization: "CII – Young Indians (Yi) Bhopal",
  date: "2025",
  type: "Participation Certificate",
  description:
    "Participated in CII-Yi Bhopal Future 5.0 on the theme 'Climate Change' held on 3rd July 2025 at the CII MP State Office, contributing insights and innovative ideas focused on building a greener and cleaner future.",
},
    {
      title: "AI Tools & ChatGPT Workshop",
      image: "assets/Certificates/be10X.png",
      organization: "be10x",
      date: "4 June 2026",
      type: "Workshop",
      description:
        "Successfully completed an AI Tools and ChatGPT workshop covering AI presentations, data analysis, and AI-assisted coding.",
    },
    {
      title: "Deloitte Cyber Job Simulation",
      image: "assets/Certificates/Delloite.png",
      organization: "Deloitte – Forage",
      date: "9 January 2026",
      type: "Job Simulation",
      description:
        "Completed practical tasks as part of the Deloitte Cyber Job Simulation.",
    },
    {
      title: "Microsoft Excel – Beginners to Advance",
      image: "assets/Certificates/Excel certificate.jpeg",
      organization: "SkillCourse",
      date: "17 July 2026",
      type: "Course",
      description:
        "Successfully completed the Microsoft Excel Beginners to Advance course.",
    },
    {
      title: "Cybersecurity Analyst Job Simulation",
      image: "assets/Certificates/Forage.png",
      organization: "Tata / Forage",
      date: "4 June 2026",
      type: "Job Simulation",
      description:
        "Completed practical cybersecurity tasks covering IAM fundamentals, IAM strategy assessment, custom IAM solutions, and platform integration.",
    },
    {
      title: "TechSprint Hackathon 2025",
      image: "assets/Certificates/GD OEIT.jpeg",
      organization: "Google Developer Group On Campus OIST",
      date: "2025",
      type: "Hackathon",
      description:
        "Participated in the TechSprint Hackathon 2025 and demonstrated application of Google technology.",
    },
    {
      title: "GEN-AI Camp",
      image: "assets/Certificates/GEN-AI CAMP.jpeg",
      organization: "AlgoUniversity",
      date: "2026",
      type: "Generative AI Program",
      description:
        "Successfully completed the GEN-AI Camp covering Generative AI, Multimodal AI systems, and NLP.",
    },
    {
      title: "Vertex Ideathon 2025",
      image: "assets/Certificates/hachthonjuna.jpg",
      organization: "Jaypee University of Engineering & Technology, Guna",
      date: "14–16 November 2025",
      type: "Ideathon",
      description:
        "Participated in Vertex Ideathon 25 as a member of Team Inevitable and demonstrated good performance.",
    },
    {
      title: "Kitech Workshop",
      image: "assets/Certificates/Kitech certificate.jpeg",
      organization: "Kitech",
      date: "2026",
      type: "Workshop",
      description: "Successfully participated in the Kitech workshop.",
    },
    {
      title: "Introduction to Internet of Things",
      image: "assets/Certificates/NPTEL IOT.jpeg",
      organization: "NPTEL – IIT Kharagpur",
      date: "Jan–Apr 2026",
      type: "NPTEL Certification",
      description:
        "Successfully completed the 12-week Introduction to Internet of Things course with a consolidated score of 63%.",
    },
    {
      title: "Ethical Hacking",
      image: "assets/Certificates/NPTELethicalhacking.jpeg",
      organization: "NPTEL – IIT Kharagpur",
      date: "Jul–Oct 2025",
      type: "NPTEL Certification",
      description:
        "Successfully completed the 12-week Ethical Hacking course with a consolidated score of 53%.",
    },
    {
      title: "30 Days Power BI Micro Course",
      image: "assets/Certificates/Power BI.jpeg",
      organization: "SkillCourse",
      date: "11 June 2026",
      type: "Course",
      description: "Successfully completed the 30 Days Power BI Micro Course.",
    },
    {
      title: "Front-End Software Engineering Job Simulation",
      image: "assets/Certificates/skyscanner.jpeg",
      organization: "Skyscanner – Forage",
      date: "4 June 2026",
      type: "Job Simulation",
      description:
        "Completed practical front-end software engineering tasks, including creating a Backpack React web app.",
    },
    {
  title: "Attendance Reward",
  image: "assets/Certificates/Attendence reward.jpeg",
  organization: "IES College of Technology, Bhopal",
  year: "2026",
  description:
    "Received recognition/reward for maintaining excellent attendance and consistent participation in academic activities.",
},
{
  title: "Hackathon Winner",
  image: "assets/Certificates/winner.jpeg",
  organization: "Hackathon Organizer",
  date: "2026",
  type: "Winner • Cash Prize",
  description:
    "Won the hackathon and received a cash prize for developing and presenting an innovative technology-based solution.",
},
{
  title: "Technovision 2026 – State-Level Project Expo",
  image: "assets/Certificates/MP Hackthon.jpeg",
  organization: "Madhyanchal Professional University, Bhopal",
  date: "2026",
  type: "Project Expo",
  description:
    "Participated in the State-Level Project Expo 'Technovision 2026' held on 8th May 2026 at Madhyanchal Professional University, Bhopal, gaining experience in presenting and showcasing a technical project at a state-level event.",
},
{
  title: "Android Developer Virtual Internship",
  image: "assets/Intership.jpeg",
  organization: "AICTE - EduSkills",
  date: "January - March 2025",
  type: "Virtual Internship",
  duration: "10 weeks",
  institution: "IES College of Technology, Bhopal",
  supportedBy: "India Edu Program – Google for Developers",
  description:
    "Successfully completed a 10-week Android Developer Virtual Internship during January–March 2025 through the AICTE-EduSkills program, supported by the India Edu Program and Google for Developers.",
},
{
  title: "Academic Excellence – 1st Rank",
  image: "assets/Certificates/sem5 prize.jpeg",
  organization: "IES University, Bhopal",
  date: "2026",
  type: "Academic Achievement",
  description:
    "Achieved 1st rank in the 5th semester, recognizing strong academic performance and consistent dedication to studies in the Cyber Security program.",
},

{
  title: "Volunteer – Inforia 2K26",
  image: "assets/Certificates/Volunteer.jpeg",
  organization: "IES University, Bhopal",
  date: "2026",
  type: "Volunteer Experience",
  description:
    "Volunteered at Inforia 2K26 from 1st to 3rd April 2026, contributing to the successful organization and management of the event while developing teamwork and coordination skills.",
},

{
  title: "Microsoft Build Event",
  image: "assets/Certificates/Build Micro.jpeg",
  organization: "SCALive × Knowwy Technologies",
  date: "2026",
  type: "Technical Event",
  description:
    "Received a Certificate of Appreciation for outstanding participation in the Microsoft Build Event held on 20th June 2026, demonstrating enthusiasm for technology, learning, and innovation.",
},

{
  title: "Chess – Inforia 2K24",
  image: "assets/Certificates/Chess.jpeg",
  organization: "IES Group of Institutions, Bhopal",
  date: "2024",
  type: "Seminar / Competition",
  description:
    "Participated in the Chess event at Inforia 2K24, held at the IES campus on 14th March 2024, and received a participation certificate for involvement in the event.",
},

{
  title: "IES Yuva Sansad 2K25",
  image: "assets/Certificates/Yuva sansand.jpeg",
  organization: "IES University, Bhopal",
  date: "2025",
  type: "Leadership & Public Speaking",
  description:
    "Recognized as the Overall Best Performer in IES Yuva Sansad 2K25, demonstrating strong public speaking, presentation, communication, and leadership skills.",
},

{
  title: "Microsoft Build Event – Certificate of Appreciation",
  image: "assets/Certificates/buildmicro.jpeg",
  organization: "SCALive × Knowwy Technologies",
  date: "2026",
  type: "Technical Event",
  description:
    "Received a Certificate of Appreciation for outstanding participation in the Microsoft Build Event held on 20th June 2026, recognizing dedication, active participation, and passion for learning technology.",
},
{
  title: "Mock Parliament – 50 Years of Emergency",
  image: "assets/Certificates/Mock.jpg",
  organization: "BJYM",
  date: "27 June 2025",
  type: "Mock Parliament",
  description:
    "Participated in the Mock Parliament held on 27th June 2025 at Kushabhau Thackeray Inter-State Bus Terminal, Bhopal, commemorating 50 years of the Emergency. The event provided an opportunity to participate in a parliamentary simulation and engage in discussions on India's democratic and political history.",
},


  ],

  
   gallery: [
    { category: "college", caption: "Anchoring and Coordinates the events, IES University", img: "assets/activities/Anchoring.jpeg" },
     { category: "Project", caption: "SIH 2025 College level selected(SIH waiting list)", img: "assets/activities/SIH.jpg" },
    { category: "college", caption: "GATE 2026", img: "assets/gateresults.png" },
     { category: "coding", caption: "Inforia Hackathon Winner IES College of technologh", img: "assets/activities/team.jpg"},
    { category: "coding", caption: "TechSprint Hackathon 2025, OIST", img: "assets/activities/oriental.jpeg"},
    { category: "coding", caption: "VERTEX Hackathon 2025, JUNA", img: "assets/activities/juna.jpg" },
     { category: "coding", caption: "Leetcode Streak", img: "assets/leetcode.png" },
    { category: "coding", caption: "Technovision 2026 — State-Level Project Expo", img: "assets/activities/Madhyachal.jpeg" },
    { category: "coding", caption: "Microsoft Build: localhost Bhopal", img: "assets/activities/Buildsocial.jpeg" },
    { category: "college", caption: "Cii-Bhopal", img: "assets/activities/ppt.jpg" },
    { category: "college", caption: "Academic Excellence — B.Tech III Semester", img: "assets/activities/sem3.jpeg" },
    { category: "college", caption: "Academic Excellence — B.Tech IV Semester", img: "assets/activities/sem4.jpeg" },
    { category: "college", caption: "Academic Excellence — B.Tech V Semester", img: "assets/activities/sem5.jpeg" },
    { category: "college", caption: "Yuva Sansand Nagar Nigam Bhopal in the present of Hon’ble Chief Minister of Madhya Pradesh, Dr. Mohan Yadav", img: "assets/activities/Nagar.jpg" },
    { category: "college", caption: "Overall best performance IES University Yuva sansand", img: "assets/activities/Paliaments.jpg" },
    { category: "college", caption: "Volunteering — Inferia 2K26", img: "assets/activities/Volunteer.jpeg" },
    { category: "creative", caption: "My first Hackathon winner ", img: "assets/activities/winphoto.jpeg" },
    { category: "college", caption: "Vertex Ideathon,JUNA", img: "assets/activities/junaaa.jpg" },
     { category: "creator", caption: "Making content in INSTAGRAM", img: "assets/insta.jpeg" },
  ],
  
};
