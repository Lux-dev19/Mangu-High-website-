export type TimelineMilestone = {
  year: string;
  title: string;
  description: string;
  icon: string;
};

export type ValueItem = {
  icon: string;
  title: string;
  description: string;
};

export const schoolHistory = {
  intro:
    "Mangu High School was founded in 1925 at Kabaa by Fr. Michael Witte, and has grown into one of Kenya's most respected national secondary schools. For a century it has combined rigorous scholarship with discipline, faith and leadership formation.",
  paragraphs: [
    "From its earliest years the school set a high bar: a demanding academic programme, a strong sense of order, and a conviction that character matters as much as examination results.",
    "Generations of alumni have carried the Mangu name into government, medicine, science, engineering, business, education and public service — a living testament to the school's motto, Jishinde Ushinde.",
    "Today Mangu remains a national school of choice, blending deep tradition with modern facilities, technology and a forward-looking approach to learning.",
  ],
  timelineNote:
    "The milestones below reflect the school's documented heritage. Specific dates can be refined by the school's archives team.",
};

export const milestones: TimelineMilestone[] = [
  {
    year: "1925",
    title: "Foundation at Kabaa",
    description:
      "Fr. Michael Witte establishes the school at Kabaa, laying the foundation of what would become a national institution.",
    icon: "ri-ancient-gate-line",
  },
  {
    year: "1930s",
    title: "A permanent home at Mangu",
    description:
      "The school settles on its present Mangu site, beginning the long tradition of boarding life, discipline and scholarship.",
    icon: "ri-building-2-line",
  },
  {
    year: "1963",
    title: "A national institution",
    description:
      "In the independence era, Mangu grows into a leading national school attracting students from across Kenya.",
    icon: "ri-flag-2-line",
  },
  {
    year: "1980s–1990s",
    title: "Academic excellence",
    description:
      "A period of strong academic results, expanding departments and a deepening culture of competition and achievement.",
    icon: "ri-award-line",
  },
  {
    year: "2000s",
    title: "Networks of leadership",
    description:
      "Alumni rise to prominence across professions, strengthening the school's reputation as a cradle of leaders.",
    icon: "ri-team-line",
  },
  {
    year: "Today",
    title: "Modern Mangu",
    description:
      "Modern laboratories, ICT and innovation spaces build on a century of tradition — preparing learners for a changing world.",
    icon: "ri-rocket-2-line",
  },
];

export const aboutValues: ValueItem[] = [
  {
    icon: "ri-award-line",
    title: "Academic Excellence",
    description:
      "We pursue scholarship with rigour and curiosity, setting high expectations and supporting every learner to reach them.",
  },
  {
    icon: "ri-shield-star-line",
    title: "Discipline & Integrity",
    description:
      "Order, self-control and honesty are the backbone of daily life and of every Mangu gentleman.",
  },
  {
    icon: "ri-team-line",
    title: "Leadership",
    description:
      "Students are entrusted with genuine responsibility and grow into confident, service-minded leaders.",
  },
  {
    icon: "ri-book-open-line",
    title: "Christian Values",
    description:
      "Faith, compassion and respect for human dignity guide our community and shape character.",
  },
  {
    icon: "ri-lightbulb-flash-line",
    title: "Innovation",
    description:
      "From aviation inspiration to ICT and STEM, we prepare learners for a fast-changing world.",
  },
  {
    icon: "ri-flag-2-line",
    title: "National Pride",
    description:
      "For a century, Mangu has served Kenya, producing leaders, scholars and citizens of impact.",
  },
];

export const visionMission = {
  vision:
    "To be a leading national school that develops well-rounded, disciplined and academically excellent young men prepared to serve Kenya and the world.",
  mission:
    "To provide a world-class education that prepares our students to branch out into the real world and serve anyone and everyone in any way they can.",
  philosophy:
    "We believe that excellence is built through discipline, effort and community — and that education must shape character as much as it sharpens the mind.",
};