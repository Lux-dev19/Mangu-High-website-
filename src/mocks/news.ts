export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "image"; image: string; caption: string };

export type NewsArticle = {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  author: string;
  authorRole: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
  body: ArticleBlock[];
};

export type SchoolEvent = {
  id: string;
  title: string;
  day: string;
  month: string;
  date: string;
  time: string;
  venue: string;
  category: string;
  description: string;
};

/**
 * News & events drawn from Mangu High School's own reporting and coverage in the
 * Kenyan press (Kenya Airways aircraft delivery, the national youth chess
 * championship hosted on campus, Grade 10 placement demand, and KCSE coverage).
 * Photographs are the school's own images served from its media library.
 */
export const newsArticles: NewsArticle[] = [
  {
    id: "mangu-welcomes-aircraft",
    title: "Mang'u Welcomes New Plane as Kenya Airways Inspires Future Aviators",
    date: "12 January 2025",
    category: "School News",
    excerpt:
      "After years of planning and months of preparation, Kenya Airways relocated a decommissioned Boeing 737-700 to the school grounds to inspire students to pursue careers in aviation.",
    image:
      "https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/uploads/1533907782086A3313%5B1%5D.jpg",
    author: "Mangu High Communications",
    authorRole: "School Newsroom",
    readTime: "5 min read",
    tags: ["Aviation", "STEM", "Partnership", "Milestones"],
    featured: true,
    body: [
      {
        type: "paragraph",
        text: "The grounds of Mangu High School have witnessed many landmarks since 1925, but rarely a morning quite like this. Kenya Airways relocated a decommissioned Boeing 737-700 to the school, where it now stands as a living classroom for students with ambitions in aviation and engineering.",
      },
      {
        type: "paragraph",
        text: "After years of planning and months of preparation, the aircraft was delivered to the campus over a weekend and unveiled to students, staff and invited guests. The initiative — shared by the airline under the banner #WingsOfInnovation — is intended to spark young interest in aviation careers and to connect classroom science with the world beyond the school gate.",
      },
      {
        type: "image",
        image:
          "https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/uploads/1533886337JPG_7095%281%29.JPG",
        caption:
          "Learners gather around the aircraft now stationed at Mangu High School as a teaching resource.",
      },
      {
        type: "heading",
        text: "A living classroom for STEM",
      },
      {
        type: "paragraph",
        text: "For a national school with a proud tradition in the sciences, the aircraft offers a tangible bridge between the physics, mathematics and design studied in the laboratory and the careers that await beyond secondary school. Students will use the airframe to explore aerodynamics, structures and the practical engineering behind modern flight.",
      },
      {
        type: "quote",
        text: "When a young person can stand beside something this impressive, aspiration stops being an abstract idea. It becomes something they can touch, study and pursue.",
        attribution: "Mangu High School Administration",
      },
      {
        type: "heading",
        text: "A launchpad for ambition",
      },
      {
        type: "paragraph",
        text: "The school extends its appreciation to Kenya Airways, the alumni and the technical teams whose support made the delivery possible. As Mangu continues to invest in innovation and STEM, the aircraft stands as a reminder that the school's oldest tradition — building leaders of character — is renewed with every generation.",
      },
    ],
  },
  {
    id: "kcse-2025-results",
    title: "Mang'u Among National Schools Posting Strong 2025 KCSE Results",
    date: "10 January 2026",
    category: "Academics",
    excerpt:
      "Mangu High School featured among the country's leading national schools once again as the 2025 Kenya Certificate of Secondary Education results were released.",
    image:
      "https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/mangu-high-school-1637054156.webp",
    author: "Academic Affairs",
    authorRole: "School Newsroom",
    readTime: "4 min read",
    tags: ["KCSE", "Academics", "Examinations", "Achievement"],
    body: [
      {
        type: "paragraph",
        text: "Mangu High School has once again featured among Kenya's leading national schools following the release of the 2025 Kenya Certificate of Secondary Education (KCSE) results. The performance continues a long tradition of academic achievement that stretches back to the school's founding in 1925.",
      },
      {
        type: "paragraph",
        text: "Nationally, the 2025 results saw strong performances spread across the country's top national schools. Mangu's candidates earned university-entry grades across the sciences, humanities and technical subjects, reflecting the breadth and depth of the school's academic programme.",
      },
      {
        type: "heading",
        text: "A year of disciplined preparation",
      },
      {
        type: "paragraph",
        text: "Behind every result is a programme of structured revision, continuous assessment and mentoring that runs throughout the candidates' final years. Teachers, boarding staff and parents work together to keep learners focused, healthy and confident through the pressure of national examinations.",
      },
      {
        type: "quote",
        text: "These results belong to the candidates first, and to every teacher and parent who stood behind them. We celebrate the class of 2025 and wish them well as they take their next step.",
        attribution: "Academic Affairs Department",
      },
      {
        type: "paragraph",
        text: "The school congratulates the candidates, their families and the entire teaching staff. Mangu High School remains committed to academic excellence as the foundation of a rounded, character-forming education.",
      },
    ],
  },
  {
    id: "grade-10-demand",
    title: "Mang'u Among Kenya's Most Sought-After Schools as Learners Chase Form One Places",
    date: "08 January 2026",
    category: "Academics",
    excerpt:
      "Demand for places at Kenya's top national schools soared, with Mangu High among the C1 schools that drew overwhelming interest from learners across the country.",
    image:
      "https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/uploads/1507883433mangu_gate.jpg",
    author: "Admissions Office",
    authorRole: "School Newsroom",
    readTime: "4 min read",
    tags: ["Admissions", "Placement", "National Schools", "Demand"],
    body: [
      {
        type: "paragraph",
        text: "Mangu High School has again ranked among the most sought-after national schools in the country, as junior secondary learners and their families competed for a limited number of places at Kenya's elite institutions during the latest placement exercise.",
      },
      {
        type: "paragraph",
        text: "Reports indicated that tens of thousands of learners were chasing a comparatively small number of slots at top national schools, with Mangu High named alongside Alliance High School and The Kenya High School among the C1 institutions drawing overwhelming demand.",
      },
      {
        type: "heading",
        text: "Why families choose Mangu",
      },
      {
        type: "paragraph",
        text: "The sustained demand reflects the school's reputation for academic rigour, disciplined boarding life and a co-curricular programme that develops the whole person. For a century, Mangu has produced leaders, scholars and citizens who go on to shape national life.",
      },
      {
        type: "quote",
        text: "Every family that chooses Mangu is placing real trust in us. Our duty is to give every learner the structure, support and opportunity to thrive.",
        attribution: "Admissions Office",
      },
      {
        type: "paragraph",
        text: "The school welcomes the newest members of the Mangu family and thanks parents and guardians for their confidence. Full joining instructions and reporting dates are shared with families directly each placement cycle.",
      },
    ],
  },
  {
    id: "national-chess-championship",
    title: "Mang'u Hosts the Kenya National Youth and Cadet Chess Championship",
    date: "22 August 2025",
    category: "Achievement",
    excerpt:
      "Thousands of young players from across the country converged on Mangu High School for the Kenya National Youth and Cadet Chess Championship — one of the largest chess events ever staged in Kenya.",
    image:
      "https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/uploads/1533908748086A3371%5B1%5D.jpg",
    author: "Co-Curricular Office",
    authorRole: "School Newsroom",
    readTime: "4 min read",
    tags: ["Chess", "National Event", "Co-Curricular", "Hosting"],
    body: [
      {
        type: "paragraph",
        text: "Mangu High School hosted the Kenya National Youth and Cadet Chess Championship, welcoming thousands of young players and their coaches to the campus in Kiambu County. Wider coverage of the event reported that more than 8,000 chess players were competing across the age categories — making it one of the largest gatherings of its kind in the country.",
      },
      {
        type: "paragraph",
        text: "Hosting a national championship is a significant undertaking, and it was only possible through the coordinated effort of teachers, staff, student volunteers and the wider chess community. The event placed Mangu at the centre of the country's thriving youth chess scene.",
      },
      {
        type: "heading",
        text: "Championing the game of the mind",
      },
      {
        type: "paragraph",
        text: "Chess has long had a home at Mangu through a dedicated and competitive school club. The championship gave the school's own players the rare chance to test themselves against the best young talent in Kenya, on home boards.",
      },
      {
        type: "quote",
        text: "To host the nation's young players and to see our own learners compete at that level is an honour. Chess teaches patience, foresight and grace — qualities we prize here.",
        attribution: "Co-Curricular Office",
      },
      {
        type: "paragraph",
        text: "The school congratulates all participants and thanks the organisers and volunteers who made the event possible. Mangu High School looks forward to continuing its support for chess and the many other disciplines in its co-curricular programme.",
      },
    ],
  },
  {
    id: "presidents-award-achievers",
    title: "Mang'u Students Excel in the President's Award Scheme",
    date: "09 May 2025",
    category: "Achievement",
    excerpt:
      "Mangu High School continues its proud association with the President's Award Scheme, with students gaining recognition for service, skills and adventurous journeys.",
    image:
      "https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/uploads/1533885900086A3293%5B1%5D.jpg",
    author: "Co-Curricular Office",
    authorRole: "School Newsroom",
    readTime: "4 min read",
    tags: ["President's Award", "Service", "Character", "Achievement"],
    body: [
      {
        type: "paragraph",
        text: "Mangu High School's long-standing connection with the President's Award Scheme continues to produce young people of service and character. Students at the school work through the scheme's demanding programme of service, skills development, physical recreation and adventurous journeys.",
      },
      {
        type: "paragraph",
        text: "The scheme is deliberately gradual. Candidates commit over an extended period, documenting their progress and demonstrating genuine personal growth before reaching the higher award levels. It rewards persistence every bit as much as talent.",
      },
      {
        type: "heading",
        text: "Character forged through service",
      },
      {
        type: "paragraph",
        text: "Many participants choose to direct their service towards community projects — supporting nearby schools, environmental initiatives and charitable causes. The accompanying expeditions build resilience and teach the value of teamwork far from the comfort of the classroom.",
      },
      {
        type: "quote",
        text: "The most valuable achievements are earned slowly and often quietly, through service to others. That is precisely what this scheme teaches.",
        attribution: "Co-Curricular Office",
      },
      {
        type: "paragraph",
        text: "The school congratulates participants and thanks the staff coordinators who guide them through each stage. Mangu High School remains proud to be a school with an established tradition in the President's Award.",
      },
    ],
  },
  {
    id: "clean-energy-schools",
    title: "Clean Energy for Schools: Mangu High Leads by Example",
    date: "15 March 2025",
    category: "Community",
    excerpt:
      "Mangu High School was featured as a model of clean energy in schools, as part of a wider push to bring sustainable power solutions to Kenyan institutions.",
    image:
      "https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/mangu-high-school-1637057788.webp",
    author: "School Administration",
    authorRole: "School Newsroom",
    readTime: "4 min read",
    tags: ["Clean Energy", "Sustainability", "Infrastructure", "Partnership"],
    body: [
      {
        type: "paragraph",
        text: "Mangu High School was showcased as a leading example in the drive to bring clean, reliable energy to Kenyan schools. The feature highlighted how sustainable power solutions can support better learning environments and lower long-term running costs for institutions.",
      },
      {
        type: "paragraph",
        text: "For a boarding school the size of Mangu, dependable energy is essential to daily life — from lighting in the dormitories and laboratories to the kitchens and classrooms. Cleaner, more efficient systems support both the environment and the school's ability to invest in its learners.",
      },
      {
        type: "heading",
        text: "Sustainability as part of the curriculum",
      },
      {
        type: "paragraph",
        text: "The interest in clean energy connects directly to the school's science and environmental clubs, where students explore conservation, renewable energy and responsible stewardship of resources. For Mangu's learners, sustainability is not an abstract topic but part of the campus around them.",
      },
      {
        type: "quote",
        text: "Caring for our environment and caring for our students go hand in hand. What we build today shapes the school the next generation inherits.",
        attribution: "School Administration",
      },
      {
        type: "paragraph",
        text: "The school thanks the partners involved in the initiative and remains committed to improving the facilities that support teaching, learning and boarding life at Mangu.",
      },
    ],
  },
];

export const upcomingEvents: SchoolEvent[] = [
  {
    id: "founders-day",
    title: "Founders' Day & Prize Giving",
    day: "14",
    month: "Oct",
    date: "14 October 2026",
    time: "9:00 am – 2:00 pm",
    venue: "Main Assembly Grounds",
    category: "Ceremony",
    description:
      "A celebration honouring the vision of our founders and recognising outstanding academic and co-curricular achievement across the year.",
  },
  {
    id: "inter-house-athletics",
    title: "Inter-House Athletics Championship",
    day: "20",
    month: "Oct",
    date: "20 October 2026",
    time: "8:00 am – 4:00 pm",
    venue: "School Sports Field",
    category: "Sports",
    description:
      "The houses compete across track and field events in one of the most spirited days of the school calendar.",
  },
  {
    id: "music-drama-showcase",
    title: "Music & Drama Festival Showcase",
    day: "05",
    month: "Nov",
    date: "5 November 2026",
    time: "5:00 pm – 8:00 pm",
    venue: "School Theatre",
    category: "Arts",
    description:
      "An evening of choral music, drama and poetry as our performers prepare for the national festival circuit.",
  },
  {
    id: "science-fair",
    title: "National Science & Engineering Fair",
    day: "08",
    month: "Nov",
    date: "8 November 2026",
    time: "9:00 am – 3:00 pm",
    venue: "Science Laboratories",
    category: "Academics",
    description:
      "Student research projects in physics, chemistry, biology and engineering are exhibited and judged by visiting academics.",
  },
  {
    id: "parents-orientation",
    title: "Form One Parents' Orientation",
    day: "28",
    month: "Jan",
    date: "28 January 2027",
    time: "10:00 am – 1:00 pm",
    venue: "School Hall",
    category: "Parents",
    description:
      "An introduction for new families to our academic expectations, boarding life, pastoral care and communication channels.",
  },
  {
    id: "careers-expo",
    title: "Careers & University Expo",
    day: "15",
    month: "Feb",
    date: "15 February 2027",
    time: "9:00 am – 4:00 pm",
    venue: "School Hall & Grounds",
    category: "Careers",
    description:
      "Universities, colleges and industry partners meet our learners to guide subject choices and future pathways.",
  },
];

export const newsCategories = ["All", "School News", "Academics", "Achievement", "Community", "Sports", "Arts & Culture"];