export type Department = {
  slug: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  overview: string;
  subjects: string[];
  facilities: string[];
  activities: string[];
  careers: string[];
  achievement: string;
};

export type AcademicPillar = {
  icon: string;
  title: string;
  description: string;
  subjects: string;
};

export type SubjectGuide = {
  name: string;
  icon: string;
  overview: string;
  topics: string[];
  careers: string;
};

export const academicPillars: AcademicPillar[] = [
  {
    icon: "ri-flask-line",
    title: "Sciences & STEM",
    description:
      "Well-equipped laboratories and a research culture that turns curiosity into experiment, evidence and invention.",
    subjects: "Biology · Chemistry · Physics · Mathematics",
  },
  {
    icon: "ri-earth-line",
    title: "Humanities & Languages",
    description:
      "History, geography and literature develop the critical thinking, expression and civic awareness of every learner.",
    subjects: "History · Geography · English · Kiswahili",
  },
  {
    icon: "ri-code-s-slash-line",
    title: "ICT & Computer Studies",
    description:
      "Coding, digital literacy and innovation projects prepare students for a technology-driven future.",
    subjects: "Computer Studies · ICT · Robotics",
  },
  {
    icon: "ri-line-chart-line",
    title: "Business & Technical",
    description:
      "Practical, career-facing subjects build enterprise skills and hands-on competence for the world of work.",
    subjects: "Business Studies · Agriculture · Technical Drawing",
  },
];

export const departments: Department[] = [
  {
    slug: "mathematics",
    name: "Mathematics",
    icon: "ri-function-line",
    tagline: "The language of logic and problem solving",
    description:
      "Mathematics anchors the entire curriculum at Mangu. The department builds fluency, reasoning and confidence through rigorous problem solving, competition work and peer-led study groups.",
    overview:
      "Mathematics at Mangu is more than calculation — it is the discipline of clear reasoning that underpins every other science. Across the four years of secondary school, students build fluency in algebra, geometry, trigonometry, calculus and statistics, with a classroom culture that insists on showing the working and understanding the why behind every method. Strong performers are stretched through Further Mathematics and olympiad training, while every learner is coached to attack unfamiliar problems with patience and confidence.",
    subjects: ["Pure Mathematics", "Applied Mathematics", "Further Mathematics"],
    facilities: [
      "Dedicated mathematics classrooms",
      "Problem-solving resource library",
      "Past-paper and revision clinics",
    ],
    activities: ["Mathematics olympiad training", "Weekly problem clinics", "Peer tutoring programme"],
    careers: ["Engineering", "Actuarial science", "Data science", "Architecture", "Economics"],
    achievement: "Consistent top-quartile performance in national mathematics contests.",
  },
  {
    slug: "languages",
    name: "Languages & Literature",
    icon: "ri-book-2-line",
    tagline: "Expression, culture and critical reading",
    description:
      "English, Kiswahili and literature give our students the power to think clearly, argue persuasively and appreciate the richness of language and culture.",
    overview:
      "Language is the tool of thought, and at Mangu we treat it as a craft. English and Kiswahili are taught alongside literature, set-book study and formal composition, with a constant emphasis on reading widely, arguing clearly and writing with precision. Public speaking, debate and creative writing run through the life of the department, so students leave able to express complex ideas to any audience — in the classroom, in competitions and far beyond school.",
    subjects: ["English", "Kiswahili", "Literature in English", "Set Book Studies"],
    facilities: [
      "Reading room and class libraries",
      "Public-speaking and debate venue",
      "Writing and journalism resources",
    ],
    activities: ["Debate society", "Public speaking", "Creative writing club"],
    careers: ["Law", "Journalism", "Teaching", "Publishing", "Public relations"],
    achievement: "National debating and essay-writing finalists across multiple years.",
  },
  {
    slug: "biological-sciences",
    name: "Biological Sciences",
    icon: "ri-microscope-line",
    tagline: "Understanding life and living systems",
    description:
      "Through laboratory investigation and fieldwork, students explore living organisms, ecology and the science of health — a foundation for medicine and the life sciences.",
    overview:
      "Biology brings students face to face with life itself — from the structure of a single cell to the balance of an entire ecosystem. Through laboratory investigation, microscopy and guided fieldwork, learners explore genetics, human physiology, plant biology and conservation, connecting what they see down the microscope to the world around them. The department runs a thriving medical club and field-study programme for students drawn toward medicine, health and the life sciences.",
    subjects: ["Biology", "Agriculture (Life Sciences element)"],
    facilities: [
      "Fully equipped biology laboratory",
      "Microscopy and specimen collection",
      "School garden and conservation plots",
    ],
    activities: ["Field ecology studies", "School garden & conservation projects", "Medical club"],
    careers: ["Medicine", "Nursing", "Biotechnology", "Veterinary science", "Environmental science"],
    achievement: "Strong national examination results and science-fair recognition.",
  },
  {
    slug: "physical-sciences",
    name: "Physical Sciences",
    icon: "ri-planet-line",
    tagline: "Matter, energy and the physical world",
    description:
      "Physics and chemistry are taught through hands-on experiment, quantitative analysis and engineering application, preparing students for STEM careers.",
    overview:
      "Physics and chemistry at Mangu are learned the way science is actually done — through hands-on experiment, careful measurement and honest analysis. Students investigate mechanics, electricity, waves, chemical reactions and quantitative analysis, then apply those ideas to engineering challenges and science-congress projects. Practical work sits at the heart of the department, so every learner develops the laboratory skill and analytical confidence that university STEM courses demand.",
    subjects: ["Physics", "Chemistry", "Science Applications"],
    facilities: [
      "Physics laboratory with apparatus kits",
      "Chemistry laboratory with safe fume handling",
      "Science congress project space",
    ],
    activities: ["Physics practical workshops", "Chemistry titration clinics", "Engineering challenges"],
    careers: ["Chemical engineering", "Electrical engineering", "Pharmacy", "Energy", "Research science"],
    achievement: "Regular representation at regional and national science congresses.",
  },
  {
    slug: "humanities",
    name: "Humanities & Social Studies",
    icon: "ri-parentheses-line",
    tagline: "People, place and society",
    description:
      "History, geography and government studies help students understand Kenya and the world, developing informed, responsible citizens.",
    overview:
      "History, geography and government studies help students make sense of the world they are inheriting — how nations are built, how landscapes shape lives and how societies govern themselves. The department pairs classroom inquiry with field excursions, map work and current-affairs discussion, and its Model United Nations team gives learners a taste of diplomacy and international debate. The result is young people who think about place, power and responsibility, not just dates and labels.",
    subjects: ["History & Government", "Geography", "Social Studies"],
    facilities: [
      "Map room and geography resource bank",
      "MUN and current-affairs forum",
      "Field-study equipment",
    ],
    activities: ["Geography field excursions", "Model United Nations", "Current affairs forum"],
    careers: ["Law", "Diplomacy", "Urban planning", "Archaeology", "Civil service"],
    achievement: "Award-winning geography and history research presentations.",
  },
  {
    slug: "religious-education",
    name: "Christian Religious Education",
    icon: "ri-heart-3-line",
    tagline: "Faith, ethics and character",
    description:
      "As a school with deep Christian roots, CRE shapes the moral and spiritual life of our community and supports pastoral care across the campus.",
    overview:
      "As a school with deep Christian roots, CRE shapes the moral and spiritual life of the whole Mangu community. Through the study of scripture, ethics and the history of faith, students are encouraged to think seriously about values, service and character — not only to pass an examination. The department works hand in hand with the chaplaincy to support chapel life, pastoral care and outreach, helping learners grow into principled, compassionate young adults.",
    subjects: ["Christian Religious Education", "Religious Ethics"],
    facilities: [
      "School chapel",
      "Chaplaincy and counselling room",
      "Service programme coordination",
    ],
    activities: ["Chapel services", "Bible study fellowship", "Community service outreach"],
    careers: ["Ministry", "Counselling", "Social work", "Teaching", "Community leadership"],
    achievement: "A long-standing culture of faith-based character formation and service.",
  },
  {
    slug: "business-technical",
    name: "Business & Technical Studies",
    icon: "ri-briefcase-4-line",
    tagline: "Enterprise and practical competence",
    description:
      "Business studies, agriculture and technical subjects give students practical, career-facing skills and an enterprising mindset.",
    overview:
      "Business and technical studies give students something the textbook alone never can — practical, career-facing competence. Learners study commerce, bookkeeping and enterprise, while technical subjects such as technical drawing and building construction build the spatial thinking and hands-on skill that industry values. The department's enterprise club encourages students to think like founders: spotting problems, costing solutions and pitching ideas, often at national trade showcases.",
    subjects: ["Business Studies", "Agriculture", "Technical Drawing", "Building Construction"],
    facilities: [
      "Business studies and accounting classroom",
      "Technical drawing studio",
      "School farm and practical workshops",
    ],
    activities: ["Enterprise club", "Young entrepreneurs forum", "Practical skills workshops"],
    careers: ["Accounting", "Entrepreneurship", "Construction", "Quantity surveying", "Banking"],
    achievement: "Student enterprise projects presented at national trade showcases.",
  },
  {
    slug: "computer-studies",
    name: "Computer Studies & ICT",
    icon: "ri-computer-line",
    tagline: "Digital literacy and innovation",
    description:
      "Our ICT laboratory and innovation hub give every learner hands-on access to computing, coding and digital research.",
    overview:
      "In a world run on software, computer studies at Mangu are both a subject and a passport. Our ICT laboratory and innovation hub give every learner hands-on access to computing, coding and digital research — from spreadsheet modelling and programming fundamentals to robotics and digital design. Students are encouraged not just to use technology but to build with it, and our coding and robotics clubs compete at county and national level.",
    subjects: ["Computer Studies", "ICT Integration", "Coding & Robotics"],
    facilities: [
      "ICT laboratory with networked workstations",
      "Innovation and robotics hub",
      "Coding resources and digital library",
    ],
    activities: ["Coding club", "Robotics & innovation hub", "Digital design projects"],
    careers: ["Software engineering", "Data science", "Cybersecurity", "Digital design", "IT management"],
    achievement: "Coding and innovation clubs competing at county and national level.",
  },
  {
    slug: "creative-arts",
    name: "Creative Arts & Music",
    icon: "ri-music-2-line",
    tagline: "Imagination, expression and performance",
    description:
      "Music, drama and art channel student creativity into performance and craft, and form the heart of our national festival success.",
    overview:
      "Music, drama and art channel student creativity into performance, craft and confidence. The department runs the school choir, the drama festival troupe and an active art studio, giving young people a stage for self-expression and a discipline for mastery — because a festival piece or a finished painting teaches patience and teamwork as surely as any classroom. This is the heart of Mangu's celebrated national festival success.",
    subjects: ["Music", "Art & Design", "Drama & Theatre"],
    facilities: [
      "Music room with instruments",
      "Drama rehearsal space",
      "Art studio and exhibition area",
    ],
    activities: ["School choir", "Drama festival troupe", "Art exhibitions"],
    careers: ["Performing arts", "Graphic design", "Architecture", "Film & media", "Interior design"],
    achievement: "National drama and music festival honours and consistently strong showcases.",
  },
  {
    slug: "agriculture",
    name: "Agriculture & Environment",
    icon: "ri-plant-line",
    tagline: "Sustainable food, land and environment",
    description:
      "Agriculture combines science, practical skill and environmental stewardship, connecting classroom biology to real-world sustainability.",
    overview:
      "Agriculture at Mangu combines science, practical skill and environmental stewardship. Students work on real plots, nurseries and conservation projects, learning how food is grown and how land and energy can be managed sustainably. The department connects classroom biology to the field, and its clean-energy and tree-planting initiatives make environmental responsibility something students do, not just discuss.",
    subjects: ["Agriculture", "Environmental Studies", "Project Practicals"],
    facilities: [
      "School farm plots and greenhouse",
      "Tree nursery and conservation sites",
      "Environmental project sites",
    ],
    activities: ["School farm projects", "Tree planting drives", "Clean energy initiatives"],
    careers: ["Agribusiness", "Agricultural science", "Environmental management", "Horticulture", "Conservation"],
    achievement: "Active clean-energy and conservation projects on campus.",
  },
];

export const subjectGuides: SubjectGuide[] = [
  {
    name: "Biology",
    icon: "ri-microscope-line",
    overview:
      "From the structure of a single cell to the balance of an entire ecosystem, Biology explores what it means to be alive. Learners master genetics, human physiology, plant biology and conservation through microscopy, dissection and guided fieldwork, building the foundation for medicine and the life sciences.",
    topics: ["Cell biology & genetics", "Human anatomy & physiology", "Ecology & conservation", "Plant & animal physiology"],
    careers: "Medicine, nursing, biotechnology, veterinary science and environmental research.",
  },
  {
    name: "Chemistry",
    icon: "ri-flask-line",
    overview:
      "Chemistry explains the matter of everyday life — the air we breathe, the food we eat and the medicines that keep us well. Students move from atomic structure and bonding to organic chemistry and quantitative analysis, learning the rigour of the laboratory and the reasoning behind every reaction.",
    topics: ["Atomic structure & bonding", "Acids, bases & salts", "Organic chemistry", "Quantitative analysis & titration"],
    careers: "Pharmacy, chemical engineering, food science, laboratory science and materials research.",
  },
  {
    name: "Physics",
    icon: "ri-planet-line",
    overview:
      "Physics is the study of how the universe works, from the motion of a falling ball to the electricity that powers a city. Through experiment and quantitative analysis, students investigate mechanics, waves, electricity and modern physics, then apply the ideas to engineering challenges they can actually build.",
    topics: ["Mechanics & motion", "Electricity & magnetism", "Waves & optics", "Heat & modern physics"],
    careers: "Engineering, electronics, aviation, energy and meteorological research.",
  },
  {
    name: "Mathematics",
    icon: "ri-function-line",
    overview:
      "Mathematics is the shared language of every science and an intellectual discipline in its own right. Students build fluency in algebra, calculus, trigonometry and statistics, sharpening the logical reasoning that makes demanding STEM and finance courses possible — and rewarding strong performers with Further Mathematics.",
    topics: ["Algebra & calculus", "Trigonometry & geometry", "Statistics & probability", "Mathematical reasoning"],
    careers: "Engineering, actuarial science, data science, finance and computing.",
  },
];

export const sciencesIntro = {
  eyebrow: "Sciences & STEM",
  headline: "Where curiosity becomes discovery",
  body: "The sciences sit at the centre of academic life at Mangu. Across well-equipped laboratories and a research-driven culture, students do real science — hypothesising, experimenting, measuring and drawing conclusions — supported by subject specialists who know how to stretch every learner. Here is what each science offers.",
  facilities: [
    { icon: "ri-flask-line", label: "Laboratories", value: "Biology, Chemistry & Physics labs" },
    { icon: "ri-microscope-line", label: "Practical Work", value: "Regular hands-on experiments" },
    { icon: "ri-trophy-line", label: "Competitions", value: "Science congress & olympiads" },
    { icon: "ri-group-line", label: "Clubs", value: "Medical, science & robotics clubs" },
  ],
};

export const academicsIntro = {
  headline: "A curriculum designed for depth, curiosity and character",
  body: "Mangu High School offers a broad, rigorous secondary curriculum grounded in the Kenyan national syllabus and enriched by competition work, research projects, technology and co-curricular excellence. Our learners are taught to think independently, work hard and lead with integrity.",
};

export type ChoiceStep = {
  number: string;
  title: string;
  description: string;
};

export type PathwayTrack = {
  slug: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  core: string[];
  electives: string[];
  bestFor: string;
  pathways: string;
};

export const choiceSteps: ChoiceStep[] = [
  {
    number: "01",
    title: "Broad foundation (Forms 1–2)",
    description:
      "Every student studies the full core — languages, mathematics, the sciences, humanities, business, agriculture and computer studies — so no door is closed early.",
  },
  {
    number: "02",
    title: "Guidance & discovery (Form 2)",
    description:
      "Careers clinics, subject fairs, aptitude conversations and teacher mentors help each learner understand their strengths, interests and the opportunities they open.",
  },
  {
    number: "03",
    title: "Track selection (Form 3 entry)",
    description:
      "Students choose their elective combination — science, arts & humanities, or business & technical — with the careers office and parents involved in the decision.",
  },
  {
    number: "04",
    title: "Specialise (Forms 3–4)",
    description:
      "Learners focus on their chosen subjects toward KCSE, supported by revision clinics, practical work and individual mentoring all the way to the examination.",
  },
];

export const pathwayTracks: PathwayTrack[] = [
  {
    slug: "science",
    name: "Science Track",
    icon: "ri-flask-line",
    tagline: "For the curious problem-solver",
    description:
      "The most demanding route through the sciences, built for students aiming at medicine, engineering and research.",
    core: ["Mathematics", "English", "Kiswahili", "Biology", "Chemistry", "Physics"],
    electives: ["Further Mathematics", "Computer Studies", "Agriculture"],
    bestFor: "Students who enjoy experiment, analysis and solving problems from first principles.",
    pathways: "Medicine · Engineering · Pharmacy · Biotechnology · Architecture · Data science",
  },
  {
    slug: "arts",
    name: "Arts & Humanities Track",
    icon: "ri-book-2-line",
    tagline: "For the reader, writer and thinker",
    description:
      "A language- and humanities-rich route for students drawn to people, ideas, culture and public life.",
    core: ["Mathematics", "English", "Kiswahili", "History & Government", "Geography", "CRE"],
    electives: ["Literature in English", "Music", "Art & Design", "Drama"],
    bestFor: "Students who argue well, read widely and care about understanding people and society.",
    pathways: "Law · Journalism · Teaching · Diplomacy · Media · Public relations",
  },
  {
    slug: "business",
    name: "Business & Technical Track",
    icon: "ri-briefcase-4-line",
    tagline: "For the builder and the enterprising",
    description:
      "A practical, career-facing route that blends commerce, technology and hands-on technical skill.",
    core: ["Mathematics", "English", "Kiswahili", "Business Studies", "Agriculture", "Computer Studies"],
    electives: ["Accounting", "Technical Drawing", "Building Construction", "Enterprise Studies"],
    bestFor: "Students who like practical work, enterprise and seeing ideas turn into real results.",
    pathways: "Accounting · Entrepreneurship · Quantity surveying · Banking · Construction · IT management",
  },
];

export const subjectChoicesIntro = {
  eyebrow: "Subject Choices & Pathways",
  headline: "Choosing subjects with clarity, not guesswork",
  body: "By the time our students specialise, they are ready. A structured programme of guidance — from the broad foundation years to the final Forms — helps every learner choose the elective combination that fits their strengths, their interests and where they want to go.",
  note: "Combinations are not set in stone. The careers office works with each student, their parents and the head of department to confirm a pathway that keeps the right doors open — including flexible, mixed combinations for students with wide-ranging ambitions.",
};