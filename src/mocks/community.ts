export type CommunityMember = {
  id: string;
  name: string;
  position: string;
  department: string;
  category: "Administration" | "Teaching Staff";
  bio: string;
  qualifications: string;
  responsibilities: string;
};

export type StudentLeader = {
  role: string;
  scope: string;
  icon: string;
  description: string;
};

/**
 * NOTE FOR THE SCHOOL: these profiles are realistic placeholders prepared for layout purposes.
 * Replace names, biographies and qualifications with verified staff information before publishing.
 * Portraits are intentionally left out — profiles display elegant monogram initials until the
 * school supplies real, verified photographs.
 */
export const administration: CommunityMember[] = [
  {
    id: "principal",
    name: "Mr. Benard Kingah",
    position: "Principal",
    department: "School Administration",
    category: "Administration",
    bio: "Leads the school's academic vision, pastoral care and community life, continuing Mangu's century-long tradition of excellence in character, leadership and scholarship.",
    qualifications: "B.Ed (Science), M.Ed Educational Leadership",
    responsibilities: "Overall institutional leadership, strategic direction and school governance",
  },
  {
    id: "deputy-admin",
    name: "Mr. Kamau",
    position: "Deputy Principal — Administration",
    department: "School Administration",
    category: "Administration",
    bio: "Oversees discipline, facilities, procurement and the day-to-day operations that keep the school running smoothly.",
    qualifications: "B.Ed (Humanities), Diploma in Education Management",
    responsibilities: "Discipline, facilities, operations and administrative services",
  },
  {
    id: "deputy-academics",
    name: "Mr. Muna",
    position: "Deputy Principal — Academics",
    department: "Academic Office",
    category: "Administration",
    bio: "Directs curriculum delivery, teaching standards and academic mentoring across all departments and year groups.",
    qualifications: "B.Ed (Languages), M.A. Curriculum Studies",
    responsibilities: "Curriculum, teaching standards, examinations and academic performance",
  },
  {
    id: "deputy-boarding",
    name: "Mr. Harrison Thairu",
    position: "Deputy Principal — Boarding",
    department: "Boarding & Pastoral Care",
    category: "Administration",
    bio: "Leads the boarding houses and pastoral care teams, ensuring every student is safe, settled and supported in residence.",
    qualifications: "B.Ed (Sciences), Certificate in Pastoral Care",
    responsibilities: "Boarding houses, student welfare and pastoral care",
  },
  {
    id: "senior-teacher-academics",
    name: "Mr. Peter Gitau",
    position: "Senior Teacher — Academics",
    department: "Academic Office",
    category: "Administration",
    bio: "Supports the academic office in timetabling, internal assessment and revision programmes across the school.",
    qualifications: "B.Ed (Mathematics & Physics)",
    responsibilities: "Timetabling, internal assessment and revision programmes",
  },
  {
    id: "dean-of-studies",
    name: "Madam Gladys Ondoro",
    position: "Dean of Studies",
    department: "Academic Office",
    category: "Administration",
    bio: "Coordinates subject selection, examination preparation and study programmes, guiding students toward their best possible results.",
    qualifications: "B.Ed (Sciences), M.Ed Curriculum & Instruction",
    responsibilities: "Subject selection, examinations and study programmes",
  },
  {
    id: "chaplain",
    name: "Father Daniel Karioki",
    position: "School Chaplain",
    department: "Spiritual & Pastoral Life",
    category: "Administration",
    bio: "Guides the spiritual life of the school through chapel services, counselling and community service programmes.",
    qualifications: "B.Div, Diploma in Counselling Psychology",
    responsibilities: "Chapel, counselling, spiritual formation and outreach",
  },
];

export const teachingStaff: CommunityMember[] = [
  {
    id: "t-mathematics",
    name: "Mr. David Njoroge",
    position: "Head of Department",
    department: "Mathematics",
    category: "Teaching Staff",
    bio: "Leads the mathematics department and coaches the school's olympiad team, known for turning difficult problems into clear thinking.",
    qualifications: "B.Ed (Mathematics & Physics)",
    responsibilities: "Mathematics, further mathematics and competition training",
  },
  {
    id: "t-english",
    name: "Ms. Faith Achieng",
    position: "Head of Department",
    department: "Languages & Literature",
    category: "Teaching Staff",
    bio: "Drives the school's debate and writing culture, believing every student can learn to argue clearly and write beautifully.",
    qualifications: "B.Ed (English & Literature)",
    responsibilities: "English, literature and debate coaching",
  },
  {
    id: "t-kiswahili",
    name: "Mwalimu Halima Yusuf",
    position: "Senior Teacher",
    department: "Languages & Literature",
    category: "Teaching Staff",
    bio: "A champion of Kiswahili language and culture, leading drama and poetry performance across the school.",
    qualifications: "B.Ed (Kiswahili & History)",
    responsibilities: "Kiswahili, drama and cultural activities",
  },
  {
    id: "t-biology",
    name: "Dr. Michael Wekesa",
    position: "Head of Department",
    department: "Biological Sciences",
    category: "Teaching Staff",
    bio: "Leads biology and the school's medical club, guiding students toward careers in medicine and the life sciences.",
    qualifications: "B.Sc Biology, PGDE, Ph.D Ecology",
    responsibilities: "Biology, field studies and medical club",
  },
  {
    id: "t-chemistry",
    name: "Mrs. Esther Chebet",
    position: "Senior Teacher",
    department: "Physical Sciences",
    category: "Teaching Staff",
    bio: "Chemistry specialist with a gift for making abstract reactions concrete, visible and exciting in the laboratory.",
    qualifications: "B.Ed (Chemistry & Biology)",
    responsibilities: "Chemistry, laboratory coordination and science fair",
  },
  {
    id: "t-physics",
    name: "Mr. Brian Omondi",
    position: "Senior Teacher",
    department: "Physical Sciences",
    category: "Teaching Staff",
    bio: "Physics teacher and robotics mentor who connects classroom theory to engineering projects students can build.",
    qualifications: "B.Ed (Physics & Mathematics)",
    responsibilities: "Physics, robotics and engineering challenges",
  },
  {
    id: "t-history",
    name: "Mr. Charles Mutua",
    position: "Head of Department",
    department: "Humanities & Social Studies",
    category: "Teaching Staff",
    bio: "History and government teacher who brings Kenya's story to life and mentors the Model United Nations team.",
    qualifications: "B.Ed (History & Government)",
    responsibilities: "History, government and MUN coordination",
  },
  {
    id: "t-geography",
    name: "Ms. Lucy Wambui",
    position: "Senior Teacher",
    department: "Humanities & Social Studies",
    category: "Teaching Staff",
    bio: "Geography teacher and field-trip coordinator, taking learning beyond the classroom into Kenya's landscapes.",
    qualifications: "B.Ed (Geography & CRE)",
    responsibilities: "Geography, field excursions and environmental club",
  },
  {
    id: "t-cre",
    name: "Mr. Isaac Barasa",
    position: "Head of Department",
    department: "Christian Religious Education",
    category: "Teaching Staff",
    bio: "Leads religious education and the school's service programmes, nurturing faith, ethics and compassion.",
    qualifications: "B.Ed (CRE & Kiswahili)",
    responsibilities: "Christian religious education and outreach",
  },
  {
    id: "t-business",
    name: "Mrs. Janet Kilonzo",
    position: "Head of Department",
    department: "Business & Technical Studies",
    category: "Teaching Staff",
    bio: "Business studies teacher and enterprise club patron, encouraging students to think like founders and problem-solvers.",
    qualifications: "B.Ed (Business Studies), MBA",
    responsibilities: "Business studies, enterprise club and careers guidance",
  },
  {
    id: "t-computer",
    name: "Mr. Kevin Wafula",
    position: "Head of Department",
    department: "Computer Studies & ICT",
    category: "Teaching Staff",
    bio: "Runs the ICT and innovation hub, teaching coding, digital design and robotics to every year group.",
    qualifications: "B.Sc Computer Science, PGDE",
    responsibilities: "Computer studies, ICT integration, coding and robotics",
  },
  {
    id: "t-music",
    name: "Mr. Alex Mwenda",
    position: "Head of Department",
    department: "Creative Arts & Music",
    category: "Teaching Staff",
    bio: "Music director and drama producer whose choirs and troupes carry the Mangu name to national festivals.",
    qualifications: "B.A Music, Diploma in Theatre Arts",
    responsibilities: "Music, choir direction and drama production",
  },
];

export const studentLeaders: StudentLeader[] = [
  {
    role: "School Captain",
    scope: "Whole School",
    icon: "ri-star-line",
    description: "Leads the student body and represents learners before the administration and at official functions.",
  },
  {
    role: "Deputy School Captain",
    scope: "Whole School",
    icon: "ri-award-line",
    description: "Supports the captain and coordinates academic and co-curricular student activities.",
  },
  {
    role: "House Captains",
    scope: "Houses",
    icon: "ri-home-4-line",
    description: "Lead each boarding house in discipline, sports, cleanliness and house spirit.",
  },
  {
    role: "Academic Prefect",
    scope: "Academics",
    icon: "ri-book-open-line",
    description: "Champions study culture, revision groups and academic integrity across the school.",
  },
  {
    role: "Games Captain",
    scope: "Sports",
    icon: "ri-trophy-line",
    description: "Coordinates team sports, inter-house competitions and sporting events.",
  },
  {
    role: "Club & Society Leaders",
    scope: "Clubs",
    icon: "ri-group-line",
    description: "Lead debating, science, media, environment and other societies.",
  },
  {
    role: "Boarding Prefects",
    scope: "Boarding",
    icon: "ri-hospital-line",
    description: "Support order, welfare and pastoral life in the dormitories.",
  },
  {
    role: "Liturgy & Service Leaders",
    scope: "Faith & Service",
    icon: "ri-heart-3-line",
    description: "Guide chapel life, fellowship and community service outreach.",
  },
];

export const communityNote =
  "Profiles shown are representative placeholders prepared for this design. Portraits use monogram initials until the school provides verified photographs. The school can replace names, photographs and biographies with verified information at any time.";