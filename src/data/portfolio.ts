export const portfolioData = {
  personal: {
    name: "Tushar Dileep",
    title: "Software Developer Intern",
    tagline: "B.Sc. IT Student · Developer · Problem Solver",
    email: "tushardileepv@gmail.com",
    phone: "+91 98923 89937",
    location: "Dombivli, Maharashtra, India",
    bio: "Information Technology undergraduate pursuing a B.Sc. in IT, with a foundation in programming, object-oriented design, data structures, and web development. Seeking a Software Developer Internship to contribute to practical software projects while strengthening engineering skills.",
    social: {
      github: "https://github.com/Gr8Challengers",
      linkedin: "https://www.linkedin.com/in/tushar-dileep-182789349/",
    },
    resumeLink: `${import.meta.env.BASE_URL}Tushar_Dileep_Resume.pdf`,
  },

  skills: [
    {
      category: "Programming Languages",
      items: [
        { name: "Java", icon: "☕" },
        { name: "Python", icon: "🐍" },
        { name: "C++", icon: "⚙️" },
        { name: "C#", icon: "🔷" },
      ],
    },
    {
      category: "Web Technologies",
      items: [
        { name: "HTML5", icon: "🌐" },
        { name: "CSS3", icon: "🎨" },
        { name: "JavaScript", icon: "⚡" },
        { name: "TypeScript", icon: "🔷" },
      ],
    },
    {
      category: "Frameworks & Runtime",
      items: [
        { name: "Node.js", icon: "🟢" },
        { name: "React", icon: "⚛️" },
      ],
    },
    {
      category: "CS Fundamentals",
      items: [
        { name: "OOP", icon: "🧩" },
        { name: "Data Structures & Algorithms", icon: "📊" },
        { name: "Problem Solving", icon: "💡" },
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor of Science in Information Technology (B.Sc. IT)",
      institution: "SIES College of Arts, Science and Commerce",
      university: "University of Mumbai",
      duration: "June 2024 – Present",
      expected: "Expected Graduation: 2027",
      score: "CGPA: 9.09",
      icon: "🎓",
    },
    {
      degree: "Higher Secondary Certificate (HSC) – Science",
      institution: "Keraleeya Samajam's Model College (Autonomous)",
      university: "Maharashtra State Board",
      duration: "2024",
      score: "Score: 63.50%",
      icon: "📚",
    },
  ],

  projects: [
    {
      title: "FilmBox",
      subtitle: "Movie Logging Platform & Film Discovery",
      description:
        "A web-based movie diary and logging platform that enables users to discover films, record ratings, and write private reviews. Features interactive, component-based user interfaces with movie data and search functionality powered by the TMDb API.",
      techStack: ["TypeScript", "TSX", "Node.js", "TMDb API", "CSS"],
      highlights: [
        "Built interactive, component-based user interfaces with TypeScript JSX and web technologies",
        "Integrated movie data and search functionality using the TMDb API",
        "Structured around movie discovery, film details, rating, review writing, and saved diary entries",
      ],
      date: "September 2026",
      type: "Featured Project",
      github: "https://github.com/Gr8Challengers",
      liveDemo: "https://gr8challengers.github.io/FilmBox/",
    },
  ],

  experience: [
    {
      role: "Co-Head, Compliance Avenue",
      organization: "Entrepreneurship Cell & Skill Hub (Nirmitee Kendra)",
      institution: "SIES College",
      duration: "June 2025 – March 2026",
      type: "Leadership",
      highlights: [
        "Progressed from Associate to Co-Head, taking on greater responsibility for compliance-related activities and team coordination",
        "Supported administrative workflows, documentation, and adherence to organizational procedures for cell activities and events",
        "Contributed to operational record-keeping, including attendance and registration-related processes",
      ],
    },
    {
      role: "Associate, Compliance Avenue",
      organization: "Entrepreneurship Cell & Skill Hub (Nirmitee Kendra)",
      institution: "SIES College",
      duration: "September 2024 – March 2025",
      type: "Leadership",
      highlights: [
        "Assisted with compliance administration and coordination to support the smooth execution of student-led initiatives",
      ],
    },
  ],

  achievements: [
    {
      title: "Second Prize – Table of Diplomacy Competition",
      event: "Arithmos, N.M. College, Vile Parle",
      date: "3 February 2026",
      description:
        "Recognized for strategic negotiation and diplomatic problem-solving",
      icon: "🏆",
    },
  ],
};

