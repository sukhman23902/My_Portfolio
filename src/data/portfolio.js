const DATA = {
  name: "Sukhmanpreet Singh",
  roleShort: "Software Engineer | Product & AI Platforms",
  tagline: "Engineering scalable distributed systems and AI-driven automation to bridge the gap between complex data and product execution.",
  location: "Gurugram, Haryana",
  email: "sukhman23902@gmail.com",
  phone: "+91-9779189410",
  linkedin: "linkedin.com/in/sukhmanpreet-singh-626848200",
  photo: `${import.meta.env.BASE_URL}my_image.jpg`,
  resume: `${import.meta.env.BASE_URL}Sukhmanpreet_Singh_SE.pdf`,

  experience: [
    {
      role: "R&D Engineer",
      company: "Taboola",
      place: "Gurugram, Haryana",
      dates: "May 2024 – Present",
      accent: "oklch(0.78 0.09 40)",
      bullets: [
        "Major Impact: Architected a high-concurrency, rule-based dynamic property engine in Java with multi-tier caching (Redis + Local), enabling real-time widget configuration for millions of users and reducing deployment latency from days to minutes; ensured 100% feature reliability by implementing an exhaustive end-to-end unit and integration testing suite.",
        "AI & Automation: Engineered a Model Context Protocol (MCP) server that automates the end-to-end A/B testing lifecycle—including experiment creation, variant allocation, and product configuration—via natural language. Integrated seamlessly with Cursor and Claude Code, boosting analyst efficiency by 40% and enabling automated error resolution through agentic self-correction.",
        "Systems Scalability: Optimized and maintained mission-critical Spark/HDFS pipelines, ensuring 99.9% uptime for global data streams processing billions of ad-serving events daily.",
        "Day-to-Day R&R: Drive the full-cycle SDLC by delivering high-impact features, critical bug fixes, and rapid hotfixes; lead comprehensive code reviews to maintain high standards for code quality and system maintainability. Proactively manage system health through deep-dive Root Cause Analysis (RCA) and real-time observability using Prometheus and Grafana, ensuring rapid resolution of production bottlenecks.",
        "Product Ownership: Collaborate with Product Managers to translate business requirements into technical design docs (TDDs), prioritizing features that balance technical debt with revenue growth.",
        "On-Call Leadership: Serve as a primary responder for PagerDuty rotations, managing high-stakes incident response and system stabilization for revenue-generating ad platforms."
      ],
      tags: ["Java", "JavaScript", "React JS", "Distributed Systems", "LLM/MCP/Skills", "Kafka", "Redis", "System Design", "Agentic Workflows", "Product Design", "Jira", "Agile", "SDLC", "Prometheus/Grafana", "Jenkins", "Kubernetes", "HDFS", "Claude and Codex"],
    },
    {
      role: "Implementation Specialist (Technical Solutions)",
      company: "Taboola",
      place: "Gurugram, Haryana",
      dates: "May 2023 – Apr 2024",
      accent: "oklch(0.85 0.05 150)",
      bullets: [
        "Technical Consulting: Acted as the primary technical bridge between global publishers and engineering, designing custom SDK integration strategies for high-traffic Android, iOS and web applications.",
        "Revenue Optimization: Analyzed massive datasets using Vertica/SQL to identify performance leaks, implementing bulk optimizations that recovered $50K+ in monthly recurring revenue.",
        "Day-to-Day R&R: Perform end-to-end SDK debugging, validate event-tracking telemetry, implementing Taboola's products for publishers and provide technical guidance to Sales and Account Management teams during the pre-and-post launch phases.",
        "Solutions Engineering: Built custom internal tools (React/Node) to automate manual publisher auditing, reducing the onboarding turnaround time by 40%.",
        "Quality Assurance: Led rigorous QA cycles for new feature releases, ensuring cross-platform compatibility and adherence to strict performance SLAs."
      ],
      tags: ["Solutions Architecture", "Data Analytics", "SDK Debugging", "SQL", "Client Consulting", "Vertica", "Client Satisfaction", "Technical Consultations", "Performance Optimizations"],
    },
  ],

  projects: [
    {
      title: "MCP Server A/B Testing Lifecycle",
      org: "Taboola R&D",
      blurb: "An AI-powered system that let's Taboola's internal teams manage the entire A/B testing process using natural language. Built on the Model Context Protocol (MCP), it allows AI agents to automatically handle experiment creation, variant setups, and Taboola's product configurations. The system is designed with strict validation logic to ensure every experiment is set up correctly and safely across all use cases.",
      tags: ["AI Engineering", "JavaScript", "Claude Skills", "AI Agents", "GraphQL", "REST API's", "Authentication and Authorization", "JWT", "JSON RPC"],
      palette: ["oklch(0.55 0.28 295)", "oklch(0.78 0.12 320)"],
      visibility: "private",
      repo: "https://test.com",
    },
    {
      title: "Publisher Dynamic Properties (PDP) Engine",
      org: "Taboola R&D",
      blurb: "Architected and deployed a high-scale configuration engine that delivers real-time, targeted publisher metadata (branding, UI themes) to millions of concurrent frontend clients. Engineered a multi-tier persistence and caching layer using MySQL and a dual-layer cache (Redis/In-memory) with a 15-minute TTL, ensuring sub-100ms retrieval. Designed a complex targeting system that matches property delivery based on Geo, Platform, and Placement dimensions. Implemented a 'one-shot' delivery optimization using a custom 'stop-flag' protocol, reducing redundant payload transfer by 60% on subsequent page requests.",
      tags: ["Java", "Spring Boot", "Product Design", "REST API Design", "System Design", "MYSQL", "Multi Tier Caching", "Query Optimization", "Cache Synchronization", "Feature Flags", "Observability Patterns", "Unit and Integration Testing", "Kafka or Message Queues"],
      palette: ["oklch(0.85 0.05 150)", "oklch(0.88 0.06 120)"],
      visibility: "private",
      repo: "https://test.com",
    },
    {
      title: "Automatic Email Sender",
      org: "Taboola Solutions Engineering",
      blurb: "Developed a full-stack automation platform to eliminate manual publisher follow-ups for integration and performance issues. Engineered a specialized Vertica connector to execute complex analytical joins across high-volume production tables, identifying publishers based on real-time performance thresholds. The system features a localized outreach logic that dynamically maps publisher legal entities and regional domains to specific multi-language email templates. To ensure operational visibility, I implemented a synchronization layer that pushes outreach telemetry back to internal databases for audit trails and performance tracking, all secured via JWT-based authentication.",
      tags: ["React", "Node.js", "Express JS", "Vertica", "Scheduled Jobs", "JWT", "TailWind CSS", "Redux"],
      palette: ["oklch(0.78 0.09 40)", "oklch(0.88 0.06 75)"],
      visibility: "private",
      repo: "https://github.com/sukhman23902/Email_automator",
    },
    {
      title: "Nodit Social Platform",
      org: "System Design Project",
      blurb: "Engineered a scalable full-stack social platform designed to handle high-frequency user interactions and real-time data synchronization. Developed a robust backend using Node.js and Express, featuring a secure RBAC (Role-Based Access Control) system and JWT-based authentication. Designed a flexible NoSQL schema in MongoDB to support complex social graphs, including friend relationships, community memberships, and nested engagement metrics (likes, comments, and shares). Focused on optimizing database write-performance for real-time post-delivery and interactive social feeds, while utilizing Tailwind CSS to build a responsive, high-performance UI.",
      tags: ["React", "Node.js", "MongoDB", "Express JS", "TailWind CSS", "Redux", "JWT", "Mongoose", "NoSQL Database", "REST API Design"],
      palette: ["oklch(0.83 0.07 230)", "oklch(0.85 0.05 200)"],
      visibility: "public",
      repo: "https://github.com/sukhman23902/Nodit",
    },
    {
      title: "QuickCart: Enterprise E-commerce API",
      org: "System Design Project",
      blurb: "Developed a secure, production-ready RESTful API for a multi-tenant e-commerce platform. Engineered a robust security layer using Spring Security and JWT for Role-Based Access Control (RBAC). Designed a complex database schema featuring automated stock validation, historical price tracking for orders, and a sophisticated 'Guest-to-User' cart merging algorithm. Built with a focus on data integrity, utilizing transactional logic to ensure consistent inventory management during high-traffic checkout events.",
      tags: ["Spring Boot", "Spring Security", "JWT", "MySQL", "Hibernate/JPA", "REST API Design", "Inventory Management"],
      palette: ["oklch(0.65 0.15 210)", "oklch(0.75 0.10 180)"],
      visibility: "public",
      repo: "https://github.com/sukhman23902/QuickCart_Backend",
    }
  ],
  skillGroups: [
    {
      label: "Backend & Systems Architecture",
      skills: ["Java", "Spring Boot", "Node.js", "Distributed Systems", "System Design", "Microservices", "Scalable Systems", "Multi-tier Caching", "REST & GraphQL APIs", "Concurrency & Multithreading", "Spring Security", "Hibernate/JPA", "Transaction Management"]
    },
    {
      label: "AI & Platform Engineering",
      skills: ["Model Context Protocol (MCP)", "LLM Tool-Calling", "Agentic Workflows", "Prompt Engineering", "A/B Testing Infrastructure", "Automated Error Resolution", "JSON-RPC", "Claude/Cursor Integration"]
    },
    {
      label: "Data & Analytical Engineering",
      skills: ["Kafka", "HDFS", "Vertica", "Spark", "MySQL", "MongoDB", "NoSQL Schema Design", "Complex SQL Joins", "Analytical Query Optimization"]
    },
    {
      label: "Product & Technical Solutions",
      skills: ["Technical Consulting", "SDK Integration (Android/iOS/Web)", "Requirement Translation (TDD)", "Revenue Optimization", "SLA Management", "Feature Flag Management", "Product Implementation", "Client Satisfaction", "Secure API Design and RBAC"]
    },
    {
      label: "Cloud, DevOps & Observability",
      skills: ["Kubernetes", "Docker", "Prometheus", "Grafana", "PagerDuty (On-Call)", "Jenkins", "CI/CD", "Root Cause Analysis", "Agile/Jira"]
    },
  ],
};

export default DATA;