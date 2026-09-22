export type ClubCategory =
  | "Academic & Intellectual"
  | "Arts & Creative"
  | "Service & Citizenship"
  | "Faith & Values"
  | "Sports & Adventure";

export type ClubEntry = {
  id: string;
  name: string;
  category: ClubCategory;
  icon: string;
  summary: string;
  activities: string[];
};

export type FeaturedProgramme = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  icon: string;
  points: string[];
};

export const clubCategories: ClubCategory[] = [
  "Academic & Intellectual",
  "Arts & Creative",
  "Service & Citizenship",
  "Faith & Values",
  "Sports & Adventure",
];

/** Clubs and societies offered at Mangu High School, grouped by character of activity. */
export const clubDirectory: ClubEntry[] = [
  {
    id: "debate",
    name: "Debate Society",
    category: "Academic & Intellectual",
    icon: "ri-chat-quote-line",
    summary: "Competitive debating and confident public speaking.",
    activities: ["Weekly floor debates", "Inter-school leagues", "National championships", "Public speaking clinics"],
  },
  {
    id: "law",
    name: "Law Club",
    category: "Academic & Intellectual",
    icon: "ri-scales-3-line",
    summary: "Moot court, legal reasoning and civic awareness.",
    activities: ["Mock trials and moot court", "Legal research", "Guest sessions with practitioners", "Civic education"],
  },
  {
    id: "chess",
    name: "Chess Club",
    category: "Academic & Intellectual",
    icon: "ri-focus-2-line",
    summary: "Strategy, patience and tournament play — a game of the mind.",
    activities: ["Casual and ranked internal games", "National youth championships", "Coaching for beginners", "Blitz tournaments"],
  },
  {
    id: "science",
    name: "Science Club",
    category: "Academic & Intellectual",
    icon: "ri-flask-line",
    summary: "Hands-on experiments, innovation and science fairs.",
    activities: ["Practical investigations", "Science & engineering fair projects", "Visits and demonstrations", "STEM challenges"],
  },
  {
    id: "coding",
    name: "Computer Science (CS First) Club",
    category: "Academic & Intellectual",
    icon: "ri-code-s-slash-line",
    summary: "Coding, robotics and creative computing.",
    activities: ["Programming projects", "Robotics and electronics", "Coding challenges", "Web and app building"],
  },
  {
    id: "history",
    name: "History Club",
    category: "Academic & Intellectual",
    icon: "ri-book-2-line",
    summary: "Exploring heritage, national history and current affairs.",
    activities: ["Research projects", "Heritage trips", "Current affairs discussions", "Essay competitions"],
  },
  {
    id: "drama",
    name: "Drama & Theatre",
    category: "Arts & Creative",
    icon: "ri-movie-2-line",
    summary: "Stagecraft, scripted drama and festival performance.",
    activities: ["Original productions", "Drama festival entries", "Stage, sound and costume craft", "Evening showcases"],
  },
  {
    id: "music",
    name: "Music & Choir",
    category: "Arts & Creative",
    icon: "ri-mic-2-line",
    summary: "Choral music, instruments and festival performance.",
    activities: ["Chapel and concert choir", "Instrumental ensembles", "Music festivals", "School events and ceremonies"],
  },
  {
    id: "journalism",
    name: "Journalism & Media Club",
    category: "Arts & Creative",
    icon: "ri-newspaper-line",
    summary: "Reporting, the school magazine and media production.",
    activities: ["School magazine and newsletter", "Reporting and photography", "Interviews and features", "Media ethics"],
  },
  {
    id: "art",
    name: "Art & Design Club",
    category: "Arts & Creative",
    icon: "ri-palette-line",
    summary: "Drawing, painting and design for the school community.",
    activities: ["Studio sessions", "Exhibitions and displays", "Set and poster design", "Creative competitions"],
  },
  {
    id: "redcross",
    name: "Red Cross Club",
    category: "Service & Citizenship",
    icon: "ri-first-aid-kit-line",
    summary: "First aid, health awareness and humanitarian service.",
    activities: ["First-aid training", "Health and wellness drives", "Community outreach", "Disaster preparedness"],
  },
  {
    id: "scouts",
    name: "Scouts",
    category: "Service & Citizenship",
    icon: "ri-compass-3-line",
    summary: "Outdoor skills, teamwork and service to the community.",
    activities: ["Campcraft and hiking", "Community service", "Scouting badges and drills", "Leadership training"],
  },
  {
    id: "interact",
    name: "Charity & Interact Club",
    category: "Service & Citizenship",
    icon: "ri-hand-heart-line",
    summary: "Fundraising and service for those in need.",
    activities: ["Charity drives", "Visits to children's homes", "Fundraising events", "Community support projects"],
  },
  {
    id: "environment",
    name: "Environmental Club",
    category: "Service & Citizenship",
    icon: "ri-leaf-line",
    summary: "Conservation, clean energy and tree planting.",
    activities: ["Tree planting", "Waste and recycling drives", "Clean energy awareness", "Campus greening"],
  },
  {
    id: "farmers",
    name: "Young Farmers Club",
    category: "Service & Citizenship",
    icon: "ri-plant-line",
    summary: "Agriculture, agribusiness and practical farming skills.",
    activities: ["School farm projects", "Kitchen and vegetable gardens", "Agribusiness learning", "Agricultural shows"],
  },
  {
    id: "christian-union",
    name: "Christian Union",
    category: "Faith & Values",
    icon: "ri-heart-3-line",
    summary: "Fellowship, worship and Christian formation.",
    activities: ["Weekly fellowship", "Bible study groups", "Worship and praise", "Peer mentorship"],
  },
  {
    id: "catholic-action",
    name: "Catholic Action (YCS)",
    category: "Faith & Values",
    icon: "ri-heart-2-line",
    summary: "Catholic youth fellowship and service in the school.",
    activities: ["Liturgy and prayer", "Chapel service", "Faith formation", "Charitable works"],
  },
  {
    id: "presidents-award",
    name: "President's Award Scheme",
    category: "Sports & Adventure",
    icon: "ri-medal-line",
    summary: "Service, skills and adventure towards a national award.",
    activities: ["Community service", "Skills and hobbies", "Physical recreation", "Expeditions and journeys"],
  },
  {
    id: "handball",
    name: "Handball Club",
    category: "Sports & Adventure",
    icon: "ri-hand-heart-line",
    summary: "A proud national-games tradition built on grit.",
    activities: ["Daily training", "League and knockout fixtures", "County and national games", "Junior development"],
  },
  {
    id: "rugby",
    name: "Rugby Club",
    category: "Sports & Adventure",
    icon: "ri-shield-cross-line",
    summary: "Strength, teamwork and school spirit on the field.",
    activities: ["Strength and skills training", "Friendly and league matches", "Sevens tournaments", "Player mentorship"],
  },
  {
    id: "athletics",
    name: "Athletics & Cross Country",
    category: "Sports & Adventure",
    icon: "ri-run-line",
    summary: "Track, field and endurance across all age groups.",
    activities: ["Track and field training", "Cross-country meets", "Inter-house championship", "Regional competitions"],
  },
];

export const featuredProgrammes: FeaturedProgramme[] = [
  {
    id: "presidents-award",
    title: "The President's Award Scheme",
    tagline: "Character built through service and adventure",
    description:
      "One of the school's proudest traditions. Participants commit over months and years to service, skills, physical recreation and adventurous journeys, earning recognition at bronze, silver and gold levels.",
    image:
      "https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/uploads/1533885900086A3293%5B1%5D.jpg",
    icon: "ri-medal-line",
    points: ["Community service", "Skills & hobbies", "Expeditions", "National recognition"],
  },
  {
    id: "sports",
    title: "Sport & Athletics",
    tagline: "Discipline, stamina and teamwork",
    description:
      "Mangu students take real pride in the field. Handball, rugby, athletics and more give learners the chance to compete at county and national level while building fitness and camaraderie.",
    image:
      "https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/uploads/1533908715086A3346%5B1%5D.jpg",
    icon: "ri-trophy-line",
    points: ["National-games tradition", "Coaching & mentorship", "Inter-house rivalry", "Team spirit"],
  },
  {
    id: "innovation",
    title: "Innovation & Technology",
    tagline: "Coding, robotics and creative computing",
    description:
      "Through the CS First coding club and the school's ICT facilities, students move from using technology to building with it — programming, robotics and digital projects across the curriculum.",
    image:
      "https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/uploads/1533908748086A3371%5B1%5D.jpg",
    icon: "ri-cpu-line",
    points: ["Programming projects", "Robotics & electronics", "Digital literacy", "Competitions"],
  },
  {
    id: "public-speaking",
    title: "Debate, Moot & Public Speaking",
    tagline: "Finding your voice and using it well",
    description:
      "The Debate Society and Law Club train students in argument, analysis and confident speech. They represent the school in leagues and national championships, and grow into articulate young leaders.",
    image:
      "https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/uploads/1533886337JPG_7095%281%29.JPG",
    icon: "ri-mic-line",
    points: ["Competitive debating", "Moot court", "Critical thinking", "Leadership"],
  },
];

export const clubStats = [
  { value: 30, suffix: "+", label: "Clubs & Societies" },
  { value: 5, suffix: "", label: "Activity Categories" },
  { value: 15, suffix: "+", label: "Sports & Adventure Areas" },
  { value: 100, suffix: "%", label: "Learners Encouraged to Join" },
];

export const clubRhythm = [
  {
    icon: "ri-calendar-schedule-line",
    title: "Weekly Club Period",
    description:
      "Every club meets on a protected weekly afternoon, with a teacher patron guiding activities, projects and preparation for competitions.",
  },
  {
    icon: "ri-user-star-line",
    title: "Patron & Student Leadership",
    description:
      "Each society is led by an elected student chairperson and committee, mentored by a member of staff who keeps the club focused and thriving.",
  },
  {
    icon: "ri-trophy-line",
    title: "Competitions & Festivals",
    description:
      "Clubs represent Mangu at inter-school leagues, drama and music festivals, science fairs and national championships throughout the year.",
  },
  {
    icon: "ri-community-line",
    title: "Service to Others",
    description:
      "Service clubs connect classroom values with real need — supporting community projects, health drives and environmental initiatives beyond the school gate.",
  },
];