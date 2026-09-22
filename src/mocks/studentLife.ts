export type Highlight = {
  id: string;
  title: string;
  description: string;
  image: string;
  meta: string;
};

export type Club = {
  name: string;
  icon: string;
  description: string;
};

export type Sport = {
  name: string;
  icon: string;
  description: string;
};

export const studentLifeHighlights: Highlight[] = [
  {
    id: "boarding",
    title: "Boarding Life",
    description:
      "Spacious, well-supervised dormitories where brotherhood, routine and responsibility shape character and independence.",
    meta: "Home away from home",
    image:
      "https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/mangu-high-school-1637054156.webp",
  },
  {
    id: "clubs",
    title: "Clubs & Societies",
    description:
      "From law and debate to chess, journalism and science clubs, students take a breath from the books and grow their talents.",
    meta: "30+ active societies",
    image:
      "https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/mangu-high-school-1637057788.webp",
  },
  {
    id: "leadership",
    title: "Leadership & Service",
    description:
      "Prefects, house captains and club leaders are entrusted with real responsibility and mentored to serve with humility.",
    meta: "Student-led governance",
    image:
      "https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/mangu-high-school-1637059421.webp",
  },
  {
    id: "service",
    title: "Community & Faith",
    description:
      "Chapel life, outreach and the President's Award Scheme connect learning to service, adventure and compassion.",
    meta: "Faith in action",
    image:
      "https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/uploads/1533885900086A3293%5B1%5D.jpg",
  },
];

export const clubs: Club[] = [
  { name: "Debate Society", icon: "ri-chat-quote-line", description: "Competitive debating and public speaking." },
  { name: "Law Club", icon: "ri-scales-3-line", description: "Moot court, legal reasoning and civic rights." },
  { name: "Chess Club", icon: "ri-layout-grid-line", description: "Strategy, patience and tournament play." },
  { name: "Science Club", icon: "ri-flask-line", description: "Experiments, science fairs and innovation." },
  { name: "Journalism & Media", icon: "ri-newspaper-line", description: "School magazine, radio and reporting." },
  { name: "Environmental Club", icon: "ri-leaf-line", description: "Conservation, clean energy and tree planting." },
  { name: "Music & Choir", icon: "ri-mic-2-line", description: "Choral music and festival performance." },
  { name: "Drama & Theatre", icon: "ri-movie-2-line", description: "Stagecraft, scripted drama and festivals." },
];

export const sports: Sport[] = [
  { name: "Athletics", icon: "ri-run-line", description: "Track and field excellence across all age groups." },
  { name: "Handball", icon: "ri-hand-heart-line", description: "A proud national-games tradition." },
  { name: "Rugby", icon: "ri-shield-cross-line", description: "Strength, teamwork and school spirit." },
  { name: "Football", icon: "ri-football-line", description: "The beautiful game, played with passion." },
  { name: "Basketball", icon: "ri-basketball-line", description: "Fast, skilled and fiercely competitive." },
  { name: "Volleyball", icon: "ri-trophy-line", description: "Coordination, timing and team play." },
  { name: "Swimming", icon: "ri-drop-line", description: "Technique and endurance in the pool." },
  { name: "Racket Sports", icon: "ri-ping-pong-line", description: "Badminton, table tennis and more." },
];

export const campusFacilities = [
  {
    title: "Historic Administration Block",
    description: "The heart of the school since its earliest years, housing leadership and student services.",
    icon: "ri-building-2-line",
  },
  {
    title: "Science Laboratories",
    description: "Fully equipped physics, chemistry and biology laboratories for practical investigation.",
    icon: "ri-flask-line",
  },
  {
    title: "Library & Resource Centre",
    description: "A quiet, well-stocked space for reading, research and independent study.",
    icon: "ri-book-shelf-line",
  },
  {
    title: "ICT & Innovation Hub",
    description: "Modern computing facilities supporting coding, robotics and digital literacy.",
    icon: "ri-computer-line",
  },
  {
    title: "Boarding Houses",
    description: "Spacious, supervised dormitories that are a true home away from home.",
    icon: "ri-hotel-bed-line",
  },
  {
    title: "Dining Hall",
    description: "A central hall serving balanced meals and hosting community gatherings.",
    icon: "ri-restaurant-2-line",
  },
  {
    title: "Chapel",
    description: "A place of worship and reflection at the spiritual centre of school life.",
    icon: "ri-building-4-line",
  },
  {
    title: "Sports Grounds",
    description: "Fields and courts for athletics, handball, rugby, football and more.",
    icon: "ri-basketball-line",
  },
];

export const alumniSpotlight = [
  {
    name: "H.E. Mwai Kibaki",
    field: "Statesmanship",
    note: "Former President of the Republic of Kenya and among the school's most distinguished alumni.",
  },
  {
    name: "Leaders in Science",
    field: "Research & Medicine",
    note: "Mangu alumni serve in hospitals, laboratories and universities across the world.",
  },
  {
    name: "Leaders in Enterprise",
    field: "Business & Industry",
    note: "Former students lead companies and create opportunities across the Kenyan economy.",
  },
];