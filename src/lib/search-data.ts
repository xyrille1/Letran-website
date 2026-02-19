// Searchable content data for the website

export type SearchResult = {
  id: string;
  title: string;
  description: string;
  category:
    | "program"
    | "admissions"
    | "page"
    | "contact"
    | "requirement"
    | "service";
  href: string;
  keywords: string[];
};

export const searchData: SearchResult[] = [
  // Programs
  {
    id: "higher-education",
    title: "Higher Education",
    description:
      "Officially transitioned to industry-leading energy and tech modules through strategic global partnerships.",
    category: "program",
    href: "/programs#program-higher-ed",
    keywords: [
      "college",
      "university",
      "bachelor",
      "degree",
      "course",
      "tertiary",
      "undergraduate",
    ],
  },
  {
    id: "senior-high",
    title: "Senior High School",
    description:
      "A historic move towards sustainability, bridging the gap with specialized professional readiness strands.",
    category: "program",
    href: "/programs#program-shs",
    keywords: [
      "shs",
      "grade 11",
      "grade 12",
      "strand",
      "stem",
      "abm",
      "humss",
      "tvl",
      "academic track",
    ],
  },
  {
    id: "basic-education",
    title: "Basic Education",
    description:
      "Holistic formation rooted in fundamental wisdom and the Arriba spirit for the next generation of Knights.",
    category: "program",
    href: "/programs#program-basic-ed",
    keywords: [
      "elementary",
      "grade school",
      "preschool",
      "kindergarten",
      "junior high",
      "jhs",
      "primary",
    ],
  },

  // Admissions
  {
    id: "admissions-main",
    title: "Admissions",
    description:
      "Begin your journey toward becoming a Letranite. Our admissions process is designed to identify and nurture the next generation.",
    category: "admissions",
    href: "/admissions",
    keywords: [
      "enroll",
      "enrollment",
      "apply",
      "application",
      "register",
      "registration",
      "new student",
    ],
  },
  {
    id: "college-admissions",
    title: "College Admissions",
    description:
      "College enrollment procedures for freshmen, transferees, and unit earners. Face-to-face and online options available.",
    category: "admissions",
    href: "/admissions#college",
    keywords: [
      "college enrollment",
      "tertiary",
      "university application",
      "freshman",
      "transferee",
    ],
  },
  {
    id: "basic-ed-admissions",
    title: "Basic Education Admissions",
    description:
      "Enrollment procedures for preschool, elementary, junior high school, and senior high school students.",
    category: "admissions",
    href: "/admissions#basic-ed",
    keywords: [
      "elementary enrollment",
      "jhs enrollment",
      "shs enrollment",
      "preschool enrollment",
    ],
  },

  // Requirements
  {
    id: "freshmen-requirements",
    title: "Freshmen Requirements",
    description:
      "Form 138, Certificate of Good Moral Character, Form 137, 2x2 Pictures, PSA Birth Certificate, Registration Form.",
    category: "requirement",
    href: "/admissions#college",
    keywords: [
      "documents",
      "papers",
      "form 138",
      "form 137",
      "report card",
      "birth certificate",
      "requirements",
    ],
  },
  {
    id: "transferee-requirements",
    title: "Transferee Requirements",
    description:
      "Transfer Credential (Honorable Dismissal), Certificate of Good Moral Character, Certified True Copy of Grades, OTR.",
    category: "requirement",
    href: "/admissions#college",
    keywords: [
      "transfer",
      "honorable dismissal",
      "otr",
      "transcript",
      "transferee documents",
    ],
  },
  {
    id: "basic-ed-requirements",
    title: "Basic Education Requirements",
    description:
      "ID pictures, PSA Birth Certificate, Baptismal Certificate, Form 138/Report Card, Good Moral/Recommendation Letter.",
    category: "requirement",
    href: "/admissions#basic-ed",
    keywords: [
      "elementary requirements",
      "jhs requirements",
      "preschool requirements",
    ],
  },

  // Pages
  {
    id: "programs-page",
    title: "Academic Programs",
    description:
      "Explore Letran's academic offerings including Higher Education, Senior High, and Basic Education programs.",
    category: "page",
    href: "/programs",
    keywords: ["courses", "curriculum", "academic", "offerings", "education"],
  },
  {
    id: "archive-page",
    title: "Archive",
    description:
      "Browse historical documents, announcements, and records from Letran Manaoag.",
    category: "page",
    href: "/archive",
    keywords: [
      "history",
      "documents",
      "records",
      "announcements",
      "news",
      "events",
    ],
  },
  {
    id: "canvas-lms",
    title: "Canvas LMS",
    description:
      "Access the Learning Management System for online classes, coursework, and academic resources.",
    category: "service",
    href: "https://dpp.instructure.com/login/canvas",
    keywords: [
      "lms",
      "online class",
      "e-learning",
      "portal",
      "student portal",
      "canvas",
      "instructure",
    ],
  },

  // Contact & Services
  {
    id: "contact-registrar",
    title: "Registrar's Office",
    description:
      "For enrollment, academic records, and document requests. Contact for registration inquiries.",
    category: "contact",
    href: "/admissions",
    keywords: [
      "registrar",
      "records",
      "enrollment",
      "transcript",
      "documents",
      "registration",
    ],
  },
  {
    id: "contact-main",
    title: "Contact Information",
    description:
      "Phone: (075) 529-0121, Email: letranite@gmail.com. Reach out for inquiries and support.",
    category: "contact",
    href: "/admissions",
    keywords: [
      "phone",
      "email",
      "contact",
      "inquire",
      "support",
      "help",
      "call",
    ],
  },
  {
    id: "scholarship",
    title: "Scholarships & Financial Aid",
    description:
      "TES scholarship application and other financial assistance programs for qualified students.",
    category: "service",
    href: "/admissions",
    keywords: [
      "tes",
      "scholarship",
      "financial aid",
      "tuition",
      "discount",
      "assistance",
      "grant",
    ],
  },

  // Campus Life
  {
    id: "campus-tour",
    title: "Campus Tour",
    description:
      "Experience the Letran Manaoag campus. Schedule a visit to explore our facilities and community.",
    category: "page",
    href: "/programs#campus-tour",
    keywords: ["campus", "tour", "visit", "facilities", "building", "school"],
  },
];

// Search function that matches query against data
export function searchContent(query: string): SearchResult[] {
  if (!query.trim()) return [];

  const normalizedQuery = query.toLowerCase().trim();
  const queryWords = normalizedQuery.split(/\s+/);

  const results = searchData.map((item) => {
    let score = 0;

    // Check title match (highest weight)
    if (item.title.toLowerCase().includes(normalizedQuery)) {
      score += 100;
    }
    queryWords.forEach((word) => {
      if (item.title.toLowerCase().includes(word)) {
        score += 30;
      }
    });

    // Check description match
    if (item.description.toLowerCase().includes(normalizedQuery)) {
      score += 50;
    }
    queryWords.forEach((word) => {
      if (item.description.toLowerCase().includes(word)) {
        score += 15;
      }
    });

    // Check keywords match
    item.keywords.forEach((keyword) => {
      if (keyword.includes(normalizedQuery)) {
        score += 40;
      }
      queryWords.forEach((word) => {
        if (keyword.includes(word)) {
          score += 20;
        }
      });
    });

    // Check category match
    if (item.category.toLowerCase().includes(normalizedQuery)) {
      score += 25;
    }

    return { ...item, score };
  });

  // Filter out zero scores and sort by score descending
  return results
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8); // Return top 8 results
}
